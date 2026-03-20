



import { prisma } from "../config/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signAccess = (id: number) =>
  jwt.sign({ id }, process.env.ACCESS_SECRET!, { expiresIn: "15m" });

const signRefresh = (id: number) =>
  jwt.sign({ id }, process.env.REFRESH_SECRET!, { expiresIn: "7d" });

export const registerUser = async (email: string, password: string) => {
  if (!email || !password) throw new Error("All fields required");

  const hash = await bcrypt.hash(password, 10);
  return prisma.user.create({ data: { email, password: hash } });
};

export const loginUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("User not found");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error("Invalid credentials");

  const accessToken = signAccess(user.id);
  const refreshToken = signRefresh(user.id);

  await prisma.refreshToken.create({
    data: { token: refreshToken, userId: user.id },
  });

  return { accessToken, refreshToken };
};

export const refreshTokenService = async (token: string) => {
  const exists = await prisma.refreshToken.findFirst({ where: { token } });
  if (!exists) throw new Error("Invalid token");

  const decoded: any = jwt.verify(token, process.env.REFRESH_SECRET!);
  return signAccess(decoded.id);
};

export const logoutService = async (token: string) => {
  await prisma.refreshToken.deleteMany({ where: { token } });
};
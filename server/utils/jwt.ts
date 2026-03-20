import jwt from "jsonwebtoken";

export const signAccess = (id: number) =>
  jwt.sign({ id }, process.env.ACCESS_SECRET!, { expiresIn: "15m" });

export const signRefresh = (id: number) =>
  jwt.sign({ id }, process.env.REFRESH_SECRET!, { expiresIn: "7d" });
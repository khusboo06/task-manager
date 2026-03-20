

import { Request, Response } from "express";

import {
  registerUser,
  loginUser,
  refreshTokenService,
  logoutService,
} from "../services/auth.service";

export const register = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(req.body.email, req.body.password);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const tokens = await loginUser(req.body.email, req.body.password);
    res.json(tokens);
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
};

export const refresh = async (req: Request, res: Response) => {
  try {
    const accessToken = await refreshTokenService(req.body.token);
    res.json({ accessToken });
  } catch {
    res.status(403).json({ message: "Invalid token" });
  }
};

export const logout = async (req: Request, res: Response) => {
  await logoutService(req.body.token);
  res.json({ message: "Logged out" });
};
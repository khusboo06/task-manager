
import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AuthRequest } from "../types/express";

export const protect = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded: any = jwt.verify(
      token,
      process.env.ACCESS_SECRET!
    );

    req.user = { id: decoded.id }; 

    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};
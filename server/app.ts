import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import taskRoutes from "./routes/task.routes";

const app = express();

// When mounted behind Next.js API routes, requests come in with a `/api` prefix
// (e.g. `/api/auth/login`). Strip it so the existing Express routes keep working.
app.use((req, _res, next) => {
  if (req.url === "/api") req.url = "/";
  else if (req.url.startsWith("/api/")) req.url = req.url.slice(4);
  next();
});

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);

// Last-resort error handler for async route failures.
app.use((err: any, _req: any, res: any, _next: any) => {
  // eslint-disable-next-line no-console
  console.error("[express] error:", err);
  res.status(500).json({ message: "Internal Server Error" });
});

export default app;
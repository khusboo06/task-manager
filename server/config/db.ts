import { PrismaClient } from "@prisma/client";

// Prisma is initialized at module load time. If Vercel env vars (especially
// DATABASE_URL) are missing, this would throw and cause a generic 500.
// Logging here makes Vercel runtime failures visible in logs.
export const prisma = (() => {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error("Missing DATABASE_URL");
    }
    return new PrismaClient();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[prisma] init failed:", err);
    throw err;
  }
})();
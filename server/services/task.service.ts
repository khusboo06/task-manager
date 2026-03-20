
import { prisma } from "../config/db";

export const getTasksService = async (userId: number, query: any) => {
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 5;
  const search = query.search || "";
  const status = query.status;

  return prisma.task.findMany({
    where: {
  userId,
  ...(search
    ? {
        title: {
          contains: search,
          mode: "insensitive",
        },
      }
    : {}),
  ...(status && { completed: status === "true" }),
},
    skip: (page - 1) * limit,
    take: limit,
    orderBy: { createdAt: "desc" },
  });
};

export const createTaskService = (
  userId: number,
  title: string,
  deadline?: string
) =>
  prisma.task.create({
    data: {
      title,
      deadline: deadline ? new Date(deadline) : null,
      userId,
    },
  });

export const updateTaskService = async (
  id: number,
  userId: number,
  data: any
) => {
  const task = await prisma.task.findFirst({
    where: { id, userId },
  });

  if (!task) throw new Error("Task not found");

  return prisma.task.update({
    where: { id }, 
    data,
  });
};

export const toggleTaskService = async (id: number, userId: number) => {
  const task = await prisma.task.findFirst({ where: { id, userId } });
  if (!task) throw new Error("Task not found");

  return prisma.task.update({
    where: { id },
    data: { completed: !task.completed },
  });
};

export const deleteTaskService = async (
  id: number,
  userId: number
) => {
  const task = await prisma.task.findFirst({
    where: { id, userId },
  });

  if (!task) throw new Error("Task not found");

  return prisma.task.delete({
    where: { id }, 
  });
};
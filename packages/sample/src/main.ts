import { PrismaClient } from ".prisma/client";

const bootstrap = async (): Promise<void> => {
  const prisma = new PrismaClient();

  const users = await prisma.user.findMany();

  console.log("Users:", users);
};

bootstrap();

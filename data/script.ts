const PrismaClient = require("@prisma/client").PrismaClient;
const prisma = new PrismaClient();

export async function main() {
  const Tasks = await prisma.tasks.findMany();

  return Tasks;
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

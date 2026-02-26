import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const tenant = await prisma.tenant.upsert({
    where: { id: "demo-tenant" },
    update: {},
    create: {
      id: "demo-tenant",
      name: "CSAI Demo Tenant",
      users: {
        create: {
          id: "demo-admin",
          email: "admin@csai.local",
          name: "Demo Admin",
          role: UserRole.ADMIN,
        },
      },
    },
  });

  console.log(`Seeded tenant ${tenant.name}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

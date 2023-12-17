const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Ecommerce" },
        { name: "Digital Marketing" },
        { name: "Graphic Designing" },
        { name: "Social Media Management" },
        { name: "Digital Agency" },
        { name: "Computer Science" },
        { name: "Photography/Videography" },
      ]
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, model, mileage, vin } = req.body;

    try {
      const car = await prisma.car.create({
        data: {
          firstName,
          lastName,
          model,
          mileage,
          vin,
        },
      });
      res.status(201).json(car);
    } catch (error) {
      res.status(500).json({ error: "Error creating the entry." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

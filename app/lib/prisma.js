import Prisma from "@prisma/client";

import { isLocal } from "../utils/helpers.js";

const { PrismaClient } = Prisma;
console.log({ PrismaClient });

let prisma;

if (!isLocal) {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }

  prisma = global.prisma;
}

export default prisma;

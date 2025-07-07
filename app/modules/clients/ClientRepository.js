/**
 * Класс для взаимодействия с базой данных для модуля clients
 * содержит методы для работы с моделью Clients в БД
 */
export default class ClientRepository {
  constructor({ prisma }) {
    this.prisma = prisma;
  }

  async getAll() {
    return this.prisma.clients.findMany();
  }

  async create(uid, clientData) {
    await this.prisma.clients.upsert({
      where: {
        uid,
      },
      update: {
        ...clientData,
      },
      create: {
        ...clientData,
      },
    });
  }

  async update(uid, clientData) {
    await this.prisma.upsert({
      where: uid,
      data: clientData,
    });
  }
}

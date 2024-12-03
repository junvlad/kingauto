import ClientRepository from "./ClientRepository";
/**
 * Обработчик для действий с модулем клиентов (создание обновление удаление вывод)
 * Так же в данный слой могут импортироваться данные из других модулей касающиеся бизнес логики приложения
 */
export default class ClientUsecase {
  constructor({ prisma }) {
    this.repository = new ClientRepository({ prisma });
  }

  // обработчик для страницы списка клиентов
  async search(data) {
    const clients = await this.repository.getAll();
    return {};
  }

  // Обработчик для страницф клиента
  async edit(data) {
    return {};
  }

}

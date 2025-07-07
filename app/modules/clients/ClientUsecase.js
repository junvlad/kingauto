import { v4 as uuidv4 } from 'uuid';
import ClientRepository from './ClientRepository';
/**
 * Обработчик для действий с модулем клиентов (создание обновление удаление вывод)
 * Так же в данный слой могут импортироваться данные из других модулей касающиеся бизнес логики приложения
 */
export default class ClientUsecase {
  constructor({ prisma }) {
    this.repository = new ClientRepository({ prisma });
  }

  // обработчик для страницы списка клиентов
  /**
   *
   * @param {Object} data параметры для поиска
   * @returns {Array}
   */
  async search(data) {
    const clients = await this.repository.getAll();
    return { clients };
  }

  async update(uid, clientData) {
    await this.repository.update(uid, clientData);
  }
  /**
   *
   * @param {Object} clientData
   * @returns {Array}
   */
  async create(clientData) {
    const uid = uuidv4();
    await this.repository.upsert({ uid, clientData });
  }
}

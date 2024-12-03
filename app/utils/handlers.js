import prisma from "../lib/prisma";

/**
 * Функция обработчик для страницы
 * @param {Class} Usecase класс обработчик для страницы
 * @param {string} method метод в классе обработчика
 * @returns {Object} данные для страницы полученные с бэка
 */
export const handlePage = (Usecase, method) => {
  const handler = new Usecase({ prisma })
  return handler[method]();

}

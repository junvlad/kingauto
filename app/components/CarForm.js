'use client';
import { useState } from 'react';
import Api from '../lib/Api';
const api = new Api();

export const CarForm = ({ data }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    model: '',
    mileage: '',
    vin: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    api
      .post('/api/clients', formData)
      .then((res) => {
        console.log('norm', { res });
      })
      .catch((err) => {
        // добавить обработчик ошибок на клиент
        console.log('err', { err });
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="Имя клиента"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Фамилия клиента"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="model"
        placeholder="Модель авто"
        value={formData.model}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="mileage"
        placeholder="Пробег авто"
        value={formData.mileage}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="vin"
        placeholder="VIN номер авто"
        value={formData.vin}
        onChange={handleChange}
        required
      />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default CarForm;


"use client"
import { useState } from "react";

export async function CarForm({ data }) {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    model: "",
    mileage: "",
    vin: "",
  });
  console.log({ data });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Car saved:", result);
      setFormData({
        firstName: "",
        lastName: "",
        model: "",
        mileage: "",
        vin: "",
      });
    } else {
      console.error("Failed to save car data.");
    }
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

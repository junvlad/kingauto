import { handlePage } from '@/app/utils/handlers';
import ClientUsecase from '@/app/modules/clients/ClientUsecase';
import CarForm from '@/app/components/CarForm';

export const Clients = async () => {
  const clients = await handlePage(ClientUsecase, 'search');

<<<<<<< HEAD
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/clients", {
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
=======
  return <CarForm data={clients} />;
>>>>>>> d6b86aebf2afa5324b3dd885387b9a271b0d43b6
};

export default Clients;

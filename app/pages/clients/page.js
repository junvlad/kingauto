
import { handlePage } from "@/app/utils/handlers";
import ClientUsecase from "@/app/modules/clients/ClientUsecase";
import CarForm from "@/app/components/CarForm";

export const Clients = async () => {
  const clients = await handlePage(ClientUsecase, 'search');

  return <CarForm data={clients} />;
};

export default Clients;

import api from "../Api/axios";

export const getProperties = async () => {
  const response = await api.get("/properties");
  return response.data;
};

export const getServiceCards = async () => {
  const response = await api.get("/serviceCards");
  return response.data;
};
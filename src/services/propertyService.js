import api from "../api/axios";

export const getProperties = async () => {
  const response = await api.get("/properties");
  return response.data;
};
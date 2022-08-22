import { api } from "../Services/api";

export function useFacts() {
  const factsAPI = async (params?: any) => {
    try {
      const response = await api.get("facts", { params });
      return response;
    } catch (error) {
      return error;
    }
  };

  const factAPI = async (params?: any) => {
    try {
      const response = await api.get("fact", { params });
      return response;
    } catch (error) {
      return error;
    }
  };
  const breedsAPI = async () => {
    try {
      const response = api.get("breeds");
      return response;
    } catch (error) {
      return error;
    }
  };

  return { factsAPI, factAPI, breedsAPI };
}

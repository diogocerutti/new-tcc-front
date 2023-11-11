import { api } from "..";

export async function getUserAddress(id_user) {
  try {
    const response = await api.get(`/user_address/${id_user}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

import { api } from "..";

export async function getUserAddress(id_user) {
  try {
    const response = await api.get(`/user_address/${id_user}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return null;
  }
}

export async function updateUserAddress(id_user, data) {
  try {
    const response = await api.put(`/user_address/${id_user}`, data);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("ERRO AO EDITAR ENDEREÇO: ", error);
  }
}

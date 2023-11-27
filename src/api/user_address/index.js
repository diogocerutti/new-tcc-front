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

export async function createUserAddress(id_user, data) {
  try {
    const response = await api.post(`/user_address/${id_user}`, data);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("ERRO AO CRIAR ENDEREÇO: ", error);
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
    return error;
  }
}

import { api } from "..";

export async function getUserCreditCard(id_user) {
  try {
    const response = await api.get(`/credit_card/${id_user}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return null;
  }
}

export async function createUserCreditCard(id_user, data) {
  try {
    const response = await api.post(`/credit_card/${id_user}`, data);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
}

export async function updateUserCreditCard(id_user, data) {
  try {
    const response = await api.put(`/credit_card/${id_user}`, data);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("ERRO AO EDITAR CARTÃO DE CRÉDITO: ", error);
    return error;
  }
}

export async function deleteUserCreditCard(id_user) {
  try {
    const response = await api.delete(`/credit_card/${id_user}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("ERRO AO EXCLUIR CARTÃO DE CRÉDITO: ", error.response.data.msg);
    return error;
  }
}

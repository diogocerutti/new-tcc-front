import { api } from "..";

export async function createOrder(id_user, data) {
  try {
    const response = await api.post(`/order/${id_user}`, data);
    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log("ERRO AO CRIAR PEDIDO: ", error);
  }
}

export async function updateOrder(id, data) {
  try {
    const response = await api.put(`/order/${id}`, data);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("ERRO AO EDITAR PEDIDO: ", error);
  }
}

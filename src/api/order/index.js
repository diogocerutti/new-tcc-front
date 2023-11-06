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

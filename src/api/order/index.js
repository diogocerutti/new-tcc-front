import { api } from "..";

export async function getAllOrders() {
  try {
    const response = await api.get("/order");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getUserOrders(id_user) {
  try {
    const response = await api.get(`/order/${id_user}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function createOrder(id_user, data) {
  try {
    const response = await api.post(`/order/${id_user}`, data);
    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log("ERRO AO CRIAR PEDIDO: ", error);
    return error;
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
    return error;
  }
}

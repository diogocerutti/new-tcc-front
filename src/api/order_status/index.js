import { api } from "..";

export async function getAllOrderStatus() {
  try {
    const response = await api.get("/order_status");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getOneOrderStatus(id) {
  try {
    const response = await api.get(`/order_status/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function createOrderStatus(data) {
  try {
    const response = await api.post("/order_status", data);
    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log("ERRO AO CRIAR STATUS DE PEDIDO: ", error);
  }
}

export async function updateOrderStatus(id, data) {
  try {
    const response = await api.put(`/order_status/${id}`, data);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("ERRO AO EDITAR STATUS DE PEDIDO: ", error);
    return error;
  }
}

export async function deleteOrderStatus(id) {
  try {
    const response = await api.delete(`/order_status/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("ERRO AO EXCLUIR STATUS DE PEDIDO: ", error.response.data.msg);
    return error;
  }
}

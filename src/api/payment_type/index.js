import { api } from "..";

export async function getAllPaymentTypes() {
  try {
    const response = await api.get("/payment_type");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getOnePaymentType(id) {
  try {
    const response = await api.get(`/payment_type/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function createPaymentType(data) {
  try {
    const response = await api.post("/payment_type", data);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("ERRO AO CRIAR TIPO DE PAGAMENTO: ", error);
    return error;
  }
}

export async function updatePaymentType(id, data) {
  try {
    const response = await api.put(`/payment_type/${id}`, data);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("ERRO AO EDITAR TIPO DE PAGAMENTO: ", error);
    return error;
  }
}

export async function deletePaymentType(id) {
  try {
    const response = await api.delete(`/payment_type/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("ERRO AO EXCLUIR TIPO DE PAGAMENTO: ", error.response.data.msg);
    return error;
  }
}

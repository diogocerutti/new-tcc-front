import { api } from "..";

export async function getAllMeasures() {
  try {
    const response = await api.get("/measure_type");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getOneMeasure(id) {
  try {
    const response = await api.get(`/measure_type/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function createMeasure(data) {
  try {
    const response = await api.post("/measure_type", data);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("ERRO AO CRIAR UNIDADE DE MEDIDA: ", error);
    return error;
  }
}

export async function updateMeasure(id, data) {
  try {
    const response = await api.put(`/measure_type/${id}`, data);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("ERRO AO EDITAR UNIDADE DE MEDIDA: ", error);
    return error;
  }
}

export async function deleteMeasure(id) {
  try {
    const response = await api.delete(`/measure_type/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("ERRO AO EXCLUIR UNIDADE DE MEDIDA: ", error.response.data.msg);
    return error;
  }
}

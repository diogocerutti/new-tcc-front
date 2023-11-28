import { api } from "..";

export async function getAllCategories() {
  try {
    const response = await api.get("/product_category");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getOneCategory(id) {
  try {
    const response = await api.get(`/product_category/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function createCategory(data) {
  try {
    const response = await api.post("/product_category", data);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("ERRO AO CRIAR CATEGORIA DE PRODUTO: ", error);
    return error;
  }
}

export async function updateCategory(id, data) {
  try {
    const response = await api.put(`/product_category/${id}`, data);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("ERRO AO EDITAR CATEGORIA DE PRODUTO: ", error);
    return error;
  }
}

export async function deleteCategory(id) {
  try {
    const response = await api.delete(`/product_category/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(
      "ERRO AO EXCLUIR CATEGORIA DE PRODUTO: ",
      error.response.data.msg
    );
    return error;
  }
}

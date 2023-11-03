import { api } from "..";

export async function getAllProducts() {
  try {
    const response = await api.get("/product");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function createProduct(data) {
  try {
    const response = await api.post("/product", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("ERRO AO CRIAR PRODUTO: ", error);
  }
}

export async function updateProduct(data) {
  try {
    const response = await api.put(`/product/${data.id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("ERRO AO EDITAR PRODUTO: ", error);
  }
}

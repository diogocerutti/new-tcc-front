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

export async function getOneProduct(id) {
  try {
    const response = await api.get(`/product/${id}`);
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

export async function updateProduct(data, id) {
  try {
    const response = await api.put(`/product/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("ERRO AO EDITAR PRODUTO: ", error);
  }
}

export async function deleteProduct(id) {
  try {
    const response = await api.delete(`/product/${id}`, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("ERRO AO EXCLUIR PRODUTO: ", error.response.data.msg);
  }
}

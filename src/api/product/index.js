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

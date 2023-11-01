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

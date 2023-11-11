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

import { API_URL } from "../constants";

export const getOrders = async () => {
  const response = await fetch(`${API_URL}/orders`).catch((error) => {
    alert("failed to fetch orders");
    return;
  });
  if (response) {
    const result = await response.json();
    return result;
  }
};

export const getOrder = async (id) => {
  const response = await fetch(`${API_URL}/order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  }).catch((error) => {
    alert("failed to fetch");
    return;
  });

  if (response) {
    const result = await response.json();
    return result;
  }
};

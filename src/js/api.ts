const API_URL = "https://v2.api.noroff.dev";

export async function getListings() {
  const response = await fetch(`${API_URL}/auction/listings`);

  const result = await response.json();
  return result.data;
}

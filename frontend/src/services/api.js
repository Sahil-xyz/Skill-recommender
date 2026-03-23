import axios from "axios";

export const fetchJobRecommendations = async (skills) => {
  try {
    const response = await axios.post("/recommend", { skills });
    return response.data;
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    throw new Error(
      error.response?.data?.error || "Failed to fetch recommendations."
    );
  }
};

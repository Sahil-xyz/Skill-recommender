import axios from "axios";

const API_URL = "https://skill-recommender-backend-3ord.onrender.com";

export const fetchJobRecommendations = async (skills) => {
  try {
    const response = await axios.post(`${API_URL}/recommend`, { skills });
    return response.data;
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    throw new Error(
      error.response?.data?.error || "Failed to fetch recommendations."
    );
  }
};

import axios from "axios";

// function for create listing
async function createListing(listingData) {
  try {
    const token = localStorage.getItem("authToken");
    const response = await axios.post(
      `${process.env.VUE_APP_API_URL}/listings`,
      listingData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error creating listing:", error);
    throw error;
  }
}

export default createListing;

import axios from "axios";

// function for create listing
export async function createListing(listingData) {
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

// function for edit listing
export async function updateListing(id, listingData) {
  try {
    const token = localStorage.getItem("authToken");
    await axios.put(
      `${process.env.VUE_APP_API_URL}/listings/${id}`,
      listingData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return { success: true };
  } catch (error) {
    console.error("Error updating listing:", error);
    throw error;
  }
}

//get list listings
export async function fetchUserListings() {
  try {
    const token = localStorage.getItem("authToken");
    const response = await axios.get(
      `${process.env.VUE_APP_API_URL}/listings`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching listings:", error);
    throw error; // Рекомендується "кидати" помилку, щоб виклик коду міг її обробити
  }
}

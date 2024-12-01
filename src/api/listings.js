import axiosInstance from './axiosInstans';

// function for create listing
export async function createListing(listingData) {
  try {
    const response = await axiosInstance.post('/listings', listingData);
    return response.data;
  } catch (error) {
    console.error('Error creating listing:', error);
    throw error;
  }
}

// function for edit listing
export async function updateListing(id, listingData) {
  try {
    await axiosInstance.put(`/listings/${id}`, listingData);
    return { success: true };
  } catch (error) {
    console.error('Error updating listing:', error);
    throw error;
  }
}

// get list of user listings
export async function fetchUserListings() {
  try {
    const response = await axiosInstance.get('/listings');
    return response.data;
  } catch (error) {
    console.error('Error fetching listings:', error);
    throw error;
  }
}

//delete listing of user
export async function deleteUserListing(id) {
  try {
    const response = await axiosInstance.delete('/listings/' + id);
    return response.data;
  } catch (error) {
    console.error('Error deleting listing:', error);
    throw error;
  }
}

import axios from "axios";

const API_URL = "http://localhost:5000/contacts";

export const getContacts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};


export const createContact = async (contact) => {
  try {
    const response = await axios.post('/api/contacts', contact); 
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new Error('Duplicate data found. Please enter unique contact details.');
    } else {
      throw new Error('An unexpected error occurred. Please try again.');
    }
  }
};

export const updateContact = async (id, contact) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, contact);
    return response.data;
  } catch (error) {
    console.error("Error updating contact:", error.response ? error.response.data : error.message);
    throw error; 
  }
};

export const deleteContact = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting contact:", error.response ? error.response.data : error.message);
    throw error;
  }
};

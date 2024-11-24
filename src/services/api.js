import axios from "axios";

const BASE_URL = "https://673736a9aafa2ef222330e54.mockapi.io";

export const fetchUsers = async () => {
  const response = await axios.get(`${BASE_URL}/users`);
  return response.data;
};

export const fetchCompanies = async () => {
  const response = await axios.get(`${BASE_URL}/company`);
  return response.data;
};

export const fetchCompanyDetails = async (companyId) => {
  try {
    const response = await axios.get(
      `https://673736a9aafa2ef222330e54.mockapi.io/company/${companyId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching company details:", error);
    throw error;
  }
};

export const fetchUserDetails = async (userId) => {
  const response = await axios.get(`${BASE_URL}/users/${userId}`);
  return response.data;
};


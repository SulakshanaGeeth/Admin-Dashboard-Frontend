import axios from 'axios';

const API_BASE_URL = 'http://localhost:8090/api/v1/public';

export const login = async (credentials) => {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    return response.data;
};
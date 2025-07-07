import axios from 'axios';
import { API_BASE_URL } from '../config/apiConfig';
export const getPermissions = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_BASE_URL}/api/permissions`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching permissions:', error);
        throw error;
    }
}
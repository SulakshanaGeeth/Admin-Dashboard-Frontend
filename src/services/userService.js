import axios from 'axios';
import { API_BASE_URL } from '../config/apiConfig';
export const createRole = async (roleName) => {
    try {
        const token = localStorage.getItem('token');
        const role = { name: roleName };
        const response = await axios.post(`${API_BASE_URL}/api/roles`, role,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error creating role:', error);
        throw error;
    }
}

export const getRoles = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_BASE_URL}/api/roles`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching roles:', error);
        throw error;
    }
}

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
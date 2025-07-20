
import axiosInstance from './axiosInstance';

export const getUsers = async () => {
    try {
        const response = await axiosInstance.get('/api/users');
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export const deleteUser = async (userId) => {
    try {
        const response = await axiosInstance.delete(`/api/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

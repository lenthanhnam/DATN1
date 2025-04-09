import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/api/';

const service = axios.create({
    baseURL: API_BASE_URL,
    headers: { 'Content-Type': 'application/json' }
});

export const getAllBranches = async () => {
    const response = await service.get('branch/list');
    return response.data;
};
// import { api } from '../services/api'
import { api } from '../services/api';

export const getPosts = async () => {
    try {
        const { data } = await api.get('/posts');
        return data || []; 
    } catch (error) {
        console.error("Erro ao buscar os posts: ", error);
        return [];  
    }
}

export const getPostBySlug = async (id) => {
    try {
        const { data } = await api.get(`/posts?select=${id}`);  
        return data || [];
    } catch (error) {
        console.error("Erro ao buscar o post: ", error);
        return null;  
    }
}
import axios from "axios";

let axiosCreate = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

const getUsers = () => axiosCreate.get('');
const getUserPosts = (id) => axiosCreate.get(`/${id}/posts`);

export {getUsers, getUserPosts}
import {axiosInstance} from "./axios.api";
import {urls} from "../constans";

const postApi = {
    getAll: () => axiosInstance(urls.post)
}

export {postApi}
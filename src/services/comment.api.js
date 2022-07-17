import {axiosInstance} from "./axios.api";
import {urls} from "../constans";

const commentApi = {
    getAll: () => axiosInstance(urls.comments)
}

export {commentApi}
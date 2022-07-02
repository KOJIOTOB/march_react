/*
const createComment = (object) => {
    return fetch('https://jsonplaceholder.typicode.com/comments',
        {
            method: 'POST',
            body: JSON.stringify(object),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => response.json())

}

export {createComment}*/

import axios from "axios";

const axiosCreat = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/comments`
});

const createComment = (post) => axiosCreat.post('', post);

export {createComment}

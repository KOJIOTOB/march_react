import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {getPosts} from "../../service";
import {PostComponent} from "./PostComponent";


function PostsComponent() {

    const {postId} = useParams();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts(postId).then(value => setPosts([{...value}]))
    },[postId]);

    return (
        <div>
            {
                posts.map(value => <PostComponent item={value} key={value.id}/>)
            }
        </div>
    )
}

export {PostsComponent}
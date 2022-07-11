import {useEffect, useState} from "react";
import {getComments} from "../../service";
import {CommentComponent} from "./CommentComponent";

function CommentsComponent() {

    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments().then(value => setComments([...value]))
    },[])

    return (
        <div>
            {
                comments.map(value => <CommentComponent item={value} key={value.id}/>)
            }
        </div>
    )
}

export {CommentsComponent}
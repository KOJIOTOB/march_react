import {CommentsComponent} from "../components";

import {Outlet} from "react-router-dom";

function CommentPage() {

    return (
        <div style={{background:"chocolate"}}>
            <Outlet/>
            <CommentsComponent/>
        </div>
    )
}

export {CommentPage}
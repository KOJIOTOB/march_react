import React, {Component} from 'react';
import {commentApi} from "../../services";
import {Comment} from "./Comment";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {comments: []}
    }

    componentDidMount() {
        commentApi.getAll().then(({data}) => this.setState({comments: data}))
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        );
    }
}

export {Comments};
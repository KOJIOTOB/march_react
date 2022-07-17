import React, {Component} from 'react';

import {postApi} from "../../services";
import {Post} from "./Post";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {posts: []}
    }
    componentDidMount() {
        postApi.getAll().then(({data}) => this.setState({posts: data}))
    }

    render() {
        return (
            <div>
                {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        );
    }
}

export {Posts};
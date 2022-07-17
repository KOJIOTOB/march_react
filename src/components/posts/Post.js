import React, {Component} from 'react';

class Post extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        const {id, title} = this.props.post;
        return (
            <div style={{background:'floralwhite', color:'cornflowerblue'}}>
                {id} - {title}
                <hr/>
            </div>
        );
    }
}

export {Post};
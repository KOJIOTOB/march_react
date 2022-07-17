import React, {Component} from 'react';

class Comment extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        const {id, name, email, body} = this.props.comment;
        return (
            <div style={{background:'lavenderblush'}}>
              <div style={{width:'50px', height:'50px', borderRadius:'50%',background:'floralwhite',
                  display:'flex',justifyContent:'center',alignItems:'center',fontSize:'20px'}}>{id}</div>
                <h2>{name}</h2>
                <h4>{email}</h4>
                <h3>{body}</h3>
                <hr/>
            </div>
        );
    }
}

export {Comment};
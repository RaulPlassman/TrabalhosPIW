import React, {Component} from 'react';


class Post extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.mensagem = props.mensagem;
    }
    render() { 
        return (
            <div className="posts">
                <div>{this.name}</div>
                <div>{this.mensagem}</div>
            </div>
        );  
    }
}
 
export default Post;
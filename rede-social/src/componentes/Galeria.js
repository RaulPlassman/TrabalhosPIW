import React, { Component } from 'react';
import Post from './Post';
import './Post.css'

class Galeria extends Component {
    
    render() { 
        return ( 
            <div className="post">
                <Post name="Meme1" mensagem="O que?"></Post>
                <Post name="Meme2" mensagem="ATENTA"></Post>
                <Post name="Meme3" mensagem="Esse negocio de namorar!"></Post>
                <Post name="Meme4" mensagem="Eu vou falar os fatos"></Post>
                <Post name="Meme5" mensagem="Acorda pra vida palhaça!"></Post>
                <Post name="Meme6" mensagem="Vai mentir pro diabo"></Post>
            </div>
         );
    }
}
 
export default Galeria;


       
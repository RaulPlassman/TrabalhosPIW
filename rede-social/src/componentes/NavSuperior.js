import React, { Component } from 'react';
import gret from './gret.png';
import './NavSuperior.css';

class NavSuperior extends Component {
    
    render() { 
        return ( 
            <nav className= "navsuperior">
                <div> <img src={gret} alt='g' className="img"></img></div>
                <div className= "links">
                    <div><a href="hh"> Linha do tempo </a></div>
                    <div><a href="hh"> Perfil </a></div>
                </div>
                <div className = "link3"><a href="gg"> Gretchen </a></div>
            </nav>
         );
    }
}
 
export default NavSuperior;
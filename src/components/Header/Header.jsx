import React, { Component } from 'react';
import './Header.css';
import { BrowserRouter as Router, Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <header className="header">
                <nav>
                    <Link to="drinks">
                    Drinks
                    </Link>

                    <Link to ="about">
                    Sobre nós
                    </Link>

                    <Link to ="/" class="logo">
                    Bons Drinks
                    </Link>

                    <Link to = "team">
                    Nossa Equipe
                    </Link>

                    <Link to="contact">
                    Contato
                    </Link>

                </nav>
                                    
            </header>
        )
    }
}

export default Header;
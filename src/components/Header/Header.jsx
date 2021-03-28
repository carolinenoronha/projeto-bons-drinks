import React, { Component } from 'react';
import './Header.css';
import { BrowserRouter as Router, Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <header>
                <nav>
                    <Router>
                    <Link to="/drinks">
                    <a className="options">Drinks</a>
                    </Link>

                    <Link to ="/about">
                    <a className="options">Sobre nós</a>
                    </Link>

                    <Link to ="/">
                    <a className="logo"> Bons Drinks</a>
                    </Link>

                    <Link to = "team">
                    <a className="options">Nosso time</a>
                    </Link>

                    <Link to = "contact">
                    <a className="options">Contato</a> 
                    </Link>

                    </Router>  
                </nav>
                                    
            </header>
        )
    }
}

export default Header;
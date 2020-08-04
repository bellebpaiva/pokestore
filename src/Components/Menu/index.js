import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './menu.css';
import Button from '../Button';


function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="PokeFire logo"/>
            </Link>



            <Button as={Link} className="ButtonLink" to="login">
                Entre ou Cadastre-se
            </Button>            
        </nav>
    );
}

export default Menu; 
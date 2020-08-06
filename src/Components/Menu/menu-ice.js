import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo-ice.png';
import './menu-ice.css';
import Button from '../Button';


function MenuIce() {
    return (
        <nav className="Menu-Ice">
            <Link to="/pokeice">
                <img className="Logo" src={Logo} alt="PokeIce logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="login">
                Entre ou Cadastre-se
            </Button>            
        </nav>
    );
}

export default MenuIce; 
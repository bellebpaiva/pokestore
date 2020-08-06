import React from 'react';
import "./card.css";
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const HandleClick = e => {
  const myelement = React.createElement('div', {}, e.target.parentElement.childNodes[1].innerHTML);
  ReactDOM.render(myelement, document.getElementById('itens-menu'));
}
const min = 1;
const max = 150;

const PokeCard = ({pokemon}) => {
    return (
      
      <div className="card text-center mx-auto" style={{"maxWidth" : "18rem", "maxHeight" : "18rem"}} key={pokemon.id}>       
        <div className="card-header2" style={{"text-transform": "uppercase"}} >  {pokemon.name}</div>        
        <div className="card-body">          
          <img src={pokemon.sprites['front_default']} />
         
          <h6 className="card-subtitle mb-2 text-muted" style={{"font-weight": "bold"}}>R$ {(min + Math.random() * (max - min)).toFixed(2)}</h6>   
          <button className="card-button-fire" onClick={HandleClick}>Comprar</button>  
        </div>
      </div>
      
    )
};

export default PokeCard
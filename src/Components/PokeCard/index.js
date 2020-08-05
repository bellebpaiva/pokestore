import React from 'react';
import "./card.css";
import styled from 'styled-components';



const PokeCard = ({pokemon}) => {
    return (
      
      <div className="card text-center mx-auto" style={{"maxWidth" : "18rem", "maxHeight" : "18rem"}} key={pokemon.id}>       
        <div className="card-header2" style={{"text-transform": "uppercase"}} >  {pokemon.name}</div>        
        <div className="card-body">          
          <img src={pokemon.sprites['front_default']} />
         
          <h6 className="card-subtitle mb-2 text-muted" style={{"font-weight": "bold"}}>R$ 199,00</h6>   
          <a href="#" className="card-button-fire"> COMPRAR </a>
        </div>
      </div>
      
    )
};

export default PokeCard
import React from 'react'
import styled from 'styled-components';


// const PokeCard = ({pokemon}) => {
//   return (
//     <div className="card text-center mx-auto" style={{"maxWidth" : "18rem"}} key={pokemon.id}>
//       <div className="card-header">
//         <img src={pokemon.sprites['front_default']}></img>
//         <h6 className="card-header" style={{"text-transform": "uppercase"}}> <b>  {pokemon.name}</b> </h6>
//         <h6 className="card-subtitle mb-2 text-muted" style={{"font-weight": "bold"}}>R$ 199,00</h6>   
//       </div>
//     </div>
//   )
// };

const PokeCard = ({pokemon}) => {
    return (
      <div className="card text-center mx-auto" style={{"maxWidth" : "18rem", "maxHeight" : "18rem"}} key={pokemon.id}>
        <div className="card-header" style={{"text-transform": "uppercase"}}><b>  {pokemon.name}</b></div>
        <div className="card-body">          
          <img src={pokemon.sprites['front_default']} />
          {/* <img src={pokemon.sprites['back_default']} />                        */}
          {/* <h6 className="card-subtitle mb-2 text-muted">Id: {pokemon.id}</h6> */}
          <h6 className="card-subtitle mb-2 text-muted" style={{"font-weight": "bold"}}>R$ 199,00</h6>   
          {/* <h6 className="card-subtitle mb-2 text-muted">Height: {pokemon.height}</h6>  
          <h6 className="card-subtitle mb-2 text-muted">Weight: {pokemon.weight}</h6>   */}
        </div>
      </div>
    )
};

export default PokeCard
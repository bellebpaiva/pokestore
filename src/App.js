import React from 'react';
import { Component } from 'react';
import "./App.css";
import PokeCard from './Components/PokeCard';
//import Menu from './Components/Menu';


class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      pokemonDetails: [],
      search: "",
      type: "",
      offset: 0,
      loadNumber: 50
    }
  }

  componentDidMount() {
    this.getMorePokemon();
  }

  getMorePokemon() {
    let url = "https://pokeapi.co/api/v2/pokemon?offset=" + this.state.offset + "&limit=" + this.state.loadNumber;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data) {
          this.setState({ pokemons: data.results }, () => {
            this.state.pokemons.map(pokemon => {
              fetch(pokemon.url)
                .then(response => response.json())
                .then(data => {
                  if (data) {
                    var temp = this.state.pokemonDetails
                    temp.push(data)
                    this.setState({ pokemonDetails: temp })
                  }
                })
                .catch(console.log)
            })
          })
        }
      })
      .catch(console.log)
  }

  buscaPesquisa = e => {
    this.setState({ search: e.target.value })
  }

  menuFogo = e => {
    this.setState({ type: "fire" })
  }

  render() {
    const { pokemonDetails } = this.state;


    //   if (this.state.type !== "" && pokemon.types[0].type.name.indexOf ( this.state.type ) === -1 ){
    //     return null
    //   } 

    const renderedPokemonList = pokemonDetails.map((pokemon, index) => {
      if (this.state.search !== "" && pokemon.name.indexOf(this.state.search) === -1) {
        return null
      }
      if (this.state.type !== "") {
        var tipo1 = pokemon.types[0].type.name;
        var tipo2 = "";
        //se eu possuo um segundo tipo, ou seja, o meu array possui mais de um elemento:
        if (pokemon.types.length > 1) {
          //defino o segundo tipo
          tipo2 = pokemon.types[1].type.name;
        }
        //se o tipo primário e secundário do pokémon atual não for igual ao do menu:
        if ((tipo1.indexOf(this.state.type) === -1) && (tipo2.indexOf(this.state.type) === -1)) {
          return null
        }
      }
      return (<PokeCard pokemon={pokemon} />);
    });

    return (
      <div className="container">
        <div className="container-search">
          <input className="search-fire" label="Buscar Pokemon" icon="search" onChange={this.buscaPesquisa}></input>
          <button className="btnsearch-fire">Buscar</button>
        </div>

        <button onClick={this.menuFogo}>Fogo</button>
        <div className="card-columns colums-new">
          {renderedPokemonList}
        </div>
      </div>
    );
  }
}



export default App;

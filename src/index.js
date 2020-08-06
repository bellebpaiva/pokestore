import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/homefire';

import { BrowserRouter, Switch, Route  } from 'react-router-dom' ;
import App from './App';
import HomeIce from './Pages/Home/homeice';




const Pagina404 = () => (<div>ERRO 404. PÁGINA NÃO ENCONTRADA</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/pokefire" component={Home} exact />
      <Route path="/pokeice" component={HomeIce} />
      <Route component={Pagina404} />
           
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home';

import { BrowserRouter, Switch, Route  } from 'react-router-dom' ;
import App from './App';




const Pagina404 = () => (<div>ERRO 404. PÁGINA NÃO ENCONTRADA</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route component={Pagina404} />
           
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


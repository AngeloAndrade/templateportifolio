import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Sobre } from './components/Sobre';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/sobre" component={Sobre} />
    </Switch>
  </BrowserRouter>,

  /*<React.StrictMode>
    <App />
  </React.StrictMode>,*/

  document.getElementById('root')
);

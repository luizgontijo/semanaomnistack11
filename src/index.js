import React from 'react';
//arvore de elementos no navegador
import ReactDOM from 'react-dom';
import App from './App';

//renderizando (colocar em tela) o App
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



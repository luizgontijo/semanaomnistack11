//import React, { useState } from 'react';
import React from 'react';

import './global.css';

//Criou uma função fora esse código que aparece em mais lugares
//Isolar a função que aparece mais vezes
//import Header from './Header';

import Routes from './routes';
//Estado: informação que vai ser mantida pelo cliente

//html escrito dentro do .js = JSX (Javascritp XML)
//isso é uma componente: uma função q ue retorna HMLT
//Essa função pode ter funcionalidade javascrit, css ou html
function App() {
  
  //return (
    //não precisa atualizar o navegador para isso aparecer em tela
    //Escolher o titulo que irá aparecer
    //muda o título na função com {children}
    //<Header>
    //  Semana Omnistack
    //</Header> 

    
    //);
    //let [counter, setCounter] = useState(0);
    //useState retorn a o valor da variável e uma função que sobrepoem esse valor
    //counter: armazena o valor
    //setCounter: função para alterar o counter


  //Adiciona +1 somente no console
  //O estado do elemento não será alterado
  //Sobrepor o valor do estado
  //  function increment() {
      //usando o setCounter para altera o counter
  //    setCounter(counter + 1);
  //    console.log(counter);
  //  };

  //return(
  //    <div>
  //      <Header>Contador: {counter}</Header>
  //      <button onClick = {increment}>Incrementar</button>
  //    </div>
  //);

  
    return (
      <Routes />
    );
}

export default App;



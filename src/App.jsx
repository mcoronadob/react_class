/* Las funciones que tengan jsx deben tener la primera letra del nombre
de dicha función ne mayúsculas, en caso de ser una funcion con javascript
el nombre debe tener la primera letra en minúsculas */

import listaDeAlias from "./mocks/lista";
import Titulo from "./componentes/Titulo";

function hola(){
  return "hola mundo desde react";
} 

function Mensaje(){
  return(
    <div>
    <h3>Soy un Menesaje</h3>
  </div>
  )
}

function App(){
  let foo="fookziman";
  let bar="barziman";
  return(
    <div>
      <Titulo/>
      <Titulo/>
      <p>Hola mundo desde react</p>
      <p>yo soy {foo}</p>
      <p>yo soy {bar.toUpperCase()}</p>
      <p>{listaDeAlias[0].toUpperCase()}</p>
      <p>{listaDeAlias[1].toUpperCase()}</p>
      <br />
      <Mensaje/>
      <br />
      <p>{hola()} desde react</p>
    </div>
  )
}

export default App;

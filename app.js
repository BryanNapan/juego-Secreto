let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
let numeroSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);


function asignarUnTextoElemento(elemento, texto){
  let elementoHtml = document.querySelector(elemento);
  elementoHtml.innerHTML = texto;
  return;
}

function verificarIntento(){
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  

  // el usuario no acerto
  if (numeroDeUsuario === numeroSecreto){
    asignarUnTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else{
    if (numeroDeUsuario > numeroSecreto){
      asignarUnTextoElemento("p" , "El numero secreto es menor");
    } else{
      asignarUnTextoElemento("p" , "El numero secreto es mayor");
    }
    intentos++;
    limpiarcaja();
  }
  return;
}

function limpiarcaja (){
  let valorCaja = document.querySelector("#valorUsuario").value = "";

}



function generarNumeroSecreto() {
  let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
  
  //si ya sorteamos todos los numeros
  if(numeroSorteados.length == numeroMaximo){
    asignarUnTextoElemento("p", "ya se sortearon todos los numeros posibles")
  } else{
  
  // si el numero generado esta incluido en la lista
  if(numeroSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();
  }
  else{
    numeroSorteados.push(numeroGenerado);
    return numeroGenerado;
  }
}
}

function condicionesInciales(){
  asignarUnTextoElemento("h1", "Bienvenidos al Juego");
  asignarUnTextoElemento("p", `Escoge un numero entre 1 y ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego(){
  //limpiar la caja
  limpiarcaja();
  //Indicar mensaje de intervalo de numeros
  //Generar el numero aleatorio
  //Incializar el numero de intentos
  condicionesInciales();
  //Deshabilitar el boton de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled","true");

}
condicionesInciales();


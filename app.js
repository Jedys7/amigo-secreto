// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Variables iniciales
let amigos = []; 

//Funcion de Agregar nombre de amigo
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); 

    if (nombre == 0) {
      alert("Por favor, inserte un nombre"); 
        return; 
    }
    input.placeholder = "Escribe un nombre";
    input.classList.remove("input-error"); 
    input.classList.add("input-normal"); 

    amigos.push(nombre);
    input.value = ''; 
    imprimirLista(); 
}

function imprimirLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 
    amigos.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Funcion de Sorteo de Amigos
function sortearAmigo() {
  let cantidadAmigos = amigos.length;
  // Si la lista esta vacia no puede Sortear y Alerta al usuario
  if (cantidadAmigos === 0) {
    alert("Por favor, inserte un nombre antes de sortear");
  } else if (cantidadAmigos == 1) {
    alert("Por favor, inserte un nombre mas para sortear");
  }else{
    // Sortea un numero y asiga al ganador
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = amigos[indiceAmigo];
    resetSorteo();
  }
  
  }
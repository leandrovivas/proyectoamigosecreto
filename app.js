// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//array, o listado de nombre.
let listaDeNombres = []; 



function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
    
}


//funcion para agregar amigos
//Cuando yo haga click en el boton de añadir se debe activar esta funcion.
function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    console.log(listaDeNombres)
    
if (nombreAmigo === "") {
    asignarTextoElemento("h2", "Por favor, ingresar un nombre")


} else {
    listaDeNombres.push(nombreAmigo);
    limpiarCaja();
    actualizarLista();
}
    
}

//funcion limpiar caja
function limpiarCaja () {
document.getElementById("amigo").value = ""; 

}


// funcion para actulizar la lista de amigos
function actualizarLista () {
        let lista = document.getElementById("listaAmigos"); // 1. Obtener la lista <ul>
        lista.innerHTML = ""; // 2. Limpiar la lista
    
        // 3. Recorrer el array listaDeNombres
        for (let i = 0; i < listaDeNombres.length; i++) {
            let nombre = listaDeNombres[i]; // 4. Obtener el nombre actual
            lista.innerHTML += "<li>" + nombre + "</li>"; // 5. Agregar el nombre como un nuevo elemento <li>
        }
    }
    


//funcion para sortear
function sortearAmigo(){
    if (listaDeNombres.length < 2) {
        alert("Tenes que ingresar al menos dos amigos para realizar el sorteo.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeNombres.length); // 1. Generar índice aleatorio
    let amigoSorteado = listaDeNombres[indiceAleatorio]; // 2. Obtener el nombre sorteado

    mostrarResultado(amigoSorteado); // 3. Mostrar el resultado
}

function mostrarResultado(amigoSorteado) {
    let resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = "El amigo sorteado es: " + amigoSorteado;
}

agregarAmigo();
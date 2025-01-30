// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let numeroAmigos = 0;

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    limpiarCaja();
    if (amigo != ''){
        //console.log(`Introduced ${amigo}`);
        amigos.push(amigo);
        actualizarAmigos();
        return;
    }
    else {
        alert('Introduce un nombre válido');
        return;
    }
}
function limpiarCaja(){
    document.querySelector('#amigo').value = '';
    return;
}
function actualizarAmigos(){
    numeroAmigos = amigos.length;
    let listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = '';
    for (var i = 0; i <= (amigos.length-1); i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}
function sortearAmigo(){
    if (amigos[0] != undefined){
        let amigoSecreto = amigos[Math.floor(Math.random()*amigos.length)];
        document.querySelector('#resultado').innerHTML = amigoSecreto;
        return;
    }
    else {
        alert('Debes añadir un amigo primero')
        return;
    }
}
// Declaración de rondas y fondos para el campo de batalla
let rondas = 0;
//En esta sección iran las imagenes de fondo
let fondosBatalla = [


];

const btnAtaque1Jugador1 = document.querySelectorAll('#jugador1 .boton')[0];
const btnAtaque2Jugador1 = document.querySelectorAll('#jugador1 .boton')[1];
const btnAtaque1Jugador2 = document.querySelectorAll('#jugador2 .boton')[0];
const btnAtaque2Jugador2 = document.querySelectorAll('#jugador2 .boton')[1];

const botonesJugador1 = document.querySelectorAll('#jugador1 .botones');
const botonesJugador2 = document.querySelectorAll('#jugador2 .botones');

botonesJugador1.forEach(function (elemento) { elemento.classList.toggle("desactivado"); });
botonesJugador2.forEach(function (elemento) { elemento.classList.toggle("desactivado"); });

const indicador = document.getElementById("indicadorMensajes");

const nombreJugador1 = document.getElementById("nombreJugador1");
const vidaJugador1 = document.getElementById("vidaJugador1");
const imagenJugador1 = document.querySelectorAll('#jugador1 .personaje img')[0];

const nombreJugador2 = document.getElementById("nombreJugador2");
const vidaJugador2 = document.getElementById("vidaJugador2");
const imagenJugador2 = document.querySelectorAll('#jugador2 .personaje img')[0];

const reiniciarPartida = document.getElementById("btnReiniciar");
reiniciarPartida.addEventListener("click", function () { window.location.reload(); });

function cargarBatalla(jugador1, jugador2) {
    nombreJugador1.innerText = jugador1.nombre;
    nombreJugador2.innerText = jugador2.nombre;

    vidaJugador1.innerText = jugador1.salud;
    vidaJugador2.innerText = jugador2.salud;

    const descripcionAtaque1Jugador1 = document.querySelectorAll('#jugador1 .descripcionAtaque')[0];
    btnAtaque1Jugador1.innerText = jugador1.habilidad1.nombre;
    descripcionAtaque1Jugador1.innerText = jugador1.habilidad1.descripcion;

    const descripcionAtaque2Jugador1 = document.querySelectorAll('#jugador1 .descripcionAtaque')[1];
    btnAtaque2Jugador1.innerText = jugador1.habilidad2.nombre;
    descripcionAtaque2Jugador1.innerText = jugador1.habilidad2.descripcion;

    const descripcionAtaque1Jugador2 = document.querySelectorAll('#jugador2 .descripcionAtaque')[0];
    btnAtaque1Jugador2.innerText = jugador2.habilidad1.nombre;
    descripcionAtaque1Jugador2.innerText = jugador2.habilidad1.descripcion;

    const descripcionAtaque2Jugador2 = document.querySelectorAll('#jugador2 .descripcionAtaque')[1];
    btnAtaque2Jugador2.innerText = jugador2.habilidad2.nombre;
    descripcionAtaque2Jugador2.innerText = jugador2.habilidad2.descripcion;

    imagenJugador1.src = jugador1.imagen;
    imagenJugador2.src = jugador2.imagen;

    const fondoElegido = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    fondos[0].style.backgroundImage = url('${fondosBatalla[fondoElegido]}');
}
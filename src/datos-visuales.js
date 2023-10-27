// Actualiza el indicador de mensajes.
function actualizarMensaje(texto) {
    indicador.classList.toggle("alter")
    indicador.innerText = texto
}

// Desactiva o activa botones.
function gestionarBotones(atacante) {
    if (atacante === player1) {
        BotonesPlayer1.forEach(function (elemento) { elemento.classList.toggle("desactivado") })
    } else if (atacante === player2) {
        BotonesPlayer2.forEach(function (elemento) { elemento.classList.toggle("desactivado") })
    }
}

// Elige el elemento del DOM que representa al personaje atacado.
function obtenerElementoAtacadoDOM(atacado) {
    if (atacado === player2) {
        return document.querySelectorAll(`#player2 .personaje img`)[0]
    } else if (atacado === player1) {
        return document.querySelectorAll(`#player1 .personaje img`)[0]
    }
}

function obtenerElementoAtacanteDOM(atacante) {
    if (atacante === player1) {
        return document.querySelectorAll(`#player1 .personaje img`)[0]
    } else if (atacante === player2) {
        return document.querySelectorAll(`#player2 .personaje img`)[0]
    }
}

// Actualiza toda la vista.
function actualizarVista(valorAtaque, atacante, atacado) {
    gestionarBotones(atacante);
    const elementoAtacadoDOM = obtenerElementoAtacadoDOM(atacado);
    const elementoAtacanteDOM = obtenerElementoAtacanteDOM(atacante);

    setTimeout(function () {
        vidaPlayer1.innerText = player1.vida;
        vidaPlayer2.innerText = player2.vida;

        if (valorAtaque !== 0) {
            elementoAtacadoDOM.classList.toggle("herido");
            actualizarMensaje(`¡${atacado.nombre} ha perdido ${valorAtaque} de vida!`);
        } else {
            actualizarMensaje(`¡${atacante.nombre} ha fallado! ${atacado.nombre} no ha recibido daño.`);
        }
    }, 500);

    if (atacado.vida > 0 && atacante.vida > 0) {
        setTimeout(function () {
            gestionarBotones(atacado);
            elementoAtacadoDOM.classList.toggle("herido");
            actualizarMensaje(`¡Es el turno de ${atacado.nombre}!`);
            turnos += 1;
        }, 2000);
    } else {
        if (atacado.vida <= 0 && atacante.vida <= 0) {
            setTimeout(function () { empate(player1, player2, elementoAtacanteDOM, elementoAtacadoDOM) }, 2000)
        } else if (atacado.vida <= 0) {
            setTimeout(function () { mostrarGanador(atacante, elementoAtacadoDOM) }, 2000)
        } else if (atacante.vida <= 0) {
            setTimeout(function () { mostrarGanador(atacado, elementoAtacanteDOM) }, 2000)
        }
    }
}

// Muestra al ganador y da fin al juego.
function mostrarGanador(ganador, perdedor) {
    perdedor.classList.toggle("derrotado");
    document.getElementsByClassName("fondo")[0].classList.toggle("victoria");
    BotonesPlayer1.forEach(function (elemento) { elemento.style.visibility = "hidden" });
    BotonesPlayer2.forEach(function (elemento) { elemento.style.visibility = "hidden" });
    actualizarMensaje(`¡${ganador.nombre} GANA!`);
    document.getElementById("ventanaFinal").classList.toggle("visible");
}

// En caso de empate:
function empate(jugador1, jugador2, DOM1, DOM2) {
    DOM1.classList.toggle("derrotado");
    DOM2.classList.toggle("derrotado");
    document.getElementsByClassName("fondo")[0].classList.toggle("victoria");
    BotonesPlayer1.forEach(function (elemento) { elemento.style.visibility = "hidden" });
    BotonesPlayer2.forEach(function (elemento) { elemento.style.visibility = "hidden" });
    actualizarMensaje(`¡${jugador1.nombre} y ${jugador2.nombre} han caído! Ambos pierden.`);
    document.getElementById("ventanaFinal").classList.toggle("visible");
}

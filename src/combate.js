function determinarTurno() {
    if (Math.random() <= 0.5) {
        // Firstgamer comienza.
        console.log("Firstgamer");
        desactivarBotones(Firstgamer);
        mensaje.innerText = `¡${Firstgamer.nombre} ¡Adelante! ¡A pelear!.`;
    } else 
        // Secondgamer comienza.
        console.log("Secondgamer");
        desactivarBotones(Secondgamer);
        mensaje.innerText = `¡${Secondgamer.nombre} ¡Adelante! ¡A pelear!.`;
}


// Función ataque
function realizarAtaque(jugador, tipoAtaque, oponente) {
    let poderAtaque = 0;
    if (tipoAtaque === 1) {
        poderAtaque = jugador.ataquePrimario.usar(jugador.poder);
    } else if (tipoAtaque === 2) {
        poderAtaque = jugador.ataqueSecundario.usar(jugador.poder);
    }
    oponente.vida -= poderAtaque;
    actualizarVista(poderAtaque, jugador, oponente);
}

// Sistema para gestionar los ataques
botonAtaque1Firstgamer.addEventListener("click", function () { realizarAtaque(Firstgamer, 1, Secondgamer) });
botonAtaque2Secondgamer.addEventListener("click", function () { realizarAtaque(Firstgamer, 2, Secondgamer) });
botonAtaque1Firstgamer.addEventListener("click", function () { realizarAtaque(Secondgamer, 1, Firstgamer) });
botonAtaque2Secondgamer.addEventListener("click", function () { realizarAtaque(Secondgamer, 2, Firstgamer) });
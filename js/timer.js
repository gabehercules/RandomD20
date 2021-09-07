function partyTimer() {
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC',
        });
    }

    const temporizador = document.querySelector('.timer-count');
    let segundos = 0;
    let timer;

    function iniciaTemporizador() {
        timer = setInterval(function () {
            segundos++;
            temporizador.innerHTML = criaHoraDosSegundos(segundos)
        }, 1000);
    }

    document.addEventListener('click', function (e) {
        const targetBtn = e.target;

        if (targetBtn.classList.contains('iniciar')) {
            temporizador.classList.add('iniciado');
            temporizador.classList.remove('pausado');
            clearInterval(timer);
            iniciaTemporizador();
        }

        if (targetBtn.classList.contains('pausar')) {
            clearInterval(timer);
            temporizador.classList.remove('iniciado');
            temporizador.classList.add('pausado');
        }

        if (targetBtn.classList.contains('zerar')) {
            clearInterval(timer);
            temporizador.innerHTML = '00:00:00';
            temporizador.classList.remove('pausado');
            temporizador.classList.remove('iniciado');
            segundos = 0;
        }
    });
}

partyTimer();
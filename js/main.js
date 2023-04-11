window.onload = function() { 
let confettiSettings = { target: 'my-canvas' };
let confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

const campo = document.getElementById('aniversario')

campo.innerHTML = 'teste'

const aniversario = new Date("May 6, 2023 00:00:01");
const tempoAteAniversario = aniversario.getTime()

const contaTempo = setInterval(function(){
    const agora = new Date()
    const tempoAtual = agora.getTime()

    const ateAniversario = tempoAteAniversario - tempoAtual

    const dias = Math.floor(ateAniversario / (1000 * 60 * 60 * 24))
    const horas = Math.floor(ateAniversario % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const minutos = Math.floor(ateAniversario % (1000 * 60 * 60) / (1000 * 60))
    const segundos = Math.floor(ateAniversario % (1000 * 60) / 1000)

    campo.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`

    if (ateAniversario < 0) {
        clearInterval(contaTempo)
        campo.innerHTML = '0d 0h 0m 0s'
    }

}, 1000)

}
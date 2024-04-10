const botoes = document.querySelectorA11(".botao");
const textos = document.querySelectorA11("aba-conteudo");
for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function () {

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            botoes[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorA11(".contador");
const tempoObjetivo1 = new date("2023-10-05T00:00:00");
const tempoObjetivo2 = new date("2023-12-05T00:00:00");
const tempoObjetivo3 = new date("2023-12-30T00:00:00");
const tempoObjetivo4 = new date("2023-02-01T00:00:00");

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];

contadores[0].textContent = calculaTempo(tempoObjetivo1);

for(let i=0; i<contadores.length;i++){
    
}


function calculaTempo(tempoObjetivo){
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = MAth.floor (tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);

    segundos %=60;
    minutos %=60;

    return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
}

const items = document.querySelectorAll('.item');
const boloFinal = document.getElementById('bolo-final');
const finalizarButton = document.getElementById('finalizar');
const recheio_bolo = document.getElementById('recheio_bolo');
const formato_bolo = document.getElementById('formato_bolo');
const cobertura_bolo = document.getElementById('cobertura_bolo');
const confeito_bolo = document.getElementById('confeito_bolo');
const imagens = confeito_bolo.querySelectorAll('img');
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const pedido = document.getElementById("pedido");
const gameMusic = document.getElementById('game-music');

let valorClicado;
let boloAtributos= [];
let pontos = 0;

function preencherArray() {
  const boloPedido = [];
  boloPedido[0] = Math.floor(Math.random() * 2) + 1;
  for (let i = 1; i < 4; i++) {
    boloPedido[i] = Math.floor(Math.random() * 3) + 1;
  }
  pedido.textContent = `Formato: ${boloPedido[0]},
                        Sabor: ${boloPedido[1]},
                        Cobertura: ${boloPedido[2]},
                        Confeito: ${boloPedido[3]}`;
  return boloPedido;
}
let boloPedido = preencherArray();
console.log(boloPedido);

function pegarIdDiv(event) {
    valorClicado = event.target.id;
    let divPai = event.target.parentElement;
    adicionarAnimacaoClique(event.target);
    if (divPai.classList.contains('formatos')) {
        boloAtributos[0] = valorClicado[5];
    } else if (divPai.classList.contains('recheios')) {
        boloAtributos[1] = valorClicado[5];
    } else if (divPai.classList.contains('coberturas')) {
        boloAtributos[2] = valorClicado[5];
    } else if (divPai.classList.contains('confeitos')){
        boloAtributos[3] = valorClicado[5];
    }
    trocaAtributos();
    gameMusic.currentTime = 0;
    gameMusic.play();
    setTimeout(() => {
      gameMusic.pause();
    }, 800);
    console.log(boloAtributos);
}

document.getElementById("forma1").addEventListener("click", pegarIdDiv);
document.getElementById("forma2").addEventListener("click", pegarIdDiv);
document.getElementById("reche1").addEventListener("click", pegarIdDiv);
document.getElementById("reche2").addEventListener("click", pegarIdDiv);
document.getElementById("reche3").addEventListener("click", pegarIdDiv);
document.getElementById("cober1").addEventListener("click", pegarIdDiv);
document.getElementById("cober2").addEventListener("click", pegarIdDiv);
document.getElementById("cober3").addEventListener("click", pegarIdDiv);
document.getElementById("confe1").addEventListener("click", pegarIdDiv);
document.getElementById("confe2").addEventListener("click", pegarIdDiv);
document.getElementById("confe3").addEventListener("click", pegarIdDiv);
document.getElementById("enviar").addEventListener("click", enviarBolo);
document.getElementById("reiniciar").addEventListener("click", reiniciarPontos);


function simularCliquePorTeclado(event) {
    const teclasMapeadas = {
        'q': 'forma1',
        'a': 'forma2',
        'z': 'forma3',
        'w': 'reche1',
        's': 'reche2',
        'x': 'reche3',
        'e': 'cober1',
        'd': 'cober2',
        'c': 'cober3',
        'r': 'confe1',
        'f': 'confe2',
        'v': 'confe3',
        ' ' : 'enviar',
        'enter' : 'reiniciar'
    };

    const teclaPressionada = event.key.toLowerCase();
    const idDiv = teclasMapeadas[teclaPressionada];

    if (idDiv) {
        const div = document.getElementById(idDiv);
        if (div) {
            div.click();
            adicionarAnimacaoClique(div);
        }
    }

}
function adicionarAnimacaoClique(div) {
    div.classList.add('clique');
    div.addEventListener('animationend', function () {
        div.classList.remove('clique');
    });
}
function trocaAtributos(){
    if (boloAtributos[0] == null){
        cobertura_bolo.classList.add('hidden');
    }else if(boloAtributos[0] == 1) {
        cobertura_bolo.classList.remove('hidden');
        cobertura_bolo.classList.remove('forma2');
        cobertura_bolo.classList.add('forma1');
        confeito_bolo.classList.remove('forma2');
        confeito_bolo.classList.add('forma1');
    }else if (boloAtributos[0] == 2) {
        cobertura_bolo.classList.remove('hidden');
        cobertura_bolo.classList.remove('forma1');
        cobertura_bolo.classList.add('forma2');
        confeito_bolo.classList.remove('forma1');
        confeito_bolo.classList.add('forma2');
    }

    if (boloAtributos[1] == null){
        formato_bolo.classList.add('hidden');
    }else if(boloAtributos[1] == 1) {
        formato_bolo.classList.remove('hidden');
        formato_bolo.classList.remove('morango');
        formato_bolo.classList.remove('baunilha');
        formato_bolo.classList.add('chocolate');
    }else if(boloAtributos[1] == 2) {
        formato_bolo.classList.remove('hidden');
        formato_bolo.classList.remove('baunilha');
        formato_bolo.classList.remove('chocolate');
        formato_bolo.classList.add('morango');
    }else if(boloAtributos[1] == 3){
        formato_bolo.classList.remove('hidden');
        formato_bolo.classList.remove('chocolate');
        formato_bolo.classList.remove('morango');
        formato_bolo.classList.add('baunilha');
    }

    if(boloAtributos[2] == null){
        cobertura_bolo.classList.remove('morango');
        cobertura_bolo.classList.remove('baunilha');
        cobertura_bolo.classList.remove('chocolate');
    }else if(boloAtributos[2] == 1) {
        cobertura_bolo.classList.remove('morango');
        cobertura_bolo.classList.remove('baunilha');
        cobertura_bolo.classList.add('chocolate');
    }else if(boloAtributos[2] == 2) {
        cobertura_bolo.classList.remove('baunilha');
        cobertura_bolo.classList.remove('chocolate');
        cobertura_bolo.classList.add('morango');
    }else if(boloAtributos[2] == 3){
        cobertura_bolo.classList.remove('chocolate');
        cobertura_bolo.classList.remove('morango');
        cobertura_bolo.classList.add('baunilha');
    }

    if(boloAtributos[3] == null){
        imagens.forEach(imagem => {
            imagem.classList.add('hidden');
        });
    }else if(boloAtributos[3] == 1) {
        img1.classList.remove('hidden');
        img2.classList.add('hidden');
        img3.classList.add('hidden');
    }else if(boloAtributos[3] == 2) {
        img1.classList.add('hidden');
        img2.classList.remove('hidden');
        img3.classList.add('hidden');
    }else if(boloAtributos[3] == 3){
        img1.classList.add('hidden');
        img2.classList.add('hidden');
        img3.classList.remove('hidden');
    }
}

function enviarBolo(){
    let certo = 0;
    for (let i = boloAtributos.length - 1; i >= 0; i--) {
        if(boloAtributos[i] == boloPedido[i]){
            certo++;
        }
    }
    if (certo == 4){
        pontos += 100;
        document.getElementById("pontos").textContent = `Pontuação: ${pontos}`;
    }
    else{
        document.getElementById("pontos").textContent = `Acertou ${certo}, Pontuação: ${pontos}`;

    }
    let boloPedido = preencherArray();
}

function reiniciarPontos(){
    location.reload(true);
}

document.addEventListener('keydown', simularCliquePorTeclado);

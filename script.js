const sim = document.getElementById("sim");
const nao = document.getElementById("nao");

const oficial = document.getElementById("oficial");

const telaInicial = document.getElementById("telaInicial");
const telaAceitou = document.getElementById("telaAceitou");
const telaFinal = document.getElementById("telaFinal");

const coracoes = document.getElementById("coracoes");


// ==========================================
// CONFIGURAÇÕES DO BOTÃO "NÃO" 😭
// ==========================================

let tentativas = 0;


// Frases que aparecem conforme a pessoa tenta clicar
const frases = [
    "NÃO 😿",
    "Tem certeza? 🥺",
    "Pensa melhor 😭",
    "Ei! 😭",
    "Para de tentar! 😿",
    "NÃO VAI DAR! 😂",
    "DESISTE 😭",
    "SOCORRO 💀",
    "ACEITA LOGO! ❤️"
];


// ==========================================
// BOTÃO "NÃO" FUGINDO
// ==========================================

function fugir() {

    tentativas++;

    // Muda o texto
    if (tentativas < frases.length) {

        nao.innerText = frases[tentativas];

    } else {

        nao.innerText = "NÃO TEM COMO 😭";

    }


    // Faz o botão ficar cada vez menor
    const escala = Math.max(0.55, 1 - tentativas * 0.06);

    nao.style.transform = `scale(${escala})`;


    // Pega o tamanho da tela
    const largura = window.innerWidth;
    const altura = window.innerHeight;

    const botaoLargura = nao.offsetWidth;
    const botaoAltura = nao.offsetHeight;


    // Cria uma margem para o botão não sair completamente da tela
    const margem = 20;


    // Nova posição aleatória
    const novaPosicaoX =
        margem +
        Math.random() *
        (largura - botaoLargura - margem * 2);


    const novaPosicaoY =
        margem +
        Math.random() *
        (altura - botaoAltura - margem * 2);


    // Depois da primeira tentativa,
    // o botão passa a ser independente do cartão
    nao.style.position = "fixed";

    nao.style.left = `${novaPosicaoX}px`;
    nao.style.top = `${novaPosicaoY}px`;


    // A partir da 4ª tentativa ele fica ainda mais rápido
    if (tentativas >= 4) {

        nao.style.transition = "none";

    }


    // Depois de várias tentativas...
    if (tentativas === 7) {

        nao.innerText = "JÁ FALEI QUE NÃO 😭";

    }

    if (tentativas === 10) {

        nao.innerText = "ACEITA LOGO KKKKK ❤️";

    }
}


// ==========================================
// COMPUTADOR
// ==========================================

nao.addEventListener("mouseenter", fugir);


// ==========================================
// CELULAR
// ==========================================

nao.addEventListener("touchstart", function(event) {

    event.preventDefault();

    fugir();

});


// ==========================================
// SE CONSEGUIR CLICAR NO NÃO 😂
// ==========================================

nao.addEventListener("click", function(event) {

    event.preventDefault();

    fugir();

});


// ==========================================
// CLICOU NO SIM ❤️
// ==========================================

sim.addEventListener("click", function() {

    telaInicial.classList.add("escondido");

    telaAceitou.classList.remove("escondido");

    criarCoracoes(15);

});


// ==========================================
// "É OFICIAL?" 😿
// ==========================================

oficial.addEventListener("click", function() {

    telaAceitou.classList.add("escondido");

    telaFinal.classList.remove("escondido");

    criarCoracoes(40);

});


// ==========================================
// CORAÇÕES ❤️
// ==========================================

function criarCoracoes(quantidade) {

    for (let i = 0; i < quantidade; i++) {

        const coracao = document.createElement("div");

        coracao.classList.add("coracao");


        const emojis = [
            "❤️",
            "💖",
            "💕",
            "💗",
            "💓",
            "💘",
            "🥹"
        ];


        coracao.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];


        coracao.style.left =
            Math.random() * 100 + "vw";


        coracao.style.animationDuration =
            (3 + Math.random() * 3) + "s";


        coracao.style.fontSize =
            (18 + Math.random() * 25) + "px";


        coracoes.appendChild(coracao);


        // Remove depois da animação
        setTimeout(() => {

            coracao.remove();

        }, 6000);

    }
}
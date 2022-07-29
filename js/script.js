const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
    const url = location.href
    const linkHref = link.href
    
    if(url.includes(linkHref)) {
        link.classList.add('ativo')
    }
}

links.forEach(ativarLink)

/* Ativar items do Orçamento */

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro)
    if(elemento) {
        elemento.checked = true
    }
    console.log(elemento)
}

parametros.forEach(ativarProduto)

/* Perguntas Frequentes */

const perguntas = document.querySelectorAll('.perguntas dt button')

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls)
     
    resposta.classList.toggle('ativa')
    const ativa = resposta.classList.contains('ativa')
    pergunta.setAttribute('aria-expanded', ativa)
    console.log(pergunta)
}

function eventoPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta)
}

perguntas.forEach(eventoPerguntas)

/* Galeria */

const galeriaImg = document.querySelectorAll('.bicicleta-imagens img')
const galeria = document.querySelector('.bicicleta-imagens')

function trocarImagem(event) {
    const imagemTarget = event.currentTarget;
    const media = matchMedia("(min-width: 920px)").matches;
    if(media) {
        galeria.prepend(imagemTarget)
    }
}

function eventoImagem(imagem) {
    imagem.addEventListener('click', trocarImagem)
}

galeriaImg.forEach(eventoImagem)

/* Plugin Animar */

if(window.SimpleAnime) {
    new SimpleAnime()
}


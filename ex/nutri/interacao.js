// sessao do mais_um_pouco

const contem_tudo = window.document.getElementById("tudo")
const titulo_tudo = window.document.getElementById("titulo_tudo")
const p_tudo = window.document.getElementById("p_tudo")
const button_tudo = window.document.getElementById("button002")
const folha_tudo = window.document.getElementById("folha003")
var tudo_afetado = false;

// sessao ajuda

const titulo_ajuda = window.document.getElementById("titulo004")
const quadro01 = window.document.getElementById("quadro001")
const quadro02 = window.document.getElementById("quadro002")
const quadro03 = window.document.getElementById("quadro003")
var ajuda_afetada = false;

// sessao prato

const prato = window.document.getElementById("prato")
const p_prato = window.document.getElementById("texto_nsei")
var prato_afetado = false;

// sessao rodape

// const rodape = window.getElementById("rodape")
// const whatsapp = window.getElementById("zapzap")

window.addEventListener('scroll', function() {
    var posicao_tudo = contem_tudo.getBoundingClientRect()
    var posicao_ajuda = titulo_ajuda.getBoundingClientRect()
    var posicao_prato = prato.getBoundingClientRect()

    if (posicao_tudo.top < window.innerHeight - 200 && tudo_afetado == false) {
        contem_tudo.style.animation = "1s entrar_tudo"
        contem_tudo.style.animationFillMode = "forwards"

        titulo_tudo.style.animation = "1s entrar_lado_esquerdo"
        titulo_tudo.style.animationFillMode = "forwards"

        p_tudo.style.animation = "1s entrar_lado_direito"
        p_tudo.style.animationFillMode = "forwards"

        button_tudo.style.animation = "1s entrar_cima"
        button_tudo.style.animationFillMode = "forwards"

        folha_tudo.style.animation = "1s folha_rodando"
        folha_tudo.style.animationFillMode = "forwards"

        tudo_afetado = true;
    }if (posicao_tudo.top > window.innerHeight - 200 && tudo_afetado == true) {
        contem_tudo.style.animation = "none"
        titulo_tudo.style.animation = "none"
        p_tudo.style.animation = "none"
        button_tudo.style.animation = "none"
        folha_tudo.style.animation = "none"
        tudo_afetado = false;
    }

    if (posicao_ajuda.top < window.innerHeight -200 && ajuda_afetada == false){
        quadro01.style.animation = "1s entrar_lado_esquerdo"
        quadro01.style.animationFillMode = "forwards"

        quadro02.style.animation = "1s entrar_lado_esquerdo"
        quadro02.style.animationDelay = "0.3s"
        quadro02.style.animationFillMode = "forwards"

        quadro03.style.animation = "1s entrar_lado_esquerdo"
        quadro03.style.animationDelay = "0.6s"
        quadro03.style.animationFillMode = "forwards"

        titulo_ajuda.style.animation = "1s aparecer"

        ajuda_afetada = true;
    }if (posicao_ajuda.top > window.innerHeight - 200 && ajuda_afetada == true){
        quadro01.style.animation = ""
        quadro02.style.animation = ""
        quadro03.style.animation = ""
        quadro01.style.opacity = 0
        quadro02.style.opacity = 0
        quadro03.style.opacity = 0
        ajuda_afetada = false;
    }

    if(posicao_prato.top < window.innerHeight - 200 && prato_afetado == false){
        prato.style.animation = "1s prato_rodando"
        prato.style.animationFillMode = "forwards"

        p_prato.style.animation = "1s entrar_lado_direito"
        p_prato.style.animationFillMode = "forwards"

        prato_afetado = true;
    }if (posicao_prato.top > window.innerHeight - 200 && prato_afetado ==  true) {
        prato.style.animation = ""
        p_prato.style.animation = ""
        p_prato.style.opacity = 0
        prato_afetado = false;
    }

});

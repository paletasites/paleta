const posicao_tudo = 100 ;
const contem_tudo = window.document.getElementById("tudo");
const titulo_tudo = window.document.getElementById("titulo_tudo");
const p_tudo = window.document.getElementById("p_tudo");
// con
var tudo_afetado = false;


window.addEventListener('scroll', function() {
    var rolagem = window.scrollY;
    console.log(rolagem);

    if (rolagem <= posicao_tudo && tudo_afetado == true){
        console.log("vc n ve mais o tudo !!!")
        contem_tudo.style.animation = "none"
        tudo_afetado = false;
    }

    if (rolagem >= posicao_tudo && tudo_afetado == false){
        console.log("vc chegou em tudo :)");
        contem_tudo.style.animation = "1s entrar_tudo"
        contem_tudo.style.animationFillMode = "forwards"
        tudo_afetado = true;
    }

});
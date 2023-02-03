/*
1) abrir o trailer em um popup
1a - pegar o elemento que representa o botão na tela
1b - identificar quando o usuário clicar no botão (Veja o Trailer)
1c - pegar o elemento da modal js
4c - abrir o popup

2) fechar popup ao clickar no X de fechar
2a - pegar elemento do popup usando o js
2b - identificar elemento do X no popup
2c - fechar o popup
2d - parar o áudio do vídeo após o popup ser fechado
*/

const botaoTrailer = document.querySelector(".botao-trailer");  // definido uma variável constante
const botaoFecharModal = document.querySelector(".fechar-modal");  // 2a - pegar elemento do popup usando o js
const video = document.getElementById("video");  // 2d - para o áudio do vídeo após o popup ser fechad
const modal = document.querySelector(".modal"); // 1c - pegar o elemento da modal js
const linkDoVideo = video.src; // armazenar o link do video em uma varialvel pois será preciso tirar e colocar para ajustar o áudio com o fechamento do popup


function alternarModal(){  // Função para alterar o modal para abrir ou não o popup
    modal.classList. toggle("aberto")
}


botaoTrailer.addEventListener("click", () => {  // adicionar evento de uma lista
    
    /* 4c - abrir o popup */
    alternarModal(); // abrir popop  // Função para alterar o modal para abrir ou não o popup
    video.setAttribute("src", linkDoVideo);  // recarregar a fonte do vídeo
});


// 2) fechar popup ao clickar no X de fechar
// 2b - identificar elemento do X no popup

botaoFecharModal.addEventListener("click", () => {  // adicionar evento de uma lista
    
    /* 3c - fechar o popup */
    alternarModal();
    video.setAttribute("src", "");  // remover fonte do vídeo para o audio não ficar tocando ao fechar o popup
    });






console.log('Mostrar o document', document);

/* 1a - pegar o elemento que representa o botão na tela */

console.log(document.querySelector(".botao-trailer"))





console.log("mostar o objeto da modal", modal);





o


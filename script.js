let quadradinhos = document.querySelectorAll("div");
let resposta = document.querySelector("h2");
let botao = document.querySelector("button");

//CRIANDO LISTA DE CORES
let cores = ["red", "blue", "yellow"];


//FUNÇÃO PARA GERAR CORES ALEATORIAS
function gerarCor(){
    let aleatorio = Math.floor(Math.random()* cores.length);
    //o THIS está sendo utilizando para se referenciar ao próprio elemento em que está sendo clicado
    this.style.backgroundColor = cores[aleatorio];

    //chamando a função de verificar final, para verificar somente quando gerar uma cor
    verificarFinal();
}
//Aplicando a função à todos os quadradinhos
for(let quadrado of quadradinhos){
    quadrado.onclick = gerarCor;
}

//Função que verifica se todos os quadrados estão com a mesma cor
function verificarFinal(){
    if(quadradinhos[0].style.backgroundColor == quadradinhos[1].style.backgroundColor && quadradinhos[1].style.backgroundColor == quadradinhos[2].style.backgroundColor && quadradinhos[2].style.backgroundColor == quadradinhos[3].style.backgroundColor){
        resposta.innerHTML = "!!! VOCÊ VENCEU !!!";

        for(let quadrado of quadradinhos){
            quadrado.onclick = null;
            quadrado.classList.add("virarQuadradinho");
        }  
    }
    else{
        resposta.innerHTML= "Ainda não foi !!";
    }
}

//Função para resetar o jogo, limpando as cores de fundo e trocando o texto de resposta
function resetarJogo(){
    for(let quadrado of quadradinhos){
        quadrado.style.backgroundColor = "unset";
    }
    resposta.innerHTML = "Jogo resetado !";
}

botao.ondblclick = resetarJogo;






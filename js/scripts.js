const elementoResposta = document.querySelector("#resposta");
const inputPergunta = document.querySelector("#pergunta");
const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]


function fazerPergunta() {

    //Gera uma resposta Aleatoria
    const numAleatorio = Math.floor(Math.random() * respostas.length);

    if (inputPergunta.value == ""){
        alert("Digite Sua pergunta!")
        return
    }

    //Exibe a resposta e a pergunta na página
    elementoResposta.innerHTML = `<div>${inputPergunta.value}</div>${respostas[numAleatorio]}`;
}
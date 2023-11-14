const nome = prompt("Qual é o seu nome?");
const anos = prompt("Quantos anos você tem?");
const ling= prompt("Qual linguagem de programação você esta estudando?");
alert("Olá " + nome +", você tem " + anos +" e já esta aprendendo " + ling +"!");
const resposta = prompt("Você gosta de estudar "+ ling + "? Responda com o número 1 para SIM ou 2 para NÃO.");
if( resposta == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
}
else if ( resposta == 2){
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}
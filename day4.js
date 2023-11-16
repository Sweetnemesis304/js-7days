
const num = prompt("Peça para um amigo inserir um numero de 1- 10");
var numchute = prompt("Tente adivinhar o numero inserido");
let i = 1;
while ( i < 4 && num != numchute){
numchute = prompt("Você errou, tente novamente."); 
  i++;
}

if (num == numchute){
alert("Parabéns você acertou");}
else{
  alert("o numero era:"+ num + ". Você errou.");
}


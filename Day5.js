var frutas =[];
var laticinios = [];
var congelados = [];
var doces = [];
var salgados = [];
var outro = [];
var coisa = prompt("Você deseja adicionar uma comida na sua lista de compras?")
while ( coisa == "sim"){
  var comida = prompt("Qual o nome da comida?");
  var tipo = prompt("Qual o tipo da comida?(frutas, laticinios, congelados, doces, salgados, outro)");
  if(tipo == "frutas"){
    frutas.push(comida);
  }
  else if(tipo == "laticinios"){
    laticinios.push(comida);
  }
  else if(tipo == "congelados"){
    congelados.push(comida);
  }
  else if(tipo == "doces"){
    doces.push(comida);
  }
  else if(tipo == "salgados"){
    salgados.push(comida);
  }
  else{
    outro.push(comida);
  }
  var coisa = prompt("Você deseja continuar?");
  
}
var alerta = alert("Lista de compras: Frutas: " + frutas + 
     "Laticineo:"+ laticinios+
     "Congelados:" + congelados+
     "Doces:" + doces+
     "Salgados:" + salgados +
     "Outro:"+ outro +".")
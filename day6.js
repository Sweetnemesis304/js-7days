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
  if(coisa == "nao"){
var remover= prompt("Você deseja remover uma comida da sua lista?");
  if(remover == "sim"){
    var alerta = alert("Lista de compras:\nFrutas: " + frutas +
       "\nLaticineo:"+ laticinios+
       "\nCongelados:" + congelados+
       "\nDoces:" + doces+
       "\nSalgados:" + salgados +
       "\nOutro:"+ outro +".");}}
  while(remover == "sim"){
    var comida = prompt("Qual o nome da comida?");
    if(frutas.indexOf(comida) != -1){
      frutas.splice(frutas.indexOf(comida),1);
  }
      else if(laticinios.indexOf(comida) != -1){
      laticinios.splice(laticinios.indexOf(comida),1);
        }
    else if(congelados.indexOf(comida) != -1){
      congelados.splice(congelados.indexOf(comida),1);
        }
    else if(doces.indexOf(comida) != -1){
      doces.splice(doces.indexOf(comida),1);
        }
    else if(salgados.indexOf(comida) != -1){
      salgados.splice(salgados.indexOf(comida),1);
        }
    else if(outro.indexOf(comida) != -1){
      outro.splice(outro.indexOf(comida),1);
        }
    else{
      alert("Essa comida não está na lista");
    }
    var remover = prompt("Você deseja remover outra comida?");
}}
var alerta = alert("Lista de compras:\nFrutas: " + frutas +
     "\nLaticineo:"+ laticinios+
     "\nCongelados:" + congelados+
     "\nDoces:" + doces+
     "\nSalgados:" + salgados +
     "\nOutro:"+ outro +".");
function soma(a,b){
    var resultado = a + b;
    return resultado;
  }
  function subtracao(a, b) {
    const resultado = a - b;
    return resultado;
  }
  function multiplicacao(a,b){
    const resultado = a * b;
    return resultado;
  }
  function divs (a, b){
    const resultado = a/ b;
    return resultado;
  }
  const operacao = prompt("Qual operação você deseja realizar? (+, -, *, /)");  
  a = prompt("Insira o primeiro numero:");
  b = prompt("Insira o segundo numero:");
  switch(operacao){
      case "+":
      alert(soma(a,b));
      break;
      case "-":
      alert(subtracao(a,b));
      break;
      case "*":
      alert(multiplicacao(a,b));
      break;
      case "/":
      alert(divs(a,b));
      break;
    default:
     alert("Operação inválida");
  }
      alert("Até a proxima")
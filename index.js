/* 1 */

// Verifica se é um número primo, depois lista números primos de 1 a 1000.
function numeroPrimo(P) {
    if (P <= 1) return false;
    for (let i = 2; i <= Math.sqrt(P); i++) {
      if (P % i === 0) return false;
    }
    return true;
}

var numeroEscolhido = prompt("Digite um número:");
if (numeroPrimo(numeroEscolhido)) console.log(numeroEscolhido + " é primo");
else console.log(numeroEscolhido + " não é primo");

console.log("Exemplos de números primos de 1 a 1000 são:");
for (let i = 1; i <= 1000; i++) {
    if (numeroPrimo(i)) console.log(i);
}


// Separadamente
// Verificar se um número é primo. 

function numeroPrimo() {
    var P = prompt("Digite um número:");
    if (P <= 1) return "não é primo";
    for (let i = 2; i <= Math.sqrt(P); i++) {
      if (P % i === 0) return "não é primo";
    }
    return "é primo";
  }

  numeroPrimo();
  
 
  // listar todos os numeros primos de 1 a 1000

  function listaNumerosPrimos() {
    function numeroPrimo(P) {
        if (P <= 1) return false;
        for (let i = 2; i <= Math.sqrt(P); i++) {
          if (P % i === 0) return false;
        }
        return true;
    }

    console.log("Exemplos de números primos de 1 a 1000 são:");
    for (let i = 1; i <= 1000; i++) {
        if (numeroPrimo(i)) console.log(i);
    }
}

listaNumerosPrimos();


  
  
  
 /* 2 */


// Validar uma senha.

function validarSenha() {

    var senha = prompt('digite uma senha')
  
    const regexLetraMaiuscula = /[A-Z]/;
    const regexLetraMinuscula = /[a-z]/;
    const regexNumero = /[0-9]/;
  
    if (senha.length < 8) {
      return "senha invalida possui menos de 8 caracteres";
    }
  
    if (!regexLetraMaiuscula.test(senha)) {
      return "senha invalida não possui nenhuma letra maiuscula";
    }
  
    if (!regexLetraMinuscula.test(senha)) {
      return "senha invalida não possui nenhuma letra minuscula";
    }
  
    if (!regexNumero.test(senha)) {
      return "senha invalida não possui nenhum número";
    }
  
    return "senha valida";
  }

  validarSenha()
  
  /* 3 */

  // Calcula uma fatorial a sua escolha, depois calcula a fatorial de 1 a 10 automaticamente.

  function fatorial() {
    var n = parseInt(prompt("Digite um número para calcular o fatorial:"));
    var resultado = `A fatorial do número de sua escolha ${n} é `;
    var f = 1;
    for (let i = n; i >= 1; i--) {
      f *= i;
    }
    
    resultado += `${f}. `;
    
    for (let i = 1; i <= 10; i++) {
      n = i;
      f = 1;
      for (let j = n; j >= 1; j--) {
        f *= j;
      }
      resultado += `O fatorial de ${n} é ${f}. `;
    }
    
    return resultado;
  }
  
  console.log(fatorial());

  /* 4 */

  // Verificar se é um quadrado perfeito

  function quadradoPerfeito() {
    var QuadradoP = prompt("Digite um número:");
    if (Math.sqrt(QuadradoP) % 1 === 0)
      return "É um quadrado perfeito";
    else return "Não é um quadrado perfeito";
  }

  quadradoPerfeito()
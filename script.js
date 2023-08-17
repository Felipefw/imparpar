function verificarParOuImpar() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultadoElement = document.getElementById('resultado');
  
    if (isNaN(numero)) {
      resultadoElement.textContent = 'Digite um número válido.';
      resultadoElement.style.color = 'red';
    } else {
      if (numero % 2 === 0) {
        resultadoElement.textContent = 'O número é par.';
        resultadoElement.style.color = 'green';
      } else {
        resultadoElement.textContent = 'O número é ímpar.';
        resultadoElement.style.color = 'blue';
      }
    }
  }
  
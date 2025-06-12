//valorDolar = prompt("Digite um valor em Dolar ");
//alert(valorDolar);

//umDolar = 5.84;
//alert( "R$" + valorDolar * umDolar);

function vamosConversor() {
    window.location.href = "conversor.html";
  }
  
  function converter() {
    let valorEmDolar = document.getElementById("valor").value;
    let taxaDeCambio = 5.84;
  
    if (valorEmDolar === "" || isNaN(valorEmDolar) || valorEmDolar <= 0) {
      document.getElementById("resultado").innerText = "Por favor, digite um valor válido!";
      return;
    }
  
    let valorEmReais = valorEmDolar / taxaDeCambio;
    document.getElementById("resultado").innerText = `Valor em Reais: $${valorEmReais.toFixed(2)}`;
  }
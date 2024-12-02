
let valorEmDolares = parseFloat(prompt("Digite o valor em dólares:"));
let cotacaoDolar = parseFloat(prompt("Digite a cotação do dólar:"));


let valorEmReais = valorEmDolares * cotacaoDolar;


alert("O valor em reais é: R$ " + valorEmReais.toFixed(2));

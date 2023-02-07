function clicarConversao() {
var valorEmDolar = document.getElementById("real").value;
var cotacaoDoDolar = 5.15;

var valorEmReal = valorEmDolar * cotacaoDoDolar;

valorEmReal = valorEmReal.toFixed(2);

document.querySelector(".results").innerHTML = "Resultado:" + valorEmReal;
}
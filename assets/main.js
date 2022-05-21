function capturar() {
    let select = document.getElementById('entrada');

    let opcaoValor = parseFloat(select.value);

    let real = document.getElementById('valorEntrada');
    let realValor = real.value?parseFloat(real.value):0;


    let resultado = (realValor * opcaoValor).toFixed(2);
    let resultadoTela = document.getElementById('resultado');
    resultadoTela.innerHTML = resultado;


}

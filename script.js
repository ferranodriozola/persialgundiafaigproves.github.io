document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.cerca-button').addEventListener('click', realitzarCerca);
});

function realitzarCerca() {
    var seleccioCerca = document.querySelector('.seleccio-cerca').value;
    var inputNumero = document.querySelector('.numero');
    var resultatText = document.getElementById('resultat-text');

    var multiplicador = (seleccioCerca === 'opcio1') ? 5 : 10;
    var resultat = +inputNumero.value * multiplicador;

    resultatText.textContent = `El resultat de ${inputNumero.value} multiplicat per ${multiplicador} és: ${resultat}`;
}

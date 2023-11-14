document.addEventListener('DOMContentLoaded', function () {
    let contadorClicques = 0;

    function reiniciarJogo() {
        document.querySelectorAll('.hidden-object').forEach(function (element) {
            element.classList.remove('encontrada');
        });

        contadorClicques = 0;

        atualizarContador();

        document.getElementById('mensagemFinal').style.display = 'none';
    }

    const hiddenObjects = document.querySelectorAll('.hidden-object');

    hiddenObjects.forEach(function (element) {
        element.addEventListener('click', function () {
            if (!element.classList.contains('encontrada')) {
                element.classList.add('encontrada');

                contadorClicques++;

                atualizarContador();

                if (contadorClicques === 10) {
                    document.getElementById('mensagemFinal').style.display = 'block';
                }
            }
        });
    });

    function atualizarContador() {
        document.getElementById('contador').textContent = `Contagem de Cliques: ${contadorClicques}`;
    }
});
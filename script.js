document.addEventListener('DOMContentLoaded', function() {
    const paginas = document.querySelectorAll('.pagina'); // Seleciona todas as páginas
    let paginaAtual = 0; // Índice da página atual que será virada

    function virarPagina() {
        // Verifica se já estamos na última página
        if (paginaAtual >= paginas.length) return;

        // Adiciona a classe 'flipped' para virar a página
        paginas[paginaAtual].classList.add('flipped');

        // Incrementa o índice da página atual para a próxima vez
        paginaAtual++;
    }

    // Adiciona o evento de clique para todas as páginas
    paginas.forEach(pagina => {
        pagina.addEventListener('click', virarPagina);
    });
});

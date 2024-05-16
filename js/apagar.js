function apagar(id) {
    // Pegar os jogadores do localStorage
    let jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];

    // Filtrar os jogadores para remover o jogador com o id passado como parâmetro
    jogadores = jogadores.filter(jogador => jogador.id !== id);

    // Salvar a lista de jogadores no localStorage
    localStorage.setItem("jogadores", JSON.stringify(jogadores));

    // Recarregar a página
    window.location.reload();
}

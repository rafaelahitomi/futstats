document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    // Pegar os valores dos inputs
    const nome = document.getElementById("nome").value;
    const time = document.getElementById("time").value;
    const gols = parseInt(document.getElementById("gols").value);
    const assistencias = parseInt(document.getElementById("assistencias").value);
    const foto = document.getElementById("foto").value;

    // Verificar se os campos estão preenchidos
    if (nome && time && !isNaN(gols) && !isNaN(assistencias) && foto) {
        // Criar um objeto chamado jogador com esses valores
        const jogador = {
            id: new Date().getTime(),
            nome: nome,
            time: time,
            gols: gols,
            assistencias: assistencias,
            foto: foto
        };

        // Pegar a lista de jogadores do localStorage
        const jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];

        // Adicionar o novo jogador à lista
        jogadores.push(jogador);

        // Salvar a lista de jogadores no localStorage usando a chave "jogadores"
        localStorage.setItem("jogadores", JSON.stringify(jogadores));

        // Redirecionar o usuário para a página inicial
        window.location.href = "/index.html";
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
});

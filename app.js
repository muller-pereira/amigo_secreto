let amigos = [];

// Função para adicionar amigos à lista
function adicionarAmigo() {
    let campoNome = document.getElementById('amigo');
    let nomeAmigo = campoNome.value.trim();

    // Valida a entrada
    if (nomeAmigo == "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nomeAmigo);

    // Atualiza a lista exibida na tela
    let listaAmigos = document.getElementById('listaAmigos');
    let itemAmigo = document.createElement('li');
    itemAmigo.textContent = nomeAmigo;
    listaAmigos.appendChild(itemAmigo);

    // Limpa o campo de entrada
    campoNome.value = "";
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário ter pelo menos dois amigos na lista para realizar o sorteio.");
        return;
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o resultado anterior

    // Embaralha o array de amigos
    let amigosEmbaralhados = amigos.slice(); // Cria uma cópia da lista
    amigosEmbaralhados.sort(() => Math.random() - 0.5); // Embaralha a lista

    // Associa cada amigo a um amigo secreto
    for (let i = 0; i < amigos.length; i++) {
        let itemResultado = document.createElement('li'); // Cria um item de lista para exibir o resultado
        let amigo = amigos[i]; // O amigo atual
        let amigoSecreto = amigosEmbaralhados[(i + 1) % amigosEmbaralhados.length]; // O amigo secreto é o próximo da lista, com wrap-around
        itemResultado.textContent = `${amigo} tirou ${amigoSecreto}`; // Exibe o resultado
        resultado.appendChild(itemResultado); // Adiciona o resultado à lista na tela
    }
}


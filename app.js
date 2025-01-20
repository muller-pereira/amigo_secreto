let amigos = [];

// Função para adicionar amigos à lista
function adicionarAmigo() {
    let campoNome = document.getElementById('amigo');
    let nomeAmigo = campoNome.value.trim();

    // Valida a entrada
    if (nomeAmigo === "") {
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

    // Tenta embaralhar os amigos até que ninguém tire a si mesmo
    let sucesso = false;
    while (!sucesso) {
        sucesso = true;
        let amigosEmbaralhados = amigos.slice();
        amigosEmbaralhados.sort(() => Math.random() - 0.5);

        // Verifica se alguém tirou a si mesmo
        for (let i = 0; i < amigos.length; i++) {
            if (amigos[i] === amigosEmbaralhados[i]) {
                sucesso = false;
                break;
            }
        }

        // Se a atribuição foi bem-sucedida, exibe o resultado
        if (sucesso) {
            for (let i = 0; i < amigos.length; i++) {
                let itemResultado = document.createElement('li');
                let amigo = amigos[i];
                let amigoSecreto = amigosEmbaralhados[i];
                itemResultado.textContent = `${amigo} tirou ${amigoSecreto}`;
                resultado.appendChild(itemResultado);
            }
        }
    }
}


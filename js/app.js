let amigos = [];

function adicionar() {
    const nomeAmigo = document.getElementById('nome-amigo').value.trim();
    if (nomeAmigo) {
        if (amigos.includes(nomeAmigo)) {
            alert('Este nome já foi adicionado.');
        } else {
            amigos.push(nomeAmigo);
            document.getElementById('nome-amigo').value = '';
            atualizarListaAmigos();
        }
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('lista-amigos');
    listaAmigos.innerHTML = amigos.join(', ');
}

function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos quatro amigos para sortear.');
        return;
    }

    let sorteio = [];
    let amigosTemp = [...amigos];

    // Embaralha a lista para evitar padrões previsíveis
    for (let i = amigosTemp.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosTemp[i], amigosTemp[j]] = [amigosTemp[j], amigosTemp[i]];
    }

    // Criando uma ordem aleatória
    for (let i = 0; i < amigosTemp.length; i++) {
        let amigo1 = amigosTemp[i];
        let amigo2 = amigosTemp[(i + 1) % amigosTemp.length];
        sorteio.push(`${amigo1} -> ${amigo2}`);
    }

    document.getElementById('lista-sorteio').innerHTML = sorteio.join('<br>');
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

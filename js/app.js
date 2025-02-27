let amigos = [];

function adicionar() {
    const nomeAmigo = document.getElementById('nome-amigo').value;
    if (nomeAmigo) {
        amigos.push(nomeAmigo);
        document.getElementById('nome-amigo').value = '';
        atualizarListaAmigos();
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('lista-amigos');
    listaAmigos.innerHTML = amigos.join(', ');
}

function sortear() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }
    const sorteio = [];
    const amigosTemp = [...amigos];
    while (amigosTemp.length > 1) {
        const indice1 = Math.floor(Math.random() * amigosTemp.length);
        const amigo1 = amigosTemp.splice(indice1, 1)[0];
        const indice2 = Math.floor(Math.random() * amigosTemp.length);
        const amigo2 = amigosTemp.splice(indice2, 1)[0];
        sorteio.push(`${amigo1} -> ${amigo2}`);
    }
    if (amigosTemp.length === 1) {
        const ultimoAmigo = amigosTemp[0];
        const primeiroAmigo = sorteio[0].split(' -> ')[0];
        sorteio.push(`${ultimoAmigo} -> ${primeiroAmigo}`);
    }
    document.getElementById('lista-sorteio').innerHTML = sorteio.join('<br>');
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
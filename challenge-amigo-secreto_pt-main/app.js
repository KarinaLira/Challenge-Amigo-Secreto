//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Lista para armazenar os nomes
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  const nome = inputAmigo.value.trim();

  if (nome) {
    amigos.push(nome);
    atualizarLista();
    inputAmigo.value = ''; // Limpa o campo de entrada
    inputAmigo.focus(); // Coloca o foco novamente no campo
  } else {
    alert('Por favor, insira um nome.');
  }
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
  listaAmigos.innerHTML = ''; // Limpa a lista

  amigos.forEach((nome, index) => {
    const li = document.createElement('li');
    li.textContent = nome;
    li.className = 'name-item';

    // Botão de remover
    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover';
    btnRemover.className = 'button-remove';
    btnRemover.addEventListener('click', () => {
      amigos.splice(index, 1);
      atualizarLista();
    });

    li.appendChild(btnRemover);
    listaAmigos.appendChild(li);
  });
}

// Função para sortear um amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    resultado.innerHTML = '<li>Adicione pelo menos um nome para realizar o sorteio.</li>';
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  resultado.innerHTML = `<li class="result-item">O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
}



    // CARROSSEL IMAGENS

// Criei uma lista com as imagens
const imagens = [
    document.getElementById("apartamento"),
    document.getElementById("banheiro"),
    document.getElementById("quarto"),
    document.getElementById("escritorio"),
  ];
  
  // Número que diz qual imagem está aparecendo (começa na primeira)
  let indiceAtual = 0;
  
  // Função para mostrar a imagem certa
  function mostrarImagemCerta() {
    // Para cada imagem na lista
    imagens.forEach((imagem, indice) => {
      if (indice === indiceAtual) {
        imagem.style.display = "block"; // Mostra a imagem certa
      } else {
        imagem.style.display = "none"; // Esconde as outras
      }
    });
  }
  
  // Função para avançar para a próxima imagem
  function RolarParaDireita() {
    indiceAtual = (indiceAtual + 1) % imagens.length; // Vai para a próxima e volta ao início quando acabar
    mostrarImagemCerta(); // Atualiza as imagens
  }
  
  // Função para voltar para a imagem anterior
  function RolarParaEsquerda() {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length; // Volta para a anterior e vai para o final se estiver no início
    mostrarImagemCerta(); // Atualiza as imagens
  }
  
  // Começa mostrando a primeira imagem
  mostrarImagemCerta();
  
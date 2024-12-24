// Função para criar as pílulas pequenas
function createPill() {
    const pill = document.createElement('div');
    pill.classList.add('pill');
    
    // Define o estilo para a pílula com metade verde e metade branca
    pill.style.background = 'linear-gradient(to bottom, #00ff00 50%, #ffffff 50%)';  // Metade verde e metade branca
    
    // Define o tamanho reduzido da pílula
    const pillSize = 1.5; // Tamanho reduzido
    pill.style.width = `${pillSize}vw`;  // Largura
    pill.style.height = `${pillSize}vh`;  // Altura
    
    pill.style.left = Math.random() * 100 + 'vw'; // Posição aleatória na tela
    pill.style.animationDuration = Math.random() * 2 + 3 + 's'; // Duração aleatória entre 3s e 5s
    pill.style.animationDelay = Math.random() * 2 + 's'; // Delay aleatório
    
    // Adiciona a pílula ao body
    document.body.appendChild(pill);
    
    // Remove a pílula após a animação
    setTimeout(() => {
        pill.remove();
    }, 5000); // Tempo de duração da animação
}

// Criar pílulas continuamente
setInterval(createPill, 300); // Intervalo de criação a cada 300ms

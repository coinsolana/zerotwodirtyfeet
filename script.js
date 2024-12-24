// Função para criar as pílulas pequenas
function createPill() {
    const pill = document.createElement('div');
    pill.classList.add('pill');
    
    // Define o estilo para a pílula com metade verde e metade branca
    pill.style.background = 'linear-gradient(to bottom, #00ff00 50%, #ffffff 50%)';  // Metade verde e metade branca
    
    // Define o tamanho reduzido da pílula em % da tela (2% da altura e largura da tela)
    const pillSize = 2; // 2% da tela
    pill.style.width = `${pillSize}vw`;  // Largura
    pill.style.height = `${pillSize}vh`;  // Altura
    
    pill.style.left = Math.random() * 100 + 'vw'; // Posição aleatória na largura da tela
    pill.style.animationDuration = Math.random() * 2 + 3 + 's'; // Animação variando entre 3s e 5s
    pill.style.animationDelay = Math.random() * 2 + 's'; // Delays aleatórios para variar o tempo de início
    
    // Adiciona a pílula ao body
    document.body.appendChild(pill);
    
    // Remove a pílula após a animação para evitar sobrecarga na página
    setTimeout(() => {
        pill.remove();
    }, 5000); // Tempo de duração da animação
}

// Criar pílulas continuamente
setInterval(createPill, 300); // Intervalo de criação a cada 300ms

// Efeito de parallax no scroll para dar uma sensação de profundidade
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const header = document.querySelector('.header');
    const tokenCards = document.querySelectorAll('.token-card');

    // Efeito Parallax no cabeçalho
    header.style.transform = `translateY(${scrollPosition * 0.3}px)`;

    // Efeito de opacidade nos cards conforme o scroll
    tokenCards.forEach(card => {
        let offset = card.offsetTop;
        if (scrollPosition > offset - window.innerHeight + 150) {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        } else {
            card.style.opacity = 0;
            card.style.transform = 'translateY(50px)';
        }
    });
});

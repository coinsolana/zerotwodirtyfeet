// Animação de scroll suave para navegação interna
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

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

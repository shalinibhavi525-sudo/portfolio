const exploreBtn = document.getElementById('explore-btn');
const heroName = document.getElementById('hero-name');

if (exploreBtn && heroName) {
    exploreBtn.addEventListener('mouseenter', () => {
        heroName.classList.add('shine-active');
    });
    
    exploreBtn.addEventListener('mouseleave', () => {
        heroName.classList.remove('shine-active');
    });
}

const exploreBtn = document.getElementById('explore-btn');
const heroName = document.getElementById('hero-name');

if(exploreBtn && heroName) {
    exploreBtn.addEventListener('mouseenter', () => {
        heroName.style.animation = 'flicker 0.15s infinite';
    });
    
    exploreBtn.addEventListener('mouseleave', () => {
        heroName.style.animation = 'none';
    });
}

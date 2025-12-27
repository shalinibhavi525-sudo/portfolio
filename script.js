const raven = document.getElementById('raven');
const ravenEyes = document.querySelectorAll('.raven-eye');

function randomBlink() {
    const delay = Math.random() * 4000 + 8000; 
    
    setTimeout(() => {
        ravenEyes.forEach(eye => {
            eye.style.opacity = '0';
            setTimeout(() => {
                eye.style.opacity = '1';
            }, 150);
        });
        
        randomBlink(); 
    }, delay);
}

randomBlink();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});


const scrollIndicator = document.querySelector('.scroll-indicator');
const heroName = document.querySelector('.hero-name');
const hoverStain = document.querySelector('.coffee-stain.hover-stain');

scrollIndicator.addEventListener('mouseenter', () => {
    hoverStain.style.opacity = '0.3';
});

scrollIndicator.addEventListener('mouseleave', () => {
    hoverStain.style.opacity = '0';
});
console.log('🌲 From Forest to Function');

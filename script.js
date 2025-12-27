const ravenEyes = document.querySelectorAll('.raven-eye');

function blinkRaven() {
    ravenEyes.forEach(eye => {
        eye.style.opacity = '0';
    });
    
    setTimeout(() => {
        ravenEyes.forEach(eye => {
            eye.style.opacity = '1';
        });
    }, 150);
}

function scheduleNextBlink() {
    const delay = Math.random() * 5000 + 5000;
    setTimeout(() => {
        blinkRaven();
        scheduleNextBlink();
    }, delay);
}

setTimeout(() => {
    scheduleNextBlink();
}, 2000);

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

const scrollBtn = document.getElementById('scrollBtn');
if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
        document.getElementById('story').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

console.log('🦅 The raven watches...');

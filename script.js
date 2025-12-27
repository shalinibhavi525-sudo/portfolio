const ravenEyes = document.querySelectorAll('.raven-eye');

function blinkRaven() {
    // Blink both eyes
    ravenEyes.forEach(eye => {
        eye.style.opacity = '0';
    });
    
    // Open eyes after 150ms
    setTimeout(() => {
        ravenEyes.forEach(eye => {
            eye.style.opacity = '1';
        });
    }, 150);
}

// Blink at random intervals (5-10 seconds)
function scheduleNextBlink() {
    const delay = Math.random() * 5000 + 5000; // 5-10 seconds
    setTimeout(() => {
        blinkRaven();
        scheduleNextBlink();
    }, delay);
}

// Start blinking after 2 seconds
setTimeout(() => {
    scheduleNextBlink();
}, 2000);

// ================================
// SMOOTH SCROLL
// ================================

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

// Also make scroll indicator clickable
const scrollBtn = document.getElementById('scrollBtn');
if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
        document.getElementById('story').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// ================================
// CONSOLE MESSAGES
// ================================

console.log('🌲 From Forest to Function');

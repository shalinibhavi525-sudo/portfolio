// ================================
// PAGE NAVIGATION - CLICK ONLY!
// ================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll to section on button click
    const buttons = document.querySelectorAll('a[href^="#"]');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Optional: Prevent wheel/touch scroll between sections
    // Uncomment if you want STRICT no-scroll enforcement
    /*
    document.body.addEventListener('wheel', function(e) {
        e.preventDefault();
    }, { passive: false });
    
    document.body.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, { passive: false });
    */
});

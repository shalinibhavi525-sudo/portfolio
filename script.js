document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
// Toggle the Forest Grid
document.getElementById('exploreWorkBtn').onclick = function() {
    document.getElementById('projectGridWrapper').style.display = 'block';
    document.body.style.overflow = 'hidden';
};

function hideProjectGrid() {
    document.getElementById('projectGridWrapper').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Data injection for subpages
function openProject(name) {
    const p = projectsData[name];
    const detail = document.getElementById('projectDetail');
    
    detail.innerHTML = `
        <h1>${name}</h1>
        <p style="color: #bbb;">${p.tagline}</p>
        <hr style="border-color: #444; margin: 20px 0;">
        <p><strong>[STACK]:</strong> ${p.tech}</p>
        <p style="margin-top: 20px;">${p.highlights}</p>
    `;
    
    document.getElementById('subpage').style.display = 'block';
}

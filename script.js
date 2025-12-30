document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
const projectsData = {
    "VERITAS": { tag: "Truth Protocol", tech: "DistilBERT, ONNX", info: "23ms latency. Offline inference." },
    "EdgeDev": { tag: "Hardened IDE", tech: "VS Code API", info: "Saves 80MB data per session." },
    "Bhai-Lang": { tag: "Hinglish Programming", tech: "Python", info: "Hinglish syntax with roast debugging." },
    "Calyx": { tag: "Memory Harvest", tech: "NLP Graph", info: "Mapping thoughts in the forest lab." },
    "Echo_Aid": { tag: "Speech Companion", tech: "Sentiment AI", info: "Offline emotion tracking." },
    "Border Incident Reporter": { tag: "Security Logger", tech: "Flask, GPS", info: "Instant logging for border units." },
    "Safe_Steps": { tag: "Disaster Route", tech: "Leaflet, Weather API", info: "Emergency shelter finder." },
    "Project Parichay": { tag: "Worker ID", tech: "PWA, QR", info: "ID generation for informal workers." }
};

// Generate the 8 cards
const grid = document.getElementById('projectGrid');
Object.keys(projectsData).forEach(name => {
    const card = document.createElement('div');
    card.className = 'photocard';
    card.style.transform = `rotate(${(Math.random() * 4 - 2).toFixed(2)}deg)`;
    card.innerHTML = `<div class="card-title">${name}</div>`;
    card.onclick = () => openProject(name);
    grid.appendChild(card);
});

function openProject(name) {
    const p = projectsData[name];
    document.getElementById('projectDetail').innerHTML = `
        <h1 style="color:#d4af37; font-family:'Playfair Display';">${name}</h1>
        <p><strong>[STACK]:</strong> ${p.tech}</p>
        <p style="margin-top:20px;">${p.info}</p>
    `;
    document.getElementById('subpage').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProject() {
    document.getElementById('subpage').style.display = 'none';
    document.body.style.overflow = 'auto';
}

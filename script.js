const projectsData = {
    "VERITAS": {
        tagline: "Decentralized, Offline-First Misinformation Detection for the Edge",
        challenge: "In high-latency environments (like rural India or 3G networks), traditional cloud-based fact-checking is too slow (>1000ms).",
        highlights: ["20x faster than cloud API calls.", "Zero user data leaves the local environment."],
        tech: "DistilBERT, ONNX, Transformers.js"
    },
    "EdgeDev": {
        tagline: "Architectural Hardening for the Digital Frontier",
        story: "Built for developers operating under 'Adversarial Network Conditions'.",
        highlights: ["Disables telemetry.", "Saves ~50MB data per session."],
        tech: "VS Code API, System Protocols"
    },
    "Bhai-Lang": {
        tagline: "A Hinglish Programming Language",
        concept: "Mapping traditional logic to local Indian slang.",
        highlights: ["Custom Syntax Tree", "Roast-Driven Error Messages"],
        tech: "Python, Regex"
    },
    "Calyx": {
        tagline: "The Augmented Intelligence Harvest Layer",
        concept: "Treats memory as a network of semantic connections.",
        highlights: ["Semantic Memory", "Smart Concept Retrieval"],
        tech: "Python, NLP Parser"
    }
};

// Section Swapping Logic
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

// Hover Shine Effect
const exploreBtn = document.getElementById('explore-btn');
const heroName = document.getElementById('hero-name');

if (exploreBtn && heroName) {
    exploreBtn.addEventListener('mouseenter', () => heroName.classList.add('shine-active'));
    exploreBtn.addEventListener('mouseleave', () => heroName.classList.remove('shine-active'));
}

// Grid Generation
const grid = document.getElementById('projectGrid');
Object.keys(projectsData).forEach((name) => {
    const card = document.createElement('div');
    card.className = 'photocard';
    card.innerHTML = `<div>${name}</div>`;
    card.onclick = () => openProject(name);
    grid.appendChild(card);
});

// Overlay Logic
function openProject(name) {
    const p = projectsData[name];
    const overlay = document.getElementById('subpage');
    const detail = document.getElementById('projectDetail');
    
    let content = `<h1 style="font-family:'Pinyon Script'; font-size:4rem;">${name}</h1><br>`;
    content += `<p style="font-family:'EB Garamond'; font-style:italic;">"${p.tagline}"</p><hr style="margin:20px 0; border:0; border-top:1px solid #999;"><br>`;
    
    for (let key in p) {
        if (key === 'tagline') continue;
        if (Array.isArray(p[key])) {
            content += `<p><strong>[${key.toUpperCase()}]</strong></p>`;
            p[key].forEach(item => content += `<p>• ${item}</p>`);
            content += `<br>`;
        } else {
            content += `<p><strong>[${key.toUpperCase()}]</strong>: ${p[key]}</p><br>`;
        }
    }
    content += `<div style="font-family:'Pinyon Script'; font-size:2.5rem; text-align:right; margin-top:40px;">Shambhavi Singh</div>`;
    
    detail.innerHTML = content;
    overlay.style.display = 'block';
}

function closeProject() {
    document.getElementById('subpage').style.display = 'none';
}

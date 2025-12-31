// =========================
// PROJECT DATA
// =========================
const projectsData = {
    "VERITAS": {
        tagline: "Decentralized, Offline-First Misinformation Detection for the Edge",
        sections: {
            "The Challenge": "In high-latency environments (like rural India or 3G networks), traditional cloud-based fact-checking is too slow (>1000ms), compromises user privacy by sending browsing data to central servers, and is inaccessible to 450M+ Indians lacking high-speed internet.",
            "The Architecture": "Veritas moves the intelligence from the Cloud to the Client. I optimized a DistilBERT Transformer model specifically for browser-based inference. By implementing Dynamic Int8 Quantization and leveraging the ONNX Runtime, I reduced the model size from ~400MB to 64.45MB without losing server-grade accuracy.",
            "Technical Highlights": [
                "Ultra-Low Latency: Achieved ~23ms CPU inference locally, making it 20x faster than cloud API calls.",
                "Privacy-Centric: Zero Egress—no user data ever leaves the local environment.",
                "Web-Native Inference: Built using transformers.js for seamless integration into a production browser extension."
            ],
            "Tech Stack": "DistilBERT, ONNX, Transformers.js, Optimum, JavaScript"
        }
    },
    "EdgeDev": {
        tagline: "Architectural Hardening for the Digital Frontier",
        sections: {
            "The Story": "Forged in the Teliamura Reserved Forest (Tripura, India), this project was built for developers operating under 'Adversarial Network Conditions.'",
            "The Solution": "EdgeDev is a bespoke hardening protocol for VS Code. It silences the 'telemetric noise' of modern IDEs to preserve Bandwidth.",
            "Technical Highlights": [
                "Bandwidth Integrity: Hard-disables background telemetry.",
                "The Academic Palette: Custom high-contrast theme (Espresso/Deep Black).",
                "Efficiency: Saves ~50MB - 80MB of data per coding session."
            ],
            "Tech Stack": "VS Code Extension API, CSS (Custom Theming)"
        }
    },
    "Bhai-Lang": {
        tagline: "A Hinglish Programming Language for Desi Developers",
        sections: {
            "The Concept": "Writing print() is too mainstream. Built on the idea that 'Bhai, code toh aise likhte hain!'",
            "The Logic": "Built as an interpreter in Python, it maps traditional logic to local Indian slang.",
            "Technical Highlights": [
                "Custom Syntax Tree: (jab tak bhai), (bhai ye hai).",
                "Roast-Driven Error Messages: Features a 'Loving Roast' system.",
            ],
            "Tech Stack": "Python (Core Interpreter), Git, Regex"
        }
    },
    "Calyx": {
        tagline: "The Augmented Intelligence Harvest Layer",
        sections: {
            "The Architecture": "It uses a local Reflection Engine to process thoughts and notes, mapping them into an Insight Graph.",
            "Tech Stack": "Python, Streamlit, NLP Intent Parser"
        }
    },
    "Echo_Aid": {
        tagline: "Real-Time Emotion-Aware Speech Companion",
        sections: {
            "The Logic": "Classifies emotional states (calm, anxious, happy, tired) to provide gentle textual feedback.",
            "Tech Stack": "Python, Streamlit, Sentiment Analysis"
        }
    },
    "Border Incident Reporter": {
        tagline: "Real-Time Incident Logging for Security Personnel",
        sections: {
            "The Solution": "A high-speed incident logging system designed for border security tracking.",
            "Tech Stack": "Flask, SQLite, Leaflet.js"
        }
    },
    "Safe_Steps": {
        tagline: "Disaster Route Finder & Emergency Shelter Locator",
        sections: {
            "The Solution": "Browser-based app combining real-time weather alerts with map-based shelters.",
            "Tech Stack": "HTML5, CSS3, JavaScript, Leaflet.js"
        }
    },
    "Project Parichay": {
        tagline: "Offline ID Generator for Informal Workers",
        sections: {
            "The Logic": "Works entirely offline through PWA caching and localStorage.",
            "Tech Stack": "HTML5, CSS3, QRCode.js"
        }
    }
};

// =========================
// GENERATE 4x2 GRID
// =========================
const grid = document.getElementById('projectsGrid');
const ferns = ['fern%201.png', 'fern%202.png'];

Object.keys(projectsData).forEach((name, index) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'project-card-wrapper';
    
    const title = document.createElement('div');
    title.className = 'project-card-title';
    title.textContent = name;
    
    const card = document.createElement('div');
    card.className = 'project-card';
    
    // Shuffle ferns
    const fern = document.createElement('img');
    fern.src = ferns[index % 2];
    fern.className = index % 2 === 0 ? 'card-fern fern-top-right' : 'card-fern fern-bottom-left';
    
    card.appendChild(fern);
    card.onclick = () => openProject(name);
    
    wrapper.appendChild(title);
    wrapper.appendChild(card);
    grid.appendChild(wrapper);
});

// =========================
// SUBPAGE LOGIC
// =========================
function openProject(name) {
    const project = projectsData[name];
    let html = `<h1>${name}</h1><h2>${project.tagline}</h2>`;
    
    for (let [sName, sContent] of Object.entries(project.sections)) {
        html += `<h3>${sName}</h3>`;
        if (Array.isArray(sContent)) {
            html += '<ul>' + sContent.map(i => `<li>${i}</li>`).join('') + '</ul>';
        } else {
            html += `<p>${sContent}</p>`;
        }
    }
    
    document.getElementById('subpageContent').innerHTML = html;
    document.getElementById('project-subpage').style.display = 'block';
}

function closeSubpage() {
    document.getElementById('project-subpage').style.display = 'none';
}

// =========================
// NAVIGATION & GLOW
// =========================
const exploreWrapper = document.querySelector('.explore-wrapper');
const heroName = document.getElementById('heroName');

if (exploreWrapper) {
    exploreWrapper.addEventListener('mouseenter', () => heroName.classList.add('glow'));
    exploreWrapper.addEventListener('mouseleave', () => heroName.classList.remove('glow'));
}

// Handle modular navigation
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

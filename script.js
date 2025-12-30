// Navigation Fix
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

const projectsData = {
    "VERITAS": {
        tagline: "Decentralized, Offline-First Misinformation Detection for the Edge",
        challenge: "In high-latency environments (like rural India or 3G networks), traditional cloud-based fact-checking is too slow (>1000ms), compromises user privacy by sending browsing data to central servers, and is inaccessible to 450M+ Indians lacking high-speed internet.",
        architecture: "Veritas moves the intelligence from the Cloud to the Client. I optimized a DistilBERT Transformer model specifically for browser-based inference. By implementing Dynamic Int8 Quantization and leveraging the ONNX Runtime, I reduced the model size from ~400MB to 64.45MB without losing server-grade accuracy.",
        highlights: [
            "Ultra-Low Latency: Achieved ~23ms CPU inference locally, making it 20x faster than cloud API calls.",
            "Privacy-Centric: Zero Egress—no user data ever leaves the local environment.",
            "Web-Native Inference: Built using transformers.js for seamless integration into a production browser extension."
        ],
        tech: "DistilBERT, ONNX, Transformers.js, JavaScript"
    },
    "EDGEDEV": {
        tagline: "Architectural Hardening for the Digital Frontier",
        story: "Forged in the Teliamura Reserved Forest (Tripura, India), built for developers operating under 'Adversarial Network Conditions.' Addresses scarcity: 4G mobile hotspots and a strict 2GB daily data limit.",
        highlights: [
            "Bandwidth Integrity: Hard-disables background telemetry and automatic updates.",
            "Git Fetch Suppression: Prevents background repository polling leaks.",
            "Efficiency: Saves ~50MB - 80MB of data per session."
        ],
        tech: "VS Code Extension API, CSS, System Protocols"
    },
    "BHAI-LANG": {
        tagline: "A Hinglish Programming Language for Desi Developers",
        concept: "Built on the idea that 'Bhai, code toh aise likhte hain!', mapping traditional logic to local Indian slang.",
        highlights: [
            "Custom Syntax Tree: Implements loops (jab tak bhai) and entry points (hi bhai).",
            "Roast-Driven Error Messages: Features a 'Loving Roast' system for debugging."
        ],
        tech: "Python, Git, Regex"
    },
    "CALYX": {
        tagline: "The Augmented Intelligence Harvest Layer",
        concept: "A local prototype that treats memory as a network of semantic connections rather than a list of files.",
        highlights: [
            "Semantic Memory: Builds an evolving memory of connections via NLP intent.",
            "Smart Concept Retrieval: Search your knowledge base by mood or concept."
        ],
        tech: "Python, Streamlit, NLP Intent Parser"
    }
    // Add remaining 4 projects here using the same structure
};

const grid = document.getElementById('projectGrid');

// Restore Cards with Ferns
Object.keys(projectsData).forEach((name, index) => {
    const card = document.createElement('div');
    card.className = 'photocard';
    
    // Add Fern Image
    const fern = document.createElement('img');
    fern.src = 'fern.png'; // Make sure this file is in your folder
    fern.className = 'card-fern';
    if(index % 2 === 0) { fern.style.left = "-30px"; fern.style.top = "10px"; }
    else { fern.style.right = "-30px"; fern.style.bottom = "10px"; fern.style.transform = "rotate(90deg)"; }

    card.innerHTML = `
        <div class="card-image-layer"></div>
        <div class="card-title">${name}</div>
    `;
    card.appendChild(fern);
    card.onclick = () => openProject(name);
    grid.appendChild(card);
});

function openProject(name) {
    const project = projectsData[name];
    const overlay = document.getElementById('subpage');
    const detail = document.getElementById('projectDetail');
    
    // START AT TOP - FIXES THE SCROLLING ISSUE
    overlay.scrollTop = 0;

    let html = `<h1 style="color:var(--gold)">> ${name}</h1><br>`;
    html += `<p style="font-style:italic; font-size:1.1rem;">${project.tagline}</p><br>`;
    
    for (let [key, value] of Object.entries(project)) {
        if (key === 'tagline') continue;
        if (key === 'highlights') {
            html += `<p><strong>[FIELD NOTES]:</strong></p>`;
            value.forEach(h => html += `<p>• ${h}</p>`);
            html += `<br>`;
        } else {
            html += `<p><strong>[${key.toUpperCase()}]:</strong> ${value}</p><br>`;
        }
    }
    
    // RESTORE SIGNATURE AT THE END OF TEXT
    html += `<div style="font-family:'Pinyon Script', cursive; font-size:2.5rem; text-align:right; margin-top:40px; color:var(--gold);">Shambhavi Singh</div>`;

    detail.innerHTML = html;
    overlay.style.display = 'block';
}

function closeProject() {
    document.getElementById('subpage').style.display = 'none';
}

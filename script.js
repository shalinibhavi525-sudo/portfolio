const projectsData = {
    "VERITAS": {
        tagline: "Decentralized, Offline-First Misinformation Detection for the Edge.",
        content: `<h3>The Challenge</h3><p>Traditional cloud-based fact-checking is too slow (>1000ms) for rural India and compromises user privacy. Veritas moves intelligence to the client.</p><h3>The Architecture</h3><p>Optimized a DistilBERT Transformer for browser-based inference. Reduced model from 400MB to 64.45MB using Int8 Quantization.</p><ul><li><strong>23ms Inference:</strong> 20x faster than cloud API.</li><li><strong>Zero Egress:</strong> No data leaves the local machine.</li></ul><p><strong>Tech Stack:</strong> ONNX, Transformers.js, JavaScript.</p>`
    },
    "EdgeDev": {
        tagline: "Architectural Hardening for the Digital Frontier.",
        content: `<h3>The Story</h3><p>Built in Tripura's Reserved Forest for 4G hotspot limits and daily power cycles. EdgeDev silences VS Code telemetry to save bandwidth.</p><ul><li><strong>Bandwidth Integrity:</strong> Disables non-consensual updates.</li><li><strong>Efficiency:</strong> Saves up to 80MB per session.</li></ul><p><strong>Tech Stack:</strong> VS Code API, CSS, Network Protocols.</p>`
    },
    "Bhai-Lang": {
        tagline: "A Hinglish Programming Language for Desi Developers.",
        content: `<h3>The Concept</h3><p>Interpret Python logic into local Indian slang. Make coding relatable for those who think in Hinglish.</p><ul><li><strong>Syntax:</strong> (jab tak bhai), (bhai ye hai).</li><li><strong>Loving Roasts:</strong> Humorous debugging messages.</li></ul><p><strong>Tech Stack:</strong> Python, Regex.</p>`
    },
    "Calyx": {
        tagline: "The Augmented Intelligence Harvest Layer.",
        content: `<h3>Concept</h3><p>Treatment of memory as a network. Uses a local Reflection Engine to reveal connections between user notes.</p><ul><li><strong>Semantic Memory:</strong> Intent-based retrieval.</li><li><strong>Insight Graph:</strong> Non-relational local management.</li></ul><p><strong>Tech Stack:</strong> Python, NLP Parser.</p>`
    },
    "Echo_Aid": {
        tagline: "Real-Time Emotion-Aware Speech Companion.",
        content: `<h3>Purpose</h3><p>A mental wellness tool that classifies emotional states (anxious, tired, calm) to provide vocal feedback.</p><ul><li><strong>Real-time:</strong> Local audio stream processing.</li><li><strong>Privacy:</strong> No cloud upload.</li></ul><p><strong>Tech Stack:</strong> Streamlit, Sentiment Modules.</p>`
    },
    "Border Incident Reporter": {
        tagline: "Real-Time Incident Logging for Security Personnel.",
        content: `<h3>The Solution</h3><p>High-speed logging for border security under pressure. Reports under 30 seconds.</p><ul><li><strong>GPS Auto-Capture:</strong> Automatic tagging.</li><li><strong>Offline Sync:</strong> SQLite persistence.</li></ul><p><strong>Tech Stack:</strong> Flask, Leaflet.js, PostgreSQL.</p>`
    },
    "Safe_steps": {
        tagline: "Disaster Route Finder & Emergency Shelter Locator.",
        content: `<h3>Problem</h3><p>Crisis data is chaotic. SafeSteps uses clean design to turn weather APIs into calm guidance.</p><ul><li><strong>Offline Fallback:</strong> Resilience logic.</li><li><strong>Leaflet Zones:</strong> Shelter markers.</li></ul><p><strong>Tech Stack:</strong> OpenWeatherMap API, HTML5.</p>`
    },
    "Project Parichay": {
        tagline: "Offline ID Generator for Informal Workers.",
        content: `<h3>Impact</h3><p>Identification for workers with zero internet coverage. Works via PWA caching.</p><ul><li><strong>Smart QR:</strong> Contact info encoded directly.</li><li><strong>Persistence:</strong> IndexedDB local storage.</li></ul><p><strong>Tech Stack:</strong> QRCode.js, JavaScript.</p>`
    }
};

function openProject(name) {
    const p = projectsData[name];
    document.getElementById('subpageContent').innerHTML = `<h1>${name}</h1><p style="font-style:italic; font-size: 1.4rem; color: #d4af37; margin-bottom: 30px;">${p.tagline}</p>${p.content}`;
    document.getElementById('project-subpage').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeSubpage() { 
    document.getElementById('project-subpage').style.display = 'none'; 
    document.body.style.overflow = 'hidden'; 
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.onclick = (e) => {
        const target = document.querySelector(link.getAttribute('href'));
        if(target) {
            e.preventDefault();

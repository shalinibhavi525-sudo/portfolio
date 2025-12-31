const projectsData = {
    "VERITAS": {
        tagline: "Decentralized, Offline-First Misinformation Detection for the Edge.",
        content: `<h1>VERITAS: The Truth Protocol</h1><h3>The Challenge</h3><p>In high-latency environments (like rural India or 3G networks), traditional cloud-based fact-checking is too slow (>1000ms), compromises user privacy by sending browsing data to central servers, and is inaccessible to 450M+ Indians lacking high-speed internet.</p>
        <h3>The Architecture</h3><p>Veritas moves the intelligence from the Cloud to the Client. I optimized a DistilBERT Transformer model specifically for browser-based inference. By implementing Dynamic Int8 Quantization and leveraging the ONNX Runtime, I reduced the model size from ~400MB to 64.45MB without losing server-grade accuracy.</p>
        <h3>Technical Highlights</h3><ul><li>Ultra-Low Latency: Achieved ~23ms CPU inference locally, making it 20x faster than cloud API calls.</li><li>Privacy-Centric: Zero Egress—no user data ever leaves the local environment.</li><li>Web-Native Inference: Built using transformers.js for seamless integration into a production browser extension.</li></ul>
        <p><strong>Tech Stack:</strong> DistilBERT, ONNX, Transformers.js, Optimum, JavaScript.</p>`
    },
    "EdgeDev": {
        tagline: "Architectural Hardening for the Digital Frontier.",
        content: `<h1>EdgeDev | Protocol: Jungle-Mode</h1><h3>The Story</h3><p>Forged in the Teliamura Reserved Forest (Tripura, India), this project was built for developers operating under "Adversarial Network Conditions." It addresses extreme scarcity: 4G mobile hotspots, daily power grid cycles, and a strict 2GB daily data limit.</p>
        <h3>The Solution</h3><p>EdgeDev is a bespoke hardening protocol for VS Code. It silences the "telemetric noise" of modern IDEs to preserve the most limited resource: Bandwidth.</p>
        <h3>Technical Highlights</h3><ul><li>Bandwidth Integrity: Hard-disables background telemetry, non-consensual extension updates, and automatic TypeScript type acquisition.</li><li>Git Fetch Suppression: Prevents background repository polling to stop "hidden" data leaks.</li><li>The Academic Palette: Custom high-contrast theme (Espresso/Deep Black) designed specifically to reduce visual noise and minimize power draw on battery reserves.</li><li>Efficiency: Saves ~50MB - 80MB of data per coding session.</li></ul>
        <p><strong>Tech Stack:</strong> VS Code Extension API, CSS (Custom Theming), System-level Network Protocols.</p>`
    },
    "Bhai-Lang": {
        tagline: "A Hinglish Programming Language for Desi Developers.",
        content: `<h1>Bhai-Lang</h1><h3>The Concept</h3><p>Writing print() is too mainstream. Built on the idea that "Bhai, code toh aise likhte hain!", this project creates a relatable coding experience for developers who think in Hinglish.</p>
        <h3>The Logic</h3><p>Built as an interpreter in Python, it maps traditional logic to local Indian slang, making it the only language where bhai bol("Namaste, duniya!"); is valid syntax.</p>
        <h3>Technical Highlights</h3><ul><li>Custom Syntax Tree: Implements standard loops (jab tak bhai), variables (bhai ye hai), and entry points (hi bhai).</li><li>Roast-Driven Error Messages: Features a "Loving Roast" system for debugging (e.g., “Maths class mein soye the kya?” for division by zero).</li><li>Functionality: Supports Fibonacci sequences, FizzBuzz challenges, and basic calculators.</li></ul>
        <p><strong>Tech Stack:</strong> Python (Core Interpreter), Git, Regex.</p>`
    },
    "Calyx": {
        tagline: "The Augmented Intelligence Harvest Layer.",
        content: `<h1>Calyx</h1><h3>The Concept</h3><p>"The human mind is a garden. Calyx is the soil." This is a local prototype for an "Augmented Intelligence" system that treats memory as a network of connections rather than a list of files.</p>
        <h3>The Architecture</h3><p>It uses a local Reflection Engine to process your thoughts and notes, mapping them into a persistent Insight Graph to reveal connections you didn’t know existed.</p>
        <h3>Technical Highlights</h3><ul><li>Semantic Memory: Builds an evolving memory of connections by analyzing the intent and emotional tone of user inputs.</li><li>Smart Concept Retrieval: Search your knowledge base by concept or mood rather than exact keywords.</li><li>Modular Storage: Uses user_knowledge.json and insights_store.json for lightweight, non-relational local data management.</li></ul>
        <p><strong>Tech Stack:</strong> Python, Streamlit, NLP Intent Parser, Custom Insight Graph Engine.</p>`
    },
    "Echo_Aid": {
        tagline: "Real-Time Emotion-Aware Speech Companion.",
        content: `<h1>Echo_Aid</h1><h3>The Purpose</h3><p>An "AI that listens between the lines." Echo_Aid is a mental wellness tool designed to help users recognize their own patterns of stress and vocal tone in real-time.</p>
        <h3>The Logic</h3><p>Built to work fully offline to respect user privacy, the app listens to your voice and classifies emotional states (calm, anxious, happy, tired) to provide gentle textual feedback.</p>
        <h3>Technical Highlights</h3><ul><li>Real-time Transcription: Uses a local voice_listener.py to capture and process audio streams instantly.</li><li>Sentiment Trends: Visualizes emotional patterns over time using a dedicated mood_tracker.py.</li><li>Empathetic UX: Responds with encouraging feedback like "Your tone feels calmer today" to promote mindful communication.</li></ul>
        <p><strong>Tech Stack:</strong> Python, Streamlit, speech_recognition, Sentiment Analysis Modules.</p>`
    },
    "Border": {
        tagline: "Real-Time Incident Logging for Security Personnel.",
        content: `<h1>Border Incident Reporter</h1><h3>The Solution</h3><p>A high-speed incident logging system designed for border security personnel to track breaches and suspicious activities under pressure. The goal was to ensure reporting could happen in under 30 seconds.</p>
        <h3>Technical Highlights</h3><ul><li>GPS Auto-Capture: Automatic location tagging for all reports to ensure accurate field intelligence.</li><li>Intermittent Sync: Features offline capability to ensure logs are saved even when connection to the command center is lost.</li><li>Severity Management: Categorizes events from Low to Critical with photo evidence attachments.</li><li>Data Export: Generates CSV reports and visualizes incidents on a real-time command center dashboard using Leaflet.js.</li></ul>
        <p><strong>Tech Stack:</strong> Flask (Backend), SQLite/PostgreSQL, Leaflet.js, Vanilla JavaScript.</p>`
    },
    "Safe_steps": {
        tagline: "Disaster Route Finder & Emergency Shelter Locator.",
        content: `<h1>Safe_steps</h1><h3>The Problem</h3><p>During floods or storms, information overload is dangerous. SafeSteps proves that clean design and focused APIs can turn chaotic data into calm, useful guidance.</p>
        <h3>The Solution</h3><p>A browser-based app that combines real-time weather alerts with a map-based shelter locator, requiring no login or setup for users in crisis.</p>
        <h3>Technical Highlights</h3><ul><li>API Resilience: Includes an offline fallback message if the weather API is unreachable.</li><li>Dynamic Map Layers: Uses Leaflet.js to overlay real-time disaster zones with static shelter markers.</li><li>One-Click Alerting: Fetches local weather messages instantly based on the user's city input.</li></ul>
        <p><strong>Tech Stack:</strong> HTML5, CSS3, JavaScript, Leaflet.js, OpenWeatherMap API.</p>`
    },
    "Parichay": {
        tagline: "Offline ID Generator for Informal Workers.",
        content: `<h1>Project Parichay</h1><h3>The Impact</h3><p>Millions of informal workers lack formal identification. Project Parichay allows them to generate and print professional ID cards containing their photo, occupation, and a vital emergency QR code.</p>
        <h3>The Logic</h3><p>Works entirely offline through PWA caching and localStorage, ensuring utility in areas with zero internet coverage.</p>
        <h3>Technical Highlights</h3><ul><li>Smart QR Integration: Encodes contact and job information directly into a scannable QR code on the card.</li><li>Print-Optimized: Features an auto-generated, CSS-formatted layout ready for immediate printing.</li><li>Data Persistence: Uses IndexedDB/localStorage to keep worker profiles stored locally on the device.</li></ul>
        <p><strong>Tech Stack:</strong> HTML5, CSS3, JavaScript, QRCode.js.</p>`
    }
};

window.openProject = function(name) {
    const p = projectsData[name];
    if(!p) return;
    document.getElementById('subpageContent').innerHTML = `<p style="font-style:italic; font-size: 1.5rem; color: #d4af37; margin-bottom: 30px;">${p.tagline}</p>${p.content}`;
    document.getElementById('project-subpage').style.display = 'block';
    document.body.style.overflow = 'hidden';
};

window.closeSubpage = function() { 
    document.getElementById('project-subpage').style.display = 'none'; 
    document.body.style.overflow = 'hidden'; 
};

document.querySelectorAll('.nav-link').forEach(link => {
    link.onclick = (e) => {
        const targetAttr = link.getAttribute('href');
        const target = document.querySelector(targetAttr);
        if(target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };
});

const exp = document.querySelector('.explore-wrapper');
const nm = document.getElementById('heroName');
if(exp) {
    exp.onmouseenter = () => nm.classList.add('glow');
    exp.onmouseleave = () => nm.classList.remove('glow');
}

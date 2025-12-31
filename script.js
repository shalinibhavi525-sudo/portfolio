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
            "The Story": "Forged in the Teliamura Reserved Forest (Tripura, India), this project was built for developers operating under 'Adversarial Network Conditions.' It addresses extreme scarcity: 4G mobile hotspots, daily power grid cycles, and a strict 2GB daily data limit.",
            "The Solution": "EdgeDev is a bespoke hardening protocol for VS Code. It silences the 'telemetric noise' of modern IDEs to preserve the most limited resource: Bandwidth.",
            "Technical Highlights": [
                "Bandwidth Integrity: Hard-disables background telemetry, non-consensual extension updates, and automatic TypeScript type acquisition.",
                "Git Fetch Suppression: Prevents background repository polling to stop 'hidden' data leaks.",
                "The Academic Palette: Custom high-contrast theme (Espresso/Deep Black) designed specifically to reduce visual noise and minimize power draw on battery reserves.",
                "Efficiency: Saves ~50MB - 80MB of data per coding session."
            ],
            "Tech Stack": "VS Code Extension API, CSS (Custom Theming), System-level Network Protocols"
        }
    },
    "Bhai-Lang": {
        tagline: "A Hinglish Programming Language for Desi Developers",
        sections: {
            "The Concept": "Writing print() is too mainstream. Built on the idea that 'Bhai, code toh aise likhte hain!', this project creates a relatable coding experience for developers who think in Hinglish.",
            "The Logic": "Built as an interpreter in Python, it maps traditional logic to local Indian slang, making it the only language where bhai bol('Namaste, duniya!'); is valid syntax.",
            "Technical Highlights": [
                "Custom Syntax Tree: Implements standard loops (jab tak bhai), variables (bhai ye hai), and entry points (hi bhai).",
                "Roast-Driven Error Messages: Features a 'Loving Roast' system for debugging (e.g., 'Maths class mein soye the kya?' for division by zero).",
                "Functionality: Supports Fibonacci sequences, FizzBuzz challenges, and basic calculators."
            ],
            "Tech Stack": "Python (Core Interpreter), Git, Regex"
        }
    },
    "Calyx": {
        tagline: "The Augmented Intelligence Harvest Layer",
        sections: {
            "The Concept": "'The human mind is a garden. Calyx is the soil.' This is a local prototype for an 'Augmented Intelligence' system that treats memory as a network of connections rather than a list of files.",
            "The Architecture": "It uses a local Reflection Engine to process your thoughts and notes, mapping them into a persistent Insight Graph to reveal connections you didn't know existed.",
            "Technical Highlights": [
                "Semantic Memory: Builds an evolving memory of connections by analyzing the intent and emotional tone of user inputs.",
                "Smart Concept Retrieval: Search your knowledge base by concept or mood rather than exact keywords.",
                "Modular Storage: Uses user_knowledge.json and insights_store.json for lightweight, non-relational local data management."
            ],
            "Tech Stack": "Python, Streamlit, NLP Intent Parser, Custom Insight Graph Engine"
        }
    },
    "Echo_Aid": {
        tagline: "Real-Time Emotion-Aware Speech Companion",
        sections: {
            "The Purpose": "An 'AI that listens between the lines.' Echo_Aid is a mental wellness tool designed to help users recognize their own patterns of stress and vocal tone in real-time.",
            "The Logic": "Built to work fully offline to respect user privacy, the app listens to your voice and classifies emotional states (calm, anxious, happy, tired) to provide gentle textual feedback.",
            "Technical Highlights": [
                "Real-time Transcription: Uses a local voice_listener.py to capture and process audio streams instantly.",
                "Sentiment Trends: Visualizes emotional patterns over time using a dedicated mood_tracker.py.",
                "Empathetic UX: Responds with encouraging feedback like 'Your tone feels calmer today' to promote mindful communication."
            ],
            "Tech Stack": "Python, Streamlit, speech_recognition, Sentiment Analysis Modules"
        }
    },
    "Border Incident Reporter": {
        tagline: "Real-Time Incident Logging for Security Personnel",
        sections: {
            "The Solution": "A high-speed incident logging system designed for border security personnel to track breaches and suspicious activities under pressure. The goal was to ensure reporting could happen in under 30 seconds.",
            "Technical Highlights": [
                "GPS Auto-Capture: Automatic location tagging for all reports to ensure accurate field intelligence.",
                "Intermittent Sync: Features offline capability to ensure logs are saved even when connection to the command center is lost.",
                "Severity Management: Categorizes events from Low to Critical with photo evidence attachments.",
                "Data Export: Generates CSV reports and visualizes incidents on a real-time command center dashboard using Leaflet.js."
            ],
            "Tech Stack": "Flask (Backend), SQLite/PostgreSQL, Leaflet.js, Vanilla JavaScript"
        }
    },
    "Safe_Steps": {
        tagline: "Disaster Route Finder & Emergency Shelter Locator",
        sections: {
            "The Problem": "During floods or storms, information overload is dangerous. SafeSteps proves that clean design and focused APIs can turn chaotic data into calm, useful guidance.",
            "The Solution": "A browser-based app that combines real-time weather alerts with a map-based shelter locator, requiring no login or setup for users in crisis.",
            "Technical Highlights": [
                "API Resilience: Includes an offline fallback message if the weather API is unreachable.",
                "Dynamic Map Layers: Uses Leaflet.js to overlay real-time disaster zones with static shelter markers.",
                "One-Click Alerting: Fetches local weather messages instantly based on the user's city input."
            ],
            "Tech Stack": "HTML5, CSS3, JavaScript, Leaflet.js, OpenWeatherMap API"
        }
    },
    "Project Parichay": {
        tagline: "Offline ID Generator for Informal Workers",
        sections: {
            "The Impact": "Millions of informal workers lack formal identification. Project Parichay allows them to generate and print professional ID cards containing their photo, occupation, and a vital emergency QR code.",
            "The Logic": "Works entirely offline through PWA caching and localStorage, ensuring utility in areas with zero internet coverage.",
            "Technical Highlights": [
                "Smart QR Integration: Encodes contact and job information directly into a scannable QR code on the card.",
                "Print-Optimized: Features an auto-generated, CSS-formatted layout ready for immediate printing.",
                "Data Persistence: Uses IndexedDB/localStorage to keep worker profiles stored locally on the device."
            ],
            "Tech Stack": "HTML5, CSS3, JavaScript, QRCode.js"
        }
    }
};

// =========================
// GENERATE PROJECT CARDS
// =========================

const grid = document.getElementById('projectsGrid');
const ferns = ['fern%201.png', 'fern%202.png'];
const fernPositions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

Object.keys(projectsData).forEach((name, index) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'project-card-wrapper';
    
    // Title on top of card
    const title = document.createElement('div');
    title.className = 'project-card-title';
    title.textContent = name;
    
    // Card itself
    const card = document.createElement('div');
    card.className = 'project-card';
    
    // Add fern sticking out
    const fern = document.createElement('img');
    fern.src = ferns[index % 2];
    fern.className = `card-fern fern-${fernPositions[index % 4]}`;
    
    card.appendChild(fern);
    card.onclick = () => openProject(name);
    
    wrapper.appendChild(title);
    wrapper.appendChild(card);
    grid.appendChild(wrapper);
});

// =========================
// OPEN PROJECT SUBPAGE
// =========================

function openProject(name) {
    const project = projectsData[name];
    let html = `
        <h1>${name}</h1>
        <h2>${project.tagline}</h2>
    `;
    
    // Add all sections
    for (let [sectionName, sectionContent] of Object.entries(project.sections)) {
        html += `<h3>${sectionName}</h3>`;
        
        if (Array.isArray(sectionContent)) {
            html += '<ul>';
            sectionContent.forEach(item => {
                html += `<li>${item}</li>`;
            });
            html += '</ul>';
        } else {
            html += `<p>${sectionContent}</p>`;
        }
    }
    
    document.getElementById('subpageContent').innerHTML = html;
    document.getElementById('project-subpage').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// =========================
// CLOSE PROJECT SUBPAGE
// =========================

function closeSubpage() {
    document.getElementById('project-subpage').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// =========================
// HERO NAME GLOW ON EXPLORE HOVER
// =========================

const exploreWrapper = document.querySelector('.explore-wrapper');
const heroName = document.getElementById('heroName');

if (exploreWrapper && heroName) {
    exploreWrapper.addEventListener('mouseenter', () => {
        heroName.classList.add('glow');
    });
    
    exploreWrapper.addEventListener('mouseleave', () => {
        heroName.classList.remove('glow');
    });
}

// =========================
// SMOOTH SCROLL FOR ALL ANCHOR LINKS
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// =========================
// CONSOLE MESSAGES
// =========================

console.log('🌲 From Forest to Function');
console.log('🎯 Portfolio loaded successfully!');
console.log('💪 MIT 2026 - Here we come!');

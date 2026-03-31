/* ============================================
   SHUSH — Global Interactive Features
   Breathing Pause, Personalization, Time-Aware,
   Cursor Glow, Sound, Scroll Reveal, Nav
   ============================================ */

// ========== SHARED COMPONENTS ==========

function createNavbar(activePage) {
  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.innerHTML = `
    <div class="container flex-between">
      <a href="index.html" class="nav-logo">Shush</a>
      <div class="nav-links">
        <a href="comfort-kits.html" class="${activePage === 'kits' ? 'active' : ''}">I want to send comfort</a>
        <a href="our-story.html" class="${activePage === 'story' ? 'active' : ''}">The Shush Story</a>
        <a href="rituals.html" class="${activePage === 'rituals' ? 'active' : ''}">Small rituals of care</a>
        <a href="hope-wall.html" class="${activePage === 'hope' ? 'active' : ''}">The Hope Wall</a>
        <a href="contact.html" class="${activePage === 'contact' ? 'active' : ''}">We're listening</a>
        <a href="comfort-kits.html" class="btn btn-primary btn-sm">Send Comfort 🤍</a>
      </div>
      <button class="nav-hamburger" onclick="toggleMobileNav()" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;
  document.body.prepend(nav);

  // Mobile overlay
  const overlay = document.createElement('div');
  overlay.className = 'nav-mobile-overlay';
  overlay.id = 'mobileNav';
  overlay.innerHTML = `
    <button class="nav-mobile-close" onclick="toggleMobileNav()">×</button>
    <a href="index.html">Home</a>
    <a href="comfort-kits.html">I want to send comfort</a>
    <a href="our-story.html">The Shush Story</a>
    <a href="rituals.html">Small rituals of care</a>
    <a href="hope-wall.html">The Hope Wall</a>
    <a href="for-you.html">A note for you</a>
    <a href="contact.html">We're listening</a>
    <a href="comfort-kits.html" class="btn btn-primary" style="margin-top:16px">Send Comfort 🤍</a>
  `;
  document.body.prepend(overlay);
}

function toggleMobileNav() {
  document.getElementById('mobileNav').classList.toggle('open');
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="nav-logo">Shush</div>
          <p class="footer-tagline">"Because care speaks softly."</p>
          <div class="footer-social">
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="WhatsApp">💬</a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <div class="footer-links">
            <a href="comfort-kits.html">Comfort Kits</a>
            <a href="our-story.html">The Shush Story</a>
            <a href="rituals.html">Small Rituals of Care</a>
          </div>
        </div>
        <div>
          <h4>Connect</h4>
          <div class="footer-links">
            <a href="contact.html">We're listening</a>
            <a href="hope-wall.html">The Hope Wall</a>
            <a href="pass-it-forward.html">Pass It Forward</a>
          </div>
        </div>
        <div>
          <h4>For You</h4>
          <div class="footer-links">
            <a href="for-you.html">A Note For You</a>
            <a href="rituals.html">Rituals of Care</a>
            <a href="contact.html">WhatsApp Us</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        © 2026 Shush. Made with love. 🤍
      </div>
    </div>
  `;
  document.body.appendChild(footer);
}

// ========== SOUND EXPERIENCE ==========

function createSoundButton() {
  const btn = document.createElement('button');
  btn.className = 'sound-btn';
  btn.id = 'soundBtn';
  btn.innerHTML = '🔇 Turn on calm';
  btn.onclick = toggleSound;
  document.body.appendChild(btn);
}

let audioCtx, oscillator, gainNode, isSoundOn = false;

function toggleSound() {
  const btn = document.getElementById('soundBtn');
  if (!isSoundOn) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    // Create warm ambient tone
    oscillator = audioCtx.createOscillator();
    gainNode = audioCtx.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(174, audioCtx.currentTime); // Solfeggio healing frequency
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.03, audioCtx.currentTime + 2);
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.start();
    btn.innerHTML = '🔔 Calm is on';
    btn.classList.add('active');
    isSoundOn = true;
  } else {
    if (gainNode) {
      gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 1);
      setTimeout(() => { oscillator.stop(); audioCtx.close(); }, 1200);
    }
    btn.innerHTML = '🔇 Turn on calm';
    btn.classList.remove('active');
    isSoundOn = false;
  }
}

// ========== CURSOR GLOW ==========

function initCursorGlow() {
  if (window.matchMedia('(hover: hover)').matches) {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);
    document.addEventListener('mousemove', (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });
  }
}

// ========== TIME-AWARE DESIGN ==========

function initTimeAware() {
  const hour = new Date().getHours();
  let greeting = '';

  if (hour >= 22 || hour < 5) {
    document.body.classList.add('time-night');
    greeting = "Can't sleep? We're here too.";
  } else if (hour >= 5 && hour < 12) {
    greeting = 'Good morning. How can we bring comfort today?';
  } else if (hour >= 12 && hour < 17) {
    greeting = 'Sending warmth your way this afternoon.';
  } else {
    greeting = 'A quiet evening to find comfort.';
  }

  // Insert greeting if placeholder exists
  const greetingEl = document.getElementById('timeGreeting');
  if (greetingEl) greetingEl.textContent = greeting;
}

// ========== BREATHING PAUSE ==========

function showBreathingPause() {
  return new Promise((resolve) => {
    if (localStorage.getItem('shush_breathed')) {
      resolve();
      return;
    }

    const overlay = document.createElement('div');
    overlay.className = 'breathing-overlay';
    overlay.innerHTML = `
      <div class="breathing-circle"></div>
      <p class="breathing-text">Take a breath. You're in a safe place.</p>
      <button class="breathing-skip" onclick="this.closest('.breathing-overlay').classList.add('fade-out')">Skip</button>
    `;
    document.body.appendChild(overlay);

    const dismiss = () => {
      overlay.classList.add('fade-out');
      localStorage.setItem('shush_breathed', 'true');
      setTimeout(() => { overlay.remove(); resolve(); }, 800);
    };

    overlay.querySelector('.breathing-skip').onclick = dismiss;
    // Auto-dismiss after 3 breath cycles (12s)
    setTimeout(dismiss, 12000);
  });
}

// ========== PERSONALIZATION ==========

function showPersonalization() {
  return new Promise((resolve) => {
    const existing = localStorage.getItem('shush_persona');
    if (existing) {
      resolve(existing);
      return;
    }

    const overlay = document.createElement('div');
    overlay.className = 'personalization-overlay';
    overlay.innerHTML = `
      <h2>Who are you here for?</h2>
      <div class="personalization-options">
        <button class="personalization-option" data-persona="diagnosed">Someone I love was just diagnosed</button>
        <button class="personalization-option" data-persona="treatment">They're going through treatment</button>
        <button class="personalization-option" data-persona="strength">I want to celebrate their strength</button>
        <button class="personalization-option" data-persona="browsing">Just exploring with love</button>
      </div>
    `;
    document.body.appendChild(overlay);

    // Fade in
    requestAnimationFrame(() => {
      requestAnimationFrame(() => overlay.classList.add('active'));
    });

    overlay.querySelectorAll('.personalization-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const persona = btn.dataset.persona;
        localStorage.setItem('shush_persona', persona);
        overlay.classList.remove('active');
        setTimeout(() => overlay.remove(), 600);
        resolve(persona);
      });
    });
  });
}

function getPersonalizedHeroText(persona) {
  const texts = {
    diagnosed: { h1: 'The first step is knowing someone cares.', sub: 'We help you send comfort when words aren\'t enough.' },
    treatment: { h1: 'A little comfort can carry them through.', sub: 'Thoughtfully curated kits to bring warmth during treatment.' },
    strength: { h1: 'Honour their journey with something beautiful.', sub: 'Celebrate courage with a care package made with love.' },
    browsing: { h1: 'Because care speaks softly.', sub: 'Comfort kits for the people who matter most.' }
  };
  return texts[persona] || texts.browsing;
}

// ========== SCROLL REVEAL ==========

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ========== ACCORDION ==========

function initAccordions() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      const wasOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
      // Toggle current
      if (!wasOpen) item.classList.add('open');
    });
  });
}

// ========== GLOBAL INIT ==========

function initGlobal(activePage) {
  createNavbar(activePage);
  createFooter();
  createSoundButton();
  initCursorGlow();
  initTimeAware();
  initScrollReveal();
  initAccordions();
}

// Make functions globally available
window.initGlobal = initGlobal;
window.showBreathingPause = showBreathingPause;
window.showPersonalization = showPersonalization;
window.getPersonalizedHeroText = getPersonalizedHeroText;
window.initScrollReveal = initScrollReveal;
window.toggleMobileNav = toggleMobileNav;

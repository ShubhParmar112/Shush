/* ============================================
   SHUSH — Global Interactive Features
   Breathing Pause, Personalization, Time-Aware,
   Cursor Glow, Sound, Scroll Reveal, Nav
   ============================================ */

// ========== SHARED COMPONENTS ==========

function createNavbar(activePage) {
  // Determine which top-level category is active
  const shopPages = ['kits', 'men', 'women', 'accessories', 'new-arrivals'];
  const hopePages = ['hope', 'rituals', 'mental-health', 'contact'];
  const sendPages = ['consult-doctor', 'articles'];

  const isShopActive = shopPages.includes(activePage);
  const isStoryActive = activePage === 'story';
  const isHopeActive = hopePages.includes(activePage);
  const isSendActive = sendPages.includes(activePage);

  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.innerHTML = `
    <div class="navbar-top">
      <div class="container flex-between">
        <a href="index.html" class="nav-logo">Shush.co</a>
        <div class="nav-search">
          <input type="text" class="nav-search-input" placeholder="Search" id="navSearchInput">
          <button class="nav-search-btn" aria-label="Search" onclick="document.getElementById('navSearchInput').focus()">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </button>
        </div>
        <div class="nav-headlines">
          <div class="headline-rotator">
            <div class="headline active" data-headline="1">Premium Fabrics, Exceptional Comfort</div>
            <div class="headline" data-headline="2">Limited Edition Collections Coming Soon</div>
            <div class="headline" data-headline="3">Experience Luxury in Every Thread</div>
            <div class="headline" data-headline="4">Sign Up for Early Access & Offers</div>
          </div>
        </div>
        <div class="nav-actions">
          <div class="nav-action-wrapper">
            <a href="#" class="nav-action" aria-label="Sign In" onclick="event.preventDefault()">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span class="nav-action-label">Sign In</span>
            </a>
            <div class="nav-action-dropdown">
              <h4 class="nav-action-dropdown-title">Welcome</h4>
              <a href="#" class="nav-action-dropdown-link" onclick="event.preventDefault()">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Sign in / Create an account
              </a>
              <a href="#" class="nav-action-dropdown-link" onclick="event.preventDefault()">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 14l2 2 4-4"/></svg>
                Guest order tracking
              </a>
              <a href="contact.html" class="nav-action-dropdown-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                Need help?
              </a>
            </div>
          </div>
          <a href="#" class="nav-action" aria-label="Saved" onclick="event.preventDefault()">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            <span class="nav-action-label">Saved</span>
          </a>
          <a href="#" class="nav-action" aria-label="Cart" onclick="event.preventDefault()">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span class="nav-action-label">Cart</span>
          </a>
        </div>
        <button class="nav-hamburger" onclick="toggleMobileNav()" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
    <div class="navbar-menu">
      <div class="container">
        <ul class="nav-items">
          <li class="nav-item has-dropdown ${isShopActive ? 'active' : ''}">
            <a href="new-arrivals.html" class="nav-item-link">Shop All</a>
            <div class="nav-dropdown">
              <div class="nav-dropdown-inner">
                <div class="nav-dropdown-column">
                  <a href="men.html" class="nav-dropdown-link ${activePage === 'men' ? 'active' : ''}">Men</a>
                  <a href="women.html" class="nav-dropdown-link ${activePage === 'women' ? 'active' : ''}">Women</a>
                  <a href="accessories.html" class="nav-dropdown-link ${activePage === 'accessories' ? 'active' : ''}">Accessories</a>
                  <a href="collections.html" class="nav-dropdown-link ${activePage === 'collections' ? 'active' : ''}">Collections</a>
                  <a href="new-arrivals.html" class="nav-dropdown-link ${activePage === 'new-arrivals' ? 'active' : ''}">New Arrivals</a>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item ${isStoryActive ? 'active' : ''}">
            <a href="our-story.html" class="nav-item-link">The Shush Story</a>
          </li>
          <li class="nav-item has-dropdown ${isHopeActive ? 'active' : ''}">
            <a href="hope-wall.html" class="nav-item-link">The Hope Wall</a>
            <div class="nav-dropdown">
              <div class="nav-dropdown-inner">
                <div class="nav-dropdown-column">
                  <a href="rituals.html" class="nav-dropdown-link ${activePage === 'rituals' ? 'active' : ''}">The Small Rituals of Care</a>
                  <a href="mental-health.html" class="nav-dropdown-link ${activePage === 'mental-health' ? 'active' : ''}">Mental Health</a>
                  <a href="contact.html" class="nav-dropdown-link ${activePage === 'contact' ? 'active' : ''}">We Are Listening</a>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item has-dropdown ${isSendActive ? 'active' : ''}">
            <a href="collections.html" class="nav-item-link">Collections</a>
            <div class="nav-dropdown">
              <div class="nav-dropdown-inner">
                <div class="nav-dropdown-column">
                  <a href="consult-doctor.html" class="nav-dropdown-link ${activePage === 'consult-doctor' ? 'active' : ''}">Consult Your Doctor</a>
                  <a href="articles.html" class="nav-dropdown-link ${activePage === 'articles' ? 'active' : ''}">Articles</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
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
    <div class="mobile-nav-group">
      <button class="mobile-nav-toggle" onclick="toggleMobileGroup(this)">Shop All <span class="mobile-nav-arrow">+</span></button>
      <div class="mobile-nav-sub">
        <a href="men.html">Men</a>
        <a href="women.html">Women</a>
        <a href="accessories.html">Accessories</a>
        <a href="collections.html">Collections</a>
        <a href="new-arrivals.html">New Arrivals</a>
      </div>
    </div>
    <a href="our-story.html">The Shush Story</a>
    <div class="mobile-nav-group">
      <button class="mobile-nav-toggle" onclick="toggleMobileGroup(this)">The Hope Wall <span class="mobile-nav-arrow">+</span></button>
      <div class="mobile-nav-sub">
        <a href="rituals.html">The Small Rituals of Care</a>
        <a href="mental-health.html">Mental Health</a>
        <a href="contact.html">We Are Listening</a>
      </div>
    </div>
    <div class="mobile-nav-group">
      <button class="mobile-nav-toggle" onclick="toggleMobileGroup(this)">Send Comfort <span class="mobile-nav-arrow">+</span></button>
      <div class="mobile-nav-sub">
        <a href="consult-doctor.html">Consult Your Doctor</a>
        <a href="articles.html">Articles</a>
      </div>
    </div>
    <a href="for-you.html">A Note For You</a>
  `;
  document.body.prepend(overlay);
}

function toggleMobileGroup(btn) {
  const group = btn.closest('.mobile-nav-group');
  group.classList.toggle('open');
  const arrow = btn.querySelector('.mobile-nav-arrow');
  arrow.textContent = group.classList.contains('open') ? '−' : '+';
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
          <div class="nav-logo">Shush.co</div>
          <p class="footer-tagline">"Because care speaks softly."</p>
          <div class="footer-social">
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="WhatsApp">💬</a>
          </div>
        </div>
        <div>
          <h4>Support</h4>
          <div class="footer-links">
            <a href="mailto:hello@shush.co">hello@shush.co</a>
            <a href="tel:+919136233913">Mob: +91 9136233913</a>
            <a href="contact.html">WhatsApp Us</a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <div class="footer-links">
            <a href="collections.html">Clothing Collections</a>
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
          <h4>Legal</h4>
          <div class="footer-links">
            <a href="privacy-policy.html">Privacy Policy</a>
            <a href="terms-of-service.html">Terms of Service</a>
            <a href="cookies-policy.html">Cookies Policy</a>
            <a href="refund-policy.html">Refund Policy</a>
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
    treatment: { h1: 'A little comfort can carry them through.', sub: 'Premium clothing designed to bring warmth during treatment.' },
    strength: { h1: 'Honour their journey with something beautiful.', sub: 'Celebrate courage with a care package made with love.' },
    browsing: { h1: 'Because care speaks softly.', sub: 'Premium fabrics for the people who matter most.' }
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

// ========== NAVBAR SCROLL HIDE ==========
function initNavbarScrollHide() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  
  let lastScrollY = window.scrollY;
  const scrollThreshold = 100; // Minimum scroll distance before hiding
  
  function handleScroll() {
    const currentScrollY = window.scrollY;
    const scrollingDown = currentScrollY > lastScrollY;
    
    if (scrollingDown && currentScrollY > scrollThreshold) {
      // Hide navbar when scrolling down past threshold
      navbar.classList.add('hidden');
    } else {
      // Show navbar when scrolling up or at top
      navbar.classList.remove('hidden');
    }
    
    lastScrollY = currentScrollY;
  }
  
  // Use passive scroll listener for better performance
  window.addEventListener('scroll', handleScroll, { passive: true });
}

// ========== HEADLINE ROTATOR ==========
function initHeadlineRotator() {
  const rotator = document.querySelector('.headline-rotator');
  if (!rotator) return;
  
  const headlines = rotator.querySelectorAll('.headline');
  if (headlines.length === 0) return;
  
  let currentIndex = 0;
  
  function rotateHeadlines() {
    // Remove active class from all headlines
    headlines.forEach(headline => headline.classList.remove('active'));
    
    // Add active class to current headline
    headlines[currentIndex].classList.add('active');
    
    // Move to next headline
    currentIndex = (currentIndex + 1) % headlines.length;
    
    // Schedule next rotation
    setTimeout(rotateHeadlines, 3000); // Rotate every 3 seconds
  }
  
  // Start rotation
  rotateHeadlines();
}

// ========== GLOBAL INIT ==========

function initGlobal(activePage) {
  // Always start at the top of the page on refresh
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);

  createNavbar(activePage);
  createFooter();
  createSoundButton();
  initCursorGlow();
  initTimeAware();
  initScrollReveal();
  initAccordions();
  initHeadlineRotator();
  initNavbarScrollHide();
}

// Make functions globally available
window.initGlobal = initGlobal;
window.showBreathingPause = showBreathingPause;
window.showPersonalization = showPersonalization;
window.getPersonalizedHeroText = getPersonalizedHeroText;
window.initScrollReveal = initScrollReveal;
window.toggleMobileNav = toggleMobileNav;
window.toggleMobileGroup = toggleMobileGroup;

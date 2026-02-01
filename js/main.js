/* ========================================
   BatVision - JavaScript
   Menu burger, lightbox, formulaire, animations
   ======================================== */

// ========================================
// INITIALISATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initHeroCarousel();
  initLightbox();
  initFormValidation();
  initPortfolioFilter();
  initScrollReveal();
  setActiveNavLink();
  initStatsCounter();
  initTestimonialsSlider();
  initDevisForm();
  initDevisAnchorFocus();
});

// ========================================
// NAVIGATION - MENU BURGER
// ========================================

function initNavigation() {
  const menuBurger = document.querySelector('.menu-burger');
  const navMenu = document.querySelector('.nav-menu');

  if (menuBurger) {
    menuBurger.addEventListener('click', function() {
      menuBurger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Fermer le menu au clic sur un lien
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuBurger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // Fermer le menu au redimensionnement
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      menuBurger?.classList.remove('active');
      navMenu?.classList.remove('active');
    }
  });
}

// ========================================
// HERO CAROUSEL
// ========================================

function initHeroCarousel() {
  const carousel = document.querySelector('.hero-carousel');
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll('.hero-slide'));
  const dots = Array.from(carousel.querySelectorAll('.hero-dot'));
  const prevBtn = carousel.querySelector('.hero-nav.prev');
  const nextBtn = carousel.querySelector('.hero-nav.next');

  if (!slides.length) return;

  let currentIndex = 0;
  let intervalId;
  const intervalTime = 5000;

  function showSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentIndex);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function startAutoPlay() {
    stopAutoPlay();
    intervalId = setInterval(nextSlide, intervalTime);
  }

  function stopAutoPlay() {
    if (intervalId) clearInterval(intervalId);
  }

  nextBtn?.addEventListener('click', function() {
    nextSlide();
    startAutoPlay();
  });

  prevBtn?.addEventListener('click', function() {
    prevSlide();
    startAutoPlay();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', function() {
      const target = Number(this.getAttribute('data-slide'));
      if (!Number.isNaN(target)) {
        showSlide(target);
        startAutoPlay();
      }
    });
  });

  carousel.addEventListener('mouseenter', stopAutoPlay);
  carousel.addEventListener('mouseleave', startAutoPlay);

  showSlide(0);
  startAutoPlay();
}

// ========================================
// LIEN ACTIF NAVIGATION
// ========================================

function setActiveNavLink() {
  const navLinks = document.querySelectorAll('.nav-menu a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ========================================
// LIGHTBOX
// ========================================

function initLightbox() {
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');

  if (!portfolioItems.length) return;

  // Ouvrir la lightbox
  portfolioItems.forEach(item => {
    item.addEventListener('click', function() {
      const img = this.querySelector('img');
      if (img) {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Fermer la lightbox
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  lightboxClose?.addEventListener('click', closeLightbox);

  // Fermer au clic sur le fond
  lightbox?.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Fermer à la touche Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}

// ========================================
// FILTRE PORTFOLIO
// ========================================

function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');

      // Activer le bouton
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Filtrer les éléments
      portfolioItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
          }, 10);
        } else {
          item.style.opacity = '0';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // Définir le premier bouton comme actif
  if (filterBtns.length > 0) {
    filterBtns[0].classList.add('active');
  }
}

// ========================================
// VALIDATION FORMULAIRE
// ========================================

function initFormValidation() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Récupérer les valeurs
    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const phone = document.getElementById('phone')?.value.trim();
    const message = document.getElementById('message')?.value.trim();

    // Réinitialiser les erreurs
    clearFormErrors();

    // Valider les champs
    let hasError = false;

    if (!name || name.length < 3) {
      showError('name', 'Le nom doit contenir au moins 3 caractères');
      hasError = true;
    }

    if (!email || !isValidEmail(email)) {
      showError('email', 'Veuillez entrer une adresse email valide');
      hasError = true;
    }

    if (!phone || !isValidPhone(phone)) {
      showError('phone', 'Veuillez entrer un numéro de téléphone valide');
      hasError = true;
    }

    if (!message || message.length < 10) {
      showError('message', 'Le message doit contenir au moins 10 caractères');
      hasError = true;
    }

    if (!hasError) {
      // Afficher le message de succès
      showSuccessMessage();

      // Réinitialiser le formulaire
      form.reset();

      // Masquer le message après 5 secondes
      setTimeout(hideSuccessMessage, 5000);
    }
  });
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function isValidPhone(phone) {
  const regex = /^[\d\s\-\+\(\)]+$/;
  return regex.test(phone) && phone.replace(/\D/g, '').length >= 9;
}

function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  if (!field) return;

  const errorDiv = document.createElement('div');
  errorDiv.className = 'form-error';
  errorDiv.textContent = message;

  const formGroup = field.closest('.form-group');
  if (formGroup) {
    formGroup.appendChild(errorDiv);
  }

  field.style.borderColor = '#e74c3c';
}

function clearFormErrors() {
  const errors = document.querySelectorAll('.form-error');
  errors.forEach(error => error.remove());

  const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
  inputs.forEach(input => {
    input.style.borderColor = '#e0e0e0';
  });
}

function showSuccessMessage() {
  let successMsg = document.querySelector('.form-success');
  if (!successMsg) {
    successMsg = document.createElement('div');
    successMsg.className = 'form-success';
    successMsg.textContent = '✓ Votre message a été envoyé avec succès. Nous vous contacterons bientôt!';
    const form = document.querySelector('.contact-form');
    form.insertBefore(successMsg, form.firstChild);
  }
  successMsg.classList.add('active');
}

function hideSuccessMessage() {
  const successMsg = document.querySelector('.form-success');
  if (successMsg) {
    successMsg.classList.remove('active');
  }
}

// ========================================
// SCROLL REVEAL - ANIMATIONS AÀ L'APPARITION
// ========================================

function initScrollReveal() {
  const reveals = document.querySelectorAll(
    '.service-card, .value-card, .domain-tag, .portfolio-item'
  );

  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  reveals.forEach(reveal => {
    reveal.style.opacity = '0';
    observer.observe(reveal);
  });
}

// ========================================
// SMOOTH SCROLL LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ========================================
// UTILITAIRES
// ========================================

// Activer les transitions CSS au portfolio au chargement
window.addEventListener('load', function() {
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  portfolioItems.forEach(item => {
    item.style.transition = 'opacity 0.3s ease';
  });
});

// ========================================
// COMPTEURS STATISTIQUES ANIMÉS
// ========================================

function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  if (!statNumbers.length) return;

  // Observer pour déclencher à l'apparition
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalValue = parseInt(target.getAttribute('data-target'));
        
        // Animer le compteur
        animateCounter(target, finalValue);
        observer.unobserve(target);
      }
    });
  }, {
    threshold: 0.5
  });

  statNumbers.forEach(stat => observer.observe(stat));
}

function animateCounter(element, target) {
  let current = 0;
  const increment = target / 50; // Nombre d'étapes
  const duration = 2000; // 2 secondes
  const startTime = Date.now();

  function update() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    current = Math.floor(target * progress);
    element.textContent = current.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target.toLocaleString();
    }
  }

  requestAnimationFrame(update);
}

// ========================================
// SLIDER TÉMOIGNAGES
// ========================================

function initTestimonialsSlider() {
  const wrapper = document.querySelector('.testimonials-wrapper');
  const cards = document.querySelectorAll('.testimonial-card');
  const prevBtn = document.querySelector('.testimonial-btn.prev');
  const nextBtn = document.querySelector('.testimonial-btn.next');

  if (!wrapper || !cards.length) return;

  let currentIndex = 0;
  let autoplayInterval;

  // Fonction pour aller à un slide
  function goToSlide(index) {
    currentIndex = (index + cards.length) % cards.length;
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Suivant
  function nextSlide() {
    goToSlide(currentIndex + 1);
    resetAutoplay();
  }

  // Précédent
  function prevSlide() {
    goToSlide(currentIndex - 1);
    resetAutoplay();
  }

  // Autoplay
  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 5000); // Change toutes les 5 secondes
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }

  // Event listeners
  nextBtn?.addEventListener('click', nextSlide);
  prevBtn?.addEventListener('click', prevSlide);

  // Transition CSS
  wrapper.style.transition = 'transform 0.5s ease';

  // Démarrer autoplay
  startAutoplay();

  // Pause au hover
  wrapper.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
  wrapper.addEventListener('mouseleave', startAutoplay);
}

// ========================================
// FORMULAIRE DEVIS
// ========================================

function initDevisForm() {
  const form = document.getElementById('devisForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Récupérer les valeurs
    const name = document.getElementById('devis-name')?.value.trim();
    const phone = document.getElementById('devis-phone')?.value.trim();
    const location = document.getElementById('devis-location')?.value.trim();
    const event = document.getElementById('devis-event')?.value;
    const timeStart = document.getElementById('devis-time-start')?.value;
    const timeEnd = document.getElementById('devis-time-end')?.value;

    // Validation basique
    if (!name || !phone || !location || !event || !timeStart || !timeEnd) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    // Construire le message WhatsApp
    const message = `Bonjour BatVision,%0A%0AJe souhaite demander un devis pour mon événement.%0A%0A📋 Informations du demandeur:%0A- Nom: ${encodeURIComponent(name)}%0A- WhatsApp: ${encodeURIComponent(phone)}%0A- Localisation: ${encodeURIComponent(location)}%0A- Type d'événement: ${encodeURIComponent(event)}%0A- Horaire: ${timeStart} à ${timeEnd}%0A%0AMerci de me contacter au plus brèf délai.`;

    // URL WhatsApp (numéro BatVision)
    const whatsappUrl = `https://wa.me/221782737855?text=${message}`;

    // Ouvrir WhatsApp
    window.open(whatsappUrl, '_blank');

    // Réinitialiser le formulaire
    form.reset();

    // Message de confirmation
    alert('✓ Votre demande a été envoyée via WhatsApp. Merci!');
  });
}

// ========================================
// FOCUS ANCRE DEVIS
// ========================================

function initDevisAnchorFocus() {
  const devisSection = document.getElementById('devis');
  const devisInput = document.getElementById('devis-name');
  if (!devisSection) return;

  if (window.location.hash === '#devis') {
    setTimeout(() => {
      devisInput?.focus({ preventScroll: true });
    }, 300);
  }

  const devisLinks = document.querySelectorAll('a[href="#devis"]');
  devisLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      devisSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        devisInput?.focus({ preventScroll: true });
      }, 500);
    });
  });
}

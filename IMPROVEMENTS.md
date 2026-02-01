# 🚀 BatVision - Site Vitrine Moderne

## 📋 Description

**BatVision** est un site vitrine professionnel et moderne pour une agence créative spécialisée en communication visuelle, photographie, vidéographie et couverture d'événements.

Développé en **HTML5 + CSS3 + JavaScript pur** (sans framework), le site est entièrement responsive, accessible et optimisé pour la conversion.

---

## ✨ Fonctionnalités

### 🎨 Design & UX

- **Charte graphique moderne** avec couleurs primaires (#f8991b orange) et secondaires (#12689b bleu)
- **Responsive design** : mobile-first, breakpoints 600px, 768px, 1024px
- **Animations fluides** : hover effects, transitions CSS, scroll reveals
- **Accessibilité de base** : alt images, labels, sémantique HTML

### 🎬 Sections Principales

#### 1. **Hero Section** (`index.html`)
- Titre impactant
- Proposition de valeur claire
- Deux boutons CTA
- Design en deux colonnes responsive

#### 2. **Réalisations en Vedette** (`index.html`)
- Grille 3x2 responsive (grille auto-fit)
- Images avec overlay au hover
- Catégories visuelles
- Lien vers portfolio complet

#### 3. **Domaines d'Intervention** (`index.html`)
- 6 cards (Mariages, Sports, Religieux, Culturel, Corporate, Shows)
- Icônes emoji animées au hover
- Descriptions courtes
- Liens vers page services

#### 4. **Statistiques Animées** (`index.html`)
- **Compteurs JavaScript** animés au scroll
- 4 statistiques clés (250+ événements, 120+ clients, 10K+ photos, 5+ ans)
- Animation **Intersection Observer**
- Design gradient bleu

#### 5. **Slider Témoignages** (`index.html`)
- **Slider JS automatique** (5s par slide)
- Boutons précédent/suivant
- Avatar rond, nom, type événement, 5 étoiles
- Pause au hover
- Transition fluide

#### 6. **Process BatVision** (`index.html`)
- 4 étapes horizontales : Brief → Captation → Traitement → Livraison
- Icônes emoji
- Hover animation
- Responsive avec flèches

#### 7. **Réseaux Sociaux** (`index.html`)
- Grille Instagram-style (6 images)
- Overlay avec icônes réseau
- 3 boutons CTA (TikTok, Instagram, Facebook)
- Liens externes

#### 8. **Grand CTA Final** (`index.html`)
- Bandeau pleine largeur fond bleu
- Message persuasif blanc
- Bouton orange avec hover scale animation

### 📄 Pages Supplémentaires

- **`about.html`** - À propos, mission, valeurs, équipe
- **`services.html`** - Détail des services, processus, domaines
- **`portfolio.html`** - Galerie avec filtres JS et lightbox
- **`contact.html`** - Formulaire validé, FAQ, coordonnées

---

## 🛠️ Structure Technique

### 📁 Fichiers

```
BATVISION/
├── index.html           # Page d'accueil
├── about.html           # À propos
├── services.html        # Services
├── portfolio.html       # Portfolio
├── contact.html         # Contact
├── css/
│   └── style.css        # Styles globaux (1580+ lignes)
└── js/
    └── main.js          # JavaScript (400+ lignes)
```

### 🎨 CSS - Organisation

```css
:root {} 
/* Variables : --primary, --secondary, --dark, etc. */

/* HEADER & NAVIGATION */
.topbar, .navbar, .menu-burger

/* HERO SECTION */
.hero, .hero-content, .hero-buttons

/* RÉALISATIONS EN VEDETTE */
.featured-grid, .featured-item, .featured-overlay

/* DOMAINES D'INTERVENTION */
.domains-grid, .domain-card, .domain-icon

/* STATISTIQUES */
.stats-section, .stat-card, .stat-number

/* TÉMOIGNAGES */
.testimonials-slider, .testimonial-card

/* PROCESS */
.process-timeline, .process-step

/* RÉSEAUX SOCIAUX */
.social-grid, .social-item

/* CTA FINAL */
.cta-final, .cta-final-content

/* RESPONSIVE */
@media (max-width: 768px)
@media (max-width: 600px)
```

### 🔧 JavaScript - Modules

```javascript
// Initialisation
document.addEventListener('DOMContentLoaded', ...)

// Navigation & Menu
initNavigation()      // Menu burger responsive
setActiveNavLink()    // Page active

// Lightbox
initLightbox()        // Galerie cliquable

// Formulaire
initFormValidation()  // Validation front-end

// Portfolio
initPortfolioFilter() // Filtres par catégorie

// Animations
initScrollReveal()    // Fade-in au scroll

// 🆕 NOUVEAUTÉS
initStatsCounter()    // Compteurs animés
animateCounter()      // Logique compteur
initTestimonialsSlider() // Slider témoignages
```

---

## 🎯 Charte Graphique

### Couleurs

| Nom | Code | Usage |
|-----|------|-------|
| Primaire | `#f8991b` | Boutons, accents, hover |
| Secondaire | `#12689b` | Header, titres, sections |
| Dark | `#1a1a1a` | Texte principal |
| Light | `#f5f5f5` | Backgrounds secondaires |
| Gray | `#666666` | Texte secondaire |

### Typographie

- **Font** : Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Titres** : 48px (hero) → 36px (sections) → 20px (cards)
- **Texte** : 16px (body) → 14px (petit) → 18px (emphasis)

### Composants

- **Boutons** : 12px padding, 5px radius, transitions
- **Cards** : Shadow douce, hover lift, border-top accent
- **Grilles** : auto-fit, minmax responsive, flexbox
- **Animations** : 0.3s ease, scale, translateY, opacity

---

## 📱 Responsive Design

### Breakpoints

| Device | Breakpoint | Ajustements |
|--------|-----------|------------|
| Desktop | 1024px+ | Grilles multi-colonnes, menus full |
| Tablet | 768px | Menu burger activé, colonnes réduites |
| Mobile | <600px | 1 colonne, process vertical, social 2x3 |

### Mobile-First Approach

- CSS mobile par défaut
- Media queries croissantes (min-width)
- Flexbox/Grid pour adaptation
- Images fluides (100% width)

---

## 🚀 Fonctionnalités JavaScript Avancées

### 1. Compteurs Animés (Stats)

```javascript
// Au scroll, les compteurs animés de 0 → target
// Utilise Intersection Observer pour trigger
// Durée : 2 secondes avec requestAnimationFrame
```

**Exemple** : 250+ événements s'anime à 0 → 250

### 2. Slider Témoignages

```javascript
// Autoplay toutes les 5s
// Buttons précédent/suivant
// Pause au hover
// Transition fluide 0.5s
```

**Points clés** :
- `transform: translateX()` pour défilement
- `currentIndex % cards.length` pour boucle
- Event listeners sur buttons
- `clearInterval` / `setInterval` pour autoplay

### 3. Menu Burger

```javascript
// Toggle classe "active"
// Animation: spans rotate + opacity
// Ferme au clic lien ou resize 768px
```

### 4. Validation Formulaire

```javascript
// Regex email, téléphone
// Messages erreur dynamiques
// Message succès après soumission
```

### 5. Lightbox Portfolio

```javascript
// Clique image → fullscreen
// Touche Escape ferme
// Clique fond ferme
```

### 6. Filtres Portfolio

```javascript
// Buttons catégories
// Filter-btn.active marqué
// Animations fade in/out
```

### 7. Scroll Reveal

```javascript
// Fade-in au scroll (IntersectionObserver)
// Cards, value-cards, portfolio items
// Opacity 0 → 1 avec delay
```

---

## 💡 Points Forts

✅ **Performance**
- Pas de framework externe (lightweight)
- CSS minifiable (~50KB compressed)
- JS modulaire et optimisé (~15KB compressed)
- Images via placeholders (remplaçables)

✅ **UX/Conversion**
- CTA omniprésents (hero, sections, footer)
- Call-to-action orientés "Demander un devis"
- Animations subtiles sans surcharge
- Micro-interactions rassurantes

✅ **Maintenance**
- Code commenté et structuré
- Variables CSS centralisées
- Classes sémantiques claires
- Facile à customiser

✅ **Accessibilité**
- Alt images present
- Labels formulaires
- HTML5 sémantique
- Contraste couleurs WCAG AA

✅ **SEO**
- Meta description
- Meta keywords
- Sémantique HTML
- Structure claire

---

## 🔧 Personnalisation

### Changement de Couleurs

```css
:root {
  --primary: #f8991b;      /* Changer ici */
  --secondary: #12689b;    /* Changer ici */
}
```

### Ajouter des Sections

1. Créer HTML dans `<main>`
2. Ajouter classe `section`
3. Styliser dans `css/style.css`
4. Ajouter JS si interactions

### Remplacer Images

Remplacer URLs `via.placeholder.com` par vos images:

```html
<img src="https://votre-domaine.com/image.jpg" alt="Description">
```

### Ajouter Liens Réseaux

Mettre à jour URLs dans `topbar`, `footer`, `social-cta`:

```html
<a href="https://instagram.com/votre-compte">Instagram</a>
```

---

## 📊 Statistiques Fichiers

| Fichier | Lignes | Taille (approx) |
|---------|--------|-----------------|
| index.html | 240 | 8KB |
| about.html | 175 | 6KB |
| services.html | 200 | 7KB |
| portfolio.html | 240 | 8KB |
| contact.html | 280 | 10KB |
| style.css | 1580 | 55KB |
| main.js | 400 | 14KB |

**Total** : ~2115 lignes, ~108KB (avant compression)

---

## 🎓 Technologies Utilisées

| Tech | Version | Usage |
|------|---------|-------|
| HTML | 5 | Sémantique |
| CSS | 3 | Styles, animations, responsive |
| JavaScript | ES6+ | Interactions, animations |
| Flexbox | - | Layouts |
| CSS Grid | - | Grilles responsives |
| Intersection Observer | API native | Animations au scroll |
| requestAnimationFrame | API native | Animations fluides |

---

## 🚀 Déploiement

### Préparation

1. **Vérifier tous les liens** (mail, tel, réseaux)
2. **Remplacer images placeholder** par images réelles
3. **Configurer formulaire contact** (backend SMTP)
4. **Tester responsive** sur devices réels
5. **Optimiser images** (compression, formats)

### Hébergement

Compatible avec :
- Netlify (HTML pur) ✅
- Vercel (HTML pur) ✅
- Any web server (Apache, Nginx) ✅
- GitHub Pages ✅

### Optimisation

```bash
# CSS minifier
npx cssnano style.css -o style.min.css

# JS minifier
npx terser main.js -o main.min.js

# Compresser images
pngquant image.png
```

---

## 📝 Licence

Libre d'utilisation et de modification pour usage personnel/commercial.

---

## 📞 Support

Pour questions ou modifications :
- Consultez code commenté
- Vérifiez console browser (F12)
- Testez responsivité (device emulation)
- Profitez de la structure modulaire

---

**🎉 BatVision - Prêt à conquérir le web!** 🚀

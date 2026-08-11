/*
  SPONSOR DI LAPPANO IN PASSERELLA
  --------------------------------
  Per ogni sponsor servono:
  - name: nome dell'attività, usato anche per l'accessibilità;
  - poster: percorso della locandina caricata in assets/sponsors/;
  - url: link completo alla pagina social;
  - cta: facoltativo. Se omesso, il testo viene scelto in base al link.

  Esempio:
  {
    name: "Nome attività",
    poster: "../assets/sponsors/nome-attivita.jpg",
    url: "https://www.instagram.com/nomeattivita/"
  }
*/
window.LAPPANO_SPONSORS = [];

(function renderSponsors() {
  'use strict';

  const sponsors = Array.isArray(window.LAPPANO_SPONSORS)
    ? window.LAPPANO_SPONSORS
    : [];

  const grid = document.getElementById('sponsor-grid');
  const emptyState = document.getElementById('sponsor-empty');

  if (!grid || !emptyState) return;

  if (sponsors.length === 0) {
    emptyState.hidden = false;
    return;
  }

  emptyState.hidden = true;

  const getButtonLabel = (sponsor) => {
    if (sponsor.cta) return String(sponsor.cta);

    try {
      const hostname = new URL(String(sponsor.url)).hostname.toLowerCase();
      if (hostname.includes('instagram.com')) return 'Apri su Instagram';
      if (hostname.includes('facebook.com') || hostname.includes('fb.com')) return 'Apri su Facebook';
      if (hostname.includes('tiktok.com')) return 'Apri su TikTok';
    } catch (_) {
      // In caso di URL non valido, usa il testo generico.
    }

    return 'Visita la pagina social';
  };

  sponsors.forEach((sponsor) => {
    if (!sponsor || !sponsor.poster || !sponsor.url) return;

    const name = String(sponsor.name || 'Attività sponsor');
    const url = String(sponsor.url);

    const card = document.createElement('article');
    card.className = 'poster-card';

    const posterLink = document.createElement('a');
    posterLink.className = 'poster-link';
    posterLink.href = url;
    posterLink.target = '_blank';
    posterLink.rel = 'noopener noreferrer';
    posterLink.setAttribute('aria-label', `Visita la pagina social di ${name}`);

    const frame = document.createElement('div');
    frame.className = 'poster-frame';

    const image = document.createElement('img');
    image.src = String(sponsor.poster);
    image.alt = `Locandina sponsor: ${name}`;
    image.loading = 'lazy';
    image.decoding = 'async';

    frame.appendChild(image);
    posterLink.appendChild(frame);

    const meta = document.createElement('div');
    meta.className = 'poster-meta';

    const heading = document.createElement('h3');
    heading.textContent = name;

    const button = document.createElement('a');
    button.className = 'button secondary';
    button.href = url;
    button.target = '_blank';
    button.rel = 'noopener noreferrer';
    button.textContent = getButtonLabel(sponsor);

    meta.appendChild(heading);
    meta.appendChild(button);

    card.appendChild(posterLink);
    card.appendChild(meta);
    grid.appendChild(card);
  });

  if (grid.children.length === 0) {
    emptyState.hidden = false;
  }
})();

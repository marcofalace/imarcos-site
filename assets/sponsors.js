/*
  ELENCO SPONSOR
  ----------------
  Lascia vuoto finché non ci sono sponsor da pubblicare.
  Quando arrivano i dati, aggiungi un oggetto per ogni attività.

  Esempio:
  {
    name: "Nome del negozio",
    category: "Abbigliamento bambini",
    logo: "../assets/sponsors/nome-logo.png",
    url: "https://www.instagram.com/...",
    level: "protagonista", // protagonista | ufficiale | tecnico
    offer: "10% di sconto nella settimana dell'evento",
    cta: "Visita il negozio"
  }
*/
window.LAPPANO_SPONSORS = [];

(function renderSponsors() {
  const sponsors = Array.isArray(window.LAPPANO_SPONSORS) ? window.LAPPANO_SPONSORS : [];
  const emptyState = document.getElementById('sponsor-empty');
  const groupMap = {
    protagonista: {
      section: document.getElementById('group-protagonista'),
      grid: document.getElementById('grid-protagonista')
    },
    ufficiale: {
      section: document.getElementById('group-ufficiale'),
      grid: document.getElementById('grid-ufficiale')
    },
    tecnico: {
      section: document.getElementById('group-tecnico'),
      grid: document.getElementById('grid-tecnico')
    }
  };

  if (!sponsors.length) {
    emptyState.hidden = false;
    return;
  }

  emptyState.hidden = true;

  sponsors.forEach((sponsor) => {
    const level = groupMap[sponsor.level] ? sponsor.level : 'ufficiale';
    const target = groupMap[level];
    target.section.hidden = false;

    const card = document.createElement('article');
    card.className = 'sponsor-card';

    const safeName = String(sponsor.name || 'Sponsor');
    const safeCategory = String(sponsor.category || 'Partner dell’evento');
    const safeCta = String(sponsor.cta || 'Scopri l’attività');

    card.innerHTML = `
      <div class="sponsor-logo-box">
        <img src="${sponsor.logo}" alt="Logo ${safeName}" loading="lazy" decoding="async">
      </div>
      <div class="sponsor-meta">
        <h3>${safeName}</h3>
        <p class="sponsor-category">${safeCategory}</p>
        ${sponsor.offer ? `<p class="sponsor-offer">${String(sponsor.offer)}</p>` : ''}
      </div>
      <a class="button secondary" href="${sponsor.url}" target="_blank" rel="noopener noreferrer">${safeCta}</a>
    `;

    target.grid.appendChild(card);
  });
})();

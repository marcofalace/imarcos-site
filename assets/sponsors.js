window.LAPPANO_SPONSORS = [
  {
    name: "Centro Moda Mustica",
    poster: "../assets/sponsors/centro-moda-mustica.png",
    url: "https://www.instagram.com/centro_moda_mustica/"
  },
  {
    name: "NAILAB Centro Estetico",
    poster: "../assets/sponsors/nailab-centro-estetico.png",
    url: "https://www.instagram.com/nailab.centroestetico/"
  },
  {
    name: "OGADEN Sette",
    poster: "../assets/sponsors/ogaden-sette.png",
    url: "https://www.instagram.com/ogaden_7/"
  },
  {
    name: "La Grande Bellezza",
    poster: "../assets/sponsors/la-grande-bellezza.png",
    url: "https://www.instagram.com/la_grande_bellezza_r_c/"
  },
  {
    name: "Oriental Shop",
    poster: "../assets/sponsors/oriental-shop.png",
    url: "https://www.instagram.com/orientalshoprende/"
  },
  {
    name: "iMARCOs",
    poster: "../assets/sponsors/imarcos.png",
    url: "https://www.instagram.com/imarcos.sport/"
  },
  {
    name: "Cantine Iusi",
    poster: "../assets/sponsors/cantine-iusi.png",
    url: "https://www.instagram.com/cantineiusi/"
  },
  {
    name: "Scintille",
    poster: "../assets/sponsors/scintille.png",
    url: "https://www.instagram.com/scintille_gioiellerie/"
  },
  {
    name: "Supermercato A&O Autolinee",
    poster: "../assets/sponsors/supermercato-aeo.png",
    url: "https://www.instagram.com/supermercato_aeo_autolinee/"
  },
  {
    name: "Ninni Cosenza",
    poster: "../assets/sponsors/ninni-cosenza.png",
    url: "https://www.instagram.com/ninnicosenza/"
  },
  {
    name: "Nataly Eventi",
    poster: "../assets/sponsors/nataly-eventi.png",
    url: "https://www.instagram.com/natalyeventi/"
  },
  {
    name: "Ortopedia Plantari Gallo",
    poster: "../assets/sponsors/ortopedia-plantari-gallo.png",
    url: "https://www.instagram.com/ortopedia_plantari_gallo/"
  },
  {
    name: "Ditta Edile Siciliano Giuseppe",
    poster: "../assets/sponsors/ditta-edile-siciliano-giuseppe.png",
    url: ""
  },
  {
    name: "Tulle e Papillon",
    poster: "../assets/sponsors/tulle-e-papillon.png",
    url: "https://www.instagram.com/tulleepapillon/"
  },
  {
    name: "Professionally Speaking",
    poster: "../assets/sponsors/professionally-speaking.png",
    url: "https://www.instagram.com/professionally_speakingsnc/"
  },
  {
    name: "Imec Impianti",
    poster: "../assets/sponsors/imec-impianti.png",
    url: "https://www.instagram.com/imecsrls/"
  },
  {
    name: "Hair Secret",
    poster: "../assets/sponsors/hair-secret.png",
    url: "https://www.instagram.com/hairsecretsparrucchiere/"
  },
  {
    name: "Autolavaggio Iannuzzi",
    poster: "../assets/sponsors/autolavaggio-iannuzzi.png",
    url: "https://www.instagram.com/autolavaggio_iannuzzi/"
  },
  {
    name: "Carim Carburanti",
    poster: "../assets/sponsors/carim-carburanti.png",
    url: ""
  },
  {
    name: "Sport Rehab and Performance Lab",
    poster: "../assets/sponsors/sport-rehab-performance-lab.png",
    url: "https://www.instagram.com/dr.paolo_litrenta_fisio/"
  },
  {
    name: "Valentino Mele",
    poster: "../assets/sponsors/valentino-mele.png",
    url: "https://www.instagram.com/valentinomeleofficial/"
  },
  {
    name: "Grandinetti",
    poster: "../assets/sponsors/grandinetti.png",
    url: ""
  },
  {
    name: "L'Arte del Capello",
    poster: "../assets/sponsors/arte-del-capello.png",
    url: "https://www.instagram.com/domenico.cristiano.94/"
  }
];

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
    } catch (_) {}

    return 'Visita la pagina social';
  };

  sponsors.forEach((sponsor) => {
    if (!sponsor || !sponsor.poster) return;

    const name = String(sponsor.name || 'Attività sponsor');
    const url = String(sponsor.url || '').trim();
    const hasUrl = /^https?:\/\//i.test(url);

    const card = document.createElement('article');
    card.className = 'poster-card';

    const frame = document.createElement('div');
    frame.className = 'poster-frame';

    const image = document.createElement('img');
    image.src = String(sponsor.poster);
    image.alt = `Locandina sponsor: ${name}`;
    image.loading = 'lazy';
    image.decoding = 'async';
    frame.appendChild(image);

    if (hasUrl) {
      const posterLink = document.createElement('a');
      posterLink.className = 'poster-link';
      posterLink.href = url;
      posterLink.target = '_blank';
      posterLink.rel = 'noopener noreferrer';
      posterLink.setAttribute('aria-label', `Visita la pagina social di ${name}`);
      posterLink.appendChild(frame);
      card.appendChild(posterLink);
    } else {
      card.appendChild(frame);
    }

    const meta = document.createElement('div');
    meta.className = 'poster-meta';

    const heading = document.createElement('h3');
    heading.textContent = name;
    meta.appendChild(heading);

    if (hasUrl) {
      const button = document.createElement('a');
      button.className = 'button secondary';
      button.href = url;
      button.target = '_blank';
      button.rel = 'noopener noreferrer';
      button.textContent = getButtonLabel(sponsor);
      meta.appendChild(button);
    } else {
      const note = document.createElement('p');
      note.className = 'no-link-note';
      note.textContent = 'Contatti disponibili nella locandina';
      meta.appendChild(note);
    }

    card.appendChild(meta);
    grid.appendChild(card);
  });

  if (grid.children.length === 0) {
    emptyState.hidden = false;
  }
})();

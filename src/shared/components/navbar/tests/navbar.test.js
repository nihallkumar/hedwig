/* global test expect document */

document.body.innerHTML = `
<header class="hw-navbar">
  <div class="hw-navbar__content">

    <div class="hw-navbar__top">
      <a href="#" class="hw-navbar__logo">
        <svg class="hw-navbar__logo-standard" aria-labelledby="Logo" role="img">
          <title id="Logo">Go to homepage</title>
          <use xlink:href="#logo-bring"></use>
        </svg>
        <svg class="hw-navbar__logo-white" aria-labelledby="Logo" role="img">
          <title id="Logo">Go to homepage</title>
          <use xlink:href="#logo-bring-white"></use>
        </svg>
      </a>

      <nav class="hw-navbar__menu">
        <button class="hw-navbar__search-button" data-hw-toggle-search>
          <span class="hw-navbar__search-text">Søk</span><!--
          --><i class="hw-navbar__icon far fa-search fa-2x"></i>
        </button>
        <button class="hw-navbar__item" data-hw-drawer-trigger="login">Logg inn<!--
          --><i class="hw-navbar__icon far fa-user fa-2x"></i>
        </button>
        <button class="hw-navbar__menu-button" data-hw-toggle-menu>
          <span class="hw-navbar__menu-button-label-menu">Menu</span>
          <span class="hw-navbar__menu-button-label-close">Close</span>
          <div class="hw-hamburger" data-hw-menu-icon>
            <span class="hw-hamburger__part"></span>
            <span class="hw-hamburger__part"></span>
            <span class="hw-hamburger__part"></span>
          </div>
        </button>
      </nav>
    </div>

    <div class="hw-drawer" data-hw-drawer="login">
      <div class="hw-drawer__overlay hw-animate hw-animate--fade-in-overlay" data-hw-drawer-trigger="Drawer2"></div>
      <div class="hw-drawer__content">
        <div class="hw-drawer__header">
          <div class="hw-drawer__close">
            <button class="hw-drawer__close-button" data-hw-drawer-trigger="login">
              <i class="fas fa-times fa-3x" title="Close drawer"></i>
            </button>
          </div>
        </div>
        <div class="hw-drawer__body">
          <div class="hw-block hw-block--mb hw-text-center">
            <svg class="hw-icon--gray-lighter" role="img" aria-labelledby="avatar">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar"></use>
          </svg>
          </div>
          <div class="hw-block hw-block--mb">
            <h2 class="hw-text-center">Hvor vil du logge inn?</h2>
          </div>
          <hr class="hw-hr hw-hr--centered">
          <div class="hw-block hw-block--mt">
            <div class="hw-container hw-container--narrow">
              <a class="hw-button hw-button--secondary hw-button--large hw-button--full" href="#">
                Mybring
              </a>
              <a class="hw-button hw-button--secondary hw-button--large hw-button--full" href="#">
                Min post
              </a>
              <a class="hw-button hw-button--secondary hw-button--large hw-button--full" href="#">
                Frimerkebutikken
              </a>
              <a class="hw-button hw-button--secondary hw-button--large hw-button--full" href="#">
                Digipost
              </a>
              <a class="hw-button hw-button--secondary hw-button--large hw-button--full" href="#">
                MINe - Internasjonalt gods
              </a>
              <a class="hw-button hw-button--secondary hw-button--large hw-button--full" href="#">
                MINe - Offshore &amp; Energy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="hw-navbar__drawer" data-hw-menu-drawer>
      <div class="hw-navbar__drawer-content">
        <div class="hw-navbar__drawer-mobile">
        </div>
        <div class="hw-navbar__drawer-desktop">
          <div class="hw-grid">
            <div class="hw-grid__item hw-one-quarter">
              <h2>Sende</h2>
              <div class="hw-block hw-block--full hw-block--pt-small hw-block--pb-small">
                <hr class="hw-hr hw-hr--gray-light"/>
              </div>
              <ul class="hw-linklist">
                <li><a href="#">Post - like formater</a></li>
                <li><a href="#">Post - blandede formater</a></li>
                <li><a href="#">Brev med sikkerhet</a></li>
                <li><a href="#">Pakker til postkassen</a></li>
                <li><a href="#">Frankering</a></li>
                <li><a href="#">Pakker til bedrift</a></li>
                <li><a href="#">Pakker til private</a></li>
                <li><a href="#">Gods i Norge</a></li>
                <li><a href="#">Gods internasjonalt</a></li>
              </ul>
            </div><!--
            --><div class="hw-grid__item hw-one-quarter">
              <h2>Motta</h2>
              <div class="hw-block hw-block--full hw-block--pt-small hw-block--pb-small">
                <hr class="hw-hr hw-hr--gray-light"/>
              </div>
              <ul class="hw-linklist">
                <li><a href="#">Spore</a></li>
                <li><a href="#">Adresseendring, varig</a></li>
                <li><a href="#">Adresseendring, midlertidig</a></li>
                <li><a href="#">Oppbevaring av post</a></li>
                <li><a href="#">Leie av postboks</a></li>
                <li><a href="#">Import og fortolling</a></li>
              </ul>
            </div><!--
            --><div class="hw-grid__item hw-one-quarter">
              <h2>Rådgivning</h2>
              <div class="hw-block hw-block--full hw-block--pt-small hw-block--pb-small">
                <hr class="hw-hr hw-hr--gray-light"/>
              </div>
              <ul class="hw-linklist">
                <li><a href="#">Farlig gods</a></li>
                <li><a href="#">Klargjøring av forsendelse</a></li>
                <li><a href="#">Returløsninger</a></li>
                <li><a href="#">Adressetjenester</a></li>
                <li><a href="#">Våre integrasjonsløsninger</a></li>
                <li><a href="#">Lagerløsninger</a></li>
                <li><a href="#">Netthandel</a></li>
                <li><a href="#">Kundedialog</a></li>
                <li><a href="#">Logistikkløsninger</a></li>
              </ul>
            </div><!--
            --><div class="hw-grid__item hw-one-quarter">
              <h2>Kundeservice</h2>
              <div class="hw-block hw-block--full hw-block--pt-small hw-block--pb-small">
                <hr class="hw-hr hw-hr--gray-light"/>
              </div>
              <ul class="hw-linklist">
                <li><a href="#">Reklamasjon og klage</a></li>
                <li><a href="#">Fakturaspørsmål</a></li>
                <li><a href="#">Driftsmeldinger</a></li>
                <li><a href="#">Finn postkontor og åpningstider</a></li>
                <li><a href="#">Min profil</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="hw-navbar__overlay" data-hw-navbar-overlay></div>
    <section class="hw-navbar__search">
      <div class="hw-search hw-search--large" data-hw-search>
        <span class="hw-search__background"></span>
        <div class="hw-search__inner">
          <input
            data-hw-search-input
            class="hw-search__input" type="text"
            aria-label="Søk"
            placeholder="Søk"
          />
          <i class="far fa-search hw-search__icon"></i>
        </div>
      </div>
    </section>
  </div>
</header>
`;

/**
 * Import function
 */

require('../navbar');

/**
 * Check results
 */

test('If added class to menu button', () => {
  const menuButtonSelector = document.body.querySelectorAll('[data-hw-toggle-menu]')[0];
  const menuButtonIconSelector = document.body.querySelectorAll('[data-hw-menu-icon]')[0];
  const activeClass = 'hw-hamburger--active';

  menuButtonSelector.click();

  const hasAddedActiveClass = menuButtonIconSelector.classList.contains(activeClass);
  expect(hasAddedActiveClass).toEqual(true);
});
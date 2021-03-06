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
        <svg class="hw-navbar__logo-gray" aria-labelledby="Logo" role="img">
          <title id="Logo">Go to homepage</title>
          <use xlink:href="#logo-bring-gray"></use>
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
        <button class="hw-navbar__menu-button" data-hw-toggle-menu><!--
          --><span class="hw-navbar__menu-button-label-menu">Menu</span><!--
          --><span class="hw-navbar__menu-button-label-close">Close</span><!--
          --><span class="fa-stack hw-navbar__menu-button-toggle">
              <i class="hw-navbar__bars far fa-bars fa-stack-2x"></i>
              <i class="hw-navbar__times far fa-times fa-stack-2x"></i>
        </button>
      </nav>
    </div>

    <div class="hw-drawer" data-hw-drawer="login">
      <div class="hw-drawer__overlay hw-animate hw-animate--fade-in-overlay" data-hw-drawer-trigger="Drawer2"></div>
      <div class="hw-drawer__content" data-hw-drawer-content>
        <div class="hw-drawer__header">
          <div class="hw-drawer__close">
            <button class="hw-drawer__close-button" data-hw-drawer-trigger="login">
              <i class="fas fa-times fa-3x" title="Close drawer"></i>
            </button>
          </div>
        </div>
        <div class="hw-drawer__body">
          <div class="hw-block hw-block--mb hw-text-center">
            <i class="far fa-user fa-7x hw-color-gray-light"></i>
          </div>
          <div class="hw-block hw-block--mb">
            <h3 class="hw-text-center">Hvor vil du logge inn?</h3>
          </div>
          <hr class="hw-hr hw-hr--centered">
          <div class="hw-block hw-block--mt">
            <div class="hw-container hw-container--narrow">
              <a class="hw-button hw-button--primary hw-button--large hw-button--full" href="#">
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
          <ul class="hw-accordion hw-accordion--menu" data-hw-accordion="mobile-menu" data-hw-accordion-allow-multiple>
            <li class="hw-accordion__item">
                <button class="hw-accordion__trigger">
                    Sende
                    <div class="hw-accordion__arrow"></div>
                </button>
                <div class="hw-accordion__contents">
                    <ul class="hw-accordion__link-items">
                        <li class="hw-accordion__link-item">
                            <a class="hw-accordion__link" href="#">Post - like formater</a>
                        </li>
                        <li class="hw-accordion__link-item">
                            <a class="hw-accordion__link" href="#">Post - blandede formater</a>
                        </li>
                        <li class="hw-accordion__link-item">
                            <a class="hw-accordion__link" href="#" target="_blank">En ekstern lenke</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="hw-accordion__item">
                <button class="hw-accordion__trigger">
                    Motta
                    <div class="hw-accordion__arrow"></div>
                </button>
                <div class="hw-accordion__contents">
                    <ul class="hw-accordion__link-items">
                        <li class="hw-accordion__link-item">
                            <a class="hw-accordion__link" href="#">Spore</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="hw-accordion__item">
                <button class="hw-accordion__trigger">
                    Kundeservice
                    <div class="hw-accordion__arrow"></div>
                </button>
                <div class="hw-accordion__contents">
                    <ul class="hw-accordion__link-items">
                        <li class="hw-accordion__link-item">
                            <a class="hw-accordion__link" href="#" target="_blank">Må ha en lenke ja</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="hw-accordion__item">
                <button class="hw-accordion__trigger">
                    Ekstra Kolonne
                    <div class="hw-accordion__arrow"></div>
                </button>
                <div class="hw-accordion__contents">
                    <ul class="hw-accordion__link-items">
                        <li class="hw-accordion__link-item">
                            <a class="hw-accordion__link" href="#" target="_blank">Hmm</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="hw-accordion__item">
                <a class="hw-accordion__link" href="#">Kundeservice</a>
            </li>
            <li class="hw-accordion__item">
                <a class="hw-accordion__link" href="#" target="_blank">Tittel med passe lengde</a>
            </li>
            <li class="hw-accordion__item">
                <a class="hw-accordion__link" href="#" target="_blank">Frimerker til samling</a>
            </li>
            <li class="hw-accordion__item">
                <a class="hw-accordion__link" href="#">Adresseendring og oppbevaring</a>
            </li>
            <li class="hw-accordion__item">
                <a class="hw-accordion__link" href="#" target="_blank">Femte</a>
            </li>
          </ul>
        </div>
        <div class="hw-navbar__drawer-desktop">
          <div class="hw-grid">
            <div class="hw-grid__item hw-one-quarter">
              <h3>Sende</h3>
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
              <h3>Motta</h3>
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
              <h3>Rådgivning</h3>
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
              <h3>Kundeservice</h3>
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
      <div class="hw-container hw-container--slim">
        <div class="hw-block hw-block--px-fluid">
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
              <button class="hw-search__button-inside" data-hw-search-reset><i class="fas fa-times-circle"></i></button>
            </div>
            <ul class="hw-search__suggestions">
              <li class="hw-search__suggestion" data-hw-search-suggestion>
                <a class="hw-search__suggestion-link" tabindex="-1" href="3">
                  <p class="hw-search__suggestion-title">Flyttetips</p>
                  <p class="hw-search__suggestion-extra">Innhold</p>
                </a>
              </li>
              <li class="hw-search__suggestion" data-hw-search-suggestion>
                <a class="hw-search__suggestion-link" tabindex="-1" href="3">
                  <p class="hw-search__suggestion-title">Adresseendring</p>
                  <p class="hw-search__suggestion-extra">Innhold</p>
                </a>
              </li>
              <li class="hw-search__suggestion" data-hw-search-suggestion>
                <a class="hw-search__suggestion-link" tabindex="-1" href="3">
                  <p class="hw-search__suggestion-title">Tolltjenester</p>
                  <p class="hw-search__suggestion-extra">Innhold</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button class="hw-navbar__close-search" data-hw-navbar-close-search>
        <i class="far fa-times fa-2x"></i>
      </button>
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
  const menuButton = document.body.querySelectorAll('[data-hw-toggle-menu]')[0];
  const navbar = document.body.querySelectorAll('.hw-navbar')[0];
  const activeClass = 'hw-navbar--active';

  menuButton.click();

  const hasAddedActiveClass = navbar.classList.contains(activeClass);
  expect(hasAddedActiveClass).toEqual(true);
});

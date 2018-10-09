import q from '../../utilities/js/q';
import qa from '../../utilities/js/qa';
import findParent from '../../utilities/js/findParent';
import KEYS from '../../utilities/js/keys';

/**
 * @function HWSearch
 * @version 0.0.1
 * @desc Controls search field
 * @param {object} settings
 */

export const HWSearch = ({
  selector = '[data-hw-search]',
  activeClass = 'hw-search--active',
  dirtyClass = 'hw-search--dirty',
  staticClass = 'hw-search--static',
  searchInputSelector = '[data-hw-search-input]',
  placeholderSelector = '[data-hw-search-placeholder]',
} = {}) => {

  // Module settings object
  const SETTINGS = {
    elements: qa(selector), // All dropdown DOM nodes
  };

  // const searchContainer = q(searchContainerSelector);
  // const searchInput = q(searchInputSelector);

  /**
   * @function startPlaceholderRotate
   * @desc Starts the placeholder rotation for given search field
   * @param {HTMLElement} search
   */
  function startPlaceholderRotate(search) {
    const placeholder = q(placeholderSelector, search);
    const { hwSearchPlaceholders } = search.dataset;
    if(!hwSearchPlaceholders){
      return;
    }
    const texts = JSON.parse(hwSearchPlaceholders);

    placeholder.innerText = texts[0];

    // Bail out if only one text
    if (texts.length < 2) {
      search.classList.add(staticClass);
      return;
    }

    let interval = 1;

    setInterval(() => {
      placeholder.innerText = texts[interval];

      if (interval < (texts.length - 1)) {
        interval += 1;
      } else {
        interval = 0;
      }
    }, 3000);
  }

  /**
   * @function toggleActive
   * @desc Toggles the dropdown options list for a dropdown
   */
  function toggleActive(e) {
    e.preventDefault();
    // Determine if we've clicked on an option
    const input = e.currentTarget;
    const container = findParent({ selector: '[data-hw-search]', elem: input });

    if (container.classList.contains(activeClass)) {
      container.classList.remove(activeClass);
    } else {
      container.classList.add(activeClass);
    }

    // Check if input is empty (and whether to allow placeholder texts to reappear)
    if (input.value !== '') {
      container.classList.add(dirtyClass);
    } else {
      container.classList.remove(dirtyClass);
    }
  }

  function onArrowDown(e, targetItem) {
    if (e.keyCode === KEYS.DOWN) {
      targetItem.focus();
      e.preventDefault();
    }
  }

  function onArrowUp(e, targetItem) {
    if (e.keyCode === KEYS.UP) {
      targetItem.focus();
      e.preventDefault();
    }
  }


  /**
   * @function bindEvents
   * @desc Adds listener to dropdown
   */
  function bindEvents(search) {
    const input = q(searchInputSelector, search);
    input.addEventListener('focus', toggleActive);
    input.addEventListener('blur', toggleActive);
  }

  function bindHotlistKeys(search) {
    const input = q(searchInputSelector, search);
    let hotlistLinks = qa('[data-hw-search-hotlist-item] a', search); //Find the current search field's hotlistLinks
    input.addEventListener('keydown', e => onArrowDown(e, hotlistLinks[0]));
    input.addEventListener('keydown', e => onArrowUp(e, hotlistLinks[hotlistLinks.length - 1]));
    hotlistLinks.forEach(function (hotlistLink, index) {
      let next = hotlistLinks[index + 1] || input;
      hotlistLink.addEventListener('keydown', e => onArrowDown(e, next));
      let previous = hotlistLinks[index - 1] || input;
      hotlistLink.addEventListener('keydown', e => onArrowUp(e, previous));
    });
  }

  function init() {
    // Check if any search fields exist, return if not.
    if (SETTINGS.elements.length < 1) {
      return;
    }

    // Loop through all search fields and initialise each
    SETTINGS.elements.forEach((search) => {

      bindHotlistKeys(search);
      // Skip if already initialised
      if (search.getAttribute('data-hw-search-initialised') === 'true') { return; }

      // Mark as initialised
      search.setAttribute('data-hw-search-initialised', true);

      // Set up event listeners
      bindEvents(search);

      // Start placeholder rotation
      startPlaceholderRotate(search);
    });
  }

  init();
};

HWSearch();

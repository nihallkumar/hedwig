import q from '../../utilities/js/q';
import qa from '../../utilities/js/qa';
import findParent from '../../utilities/js/findParent';
import KEYS from '../../utilities/js/keys';

/**
 * @function HWtrace
 * @version 0.0.1
 * @desc Controls trace field
 * @param {object} settings
 */

const HWtrace = ({
  selector = '[data-hw-trace]',
  activeClass = 'hw-trace--active',
  dirtyClass = 'hw-trace--dirty',
  staticClass = 'hw-trace--static',
  traceInputSelector = '[data-hw-trace-input]',
  placeholderSelector = '[data-hw-trace-placeholder]',
} = {}) => {

  // Module settings object
  const SETTINGS = {
    elements: qa(selector), // All dropdown DOM nodes
  };

  // const traceContainer = q(traceContainerSelector);
  // const traceInput = q(traceInputSelector);

  /**
   * @function startPlaceholderRotate
   * @desc Starts the placeholder rotation for given trace field
   * @param {HTMLElement} trace
   */
  function startPlaceholderRotate(trace) {
    const placeholder = q(placeholderSelector, trace);
    const { hwTracePlaceholders } = trace.dataset;

    if(!hwTracePlaceholders){
      return;
    }
    const texts = JSON.parse(hwTracePlaceholders);

    placeholder.innerText = texts[0];

    // Bail out if only one text
    if (texts.length < 2) {
      trace.classList.add(staticClass);
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
    const container = findParent({ selector: '[data-hw-trace]', elem: input });

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

  function onArrowDownOrUp(e) {
    if (e.keyCode === KEYS.DOWN) {
      const hwtrace = findParent({ selector, elem: e.target });
      if(e.target.tagName == 'INPUT'){ // We are currently in the trace input field
        const suggestionLinks = qa('[data-hw-trace-suggestion] a', hwtrace); //Find the current trace field's suggestionLinks
        suggestionLinks[0].focus();
      } else if ( e.target.tagName == 'A'){
        const next = findParent({ selector: '.hw-trace__suggestion', elem: e.target }).nextElementSibling;
        if(next){
          q('.hw-trace__suggestion-link', next).focus();
        } else {
          q(traceInputSelector, hwtrace).focus();
        }
      }
      e.preventDefault();
    }

    if(e.keyCode === KEYS.UP) {
      const hwtrace = findParent({ selector, elem: e.target });
      if(e.target.tagName == 'INPUT'){
        const suggestionLinks = qa('[data-hw-trace-suggestion] a', hwtrace); //Find the current trace field's suggestionLinks
        suggestionLinks[suggestionLinks.length - 1].focus();
      } else if ( e.target.tagName == 'A'){
        const previous = findParent({ selector: '.hw-trace__suggestion', elem: e.target }).previousElementSibling;
        if(previous){
          q('.hw-trace__suggestion-link', previous).focus();
        } else {
          q(traceInputSelector, hwtrace).focus();
        }
      }
      e.preventDefault();
    }
  }

  function onReset(e, trace){
    let input = q(traceInputSelector, trace);
    input.value = ''; // triggers an input event in IE 11, but not in Chrome
    //Create an input event
    var event = document.createEvent('Event');
    event.initEvent('input', true, true);
    input.dispatchEvent(event);
    input.focus();
  }

  function onInput(e, trace) {
    if(e.target.value === ''){
      trace.classList.remove('hw-trace--hasvalue');
    } else {
      trace.classList.add('hw-trace--hasvalue');
    }
  }

  /**
   * @function bindEvents
   * @desc Adds listener to dropdown
   */
  function bindEvents(trace) {
    const input = q(traceInputSelector, trace);
    input.addEventListener('focus', toggleActive);
    input.addEventListener('blur', toggleActive);
    const suggestions = q('.hw-trace__suggestions', trace);
    if(suggestions) {
      trace.addEventListener('keydown', e => onArrowDownOrUp(e));
    }
    input.addEventListener('input', e => onInput(e, trace));
    const resetButton = q('[data-hw-trace-reset]', trace);
    if(resetButton){
      resetButton.addEventListener('click', e => onReset(e, trace));
    }
  }

  function init() {
    // Check if any trace fields exist, return if not.
    if (SETTINGS.elements.length < 1) {
      return;
    }

    // Loop through all trace fields and initialise each
    SETTINGS.elements.forEach((trace) => {

      // Skip if already initialised
      if (trace.getAttribute('data-hw-trace-initialised') === 'true') { return; }

      // Mark as initialised
      trace.setAttribute('data-hw-trace-initialised', true);

      // Set up event listeners
      bindEvents(trace);

      // Start placeholder rotation
      startPlaceholderRotate(trace);
    });
  }

  init();
};

HWtrace();

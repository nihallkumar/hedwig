import q from '../../utilities/js/q';
import qa from '../../utilities/js/qa';
const HWTab = ({
  tabSelector = '.hw-tab',
  selectedClass = 'hw-tab__item--selected',
  itemSelector = '.hw-tab__item',
  markerSelector = '.hw-tab__marker'
} = {}) => {
  // Module settings object
  const SETTINGS = {
    tab: q(tabSelector),
    items: qa(itemSelector),
    marker: q(markerSelector)
  };


  function clickItem(e) {
    e.preventDefault();
    var clickedItem = e.target;
    if(clickedItem.classList.contains(selectedClass)){
      //Already selected, don't do anything
      return;
    }

    moveMarkerTo(clickedItem);

    // Toggle selected class
    SETTINGS.items.forEach((item) => {
      if (item.classList.contains(selectedClass)) {
        item.classList.remove(selectedClass);
      }
    });
    clickedItem.classList.add(selectedClass);
  }

  function moveMarkerTo(item){
    var itemProperties = item.getBoundingClientRect();
    var left = itemProperties.x - SETTINGS.tab.getBoundingClientRect().x + SETTINGS.tab.scrollLeft;
    SETTINGS.marker.style.left = left + 'px';
    SETTINGS.marker.style.width = itemProperties.width + 'px';
  }


  function init() {
    if (!SETTINGS.tab || !SETTINGS.marker) {
      return;
    }

    SETTINGS.items.forEach((item) => {
      /**
       * Hide the border for the item when using this script
       * When this script is not in use, only show the border below the selected item
       * @type {string}
       */
      // Attach event listener
      item.addEventListener('click', clickItem);
      if(item.classList.contains(selectedClass)){
        // Save transition, remove it, move marker and restore transition
        var existingTransition = SETTINGS.marker.style.transition;
        SETTINGS.marker.style.transition = 'none';
        moveMarkerTo(item);
        SETTINGS.marker.style.transition = existingTransition;
      }
      item.style.borderColor = 'transparent';
    });

  }
    init();
};
HWTab();

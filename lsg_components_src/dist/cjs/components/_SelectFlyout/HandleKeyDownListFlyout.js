'use strict';

var Keys = require('../../utils/Keys.js');
var timing = require('../../utils/timing.js');

let typeAheadTimeout;
let typeAhead = "";
const getPageScrollNumItems = (direction, host, focussedElement) => {
  let numItems = 0;
  if (!focussedElement || !host) {
    return 0;
  }
  const hasSibling = !!focussedElement.previousElementSibling || !!focussedElement.nextElementSibling;
  function nextSibling(el) {
    const getElement = nextElement => hasSibling ? nextElement(el) : nextElement(el.parentElement)?.children[0];
    return direction === "up" ? getElement(ele => ele.previousElementSibling) : getElement(ele => ele.nextElementSibling);
  }
  let element = focussedElement;
  let height = element.offsetHeight;
  while (height < host.offsetHeight) {
    const newSibling = nextSibling(element);
    if (!newSibling) {
      break;
    }
    element = newSibling;
    height += element.offsetHeight;
    numItems += 1;
  }
  return numItems;
};
const addTypeAhead = (char, options, focussedValue, onFocusValue) => {
  // if e.g. "P" is pressed, the first option starting with "p" is selected.
  // this is not used with Autocomplete or Select with text input.
  timing.clearLsgTimeout(typeAheadTimeout);
  typeAhead = `${typeAhead}${char}`;
  const optIndex = options.findIndex(o => !o.disabled && o.label.toLocaleLowerCase().startsWith(typeAhead));
  if (optIndex !== -1) {
    // there is still an element that starts with the current typeahead value, just select this element
    onFocusValue(optIndex);
  } else {
    const [before, last] = typeAhead.slice(-2).split("");
    if (before === last) {
      const filteredOptions = options.filter(o => !o.disabled && o.label.toLocaleLowerCase().startsWith(before));
      if (filteredOptions.length > 0) {
        const filteredIndex = focussedValue && options[focussedValue]?.label ? filteredOptions.findIndex(o => o.label === options[focussedValue].label) : 0;
        onFocusValue(options.findIndex(o => o.label === filteredOptions[filteredIndex >= filteredOptions.length - 1 ? 0 : filteredIndex + 1].label));
      }
    }
  }
  typeAheadTimeout = timing.setLsgTimeout(() => typeAhead = "", 1000);
};
const isLetterCharacter = char => /^[A-Za-z0-9-_äöüß]$/i.test(char);
function handleKeyDown({
  event,
  options,
  focussedIndex,
  onChange,
  onFocusIndex,
  flyoutElement,
  focussedElement,
  onClose,
  useTypeAhead,
  isTextInputSelect
}) {
  event.stopPropagation();
  if (!options || options.length === 0) {
    return;
  }
  const selectedIndex = focussedIndex;
  const length = options.length;
  const confirmFn = () => {
    // TODO: consider only using -1 instead of undefined within this function.
    if (focussedIndex === undefined || focussedIndex < 0) {
      return undefined;
    }
    if (!options[focussedIndex]?.disabled) {
      onChange(focussedIndex);
    }
    onClose(event);
  };
  // function that returns a new index for the pressed key
  // the function returns undefined if the option does not change
  const keyFunction = {
    [Keys.Key.Home]: () => 0,
    [Keys.Key.End]: () => length - 1,
    // a11y pattern says: "If focus is on the first option, either returns focus to the combobox or does
    // nothing." We do nothing. https://www.w3.org/WAI/ARIA/apg/patterns/combobox/
    [Keys.Key.ArrowUp]: () => selectedIndex > 0 ? selectedIndex - 1 : 0,
    // a11y pattern says: "If focus is on the last option, either returns focus to the combobox or does
    // nothing." We do nothing. https://www.w3.org/WAI/ARIA/apg/patterns/combobox/
    [Keys.Key.ArrowDown]: () => selectedIndex < length - 2 ? selectedIndex + 1 : length - 1,
    [Keys.Key.PageUp]: () => Math.max((selectedIndex >= 0 ? selectedIndex : 0) - getPageScrollNumItems("up", flyoutElement, focussedElement), 0),
    [Keys.Key.PageDown]: () => Math.min((selectedIndex >= 0 ? selectedIndex : 0) + getPageScrollNumItems("down", flyoutElement, focussedElement), length - 1),
    [Keys.Key.Enter]: confirmFn,
    [Keys.Key.Escape]: () => {
      onClose(event);
    },
    [Keys.Key.Tab]: () => {
      confirmFn();
      onClose(event);
    },
    [Keys.Key.Space]: () => {
      confirmFn();
    }
  }[event.key];
  if (keyFunction && !(isTextInputSelect && event.key === Keys.Key.Space)) {
    if (event.key !== Keys.Key.Tab) {
      // Prevent default (e.g. scroll with arrow keys) for all keys above except Tab
      event.preventDefault();
    }
    const newIndex = keyFunction();
    if (newIndex !== undefined) {
      onFocusIndex(newIndex);
    }
  }
  if (!event.ctrlKey && !event.altKey && useTypeAhead && isLetterCharacter(event.key)) {
    // only do this if the user pressed a character key (a-ü / 0-9)
    addTypeAhead(event.key, options, focussedIndex, onFocusIndex);
  }
}
// Keep in mind that this handled by the Textfield - so there's no magic with the Flyout.
function handleKeydownListFlyout({
  event,
  open,
  focussedIndex,
  options,
  onChange,
  onOpen,
  onClose,
  onFocusIndex,
  flyoutElement,
  focussedElement,
  afterAction = () => {},
  useTypeAhead,
  isTextInputSelect
}) {
  if (event.shiftKey && event.key === Keys.Key.Shift) {
    return;
  }
  const handleKeyDownFn = () => handleKeyDown({
    event,
    options,
    focussedIndex,
    onChange,
    onFocusIndex,
    flyoutElement,
    focussedElement,
    onClose,
    useTypeAhead,
    isTextInputSelect
  });
  if (open || event.key === Keys.Key.Escape) {
    handleKeyDownFn();
  } else if ([Keys.Key.Home, Keys.Key.End].includes(event.key) || isLetterCharacter(event.key)) {
    onOpen();
    handleKeyDownFn();
  } else if ([Keys.Key.ArrowUp, Keys.Key.ArrowDown, Keys.Key.Enter, Keys.Key.Space].includes(event.key)) {
    onOpen();
  }
  afterAction();
}

exports.handleKeyDown = handleKeyDown;
exports.handleKeydownListFlyout = handleKeydownListFlyout;

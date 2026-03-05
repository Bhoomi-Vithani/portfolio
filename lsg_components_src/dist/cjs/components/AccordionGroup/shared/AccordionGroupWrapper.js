'use strict';

var React__default = require('react');
var Keys = require('../../../utils/Keys.js');
var ReactUtils = require('../../../utils/ReactUtils.js');
var AccordionGroupPresentation = require('./AccordionGroupPresentation.js');

// @ts-strict-ignore
const AccordionGroupWrapper = ({
  onChange = () => {},
  ...props
}) => {
  const accordionButtonElms = React__default.useRef([]);
  const registerAccordionButtonElm = index => elm =>
  // Registers a new elements, but also deletes elements that are no longer there
  accordionButtonElms.current = elm ? [...accordionButtonElms.current.slice(0, index), elm, ...accordionButtonElms.current.slice(index)] : accordionButtonElms.current.slice(index, 1);
  const keyHandler = e => {
    let index = NaN;
    accordionButtonElms.current.forEach((item, i) => {
      if (item === document.activeElement) {
        index = i;
      }
    });
    if (!Number.isNaN(index)) {
      let newFocusedElem = document.activeElement;
      switch (e.key) {
        case Keys.Key.ArrowDown:
          e.preventDefault();
          newFocusedElem = index < accordionButtonElms.current.length - 1 ? accordionButtonElms.current[index + 1] : document.activeElement;
          break;
        case Keys.Key.ArrowUp:
          e.preventDefault();
          newFocusedElem = index > 0 ? accordionButtonElms.current[index - 1] : document.activeElement;
          break;
        case Keys.Key.Home:
          e.preventDefault();
          newFocusedElem = accordionButtonElms.current[0];
          break;
        case Keys.Key.End:
          e.preventDefault();
          newFocusedElem = accordionButtonElms.current[accordionButtonElms.current.length - 1];
          break;
      }
      newFocusedElem.focus();
    }
  };
  const setOpenIndex = index => (_open, _id, ev) => {
    // elaborate checking because of typescript props interface definintion
    if (!props.multiple) {
      onChange(props.openIndex !== index ? index : -1, props.id, ev);
    }
  };
  return /*#__PURE__*/React__default.createElement(AccordionGroupPresentation.AccordionGroupPresentation, {
    ...props
  }, ReactUtils.fragmentMap(props.children, (child, i) => {
    if (! /*#__PURE__*/React__default.isValidElement(child)) {
      return;
    }
    const additionalProps = {
      onKeyDown: keyHandler,
      actionRef: registerAccordionButtonElm(i)
    };
    if (!props.multiple) {
      additionalProps.isOpen = props.openIndex === i;
      additionalProps.onChange = setOpenIndex(i);
    }
    return /*#__PURE__*/React__default.cloneElement(child, additionalProps);
  }));
};

exports.AccordionGroupWrapper = AccordionGroupWrapper;

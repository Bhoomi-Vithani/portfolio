'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var timing = require('../../../utils/timing.js');
var SelectPresentation = require('../../Select/shared/SelectPresentation.js');
var HandleKeyDownListFlyout = require('../../_SelectFlyout/HandleKeyDownListFlyout.js');

// @ts-strict-ignore
/* eslint-disable @typescript-eslint/no-shadow,react/default-props-match-prop-types */
const AutoCompletePresentation = ({
  value,
  onFocus = () => {
    /* empty */
  },
  onBlur = () => {
    /* empty */
  },
  onChange = () => {
    /* empty */
  },
  onKeyDown = () => {
    /* empty */
  },
  id: idProp,
  ...props
}) => {
  const hostRef = React__default.useRef(undefined);
  const focusedElementRef = React__default.useRef(undefined);
  const containerElementRef = React__default.useRef(undefined);
  const flyoutElementRef = React__default.useRef(undefined);
  const id = index.useUniqueId(`${prefix.lsgPre}autocomplete-`, idProp);
  const [state, setState] = React__default.useState({
    open: false,
    focusedValue: ""
  });
  // close flyout if state changes to non-interactable
  React__default.useEffect(() => {
    if (props.disabled || props.readonly) {
      setState(prevState => ({
        ...prevState,
        open: false
      }));
    }
  }, [props.disabled, props.readonly]);
  const handleOnFocus = (event, name) => {
    const target = event.relatedTarget;
    if (target && (DomUtils.isTargetInsideContainer(target, hostRef.current) || DomUtils.isTargetInsideContainer(target, flyoutElementRef.current))) {
      return;
    }
    onFocus(event, name);
  };
  const handleOnKeyDown = event => {
    HandleKeyDownListFlyout.handleKeydownListFlyout({
      event,
      open: state.open,
      focussedIndex: props.options?.findIndex(opt => opt.value === state.focusedValue),
      options: props.options,
      onChange: value => onChange(props.options[value].value, props.name, true, event),
      onOpen: () => setState(prevState => ({
        ...prevState,
        open: true
      })),
      onClose: () => {
        if (state.open) {
          setState(prevState => ({
            ...prevState,
            open: false
          }));
        } else {
          onChange("", event.name, false, event);
        }
      },
      onFocusIndex: value =>
      // TODO: Find alternative to timeout hack. Prevents timing issues when opening flyout and changing
      //  selection with the same keystroke (e.g. when opening with HOME, END, or "letter keys").
      timing.setLsgTimeout(() => setState(prevState => ({
        ...prevState,
        focusedValue: props.options[value].value,
        scrollFocussedElementIntoView: true
      }))),
      flyoutElement: flyoutElementRef.current,
      focussedElement: focusedElementRef.current,
      afterAction: () => onKeyDown(event.key, props.name, event),
      useTypeAhead: false,
      isTextInputSelect: true
    });
  };
  const handleOnBlur = (event, name) => {
    const target = event.relatedTarget;
    if (DomUtils.isTargetInsideContainer(target, hostRef.current) || DomUtils.isTargetInsideContainer(target, flyoutElementRef.current) || target === hostRef.current) {
      return;
    }
    onBlur(event, name);
  };
  const {
    open,
    focusedValue,
    scrollFocussedElementIntoView
  } = state;
  return /*#__PURE__*/React__default.createElement(SelectPresentation.SelectPresentation, {
    ...props,
    id: id,
    htmlAttrs: {
      "aria-autocomplete": "list"
    },
    withTextInput: true,
    displayValue: value,
    onDisplayValueChange: (newValue, name, event) => {
      onChange(newValue, name, false, event);
    },
    open: open,
    flyoutValue: "",
    onFlyoutChange: (newValue, name, event) => {
      // newValue === "" -> X-Icon clicked.
      const isSelected = newValue !== "";
      onChange(newValue, name, isSelected, event);
    },
    onKeyDown: handleOnKeyDown,
    onBlur: handleOnBlur,
    ref: hostRef,
    onOpenChange: isOpen => setState(prevState => ({
      ...prevState,
      open: isOpen
    })),
    onFocus: handleOnFocus,
    containerRef: containerElementRef,
    flyoutRef: flyoutElementRef,
    focussedValue: focusedValue,
    focussedRef: focusedElementRef,
    scrollFocussedElementIntoView: scrollFocussedElementIntoView,
    onFocussedValueChange: (newValue, newScroll) => setState(prevState => ({
      ...prevState,
      focusedValue: newValue,
      scrollFocussedElementIntoView: newScroll
    }))
  });
};

exports.AutoCompletePresentation = AutoCompletePresentation;

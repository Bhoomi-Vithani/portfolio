'use strict';

var React__default = require('react');
var index = require('../../../utils/Hooks/index.js');
var Localization = require('../../../utils/Localization.js');
var ResizeEvents = require('../../../utils/windowEvents/ResizeEvents.js');
var TextFieldPresentation = require('./TextFieldPresentation.js');

// @ts-strict-ignore
// TODO: Based on new react 18 feature regarding optimizing concurrent updates at the same time, there is a issue in onClearIcon-Event
//  when onChange set the value to "" and the focus is set to input field again at the same time. Currently a timeout is used to delay the call of setting the focus,
//  otherwise the focus is set and the value isn't empty at this moment.
//  This issue has identified with IBAN-Simulation example "TextInputIBANSimulation" in stories.
const getTextWidth = (text, font) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
};
const defaultProps = {
  clearIcon: true,
  optionalText: Localization.texts.lsg.component._general.optional,
  onBlur: () => {
    /* empty */
  },
  onFocus: () => {
    /* empty */
  },
  onIconClick: () => {
    /* empty */
  },
  onInputClick: () => {
    /* empty */
  },
  onKeyDown: () => {
    /* empty */
  },
  isSearchField: false,
  suffixType: "inline"
};
const TextFieldWrapper = props => {
  const mergedProps = {
    ...defaultProps,
    ...props
  };
  const {
    inputRef,
    autoFocus,
    icon,
    iconLink,
    suffix,
    placeholder,
    onChange,
    value
  } = mergedProps;
  const [hasFocus, setHasFocus] = React__default.useState(false);
  const [hasKeyboardFocus, setHasKeyboardFocus] = React__default.useState(false);
  const [hasHover, setHasHover] = React__default.useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = React__default.useState(false);
  const [sliderInterval, setSliderInterval] = React__default.useState(0);
  const suffixElement = React__default.useRef(null);
  const innerContainer = React__default.useRef(null);
  const getInputRef = index.combineRefs(inputRef);
  const adjustTextFieldDimensions = () => {
    const inputElement = getInputRef.current;
    const hasSecondIcon = !!icon || !!iconLink;
    // adjust height
    if (inputElement && inputElement instanceof HTMLTextAreaElement) {
      const computedStyle = window.getComputedStyle(inputElement);
      const lineHeight = parseInt(computedStyle.lineHeight, 10);
      const verticalPadding = parseInt(computedStyle.paddingTop, 10) + parseInt(computedStyle.paddingBottom, 10);
      const numLines = Math.abs(Math.round((inputElement.scrollHeight - verticalPadding) / lineHeight));
      // eslint-disable-next-line no-param-reassign
      inputElement.style.height = `${numLines * lineHeight + 1}px`;
    }
    // Adjust left padding for suffix
    if (inputElement && suffixElement.current) {
      const inputFont = window.getComputedStyle(inputElement).font;
      const inputElementTextWidth = getTextWidth(inputElement.value, inputFont);
      const suffixWidth = getTextWidth(suffix, inputFont);
      const textFieldWidth = window.getComputedStyle(innerContainer.current).width;
      // 21 = 5px spacing + 16px container padding
      const extraSpace = inputElementTextWidth === 0 ? 0 : 5;
      const maxWidth = parseInt(textFieldWidth, 10) - suffixWidth - (hasFocus ? 45 : 25) - (hasSecondIcon ? 24 : 0);
      // Adding 1px extra padding so the text cursor does not get overlapped by the suffix
      const suffixPaddingLeft = Math.min(Math.round(inputElementTextWidth) + extraSpace, maxWidth) + 1;
      suffixElement.current.style.left = `${suffixPaddingLeft}px`;
      // Adjust width of text input
      inputElement.style.maxWidth = `${maxWidth}px`;
    }
  };
  const onViewportChange = () => {
    adjustTextFieldDimensions();
  };
  React__default.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        adjustTextFieldDimensions();
      }
    }, {
      threshold: 0.1
    } // 10% Sichtbarkeit
    );
    // @as: TODO: Not sure if innerContainer.current is always up-to-date. Check if we can rewrite it with `ref={useCallback(...)}` and/or a `combineRefs` hook.
    if (innerContainer.current) {
      observer.observe(innerContainer.current);
    }
    return () => {
      if (innerContainer.current) {
        observer.unobserve(innerContainer.current);
      }
    };
  }, []);
  const onPasswordToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
    // eslint-disable-next-line etc/no-commented-out-code
    // this.getInputElement().focus(); // Focus back to the input, problem: screen-reader would read the password
  };
  const onBlur = (e, name) => {
    if (typeof window !== "undefined") {
      window.clearInterval(sliderInterval);
      setSliderInterval(0); // Reset interval
    }
    // Todo: Do we need this?
    // With this line you prevent an onblur if you tab to the custom icon (e.g. the DatePicker icon) --- if (innerContainer.contains(e.relatedTarget)) return;
    setHasFocus(false);
    setHasKeyboardFocus(false);
    // Don't trigger onBlur for disabled or readonly elements
    if (mergedProps.disabled || mergedProps.readonly) {
      return;
    }
    mergedProps.onBlur(e, name);
  };
  const onFocus = (e, name) => {
    // Don't start interval for disabled or readonly elements
    if (mergedProps.disabled || mergedProps.readonly) {
      return;
    }
    /* The interval is needed to call onBlur, when background logic is removing the focus on the element
     and no onBlur is triggered automatically. This is important to remove invalid input from the TextField.
     */
    if (typeof window !== "undefined") {
      // Clear any existing interval first
      if (sliderInterval) {
        window.clearInterval(sliderInterval);
      }
      const newInterval = window.setInterval(() => {
        // Additional check for disabled/readonly state during interval
        if (mergedProps.disabled || mergedProps.readonly) {
          window.clearInterval(newInterval);
          setSliderInterval(0);
          return;
        }
        if (document.activeElement !== getInputRef.current) {
          onBlur(e, "blur");
        }
      }, 100);
      setSliderInterval(newInterval);
    }
    setHasFocus(true);
    setHasKeyboardFocus(document.documentElement.getAttribute("data-whatinput") === "keyboard");
    mergedProps.onFocus(e, name);
  };
  React__default.useEffect(() => {
    if (autoFocus) {
      getInputRef.current.focus();
    }
    ResizeEvents.addViewportCallback(onViewportChange);
    onViewportChange();
    return () => {
      ResizeEvents.removeViewportCallback(onViewportChange);
      if (typeof window !== "undefined" && sliderInterval) {
        window.clearInterval(sliderInterval);
        setSliderInterval(0); // Reset Interval-reference
      }
    };
  }, [sliderInterval]);
  React__default.useEffect(() => {
    adjustTextFieldDimensions();
  }, [value, hasFocus]);
  return /*#__PURE__*/React__default.createElement(TextFieldPresentation.TextFieldPresentation, {
    ...props,
    hasFocus: hasFocus,
    hasKeyboardFocus: hasKeyboardFocus,
    hasHover: hasHover,
    onMouseHoverChange: setHasHover,
    isPasswordVisible: isPasswordVisible,
    onPasswordToggle: onPasswordToggle,
    placeholder: placeholder,
    onFocus: onFocus,
    onBlur: onBlur,
    onChange: onChange,
    onClear: e => {
      onChange("", props.name, e);
      (() => {
        setTimeout(() => getInputRef.current.focus(), 500); // temporary solution see also the
        // TODO-Section on the top of file
      })();
    },
    inputRef: getInputRef,
    suffixRef: suffixElement,
    innerContainerRef: innerContainer,
    inputElement: getInputRef.current
  });
};

exports.TextFieldWrapper = TextFieldWrapper;

'use strict';

var React__default = require('react');
var index = require('../../../utils/Hooks/index.js');
var Keys = require('../../../utils/Keys.js');
var ResizeEvents = require('../../../utils/windowEvents/ResizeEvents.js');
var TextSlider_styles = require('./TextSlider.styles.js');
var TextSliderPresentation = require('./TextSliderPresentation.js');

// @ts-strict-ignore
const TextSliderWrapper = props => {
  const id = index.useUniqueId(`${TextSlider_styles.hostClass}-`, props.id);
  // private readonly inputId = uniqueId(hostClass);
  const hostRef = React__default.useRef(undefined);
  const openTextInputAreaButtonRef = React__default.useRef(undefined);
  const inputTextLowerRef = React__default.useRef(undefined);
  const inputTextUpperRef = React__default.useRef(undefined);
  const [state, setState] = React__default.useState({
    isSliderVisible: true,
    temporaryInputValue: undefined,
    originalInputValue: props.value,
    isComponentFocused: false,
    isMobile: ["xs"].includes(ResizeEvents.getInitialViewportSize()),
    // mobile view with smallest viewport);
    throwOnBlurEvent: false,
    throwOnInputCloseEvent: false,
    blurOrInputCloseEvent: undefined,
    iconLinkPressedOrClicked: false
  });
  const onViewportChange = viewport => {
    setState(prevState => ({
      ...prevState,
      isMobile: ["xs"].includes(viewport)
    }));
  };
  React__default.useEffect(() => {
    ResizeEvents.addViewportCallback(onViewportChange);
    return () => ResizeEvents.removeViewportCallback(onViewportChange);
  }, []);
  const previousState = index.usePrevious(state);
  React__default.useEffect(() => {
    if (!previousState?.isSliderVisible && state.isSliderVisible && state.iconLinkPressedOrClicked) {
      // After closing input fields, the focus is returned to host component to support onblur correctly - also works (with && state.iconLinkPressedOrClicked) in opened TextField when Enter key is pressed on Icon or when Escape key is pressed
      // && state.iconLinkPressedOrClicked also fixed focus outline placement bug when user presses Tab key on website - Keyboard Icon is now correctly focussed first
      window.requestAnimationFrame(() => {
        openTextInputAreaButtonRef.current?.focus();
      });
    }
    if (inputTextLowerRef.current && previousState?.isSliderVisible && !state.isSliderVisible) {
      inputTextLowerRef.current?.focus(); // set focus to lower input element after keyboard icon is clicked and input gets open
    }
  });
  React__default.useEffect(() => {
    if (state.throwOnInputCloseEvent && props.onInputClose) {
      props.onInputClose(state.blurOrInputCloseEvent);
    }
    if (state.throwOnBlurEvent && props.onBlur) {
      props.onBlur(state.blurOrInputCloseEvent);
    }
    setState(prevState => ({
      ...prevState,
      throwOnInputCloseEvent: false,
      throwOnBlurEvent: false,
      blurOrInputCloseEvent: undefined
    }));
  }, [state.throwOnBlurEvent, state.throwOnInputCloseEvent]);
  const isValidNumber = value => !(!value && value !== 0);
  const getInternalInputTextfieldValidation = () => {
    let invalidInput = false;
    let invalidInputField;
    const value = props.value;
    const {
      minValue,
      maxValue
    } = props;
    if (!props.onChange) {
      // deprecated onChange event is used: no validation. Remove the if statement in when the deprecated onChange is removed in a later version.
      if (props.look === "singleSlider") {
        if (!isValidNumber(value) || value < minValue || value > maxValue) {
          invalidInput = true;
          invalidInputField = "lower";
        }
      } else {
        if (!isValidNumber(value[0]) || value[0] < minValue || value[0] > maxValue) {
          invalidInput = true;
          invalidInputField = "lower";
        }
        if (!isValidNumber(value[1]) || value[1] < minValue || value[1] > maxValue) {
          invalidInput = true;
          invalidInputField = invalidInputField === "lower" ? "both" : "upper";
        }
        if (value[0] > value[1]) {
          invalidInput = true;
          invalidInputField = "both";
        }
      }
    }
    return {
      invalidInput,
      invalidInputField
    };
  };
  const internalInputTextfieldValidation = getInternalInputTextfieldValidation();
  // The following useEffect triggers a flickering effect (bug) when invalidInput is set to true statically in the invalidInput prop of a Story without an active preventAutoCorrection
  // e. g. in Story RangeSliderAccessibilityExample. See also CCSN-74358.
  React__default.useEffect(() => {
    if (!props.onChange) {
      setState(prevState => ({
        ...prevState,
        isSliderVisible: prevState.isSliderVisible && !props.invalidInput && !internalInputTextfieldValidation.invalidInput
      }));
    } else {
      // deprecated behaviour
      setState(prevState => ({
        ...prevState,
        isSliderVisible: prevState.isSliderVisible && !props.invalidInput
      }));
    }
  }, [state.isSliderVisible, props.invalidInput, internalInputTextfieldValidation.invalidInput]);
  React__default.useEffect(() => {
    if (props.onChange // && !state.isSliderVisible && previousState.isSliderVisible
    ) {
      // deprecated onChange handler. This handler is not called when a text field is deleted, so the old number value has to be stored.
      // user sets a new value. The temporaryInputValue has to be set.
      setState(prevState => ({
        ...prevState,
        temporaryInputValue: Array.isArray(props.value) ? [...props.value] : props.value
      }));
    }
  }, [props.value?.toString()]);
  const handleInputOnChange = (val, name) => {
    const inputTextName = name.substring(name.lastIndexOf("_") + 1);
    // The onChange event is deprecated and should be replaced in v20 (or alternatively, will be synonymous the correct onInputChange event.
    // This event is not called when an text input is empty. That's why we have to save the last value in the state.
    if (props.onChange) {
      if (props.look === "singleSlider") {
        if (isValidNumber(val)) {
          props.onChange(val, `${props.name}_inputText`);
        }
        setState(prevState => ({
          ...prevState,
          temporaryInputValue: val
        }));
      } else {
        const temporaryInputValue = [...state.temporaryInputValue];
        if (inputTextName === "inputTextLower") {
          temporaryInputValue[0] = val;
        } else if (inputTextName === "inputTextUpper") {
          temporaryInputValue[1] = val;
        }
        if (isValidNumber(temporaryInputValue[0]) && isValidNumber(temporaryInputValue[1])) {
          props.onChange(temporaryInputValue, name);
        }
        setState(prevState => ({
          ...prevState,
          temporaryInputValue
        }));
      }
    }
    if (props.onInputChange) {
      if (inputTextName === "inputTextLower") {
        if (props.look === "singleSlider") {
          props.onInputChange(val, `${props.name}_inputText`);
        } else {
          props.onInputChange([val, props.value[1]], name);
        }
      }
      if (inputTextName === "inputTextUpper") {
        props.onInputChange([props.value[0], val], name);
      }
    }
    // Todo: InputTextfield has an erroneous onClearIconClick event -> the focus is lost.
    // we have to fix that, so we do not need this.
    window.requestAnimationFrame(() => {
      if (inputTextName === "inputTextLower") {
        inputTextLowerRef.current?.focus();
      } else {
        inputTextUpperRef.current?.focus();
      }
    });
  };
  const handleSliderOnChange = (value, name) => {
    if (props.onChange) {
      props.onChange(value, name);
    }
    if (props.onInputChange) {
      props.onInputChange(value, name);
    }
  };
  const closeTextInputArea = (event, eventType, isComponentFocused) => {
    if (props.onChange) {
      // deprecated onChange behaviour, remove this if statement with the next version.
      if (props.look === "singleSlider") {
        if (!isValidNumber(state.temporaryInputValue)) {
          props.onChange(state.originalInputValue, `${props.name}_inputText`);
        }
      } else if (!isValidNumber(state.temporaryInputValue[0]) || !isValidNumber(state.temporaryInputValue[1])) {
        props.onChange(state.originalInputValue, `${props.name}_inputText`); // todo: was müssen wir hier als Namen angeben?
      }
      setState(prevState => ({
        ...prevState,
        isSliderVisible: true,
        isComponentFocused,
        [eventType]: true,
        blurOrInputCloseEvent: event
      }));
    } else {
      const isSliderVisible = !props.preventAutoCorrection || !props.invalidInput && !internalInputTextfieldValidation.invalidInput;
      setState(prevState => ({
        ...prevState,
        isSliderVisible,
        isComponentFocused,
        [eventType]: true,
        blurOrInputCloseEvent: event
      }));
      if (props.onInputChange && !props.preventAutoCorrection && internalInputTextfieldValidation.invalidInput) {
        props.onInputChange(state.originalInputValue, event);
      }
    }
  };
  const handleOnBlur = event => {
    event.preventDefault();
    if (hostRef.current.contains(event.relatedTarget)) return;
    if (event.currentTarget.id === hostRef.current.id) {
      closeTextInputArea(event, "throwOnBlurEvent", false);
    }
  };
  const handleOnFocus = event => {
    event.preventDefault();
    if (hostRef.current.contains(event.target) && state.isComponentFocused) return;
    if (props.onFocus && event.currentTarget.id === hostRef.current.id) {
      setState(prevState => ({
        ...prevState,
        isComponentFocused: true
      }));
      props.onFocus(event);
    }
  };
  const handleInputOnFocus = (event, _name) => {
    handleOnFocus(event);
  };
  const handleInputOnClear = (_event, name) => {
    handleInputOnChange("", name);
  };
  const handleOnIconClick = (event, name) => {
    const inputTextName = name.substring(name.lastIndexOf("_") + 1);
    if (inputTextName === "openInput") {
      setState(prevState => ({
        ...prevState,
        isSliderVisible: false,
        iconLinkPressedOrClicked: true,
        originalInputValue: Array.isArray(props.value) ? [...props.value] : props.value,
        temporaryInputValue: Array.isArray(props.value) ? [...props.value] : props.value
      }));
      if (props.onInputOpen) {
        props.onInputOpen(event);
      }
    }
    if (["inputTextLower", "inputTextUpper"].includes(inputTextName)) {
      closeTextInputArea(event, "throwOnInputCloseEvent", true);
    }
  };
  const handleTextInputAreaKeydown = event => {
    if (event.key === Keys.Key.Escape) {
      if (props.onChange) {
        props.onChange(state.originalInputValue, props.name);
      }
      if (props.onInputChange) {
        props.onInputChange(state.originalInputValue, props.name);
      }
      setState(prevState => ({
        ...prevState,
        isSliderVisible: true,
        throwOnInputCloseEvent: true,
        blurOrInputCloseEvent: event
      }));
    }
    if (event.key === Keys.Key.Enter) {
      // do not call the close IconLink handler.
      event.preventDefault();
      closeTextInputArea(event, "throwOnInputCloseEvent", true);
    }
  };
  let value = props.value;
  if (props.onChange && state.temporaryInputValue !== undefined) {
    // deprecated onChange handler. The temporaryInputValue holds the value when the textfields are visible.
    if (!state.isSliderVisible) {
      value = state.temporaryInputValue;
    }
  }
  return /*#__PURE__*/React__default.createElement(TextSliderPresentation.TextSliderPresentation, {
    ...props,
    id: id,
    isMobile: state.isMobile,
    handleOnIconClick: handleOnIconClick,
    handleOnBlur: handleOnBlur,
    handleOnFocus: handleOnFocus,
    handleInputOnFocus: handleInputOnFocus,
    handleInputOnChange: handleInputOnChange,
    handleInputOnClear: handleInputOnClear,
    handleSliderOnChange: handleSliderOnChange,
    handleTextInputAreaKeydown: handleTextInputAreaKeydown,
    sliderVisible: state.isSliderVisible,
    hostRef: hostRef,
    inputTextLowerRef: inputTextLowerRef,
    inputTextUpperRef: inputTextUpperRef,
    openTextInputAreaButtonRef: openTextInputAreaButtonRef,
    value: value,
    invalidInput: props.invalidInput || internalInputTextfieldValidation.invalidInput,
    invalidInputField: props.invalidInputField || internalInputTextfieldValidation.invalidInputField
  });
};

exports.TextSliderWrapper = TextSliderWrapper;

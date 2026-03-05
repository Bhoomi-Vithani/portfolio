'use strict';

var React__default = require('react');
var Keys = require('../../utils/Keys.js');
var SliderPresentation = require('./SliderPresentation.js');

// @ts-strict-ignore
class SliderWrapper extends React__default.Component {
  constructor(props) {
    super(props);
    this.mousedownOffsetX = 0; // TODO to simplify the logic, we might consider removing this feature
    this.isMouseDrag = false;
    this.afterMouseDrag = false;
    this.hostRef = /*#__PURE__*/React__default.createRef();
    this.lowerSliderThumbRef = /*#__PURE__*/React__default.createRef();
    this.upperSliderThumbRef = /*#__PURE__*/React__default.createRef();
    this.sliderTrackContainerRef = /*#__PURE__*/React__default.createRef();
    // we have to bind the listeners to the context, else the variables will be unknown in the eventlistener
    // so we wrap them in an arrow function.
    this.eventListeners = {
      mousemove: event => this.onMouseMove(event),
      mouseup: event => this.onDocumentMouseUp(event),
      mouseleave: event => this.onDocumentMouseLeave(event),
      touchmove: event => this.onMouseMove(event),
      touchend: event => this.onDocumentMouseUp(event),
      touchcancel: event => this.onDocumentMouseUp(event)
    };
    this.getLowerValueProp = () => {
      if (this.props.look === "singleSlider") return this.props.value;
      if (this.props.look === "rangeSlider" && this.props.value[0] <= this.props.value[1]) return this.props.value[0];
      return this.props.minValue;
    };
    this.getUpperValueProp = () => {
      if (this.props.look === "rangeSlider" && this.props.value[1] >= this.props.value[0]) return this.props.value[1];
      return this.props.look === "singleSlider" ? undefined : this.props.maxValue;
    };
    this.registerMouseDownEventListeners = () => {
      Object.keys(this.eventListeners).forEach(key => {
        window.addEventListener(key, this.eventListeners[key], key === "touchmove" || key === "touchend" || key === "touchcancel" ? {
          passive: true
        } : undefined);
      });
    };
    this.deregisterMouseDownEventListeners = () => {
      Object.keys(this.eventListeners).forEach(key => {
        window.removeEventListener(key, this.eventListeners[key]);
      });
    };
    this.calculateValueToPercent = (value, minValue, maxValue) => (value - minValue) / (maxValue - minValue) * 100;
    this.calculatePercentToValue = (percentage, minValue, maxValue) => this.tidyDecimals(minValue + (maxValue - minValue) / 100 * percentage);
    this.tidyDecimals = value => Math.round(value * 100000) / 100000;
    this.getNearestStep = percentage => {
      // Input: Percentage (value / (maxValue-minValue) * 100)
      // Output: stepped Percentage
      const stepOnSliderInPercent = (this.props.step || this.props.precision) / (this.props.maxValue - this.props.minValue) * 100;
      let steppedValueInPercent = Math.round(percentage / stepOnSliderInPercent) * stepOnSliderInPercent;
      const lastSteppedValueInPercent = Math.floor(100 / stepOnSliderInPercent) * stepOnSliderInPercent;
      if (percentage > (100 + lastSteppedValueInPercent) / 2) {
        steppedValueInPercent = 100;
      }
      steppedValueInPercent = Math.min(steppedValueInPercent, 100);
      return steppedValueInPercent;
    };
    this.getPercentageByMousePosition = (e, slider) => {
      const mouseX = e.clientX || e.changedTouches[0].clientX;
      const sliderLeft = this.sliderTrackContainerRef.current.getBoundingClientRect().left;
      const sliderWidth = this.sliderTrackContainerRef.current.getBoundingClientRect().width;
      const thumbWidth = this.getThumbSliderWidth(slider);
      let percentage = (mouseX + thumbWidth / 2 - this.mousedownOffsetX - sliderLeft) / sliderWidth * 100;
      percentage = Math.min(Math.max(percentage, 0), 100);
      if (this.props.step || this.props.precision) {
        return this.getNearestStep(percentage);
      }
      return percentage;
    };
    this.getClosestSlider = currentPercentMousePosition => {
      if (currentPercentMousePosition <= this.lowerSliderThumbPercentage) {
        return "lower";
      }
      if (currentPercentMousePosition >= this.upperSliderThumbPercentage) {
        return "upper";
      }
      const distanceLowerToPosition = currentPercentMousePosition - this.lowerSliderThumbPercentage;
      const distanceLowerInPercent = distanceLowerToPosition * 100 / (this.upperSliderThumbPercentage - this.lowerSliderThumbPercentage);
      if (distanceLowerInPercent < 50) {
        return "lower";
      }
      return "upper";
    };
    this.getThumbSliderWidth = (slider, asPercent) => {
      const sliderWidth = slider === "lower" || slider === "none" ? this.lowerSliderThumbRef.current.getBoundingClientRect().width : this.upperSliderThumbRef.current.getBoundingClientRect().width;
      return asPercent ? sliderWidth * 100 / this.sliderTrackContainerRef.current.getBoundingClientRect().width : sliderWidth;
    };
    this.resetValueByMissingOnChange = () => {
      this.lowerSliderThumbPercentage = this.calculateValueToPercent(this.getLowerValueProp(), this.props.minValue, this.props.maxValue);
      this.upperSliderThumbPercentage = this.calculateValueToPercent(this.getUpperValueProp(), this.props.minValue, this.props.maxValue);
    };
    // Write values in state and public event functions
    this.setValue = (percentage, slider) => {
      const value = this.calculatePercentToValue(percentage, this.props.minValue, this.props.maxValue);
      if (this.props.look === "singleSlider") {
        this.lowerSliderThumbPercentage = percentage;
        if (this.props.onInput) {
          this.props.onInput(value, this.props.name);
        }
        if (this.props.onChange) {
          this.props.onChange(value, this.props.name);
        }
        return; // rangeSlider-mode treatment below
      }
      let lowerValue;
      let upperValue;
      if (slider === "lower") {
        this.lowerSliderThumbPercentage = percentage;
        lowerValue = value;
        upperValue = this.calculatePercentToValue(this.upperSliderThumbPercentage, this.props.minValue, this.props.maxValue);
      } else {
        this.upperSliderThumbPercentage = percentage;
        lowerValue = this.calculatePercentToValue(this.lowerSliderThumbPercentage, this.props.minValue, this.props.maxValue);
        upperValue = value;
      }
      if (this.props.onInput) {
        this.props.onInput([lowerValue, upperValue], this.props.name);
      }
      if (this.props.onChange) {
        this.props.onChange([lowerValue, upperValue], this.props.name);
      }
    };
    // Write values in state and public event function during tracking action
    this.setTemporaryValue = (percentage, slider) => {
      const value = this.calculatePercentToValue(percentage, this.props.minValue, this.props.maxValue);
      if (this.props.look === "singleSlider") {
        this.lowerSliderThumbPercentage = percentage;
        if (this.props.onInput) {
          this.props.onInput(value, this.props.name);
        }
        return; // rangeSlider-mode treatment below
      }
      let lowerValue;
      let upperValue;
      if (slider === "lower") {
        this.lowerSliderThumbPercentage = percentage;
        lowerValue = value;
        upperValue = this.calculatePercentToValue(this.upperSliderThumbPercentage, this.props.minValue, this.props.maxValue);
      } else {
        this.upperSliderThumbPercentage = percentage;
        lowerValue = this.calculatePercentToValue(this.lowerSliderThumbPercentage, this.props.minValue, this.props.maxValue);
        upperValue = value;
      }
      if (this.props.onInput) {
        this.props.onInput([lowerValue, upperValue], this.props.name);
      }
    };
    this.onMouseDown = event => {
      // Disabled then exit
      if (this.props.disabled) return;
      let focusOnSlider = "none";
      if (event.currentTarget.id) {
        const postfix = event.currentTarget.id.substr(event.currentTarget.id.lastIndexOf(SliderPresentation.extensionKnobIdLower.at(0)) + 1);
        focusOnSlider = postfix;
      }
      // we need to tell the difference between a short mouseclick or a long mousedown (which is probably a drag).
      // a short mouse click moves the center of the thumb in the mouse click point,
      // even when clicked on the thumb itself
      // a long click on the thumb does not move the thumb unless it is dragged
      // this.sliderThumbMouseClickStartInMilliseconds = new Date().getTime();
      const thumbWidth = this.getThumbSliderWidth(focusOnSlider);
      // TODO does not seem to work on click devices either.
      // if we have a touch device (no offsetX supported, let's take 0)
      this.mousedownOffsetX = event.offSetX || thumbWidth / 2;
      this.onDragStart();
      this.setState(() => ({
        activeSlider: focusOnSlider,
        keyboardFocus: "none"
      }));
    };
    this.onDragStart = () => {
      this.isMouseDrag = true;
    };
    this.onDocumentMouseUp = event => {
      // Disabled then exit
      if (this.props.disabled) return;
      // was it a mouseClick on the slider or a drag of the slider?
      // If it was a mouseclick, the slider should move to the click position, else to the dragged position.
      if (!this.isMouseDrag) return;
      let percentage = this.getPercentageByMousePosition(event, this.state.activeSlider);
      if (!this.props.onChange) {
        window.requestAnimationFrame(this.resetValueByMissingOnChange);
        this.isMouseDrag = false;
        return;
      }
      this.afterMouseDrag = true;
      if (this.props.look === "singleSlider") {
        this.setValue(percentage, this.state.activeSlider);
        this.isMouseDrag = false;
        return;
      }
      // Range slider treatment
      const definedStep = this.props.step || this.props.precision;
      const stepSliderInPercent = definedStep ? definedStep / (this.props.maxValue - this.props.minValue) * 100 : 1;
      percentage = this.getCalculatedRangeSliderPosition(percentage, this.state.activeSlider, stepSliderInPercent);
      this.setValue(percentage, this.state.activeSlider);
      this.isMouseDrag = false;
    };
    this.onDocumentMouseLeave = event => {
      if (this.isMouseDrag) {
        this.isMouseDrag = false;
      }
      this.setValue(this.getPercentageByMousePosition(event, this.state.activeSlider));
    };
    this.onMouseMove = event => {
      // do not call mousemove twice (touchmove + mousemove)
      // event.preventDefault();
      // In treatment of mouse-move-event the thumb position should be rerender on every new position by movement.
      // So rerender should be forced manually now, because there is no trigger anymore, i.e. change of prop or state.
      if (!this.isMouseDrag) return;
      let percentage = this.getPercentageByMousePosition(event, this.state.activeSlider);
      if (this.props.look === "singleSlider") {
        this.setTemporaryValue(percentage, this.state.activeSlider);
        this.forceUpdate(); // force rerender manually
        return;
      }
      // Range slider treatment
      const definedStep = this.props.step || this.props.precision;
      const stepSliderInPercent = definedStep ? definedStep / (this.props.maxValue - this.props.minValue) * 100 : 1;
      percentage = this.getCalculatedRangeSliderPosition(percentage, this.state.activeSlider, stepSliderInPercent);
      this.setTemporaryValue(percentage, this.state.activeSlider);
      this.forceUpdate(); // force rerender manually
    };
    this.onTrackClick = event => {
      // Disabled then exit
      if (this.props.disabled) return;
      if (this.afterMouseDrag) {
        this.afterMouseDrag = false;
        return;
      }
      const currentPercentagePosition = this.getPercentageByMousePosition(event, this.state.activeSlider);
      let chosenSlider;
      if (this.props.look === "rangeSlider") {
        chosenSlider = this.getClosestSlider(currentPercentagePosition);
      } else {
        chosenSlider = "lower";
      }
      if (!this.isMouseDrag) {
        this.setValue(currentPercentagePosition, chosenSlider);
      } else {
        this.isMouseDrag = false;
      }
      this.setState(() => ({
        activeSlider: chosenSlider,
        keyboardFocus: "none"
      }));
      if (!this.props.onChange) {
        window.requestAnimationFrame(this.resetValueByMissingOnChange);
      }
    };
    this.onFocus = (event, name) => {
      // Disabled then exit
      if (this.props.disabled) return;
      const postfix = event.target.id.substr(event.target.id.lastIndexOf(SliderPresentation.extensionKnobIdLower.at(0)) + 1);
      // code row below checks, whether postfix contains any hint of CurrentSlider-Enum
      if (postfix && !Object.values(["none", "lower", "upper"]).includes(postfix)) return;
      const focussed = postfix;
      this.setState(() => ({
        activeSlider: focussed,
        keyboardFocus: focussed
      }));
      if (this.props.onFocus) {
        this.props.onFocus(event, name);
      }
    };
    this.handleOnSliderBlur = event => {
      if (this.props.disabled) return;
      if (this.hostRef.current.contains(event.relatedTarget)) return;
      if (this.props.onBlur) {
        this.props.onBlur(event, this.props.name);
      }
      this.setState(() => ({
        activeSlider: "none",
        keyboardFocus: "none"
      }));
    };
    this.onHelperMinClick = () => {
      // Disabled then exit
      if (this.props.disabled) return;
      this.setValue(0, "lower"); // lower presents always the smallest value
    };
    this.onHelperMaxClick = () => {
      // Disabled then exit
      if (this.props.disabled) return;
      let slider;
      if (this.props.look === "rangeSlider") {
        slider = "upper";
      } else {
        slider = "lower";
      }
      this.setValue(100, slider);
    };
    this.handleNavKeyPressed = (newPercentage, oldPercentage, stepOnSliderInPercent, slider) => {
      if (this.tidyDecimals(newPercentage) === this.tidyDecimals(oldPercentage)) return;
      let percentage = newPercentage;
      if (!this.props.onChange) {
        window.requestAnimationFrame(this.resetValueByMissingOnChange);
      }
      if (this.props.look === "singleSlider") {
        percentage = Math.min(Math.max(percentage, 0), 100);
        this.setValue(percentage, slider);
        return;
      }
      // Range slider treatment
      percentage = this.getCalculatedRangeSliderPosition(percentage, slider, stepOnSliderInPercent);
      percentage = Math.min(Math.max(percentage, 0), 100);
      this.setValue(percentage, slider);
    };
    this.onKeyDown = ev => {
      // listen to all keys except Tab
      if (this.props.disabled || ev.key === Keys.Key.Tab) return;
      ev.preventDefault();
      if (this.state.activeSlider === "none") return;
      let percentage;
      const currentSliderValue = this.state.activeSlider === "lower" ? this.getLowerValueProp() : this.getUpperValueProp();
      const currentSliderPercentage = this.tidyDecimals(this.calculateValueToPercent(currentSliderValue, this.props.minValue, this.props.maxValue));
      const definedStep = this.props.step || this.props.precision;
      const stepOnSliderInPercent = definedStep ? definedStep / (this.props.maxValue - this.props.minValue) * 100 : 1;
      const keyFunctionCollection = {
        [Keys.Key.Home]: () => {
          percentage = 0;
          this.handleNavKeyPressed(percentage, currentSliderPercentage, stepOnSliderInPercent, this.state.activeSlider);
        },
        [Keys.Key.End]: () => {
          percentage = 100;
          this.handleNavKeyPressed(percentage, currentSliderPercentage, stepOnSliderInPercent, this.state.activeSlider);
        },
        [Keys.Key.ArrowLeft]: () => {
          if (!definedStep) {
            percentage = currentSliderPercentage - 1;
          } else {
            percentage = this.getNearestStep(currentSliderPercentage);
            if (this.tidyDecimals(currentSliderPercentage) === 100) {
              // edge case: It's possible that the last percentage before 100 !== percentage - stepOnSliderInPercent
              // so take care of that.
              percentage = Math.floor(100 / stepOnSliderInPercent * stepOnSliderInPercent);
              if (percentage === 100) {
                percentage -= stepOnSliderInPercent;
              }
            } else if (this.tidyDecimals(percentage) >= this.tidyDecimals(currentSliderPercentage)) {
              percentage -= stepOnSliderInPercent;
            }
          }
          percentage = Math.max(percentage, 0);
          this.handleNavKeyPressed(percentage, currentSliderPercentage, stepOnSliderInPercent, this.state.activeSlider);
        },
        [Keys.Key.ArrowRight]: () => {
          if (!definedStep) {
            percentage = currentSliderPercentage + 1;
          } else {
            percentage = this.getNearestStep(currentSliderPercentage);
            if (this.tidyDecimals(percentage) <= this.tidyDecimals(currentSliderPercentage)) {
              percentage += stepOnSliderInPercent;
            }
          }
          percentage = Math.min(percentage, 100);
          this.handleNavKeyPressed(percentage, currentSliderPercentage, stepOnSliderInPercent, this.state.activeSlider);
        }
      };
      keyFunctionCollection[Keys.Key.ArrowDown] = keyFunctionCollection[Keys.Key.ArrowLeft];
      keyFunctionCollection[Keys.Key.ArrowUp] = keyFunctionCollection[Keys.Key.ArrowRight];
      // Todo (fine tuning): For pageDown/pageUp the slider should move faster.
      keyFunctionCollection[Keys.Key.PageDown] = keyFunctionCollection[Keys.Key.ArrowLeft];
      keyFunctionCollection[Keys.Key.PageUp] = keyFunctionCollection[Keys.Key.ArrowRight];
      const keyFunction = keyFunctionCollection[ev.key];
      if (keyFunction) {
        keyFunction();
      }
    };
    this.state = {
      keyboardFocus: "none",
      activeSlider: "none",
      sliderMarkerTrackBaseColor: "white"
    };
    // Initial positioning of slider
    this.lowerSliderThumbPercentage = this.calculateValueToPercent(this.getLowerValueProp(), props.minValue, props.maxValue);
    this.upperSliderThumbPercentage = this.calculateValueToPercent(this.getUpperValueProp(), props.minValue, props.maxValue);
  }
  componentDidMount() {
    this.registerMouseDownEventListeners();
  }
  componentWillUnmount() {
    this.deregisterMouseDownEventListeners();
  }
  shouldComponentUpdate(nextProps) {
    const currentLower = this.getLowerValueProp();
    const currentUpper = this.getUpperValueProp();
    switch (this.props.look) {
      case "singleSlider":
        if (currentLower === nextProps.value) {
          break; // no change detect
        }
        this.lowerSliderThumbPercentage = this.calculateValueToPercent(nextProps.value, this.props.minValue, this.props.maxValue);
        break;
      case "rangeSlider":
        if (currentLower === nextProps.value[0] && currentUpper === nextProps.value[1]) {
          break; // no change detect
        }
        this.lowerSliderThumbPercentage = this.calculateValueToPercent(nextProps.value[0], this.props.minValue, this.props.maxValue);
        this.upperSliderThumbPercentage = this.calculateValueToPercent(nextProps.value[1], this.props.minValue, this.props.maxValue);
        break;
      default:
        return false;
    }
    return true;
  }
  getCalculatedRangeSliderPosition(newPosition, slider, stepSliderInPercent) {
    let percentage = newPosition;
    // The approximation of 2 sliders is managed via distanceFactor, greater value increase the distance between sliders.
    const distanceInPercent = this.getThumbSliderWidth(slider, true) * this.props.distanceFactor;
    // when stepOnSlider is too small (0.01) for distance, the thumb width calculation should used for approximation
    const approximation = stepSliderInPercent > 1 ? stepSliderInPercent : distanceInPercent;
    if (this.state.activeSlider === "lower") {
      // Step or precision movement
      if (this.props.step || this.props.precision) {
        // distance factor defined, slider positioned  before upper slider
        if (distanceInPercent > 0 && percentage > this.upperSliderThumbPercentage - approximation) {
          percentage = this.upperSliderThumbPercentage - approximation;
        }
        // no distance factor defined, slider overlapping upper slider
        if (distanceInPercent === 0 && percentage > this.upperSliderThumbPercentage) {
          percentage = this.upperSliderThumbPercentage;
        }
      }
      // Simple movement
      if (!(this.props.step || this.props.precision)) {
        // This move should be only done, if a stepper is defined, because this approximation is a coarse tuning
        percentage = percentage < this.upperSliderThumbPercentage - distanceInPercent ? percentage : this.upperSliderThumbPercentage - distanceInPercent;
      }
    }
    if (this.state.activeSlider === "upper") {
      // Step or precision movement without approximation
      if (this.props.step || this.props.precision) {
        // distance factor defined, slider positioned  before lower slider
        if (distanceInPercent > 0 && percentage < this.lowerSliderThumbPercentage + approximation) {
          percentage = this.lowerSliderThumbPercentage + approximation;
        }
        // no distance factor defined, slider overlapping lower slider
        if (distanceInPercent === 0 && percentage < this.lowerSliderThumbPercentage) {
          percentage = this.lowerSliderThumbPercentage;
        }
      }
      // Simple movement with approximation
      if (!(this.props.step || this.props.precision)) {
        // This move should be only done, if a stepper is defined, because this approximation is a coarse tuning
        percentage = percentage > this.lowerSliderThumbPercentage + distanceInPercent ? percentage : this.lowerSliderThumbPercentage + distanceInPercent;
      }
    }
    return percentage;
  }
  render() {
    return /*#__PURE__*/React__default.createElement(SliderPresentation.SliderPresentation, {
      ...this.props,
      activeSlider: this.state.activeSlider,
      keyboardFocus: this.state.keyboardFocus,
      sliderMarkerTrackBaseColor: this.state.sliderMarkerTrackBaseColor,
      lowerSliderThumbPercentage: this.lowerSliderThumbPercentage,
      upperSliderThumbPercentage: this.upperSliderThumbPercentage,
      onFocus: this.onFocus,
      onMouseDown: this.onMouseDown,
      hostRef: this.hostRef,
      lowerSliderThumbRef: this.lowerSliderThumbRef,
      upperSliderThumbRef: this.upperSliderThumbRef,
      sliderTrackContainerRef: this.sliderTrackContainerRef,
      onTrackClick: this.onTrackClick,
      onKeyDown: this.onKeyDown,
      onHelperMinClick: this.onHelperMinClick,
      onHelperMaxClick: this.onHelperMaxClick,
      handleOnSliderBlur: this.handleOnSliderBlur
    });
  }
}
SliderWrapper.defaultProps = {
  showLabel: true,
  look: "singleSlider",
  minValue: 0,
  distanceFactor: 0.0
};

exports.SliderWrapper = SliderWrapper;

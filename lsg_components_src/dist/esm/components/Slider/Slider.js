import * as React from 'react';
import { SliderWrapper } from '../_Slider/SliderWrapper.js';

/* eslint-disable react/require-default-props */
// Defines whether slider is a range slider, which has an effect in treatment of onchange, onInput as well as value. /
// rangeSlider?: boolean;
// The explicit range-slider prop is deactivated temporary to observe, whether there isn't really a need for this and give better handling.
const Slider = (props) => (React.createElement(SliderWrapper, { look: Array.isArray(props.value) ? "rangeSlider" : "singleSlider", ...props }));
Slider.displayName = "Slider";

export { Slider };

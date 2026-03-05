import * as React from 'react';
import { TextSliderWrapper } from './shared/TextSliderWrapper.js';

const TextSlider = ({ sliderStep, precision, ...props }) => (React.createElement(TextSliderWrapper, { look: Array.isArray(props.value) ? "rangeSlider" : "singleSlider", precision: sliderStep || precision, ...props }));
TextSlider.displayName = "TextSlider";

export { TextSlider };

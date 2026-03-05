import React__default from 'react';
import { TogglePresentation } from '../../_Toggle/TogglePresentation.js';
import { hostClass } from './Radio.styles.js';

const RadioPresentation = (props) => (React__default.createElement(TogglePresentation, { ...props, hostClass: hostClass, type: "radio" }));
RadioPresentation.displayName = "RadioPresentation";

export { RadioPresentation };

import React__default from 'react';
import { ButtonPresentation } from './shared/ButtonPresentation.js';

const Button = ({ color = "primary", refCallback, loadingText, ...props }) => (React__default.createElement(ButtonPresentation, { actionRef: refCallback, loadingAriaLabel: loadingText, color, ...props }));
Button.displayName = "Button";

export { Button };

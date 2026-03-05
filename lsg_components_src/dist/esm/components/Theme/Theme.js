import * as React from 'react';
import { ThemePresentation } from './shared/ThemePresentation.js';

/* eslint-disable react/require-default-props */
const Theme = ({ look, color, ...props }) => (React.createElement(ThemePresentation, { color: color || look || "dark", ...props }));
Theme.displayName = "Theme";

export { Theme };

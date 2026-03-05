import * as React from 'react';
import { FooterPresentation } from './shared/FooterPresentation.js';

const Footer = ({ previousTheme = "light", ...restProps }) => (React.createElement(FooterPresentation, { previousTheme: previousTheme, ...restProps }));
Footer.displayName = "Footer";

export { Footer };

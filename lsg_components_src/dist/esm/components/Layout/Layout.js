import * as React from 'react';
import { LayoutPresentation } from './shared/LayoutPresentation.js';

const Layout = ({ children, ...props }) => (React.createElement(LayoutPresentation, { ...props }, children));

export { Layout };

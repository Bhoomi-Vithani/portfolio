import * as React from 'react';
import { FootnoteProviderPresentation } from './shared/FootnoteProviderPresentation.js';

// @ts-strict-ignore
const FootnoteProvider = ({ children, ...props }) => (React.createElement(FootnoteProviderPresentation, { ...props }, children));
FootnoteProvider.displayName = "FootnoteProvider";

export { FootnoteProvider };

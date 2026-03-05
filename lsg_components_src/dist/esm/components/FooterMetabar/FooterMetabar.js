import * as React from 'react';
import { FooterMetabarPresentation } from './shared/FooterMetabarPresentation.js';

const FooterMetabar = ({ ...restProps }) => (React.createElement(FooterMetabarPresentation, { ...restProps }));
FooterMetabar.displayName = "FooterMetabar";

export { FooterMetabar };

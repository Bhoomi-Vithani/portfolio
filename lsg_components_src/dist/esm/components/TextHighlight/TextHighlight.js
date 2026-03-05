import * as React from 'react';
import { TextHighlightPresentation } from './shared/TextHighlightPresentation.js';

/* eslint-disable react/require-default-props */
function TextHighlight(props) {
    return React.createElement(TextHighlightPresentation, { ...props });
}
TextHighlight.displayName = "TextHighlight";

export { TextHighlight };

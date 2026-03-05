import React__default from 'react';
import { hostClass } from './DescriptionListItem.styles.js';

const DescriptionListItemPresentation = ({ term, children }) => (React__default.createElement(React__default.Fragment, null,
    React__default.createElement("dt", { className: `${hostClass}-dt` }, term),
    React__default.createElement("dd", { className: `${hostClass}-dd` }, children)));
DescriptionListItemPresentation.displayName = "DescriptionListItemPresentation";

export { DescriptionListItemPresentation };

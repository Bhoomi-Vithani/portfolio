import React__default from 'react';
import { DescriptionListItemPresentation } from '../DescriptionListItem/shared/DescriptionListItemPresentation.js';

const DescriptionListRow = ({ title, ...props }) => (
// TODO check if div inside dt or dd is allowed
React__default.createElement(DescriptionListItemPresentation, { ...props, term: title }));
DescriptionListRow.displayName = "DescriptionList.Row";

export { DescriptionListRow };

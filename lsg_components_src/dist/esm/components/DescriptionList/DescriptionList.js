import React__default from 'react';
import { DescriptionListRow } from './DescriptionListRow.js';
import { DescriptionListPresentation } from './shared/DescriptionListPresentation.js';

const DescriptionList = ({ titleWrap, ...props }) => (React__default.createElement(DescriptionListPresentation, { ...props, termWrap: titleWrap }));
DescriptionList.displayName = "DescriptionList";
DescriptionList.Row = DescriptionListRow;

export { DescriptionList };

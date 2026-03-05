import * as React from 'react';
import { ClickListItemWrapper } from '../ClickListItem/shared/ClickListItemWrapper.js';

// @ts-strict-ignore
const ClickListCheckboxesItem = (props) => (React.createElement(ClickListItemWrapper, { ...props, look: "checkbox" }));
ClickListCheckboxesItem.displayName = "ClickList.Checkboxes.Item";

export { ClickListCheckboxesItem };

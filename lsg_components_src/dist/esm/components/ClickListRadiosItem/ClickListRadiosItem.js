import * as React from 'react';
import { ClickListItemWrapper } from '../ClickListItem/shared/ClickListItemWrapper.js';

// @ts-strict-ignore
const ClickListRadiosItem = ({ showLinkLabel = true, ...props }) => (React.createElement(ClickListItemWrapper, { showLinkLabel, ...props, look: "radio" }));
ClickListRadiosItem.displayName = "ClickList.Radios.Item";

export { ClickListRadiosItem };

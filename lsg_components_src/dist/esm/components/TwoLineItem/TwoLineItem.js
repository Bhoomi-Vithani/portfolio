import * as React from 'react';
import { TwoLineItemPresentation } from './shared/TwoLineItemPresentation.js';

// TODO V20 - decide if labelAs default value should be removed
//  https://confluence.intranet.commerzbank.com/display/LSG/Release+20.0
const TwoLineItem = ({ badgeLook, badgeColor = "primary", badgeIconVariant = "solid", iconVariant = "outline", labelAs = "strong", sublineAs = "p", ...props }) => (React.createElement(TwoLineItemPresentation, { badgeColor: badgeLook || badgeColor, badgeIconVariant: badgeIconVariant, iconVariant: iconVariant, labelAs: labelAs, sublineAs: sublineAs, ...props }));
TwoLineItem.displayName = "TwoLineItem";

export { TwoLineItem };

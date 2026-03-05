import * as React from 'react';
import { ClickListItemWrapper } from './shared/ClickListItemWrapper.js';

const ClickListItem = ({ badgeColor, badgeLook, badgeIconVariant = "solid", showLinkLabel = true, linkIcon, headlineAs = linkIcon ? "strong" : "div", ...props }) => (React.createElement(ClickListItemWrapper, { badgeColor: badgeColor || badgeLook, badgeIconVariant: badgeIconVariant, showLinkLabel: showLinkLabel, linkIcon: linkIcon, headlineAs: headlineAs, ...props }));
ClickListItem.displayName = "ClickList.Item";

export { ClickListItem };

import * as React from 'react';
import { BadgePresentation } from '../Badge/shared/BadgePresentation.js';
import { IconLinkGroup } from '../IconLinkGroup/IconLinkGroup.js';
import { IconLinkWrapper } from './shared/IconLinkWrapper.js';

const IconLink = ({ color = "primary", iconVariant = "outline", refCallback, label, showBadge, badgeText, loadingText, ...props }) => (React.createElement(IconLinkWrapper, { ...props, color: color, iconVariant: iconVariant, actionRef: refCallback, label: label, badge: showBadge && React.createElement(BadgePresentation, null, badgeText), loadingAriaLabel: loadingText }));
IconLink.Group = IconLinkGroup;
IconLink.displayName = "IconLink";

export { IconLink };

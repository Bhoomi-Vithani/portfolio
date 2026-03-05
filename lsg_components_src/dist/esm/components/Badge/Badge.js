import * as React from 'react';
import { FootnoteAnchorPresentation } from '../FootnoteAnchor/shared/FootnoteAnchorPresentation.js';
import { IconPresentation } from '../Icon/shared/IconPresentation.js';
import { BadgePresentation } from './shared/BadgePresentation.js';

// TODO: V20 Think about simplifying this, and just provide the BadgePresentation interface
const Badge = ({ look, color, text, icon, iconLabel, size, footnoteIdentifier, footnoteIdItem, iconVariant = "solid", 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
children, ...props }) => (React.createElement(BadgePresentation, { color: color || look || "primary", size: size === "large" && icon ? "icon-large" : size, ...props },
    !icon && !(footnoteIdentifier && text === "large") && text,
    icon && (React.createElement(IconPresentation, { icon: icon, size: size === "large" ? "small" : "xsmall", variant: iconVariant, title: iconLabel })),
    footnoteIdentifier && (React.createElement(FootnoteAnchorPresentation, { identifier: footnoteIdentifier, idItem: footnoteIdItem, label: text }))));
Badge.displayName = "Badge";

export { Badge };

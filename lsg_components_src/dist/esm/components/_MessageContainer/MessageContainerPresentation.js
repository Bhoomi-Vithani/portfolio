import { interaction_arrows_chevronDown } from '@lsg/icons';
import React__default, { useState } from 'react';
import { AutoFocusInside } from 'react-focus-lock';
import { cleanupClassObject } from '../../utils/DomUtils.js';
import { ActionPresentation } from '../Action/shared/ActionPresentation.js';
import { BadgePresentation } from '../Badge/shared/BadgePresentation.js';
import { HeadlinePresentation } from '../Headline/shared/HeadlinePresentation.js';
import { IconPresentation } from '../Icon/shared/IconPresentation.js';
import { IconLinkGroupWrapper } from '../IconLinkGroup/shared/IconLinkGroupWrapper.js';
import { IllustrationPresentation } from '../_Illustration/IllustrationPresentation.js';
import { hostClass } from './MessageContainer.styles.js';

// @ts-strict-ignore
const MessageContainerPresentation = ({ headline, headlineId, headlineSize, headlineAs, overline, subline, sublineAs, badgeIcon, illustration, illustrationAltText, badgeText, showLargeIconBadge, badgeColor, content, contentId, children, isCollapsible, hostRef, detailsRef, badgeIconVariant, isOpen, handleClick, iconLinkGroupRef, className, contentRole, ariaLabel, contentRef, containerDisplay = "flex", }) => {
    // todo: @vh refactor this whole code block for message visual
    // check if more then one visual was defined
    const multipleVisuals = !!((badgeIcon !== undefined && illustration !== undefined) ||
        (badgeIcon !== undefined && badgeText !== undefined) ||
        (illustration !== undefined && badgeText !== undefined));
    // TODO: move to wrapper
    const [hasKeyboardFocus, setHasKeyboardFocus] = useState(false);
    // check if no visual was set
    const noVisual = badgeIcon === undefined && illustration === undefined;
    // set visual
    const visual = multipleVisuals ? (React__default.createElement("code", null, "Warning: Multiple visuals defined")) : (React__default.createElement(React__default.Fragment, null,
        badgeIcon && (React__default.createElement(BadgePresentation, { color: badgeColor || "supplementary", size: showLargeIconBadge ? "icon-large" : "default" },
            React__default.createElement(IconPresentation, { icon: badgeIcon, size: showLargeIconBadge ? "small" : "xsmall", variant: badgeIconVariant || "solid", title: "" // will also set aria-hidden="true"
             }))),
        illustration && (React__default.createElement(IllustrationPresentation, { src: illustration, alt: illustrationAltText, size: "small", noMargin: true, ariaHidden: !illustrationAltText }))));
    const AutoFocusText = contentRole === "dialog" ? AutoFocusInside : "div";
    return !isCollapsible ? (React__default.createElement("div", { className: cleanupClassObject({
            [`${hostClass}`]: true,
            [`${hostClass}_flex`]: containerDisplay === "flex",
            [`${hostClass}__large-icon-badge`]: showLargeIconBadge,
            [`${hostClass}__illustration`]: illustration,
            [className]: true,
        }), ref: hostRef },
        illustration !== undefined && (
        // Place illustration outside the main div to enable vertical layout in mobile
        React__default.createElement("div", { className: cleanupClassObject({
                [`${hostClass}-visual`]: true,
            }) },
            React__default.createElement("div", { className: `${hostClass}-visual-illustration-wrapper` }, visual))),
        React__default.createElement("div", { className: cleanupClassObject({
                [`${hostClass}-main`]: true,
                [`${hostClass}-main_flex`]: containerDisplay === "flex",
            }), role: contentRole === "dialog" ? contentRole : undefined, "aria-label": ariaLabel },
            badgeIcon !== undefined && (React__default.createElement("div", { className: cleanupClassObject({
                    [`${hostClass}-visual`]: true,
                }) }, visual)),
            React__default.createElement(AutoFocusText, null,
                React__default.createElement("div", { className: `${hostClass}-content`, id: contentId, ref: contentRef, tabIndex: -1, 
                    // Set role to inner element so that changes are announced
                    role: contentRole !== "dialog" ? contentRole : undefined, "aria-live": contentRole === "status" ? "polite" : undefined },
                    headline && (React__default.createElement(HeadlinePresentation, { id: headlineId, className: `${hostClass}-headline`, size: headlineSize, as: headlineAs, overline: overline, subline: subline, sublineAs: sublineAs, noMargin: true, badgeText: !multipleVisuals && badgeText, badgeColor: badgeColor }, headline)),
                    content))),
        children && (
        // todo: should IconLinkGroup be part of the component or a child? (see ClickList component)
        React__default.createElement("div", { className: `${hostClass}-actions`, ref: iconLinkGroupRef },
            React__default.createElement(IconLinkGroupWrapper, { direction: "horizontal", horizontalAlignment: "right", noMargin: true }, children))))) : (React__default.createElement("details", { className: cleanupClassObject({
            [`${hostClass}`]: true,
            [`${hostClass}__collapsible`]: true,
            [`${hostClass}__text-badge`]: badgeText,
            [`${hostClass}__icon-badge`]: badgeIcon && !showLargeIconBadge,
            [`${hostClass}__large-icon-badge`]: showLargeIconBadge,
            [`${hostClass}__illustration`]: illustration,
            [className]: true,
        }), ref: detailsRef, open: isOpen },
        React__default.createElement(ActionPresentation, { actionAs: "summary", actionProps: { type: undefined }, onClick: handleClick, hasKeyboardFocus: hasKeyboardFocus, onKeyboardFocusChange: setHasKeyboardFocus, "aria-label": ariaLabel, "aria-labelledby": !ariaLabel && headline ? headlineId : undefined, "aria-describedby": contentId },
            React__default.createElement("div", { className: `${hostClass}-collapsible-header`, role: contentRole, "aria-live": contentRole === "status" ? "polite" : undefined, ref: contentRef, tabIndex: -1 },
                !noVisual && (React__default.createElement("div", { className: cleanupClassObject({
                        [`${hostClass}-visual`]: true,
                        [`${hostClass}-visual__text-badge`]: badgeText,
                        [`${hostClass}-visual__large-icon-badge`]: showLargeIconBadge,
                        [`${hostClass}-visual__illustration`]: illustration,
                    }) }, visual)),
                headline && (React__default.createElement("div", { className: `${hostClass}-headline-container` },
                    React__default.createElement(HeadlinePresentation, { className: `${hostClass}-headline`, size: "h5", as: headlineAs, overline: overline, subline: subline, noMargin: true, badgeText: badgeText, badgeColor: badgeColor }, headline))),
                React__default.createElement(IconPresentation, { className: `${hostClass}-collapsible-header-chevron`, icon: interaction_arrows_chevronDown, size: "small", noMargin: true }))),
        React__default.createElement("div", { className: `${hostClass}-collapsible-content` },
            React__default.createElement("div", { className: cleanupClassObject({
                    [`${hostClass}-content`]: true,
                    [`${hostClass}-spacing__icon-badge`]: badgeIcon,
                    [`${hostClass}-spacing__large-icon-badge`]: showLargeIconBadge,
                    [`${hostClass}-spacing__illustration`]: illustration,
                }), id: contentId }, content),
            children && (
            // todo: should IconLinkGroup be part of the component or a child (analogue Cards)
            React__default.createElement("div", { className: `${hostClass}-actions`, ref: iconLinkGroupRef },
                React__default.createElement(IconLinkGroupWrapper, { horizontalAlignment: "right", direction: "horizontal", noMargin: true }, children))))));
};
MessageContainerPresentation.displayName = "MessageContainerPresentation";

export { MessageContainerPresentation };

import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { BadgePresentation } from '../../Badge/shared/BadgePresentation.js';
import { IconPresentation } from '../../Icon/shared/IconPresentation.js';
import { IconLinkGroupWrapper } from '../../IconLinkGroup/shared/IconLinkGroupWrapper.js';
import { hostClass } from './Headline.styles.js';

const HeadlinePresentation = ({ as, children, className, id: idProp, noMargin, overline, overlineAs, subline, sublineAs, balanced, lineLength, size = "h1", centeredLayout, horizontalAlignment, htmlAttrs, actions, manualHyphenation, badgeText, badgeIcon, badgeIconVariant, badgeColor = "primary", badgePosition = "overline", }) => {
    const HeadlineComponent = as || size;
    const OverlineComponent = overlineAs || "span";
    const SublineComponent = sublineAs || "p";
    const id = useUniqueId(`${hostClass}-`, idProp);
    const align = centeredLayout ? "center" : horizontalAlignment;
    const overlineBadge = badgePosition === "overline" && ((badgeText && badgeText.trim() !== "") || badgeIcon);
    const sublineBadge = badgePosition === "subline" && ((badgeText && badgeText.trim() !== "") || badgeIcon);
    const overlineRequired = overline || overlineBadge;
    const sublineRequired = subline || sublineBadge;
    // eslint-disable-next-line no-nested-ternary
    const isBalanced = balanced === true ? "balanced" : balanced === false ? "unbalanced" : undefined;
    const overlineSize = {
        h1: "xlarge",
        h2: "large",
        h3: "medium",
        h4: "small",
        h5: "small",
        h6: "small",
    }[size] || "small";
    // Convert headline sizes of Overline and Headline to integer to be able to compare them.
    // The goal is to know if overline or headline should render first for seo & a11y reasons.
    // Returns 1-6 for h1-h6 or 10 for "span", "div", "p" and undefined.
    const headlineAsInt = ["span", "div", "p", undefined].includes(as) ? 10 : parseInt(as?.replace(/\D/g, ""), 10);
    const overlineAsInt = ["span", "div", "p", undefined].includes(overlineAs)
        ? 10
        : parseInt(overlineAs?.replace(/\D/g, ""), 10);
    // overlineFirst means, the overline is the sibling before the headline, not the first child (part) of the headline.
    // If the overline has a smaller number than the headline, the overline gets a part of the headline.
    const overlineFirst = as ? overlineAsInt <= headlineAsInt : overlineAsInt <= parseInt(size?.replace(/\D/g, ""), 10);
    const overlineComponent = (
    // @ts-ignore
    React__default.createElement(OverlineComponent, { className: cleanupClassObject({
            [`${lsgPre}overline`]: true,
            [`${lsgPre}overline-${overlineSize}`]: true,
            [`${lsgPre}overline__hyphens-manual`]: manualHyphenation,
            [`${lsgPre}overline-container`]: true,
            [`${lsgPre}overline-container__align-${align}`]: align,
            [`${lsgPre}headline__line-length__${lineLength}`]: lineLength,
        }) },
        React__default.createElement("span", null, overline),
        overlineBadge && (React__default.createElement(BadgePresentation, { color: badgeColor, size: "default", margin: overline && align !== "center" ? "left" : undefined, inline: true }, badgeText ||
            (badgeIcon && (React__default.createElement(IconPresentation, { icon: badgeIcon, size: "xsmall", noMargin: true, variant: badgeIconVariant })))))));
    const headlineGroup = (React__default.createElement(React__default.Fragment, null,
        overlineFirst && overlineComponent,
        React__default.createElement(HeadlineComponent, { className: cleanupClassObject({
                [`${lsgPre}${size}`]: true,
                [className]: !!className,
                [`${lsgPre}no-margin`]: noMargin,
                [`${lsgPre}headline__align-${align}`]: align,
                [`${lsgPre}headline__${isBalanced}`]: isBalanced,
                [`${lsgPre}headline__line-length__${lineLength}`]: lineLength,
                [`${lsgPre}headline__hyphens-manual`]: manualHyphenation,
            }), id: id, ...htmlAttrs },
            overlineRequired && !overlineFirst && (React__default.createElement(React__default.Fragment, null,
                overlineComponent,
                React__default.createElement("span", { className: `${lsgPre}overline-comma` }, ", "))),
            children),
        sublineRequired && (
        // @ts-ignore
        React__default.createElement(SublineComponent, { className: cleanupClassObject({
                [`${lsgPre}subline`]: true,
                [`${lsgPre}subline__hyphens-manual`]: manualHyphenation,
                [`${lsgPre}subline-container`]: true,
                [`${lsgPre}subline-container__align-${align}`]: align,
                [`${lsgPre}headline__line-length__${lineLength}`]: lineLength,
            }) },
            React__default.createElement("span", null, subline),
            sublineBadge && (React__default.createElement(BadgePresentation, { color: badgeColor, size: "default", margin: subline && align !== "center" ? "left" : undefined, inline: true }, badgeText ||
                (badgeIcon && (React__default.createElement(IconPresentation, { icon: badgeIcon, size: "xsmall", noMargin: true, variant: badgeIconVariant })))))))));
    return (React__default.createElement(React__default.Fragment, null,
        actions && (React__default.createElement("div", { className: cleanupClassObject({
                [`${lsgPre}headline-action-group`]: true,
                [`${lsgPre}${size}-action-group`]: true,
                [`${lsgPre}headline-overline-action-group`]: overline,
            }) },
            React__default.createElement("div", { className: cleanupClassObject({
                    [`${lsgPre}action-group-headline-area`]: true,
                }) }, headlineGroup),
            React__default.createElement("div", { className: cleanupClassObject({
                    [`${lsgPre}action-group-action-area`]: true,
                }) },
                React__default.createElement(IconLinkGroupWrapper, { direction: "horizontal", className: cleanupClassObject({
                        [`${lsgPre}no-margin`]: true,
                        [`${lsgPre}headline__actions`]: true,
                    }) }, actions)))),
        !actions && headlineGroup));
};
HeadlinePresentation.displayName = "HeadlinePresentation";

export { HeadlinePresentation };

import React__default from 'react';
import { lsgPre } from '../../config/prefix.js';
import { cleanupClassObject } from '../../utils/DomUtils.js';
import { getThemeClass } from '../Theme/shared/ThemePresentation.js';
import { IndicatorWrapper } from '../_Indicator/shared/IndicatorWrapper.js';
import { mainClass } from './HeaderContainer.styles.js';

// @ts-strict-ignore
const Nav = props => {
    const Element = props.label ? "nav" : "div";
    const { label, children, elRef, ...otherProps } = props;
    return (React__default.createElement(Element, { ...(label && { "aria-label": label }), ref: elRef, ...otherProps }, children));
};
const HeaderContainerPresentation = ({ noMargin, className, logo, topLeft, topRight, topRightAriaLabel, bottomLeft, bottomLeftAriaLabel, bottomRight, bottomRightAriaLabel, activeElement, isMobile, isFullUnderline, hasOpenFlyout, progress, width = "page", topLeftMaxWidth, position, isHidden, scrollPosition, theme, onClick, segmentLabel, mainContainerRightTopRef, mainContainerRightBottomRef, noSemanticElements, }) => {
    const height = (isMobile && 16) || (!bottomLeft && !bottomRight && 22) || 32;
    const Header = noSemanticElements ? "div" : "header";
    return (React__default.createElement(React__default.Fragment, null,
        position === "fixed" && (React__default.createElement("div", { className: cleanupClassObject({
                [`${mainClass}__sticky-${height}`]: true,
            }) })),
        React__default.createElement(Header, { className: cleanupClassObject({
                [className]: !!className,
                [mainClass]: true,
                [`${mainClass}__double-line`]: bottomLeft || bottomRight,
                [`${mainClass}__mobile`]: isMobile,
                [`${mainClass}__${width}`]: true,
                [`${mainClass}__height-${height}`]: true,
                [`${mainClass}__sticky-${position}`]: position,
                // TODO: Check if obsolete when `position: sticky`
                [`${mainClass}__hide`]: isHidden,
                [`${mainClass}__flyout`]: hasOpenFlyout,
                [`${lsgPre}no-margin`]: noMargin,
                [`${mainClass}__bg`]: !theme,
                [getThemeClass(theme, "header")]: theme,
            }), style: { top: scrollPosition ? -scrollPosition : undefined }, onClick: onClick, ...(!noSemanticElements && { role: "banner" }) },
            React__default.createElement("div", { className: cleanupClassObject({
                    [`${mainClass}-wrapper`]: true,
                    [`${mainClass}-wrapper__flyout`]: hasOpenFlyout,
                }) },
                logo && (React__default.createElement("div", { className: `${mainClass}-logo`, style: !isMobile
                        ? {
                            transform: `translateY(${(scrollPosition * 5) / 8}px) scale(${1.0 - scrollPosition / 130})`,
                        }
                        : {} }, logo)),
                React__default.createElement("div", { className: `${mainClass}-main` },
                    React__default.createElement("div", { className: `${mainClass}-row` },
                        React__default.createElement("div", { className: `${mainClass}-group ${mainClass}-group-left`, style: topLeftMaxWidth && { maxWidth: topLeftMaxWidth } },
                            !isMobile && segmentLabel && (React__default.createElement("p", { className: `${mainClass}-segment-label` }, segmentLabel)),
                            topLeft),
                        React__default.createElement(Nav, { className: `${mainClass}-group ${mainClass}-group-right`, elRef: mainContainerRightTopRef, label: topRightAriaLabel }, topRight)),
                    (bottomLeft || bottomRight) && (React__default.createElement("div", { className: cleanupClassObject({
                            [`${mainClass}-row`]: true,
                            [`${mainClass}-row__logo`]: true,
                        }) },
                        React__default.createElement(Nav, { className: `${mainClass}-group ${mainClass}-group-left`, label: bottomLeftAriaLabel }, bottomLeft),
                        React__default.createElement(Nav, { className: `${mainClass}-group ${mainClass}-group-right`, elRef: mainContainerRightBottomRef, label: bottomRightAriaLabel }, bottomRight))))),
            (activeElement || isFullUnderline || progress !== undefined) && (React__default.createElement(IndicatorWrapper, { activeElement: activeElement, isFullUnderline: isFullUnderline, progress: progress })))));
};
HeaderContainerPresentation.displayName = "HeaderContainerPresentation";

export { HeaderContainerPresentation };

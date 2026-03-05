import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { fragmentMap } from '../../../utils/ReactUtils.js';
import { getGridColumnClasses } from '../../GridColumn/shared/GridColumnPresentation.js';
import { IconLinkGroupWrapper } from '../../IconLinkGroup/shared/IconLinkGroupWrapper.js';
import { SpinnerPresentation } from '../../Spinner/shared/SpinnerPresentation.js';
import { getThemeChildrenClass } from '../../Theme/shared/ThemePresentation.js';
import { hostClass } from './CardsCustomItem.styles.js';
import { CardsMenu } from './CardsMenu.js';

// @ts-strict-ignore
const CardsCustomItemPresentation = ({ id, as = "li", children, className, noMargin, contentBottom, contentTop, pictureBottom, pictureTop, itemsPerRow, hasMouseHover, hasKeyboardFocus, isActive, centeredLayout, spacing, menuNavigationTree, onMenuMouseHoverChange, onMenuKeyboardFocusChange, onOpenChange, menuOpen, hasMenuMouseHover, hasMenuKeyboardFocus, disabled, loading, loadingText, appearance = "default", gridColumnSize, height, verticalAlign, spinnerSize, divider, }) => {
    const addDivider = (content) => {
        switch (divider) {
            case "top":
                return contentTop && content === children;
            case "bottom":
                return content === contentBottom;
            case "both":
                if (!contentTop || !contentBottom || !children)
                    return false;
                return content === contentBottom || content === children;
            default:
                return false;
        }
    };
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${hostClass}__shadow`]: !disabled && !loading && appearance === "default",
            [`${hostClass}__${appearance}`]: appearance,
            [`${hostClass}__hover`]: hasMouseHover,
            [`${hostClass}__focus`]: hasKeyboardFocus,
            [`${hostClass}__disabled`]: disabled,
            [`${hostClass}__loading`]: loading,
            [`${hostClass}__active`]: isActive,
            [`${hostClass}__active-dwindle`]: isActive && appearance !== "placeholder",
            [`${hostClass}__${spacing}`]: spacing,
            [`${hostClass}__menu-open`]: menuOpen,
            [`${lsgPre}no-margin`]: noMargin,
            [`${hostClass}__centered`]: verticalAlign === "center",
            [getGridColumnClasses({ size: gridColumnSize || (12 / itemsPerRow), sm: 4, xs: 4 })]: true,
            [getThemeChildrenClass("elevated")]: true,
        }), as: as, style: { minHeight: `${height}px` }, "data-lsg-component": "cards-item" },
        React__default.createElement(SpinnerPresentation, { variant: "indeterminate", expandToOverlay: loading, loading: loading, ariaLabel: loadingText, size: spinnerSize }),
        React__default.createElement("div", { className: `${hostClass}-inner` },
            React__default.createElement("div", { className: cleanupClassObject({
                    [`${hostClass}-inner-inner`]: true,
                }) },
                pictureTop && React__default.createElement("div", { className: `${hostClass}__picture-top` }, pictureTop),
                React__default.createElement("div", { className: `${hostClass}-content` },
                    [contentTop, children, contentBottom].map((content, i) => content && (React__default.createElement("div", { className: cleanupClassObject({
                            [`${hostClass}-content-block`]: true,
                            [`${hostClass}-content-block-children`]: i === 1 && children && divider,
                        }), key: i },
                        addDivider(content) && React__default.createElement("hr", { className: `${hostClass}-divider` }),
                        centeredLayout
                            ? fragmentMap(content, (child) => React__default.cloneElement(child, { horizontalAlignment: "center" }))
                            : content))),
                    " "),
                pictureBottom && React__default.createElement("div", { className: `${hostClass}__picture-top` }, pictureBottom))),
        menuNavigationTree && (React__default.createElement("div", { className: `${hostClass}-menu` },
            React__default.createElement(IconLinkGroupWrapper, { noMargin: true },
                React__default.createElement(CardsMenu, { disabled: disabled || loading, navigationTree: menuNavigationTree, onMouseHoverChange: onMenuMouseHoverChange, onKeyboardFocusChange: onMenuKeyboardFocusChange, hasMouseHover: hasMenuMouseHover, hasKeyboardFocus: hasMenuKeyboardFocus, setOpen: onOpenChange, menuOpen: menuOpen }))))));
};
CardsCustomItemPresentation.displayName = "CardsCustomItemPresentation";

export { CardsCustomItemPresentation };

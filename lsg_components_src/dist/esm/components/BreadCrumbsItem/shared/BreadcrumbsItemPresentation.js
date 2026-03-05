import { interaction_arrows_chevronRight } from '@lsg/icons';
import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { ActionPresentation } from '../../Action/shared/ActionPresentation.js';
import { IconPresentation } from '../../Icon/shared/IconPresentation.js';
import { hostClass } from './BreadcrumbsItem.styles.js';

// @ts-strict-ignore
const BreadcrumbsItemPresentation = ({ children, className, noMargin, disabled, actionRef, hasMouseHover, hasKeyboardFocus, htmlAttrs: htmlAttrsProp, ...otherProps }) => {
    const htmlAttrs = { ...htmlAttrsProp, "data-lsg-component": "breadcrumbs-item" };
    return (React__default.createElement(Host, { as: "li", className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
        }) },
        React__default.createElement(IconPresentation, { className: `${hostClass}-icon`, noMargin: true, icon: interaction_arrows_chevronRight, svgAttrs: { "aria-hidden": true } }),
        React__default.createElement(ActionPresentation, { disabled: disabled, ref: actionRef, hasKeyboardFocus: hasKeyboardFocus, htmlAttrs: htmlAttrs, ...otherProps },
            React__default.createElement("div", { className: cleanupClassObject({
                    [`${hostClass}-action`]: true,
                    [`${hostClass}-action__disabled`]: disabled,
                    [`${hostClass}-action__hover`]: hasMouseHover,
                }) }, children))));
};
BreadcrumbsItemPresentation.displayName = "BreadcrumbsItemPresentation";

export { BreadcrumbsItemPresentation };

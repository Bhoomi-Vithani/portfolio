import { interaction_arrows_arrowRight } from '@lsg/icons';
import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useDwindle, useUniqueId, useViewportRange } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { ActionPresentation } from '../../Action/shared/ActionPresentation.js';
import { IconPresentation } from '../../Icon/shared/IconPresentation.js';
import { DwindlePresentation } from '../../_Dwindle/DwindlePresentation.js';
import { hostClass } from './Button.styles.js';

// @ts-strict-ignore
// Hack: svg of the Icon is brought to the DOM for every render. This is the case after a mousedown but before a click
// event. As a consequence, the click with the old svg DOM node is not triggered. The memo hook prevents the re-render
// by making the function pure
const Icon = React__default.memo(IconPresentation);
const ButtonPresentation = (props) => {
    const { label, className, children, look, color = "primary", loading, loadingAriaLabel, disabled, noMargin, actionRef = () => {
        /* empty */
    }, containerRef, horizontalAlignment, reducedWidthMobile, icon = interaction_arrows_arrowRight, iconName, iconAppearance = "right", iconVariant, htmlAttrs: htmlAttrsProp = {}, onClick = () => {
        /* empty */
    }, as, id: idProp, ...otherProps } = props;
    const [{ hasKeyboardFocus, hasMouseHover, clicked }, { setHasKeyboardFocus, setHasMouseHover }, { onMouseDown, onMouseUp, onMouseLeave, onKeyDown, onKeyUp },] = useDwindle(props);
    const id = useUniqueId(`${hostClass}-`, idProp);
    const iconId = `${id}-icon`;
    const isMobile = useViewportRange(undefined, "xs");
    const labelText = label || children;
    // For smart automation and web tracking purposes, we add data attributes to the HTML element
    const htmlAttrs = {
        ...htmlAttrsProp,
        "data-lsg-color": look || color,
        "data-lsg-component": "button",
    };
    return (React__default.createElement(Host, { className: cleanupClassObject({
            [hostClass]: true,
            [className]: className,
            [`${lsgPre}no-margin`]: noMargin,
            [`${lsgPre}margin-align-${horizontalAlignment}`]: horizontalAlignment,
            [`${hostClass}__reduced-width-mobile`]: reducedWidthMobile,
        }), ref: containerRef, as: as, id: `${id}-base` },
        React__default.createElement(ActionPresentation, { id: id, disabled: disabled, loading: loading, loadingAriaLabel: loadingAriaLabel, ref: actionRef, fullWidth: isMobile, htmlAttrs: htmlAttrs, onKeyboardFocusChange: setHasKeyboardFocus, onMouseHoverChange: setHasMouseHover, onMouseDown, onMouseUp, onMouseLeave, onKeyDown, onKeyUp, onClick, ...otherProps },
            React__default.createElement(DwindlePresentation, { color: look || color, disabled: disabled, hover: hasMouseHover, clicked: clicked, shape: "circle-button", focus: hasKeyboardFocus },
                React__default.createElement("div", { className: cleanupClassObject({
                        [`${hostClass}-inner`]: true,
                        [`${hostClass}-inner-icon__${iconAppearance}`]: iconAppearance && icon,
                    }) },
                    !loading && icon && (React__default.createElement(Icon, { id: iconId, noMargin: true, icon: icon, name: iconName, variant: iconVariant, title: "", svgAttrs: { "aria-hidden": true }, color: disabled ? "disabled" : "default" })),
                    React__default.createElement("div", { id: `${id}-label`, className: cleanupClassObject({
                            [`${hostClass}-label__notext`]: iconAppearance === "no-text",
                        }), "aria-describedby": loading ? `${id}-loading-text` : undefined, "data-lsg-subcomponent": "label" }, labelText))))));
};
ButtonPresentation.displayName = "ButtonPresentation";

export { ButtonPresentation };

import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useDwindle, useUniqueId } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { ActionPresentation } from '../../Action/shared/ActionPresentation.js';
import { IconPresentation } from '../../Icon/shared/IconPresentation.js';
import { DwindlePresentation } from '../../_Dwindle/DwindlePresentation.js';
import { hostClass } from './CircleIconLink.styles.js';

// Hack: svg of the Icon is brought to the DOM for every render. This is the case after a mousedown but before a click
// event. As a consequence, the click with the old svg DOM node is not triggered. The memo hook prevents the re-render
// by making the function pure
const Icon = React__default.memo(IconPresentation);
const CircleIconLinkPresentation = (props) => {
    const { label, className, color = "primary", helper, iconName, icon, iconVariant, disabled = false, loading, onClick = () => {
        /* empty */
    }, htmlAttrs: htmlAttrsProp = {}, noMargin, actionRef = () => {
        /* empty */
    }, centeredLayout = false, horizontalAlignment, id: idProp, as, ...otherProps } = props;
    const [{ hasKeyboardFocus, hasMouseHover, clicked }, { setHasKeyboardFocus, setHasMouseHover }, { onMouseDown, onMouseUp, onMouseLeave, onKeyDown, onKeyUp },] = useDwindle(props);
    const align = centeredLayout ? "center" : horizontalAlignment;
    const id = useUniqueId(`${hostClass}-`, idProp);
    const iconId = `${id}-icon`;
    // For smart automation and web tracking purposes, we add data attributes to the HTML element
    const htmlAttrs = {
        ...htmlAttrsProp,
        "data-lsg-color": color,
        "data-lsg-component": "circle-icon-link",
    };
    return (React__default.createElement(Host, { className: cleanupClassObject({
            [className]: className,
            [hostClass]: true,
            [`${hostClass}__align-${align}`]: align,
            [`${lsgPre}no-margin`]: noMargin,
            [`${lsgPre}text-align-${align}`]: horizontalAlignment,
            [`${hostClass}__disabled`]: disabled,
        }), as: as, id: `${id}-base` },
        React__default.createElement(ActionPresentation, { id: id, disabled: disabled, loading: loading, ref: actionRef, htmlAttrs: htmlAttrs, hasKeyboardFocus: hasKeyboardFocus, onKeyboardFocusChange: setHasKeyboardFocus, onMouseHoverChange: setHasMouseHover, onClick, onMouseDown, onMouseUp, onMouseLeave, onKeyDown: onKeyDown, onKeyUp: onKeyUp, ...otherProps },
            React__default.createElement("div", { className: `${hostClass}-wrapper-container` },
                React__default.createElement("div", { className: `${hostClass}-icon-container` },
                    React__default.createElement(DwindlePresentation, { className: cleanupClassObject({
                            [`${hostClass}__hidden`]: loading,
                        }), color: color, disabled: disabled, shape: "circle", hover: hasMouseHover, clicked: clicked },
                        React__default.createElement(Icon, { id: iconId, name: iconName, icon: icon, color: "inherit", variant: iconVariant, size: "small", "aria-hidden": true, title: htmlAttrs?.title || "" }))),
                React__default.createElement("div", { className: cleanupClassObject({
                        [`${hostClass}-text-container`]: true,
                        [`${hostClass}-no-helper`]: !helper,
                    }) },
                    React__default.createElement("div", { className: `${hostClass}-label-text`, id: `${id}-label`, "data-lsg-subcomponent": "header-label" }, label),
                    helper && (React__default.createElement("div", { className: `${hostClass}-helper-text`, id: `${id}-helper-text`, "data-lsg-subcomponent": "helpertext-label" }, helper)))))));
};
CircleIconLinkPresentation.displayName = "CircleIconLinkPresentation";

export { CircleIconLinkPresentation };

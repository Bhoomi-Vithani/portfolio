import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useDwindle, useUniqueId } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { ActionPresentation } from '../../Action/shared/ActionPresentation.js';
import { IconPresentation } from '../../Icon/shared/IconPresentation.js';
import { DwindlePresentation } from '../../_Dwindle/DwindlePresentation.js';
import { hostClass } from './ActionButton.styles.js';

// Hack: svg of the Icon is brought to the DOM for every render. This is the case after a mousedown but before a click
// event. As a consequence, the click with the old svg DOM node is not triggered. The memo hook prevents the re-render
// by making the function pure
const Icon = React__default.memo(IconPresentation);
const ActionButtonPresentation = (props) => {
    const { className, label, appearance, icon, iconName, iconVariant, color = "primary", disabled = false, noMargin, actionRef = () => {
        /* empty */
    }, floating, loading, loadingAriaLabel, isStencilHost, horizontalAlignment, as, htmlAttrs: htmlAttrsProp = {}, id: idProp, onClick = () => {
        /* empty */
    }, ...otherProps } = props;
    const [{ hasKeyboardFocus, hasMouseHover, clicked }, { setHasKeyboardFocus, setHasMouseHover }, { onMouseDown, onMouseUp, onMouseLeave, onKeyDown, onKeyUp },] = useDwindle(props);
    const id = useUniqueId(`${hostClass}-`, idProp);
    const iconId = `${id}-icon`;
    // For smart automation and web tracking purposes, we add data attributes to the HTML element
    const htmlAttrs = {
        ...htmlAttrsProp,
        "data-lsg-color": color,
        "data-lsg-floating": !!floating,
        "data-lsg-component": "action-button",
    };
    return (React__default.createElement(Host, { isStencilHost: isStencilHost, className: cleanupClassObject({
            [hostClass]: true,
            [className]: className,
            [`${lsgPre}no-margin`]: noMargin,
            [`${hostClass}__floating`]: floating,
            [`${lsgPre}margin-align-${horizontalAlignment}`]: horizontalAlignment,
        }), as: as, id: `${id}-base` },
        React__default.createElement(ActionPresentation, { id: id, disabled: disabled, loading: loading, loadingAriaLabel: loadingAriaLabel, ref: actionRef, hasKeyboardFocus: hasKeyboardFocus, onKeyboardFocusChange: setHasKeyboardFocus, onMouseHoverChange: setHasMouseHover, onMouseDown: onMouseDown, onMouseUp: onMouseUp, onMouseLeave: onMouseLeave, onKeyDown: onKeyDown, onKeyUp: onKeyUp, onClick: onClick, htmlAttrs: htmlAttrs, ...otherProps },
            React__default.createElement("div", { className: cleanupClassObject({
                    [`${hostClass}-wrapper-inner`]: true,
                    [`${hostClass}-wrapper-inner__disabled`]: disabled,
                    [`${hostClass}__no-text`]: appearance === "no-text",
                }) },
                React__default.createElement("div", { className: `${hostClass}-dwindle-wrapper` },
                    React__default.createElement(DwindlePresentation, { className: cleanupClassObject({
                            [`${hostClass}__hidden`]: loading,
                        }), color: color, disabled: disabled, shape: "circle", floating: floating, hover: hasMouseHover, clicked: clicked },
                        React__default.createElement(Icon, { id: iconId, noMargin: true, icon: icon, name: iconName, color: "inherit", variant: iconVariant, size: "small", "aria-hidden": true, title: "" }))),
                React__default.createElement("div", { className: `${hostClass}-label`, id: `${id}-label`, "data-lsg-subcomponent": "label" }, label)))));
};
ActionButtonPresentation.displayName = "ActionButtonPresentation";

export { ActionButtonPresentation };

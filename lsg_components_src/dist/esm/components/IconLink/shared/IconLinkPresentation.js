import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { fRef } from '../../../utils/React.js';
import { ActionPresentation } from '../../Action/shared/ActionPresentation.js';
import { IconPresentation } from '../../Icon/shared/IconPresentation.js';
import { hostClass } from './IconLink.styles.js';

// Hack to get rid of forwardRefs
const Div = fRef(({ ref, ...props }) => React__default.createElement("div", { ...props, ref: ref }));
const IconLinkPresentation = ({ label, iconName, icon, look: lookProp, hoverAnimation: directionProp, loading, loadingAriaLabel, iconColor: iconColorProp, iconVariant, iconOnHover, color, inactive, transform, disabled, actionRef, innerRef, hasKeyboardFocus, hasMouseHover, svgAttrs, className, htmlAttrs: htmlAttrsProp = {}, textEllipsis, clicked, // Todo: ClickAnimation not implemented! Styling on click="hover", see Neugelb definition.
badge, containerRef, inline, nonInteractive, horizontalAlignment, size, as, appearance, role, selected, id: idProp, ...otherProps }) => {
    const id = useUniqueId(`${hostClass}-`, idProp);
    const iconId = `${id}-icon`;
    const iconColor = iconColorProp || (disabled && "disabled") || (color === "secondary" && "tertiary") || "default";
    const textColor = (disabled && "disabled") || (inactive && "inactive") || color || "primary";
    const look = appearance || lookProp || (iconName || icon ? "left" : "no-icon");
    const direction = "hover".concat(directionProp ? `-${directionProp}` : "");
    // For smart automation and web tracking purposes, we add data attributes to the HTML element
    const htmlAttrs = {
        ...htmlAttrsProp,
        "data-lsg-color": color,
        "data-lsg-component": "icon-link",
    };
    return (React__default.createElement(Host, { id: `${id}-base`, className: cleanupClassObject({
            [hostClass]: true,
            [className]: !!className,
            [`${hostClass}__size-${size}`]: size,
            [`${hostClass}__text-ellipsis`]: textEllipsis,
            [`${hostClass}__inline`]: inline,
            [`${hostClass}__inline__with-label`]: inline && label,
            [`${lsgPre}text-align-${horizontalAlignment}`]: horizontalAlignment,
            [`${lsgPre}margin-align-${horizontalAlignment}`]: horizontalAlignment,
        }), ref: containerRef, as: as || (inline && "span") || "div" },
        React__default.createElement(ActionPresentation, { htmlAttrs: htmlAttrs, disabled: disabled, loading: loading, loadingAriaLabel: loadingAriaLabel, nonInteractive: nonInteractive, role: role, selected: selected, ref: actionRef, id: id, ...otherProps },
            React__default.createElement(Div, { className: cleanupClassObject({
                    [`${hostClass}__${look}`]: true,
                    [`${hostClass}__${textColor}`]: true,
                    [`${hostClass}-wrapper`]: true,
                    [`${hostClass}__${direction}`]: !disabled && !nonInteractive && (hasMouseHover || clicked),
                    [`${hostClass}__focus`]: !disabled && hasKeyboardFocus,
                    [`${hostClass}__hidden`]: loading,
                }), ref: innerRef },
                look !== "no-icon" && (React__default.createElement(IconPresentation, { className: `${hostClass}-icon`, svgAttrs: svgAttrs, id: iconId, noMargin: true, name: iconName, icon: (!disabled && (hasMouseHover || hasKeyboardFocus)) || !iconOnHover
                        ? icon
                        : (() => "<svg />"), hover: !disabled && hasMouseHover, color: iconColor, variant: iconVariant, size: size === "legacy" ? "legacy-reduced" : size || "small", "aria-hidden": true, 
                    // A11y-Decision: Never set a htmlAttrs.title
                    // TODO: redundant aria-hidden. There should be one recommended way.
                    title: "", transform: transform, badge: badge })),
                React__default.createElement("span", { className: `${hostClass}-label`, "data-lsg-subcomponent": "label", id: `${id}-label` }, label)))));
};
IconLinkPresentation.displayName = "IconLinkPresentation";

export { IconLinkPresentation };

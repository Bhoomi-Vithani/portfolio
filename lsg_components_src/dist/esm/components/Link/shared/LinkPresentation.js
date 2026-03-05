import React__default from 'react';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { ActionPresentation } from '../../Action/shared/ActionPresentation.js';
import { hostClass } from './Link.styles.js';

// @ts-strict-ignore
const LinkPresentation = ({ look, disabled, loading, actionRef, hasKeyboardFocus, hasMouseHover, className, clicked, // Todo: ClickAnimation not implemented! Styling on click="hover", see Neugelb definition.
nonInteractive, label, htmlAttrs: htmlAttrsProp = {}, id: idProp, loadingAriaLabel, href, ...otherProps }) => {
    const id = useUniqueId(`${hostClass}-`, idProp);
    // For smart automation and web tracking purposes, we add data attributes to the HTML element
    const htmlAttrs = {
        title: htmlAttrsProp?.title,
        ...htmlAttrsProp,
        "data-look": look,
        "data-non-interactive": nonInteractive ? "true" : "false",
        "data-disabled": disabled ? "true" : "false",
        "data-lsg-component": "link",
    };
    return (React__default.createElement(Host, { className: cleanupClassObject({
            [className]: className,
            [hostClass]: true,
            [`${hostClass}__hover`]: !disabled && (hasMouseHover || clicked),
            [`${hostClass}__${look}`]: look,
            [`${hostClass}__nonInteractive`]: nonInteractive,
            [`${hostClass}__disabled`]: disabled,
        }), as: "span", id: `${id}-base` },
        React__default.createElement(ActionPresentation, { id: id, disabled: disabled, loading: loading, ref: actionRef, loadingAriaLabel: loadingAriaLabel, isDisplayInline: true, nonInteractive: nonInteractive, hasKeyboardFocus: hasKeyboardFocus, htmlAttrs: htmlAttrs, href: href, role: !href ? "button" : undefined, actionAs: !href ? "div" : undefined, ...otherProps },
            React__default.createElement("span", { id: `${id}-label`, "data-lsg-subcomponent": "label" }, label))));
};
LinkPresentation.displayName = "LinkPresentation";

export { LinkPresentation };

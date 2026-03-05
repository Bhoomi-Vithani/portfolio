import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { ActionPresentation } from '../../Action/shared/ActionPresentation.js';
import { IconPresentation } from '../../Icon/shared/IconPresentation.js';
import { hostClass } from './FormLink.styles.js';

// @ts-strict-ignore
const FormLinkPresentation = ({ id: idProp, className, noMargin, isStencilHost, icon, label, text, href, htmlAttrs: htmlAttrsProp, ...otherProps }) => {
    const [hasFocus, setHasFocus] = React__default.useState(false);
    const id = useUniqueId(`${hostClass}-`, idProp);
    const htmlAttrs = { ...htmlAttrsProp, "data-lsg-component": "form-link" };
    return (React__default.createElement(Host, { id: `${id}-base`, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
        }), isStencilHost: isStencilHost },
        React__default.createElement(ActionPresentation, { ...otherProps, id: id, htmlAttrs: htmlAttrs, href: href, onKeyboardFocusChange: newFocus => setHasFocus(newFocus), hasKeyboardFocus: hasFocus },
            React__default.createElement("div", { className: `${hostClass}-label` }, label),
            React__default.createElement("div", { className: `${hostClass}-link` },
                React__default.createElement(IconPresentation, { className: `${hostClass}icon`, noMargin: true, icon: icon, hover: false, color: "default", size: "small", "aria-hidden": true, title: "" }),
                React__default.createElement("span", { className: `${hostClass}-text` }, text)))));
};
FormLinkPresentation.displayName = "FormLinkPresentation";

export { FormLinkPresentation };

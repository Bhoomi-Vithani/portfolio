import React__default, { forwardRef } from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { ActionPresentation } from '../../Action/shared/ActionPresentation.js';
import { MenulikeItemPresentation } from '../../_MenulikeItem/MenulikeItemPresentation.js';
import { hostClass } from './ActionFlyoutItem.styles.js';

// @ts-strict-ignore
const ActionFlyoutItemPresentation = forwardRef((props, actionRef) => {
    const { id, children, className, noMargin, 
    // actionRef,
    onKeyboardFocusChange, onKeyDown, disabled, href, hasKeyboardFocus, name, htmlAttrs: htmlAttrsProp = {}, hasTabIndex = false, ...otherProps } = props;
    const [hasMouseHover, setHasMouseHover] = React__default.useState(false);
    const htmlAttrs = { role: "menuitem", ...htmlAttrsProp, "data-lsg-component": "action-flyout-item" };
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
        }), as: "li", htmlAttrs: htmlAttrs },
        React__default.createElement(ActionPresentation, { id: `${id}-button`, ref: actionRef, onMouseHoverChange: setHasMouseHover, onKeyboardFocusChange: onKeyboardFocusChange, onKeyDown: onKeyDown, hasTabIndex: hasTabIndex, disabled: disabled, href: disabled ? undefined : href, name: name, fullWidth: true, htmlAttrs: htmlAttrs, ...otherProps },
            React__default.createElement(MenulikeItemPresentation, { hasTabIndex: false, label: "", hasMouseHover, hasKeyboardFocus, disabled }, children))));
});
ActionFlyoutItemPresentation.displayName = "ActionFlyoutItemPresentation";

export { ActionFlyoutItemPresentation };

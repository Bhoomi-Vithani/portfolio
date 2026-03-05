import React__default from 'react';
import { cleanupClassObject } from '../../utils/DomUtils.js';
import { Host } from '../../utils/Host.js';
import { fRef } from '../../utils/React.js';
import { ActionPresentation } from '../Action/shared/ActionPresentation.js';
import { hostClass } from './NavigationItem.styles.js';

// @ts-strict-ignore
// Hack to get rid of forwardRefs
const Div = fRef(({ ref, ...props }) => React__default.createElement("div", { ...props, ref: ref }));
const NavigationItemPresentation = ({ className, children, actionRef, hasMouseHover, hasKeyboardFocus, disabled, href, level, secondary, innerRef, ...otherProps }) => {
    const textColor = (disabled && "disabled") || (secondary && "secondary") || "primary";
    return (React__default.createElement(Host, { className: cleanupClassObject({
            [hostClass]: true,
            [className]: !!className,
        }) },
        React__default.createElement(ActionPresentation, { ref: actionRef, disabled: disabled, href: disabled ? undefined : href, hasKeyboardFocus: hasKeyboardFocus, ...otherProps },
            React__default.createElement(Div, { className: cleanupClassObject({
                    [`${hostClass}-inner`]: true,
                    [`${hostClass}__hover`]: !disabled && hasMouseHover,
                    [`${hostClass}__${textColor}`]: true,
                    [`${hostClass}__${level}`]: level,
                }), ref: innerRef }, children))));
};
NavigationItemPresentation.displayName = "NavigationItemPresentation";

export { NavigationItemPresentation };

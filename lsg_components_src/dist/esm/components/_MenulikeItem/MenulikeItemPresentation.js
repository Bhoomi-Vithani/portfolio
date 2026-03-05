import React__default from 'react';
import { cleanupClassObject } from '../../utils/DomUtils.js';
import { fRef } from '../../utils/React.js';
import { mainClass } from './MenulikeItem.styles.js';

const MenulikeItemPresentation = fRef(({ role, hasTabIndex = true, hasMouseHover, hasKeyboardFocus, ariaSelected, disabled, id: idProp, onClick, onMouseOver, ref, children, as, optionValue, }) => {
    const Component = as || "div";
    const id = idProp?.replace(/\s+/g, "-");
    return (
    /* key-events are handled by SelectWrapper */
    /* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
    React__default.createElement(Component, { id: id, className: cleanupClassObject({
            [`${mainClass}`]: true,
            [`${mainClass}__selected`]: ariaSelected,
            [`${mainClass}__hover`]: hasMouseHover && !disabled,
            [`${mainClass}__focus`]: hasKeyboardFocus,
            [`${mainClass}__disabled`]: disabled,
        }), onClick: !disabled && onClick ? onClick : () => { }, onMouseMove: onMouseOver, ref: ref, 
        /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */
        tabIndex: hasTabIndex && !disabled ? 0 : -1, role: role, "aria-selected": ariaSelected, "aria-disabled": disabled, "data-value": `${optionValue}` }, children));
});
MenulikeItemPresentation.displayName = "MenulikeItemPresentation";

export { MenulikeItemPresentation };

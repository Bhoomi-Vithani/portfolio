import React__default, { forwardRef, useMemo } from 'react';
import { cleanupClassObject } from '../../utils/DomUtils.js';
import { useUniqueId, useDwindle } from '../../utils/Hooks/index.js';
import { A11yMeaningfulLabel } from '../A11yMeaningfulLabel/A11yMeaningfulLabel.js';
import { A11yMeaningfulLabelContext } from '../A11yMeaningfulLabel/shared/A11yMeaningfulLabelContext.js';
import { BadgePresentation } from '../Badge/shared/BadgePresentation.js';
import { IconPresentation } from '../Icon/shared/IconPresentation.js';
import { ChipsItemContainer } from '../_ChipsItemContainer/ChipsItemContainer.js';
import { hostClass } from '../_ChipsItemContainer/ChipsItemContainer.styles.js';

// @ts-strict-ignore
const ChipsToggleItemPresentation = forwardRef((props, ref) => {
    const { id: idProp, onChange, name, noMargin, label, icon, iconVariant, appearance, value, type, htmlAttrs: htmlAttrsProp, as, badgeText, } = props;
    const id = useUniqueId(`${hostClass}-`, idProp);
    const [{ hasKeyboardFocus, hasMouseHover, clicked }, { setHasKeyboardFocus, setHasMouseHover }, { onMouseDown, onMouseUp, onMouseLeave, onKeyDown, onKeyUp },] = useDwindle(props);
    const actionValue = useMemo(() => ({
        onMouseHoverChange: setHasMouseHover,
        onKeyboardFocusChange: setHasKeyboardFocus,
        onMouseUp,
        onMouseDown,
        onMouseLeave,
        onKeyDown,
        onKeyUp,
        disabled: false,
        loading: false,
        isActive: clicked,
        hasMouseHover,
        hasKeyboardFocus,
        type: "label",
        htmlFor: id,
    }), [
        setHasMouseHover,
        setHasKeyboardFocus,
        onMouseUp,
        onMouseDown,
        onMouseLeave,
        onKeyDown,
        onKeyUp,
        clicked,
        hasMouseHover,
        hasKeyboardFocus,
        id,
    ]);
    const htmlAttrs = { ...htmlAttrsProp, "data-lsg-component": "chips-toggle-item" };
    return (React__default.createElement(A11yMeaningfulLabelContext.Provider, { value: actionValue }, React__default.createElement(ChipsItemContainer, { as: as, noMargin: noMargin, hasKeyboardFocus: hasKeyboardFocus, hasMouseHover: hasMouseHover, isSelected: value, appearance: appearance, id: `${id}-base` },
        appearance !== "right" && icon && (React__default.createElement(IconPresentation, { icon: icon, size: "small", noMargin: true, variant: iconVariant, hover: hasMouseHover, color: value === true ? "default" : "tertiary", title: "" // will also set aria-hidden="true"
         })),
        React__default.createElement(A11yMeaningfulLabel, null,
            React__default.createElement("input", { id: id, className: cleanupClassObject({
                    [`${hostClass}-input`]: true,
                }), type: type || "checkbox", checked: value, 
                // aria-checked={value} // Not necessary https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked
                onChange: e => {
                    e.stopPropagation();
                    onChange(e.target.checked, name, e);
                }, ref: ref, ...htmlAttrs }),
            React__default.createElement("span", { id: `${id}-label`, className: appearance === "no-text" ? `${hostClass}__no-text` : undefined }, label),
            badgeText && (React__default.createElement(BadgePresentation, { id: `${id}-badge`, className: cleanupClassObject({
                    [`${hostClass}-badge__margin-left`]: icon || label,
                }), color: "supplementary", inline: true }, badgeText))),
        appearance === "right" && icon && (React__default.createElement(IconPresentation, { color: value === true ? "default" : "tertiary", icon: icon, size: "small", noMargin: true, variant: iconVariant, hover: hasMouseHover, title: "" // will also set aria-hidden="true"
         })))));
});

export { ChipsToggleItemPresentation };

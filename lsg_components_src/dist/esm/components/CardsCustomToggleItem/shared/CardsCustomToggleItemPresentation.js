import React__default from 'react';
import { CardsCustomItemPresentation } from '../../CardsCustomItem/shared/CardsCustomItemPresentation.js';
import { CheckboxPresentation } from '../../Checkbox/shared/CheckboxPresentation.js';
import { RadioPresentation } from '../../Radio/shared/RadioPresentation.js';
import { SwitchPresentation } from '../../Switch/shared/SwitchPresentation.js';

// @ts-strict-ignore
const CardsCustomToggleItemPresentation = ({ id, contentTop, type = "checkbox", value, disabled, invalid, name, onChange, title, inputHtmlAttrs, onMouseHoverChange, onKeyboardFocusChange, hasKeyboardFocus, hasMouseHover, onMenuMouseHoverChange, onMenuKeyboardFocusChange, hasMenuMouseHover, hasMenuKeyboardFocus, ...props }) => {
    const ToggleComponent = {
        checkbox: CheckboxPresentation,
        radio: RadioPresentation,
        switch: SwitchPresentation,
    }[type];
    return (React__default.createElement(CardsCustomItemPresentation, { ...props, disabled: disabled, hasKeyboardFocus: hasKeyboardFocus, hasMouseHover: hasMouseHover || hasMenuMouseHover || hasMenuKeyboardFocus, onMenuMouseHoverChange: onMenuMouseHoverChange, onMenuKeyboardFocusChange: onMenuKeyboardFocusChange, hasMenuMouseHover: hasMenuMouseHover, hasMenuKeyboardFocus: hasMenuKeyboardFocus, as: "div", contentTop: React__default.createElement(React__default.Fragment, null,
            React__default.createElement(ToggleComponent, { id: id, onMouseHoverChange: onMouseHoverChange, onKeyboardFocusChange: onKeyboardFocusChange, hasMouseHover: hasMouseHover, 
                // The Card should receive the focus-ring not the input element
                hasKeyboardFocus: false, disabled: disabled, value: value, invalid: invalid, name: name, onChange: onChange, title: title, htmlAttrs: inputHtmlAttrs, 
                // If this is missing, the area next to the input is not clickable.
                className: "lsgs--cards-toggle" }),
            contentTop) }));
};
CardsCustomToggleItemPresentation.displayName = "CardsCustomToggleItemPresentation";

export { CardsCustomToggleItemPresentation };

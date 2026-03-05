import React__default, { useState } from 'react';
import { CheckboxPresentation } from './CheckboxPresentation.js';

const CheckboxWrapper = (props) => {
    const [hasMouseHover, setHasMouseOver] = useState(false);
    const [hasKeyboardFocus, setHasKeyboardFocus] = useState(false);
    return (React__default.createElement(CheckboxPresentation, { ...props, hasKeyboardFocus: hasKeyboardFocus, onKeyboardFocusChange: setHasKeyboardFocus, hasMouseHover: props.hasMouseHover || hasMouseHover, onMouseHoverChange: props.onMouseHoverChange || (newHoverState => setHasMouseOver(newHoverState)) }));
};

export { CheckboxWrapper };

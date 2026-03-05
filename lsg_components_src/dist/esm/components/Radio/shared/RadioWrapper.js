import React__default from 'react';
import { RadioPresentation } from './RadioPresentation.js';

const RadioWrapper = (props) => {
    const [hasKeyboardFocus, setHasKeyboardFocus] = React__default.useState(false);
    const [hasMouseHover, setHasMouseHover] = React__default.useState(false);
    return (React__default.createElement(RadioPresentation, { ...props, hasKeyboardFocus: hasKeyboardFocus, onKeyboardFocusChange: newFocus => setHasKeyboardFocus(newFocus), hasMouseHover: props.hasMouseHover || hasMouseHover, onMouseHoverChange: props.onMouseHoverChange || (newHover => setHasMouseHover(newHover)) }));
};

export { RadioWrapper };

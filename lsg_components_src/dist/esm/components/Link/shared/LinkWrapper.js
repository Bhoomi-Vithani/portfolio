import React__default from 'react';
import { useLinkHover } from '../../../utils/Hooks/index.js';
import { LinkPresentation } from './LinkPresentation.js';

const LinkWrapper = (props) => {
    const [{ hasKeyboardFocus, hasMouseHover }, { setHasKeyboardFocus, setHasMouseHover }, { onMouseDown, onMouseUp, onMouseLeave },] = useLinkHover(props);
    return (React__default.createElement(LinkPresentation, { ...props, hasKeyboardFocus: hasKeyboardFocus, onKeyboardFocusChange: setHasKeyboardFocus, hasMouseHover: hasMouseHover, onMouseHoverChange: setHasMouseHover, onMouseDown: onMouseDown, onMouseUp: onMouseUp, onMouseLeave: onMouseLeave, label: props.label }, props.children));
};

export { LinkWrapper };

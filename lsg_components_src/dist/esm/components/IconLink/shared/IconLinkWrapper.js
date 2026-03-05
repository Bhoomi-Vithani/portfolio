import React__default, { useEffect } from 'react';
import { isSafari } from '../../../utils/DomUtils.js';
import { useLinkHover } from '../../../utils/Hooks/index.js';
import { IconLinkPresentation } from './IconLinkPresentation.js';

const IconLinkWrapper = (props) => {
    const [{ hasKeyboardFocus, hasMouseHover }, { setHasKeyboardFocus, setHasMouseHover }, { onMouseDown, onMouseUp, onMouseLeave }, { onTouchStart, onTouchEnd },] = useLinkHover(props);
    const [renderCount, setRenderCount] = React__default.useState(0);
    useEffect(() => {
        // Safari-specific issue: Forcing a re-render to correct link layout.
        // Without this, the IconLink layout breaks (sometimes) on the initial render, causing all letters to be
        // displayed stacked on top of each other.
        // So on Safari: the IconLink is initially rendered in the DOM (important for SSR), it is not rendered on the
        // second iteration and then rendered again.
        if (isSafari() && renderCount < 2) {
            setRenderCount(renderCount + 1);
        }
    });
    return (React__default.createElement(IconLinkPresentation, { ...props, key: isSafari() ? renderCount : undefined, hasKeyboardFocus: hasKeyboardFocus, onKeyboardFocusChange: setHasKeyboardFocus, hasMouseHover: hasMouseHover, onMouseHoverChange: newHover => {
            if (props.onMouseHoverChange) {
                props.onMouseHoverChange(newHover);
            }
            setHasMouseHover(newHover);
        }, onMouseDown: onMouseDown, onMouseUp: onMouseUp, onMouseLeave: onMouseLeave, onTouchStart: onTouchStart, onTouchEnd: onTouchEnd }));
};

export { IconLinkWrapper };

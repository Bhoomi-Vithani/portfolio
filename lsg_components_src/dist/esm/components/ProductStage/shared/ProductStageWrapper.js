import React__default from 'react';
import { addScrollCallback, removeScrollCallback } from '../../../utils/windowEvents/ScrollEvents.js';
import { ProductStagePresentation } from './ProductStagePresentation.js';

// @ts-strict-ignore
const ProductStageWrapper = (props) => {
    const buttonRef = React__default.useRef(null);
    const [isSticky, setIsSticky] = React__default.useState(undefined);
    const doHandleScroll = () => {
        const nonStickyButtonBounds = buttonRef.current?.getBoundingClientRect();
        // check if position of button (including 16px margin) is in viewport
        if ((nonStickyButtonBounds?.bottom ?? 0) + 16 <= window.innerHeight) {
            // Element is in the viewport
            setIsSticky(false);
        }
        else {
            // Element is not in the viewport
            setIsSticky(true);
        }
    };
    React__default.useEffect(() => {
        addScrollCallback(doHandleScroll);
        return () => {
            removeScrollCallback(doHandleScroll);
        };
    }, []);
    return React__default.createElement(ProductStagePresentation, { ...props, buttonSticky: isSticky, buttonRef: buttonRef });
};

export { ProductStageWrapper };

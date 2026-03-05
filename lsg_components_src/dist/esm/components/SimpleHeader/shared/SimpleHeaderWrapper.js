import React__default, { useRef, useState, useReducer, useEffect } from 'react';
import { useViewportRange } from '../../../utils/Hooks/index.js';
import { SimpleHeaderPresentation } from './SimpleHeaderPresentation.js';

// @ts-strict-ignore
const SimpleHeaderWrapper = (props) => {
    const { value } = props;
    // navigational elements
    const activeElement = useRef(undefined);
    const mobileOpenMenuButton = useRef(undefined);
    const [open, setOpen] = useState(false);
    const [forceMobile, setForceMobile] = useState(false);
    // https://stackoverflow.com/questions/46240647/how-to-force-a-functional-react-component-to-render/53837442#53837442
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const isMobileViewport = useViewportRange(undefined, "md");
    const isMobile = forceMobile || isMobileViewport;
    const [iconLinkPressedOrClicked, setIconLinkPressedOrClicked] = useState(false);
    // triggered by pressing Enter or clicking on X Icon in opened mobile side menu, necessary for focus outline placement back on Burger Menu Icon in case of Key use
    const handleOnIconClick = () => {
        setIconLinkPressedOrClicked(true);
    };
    /** Place Focus on mobile Menu button, after mobile menu has been closed */
    useEffect(() => {
        if (!open && isMobile && iconLinkPressedOrClicked) {
            mobileOpenMenuButton.current?.focus();
        }
    }, [open, iconLinkPressedOrClicked]);
    /** Trigger a 2nd render to update value indicator (the line below the menu items) */
    useEffect(() => {
        // and also close mobile menu
        setOpen(false);
        forceUpdate();
    }, [value]);
    /** Also trigger a 2nd render to update value indicator when we change from mobile/desktop */
    useEffect(() => {
        forceUpdate();
    }, [isMobile]);
    return (React__default.createElement(SimpleHeaderPresentation, { ...props, activeElement: activeElement.current, activeRef: activeElement, isMobile: forceMobile || isMobile, mobileOpenMenuButtonRef: mobileOpenMenuButton, open: open, onOpenChange: newOpen => setOpen(newOpen), onForceMobileChange: forceMobileValue => setForceMobile(forceMobileValue), handleOnIconClick: handleOnIconClick }));
};

export { SimpleHeaderWrapper };

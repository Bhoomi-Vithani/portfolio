import React__default, { useRef, useState, useEffect } from 'react';
import { addResizeCallback, removeResizeCallback } from '../../../utils/windowEvents/ResizeEvents.js';
import { TabBarPresentation } from './TabBarPresentation.js';

// @ts-strict-ignore
const TabBarWrapper = (props) => {
    const { onChange = () => { }, centeredLayout, value } = props;
    // Initialize refs and states
    const innerElement = useRef(null);
    const activeElement = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [offsetLeft, setOffsetLeft] = useState(0);
    const [, setCounter] = useState(1);
    const [mouseDownXPos, setMouseDownXPos] = useState(0);
    const [initialOffset, setInitialOffsetLeft] = useState(0);
    const getMaxScrollSpace = () => {
        if (innerElement.current) {
            const innerWrapperWidth = innerElement.current?.getBoundingClientRect().width;
            const parentElementWidth = innerElement.current?.parentElement?.getBoundingClientRect().width;
            return Math.max(innerWrapperWidth - parentElementWidth + 14, 0);
        }
        return 0;
    };
    const onResize = () => {
        setIsDragging(false);
        setMouseDownXPos(0);
        setOffsetLeft(0);
    };
    const onMouseUp = () => {
        // known issue: on non-touch viewport, if you drag and release the mouse, the click on the link is fired.
        // this is not desired.
        // However, on touch devices (tested in Chrome), this does not occur, so when your release the mouse button on
        // drag, the link does not fire.
        // As we will use the scroll functionality mostly on touch devices, let's leave the issue by now.
        // Already tried something like this, but did not help:
        // if (this.state.isDragging){
        //     //event.preventDefault();
        // }
        setIsDragging(false);
    };
    const onMouseDown = (event) => {
        setMouseDownXPos(event.clientX || event.changedTouches[0].clientX);
        setInitialOffsetLeft(offsetLeft);
        setIsDragging(true);
    };
    const onMouseMove = (event) => {
        if (isDragging) {
            const currentMouseXPos = event.clientX || event.changedTouches[0].clientX;
            if (getMaxScrollSpace()) {
                let calcOffsetLeft = initialOffset - currentMouseXPos + mouseDownXPos;
                calcOffsetLeft = Math.max(0, calcOffsetLeft);
                calcOffsetLeft = Math.min(calcOffsetLeft, getMaxScrollSpace());
                setOffsetLeft(calcOffsetLeft);
            }
        }
    };
    const registerEventListeners = (element) => {
        if (innerElement) {
            innerElement.current?.removeEventListener("mousedown", onMouseDown);
            innerElement.current?.removeEventListener("touchstart", onMouseDown);
            innerElement.current?.removeEventListener("mouseup", onMouseUp);
            innerElement.current?.removeEventListener("touchend", onMouseUp);
            innerElement.current?.removeEventListener("touchmove", onMouseMove);
            innerElement.current?.removeEventListener("mousemove", onMouseMove);
            innerElement.current?.removeEventListener("mouseleave", onMouseUp);
            innerElement.current?.removeEventListener("touchcancel", onMouseUp);
        }
        if (!element) {
            return;
        }
        // remove Eventlisteners first because we only need one eventlistener...
        // "passive:false" parameter: we need this because of a browser error that occurs when calling `preventDefault`
        // in the function... so we tell the listener that there could be a preventDefault.
        element.addEventListener("mousedown", onMouseDown, { passive: false });
        element.addEventListener("touchstart", onMouseDown, { passive: false });
        element.addEventListener("mouseup", onMouseUp, { passive: false });
        element.addEventListener("touchend", onMouseUp, { passive: false });
        element.addEventListener("touchmove", onMouseMove, { passive: false });
        element.addEventListener("mousemove", onMouseMove, { passive: false });
        element.addEventListener("mouseleave", onMouseUp);
        element.addEventListener("touchcancel", onMouseUp);
    };
    useEffect(() => {
        // Component did Mount
        addResizeCallback(onResize);
        registerEventListeners(innerElement.current);
        return () => {
            // Component will unmount
            removeResizeCallback(onResize);
            registerEventListeners(null);
        };
    }, []);
    // Is needed for re-rendering and to update the triggered TabBarItem
    useEffect(() => {
        setCounter(prev => prev + 1);
    }, [value]);
    useEffect(() => {
        innerElement.current?.parentElement?.scrollTo?.({
            left: offsetLeft,
            top: 0,
            behavior: isDragging ? "instant" : "smooth",
        });
    }, [offsetLeft]);
    const onClickArrowRight = () => {
        const calcOffsetLeft = Math.min(offsetLeft + 100, getMaxScrollSpace());
        setOffsetLeft(calcOffsetLeft);
    };
    const onClickArrowLeft = () => {
        const calcOffsetLeft = Math.max(offsetLeft - 100, 0);
        setOffsetLeft(calcOffsetLeft);
    };
    // Calculate if the arrows should be shown
    const showArrowLeft = offsetLeft >= 4;
    const showArrowRight = offsetLeft <= -4 + getMaxScrollSpace();
    const tabsCentered = showArrowLeft || showArrowRight ? false : centeredLayout;
    return (React__default.createElement(TabBarPresentation, { ...props, onChange: (newName, e) => {
            if (!isDragging) {
                onChange(newName, e);
            }
        }, activeElement: activeElement.current, activeRef: activeElement, innerRef: innerElement, showArrowLeft: showArrowLeft, showArrowRight: showArrowRight, value: value, onClickArrowLeft: onClickArrowLeft, onClickArrowRight: onClickArrowRight, centeredLayout: tabsCentered, onNewElementFocussed: elementToFocus => {
            /**
             * we need to scroll the TabBar for keyboard users
             * so that the new focussed element is visible
             * */
            // if the whole TabBar is visible, do nothing
            if (getMaxScrollSpace() === 0) {
                return;
            }
            if (elementToFocus.offsetLeft === 0) {
                // set offsetLeft to 0 if the element is the first element
                setOffsetLeft(0);
            }
            else {
                /** Space that will be reserved for the icon */
                const arrowIconWidth = 50;
                const result = Math.min(elementToFocus.offsetLeft - arrowIconWidth, getMaxScrollSpace());
                // scroll so that the element is visible
                setOffsetLeft(result);
            }
        } }));
};

export { TabBarWrapper };

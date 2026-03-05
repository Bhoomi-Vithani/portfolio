import React__default, { useCallback, useEffect } from 'react';
import { getTransform, IndicatorPresentation } from './IndicatorPresentation.js';
import { usePrevious, useResize } from '../../../utils/Hooks/index.js';

// @ts-strict-ignore
const IndicatorWrapper = ({ activeElement, progress, isFullUnderline, direction = "horizontal", translateOrthogonal = 0, }) => {
    const ref = React__default.useRef(null);
    const [fadeAnimation, setFadeAnimation] = React__default.useState(false);
    const [counter, setCounter] = React__default.useState(0);
    const [noAnimation, setNoAnimation] = React__default.useState(false);
    const { translate, scale } = getTransform(ref.current, activeElement, progress, isFullUnderline, direction === "horizontal");
    const previousTranslate = usePrevious(translate);
    const previousScale = usePrevious(scale);
    const previousActiveElement = usePrevious(activeElement);
    const onResize = useCallback(() => {
        setNoAnimation(true);
        setCounter(counter + 1);
    }, [counter]);
    useResize(onResize);
    useEffect(() => {
        if (activeElement === undefined || previousActiveElement === undefined) {
            setFadeAnimation(true);
        }
    }, [activeElement, previousActiveElement]);
    useEffect(() => {
        // animate if selected element changes
        setNoAnimation(false);
    }, [activeElement, progress, isFullUnderline]);
    useEffect(() => {
        const activeElementRect = activeElement?.getBoundingClientRect();
        const activeElementStable = activeElement === undefined || (activeElementRect?.width > 0 && activeElementRect?.height > 0);
        if (activeElementStable && previousTranslate === translate && previousScale === scale) {
            // if the animation was disabled (resize) or set to fade (previously unselected), reset it for future changes
            setNoAnimation(true);
            setFadeAnimation(false);
            // element is stable, no need to update
            return;
        }
        // check again after a short delay in case of resize or initial render
        setTimeout(() => setCounter(counter + 1), 100);
    }, [
        activeElement,
        progress,
        isFullUnderline,
        direction,
        counter,
        scale,
        translate,
        previousTranslate,
        previousScale,
    ]);
    return (React__default.createElement(IndicatorPresentation, { noAnimation: noAnimation, translate: translate, translateOrthogonal: translateOrthogonal, scale: scale, direction: direction, fadeAnimation: fadeAnimation, ref: ref }));
};

export { IndicatorWrapper };

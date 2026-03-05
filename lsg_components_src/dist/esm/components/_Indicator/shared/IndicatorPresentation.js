import React__default from 'react';
import { usePreferReducedMotion } from '../../../utils/Hooks/animation.js';
import { animationDuration } from '../../../styles/variables.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { fRef } from '../../../utils/React.js';
import { mainClass } from './Indicator.styles.js';

// @ts-strict-ignore
const getTransform = (indicatorElement, activeElement, progress, isFullUnderline, isDirectionHorizontal) => {
    let translate = 0;
    let scale = isFullUnderline ? 1 : 0;
    if (indicatorElement && activeElement) {
        const activeElementRect = activeElement.getBoundingClientRect();
        const indicatorParentElementRect = indicatorElement.parentElement.getBoundingClientRect();
        const styles = window.getComputedStyle(activeElement);
        const paddingTop = parseInt(styles.paddingTop, 10);
        const paddingRight = parseInt(styles.paddingRight, 10);
        const paddingBottom = parseInt(styles.paddingBottom, 10);
        const paddingLeft = parseInt(styles.paddingLeft, 10);
        translate = isDirectionHorizontal
            ? activeElementRect.left + paddingLeft - indicatorParentElementRect.left - indicatorElement.offsetLeft
            : activeElementRect.top + paddingTop - indicatorParentElementRect.top - indicatorElement.offsetTop;
        scale = isDirectionHorizontal
            ? (activeElementRect.width - paddingLeft - paddingRight) / indicatorElement.offsetWidth
            : (activeElementRect.height - paddingTop - paddingBottom) / indicatorElement.offsetHeight;
    }
    if (progress) {
        scale = progress / 100.0;
    }
    return { translate, scale };
};
const IndicatorPresentation = fRef(props => {
    const { className, noAnimation, ref, scale, direction, translateOrthogonal = 0, fadeAnimation } = props;
    const translate = props.translate ? `${props.translate}px` : "0";
    const reduceAnimation = usePreferReducedMotion();
    return (React__default.createElement("div", { className: cleanupClassObject({
            [className]: !!className,
            [mainClass]: true,
            [`${mainClass}__${direction}`]: true,
            [`animationFade__${direction}`]: fadeAnimation,
        }), style: {
            transition: noAnimation && reduceAnimation ? "unset" : `transform ${animationDuration.standard}`,
            transform: direction === "horizontal"
                ? `translateX(${translate}) translateY(${translateOrthogonal}px) scaleX(${scale})`
                : `translateY(${translate}) translateX(${translateOrthogonal}px) scaleY(${scale})`,
        }, ref: ref }));
});
IndicatorPresentation.displayName = "IndicatorPresentation";

export { IndicatorPresentation, getTransform };

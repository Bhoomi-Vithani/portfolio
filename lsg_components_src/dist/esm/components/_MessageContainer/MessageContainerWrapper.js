import React__default, { useRef, useState, useEffect } from 'react';
import { animationDuration } from '../../styles/variables.js';
import { isPreferReducedMotion } from '../../utils/Hooks/animation.js';
import { hostClass } from './MessageContainer.styles.js';
import { MessageContainerPresentation } from './MessageContainerPresentation.js';

// @ts-strict-ignore
const calculateOpenAndClosedHeight = (summary, content) => ({
    openHeight: `${summary.offsetHeight + content.offsetHeight}px`,
    closedHeight: `${summary.offsetHeight}px`,
});
const cancelAllOngoingAnimations = (el) => {
    const alreadyRunningAnimations = el.getAnimations();
    alreadyRunningAnimations.forEach(alreadyRunningAnimation => {
        alreadyRunningAnimation.cancel();
    });
};
const shrinkAnimation = (detailsElement, summary, content) => {
    const { openHeight: startHeight, closedHeight: endHeight } = calculateOpenAndClosedHeight(summary, content);
    const currentWidth = summary.offsetWidth;
    // eslint-disable-next-line no-param-reassign
    detailsElement.style.width = `${currentWidth}px`;
    const animation = detailsElement.animate({
        height: [startHeight, endHeight],
    }, {
        duration: isPreferReducedMotion() ? 0 : animationDuration.slow,
        easing: "ease-out",
    });
    animation.finished.then(() => {
        // eslint-disable-next-line no-param-reassign
        detailsElement.open = false;
        // eslint-disable-next-line no-param-reassign
        detailsElement.style.width = "";
    });
    return animation;
};
const expandAnimation = (detailsElement, summary, content) => {
    // eslint-disable-next-line no-param-reassign
    detailsElement.open = true;
    const currentWidth = summary.offsetWidth;
    // eslint-disable-next-line no-param-reassign
    detailsElement.style.width = `${currentWidth}px`;
    const { openHeight: endHeight, closedHeight: startHeight } = calculateOpenAndClosedHeight(summary, content);
    // eslint-disable-next-line no-param-reassign
    detailsElement.style.height = endHeight;
    const animation = detailsElement.animate({
        height: [startHeight, endHeight],
    }, {
        duration: isPreferReducedMotion() ? 0 : animationDuration.slow,
        easing: "ease-out",
    });
    animation.finished.then(() => {
        // Remove the fixed width after animation completes
        // eslint-disable-next-line no-param-reassign
        detailsElement.style.width = "";
    });
    return animation;
};
const getDetailsToggle = (detailsElement) => (e) => {
    e.preventDefault();
    const summary = detailsElement.querySelector("summary");
    const content = detailsElement.querySelector(`.${hostClass}-collapsible-content`);
    cancelAllOngoingAnimations(detailsElement);
    const previousOverflowState = detailsElement.style.overflow;
    // eslint-disable-next-line no-param-reassign
    detailsElement.style.overflow = "hidden";
    const animation = detailsElement.open
        ? shrinkAnimation(detailsElement, summary, content)
        : expandAnimation(detailsElement, summary, content);
    animation.finished.then(() => {
        // eslint-disable-next-line no-param-reassign
        detailsElement.style.overflow = previousOverflowState;
        // eslint-disable-next-line no-param-reassign
        detailsElement.style.height = "";
    });
};
const MessageContainerWrapper = (props) => {
    const detailsElementRef = useRef(null);
    const hostElementRef = useRef(null);
    const iconLinkGroupRef = useRef(null);
    const toggleContent = getDetailsToggle(detailsElementRef.current);
    const [isSingleLine, setIsSingleLine] = useState(false);
    const checkSingleLine = () => {
        if (hostElementRef.current) {
            const height = hostElementRef.current.offsetHeight;
            setIsSingleLine(height <= 56);
        }
    };
    useEffect(() => {
        checkSingleLine();
        window.addEventListener("resize", checkSingleLine);
        return () => window.removeEventListener("resize", checkSingleLine);
    }, [props.children]);
    return (React__default.createElement(MessageContainerPresentation, { ...props, handleClick: toggleContent, hostRef: hostElementRef, detailsRef: detailsElementRef, iconLinkGroupRef: iconLinkGroupRef, className: `${hostClass}${isSingleLine ? "__single-line-message" : ""}` }, props.children));
};

export { MessageContainerWrapper };

import React__default, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { animationDuration } from '../../../styles/variables.js';
import { isTargetInsideContainer, cleanupClassObject } from '../../../utils/DomUtils.js';
import { useTransitionState } from '../../../utils/Hooks/index.js';
import { getThemeClass } from '../../Theme/shared/ThemePresentation.js';
import { MessageContainerWrapper } from '../../_MessageContainer/MessageContainerWrapper.js';
import { hostClass } from './BannerMessage.styles.js';

const BannerMessagePresentation = forwardRef(({ heading, headlineSize = "h5", headlineAs, overline, subline, role, content, isCollapsible = false, children, id, className, noMargin, badgeIcon, showLargeIconBadge = false, illustration, illustrationAltText, badgeText, badgeColor = "supplementary", isVisible = true, badgeIconVariant, isOpen, as = "div", }, ref) => {
    const { transitionState } = useTransitionState(isVisible, animationDuration.standard);
    const containerRef = useRef(null);
    useImperativeHandle(ref, () => ({
        focus: () => containerRef.current?.focus(),
    }), [containerRef]);
    useEffect(() => {
        if (!isVisible && transitionState.exited) {
            if (containerRef.current && isTargetInsideContainer(document.activeElement, containerRef.current)) {
                // Only focus, if focus previously was inside bannermessage
                containerRef.current?.focus();
            }
        }
    }, [isVisible, transitionState.exited]);
    const Container = as;
    const renderContents = isVisible && !transitionState.exited && !transitionState.unmounted;
    return (React__default.createElement(Container, { ref: containerRef, role: role, className: cleanupClassObject({
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin || !renderContents, // no margin if not visible
            [`${hostClass}__with-heading`]: heading,
            [className]: !!className,
            [`${hostClass}__exiting`]: transitionState.exiting,
        }), id: id, tabIndex: -1 }, renderContents && (React__default.createElement(MessageContainerWrapper, { className: getThemeClass("hover"), headline: heading, headlineSize: headlineSize, headlineAs: headlineAs, overline: overline, subline: subline, content: content, isCollapsible: isCollapsible, badgeIcon: badgeIcon, badgeColor: badgeColor, showLargeIconBadge: showLargeIconBadge, illustration: illustration, illustrationAltText: illustrationAltText, badgeText: badgeText, isOpen: isOpen, badgeIconVariant: badgeIconVariant }, children))));
});
BannerMessagePresentation.displayName = "BannerMessagePresentation";

export { BannerMessagePresentation };

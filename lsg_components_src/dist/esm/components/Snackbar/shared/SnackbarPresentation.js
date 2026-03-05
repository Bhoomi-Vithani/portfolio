import React__default, { useState, useRef, useEffect, isValidElement } from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { animationDuration } from '../../../styles/variables.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId, useTransitionState } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { clearLsgTimeout, setLsgTimeout } from '../../../utils/timing.js';
import { getThemeClass } from '../../Theme/shared/ThemePresentation.js';
import { MessageContainerWrapper } from '../../_MessageContainer/MessageContainerWrapper.js';
import { hostClass } from './Snackbar.styles.js';

const addKeyListener = onKeyDown => {
    document.body.addEventListener("keydown", onKeyDown);
};
const removeKeyListener = onKeyDown => {
    document.body.removeEventListener("keydown", onKeyDown);
};
const SnackbarPresentation = (props) => {
    const { onClose, open, children, noMargin, className, heading, headlineSize = "h5", subline, badgeColor, badgeIcon, badgeIconVariant, illustration, illustrationAlt, time, iconLinks, ariaLabel, showLargeIconBadge, role, onFocusLoss = () => {
        /* empty */
    }, containerDisplay = "flex", } = props;
    const uuid = useUniqueId(`${lsgPre}snackbar-`, props.id);
    const id = props.id || uuid;
    const [height, setHeight] = useState(0);
    const hostRef = useRef(undefined);
    const contentRef = useRef(undefined);
    const { transitionState } = useTransitionState(open, animationDuration.slower);
    const isInitialRender = useRef(true);
    const [shouldRenderLiveRegion, setShouldRenderLiveRegion] = useState(open);
    const shouldRenderContent = role === "dialog" || shouldRenderLiveRegion;
    const autoDismissTimerRef = useRef(undefined);
    const remainingTimeRef = useRef(undefined);
    const dismissStartTimeRef = useRef(undefined);
    const autoDismiss = () => {
        // Clear any existing timer first
        if (autoDismissTimerRef.current !== undefined) {
            clearLsgTimeout(autoDismissTimerRef.current);
            autoDismissTimerRef.current = undefined;
        }
        if (time && time > 0) {
            const timeInMillis = time * 1000;
            dismissStartTimeRef.current = Date.now();
            remainingTimeRef.current = timeInMillis;
            autoDismissTimerRef.current = setLsgTimeout(() => {
                autoDismissTimerRef.current = undefined;
                remainingTimeRef.current = undefined;
                dismissStartTimeRef.current = undefined;
                onClose();
            }, timeInMillis);
        }
    };
    const updateHeight = () => {
        const elHeight = hostRef.current?.clientHeight;
        if (elHeight && elHeight !== height) {
            setHeight(elHeight);
        }
    };
    const pauseAutoDismiss = () => {
        if (autoDismissTimerRef.current !== undefined && dismissStartTimeRef.current !== undefined) {
            clearLsgTimeout(autoDismissTimerRef.current);
            autoDismissTimerRef.current = undefined;
            // Calculate remaining time
            const elapsed = Date.now() - dismissStartTimeRef.current;
            remainingTimeRef.current = Math.max(0, remainingTimeRef.current - elapsed);
        }
    };
    const resumeAutoDismiss = () => {
        if (remainingTimeRef.current !== undefined && remainingTimeRef.current > 0) {
            dismissStartTimeRef.current = Date.now();
            autoDismissTimerRef.current = setLsgTimeout(() => {
                autoDismissTimerRef.current = undefined;
                remainingTimeRef.current = undefined;
                dismissStartTimeRef.current = undefined;
                onClose();
            }, remainingTimeRef.current);
        }
        else if (remainingTimeRef.current === 0) {
            // Time has already expired, close immediately
            onClose();
        }
    };
    const handleVisibilityChange = () => {
        if (document.hidden) {
            pauseAutoDismiss();
        }
        else {
            resumeAutoDismiss();
        }
    };
    const onKeyDown = (e) => {
        if (onClose && e.key === "Escape") {
            e.preventDefault();
            onClose();
        }
    };
    useEffect(() => {
        if (open) {
            addKeyListener(onKeyDown);
            // Only start auto-dismiss if page is visible
            if (!document.hidden) {
                autoDismiss();
            }
            else if (time && time > 0) {
                // Page is hidden, set remaining time but don't start timer yet
                remainingTimeRef.current = time * 1000;
            }
            // Add visibility change listener
            document.addEventListener("visibilitychange", handleVisibilityChange);
            // Extra timeout for Safari + Voiceover <3
            setTimeout(() => {
                setShouldRenderLiveRegion(true);
            }, 100);
        }
        else {
            if (!isInitialRender.current) {
                onFocusLoss();
            }
            isInitialRender.current = false;
            removeKeyListener(onKeyDown);
            // Remove visibility change listener
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            // Clear auto-dismiss timer when snackbar closes
            if (autoDismissTimerRef.current !== undefined) {
                clearLsgTimeout(autoDismissTimerRef.current);
                autoDismissTimerRef.current = undefined;
            }
            remainingTimeRef.current = undefined;
            dismissStartTimeRef.current = undefined;
        }
        if (open && role === "dialog") {
            // @as not clear why we need the setTimeout here.
            setTimeout(() => {
                contentRef.current.focus();
            }, 0);
        }
        updateHeight();
        return () => {
            removeKeyListener(onKeyDown);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            // Cleanup timer on unmount
            if (autoDismissTimerRef.current !== undefined) {
                clearLsgTimeout(autoDismissTimerRef.current);
                autoDismissTimerRef.current = undefined;
            }
            remainingTimeRef.current = undefined;
            dismissStartTimeRef.current = undefined;
        };
    }, [open]);
    useEffect(() => {
        if (transitionState.exited) {
            setShouldRenderLiveRegion(false);
        }
    }, [transitionState.exited]);
    const badgeIconDependent = !!heading || !!subline ? undefined : badgeIcon;
    const centeredSnackbar = heading !== "h5" && !illustration && !subline;
    // apply copy text styling, if the message content is just plain text
    const stylePlainText = (element) => {
        if (!isValidElement(element) || (isValidElement(element) && !element.props)) {
            return React__default.createElement("span", { className: `${lsgPre}copy-text` }, element);
        }
        return element;
    };
    const messageContent = stylePlainText(children);
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [hostClass]: true,
            [`${hostClass}__unmounted`]: transitionState.unmounted,
            [className]: !!className,
            [`${hostClass}__with-heading`]: heading,
            [`${lsgPre}no-margin`]: noMargin,
            [`${hostClass}__centered`]: centeredSnackbar, // positioning is depending on snackbar content
            [getThemeClass("dark")]: true,
        }), style: transitionState.entering || transitionState.entered ? { bottom: 32 } : { bottom: -height }, ref: hostRef },
        React__default.createElement(MessageContainerWrapper, { ariaLabel: ariaLabel, headlineId: `${id}-headline`, headline: heading, headlineSize: headlineSize, 
            // Semantic elements don't take effect from Aria-live, see: https://app.caat.report/share/693beac7-48fa-4827-aa7a-a5eb8550672b#989d8351-64d2-4421-9431-3b6f5cbcc007
            headlineAs: role === "status" ? "div" : "strong", subline: subline, sublineAs: "div", content: shouldRenderContent && messageContent, contentId: `${id}-content`, badgeIcon: badgeIconDependent, badgeColor: badgeColor, badgeIconVariant: badgeIconVariant, illustration: illustration, illustrationAltText: illustrationAlt, className: getThemeClass("elevated"), showLargeIconBadge: showLargeIconBadge, contentRole: role, contentRef: contentRef, isOpen: open, containerDisplay: containerDisplay }, iconLinks)));
};
SnackbarPresentation.displayName = "SnackbarPresentation";

export { SnackbarPresentation };

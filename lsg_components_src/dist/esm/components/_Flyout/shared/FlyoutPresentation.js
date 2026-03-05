import React__default, { forwardRef, useRef, useState, useLayoutEffect, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { lsgPreGlobal, lsgPre } from '../../../config/prefix.js';
import { utilityClassScroll } from '../../../styles/utilityClassesScroll.styles.js';
import { cleanupClassObject, isTargetInsideContainer } from '../../../utils/DomUtils.js';
import { useViewportRange, combineRefs, useBodyClickClose, useTransition2, useResize } from '../../../utils/Hooks/index.js';
import { isPreferReducedMotion } from '../../../utils/Hooks/animation.js';
import { Key } from '../../../utils/Keys.js';
import { texts } from '../../../utils/Localization.js';
import { hostClass as hostClass$2 } from '../../Drawer/shared/Drawer.styles.js';
import { LayerPresentation } from '../../Layer/shared/LayerPresentation.js';
import { hostClass as hostClass$1 } from '../../Section/shared/Section.styles.js';
import { getThemeClass } from '../../Theme/shared/ThemePresentation.js';
import { hostClass } from './Flyout.styles.js';

// @ts-strict-ignore
const getRects = (toggleElement, portalElement) => {
    if (typeof document === "undefined") {
        return {};
    }
    const portalRect = portalElement.getBoundingClientRect();
    // TODO: ensure that section is inside the portal
    const innerSectionElement = toggleElement?.closest(`.${hostClass$1}`)?.firstChild || document.documentElement;
    const sectionRect = innerSectionElement.getBoundingClientRect();
    const usableRectWidth = Math.min(portalRect.width, Math.max(320, (portalRect.width + sectionRect.width) / 2));
    const usableRect = {
        left: (portalRect.width - usableRectWidth) / 2,
        right: (portalRect.width + usableRectWidth) / 2,
        width: usableRectWidth,
    };
    return {
        portalRect,
        sectionRect,
        usableRect,
    };
};
const FlyoutPresentation = forwardRef(({ id, children, className, noMargin, onKeyDown = () => { }, toggleElement: toggleElementProp, toggleContainerElement: toggleContainerElementProp, hasTabIndex = true, noAutoFocus = false, innerSpacing = "none", isDrawerOnMobile = false, as = "div", htmlAttrs, open, onClose = () => { }, hostRef, ariaLabel, ariaLabelledBy, minWidth, maxWidth, maxHeight, width = "container", preferOpenToLeft, withGap, }, ref) => {
    const isMobile = useViewportRange(undefined, "sm");
    const inlineRef = useRef(null);
    const toggleElement = toggleElementProp || inlineRef.current;
    const toggleContainerElement = toggleContainerElementProp || toggleElement;
    /** Render portal inside Drawer if present, as otherwise the Flyout would not scroll with the content */
    const closestScrollElement = toggleElement?.closest(`.${utilityClassScroll}`);
    const scrollElement = closestScrollElement || document.body;
    const scrollPosition = closestScrollElement?.scrollTop ?? window.scrollY;
    const internalRef = combineRefs(hostRef, ref);
    useBodyClickClose(internalRef, onClose, open, toggleContainerElement);
    // TODO distinct between dialog and combobox flyout
    const close = ev => {
        if (isTargetInsideContainer(ev.target, toggleContainerElement)) {
            // Ignore if click is on the Button that opened the flyout
            return;
        }
        onClose(ev);
        if (isTargetInsideContainer(document.activeElement, internalRef.current) ||
            document.activeElement === internalRef.current) {
            toggleElement?.focus();
        }
    };
    // TODO distinct between dialog and combobox flyout
    /* TODO Bei Tab key in Combobox, nächstes Element in der Tab-Reihenfolge (z.B. nächstes Textfield) fokussieren
        import { getTabbableNodes } from "focus-lock";
        const tabbableNodes = getTabbableNodes([document.body], new Map()).map(n => n.node);
        const flyoutIndex = tabbableNodes.findIndex(n => n.id === "some-new-div-that-is-rendered-in-place");
        const nextNode = flyoutIndex === -1 ? toggleElement : tabbableNodes[(flyoutIndex + 1) % tabbableNodes.length];
        nextNode.focus();
     */
    const handleKeyDown = (ev) => {
        if (ev.key === Key.Escape) {
            close(ev);
        }
        else if (ev.key === Key.Tab && hasTabIndex) {
            onClose(ev);
        }
        else {
            onKeyDown(ev);
        }
    };
    // TODO make hook stable so that invalid sequences are accepted
    const [transitionState, onTransitionEnd] = useTransition2(open, {
        sequence: ["initial-hidden", "zero-height", "entering", "entered", "full-height", "exiting", "exited"],
        reducedAnimationSequence: ["initial-hidden", "entered", "exited"],
    }
    /* TODO docs for debugging
    (proceedCallback, newState) => {
        console.log(`Next State "${newState}", enter "proceed()" to continue`);
        (window as any).proceed = () => proceedCallback();
    }
     */
    );
    const isInsideLayer = () => {
        const rightDrawer = toggleElement.closest(`.${hostClass$2}__right`);
        const leftDrawer = toggleElement.closest(`.${hostClass$2}__left`);
        return rightDrawer ? "right" : leftDrawer ? "left" : false;
    };
    const [height, setHeight] = useState(undefined);
    const [placeAbove, setPlaceAbove] = useState(undefined);
    let styles = {};
    const { usableRect, sectionRect, portalRect } = getRects(toggleElement, scrollElement);
    const [maxWidthState, setMaxWidthState] = useState(Math.max(usableRect.width || 0, maxWidth || 0) || undefined);
    const [widthState, setWidthState] = useState(internalRef?.current?.getBoundingClientRect()?.width);
    const [gotFocus, setGotFocus] = useState(false);
    styles.maxWidth = maxWidthState;
    styles.minWidth = minWidth;
    const gap = withGap ? 4 : 0;
    useLayoutEffect(() => {
        if (!open) {
            setGotFocus(false);
        }
    }, [open]);
    const updateDimensions = () => {
        if (transitionState === "initial-hidden" || transitionState === "entered") {
            if (!internalRef.current) {
                return;
            }
            const rect = internalRef?.current?.getBoundingClientRect();
            setWidthState(rect.width);
            setHeight(rect.height);
            if (isInsideLayer()) {
                setMaxWidthState(Math.max(getRects(toggleElement, scrollElement).sectionRect.width || 0, maxWidth || 0) ||
                    undefined);
            }
            else {
                setMaxWidthState(Math.max(getRects(toggleElement, scrollElement).usableRect.width || 0, maxWidth || 0) ||
                    undefined);
            }
        }
    };
    useResize(updateDimensions, [widthState]);
    useEffect(() => {
        if ((transitionState === "initial-hidden" || transitionState === "entered") && !gotFocus) {
            // Vertical
            const rectToggle = toggleContainerElement?.getBoundingClientRect();
            const rect = internalRef?.current?.getBoundingClientRect();
            const computedStyle = window.getComputedStyle(internalRef?.current);
            const heightWithMargin = rect.height + parseFloat(computedStyle.marginTop) + parseFloat(computedStyle.marginBottom);
            // TODO: Computation is not exact in some cases
            if (window.innerHeight - rectToggle.bottom >= heightWithMargin) {
                // enough space below in window
                setPlaceAbove(false);
            }
            else if (rectToggle.top >= heightWithMargin) {
                // enough space above in window -> Maybe remove this option for better A11Y on zoomed screens.
                setPlaceAbove(true);
            }
            else {
                // find a better place that does not overlap toggle element
                const hasSpaceAbove = rectToggle.top + scrollPosition > heightWithMargin;
                const isRatherTop = rectToggle.top > window.innerHeight - rectToggle.bottom;
                setPlaceAbove(hasSpaceAbove && isRatherTop);
                // TODO Think about making the flyout a dialog for mobile devices (see MUI Datepicker)
            }
        }
        if (transitionState === "exited" && placeAbove !== undefined) {
            setPlaceAbove(undefined);
        }
        updateDimensions();
    }, [transitionState]);
    useEffect(() => {
        if (placeAbove !== undefined && transitionState === "entered" && !gotFocus) {
            setGotFocus(true);
            const rect = internalRef?.current?.getBoundingClientRect();
            const isInView = rect.top > 0 && rect.bottom < window.innerHeight;
            if (!noAutoFocus) {
                // Find the first focusable element inside the flyout
                const focusable = internalRef.current?.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                if (focusable) {
                    focusable.focus({ preventScroll: true });
                }
                else if (hasTabIndex) {
                    internalRef.current.focus({ preventScroll: true });
                }
            }
            if (!isInView) {
                internalRef.current.scrollIntoView({
                    block: placeAbove ? "start" : "end",
                    inline: placeAbove ? "start" : "end",
                    behavior: isPreferReducedMotion() ? "instant" : "smooth",
                });
            }
        }
    }, [placeAbove, transitionState]);
    const rectToggle = toggleContainerElement?.getBoundingClientRect?.();
    if (typeof window !== "undefined" && toggleContainerElement && height) {
        const isRelative = window.getComputedStyle(scrollElement).position === "relative" ||
            window.getComputedStyle(scrollElement).position === "absolute" ||
            // `<html>` element if portal to body
            window.getComputedStyle(scrollElement.parentElement).position === "relative";
        if (placeAbove) {
            // checks are sufficient for usage in body and Layer
            if (isRelative) {
                // using styles.bottom, because we want to support flyouts that resize when opened
                // `bottom: 0` relative to body element
                styles.bottom = portalRect.bottom - scrollElement.scrollTop - rectToggle.top + gap;
            }
            else {
                const offsetTop = portalRect.top - scrollElement.parentElement.getBoundingClientRect().top;
                // using styles.bottom, because we want to support flyouts that resize when opened
                // `bottom: 0` relative to window
                styles.bottom = window.innerHeight - (rectToggle.top - portalRect.top) - offsetTop + gap;
            }
        }
        else {
            const offsetTop = isRelative
                ? portalRect.top - scrollElement.parentElement.getBoundingClientRect().top
                : 0;
            styles.top = scrollPosition + rectToggle.bottom - offsetTop + gap;
        }
        // Horizontal
        if (widthState) {
            const enoughSpaceRightSection = () => {
                if (sectionRect.right - rectToggle.left >= widthState) {
                    // enough space to the right edge of the section, place the flyout there
                    return { left: rectToggle.left - portalRect.left };
                }
                return false;
            };
            const enoughSpaceLeftSection = () => {
                if (rectToggle.right - sectionRect.left >= widthState) {
                    // enough space to the left edge of the section, place the flyout there
                    return { right: portalRect.right - rectToggle.right };
                }
                return false;
            };
            const enoughSpaceRightScreen = () => {
                if (usableRect.right - rectToggle.left >= widthState) {
                    // enough space to the right edge of the screen, place the flyout there
                    return { left: rectToggle.left - portalRect.left };
                }
                return false;
            };
            const enoughSpaceLeftScreen = () => {
                if (rectToggle.right - usableRect.left >= widthState) {
                    // enough space to the left edge of the screen, place the flyout there
                    return { right: portalRect.right - rectToggle.right };
                }
                return false;
            };
            const checks = preferOpenToLeft
                ? [enoughSpaceRightSection, enoughSpaceLeftSection, enoughSpaceRightScreen, enoughSpaceLeftScreen]
                : [enoughSpaceLeftSection, enoughSpaceRightSection, enoughSpaceLeftScreen, enoughSpaceRightScreen];
            const newStyles = checks.reduce((acc, val) => acc || val(), false);
            if (typeof newStyles !== "boolean") {
                styles = { ...styles, ...newStyles };
            }
            else {
                // Flyout could not be placed yet, put it to the left or right edge
                // open to the right side to prevent cut off when inside right Layer for the first render. Was
                // only an edge-case in specific screen sizes about 1400px width.
                const isRatherRight = rectToggle.left - sectionRect.left > sectionRect.right - rectToggle.right ||
                    isInsideLayer() === "right";
                if (isRatherRight) {
                    // Set to the left of the section/window if necessary
                    styles.left = usableRect.left;
                }
                else {
                    // Set to the right of the section/window if necessary
                    styles.right = portalRect.right - usableRect.right;
                }
            }
        }
    }
    else {
        // place at the top edge of the window when the position is not yet determined
        styles.top = 0;
        styles.position = "fixed";
    }
    // Limit height, so that container + flyout + some spacing fit in the window
    if (rectToggle) {
        styles.maxHeight = Math.min(...[window.innerHeight - rectToggle.height - 24, maxHeight].filter(w => w !== undefined));
    }
    if (width === "container") {
        styles.minWidth = Math.min(...[toggleContainerElement?.offsetWidth, minWidth].filter(w => w !== undefined));
    }
    else if (width === "toggle") {
        styles.minWidth = Math.min(...[toggleElement?.offsetWidth, minWidth].filter(w => w !== undefined));
    }
    const Component = as;
    if (isDrawerOnMobile && isMobile) {
        return (React__default.createElement(LayerPresentation, { closeLinkLabel: texts.lsg.component.Flyout.closeMenu, layout: "right-25", open: open, onCloseClick: onClose, onBackdropClick: onClose, htmlAttrs: htmlAttrs, ariaLabel: ariaLabel, ariaLabelledBy: ariaLabelledBy }));
    }
    let themeElement = toggleElement;
    let themeClass;
    while (themeElement) {
        const themeClasses = Array.from(themeElement.classList).filter(c => c.startsWith(`${lsgPreGlobal}theme__`) && !c.startsWith(`${lsgPreGlobal}theme__bg-`));
        if (themeClasses.length) {
            themeClass = themeClasses[0].replace(`${lsgPreGlobal}theme__`, "");
            break;
        }
        themeElement = themeElement.closest(`[class*="${lsgPreGlobal}theme__"]`);
    }
    const content = (open || transitionState !== "exited") && (React__default.createElement("div", { className: cleanupClassObject({
            [getThemeClass(themeClass)]: themeClass,
        }) },
        React__default.createElement(Component, { id: id, className: cleanupClassObject({
                [className]: !!className,
                [hostClass]: true,
                [`${hostClass}__place-above`]: placeAbove,
                [`${hostClass}__spacing-${innerSpacing}`]: innerSpacing,
                [`${hostClass}__${transitionState}`]: true,
                [`${lsgPre}no-margin`]: noMargin,
                [getThemeClass("elevated")]: true,
            }), ref: internalRef, onTransitionEnd: onTransitionEnd, tabIndex: hasTabIndex ? 0 : -1, onKeyDown: handleKeyDown, style: styles, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, ...htmlAttrs }, children)));
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("div", { ref: inlineRef, "aria-hidden": true }),
        createPortal(content, scrollElement)));
});
FlyoutPresentation.displayName = "FlyoutPresentation";

export { FlyoutPresentation };

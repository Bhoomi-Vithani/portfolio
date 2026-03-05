import React__default, { useContext, useEffect } from 'react';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { fRef } from '../../../utils/React.js';
import { A11yMeaningfulLabelContext } from '../../A11yMeaningfulLabel/shared/A11yMeaningfulLabelContext.js';
import { SpinnerPresentation } from '../../Spinner/shared/SpinnerPresentation.js';
import { mainClass } from './Action.styles.js';

// @ts-strict-ignore
const defaultProps = {
    hasTabIndex: true,
    onClick: () => {
        /* empty */
    },
    onMouseHoverChange: () => {
        /* empty */
    },
    onKeyboardFocusChange: () => {
        /* empty */
    },
};
const ActionPresentation = fRef(props => {
    const [provideLoadingText, setProvideLoadingText] = React__default.useState(false);
    const { disabled, loading, loadingAriaLabel: loadingText, id, hasTabIndex, href, nonInteractive, onClick, ref, hasKeyboardFocus, onKeyboardFocusChange, onMouseHoverChange, onMouseDown, onMouseEnter, onMouseLeave, onMouseUp, onKeyDown, onKeyUp, onTouchStart, onTouchEnd, children, htmlAttrs, name, className, isDisplayInline, expandToOverlay, userSelect, a11yMeaningfulLabel, expanded, selected, role, fullWidth, initialHeight, actionAs, actionProps, } = props;
    const isA11yGenerallyDisabled = useContext(A11yMeaningfulLabelContext).disabled;
    const internalDisabled = a11yMeaningfulLabel ? isA11yGenerallyDisabled : disabled;
    const classes = cleanupClassObject({
        [`${mainClass}`]: true,
        [className]: !!className,
        [`${mainClass}__interactive`]: !nonInteractive,
        [`${mainClass}__non-interactive`]: nonInteractive,
        [`${mainClass}__inline`]: isDisplayInline,
        [`${mainClass}__disabled`]: internalDisabled,
        [`${mainClass}__loading`]: loading && !expandToOverlay && !a11yMeaningfulLabel,
        [`${mainClass}__full-width`]: fullWidth,
        [`${mainClass}__initial-height`]: initialHeight,
        [`${mainClass}__overlay`]: expandToOverlay || a11yMeaningfulLabel,
        [`${mainClass}__no-overlay`]: !(expandToOverlay || a11yMeaningfulLabel),
        [`${mainClass}__user-select`]: userSelect,
        [`${mainClass}__focus`]: hasKeyboardFocus && !isDisplayInline && !expandToOverlay,
        [`${mainClass}__focus-inline`]: hasKeyboardFocus && isDisplayInline,
        [`${mainClass}__focus-overlay`]: hasKeyboardFocus && expandToOverlay,
    });
    const onMouseEnterFn = (event) => {
        if (document.documentElement.getAttribute("data-whatintent") === "mouse") {
            onMouseHoverChange(true);
        }
        onMouseEnter?.(event);
    };
    const onMouseLeaveFn = (event) => {
        onMouseHoverChange(false);
        onMouseLeave?.(event);
    };
    // alternative ActionAs element (e.g. ReactRouter link). But only render if ActionProps are present.
    // otherwise the usual elements are rendered.
    // So if there's not actionProp in a navigationTree item, no ReactRouter component will be rendered.
    const Component = actionAs || (href && "a") || "button";
    // fixes https://stackoverflow.com/questions/4763638/enter-triggers-button-click
    // isDisplayInline (Links) must not have type "button" as the inline style/line break won't work - they are displayed as block
    const type = htmlAttrs
        ?.type ||
        (!href && !isDisplayInline && "button") ||
        undefined;
    useEffect(() => {
        if (loading) {
            setProvideLoadingText(true);
        }
    }, [loading]);
    // Actions with nonInteractive have no spinner
    if (nonInteractive) {
        return React__default.createElement("span", { className: classes }, children);
    }
    return (React__default.createElement(Component, { ...htmlAttrs, className: classes, id: id, onClick: !internalDisabled && !loading && onClick ? e => onClick(e, name) : undefined, onMouseEnter: onMouseEnterFn, onMouseLeave: onMouseLeaveFn, onFocus: () => {
            if (document.documentElement.getAttribute("data-whatinput") === "keyboard") {
                onKeyboardFocusChange(true);
            }
        }, onMouseDown: onMouseDown, onMouseUp: onMouseUp, onKeyDown: onKeyDown, onKeyUp: onKeyUp, onBlur: () => {
            onKeyboardFocusChange(false);
            setProvideLoadingText(false);
        }, onTouchStart: onTouchStart, onTouchEnd: onTouchEnd, ref: ref, disabled: href ? undefined : internalDisabled, role: internalDisabled && href
            ? "link"
            : htmlAttrs?.role ?? role, "aria-disabled": htmlAttrs?.["aria-disabled"] ?? (href && internalDisabled ? "true" : undefined), "aria-expanded": htmlAttrs?.["aria-expanded"] ?? expanded, "aria-selected": htmlAttrs?.["aria-selected"] ?? selected, "aria-busy": loading ? "true" : undefined, loading: loading ? "true" : undefined, "data-a11y-meaningful-label": a11yMeaningfulLabel ? "true" : undefined, tabIndex: internalDisabled || loading || !hasTabIndex ? -1 : 0, href: href && !internalDisabled && !loading ? href : undefined, name: href ? undefined : name, type: type, ...actionProps },
        React__default.createElement("span", { className: `${mainClass}-inner` }, children),
        loading && !expandToOverlay && !a11yMeaningfulLabel && (React__default.createElement(SpinnerPresentation, { expandToOverlay: loading, variant: "indeterminate", size: 24, ariaLabel: provideLoadingText ? loadingText : "", loading: loading }))));
}, defaultProps);
ActionPresentation.displayName = "ActionPresentation";

export { ActionPresentation, defaultProps };

'use strict';

var React__default = require('react');
var DomUtils = require('../../../utils/DomUtils.js');
var React = require('../../../utils/React.js');
var A11yMeaningfulLabelContext = require('../../A11yMeaningfulLabel/shared/A11yMeaningfulLabelContext.js');
var SpinnerPresentation = require('../../Spinner/shared/SpinnerPresentation.js');
var Action_styles = require('./Action.styles.js');

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
  }
};
const ActionPresentation = React.fRef(props => {
  const [provideLoadingText, setProvideLoadingText] = React__default.useState(false);
  const {
    disabled,
    loading,
    loadingAriaLabel: loadingText,
    id,
    hasTabIndex,
    href,
    nonInteractive,
    onClick,
    ref,
    hasKeyboardFocus,
    onKeyboardFocusChange,
    onMouseHoverChange,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseUp,
    onKeyDown,
    onKeyUp,
    onTouchStart,
    onTouchEnd,
    children,
    htmlAttrs,
    name,
    className,
    isDisplayInline,
    expandToOverlay,
    userSelect,
    a11yMeaningfulLabel,
    expanded,
    selected,
    role,
    fullWidth,
    initialHeight,
    actionAs,
    actionProps
  } = props;
  const isA11yGenerallyDisabled = React__default.useContext(A11yMeaningfulLabelContext.A11yMeaningfulLabelContext).disabled;
  const internalDisabled = a11yMeaningfulLabel ? isA11yGenerallyDisabled : disabled;
  const classes = DomUtils.cleanupClassObject({
    [`${Action_styles.mainClass}`]: true,
    [className]: !!className,
    [`${Action_styles.mainClass}__interactive`]: !nonInteractive,
    [`${Action_styles.mainClass}__non-interactive`]: nonInteractive,
    [`${Action_styles.mainClass}__inline`]: isDisplayInline,
    [`${Action_styles.mainClass}__disabled`]: internalDisabled,
    [`${Action_styles.mainClass}__loading`]: loading && !expandToOverlay && !a11yMeaningfulLabel,
    [`${Action_styles.mainClass}__full-width`]: fullWidth,
    [`${Action_styles.mainClass}__initial-height`]: initialHeight,
    [`${Action_styles.mainClass}__overlay`]: expandToOverlay || a11yMeaningfulLabel,
    [`${Action_styles.mainClass}__no-overlay`]: !(expandToOverlay || a11yMeaningfulLabel),
    [`${Action_styles.mainClass}__user-select`]: userSelect,
    [`${Action_styles.mainClass}__focus`]: hasKeyboardFocus && !isDisplayInline && !expandToOverlay,
    [`${Action_styles.mainClass}__focus-inline`]: hasKeyboardFocus && isDisplayInline,
    [`${Action_styles.mainClass}__focus-overlay`]: hasKeyboardFocus && expandToOverlay
  });
  const onMouseEnterFn = event => {
    if (document.documentElement.getAttribute("data-whatintent") === "mouse") {
      onMouseHoverChange(true);
    }
    onMouseEnter?.(event);
  };
  const onMouseLeaveFn = event => {
    onMouseHoverChange(false);
    onMouseLeave?.(event);
  };
  // alternative ActionAs element (e.g. ReactRouter link). But only render if ActionProps are present.
  // otherwise the usual elements are rendered.
  // So if there's not actionProp in a navigationTree item, no ReactRouter component will be rendered.
  const Component = actionAs || href && "a" || "button";
  // fixes https://stackoverflow.com/questions/4763638/enter-triggers-button-click
  // isDisplayInline (Links) must not have type "button" as the inline style/line break won't work - they are displayed as block
  const type = htmlAttrs?.type || !href && !isDisplayInline && "button" || undefined;
  React__default.useEffect(() => {
    if (loading) {
      setProvideLoadingText(true);
    }
  }, [loading]);
  // Actions with nonInteractive have no spinner
  if (nonInteractive) {
    return /*#__PURE__*/React__default.createElement("span", {
      className: classes
    }, children);
  }
  return /*#__PURE__*/React__default.createElement(Component, {
    ...htmlAttrs,
    className: classes,
    id: id,
    onClick: !internalDisabled && !loading && onClick ? e => onClick(e, name) : undefined,
    onMouseEnter: onMouseEnterFn,
    onMouseLeave: onMouseLeaveFn,
    onFocus: () => {
      if (document.documentElement.getAttribute("data-whatinput") === "keyboard") {
        onKeyboardFocusChange(true);
      }
    },
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp,
    onBlur: () => {
      onKeyboardFocusChange(false);
      setProvideLoadingText(false);
    },
    onTouchStart: onTouchStart,
    onTouchEnd: onTouchEnd,
    ref: ref,
    disabled: href ? undefined : internalDisabled,
    role: internalDisabled && href ? "link" : htmlAttrs?.role ?? role,
    "aria-disabled": htmlAttrs?.["aria-disabled"] ?? (href && internalDisabled ? "true" : undefined),
    "aria-expanded": htmlAttrs?.["aria-expanded"] ?? expanded,
    "aria-selected": htmlAttrs?.["aria-selected"] ?? selected,
    "aria-busy": loading ? "true" : undefined,
    loading: loading ? "true" : undefined,
    "data-a11y-meaningful-label": a11yMeaningfulLabel ? "true" : undefined,
    tabIndex: internalDisabled || loading || !hasTabIndex ? -1 : 0,
    href: href && !internalDisabled && !loading ? href : undefined,
    name: href ? undefined : name,
    type: type,
    ...actionProps
  }, /*#__PURE__*/React__default.createElement("span", {
    className: `${Action_styles.mainClass}-inner`
  }, children), loading && !expandToOverlay && !a11yMeaningfulLabel && (/*#__PURE__*/React__default.createElement(SpinnerPresentation.SpinnerPresentation, {
    expandToOverlay: loading,
    variant: "indeterminate",
    size: 24,
    ariaLabel: provideLoadingText ? loadingText : "",
    loading: loading
  })));
}, defaultProps);
ActionPresentation.displayName = "ActionPresentation";

exports.ActionPresentation = ActionPresentation;
exports.defaultProps = defaultProps;

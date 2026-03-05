'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var variables = require('../../../styles/variables.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var timing = require('../../../utils/timing.js');
var ThemePresentation = require('../../Theme/shared/ThemePresentation.js');
var MessageContainerWrapper = require('../../_MessageContainer/MessageContainerWrapper.js');
var Snackbar_styles = require('./Snackbar.styles.js');

const addKeyListener = onKeyDown => {
  document.body.addEventListener("keydown", onKeyDown);
};
const removeKeyListener = onKeyDown => {
  document.body.removeEventListener("keydown", onKeyDown);
};
const SnackbarPresentation = props => {
  const {
    onClose,
    open,
    children,
    noMargin,
    className,
    heading,
    headlineSize = "h5",
    subline,
    badgeColor,
    badgeIcon,
    badgeIconVariant,
    illustration,
    illustrationAlt,
    time,
    iconLinks,
    ariaLabel,
    showLargeIconBadge,
    role,
    onFocusLoss = () => {
      /* empty */
    },
    containerDisplay = "flex"
  } = props;
  const uuid = index.useUniqueId(`${prefix.lsgPre}snackbar-`, props.id);
  const id = props.id || uuid;
  const [height, setHeight] = React__default.useState(0);
  const hostRef = React__default.useRef(undefined);
  const contentRef = React__default.useRef(undefined);
  const {
    transitionState
  } = index.useTransitionState(open, variables.animationDuration.slower);
  const isInitialRender = React__default.useRef(true);
  const [shouldRenderLiveRegion, setShouldRenderLiveRegion] = React__default.useState(open);
  const shouldRenderContent = role === "dialog" || shouldRenderLiveRegion;
  const autoDismissTimerRef = React__default.useRef(undefined);
  const remainingTimeRef = React__default.useRef(undefined);
  const dismissStartTimeRef = React__default.useRef(undefined);
  const autoDismiss = () => {
    // Clear any existing timer first
    if (autoDismissTimerRef.current !== undefined) {
      timing.clearLsgTimeout(autoDismissTimerRef.current);
      autoDismissTimerRef.current = undefined;
    }
    if (time && time > 0) {
      const timeInMillis = time * 1000;
      dismissStartTimeRef.current = Date.now();
      remainingTimeRef.current = timeInMillis;
      autoDismissTimerRef.current = timing.setLsgTimeout(() => {
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
      timing.clearLsgTimeout(autoDismissTimerRef.current);
      autoDismissTimerRef.current = undefined;
      // Calculate remaining time
      const elapsed = Date.now() - dismissStartTimeRef.current;
      remainingTimeRef.current = Math.max(0, remainingTimeRef.current - elapsed);
    }
  };
  const resumeAutoDismiss = () => {
    if (remainingTimeRef.current !== undefined && remainingTimeRef.current > 0) {
      dismissStartTimeRef.current = Date.now();
      autoDismissTimerRef.current = timing.setLsgTimeout(() => {
        autoDismissTimerRef.current = undefined;
        remainingTimeRef.current = undefined;
        dismissStartTimeRef.current = undefined;
        onClose();
      }, remainingTimeRef.current);
    } else if (remainingTimeRef.current === 0) {
      // Time has already expired, close immediately
      onClose();
    }
  };
  const handleVisibilityChange = () => {
    if (document.hidden) {
      pauseAutoDismiss();
    } else {
      resumeAutoDismiss();
    }
  };
  const onKeyDown = e => {
    if (onClose && e.key === "Escape") {
      e.preventDefault();
      onClose();
    }
  };
  React__default.useEffect(() => {
    if (open) {
      addKeyListener(onKeyDown);
      // Only start auto-dismiss if page is visible
      if (!document.hidden) {
        autoDismiss();
      } else if (time && time > 0) {
        // Page is hidden, set remaining time but don't start timer yet
        remainingTimeRef.current = time * 1000;
      }
      // Add visibility change listener
      document.addEventListener("visibilitychange", handleVisibilityChange);
      // Extra timeout for Safari + Voiceover <3
      setTimeout(() => {
        setShouldRenderLiveRegion(true);
      }, 100);
    } else {
      if (!isInitialRender.current) {
        onFocusLoss();
      }
      isInitialRender.current = false;
      removeKeyListener(onKeyDown);
      // Remove visibility change listener
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      // Clear auto-dismiss timer when snackbar closes
      if (autoDismissTimerRef.current !== undefined) {
        timing.clearLsgTimeout(autoDismissTimerRef.current);
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
        timing.clearLsgTimeout(autoDismissTimerRef.current);
        autoDismissTimerRef.current = undefined;
      }
      remainingTimeRef.current = undefined;
      dismissStartTimeRef.current = undefined;
    };
  }, [open]);
  React__default.useEffect(() => {
    if (transitionState.exited) {
      setShouldRenderLiveRegion(false);
    }
  }, [transitionState.exited]);
  const badgeIconDependent = !!heading || !!subline ? undefined : badgeIcon;
  const centeredSnackbar = heading !== "h5" && !illustration && !subline;
  // apply copy text styling, if the message content is just plain text
  const stylePlainText = element => {
    if (! /*#__PURE__*/React__default.isValidElement(element) || /*#__PURE__*/React__default.isValidElement(element) && !element.props) {
      return /*#__PURE__*/React__default.createElement("span", {
        className: `${prefix.lsgPre}copy-text`
      }, element);
    }
    return element;
  };
  const messageContent = stylePlainText(children);
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [Snackbar_styles.hostClass]: true,
      [`${Snackbar_styles.hostClass}__unmounted`]: transitionState.unmounted,
      [className]: !!className,
      [`${Snackbar_styles.hostClass}__with-heading`]: heading,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${Snackbar_styles.hostClass}__centered`]: centeredSnackbar,
      // positioning is depending on snackbar content
      [ThemePresentation.getThemeClass("dark")]: true
    }),
    style: transitionState.entering || transitionState.entered ? {
      bottom: 32
    } : {
      bottom: -height
    },
    ref: hostRef
  }, /*#__PURE__*/React__default.createElement(MessageContainerWrapper.MessageContainerWrapper, {
    ariaLabel: ariaLabel,
    headlineId: `${id}-headline`,
    headline: heading,
    headlineSize: headlineSize,
    // Semantic elements don't take effect from Aria-live, see: https://app.caat.report/share/693beac7-48fa-4827-aa7a-a5eb8550672b#989d8351-64d2-4421-9431-3b6f5cbcc007
    headlineAs: role === "status" ? "div" : "strong",
    subline: subline,
    sublineAs: "div",
    content: shouldRenderContent && messageContent,
    contentId: `${id}-content`,
    badgeIcon: badgeIconDependent,
    badgeColor: badgeColor,
    badgeIconVariant: badgeIconVariant,
    illustration: illustration,
    illustrationAltText: illustrationAlt,
    className: ThemePresentation.getThemeClass("elevated"),
    showLargeIconBadge: showLargeIconBadge,
    contentRole: role,
    contentRef: contentRef,
    isOpen: open,
    containerDisplay: containerDisplay
  }, iconLinks));
};
SnackbarPresentation.displayName = "SnackbarPresentation";

exports.SnackbarPresentation = SnackbarPresentation;

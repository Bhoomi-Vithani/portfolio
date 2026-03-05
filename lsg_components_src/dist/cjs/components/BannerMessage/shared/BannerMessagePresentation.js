'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var variables = require('../../../styles/variables.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var ThemePresentation = require('../../Theme/shared/ThemePresentation.js');
var MessageContainerWrapper = require('../../_MessageContainer/MessageContainerWrapper.js');
var BannerMessage_styles = require('./BannerMessage.styles.js');

const BannerMessagePresentation = /*#__PURE__*/React__default.forwardRef(({
  heading,
  headlineSize = "h5",
  headlineAs,
  overline,
  subline,
  role,
  content,
  isCollapsible = false,
  children,
  id,
  className,
  noMargin,
  badgeIcon,
  showLargeIconBadge = false,
  illustration,
  illustrationAltText,
  badgeText,
  badgeColor = "supplementary",
  isVisible = true,
  badgeIconVariant,
  isOpen,
  as = "div"
}, ref) => {
  const {
    transitionState
  } = index.useTransitionState(isVisible, variables.animationDuration.standard);
  const containerRef = React__default.useRef(null);
  React__default.useImperativeHandle(ref, () => ({
    focus: () => containerRef.current?.focus()
  }), [containerRef]);
  React__default.useEffect(() => {
    if (!isVisible && transitionState.exited) {
      if (containerRef.current && DomUtils.isTargetInsideContainer(document.activeElement, containerRef.current)) {
        // Only focus, if focus previously was inside bannermessage
        containerRef.current?.focus();
      }
    }
  }, [isVisible, transitionState.exited]);
  const Container = as;
  const renderContents = isVisible && !transitionState.exited && !transitionState.unmounted;
  return /*#__PURE__*/React__default.createElement(Container, {
    ref: containerRef,
    role: role,
    className: DomUtils.cleanupClassObject({
      [BannerMessage_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin || !renderContents,
      // no margin if not visible
      [`${BannerMessage_styles.hostClass}__with-heading`]: heading,
      [className]: !!className,
      [`${BannerMessage_styles.hostClass}__exiting`]: transitionState.exiting
    }),
    id: id,
    tabIndex: -1
  }, renderContents && (/*#__PURE__*/React__default.createElement(MessageContainerWrapper.MessageContainerWrapper, {
    className: ThemePresentation.getThemeClass("hover"),
    headline: heading,
    headlineSize: headlineSize,
    headlineAs: headlineAs,
    overline: overline,
    subline: subline,
    content: content,
    isCollapsible: isCollapsible,
    badgeIcon: badgeIcon,
    badgeColor: badgeColor,
    showLargeIconBadge: showLargeIconBadge,
    illustration: illustration,
    illustrationAltText: illustrationAltText,
    badgeText: badgeText,
    isOpen: isOpen,
    badgeIconVariant: badgeIconVariant
  }, children)));
});
BannerMessagePresentation.displayName = "BannerMessagePresentation";

exports.BannerMessagePresentation = BannerMessagePresentation;

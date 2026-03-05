'use strict';

var React__default = require('react');
var variables = require('../../styles/variables.js');
var animation = require('../../utils/Hooks/animation.js');
var MessageContainer_styles = require('./MessageContainer.styles.js');
var MessageContainerPresentation = require('./MessageContainerPresentation.js');

// @ts-strict-ignore
const calculateOpenAndClosedHeight = (summary, content) => ({
  openHeight: `${summary.offsetHeight + content.offsetHeight}px`,
  closedHeight: `${summary.offsetHeight}px`
});
const cancelAllOngoingAnimations = el => {
  const alreadyRunningAnimations = el.getAnimations();
  alreadyRunningAnimations.forEach(alreadyRunningAnimation => {
    alreadyRunningAnimation.cancel();
  });
};
const shrinkAnimation = (detailsElement, summary, content) => {
  const {
    openHeight: startHeight,
    closedHeight: endHeight
  } = calculateOpenAndClosedHeight(summary, content);
  const currentWidth = summary.offsetWidth;
  // eslint-disable-next-line no-param-reassign
  detailsElement.style.width = `${currentWidth}px`;
  const animation$1 = detailsElement.animate({
    height: [startHeight, endHeight]
  }, {
    duration: animation.isPreferReducedMotion() ? 0 : variables.animationDuration.slow,
    easing: "ease-out"
  });
  animation$1.finished.then(() => {
    // eslint-disable-next-line no-param-reassign
    detailsElement.open = false;
    // eslint-disable-next-line no-param-reassign
    detailsElement.style.width = "";
  });
  return animation$1;
};
const expandAnimation = (detailsElement, summary, content) => {
  // eslint-disable-next-line no-param-reassign
  detailsElement.open = true;
  const currentWidth = summary.offsetWidth;
  // eslint-disable-next-line no-param-reassign
  detailsElement.style.width = `${currentWidth}px`;
  const {
    openHeight: endHeight,
    closedHeight: startHeight
  } = calculateOpenAndClosedHeight(summary, content);
  // eslint-disable-next-line no-param-reassign
  detailsElement.style.height = endHeight;
  const animation$1 = detailsElement.animate({
    height: [startHeight, endHeight]
  }, {
    duration: animation.isPreferReducedMotion() ? 0 : variables.animationDuration.slow,
    easing: "ease-out"
  });
  animation$1.finished.then(() => {
    // Remove the fixed width after animation completes
    // eslint-disable-next-line no-param-reassign
    detailsElement.style.width = "";
  });
  return animation$1;
};
const getDetailsToggle = detailsElement => e => {
  e.preventDefault();
  const summary = detailsElement.querySelector("summary");
  const content = detailsElement.querySelector(`.${MessageContainer_styles.hostClass}-collapsible-content`);
  cancelAllOngoingAnimations(detailsElement);
  const previousOverflowState = detailsElement.style.overflow;
  // eslint-disable-next-line no-param-reassign
  detailsElement.style.overflow = "hidden";
  const animation = detailsElement.open ? shrinkAnimation(detailsElement, summary, content) : expandAnimation(detailsElement, summary, content);
  animation.finished.then(() => {
    // eslint-disable-next-line no-param-reassign
    detailsElement.style.overflow = previousOverflowState;
    // eslint-disable-next-line no-param-reassign
    detailsElement.style.height = "";
  });
};
const MessageContainerWrapper = props => {
  const detailsElementRef = React__default.useRef(null);
  const hostElementRef = React__default.useRef(null);
  const iconLinkGroupRef = React__default.useRef(null);
  const toggleContent = getDetailsToggle(detailsElementRef.current);
  const [isSingleLine, setIsSingleLine] = React__default.useState(false);
  const checkSingleLine = () => {
    if (hostElementRef.current) {
      const height = hostElementRef.current.offsetHeight;
      setIsSingleLine(height <= 56);
    }
  };
  React__default.useEffect(() => {
    checkSingleLine();
    window.addEventListener("resize", checkSingleLine);
    return () => window.removeEventListener("resize", checkSingleLine);
  }, [props.children]);
  return /*#__PURE__*/React__default.createElement(MessageContainerPresentation.MessageContainerPresentation, {
    ...props,
    handleClick: toggleContent,
    hostRef: hostElementRef,
    detailsRef: detailsElementRef,
    iconLinkGroupRef: iconLinkGroupRef,
    className: `${MessageContainer_styles.hostClass}${isSingleLine ? "__single-line-message" : ""}`
  }, props.children);
};

exports.MessageContainerWrapper = MessageContainerWrapper;

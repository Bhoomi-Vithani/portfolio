'use strict';

var React__default = require('react');
var animation = require('../../../utils/Hooks/animation.js');
var index = require('../../../utils/Hooks/index.js');
var AccordionPresentation = require('./AccordionPresentation.js');
var Accordion_styles = require('./Accordion.styles.js');

// @ts-strict-ignore
const animatedClass = `${Accordion_styles.hostClass}-content-container__animated`;
const closedClass = `${Accordion_styles.hostClass}-content-container__closed`;
const hiddenClass = `${Accordion_styles.hostClass}-content-container__no-overflow`;
const AccordionWrapper = props => {
  const [isOpen, setIsOpen] = React__default.useState(props.initialIsOpen);
  const [hasKeyboardFocus, setHasKeyboardFocus] = React__default.useState(false);
  const [hasMouseHover, setHasMouseHover] = React__default.useState(false);
  const opened = props.isOpen !== undefined ? props.isOpen : isOpen;
  const previouslyOpened = index.usePrevious(opened);
  /** Indicates that the open/closed state was just changed  */
  const hasChanged = opened !== undefined && !!opened !== !!previouslyOpened;
  const contentContainerRef = React__default.useRef(null);
  /** Indicates that the accordion is closed and no transition is active */
  const [hideContent, setHideContent] = React__default.useState(!opened);
  const animationsActivated = !animation.usePreferReducedMotion();
  /**
   * Effect that waits for the opening/closing transition to be finished and then sets hideContent
   */
  React__default.useEffect(() => {
    const contentContainerElement = contentContainerRef.current;
    const onTransitionEnd = _event => setHideContent(!opened);
    contentContainerElement.addEventListener("transitionend", onTransitionEnd);
    // clear eventListener afterwards
    return () => contentContainerElement.removeEventListener("transitionend", onTransitionEnd);
  }, [opened]);
  /**
   * Animation effect for the Accordions's height
   * It calculates the contentContainer's height and then smoothly transitions between them.
   * */
  React__default.useEffect(() => {
    const element = contentContainerRef.current;
    if (animationsActivated && hasChanged) {
      // function to clear our changes afterwards
      const tidyUpAnimations = () => {
        element.classList.remove(animatedClass);
        element.style.removeProperty("height");
        element.classList.remove(hiddenClass);
      };
      element.classList.add(hiddenClass);
      // the initial height of the content container
      const first = element.getBoundingClientRect().height;
      // we now add or remove the class that indicates opened or closed content container, so that the new style gets applied
      if (opened) {
        element.classList.remove(closedClass);
      } else {
        element.classList.add(closedClass);
      }
      // save the final height of the content container
      const last = element.getBoundingClientRect().height;
      // set the container's height to the inital height. This is the start value for the transition
      element.style.height = `${first}px`;
      /**
       * The Magic: now we can start the actual animation.
       *
       * Note: We need two animation frames to also make it work in Firefox.
       * Edge (and therefore probably chrome) only need one, and it really took me a while to
       * figure it out for Firefox..
       */
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          // turn on animations for container
          element.classList.add(animatedClass);
          // finally trigger animation by setting the final height to the containe
          element.style.height = `${last}px`;
        });
      });
      // tidy up after transition
      element.addEventListener("transitionend", tidyUpAnimations);
      // clear eventListener afterwards
      return () => element.removeEventListener("transitionend", tidyUpAnimations);
    }
    if (opened) {
      element.classList.remove(closedClass);
    } else {
      element.classList.add(closedClass);
    }
  }, [opened]);
  return /*#__PURE__*/React__default.createElement(AccordionPresentation.AccordionPresentation, {
    ...props,
    isOpen: opened,
    onChange: props.onChange || (open => setIsOpen(open)),
    hasKeyboardFocus: hasKeyboardFocus,
    onKeyboardFocusChange: newFocus => setHasKeyboardFocus(newFocus),
    hasMouseHover: hasMouseHover,
    onMouseHoverChange: newHover => setHasMouseHover(newHover),
    hideContent: animationsActivated ? hideContent : !opened,
    contentRef: contentContainerRef
  }, props.children);
};

exports.AccordionWrapper = AccordionWrapper;

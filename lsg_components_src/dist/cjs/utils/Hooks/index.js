'use strict';

var React__default = require('react');
var A11yMeaningfulLabelContext = require('../../components/A11yMeaningfulLabel/shared/A11yMeaningfulLabelContext.js');
var Grid_styles = require('../../components/Grid/shared/Grid.styles.js');
var HandleKeyDownListFlyout = require('../../components/_SelectFlyout/HandleKeyDownListFlyout.js');
var utilityClassesScroll_styles = require('../../styles/utilityClassesScroll.styles.js');
var variables = require('../../styles/variables.js');
var viewport = require('../../styles/viewport.js');
var DomUtils = require('../DomUtils.js');
var Keys = require('../Keys.js');
var timing = require('../timing.js');
var transition = require('../transition.js');
var ResizeEvents = require('../windowEvents/ResizeEvents.js');
var animation = require('./animation.js');

// @ts-strict-ignore
const envIsReact18 = parseInt(React__default.version.split(".")[0], 10) >= 18;
/** If the defaultId is defined, return the defaultId, else create an id with the prefix.
 * NOTE: use the defaultId in a correct way.
 * Example: BrandbarPresentation, logoId.
 * Wrong: const logoId = useUniqueId(`${hostClass}-logo`, `${id}-logo`);
 * (the defaultId is always truthy, even if id is undefined => undefined-logo)
 * Correct: const logoId = useUniqueId(`${hostClass}-logo`, id && `${id}-logo`);
 */
function useUniqueId(prefix, defaultId) {
  try {
    // TODO can be simplified by checking if React.useId is defined
    if (envIsReact18) {
      return defaultId || `${prefix || ""}-${React__default.useId()}`;
    }
    return React__default.useMemo(() => defaultId || DomUtils.uniqueId(prefix), [prefix, defaultId]);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn("Something went wrong by calling function useUniqueId(): ", error);
  }
}
// TODO fix typing
// export function useMenu(menuItems: IActionFlyoutItemWrapperProps[]): [
function useMenu(menuItems) {
  const [open, setOpenButton] = React__default.useState(false);
  const [focussedIndex, setFocussedIndex] = React__default.useState(undefined);
  const [scrollFocussedElementIntoView, setScrollFocussedElementIntoView] = React__default.useState(false);
  const [buttonRef, containerRef, focussedRef, flyoutRef] = [React__default.useRef(null), React__default.useRef(null), React__default.useRef(null), React__default.useRef(null)];
  const onFocussedValueChange = (newValue, newScroll) => {
    setFocussedIndex(newValue);
    setScrollFocussedElementIntoView(newScroll);
  };
  const handleMouseOver = value => {
    if (value !== focussedIndex) {
      onFocussedValueChange(value, false);
    }
  };
  const onKeyDown = event => HandleKeyDownListFlyout.handleKeydownListFlyout({
    event,
    open,
    focussedIndex,
    options: menuItems.map(({
      children: label
    }) => ({
      label: label
    })),
    onChange: () => {
      focussedRef.current.click();
    },
    onOpen: () => {
      setOpenButton(true);
      event.preventDefault();
    },
    onClose: () => setOpenButton(false),
    onFocusIndex: value => {
      onFocussedValueChange(value, true);
    },
    flyoutElement: flyoutRef.current,
    focussedElement: focussedRef.current,
    additionalConfirmKeys: [Keys.Key.Space],
    useTypeAhead: true,
    isTextInputSelect: false
  });
  // TODO: duplicates SelectWrapper/AutocompletePresentation
  const scrollFocussedValueIntoView = focusTop => {
    const element = focussedRef.current;
    const host = flyoutRef.current;
    if (element) {
      if (focusTop) {
        host.scrollTop = Math.min(element.offsetTop, host.scrollHeight - host.offsetHeight);
        return;
      }
      // scroll flyout-list to selected item
      const elementAboveUpperEdge = element.offsetTop < host.scrollTop;
      const elementBelowLowerEdge = element.offsetTop + element.offsetHeight > host.scrollTop + host.offsetHeight;
      if (elementAboveUpperEdge) {
        // scroll element to the upper edge
        host.scrollTop = element.offsetTop;
      } else if (elementBelowLowerEdge) {
        // scroll element to the lower edge
        host.scrollTop = element.offsetTop + element.offsetHeight - host.offsetHeight;
      }
    }
  };
  React__default.useEffect(() => {
    scrollFocussedValueIntoView(scrollFocussedElementIntoView === "top");
  }, []);
  React__default.useEffect(() => {
    // TODO: without this timeout hack, somehow the focus gets overruled and the menu button is focussed.
    timing.setLsgTimeout(() => focussedRef?.current?.focus());
  }, [focussedIndex, open]);
  return [{
    open,
    focussedIndex
  }, {
    setOpen: setOpenButton,
    setFocussedIndex
  }, {
    buttonRef,
    flyoutRef,
    focussedRef,
    containerRef
  }, {
    handleMouseOver,
    onKeyDown
  }];
}
function usePrevious(value) {
  // source: https://learnersbucket.com/examples/interview/useprevious-hook-in-react
  // used to get a previous state or prop
  // to replace something like this: componentDidUpdate(prevProps: IFlyoutWrapperProps, prevState: IFlyoutWrapperState) {
  // create a new reference
  const ref = React__default.useRef(undefined);
  // store current value in ref
  React__default.useEffect(() => {
    ref.current = value;
  }, [value]); // only re-run if value changes
  // return previous value (happens before update in useEffect above)
  return ref.current;
}
function useDwindle(actionProps) {
  const timeout = React__default.useRef(undefined);
  const minClickTimeExceeded = React__default.useRef(true);
  const minPressTimeExceeded = React__default.useRef(true);
  const mouseupPending = React__default.useRef(false);
  const keyboardupPending = React__default.useRef(false);
  let [hasKeyboardFocus, setHasKeyboardFocus] = React__default.useState(false);
  let [hasMouseHover, setHasMouseHover] = React__default.useState(false);
  let [clicked, setClicked] = React__default.useState(false);
  if (actionProps.a11yMeaningfulLabel) {
    let onMouseDownNonInteractive;
    let onMouseUpNonInteractive;
    ({
      onKeyboardFocusChange: setHasKeyboardFocus,
      hasMouseHover,
      onMouseHoverChange: setHasMouseHover,
      isActive: clicked,
      onMouseDown: onMouseDownNonInteractive,
      onMouseUp: onMouseUpNonInteractive
    } = React__default.useContext(A11yMeaningfulLabelContext.A11yMeaningfulLabelContext));
    setClicked = value => value ? onMouseDownNonInteractive() : onMouseUpNonInteractive();
    // Keyboard focus is on the Card/Teaser and should not be set on the Button
    hasKeyboardFocus = false;
  } else if (actionProps.nonInteractive) {
    ({
      hasMouseHover,
      isActive: clicked
    } = React__default.useContext(A11yMeaningfulLabelContext.A11yMeaningfulLabelContext));
    setClicked = () => {};
    setHasMouseHover = () => {};
    setHasKeyboardFocus = () => {};
    // Keyboard focus is on the Card/Teaser and should not be set on the Button
    hasKeyboardFocus = false;
  }
  React__default.useEffect(() => () => timing.clearLsgTimeout(timeout.current), []);
  React__default.useEffect(() => {
    if ((actionProps.disabled === true || actionProps.loading === false) && hasKeyboardFocus) {
      setClicked(false);
      setHasKeyboardFocus(false);
      // TODO ?: after loading activeElement switch to body (=focus), should keyboard focus switched back to button?
    }
  }, [actionProps.disabled, actionProps.loading]);
  function onMouseDown(ev) {
    if (actionProps.onMouseDown) {
      actionProps.onMouseDown(ev);
    }
    if (!actionProps.disabled && !clicked && !actionProps.nonInteractive) {
      mouseupPending.current = true;
      minClickTimeExceeded.current = false;
      if (timeout.current) {
        timing.clearLsgTimeout(timeout.current);
      }
      timeout.current = timing.setLsgTimeout(() => {
        minClickTimeExceeded.current = true;
        if (!mouseupPending.current) {
          setClicked(false);
          mouseupPending.current = false;
        }
      }, variables.animationDuration.standard);
      setClicked(true);
    }
  }
  function onMouseUp(ev) {
    if (actionProps.onMouseUp) {
      actionProps.onMouseUp(ev);
    }
    if (!actionProps.disabled && !actionProps.nonInteractive) {
      mouseupPending.current = false;
      if (minClickTimeExceeded.current) {
        setClicked(false);
      }
    }
  }
  function onMouseLeave(ev) {
    if (actionProps.onMouseLeave) {
      actionProps.onMouseLeave(ev);
    }
    if (clicked && !actionProps.nonInteractive) {
      onMouseUp(ev);
    }
  }
  function onKeyDown(ev) {
    if (actionProps.onKeyDown) {
      actionProps.onKeyDown(ev);
    }
    if (!actionProps.disabled && !actionProps.nonInteractive) {
      keyboardupPending.current = true;
      minPressTimeExceeded.current = false;
      if (timeout.current) {
        timing.clearLsgTimeout(timeout.current);
      }
      timeout.current = timing.setLsgTimeout(() => {
        minPressTimeExceeded.current = true;
        if (!keyboardupPending.current) {
          setClicked(false);
          keyboardupPending.current = false;
        }
      }, variables.animationDuration.standard);
      if (ev.key === "Enter" || ev.key === " " && !actionProps.href) {
        // check enter and space key
        setClicked(true);
      }
    }
  }
  function onKeyUp(ev) {
    if (actionProps.onKeyUp) {
      actionProps.onKeyUp(ev);
    }
    if (clicked && !actionProps.nonInteractive) {
      keyboardupPending.current = false;
      if (minPressTimeExceeded.current) {
        setClicked(false);
      }
    }
  }
  return [{
    hasKeyboardFocus,
    hasMouseHover,
    clicked
  }, {
    setHasKeyboardFocus,
    setHasMouseHover,
    setClicked
  }, {
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    onKeyDown,
    onKeyUp
  }];
}
function useLinkHover(actionProps) {
  let [hasKeyboardFocus, setHasKeyboardFocus] = React__default.useState(false);
  let [hasMouseHover, setHasMouseHover] = React__default.useState(false);
  let onMouseDownContext = () => {};
  let onMouseUpContext = () => {};
  let onMouseLeaveContext = () => {};
  let onTouchStartContext = () => {};
  let onTouchEndContext = () => {};
  if (actionProps.a11yMeaningfulLabel) {
    ({
      onKeyboardFocusChange: setHasKeyboardFocus,
      hasMouseHover,
      onMouseHoverChange: setHasMouseHover,
      onMouseDown: onMouseDownContext,
      onMouseUp: onMouseUpContext,
      onMouseLeave: onMouseLeaveContext,
      onTouchStart: onTouchStartContext,
      onTouchEnd: onTouchEndContext
    } = React__default.useContext(A11yMeaningfulLabelContext.A11yMeaningfulLabelContext)); // TODO: Refactor. Hook is called conditionally
    // Keyboard focus is on the Card/Teaser and should not be set on the Link
    hasKeyboardFocus = false;
  } else if (actionProps.nonInteractive) {
    // TODO: Refactor. Hook is called conditionally
    ({
      hasKeyboardFocus,
      hasMouseHover
    } = React__default.useContext(A11yMeaningfulLabelContext.A11yMeaningfulLabelContext));
    setHasMouseHover = () => {};
    setHasKeyboardFocus = () => {};
    // Keyboard focus is on the Card/Teaser and should not be set on the Link
    hasKeyboardFocus = false;
  }
  React__default.useEffect(() => {
    if ((actionProps.disabled === true || actionProps.loading === false) && hasKeyboardFocus) {
      setHasKeyboardFocus(false);
      // TODO ?: after loading activeElement switch to body (=focus), should keyboard focus switched back to button?
    }
  }, [actionProps.disabled, actionProps.loading]);
  function onMouseDown(ev) {
    if (actionProps.onMouseDown) {
      actionProps.onMouseDown(ev);
    }
    onMouseDownContext();
  }
  function onMouseUp(ev) {
    if (actionProps.onMouseUp) {
      actionProps.onMouseUp(ev);
    }
    onMouseUpContext();
  }
  function onMouseLeave(ev) {
    if (actionProps.onMouseLeave) {
      actionProps.onMouseLeave(ev);
    }
    onMouseLeaveContext();
  }
  function onTouchStart(ev) {
    if (actionProps.onTouchStart) {
      actionProps.onTouchStart(ev);
    }
    onTouchStartContext();
  }
  function onTouchEnd(ev) {
    if (actionProps.onTouchEnd) {
      actionProps.onTouchEnd(ev);
    }
    onTouchEndContext();
  }
  return [{
    hasKeyboardFocus,
    hasMouseHover
  }, {
    setHasKeyboardFocus,
    setHasMouseHover
  }, {
    onMouseDown,
    onMouseUp,
    onMouseLeave
  }, {
    onTouchStart,
    onTouchEnd
  }];
}
const viewportsArray = Object.keys(viewport.breakPoints).reverse();
const isInViewportRange = (vp, min, max) => {
  const positionOfMin = viewportsArray.indexOf(min);
  const positionOfGivenVp = viewportsArray.indexOf(vp);
  const positionOfMax = viewportsArray.indexOf(max);
  return positionOfGivenVp >= positionOfMin && positionOfGivenVp <= positionOfMax;
};
/**
 * Hook that determines if the user's screen is within the specified range.
 *
 * @param min Minimum viewport (use undefined if you don't want to set a minumum limit)
 * @param max Maximum viewport (use undefined if you don't want to set a maximum limit)
 * @returns true if the user's screen is within the specified range
 */
function useViewportRange(min, max) {
  const [matches, setMatches] = React__default.useState(isInViewportRange(ResizeEvents.getInitialViewportSize(), min, max));
  React__default.useEffect(() => {
    const mql = window.matchMedia(viewport.getViewportMediaQueryRange(min, max));
    const listener = () => setMatches(mql.matches);
    listener();
    mql.addEventListener("change", listener);
    return () => mql.removeEventListener("change", listener);
  }, [min, max]);
  return matches;
}
function useViewport() {
  const [size, setSize] = React__default.useState(ResizeEvents.getInitialViewportSize());
  React__default.useEffect(() => {
    ResizeEvents.addViewportCallback(setSize);
    return () => {
      ResizeEvents.removeViewportCallback(setSize);
    };
  }, []);
  return size;
}
function useResize(onResize, deps = []) {
  // Without useCallback, onResize would change with every render
  const onResizeCallback = React__default.useCallback(onResize, deps);
  React__default.useEffect(() => {
    window.addEventListener("resize", onResizeCallback);
    return () => {
      window.removeEventListener("resize", onResizeCallback);
    };
  }, [onResizeCallback]);
}
function useScroll(onScroll, doInitialCall = true, scrollObject = window) {
  // this hook is meant to be a favorable alternative to addScrollCallback in ScrollEvents.ts
  // Note! This listener is added/removed only if the callback changes.
  // use useCallback() for this listener in the function component to reduce the recreation of the listeners.
  // see examples for the use of useCallback() in DataTableWrapper/DataTablePresentation/VideoWrapper
  // if you want to attach the scroll listener to an HTML element instead of window,
  // give in the scrollObject (e.g. DataTablePresentation).
  // after the first render, the callback is called once (but not after callback changes).
  // opt this out by setting doInitialCall to false.
  React__default.useEffect(() => {
    if (doInitialCall) {
      onScroll();
    }
  }, []);
  React__default.useEffect(() => {
    scrollObject?.addEventListener("scroll", onScroll);
    return () => {
      scrollObject?.removeEventListener("scroll", onScroll);
    };
  }, [onScroll, scrollObject]);
}
function useViewportListener(callback, doInitialCall = true) {
  // this hook is meant to be a favorable alternative to addViewportCallback in ResizeEvents.ts
  // Note! This listener is added/removed for every rendering, but only if the callback changes.
  // use useCallback() for this listener in the function component to reduce the recreation of the listeners.
  // see examples for the use of useCallback() in DataTableWrapper/VideoWrapper
  const viewportSize = React__default.useRef(ResizeEvents.getInitialViewportSize());
  const onResize = () => {
    const currentViewportSize = ResizeEvents.getViewportSize();
    if (viewportSize.current !== currentViewportSize) {
      viewportSize.current = currentViewportSize;
      callback(currentViewportSize);
    }
  };
  // after the first render, the callback is called once.
  // opt this out by setting doInitialCall to false.
  React__default.useEffect(() => {
    if (doInitialCall) {
      callback(ResizeEvents.getViewportSize());
    }
    callback(ResizeEvents.getViewportSize());
  }, []);
  React__default.useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [callback]);
}
function useTransitionState(isVisible, duration) {
  const transitionHandler = React__default.useMemo(() => new transition.TransitionHandler(), []);
  const [transitionState, setTransitionState] = React__default.useState(transitionHandler.makeTransitionState("unmounted"));
  /** This effect must be called BEFORE the actual paint in the browser, so we need useLayoutEffect */
  React__default.useLayoutEffect(() => {
    transitionHandler.transition(isVisible, duration, transitionState, newState => setTransitionState(newState));
    return () => transitionHandler.stopTransitions();
  }, [transitionHandler, isVisible]);
  return {
    transitionState,
    transitionHandler
  };
}
// Helper to use a ref both externally and internally
// improved version of this: https://itnext.io/reusing-the-ref-from-forwardref-with-react-hooks-4ce9df693dd
function combineRefs(...externalRefs) {
  const internalRef = React__default.useRef(null);
  React__default.useEffect(() => {
    for (const externalRef of externalRefs) {
      if (typeof externalRef === "function") {
        externalRef(internalRef.current);
      } else if (typeof externalRef === "object" && externalRef !== null) {
        const mutableExternalRef = externalRef;
        // eslint-disable-next-line no-param-reassign
        mutableExternalRef.current = internalRef.current;
      }
    }
  }, [externalRefs]);
  const returnedRef = {
    get current() {
      return internalRef.current;
    },
    set current(current) {
      for (const externalRef of externalRefs) {
        if (typeof externalRef === "function") {
          externalRef(current);
        } else if (typeof externalRef === "object" && externalRef !== null) {
          const mutableExternalRef = externalRef;
          // eslint-disable-next-line no-param-reassign
          mutableExternalRef.current = current;
        }
      }
      internalRef.current = current;
    }
  };
  return returnedRef;
}
const onTransitionDefault = (proceedCallback, _newState) => proceedCallback();
function useTransition2(enter, options, onTransition = onTransitionDefault) {
  const animationsActivated = !animation.isPreferReducedMotion();
  const [currentlyAnimating, setCurrentlyAnimating] = React__default.useState(animationsActivated);
  const activeSequence = currentlyAnimating ? options.sequence : options.reducedAnimationSequence;
  const [transitionState, setTransitionStateInternal] = React__default.useState(options.initialState || "exited");
  const setTransitionState = newState => {
    onTransition(() => setTransitionStateInternal(newState), newState);
  };
  React__default.useLayoutEffect(() => {
    // TODO check if it works, changing animation while the page
    if (transitionState === "entered" || transitionState === "exited") {
      // stable state, switch now between animated and non-animated
      setCurrentlyAnimating(animationsActivated);
    }
  }, [animationsActivated, transitionState]);
  const nextState = currentState => {
    const index = activeSequence.findIndex(s => s === currentState);
    return activeSequence[index < activeSequence.length - 1 ? index + 1 : 0];
  };
  React__default.useLayoutEffect(() => {
    const currentIndex = activeSequence.findIndex(s => s === transitionState);
    if (currentIndex < 0) {
      if (enter) {
        // initial state, that is not part of the sequence. Start with first item of the sequence
        setTransitionState(activeSequence[0]);
      }
      return;
    }
    const nextDefaultStateInSequence = ["exited", "entering", "entered", "exiting"].map(s => ({
      state: s,
      index: activeSequence.findIndex(s2 => s2 === s)
    })).filter(({
      index
    }) => index >= 0).map(({
      state,
      index
    }) => ({
      state,
      steps: (index - currentIndex + activeSequence.length) % activeSequence.length
    })).reduce((acc, val) => acc === undefined || acc.steps > val.steps ? val : acc, undefined)?.state;
    if (enter) {
      if (nextDefaultStateInSequence === "exited") {
        // Exiting animation finished and state is exited or about to be exited. Triggering enter animation by setting the step that comes after exited
        setTransitionState(nextState("exited"));
      } else if (transitionState === "exiting") {
        // Exiting animation is running, reverse by starting entering animation
        setTransitionState("entering");
      } else if (nextDefaultStateInSequence === "exiting") {
        // Exiting is being prepared, but not yet started. Get back to entered
        setTransitionState("entered");
      }
      // every other state is entered or will result in an entered state
    } else {
      // same as above, but the opposite direction
      // eslint-disable-next-line no-lonely-if
      if (nextDefaultStateInSequence === "entered") {
        setTransitionState(nextState("entered"));
      } else if (transitionState === "entering") {
        setTransitionState("exiting");
      } else if (nextDefaultStateInSequence === "entering") {
        setTransitionState("exited");
      }
    }
  }, [enter]);
  React__default.useEffect(() => {
    if (!["entering", "entered", "exiting", "exited"].includes(transitionState)) {
      // Go to next transition state after paint when in a custom state
      setTransitionState(nextState(transitionState));
    }
  }, [transitionState]);
  const onTransitionEnd = () => {
    if (transitionState === "entering" || transitionState === "exiting") {
      // Go to next transition state after css transition
      setTransitionState(nextState(transitionState));
    }
  };
  return [transitionState, onTransitionEnd];
}
/** This hook executes a specific close function when the body is clicked.
 */
function useBodyClickClose(ref, onClose, isActive, toggleElement) {
  const handleBodyClick = ev => {
    if (!DomUtils.isTargetInsideContainer(ev.target, ref.current) && !(ev.target === ref.current) && !DomUtils.isTargetInsideContainer(ev.target, toggleElement) // execute if specified toggle element (e.g. menu
    // button) is not clicked
    ) {
      onClose(ev);
    }
  };
  React__default.useEffect(() => {
    if (isActive) {
      // TODO: @fj: check if { capture: true } is required to prevent bugs with react >= 17
      document.addEventListener("mousedown", handleBodyClick); // close if clicked outside select-flyout
      return () => {
        document.removeEventListener("mousedown", handleBodyClick);
      };
    }
  }, [isActive]);
}
/**
 * This hooks simulates the browsers native sticky functionality in y direction. Sometimes we cant use the css variant, so we can rely on JS with this hook.
 * @param containerRef element to stick to
 * @param stickyElement element to be sticky
 * @param shouldBeSticky determines if functionality should be applied. Is needed because we are not allowed to call hooks conditionally.
 */
const useStickyY = (containerRef, stickyElement, shouldBeSticky = true) => {
  React__default.useEffect(() => {
    const closestScrollElement = containerRef?.current?.closest(`.${utilityClassesScroll_styles.utilityClassScroll}`) || document.body;
    const scrollElement = containerRef?.current?.closest(`.${utilityClassesScroll_styles.utilityClassScroll}`) || window;
    const handleScroll = () => {
      // Height needs to be updated continuously, because it might not be stable while the hook is executed
      let additionalHeaderHeight = 0;
      const classList = Array.from(closestScrollElement.classList);
      if (classList.includes(utilityClassesScroll_styles.utilityClassScrollPadding16)) {
        additionalHeaderHeight = 16 * 4;
      }
      if (classList.includes(utilityClassesScroll_styles.utilityClassScrollPadding22)) {
        additionalHeaderHeight = 22 * 4;
      }
      if (!containerRef.current || !stickyElement.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const stickyElementHeight = stickyElement.current.getBoundingClientRect().height;
      const top = rect.top - additionalHeaderHeight;
      const bottom = rect.bottom - additionalHeaderHeight - stickyElementHeight;
      if (bottom < 0) {
        stickyElement.current.style.setProperty("transform", `translateY(${rect.height - stickyElementHeight}px)`);
      } else if (top < 0) {
        stickyElement.current.style.setProperty("transform", `translateY(${-top}px)`);
      } else if (stickyElement.current.style.translate !== "translateY(0)") {
        stickyElement.current.style.setProperty("transform", `translateY(0)`);
      }
    };
    if (shouldBeSticky && !!containerRef.current && !!stickyElement.current) {
      scrollElement.addEventListener("scroll", handleScroll);
      return () => {
        handleScroll();
        scrollElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, [shouldBeSticky, containerRef.current, stickyElement]);
};
const useGridColumns = (deps = []) => {
  const [numGridColumnsSelectors, setNumGridColumnsSelectors] = React__default.useState(12);
  const elementRef = React__default.useRef(null);
  const viewport = useViewport();
  const viewportGrid = viewport === "xs" || viewport === "sm" ? viewport : "md";
  const maxGridColumns = {
    xs: 4,
    sm: 8,
    md: 12
  }[viewportGrid];
  const numGridColumns = Math.min(numGridColumnsSelectors, maxGridColumns);
  const updateGridColumns = () => {
    const columnDefinitionElement = elementRef.current?.closest(`[class*="${Grid_styles.hostClass}-column__${viewportGrid}-col-"]`);
    if (columnDefinitionElement) {
      const columnClass = Array.from(columnDefinitionElement.classList).find(c => c.startsWith(`${Grid_styles.hostClass}-column__${viewportGrid}-col-`));
      if (columnClass) {
        const numColumns = parseInt(columnClass.split("-").pop(), 10);
        setNumGridColumnsSelectors(numColumns);
        return;
      }
    }
    setNumGridColumnsSelectors(12); // default to 12 columns if no class found
  };
  React__default.useEffect(() => {
    updateGridColumns();
  }, [viewport]);
  const callback = React__default.useCallback(element => {
    elementRef.current = element;
    updateGridColumns();
  }, [deps]);
  return [numGridColumns, callback];
};

exports.combineRefs = combineRefs;
exports.useBodyClickClose = useBodyClickClose;
exports.useDwindle = useDwindle;
exports.useGridColumns = useGridColumns;
exports.useLinkHover = useLinkHover;
exports.useMenu = useMenu;
exports.usePrevious = usePrevious;
exports.useResize = useResize;
exports.useScroll = useScroll;
exports.useStickyY = useStickyY;
exports.useTransition2 = useTransition2;
exports.useTransitionState = useTransitionState;
exports.useUniqueId = useUniqueId;
exports.useViewport = useViewport;
exports.useViewportListener = useViewportListener;
exports.useViewportRange = useViewportRange;

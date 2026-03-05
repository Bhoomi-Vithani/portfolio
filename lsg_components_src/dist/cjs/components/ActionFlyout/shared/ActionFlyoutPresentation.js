'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var Keys = require('../../../utils/Keys.js');
var ReactUtils = require('../../../utils/ReactUtils.js');
var ActionFlyoutItemPresentation = require('../../ActionFlyoutItem/shared/ActionFlyoutItemPresentation.js');
var FlyoutPresentation = require('../../_Flyout/shared/FlyoutPresentation.js');
var ActionFlyout_styles = require('./ActionFlyout.styles.js');

// @ts-strict-ignore
/* eslint-disable */
const ActionFlyoutPresentation = ({
  id: idProp,
  children,
  className,
  noMargin,
  htmlAttrs,
  ariaLabelledBy,
  preferOpenToLeft = false,
  hostRef,
  as,
  menuButton,
  buttonId,
  onOpenChange = () => {},
  ...otherProps
}) => {
  const menuItems = ReactUtils.fragmentMap(children, child => child.props);
  const id = index.useUniqueId(`${ActionFlyout_styles.hostClass}-`, idProp);
  // Refs
  const buttonRef = React__default.useRef(null);
  const focussedRef = React__default.useRef(null);
  const flyoutRef = React__default.useRef(null);
  const containerRef = React__default.useRef(null);
  // Unique ids
  const itemId = index.useUniqueId(`${ActionFlyout_styles.hostClass}-item`);
  // States
  const [open, setOpen] = React__default.useState(false);
  const [focussedIndex, setFocussedIndex] = React__default.useState(-1);
  const onFocussedValueChange = newValue => {
    setFocussedIndex(newValue);
  };
  React__default.useLayoutEffect(() => {
    if (open) {
      focussedRef.current?.focus();
    } else if (DomUtils.isTargetInsideContainer(document.activeElement, flyoutRef.current) || document.activeElement === flyoutRef.current) {
      // TODO when pressing TAB, we want to get to the next tabbable element
      // We only want to set the focus back to the button when the focus is inside the flyout
      (buttonRef?.current || document.getElementById(buttonId))?.focus({
        preventScroll: true
      });
    }
  }, [open]);
  React__default.useEffect(() => {
    focussedRef?.current?.focus();
  }, [focussedIndex]);
  const onKeyDown = event => {
    const options = menuItems.map(({
      children,
      ...other
    }) => ({
      label: children,
      ...other
    }));
    const length = options.length;
    const confirmFn = () => {
      // TODO: consider only using -1 instead of undefined within this function.
      if (focussedIndex === undefined || focussedIndex <= -1) {
        setOpen(true);
        onFocussedValueChange(0);
        return undefined;
      }
      if (!options[focussedIndex]?.disabled && focussedRef.current) {
        focussedRef.current.click();
        event.preventDefault();
      }
      setOpen(!open);
      onFocussedValueChange(open ? -1 : focussedIndex);
    };
    const keyFunction = {
      [Keys.Key.Home]: () => open ? 0 : undefined,
      [Keys.Key.End]: () => open ? options.length - 1 : undefined,
      [Keys.Key.ArrowUp]: () => {
        if (!open) {
          setOpen(true);
          onFocussedValueChange(length - 1);
        } else {
          return focussedIndex > 0 ? focussedIndex - 1 : length - 1;
        }
      },
      [Keys.Key.ArrowDown]: () => {
        if (!open) {
          setOpen(true);
          onFocussedValueChange(0);
        } else {
          return focussedIndex + 1 < length ? focussedIndex + 1 : 0;
        }
      },
      [Keys.Key.Enter]: () => confirmFn(),
      [Keys.Key.Space]: () => {
        confirmFn();
      },
      [Keys.Key.Escape]: () => {
        setOpen(false);
        onOpenChange(false);
        onFocussedValueChange(-1);
      },
      [Keys.Key.Tab]: () => {
        setOpen(false);
        onOpenChange(false);
        onFocussedValueChange(-1);
      }
    }[event.key];
    if (keyFunction) {
      if (![Keys.Key.Tab].includes(event.key)) {
        event.preventDefault();
      } else if (event.key === undefined) {
        setOpen(false);
      }
      const newIndex = keyFunction();
      if (newIndex !== undefined) {
        onFocussedValueChange(newIndex);
      }
    } else {
      setOpen(false);
    }
  };
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [ActionFlyout_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    ...htmlAttrs,
    as: as || "div"
  }, menuButton({
    onClick: () => {
      setOpen(!open);
      onFocussedValueChange(-1);
      onOpenChange(!open);
    },
    id: buttonId,
    expanded: open,
    actionRef: buttonRef,
    onKeyDown: ev => {
      onKeyDown(ev);
    },
    containerRef,
    htmlAttrs: {
      "aria-controls": open ? id : undefined,
      "aria-expanded": open,
      "aria-haspopup": true,
      "aria-label": buttonRef.current?.innerText
    }
  }), /*#__PURE__*/React__default.createElement(FlyoutPresentation.FlyoutPresentation, {
    preferOpenToLeft: preferOpenToLeft,
    onClose: ev => {
      if (ev.key === undefined) {
        setOpen(false);
        onFocussedValueChange(-1);
        onOpenChange(false);
      } else {
        onKeyDown(ev);
      }
    },
    onKeyDown: ev => {
      onKeyDown(ev);
    },
    hostRef: hostRef || flyoutRef,
    open: open,
    toggleElement: buttonRef.current,
    id: id,
    as: "ul",
    hasTabIndex: false,
    htmlAttrs: {
      role: "menu",
      "aria-activedescendant": `${itemId}-${focussedIndex}`,
      "aria-labelledby": buttonId
    },
    ...otherProps
  }, menuItems.map(({
    onClick,
    ...item
  }, i) => (/*#__PURE__*/React__default.createElement(ActionFlyoutItemPresentation.ActionFlyoutItemPresentation, {
    id: `${id}-item-${i}`,
    role: "menuitem",
    ...item,
    key: i,
    hasKeyboardFocus: i === focussedIndex,
    hasTabIndex: false,
    onClick: (e, name) => {
      setOpen(false);
      onOpenChange(false);
      onFocussedValueChange(-1);
      onClick?.(e, name);
    },
    // onMouseHoverChange={isHover => isHover && handleMouseOver(i)}
    ref: i === focussedIndex ? focussedRef : undefined
  })))));
};
ActionFlyoutPresentation.displayName = "ActionFlyoutPresentation";

exports.ActionFlyoutPresentation = ActionFlyoutPresentation;

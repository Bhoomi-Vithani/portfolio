'use strict';

var React__default = require('react');
var index = require('../../../utils/Hooks/index.js');
var A11yMeaningfulLabelContext = require('../../A11yMeaningfulLabel/shared/A11yMeaningfulLabelContext.js');
var CardsCustomItemPresentation = require('./CardsCustomItemPresentation.js');

// @ts-strict-ignore
const CardsCustomItemWrapper = ({
  menuNavigationTree,
  ...props
}) => {
  const {
    disabled,
    loading
  } = props;
  const [{
    hasKeyboardFocus,
    hasMouseHover,
    clicked
  }, {
    setHasKeyboardFocus,
    setHasMouseHover
  }, {
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    onKeyDown,
    onKeyUp
  }] = index.useDwindle(props);
  const [hasMenuMouseHover, setMenuMouseHover] = React__default.useState(false);
  const [hasMenuKeyboardFocus, setMenuKeyboardFocus] = React__default.useState(false);
  const [menuOpen, setMenuOpen] = React__default.useState(false);
  const value = React__default.useMemo(() => ({
    onMouseHoverChange: setHasMouseHover,
    onKeyboardFocusChange: setHasKeyboardFocus,
    onMouseUp,
    onMouseDown,
    onMouseLeave,
    onKeyDown,
    onKeyUp,
    disabled,
    loading,
    isActive: clicked,
    hasMouseHover,
    hasKeyboardFocus,
    type: "link"
  }), [setHasMouseHover, setHasKeyboardFocus, onMouseUp, onMouseDown, onMouseLeave, onKeyDown, onKeyUp, disabled, loading, clicked, hasMouseHover, hasKeyboardFocus]);
  return /*#__PURE__*/React__default.createElement(A11yMeaningfulLabelContext.A11yMeaningfulLabelContext.Provider, {
    value: value
  }, /*#__PURE__*/React__default.createElement(CardsCustomItemPresentation.CardsCustomItemPresentation, {
    ...props,
    onOpenChange: setMenuOpen,
    menuNavigationTree: menuNavigationTree,
    hasKeyboardFocus: hasKeyboardFocus,
    hasMouseHover: hasMouseHover || menuOpen || hasMenuMouseHover || hasMenuKeyboardFocus,
    onMenuMouseHoverChange: setMenuMouseHover,
    onMenuKeyboardFocusChange: setMenuKeyboardFocus,
    hasMenuMouseHover: hasMenuMouseHover,
    hasMenuKeyboardFocus: hasMenuKeyboardFocus,
    isActive: clicked,
    menuOpen: menuOpen
  }));
};

exports.CardsCustomItemWrapper = CardsCustomItemWrapper;

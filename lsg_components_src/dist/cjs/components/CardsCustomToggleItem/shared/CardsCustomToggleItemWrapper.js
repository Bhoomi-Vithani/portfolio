'use strict';

var React__default = require('react');
var index = require('../../../utils/Hooks/index.js');
var A11yMeaningfulLabelContext = require('../../A11yMeaningfulLabel/shared/A11yMeaningfulLabelContext.js');
var CardsCustomToggleItemPresentation = require('./CardsCustomToggleItemPresentation.js');

// @ts-strict-ignore
const CardsCustomToggleItemWrapper = ({
  id,
  menuNavigationTree,
  ...props
}) => {
  const checkboxId = index.useUniqueId("cards-custom-checkbox-item", id);
  const {
    loading,
    disabled
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
    type: "label",
    htmlFor: checkboxId
  }), [setHasMouseHover, setHasKeyboardFocus, onMouseUp, onMouseDown, onMouseLeave, onKeyDown, onKeyUp, disabled, loading, clicked, hasMouseHover, hasKeyboardFocus, checkboxId]);
  return /*#__PURE__*/React__default.createElement(A11yMeaningfulLabelContext.A11yMeaningfulLabelContext.Provider, {
    value: value
  }, /*#__PURE__*/React__default.createElement(CardsCustomToggleItemPresentation.CardsCustomToggleItemPresentation, {
    ...props,
    id: checkboxId,
    menuNavigationTree: menuNavigationTree,
    hasKeyboardFocus: hasKeyboardFocus,
    onKeyboardFocusChange: setHasKeyboardFocus,
    hasMouseHover: hasMouseHover || hasMenuMouseHover || hasMenuKeyboardFocus,
    onMouseHoverChange: setHasMouseHover,
    onMenuMouseHoverChange: setMenuMouseHover,
    onMenuKeyboardFocusChange: setMenuKeyboardFocus,
    hasMenuMouseHover: hasMenuMouseHover,
    hasMenuKeyboardFocus: hasMenuKeyboardFocus,
    isActive: clicked
  }));
};

exports.CardsCustomToggleItemWrapper = CardsCustomToggleItemWrapper;

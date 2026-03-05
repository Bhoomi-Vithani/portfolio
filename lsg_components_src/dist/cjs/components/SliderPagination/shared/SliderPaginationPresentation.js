'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Localization = require('../../../utils/Localization.js');
var ActionPresentation = require('../../Action/shared/ActionPresentation.js');
var IconLinkWrapper = require('../../IconLink/shared/IconLinkWrapper.js');
var SliderPagination_styles = require('./SliderPagination.styles.js');

// @ts-strict-ignore
const Dot = ({
  label,
  active,
  onClick,
  actionHtmlAttrs
}) => {
  const [hasKeyboardFocus, setHasKeyboardFocus] = React__default.useState(false);
  return /*#__PURE__*/React__default.createElement(ActionPresentation.ActionPresentation, {
    hasKeyboardFocus: hasKeyboardFocus,
    onKeyboardFocusChange: setHasKeyboardFocus,
    className: `${SliderPagination_styles.hostClass}-point-action`,
    onClick: onClick,
    htmlAttrs: {
      "aria-current": active ? true : undefined,
      ...actionHtmlAttrs
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${SliderPagination_styles.hostClass}-point-dot`
  }), /*#__PURE__*/React__default.createElement("div", {
    className: `${SliderPagination_styles.hostClass}-point-label`
  }, label));
};
const SliderPaginationPresentation = ({
  id,
  className,
  noMargin,
  numDots,
  activeDotIndex,
  onPointClick,
  itemAriaLabelFormatter,
  previousButtonAriaLabel = Localization.texts.lsg.component.SliderPagination.previousPage,
  nextButtonAriaLabel = Localization.texts.lsg.component.SliderPagination.nextPage,
  actionHtmlAttrs,
  onArrowLeftClick = () => {
    /* empty */
  },
  onArrowRightClick = () => {
    /* empty */
  }
}) => (/*#__PURE__*/React__default.createElement("div", {
  id: id,
  className: DomUtils.cleanupClassObject({
    [className]: !!className,
    [SliderPagination_styles.hostClass]: true,
    [`${prefix.lsgPre}no-margin`]: noMargin
  })
}, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
  label: previousButtonAriaLabel,
  noMargin: true,
  color: "primary",
  icon: icons.interaction_arrows_chevronLeft,
  appearance: "no-text",
  onClick: onArrowLeftClick,
  className: DomUtils.cleanupClassNames([`${SliderPagination_styles.hostClass}-arrow`, `${SliderPagination_styles.hostClass}-arrow-left`]),
  disabled: activeDotIndex === 0,
  htmlAttrs: actionHtmlAttrs
}), /*#__PURE__*/React__default.createElement("ul", {
  className: `${SliderPagination_styles.hostClass}-pointlist`,
  role: "list" // Because of style-type: none - Safari Bug: https://web.dev/articles/creative-list-styling?hl=de#styling_lists_that_dont_look_like_lists
}, Array.from(Array(numDots).keys()).map(i => (/*#__PURE__*/React__default.createElement("li", {
  className: DomUtils.cleanupClassNames([`${SliderPagination_styles.hostClass}-point`, activeDotIndex === i && `${SliderPagination_styles.hostClass}-point-active`]),
  key: i
}, /*#__PURE__*/React__default.createElement(Dot, {
  label: itemAriaLabelFormatter?.(i + 1, activeDotIndex === i) || `${i + 1}`,
  active: activeDotIndex === i,
  actionHtmlAttrs: actionHtmlAttrs,
  onClick: e => onPointClick(i, e)
}))))), /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
  label: nextButtonAriaLabel,
  noMargin: true,
  color: "primary",
  icon: icons.interaction_arrows_chevronRight,
  appearance: "no-text",
  onClick: onArrowRightClick,
  className: DomUtils.cleanupClassNames([`${SliderPagination_styles.hostClass}-arrow`, `${SliderPagination_styles.hostClass}-arrow-right`]),
  disabled: activeDotIndex === numDots - 1,
  htmlAttrs: actionHtmlAttrs
})));
SliderPaginationPresentation.displayName = "SliderPaginationPresentation";

exports.SliderPaginationPresentation = SliderPaginationPresentation;

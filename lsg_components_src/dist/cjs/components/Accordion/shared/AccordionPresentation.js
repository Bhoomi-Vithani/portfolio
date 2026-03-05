'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var utilityClassesColor_styles = require('../../../styles/utilityClassesColor.styles.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var ActionPresentation = require('../../Action/shared/ActionPresentation.js');
var HeadlinePresentation = require('../../Headline/shared/HeadlinePresentation.js');
var IconPresentation = require('../../Icon/shared/IconPresentation.js');
var Accordion_styles = require('./Accordion.styles.js');

// @ts-strict-ignore
const AccordionPresentation = ({
  id: idProp,
  children,
  className,
  noMargin,
  title,
  titleAs = "h3",
  isOpen,
  onChange = () => {
    /* empty */
  },
  onKeyDown,
  actionRef = () => {
    /* empty */
  },
  hasMouseHover,
  hasKeyboardFocus,
  onMouseHoverChange = () => {
    /* empty */
  },
  onKeyboardFocusChange = () => {
    /* empty */
  },
  hideContent,
  contentRef
}) => {
  const id = index.useUniqueId(`${Accordion_styles.hostClass}`, idProp);
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    className: DomUtils.cleanupClassObject({
      [Accordion_styles.hostClass]: true,
      [`${Accordion_styles.hostClass}__closed`]: !isOpen,
      [`${prefix.lsgPre}no-margin`]: noMargin
    })
  }, /*#__PURE__*/React__default.createElement("div", {
    id: id,
    className: DomUtils.cleanupClassObject({
      [`${Accordion_styles.hostClass}-header`]: true,
      [`${Accordion_styles.hostClass}-header__hover`]: hasMouseHover,
      [utilityClassesColor_styles.utilityClassesBackgroundBaseBefore]: true,
      [utilityClassesColor_styles.utilityClassesBackgroundHoverBefore]: hasMouseHover,
      [utilityClassesColor_styles.utilityClassesBackgroundFocusBefore]: hasKeyboardFocus,
      [className]: !!className
    })
  }, /*#__PURE__*/React__default.createElement(HeadlinePresentation.HeadlinePresentation, {
    className: `${Accordion_styles.hostClass}-header-headline`,
    as: titleAs,
    size: "h4",
    noMargin: true,
    ...(titleAs &&
    // set aria attributes if titleAs is given and it is not a heading
    !["h1", "h2", "h3", "h4", "h5", "h6"].includes(titleAs) && {
      htmlAttrs: {
        role: "heading",
        "aria-level": 3
      }
    })
  }, /*#__PURE__*/React__default.createElement(ActionPresentation.ActionPresentation, {
    id: `${id}-header-btn`,
    fullWidth: true,
    className: DomUtils.cleanupClassObject({
      [`${Accordion_styles.hostClass}-header-action`]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    onClick: event => {
      onChange(!isOpen, id, event);
    },
    htmlAttrs: {
      "aria-controls": `${id}-content`,
      "data-lsg-component": "accordion"
    },
    expanded: !!isOpen,
    onKeyDown: onKeyDown,
    ref: actionRef,
    onMouseHoverChange: onMouseHoverChange,
    onKeyboardFocusChange: onKeyboardFocusChange
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${Accordion_styles.hostClass}-header-inner`
  }, /*#__PURE__*/React__default.createElement("span", {
    className: `${Accordion_styles.hostClass}-header-text`,
    "data-lsg-subcomponent": "label"
  }, title), /*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
    className: `${Accordion_styles.hostClass}-header-icon`,
    icon: icons.interaction_arrows_chevronUp,
    noMargin: true,
    title: ""
  }))))), /*#__PURE__*/React__default.createElement("div", {
    ref: contentRef,
    className: DomUtils.cleanupClassObject({
      [`${Accordion_styles.hostClass}-content-container`]: true
    })
  }, /*#__PURE__*/React__default.createElement("div", {
    role: "region",
    id: `${id}-content`,
    className: `${Accordion_styles.hostClass}-content`,
    "aria-labelledby": `${id}-header-btn`,
    // hide closed content, so screenreaders don't try to access it.
    hidden: !isOpen && hideContent
  }, children)));
};
AccordionPresentation.displayName = "AccordionPresentation";

exports.AccordionPresentation = AccordionPresentation;

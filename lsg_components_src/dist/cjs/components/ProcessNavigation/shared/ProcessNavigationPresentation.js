'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var Localization = require('../../../utils/Localization.js');
var ActionPresentation = require('../../Action/shared/ActionPresentation.js');
var ThumbnailPresentation = require('../../Thumbnail/shared/ThumbnailPresentation.js');
var ProcessPageNavigation_styles = require('./ProcessPageNavigation.styles.js');

// @ts-strict-ignore
// W3 Aria ref: https://www.w3.org/WAI/tutorials/menus/structure/
// TODO: von body in die application reinrendern (React portal) -> Felix, Thorsten
// TODO: Icon size (low prio)
const getTitle = (completed, active) => {
  if (active) {
    // The "aria-current" takes care of that already.
    return "";
  }
  if (completed) {
    return Localization.texts.lsg.component.ProcessNavigation.finishedPage;
  }
  return Localization.texts.lsg.component.ProcessNavigation.upcomingPage;
};
const ProcessNavigationPresentation = ({
  id,
  className,
  noMargin,
  navigationTree,
  value,
  navigationActionAs
}) => {
  const [focussedItem, setFocussedItem] = React__default.useState(undefined);
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    className: DomUtils.cleanupClassObject({
      [`${ProcessPageNavigation_styles.hostClass}`]: true,
      [className]: className,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${ProcessPageNavigation_styles.hostClass}__menu`]: !!navigationTree
    }),
    id: id
  }, /*#__PURE__*/React__default.createElement("ol", {
    className: `${ProcessPageNavigation_styles.hostClass}-list`
  }, navigationTree.map((item, index) => {
    const itemInTheFuture = item.name !== value && !item.completed;
    return /*#__PURE__*/React__default.createElement("li", {
      key: `${item.name || ""}index`,
      className: DomUtils.cleanupClassObject({
        [`${ProcessPageNavigation_styles.hostClass}-list-item`]: true
      })
    }, /*#__PURE__*/React__default.createElement(ThumbnailPresentation.ThumbnailPresentation, {
      icon: item.completed ? icons.interaction___checkmark : undefined,
      className: `${ProcessPageNavigation_styles.hostClass}-thumbnail`,
      iconVariant: "outline",
      iconTitle: getTitle(item.completed, item.name === value),
      text: !item.completed ? (index + 1).toString() : undefined,
      size: "small",
      noMargin: true,
      look: !itemInTheFuture ? "filled" : "thick-border"
    }), /*#__PURE__*/React__default.createElement("div", {
      className: DomUtils.cleanupClassObject({
        [`${ProcessPageNavigation_styles.hostClass}-container`]: true,
        [`${ProcessPageNavigation_styles.hostClass}-container__finished`]: item.completed
      })
    }, /*#__PURE__*/React__default.createElement(ActionPresentation.ActionPresentation, {
      actionAs: item.actionAs || navigationActionAs,
      actionProps: item.actionProps,
      key: index,
      name: item.name,
      className: DomUtils.cleanupClassObject({
        [`${ProcessPageNavigation_styles.hostClass}-button`]: true,
        [`${ProcessPageNavigation_styles.hostClass}-button__disabled`]: itemInTheFuture || item.disabled
      }),
      // disabled={...} // Use aria-disabled instead to ensure the items remain tabbable!
      href: !itemInTheFuture ? item.href : undefined,
      htmlAttrs: {
        "aria-disabled": itemInTheFuture || item.disabled,
        "aria-current": item.name === value ? "true" : undefined,
        ...item.htmlAttrs
      },
      hasTabIndex: true,
      onClick: !itemInTheFuture ? item.onClick : undefined,
      onKeyboardFocusChange: newFocus => setFocussedItem(newFocus ? index : undefined),
      hasKeyboardFocus: focussedItem === index,
      noMargin: true
    }, /*#__PURE__*/React__default.createElement("span", {
      className: `${ProcessPageNavigation_styles.hostClass}-label`
    }, item.label))));
  })));
};
ProcessNavigationPresentation.displayName = "ProcessNavigationPresentation";

exports.ProcessNavigationPresentation = ProcessNavigationPresentation;

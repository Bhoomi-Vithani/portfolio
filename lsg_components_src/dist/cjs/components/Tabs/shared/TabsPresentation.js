'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var ReactUtils = require('../../../utils/ReactUtils.js');
var TabBarWrapper = require('../../_TabBar/shared/TabBarWrapper.js');
var Tabs_styles = require('./Tabs.styles.js');

// @ts-strict-ignore
const TabsPresentation = props => {
  const {
    id: idProp,
    children,
    className,
    noMargin,
    openIndex = 0,
    onChange,
    centeredLayout = false,
    horizontalAlignment,
    navigationActionAs,
    ariaLabel,
    ariaLabelledBy
  } = props;
  const id = index.useUniqueId(`${Tabs_styles.hostClass}-`, idProp);
  const tabBaseId = `${id}-tab`;
  const navigationTree = ReactUtils.fragmentMap(children, (child, i) => ({
    ...child.props,
    name: i.toString(),
    id: child.props.id || `${tabBaseId}-${i}`
  }));
  const isCentered = horizontalAlignment === "center" ? true : centeredLayout;
  const inheritedAlignment = centeredLayout === true ? "center" : horizontalAlignment;
  return /*#__PURE__*/React__default.createElement("div", {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [Tabs_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin
    })
  }, /*#__PURE__*/React__default.createElement(TabBarWrapper.TabBarWrapper, {
    navigationTree: navigationTree,
    navigationActionAs: navigationActionAs,
    value: openIndex.toString(),
    onChange: (value, e) => onChange(parseInt(value, 10), e),
    noMargin: true,
    centeredLayout: isCentered,
    ariaLabel: ariaLabel,
    ariaLabelledBy: ariaLabelledBy
  }), !!navigationTree?.length && (/*#__PURE__*/React__default.createElement("div", {
    id: `${navigationTree[openIndex].id}-panel`,
    className: `${Tabs_styles.hostClass}-panel`,
    role: "tabpanel",
    "aria-labelledby": navigationTree[openIndex].id
  }, ReactUtils.fragmentMap(children, child => /*#__PURE__*/React__default.cloneElement(child, {
    horizontalAlignment: inheritedAlignment
  }))[openIndex])));
};
TabsPresentation.displayName = "TabsPresentation";

exports.TabsPresentation = TabsPresentation;

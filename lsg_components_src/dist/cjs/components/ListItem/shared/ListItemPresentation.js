'use strict';

var React__default = require('react');
var DomUtils = require('../../../utils/DomUtils.js');
var IconPresentation = require('../../Icon/shared/IconPresentation.js');
var ListItem_styles = require('./ListItem.styles.js');
var prefix = require('../../../config/prefix.js');

// @ts-strict-ignore
const ListItemPresentation = ({
  id,
  className,
  icon,
  iconColor,
  iconLabel,
  value,
  children,
  itemIndex,
  markerText
}) => {
  const explicitMarker = markerText ?? (itemIndex && itemIndex.length ? itemIndex.join(".") : undefined);
  return /*#__PURE__*/React__default.createElement("li", {
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [ListItem_styles.hostClass]: true
    }),
    id: id,
    value: value
  }, icon && /*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
    icon: icon,
    size: "small",
    color: iconColor,
    noMargin: true,
    title: iconLabel
  }), explicitMarker && (/*#__PURE__*/React__default.createElement("span", {
    className: `${prefix.lsgPre}list__marker`
  }, explicitMarker, ".")), /*#__PURE__*/React__default.createElement("span", null, children));
};
ListItemPresentation.displayName = "ListItemPresentation";

exports.ListItemPresentation = ListItemPresentation;

'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var ReactUtils = require('../../../utils/ReactUtils.js');
var List_styles = require('./List.styles.js');

const ListContext = /*#__PURE__*/React__default.createContext([]);
const ListPresentation = ({
  id,
  children,
  className,
  noMargin,
  isOrdered = false,
  orderedMode = "numeric",
  icon,
  iconColor = "default",
  iconLabel,
  textSize = "copy-text"
}) => {
  const Component = isOrdered ? "ol" : "ul";
  const parentIndex = React__default.useContext(ListContext);
  // If customer does not set a value, we will count the listItem for styling "left-padding"
  const numCharacters = String(Math.max(Number(`${ReactUtils.fragmentCount(children)}`.length), ...ReactUtils.fragmentMap(children, child => child.props.value ? `${child.props.value}`.length : 0)));
  return /*#__PURE__*/React__default.createElement(Component, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [List_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${List_styles.hostClass}__ordered-${orderedMode}`]: isOrdered,
      [`${List_styles.hostClass}__unordered-dash`]: !isOrdered && !icon,
      [`${List_styles.hostClass}__unordered-icon`]: !isOrdered && icon,
      [`${List_styles.hostClass}-${textSize}`]: true,
      [`${List_styles.hostClass}__ol-length-${numCharacters}`]: isOrdered && orderedMode !== "alphabetic"
    }),
    role: !isOrdered && icon ? "list" : undefined
  }, ReactUtils.fragmentMap(children, (child, index) => {
    // Only create a new index path for numerically ordered lists.
    // In all other cases, parentIndex remains unchanged.
    const isNumericOrdered = isOrdered && orderedMode === "numeric";
    const newIndex = isNumericOrdered ? [...parentIndex, index + 1] : parentIndex;
    // explicit marker without dot for visual + screen reader (e.g. "3.1")
    const markerText = isNumericOrdered ? newIndex.join(".") : undefined;
    // Only add the relevant props if needed
    const extraProps = {};
    if (icon && !child.props?.icon) {
      extraProps.icon = icon;
      extraProps.iconColor = iconColor;
      extraProps.iconLabel = iconLabel;
    }
    if (markerText) {
      extraProps.markerText = markerText;
    }
    if (isNumericOrdered) {
      extraProps.itemIndex = newIndex;
    }
    const cloned = /*#__PURE__*/React__default.isValidElement(child) ? /*#__PURE__*/React__default.cloneElement(child, {
      ...extraProps
    }) : child;
    // Only provide the context with a new index if numerically ordered.
    // Otherwise, keep the parent index (no numbering for unordered).
    return /*#__PURE__*/React__default.createElement(ListContext.Provider, {
      value: newIndex,
      key: index
    }, cloned);
  }));
};
ListPresentation.displayName = "ListPresentation";

exports.ListContext = ListContext;
exports.ListPresentation = ListPresentation;

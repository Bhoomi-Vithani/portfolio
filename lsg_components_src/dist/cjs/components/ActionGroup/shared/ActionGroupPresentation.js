'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var ReactUtils = require('../../../utils/ReactUtils.js');
var ButtonGroupWrapper = require('../../ButtonGroup/shared/ButtonGroupWrapper.js');
var ActionGroup_styles = require('./ActionGroup.styles.js');

// @ts-strict-ignore
const ActionGroupPresentation = ({
  id,
  children,
  noMargin,
  className,
  left,
  right,
  centeredLayout = false,
  horizontalAlignment,
  ariaLabel
}) => {
  const isDirectionVertical = index.useViewportRange(undefined, "xs");
  const isSplit = right || left && children;
  const alignment = centeredLayout === true ? "center" : horizontalAlignment || "left";
  // Logic to be backwards-compatible
  /* Renders in Stories ActionGroupSingle, ActionGroupSingleCentered (variant of ActionGroupSingle),
  ActionGroupSingleLeft, Markenportal-ActionGroupSection (within Grid.Column), Markenportal-ActionGroupSingle. */
  if (!isSplit) {
    return /*#__PURE__*/React__default.createElement(ButtonGroupWrapper.ButtonGroupWrapper, {
      id: id,
      horizontalAlignment: alignment,
      noMargin: noMargin,
      direction: "flip-xs",
      key: `${prefix.lsgPre}actiongroup-left`,
      ariaLabel: ariaLabel
    }, left || children);
  }
  const isList = ReactUtils.fragmentCount(right) + ReactUtils.fragmentCount(children) + ReactUtils.fragmentCount(left) > 1;
  const ListComponent = isList ? "ul" : "div"; // isList is true in each ListComponent Story.
  const ItemComponent = isList ? "li" : "div";
  /* Renders in Stories ActionGroupEdgeCase, Shared-ActionGroupExample, ActionGroupSingleRight,
   Markenportal-ActionGroupExample. */
  return (
    /*#__PURE__*/
    // TODO render as <footer>
    React__default.createElement(ListComponent, {
      id: id,
      className: DomUtils.cleanupClassObject({
        [className]: !!className,
        [ActionGroup_styles.hostClass]: true,
        [`${prefix.lsgPre}no-margin`]: noMargin,
        [`${ActionGroup_styles.hostClass}__${isDirectionVertical ? "vertical" : "horizontal"}`]: true
      }),
      "aria-label": ariaLabel
    }, ReactUtils.fragmentMap(right, child => (/*#__PURE__*/React__default.createElement(ItemComponent, {
      className: `${ActionGroup_styles.hostClass}-item`,
      key: child.key
    }, child))), ReactUtils.fragmentMap(children, child => (/*#__PURE__*/React__default.createElement(ItemComponent, {
      className: `${ActionGroup_styles.hostClass}-item`,
      key: child.key
    }, child))), ReactUtils.fragmentMapReverse(left, (child, i) => (
    /*#__PURE__*/
    // gap between left and right side with flexGrow
    React__default.createElement(ItemComponent, {
      className: `${ActionGroup_styles.hostClass}-item`,
      key: `${i}`,
      style: {
        flexGrow: i === 0 ? "1" : undefined
      }
    }, child))))
  );
};
ActionGroupPresentation.displayName = "ActionGroupPresentation";

exports.ActionGroupPresentation = ActionGroupPresentation;

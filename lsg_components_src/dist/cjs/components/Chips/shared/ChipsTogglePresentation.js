'use strict';

var React__default = require('react');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var ReactUtils = require('../../../utils/ReactUtils.js');
var ParagraphPresentation = require('../../Paragraph/shared/ParagraphPresentation.js');
var ChipsGroup_styles = require('./ChipsGroup.styles.js');

// @ts-strict-ignore
const ChipsTogglePresentation = ({
  direction = "wrap",
  appearance = "default",
  ...props
}) => {
  const {
    id: idProp,
    name,
    groupLabel,
    as = "fieldset",
    className
  } = props;
  const id = index.useUniqueId(`${ChipsGroup_styles.hostClass}-`, idProp);
  /** If as is set to fieldset, we render a div with role="group" to simulate a fieldset. */
  const asFieldset = as === "fieldset";
  /** If as is set to Fieldset, the content component should only be a div. */
  const Component = asFieldset ? "div" : as;
  const groupLabelId = index.useUniqueId(`${ChipsGroup_styles.hostClass}`, id);
  // GroupName, ItemName important step for correct radio focus
  const groupName = index.useUniqueId(`${ChipsGroup_styles.hostClass}-name-`, name);
  const needsScrollArea = ["condensed", "scroll"].includes(direction);
  return /*#__PURE__*/React__default.createElement("div", {
    id: `${id}-base`,
    className: DomUtils.cleanupClassObject({
      [ChipsGroup_styles.hostClass]: true,
      [className]: !!className
    }),
    ...(asFieldset && {
      /*
       * This div was originally intended to be a fieldset in order to implement https://www.w3.org/WAI/WCAG21/Techniques/html/H71 .
       * But due to requirements regarding horizontal scrolling and design, the Legend couldn't be its first child.
       * Therefore we use role="group" and reference the Label.
       * https://www.accessibility-developer-guide.com/examples/forms/grouping-with-fieldset-legend/#legend-must-be-a-direct-child-of-fieldset
       */
      role: "group",
      "aria-labelledby": groupLabelId
    })
  }, /*#__PURE__*/React__default.createElement(ParagraphPresentation.ParagraphPresentation, {
    className: DomUtils.cleanupClassObject({
      [`${ChipsGroup_styles.hostClass}-group-label`]: true,
      [`${ChipsGroup_styles.hostClass}-no-group-label`]: appearance === "no-text" || groupLabel.trim() === ""
    }),
    id: groupLabelId,
    noMargin: true
  }, groupLabel), /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${ChipsGroup_styles.hostClass}-scrollarea`]: needsScrollArea
    })
  }, /*#__PURE__*/React__default.createElement(Component, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [`${ChipsGroup_styles.hostClass}-group`]: true,
      [`${ChipsGroup_styles.hostClass}-inner-group__${direction}`]: true
    }),
    "aria-labelledby": !asFieldset ? groupLabelId : undefined
  }, props.type === "radio" ? ReactUtils.fragmentMap(props.children, (child, index) => {
    const nameChild = child.props.name || `${id}-${index}`;
    return /*#__PURE__*/React__default.cloneElement(child, {
      name: nameChild,
      value: props.value === nameChild,
      onChange: (_value, chName, event) => props.onChange(chName, props.name, event),
      htmlAttrs: {
        ...child.props.htmlAttrs,
        name: groupName
      },
      type: "radio",
      as: props.as === "ol" || props.as === "ul" ? "li" : "div"
    });
  }) : ReactUtils.fragmentMap(props.children, child => /*#__PURE__*/React__default.cloneElement(child, {
    type: "checkbox",
    as: props.as === "ol" || props.as === "ul" ? "li" : "div"
  })))));
};

exports.ChipsTogglePresentation = ChipsTogglePresentation;

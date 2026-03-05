'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var ReactUtils = require('../../../utils/ReactUtils.js');
var ParagraphPresentation = require('../../Paragraph/shared/ParagraphPresentation.js');
var ChipsGroup_styles = require('./ChipsGroup.styles.js');

// @ts-strict-ignore
const ChipsPresentation = props => {
  const {
    id: idProp,
    children,
    groupLabel,
    appearance,
    direction,
    as,
    noMargin,
    className,
    horizontalAlignment
  } = props;
  const id = index.useUniqueId(`${ChipsGroup_styles.hostClass}-`, idProp);
  const Component = as || "ul";
  const groupLabelId = `${id}-group-label`;
  const [focusIndex, setFocusIndex] = React__default.useState(undefined);
  const [numChildren, setNumChildren] = React__default.useState(ReactUtils.fragmentCount(children));
  const [itemDismissed, setItemDismissed] = React__default.useState(false);
  React__default.useEffect(() => {
    if (ReactUtils.fragmentCount(children) > numChildren) {
      setItemDismissed(false);
    } else if (ReactUtils.fragmentCount(children) < numChildren) {
      setItemDismissed(true);
    }
    setNumChildren(ReactUtils.fragmentCount(children));
  }, [children]);
  // The following steps are triggered, when dismissing an ChipsItemDismissible
  // 1. User Clicks, onDismiss is called in chipItem
  // 2. The application removes the dismissed element from DOM
  // 3. The chip gets unmounted, onFocusLoss is called before
  // 4. The Chips-Group is re-rendered. The Chip that should be focused receives a callback instead of a ref
  // 5. The callback sets a new focus
  const focusItem = React__default.useCallback(element => {
    element?.focus();
    setFocusIndex(undefined);
  }, []);
  return /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [ChipsGroup_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [className]: !!className,
      [`${ChipsGroup_styles.hostClass}-align-${horizontalAlignment}`]: !!horizontalAlignment
    }),
    id: `${id}-base`
  }, /*#__PURE__*/React__default.createElement(ParagraphPresentation.ParagraphPresentation, {
    className: DomUtils.cleanupClassObject({
      [`${ChipsGroup_styles.hostClass}-group-label`]: true,
      [`${ChipsGroup_styles.hostClass}-no-group-label`]: appearance === "no-text" || groupLabel.trim() === ""
    }),
    id: groupLabelId,
    noMargin: true
  }, groupLabel), /*#__PURE__*/React__default.createElement(Component, {
    className: DomUtils.cleanupClassObject({
      [`${ChipsGroup_styles.hostClass}-group`]: true,
      [`${ChipsGroup_styles.hostClass}-inner-group__${direction || "wrap"}`]: true
    }),
    "aria-labelledby": groupLabelId
  }, Component === "ul" || Component === "ol" ? ReactUtils.fragmentMap(children, (child, index) => (/*#__PURE__*/React__default.createElement("li", {
    key: child.key
  }, /*#__PURE__*/React__default.cloneElement(child, {
    // TODO user might set a ref here, will be overridden
    ref: focusIndex !== undefined && index === Math.min(focusIndex, numChildren - 1) && itemDismissed ? focusItem :
    // @ts-ignore
    child.ref,
    onFocusLoss: () => {
      const newFocusIndex = index === numChildren - 1 ? index - 1 : index;
      if (newFocusIndex >= 0) {
        setFocusIndex(newFocusIndex);
      } else {
        // Fallback Focus management from user if group is empty
        props.onFocusLoss();
      }
    }
  })))) : ReactUtils.fragmentMap(children, (child, index) => /*#__PURE__*/React__default.cloneElement(child, {
    // TODO user might set a ref here, will be overridden
    ref: focusIndex !== undefined && index === Math.min(focusIndex, numChildren - 1) && itemDismissed ? focusItem :
    // @ts-ignore
    child.ref,
    onFocusLoss: () => {
      const newFocusIndex = index === numChildren - 1 ? index - 1 : index;
      if (newFocusIndex >= 0) {
        setFocusIndex(newFocusIndex);
      } else {
        // Fallback Focus management from user if group is empty
        props.onFocusLoss();
      }
    }
  }))));
};

exports.ChipsPresentation = ChipsPresentation;

'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var utilityClassesColor_styles = require('../../../styles/utilityClassesColor.styles.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var ActionPresentation = require('../../Action/shared/ActionPresentation.js');
var CheckboxWrapper = require('../../Checkbox/shared/CheckboxWrapper.js');
var ClickListLayoutContainerPresentation = require('../../ClickList/shared/ClickListLayoutContainer/ClickListLayoutContainerPresentation.js');
var IconPresentation = require('../../Icon/shared/IconPresentation.js');
var RadioWrapper = require('../../Radio/shared/RadioWrapper.js');
var SpinnerPresentation = require('../../Spinner/shared/SpinnerPresentation.js');
var StatusIndicatorPresentation = require('../../StatusIndicator/shared/StatusIndicatorPresentation.js');
var TwoLineItemPresentation = require('../../TwoLineItem/shared/TwoLineItemPresentation.js');
var LabelPresentation = require('../../_Label/LabelPresentation.js');
var ClickListItem_styles = require('./ClickListItem.styles.js');

const defaultProps = {
  onClick: () => {
    /* empty */
  },
  actionRef: () => {
    /* empty */
  },
  onMouseHoverChange: () => {
    /* empty */
  },
  onKeyboardFocusChange: () => {
    /* empty */
  },
  showLinkLabel: true,
  look: "default",
  badgeColor: "primary"
};
const ClickListItemPresentation = ({
  id,
  name,
  className,
  disabled,
  onClick,
  noMargin,
  href,
  actionRef,
  hasMouseHover,
  onMouseHoverChange,
  hasKeyboardFocus,
  onKeyboardFocusChange,
  showLinkLabel,
  linkIcon,
  linkLabel,
  thumbImgSrc,
  thumbText,
  thumbIcon,
  thumbIconVariant,
  thumbIconName,
  thumbIconTitle,
  headline,
  headlineAs = linkIcon ? "strong" : "div",
  subline,
  sublineAs,
  statusColor,
  statusTag,
  statusIndicatorIcon,
  look,
  value,
  onChange,
  badgeText,
  badgeScreenReaderLabel,
  badgeIcon,
  badgeIconVariant,
  badgeColor,
  actions,
  invalid,
  as = "div",
  loading,
  loadingAriaLabel,
  htmlAttrs,
  ...otherProps
}) => {
  const standardArrowRightIcon = icons.interaction_arrows_chevronRight;
  const SelectionComponent = {
    checkbox: CheckboxWrapper.CheckboxWrapper,
    radio: RadioWrapper.RadioWrapper
  }[look];
  const hasSelectionComponent = !!SelectionComponent;
  const isMultiAction = look === "multiaction";
  const actionOnMouseHoverChange = look === "default" ? onMouseHoverChange : undefined;
  const actionOnKeyboardFocusChange = look === "default" ? onKeyboardFocusChange : undefined;
  const mainId = index.useUniqueId(`${ClickListItem_styles.hostClass}`, id);
  const toggleId = index.useUniqueId(`${ClickListItem_styles.hostClass}-toggle`, id && `${id}-toggle`);
  const sublineId = index.useUniqueId(`${ClickListItem_styles.hostClass}-helper-text-`, id && `${id}-helper-text`);
  const badgeId = index.useUniqueId(`${ClickListItem_styles.hostClass}-badge-text-`, id && `${id}-badge-text`);
  // Do not show hover on the line, when there is a checkbox, radio or switch
  const hasLineMouseHover = hasMouseHover && (look === "multiaction" || look === "default");
  /** Add a Conditional Wrapper over the given content */
  const withWrapper = ({
    withAction = false,
    withLabel = false,
    content
  }) => {
    switch (true) {
      case withAction:
        return /*#__PURE__*/React__default.createElement(ActionPresentation.ActionPresentation, {
          id: mainId,
          disabled: disabled,
          href: look === "default" ? href : undefined,
          name: name,
          onClick: onClick,
          actionRef: actionRef,
          onMouseHoverChange: actionOnMouseHoverChange,
          onKeyboardFocusChange: actionOnKeyboardFocusChange,
          fullWidth: true,
          expandToOverlay: true,
          htmlAttrs: {
            "data-lsg-component": "click-list-item-action",
            "aria-describedby": [subline && sublineId, (badgeText || badgeScreenReaderLabel) && badgeId].filter(t => !!t).join(" "),
            ...htmlAttrs
          },
          ...otherProps
        }, content);
      case withLabel:
        return /*#__PURE__*/React__default.createElement(LabelPresentation.LabelPresentation, {
          id: mainId,
          htmlFor: toggleId,
          hasMouseHover: hasMouseHover,
          onMouseHoverChange: onMouseHoverChange,
          disabled: disabled,
          expandToOverlay: true,
          htmlAttrs: {
            "aria-describedby": [badgeText && badgeId].filter(t => !!t).join(" ")
          }
        }, content);
      default:
        return content;
    }
  };
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    className: DomUtils.cleanupClassObject({
      [ClickListItem_styles.hostClass]: true,
      [className]: !!className,
      [utilityClassesColor_styles.utilityClassesBackgroundBaseBefore]: true,
      [utilityClassesColor_styles.utilityClassesBackgroundHoverBefore]: !disabled && hasLineMouseHover,
      [`${ClickListItem_styles.hostClass}__hover`]: hasLineMouseHover,
      [utilityClassesColor_styles.utilityClassesBackgroundFocusBefore]: hasKeyboardFocus,
      [`${ClickListItem_styles.hostClass}__focus`]: hasKeyboardFocus,
      [`${ClickListItem_styles.hostClass}__disabled`]: disabled,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    "aria-disabled": disabled || loading,
    as: as,
    id: `${mainId}-base`,
    "data-lsg-component": "click-list-item"
  }, /*#__PURE__*/React__default.createElement(ClickListLayoutContainerPresentation.ClickListLayoutContainerPresentation
  // TODO check if the layout container still needs to be a separate component
  , {
    // TODO check if the layout container still needs to be a separate component
    left: [statusColor && (/*#__PURE__*/React__default.createElement(StatusIndicatorPresentation.StatusIndicatorPresentation, {
      className: DomUtils.cleanupClassObject({
        [`${ClickListItem_styles.hostClass}__loading`]: loading
      }),
      statusColor: statusColor,
      tag: statusTag,
      icon: statusIndicatorIcon,
      tagHidden: true,
      noMargin: true,
      key: "status"
    }))],
    right: /*#__PURE__*/React__default.createElement(TwoLineItemPresentation.TwoLineItemPresentation, {
      className: DomUtils.cleanupClassObject({
        [`${ClickListItem_styles.hostClass}__loading`]: loading
      }),
      noMargin: true,
      src: thumbImgSrc,
      text: thumbText,
      icon: thumbIcon,
      iconName: thumbIconName,
      iconVariant: thumbIconVariant,
      iconTitle: thumbIconTitle,
      label:
      // set the headline as button, but only if no multiaction, selection component or linklabel ist set
      withWrapper({
        content: headline,
        withAction: !isMultiAction && !hasSelectionComponent && !linkLabel,
        withLabel: hasSelectionComponent
      }),
      labelAs: headlineAs,
      subline: subline,
      sublineAs: sublineAs,
      sublineId: sublineId,
      badgeText: badgeText,
      badgeIcon: badgeIcon,
      badgeIconVariant: badgeIconVariant,
      badgeColor: badgeColor,
      badgeScreenReaderLabel: badgeScreenReaderLabel,
      badgeId: badgeId
    }),
    actions:
    // eslint-disable-next-line no-nested-ternary
    look === "multiaction" ? /*#__PURE__*/React__default.isValidElement(actions) && /*#__PURE__*/React__default.cloneElement(actions, {
      direction: actions.props.direction || "table",
      noMargin: true
    }) : look === "default" ?
    // linkLabel button with icon
    withWrapper({
      withAction: Boolean(linkLabel),
      content: (/*#__PURE__*/React__default.createElement("div", {
        className: DomUtils.cleanupClassObject({
          [`${ClickListItem_styles.hostClass}__loading`]: loading,
          [`${ClickListItem_styles.hostClass}-icon`]: true
        }),
        onMouseEnter: () => onMouseHoverChange(true),
        onMouseLeave: () => onMouseHoverChange(false)
      }, showLinkLabel && linkLabel && (/*#__PURE__*/React__default.createElement("span", {
        className: `${ClickListItem_styles.hostClass}-icon-label`
      }, linkLabel)), (!disabled || disabled && linkIcon) && (/*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
        noMargin: true,
        name: thumbIconName,
        icon: linkIcon || !thumbIconName && standardArrowRightIcon,
        title: !showLinkLabel ? linkLabel : ""
      }))))
    }) : (
    /*#__PURE__*/
    // Checkbox or radio inputs
    React__default.createElement("div", {
      className: `${ClickListItem_styles.hostClass}-icon`
    }, /*#__PURE__*/React__default.createElement(SelectionComponent, {
      id: toggleId,
      noMargin: true,
      disabled: disabled,
      name: name,
      value: value,
      hasMouseHover: hasMouseHover,
      onMouseHoverChange: onMouseHoverChange,
      onChange: onChange,
      invalid: !disabled && invalid,
      // Overwrite inner aria-describedby to connect input with headline and subline
      htmlAttrs: {
        "aria-describedby": [subline && sublineId].filter(t => !!t).join(" ")
      },
      className: DomUtils.cleanupClassObject({
        [`${ClickListItem_styles.hostClass}__loading`]: loading
      })
    })))
  }), loading && (/*#__PURE__*/React__default.createElement(SpinnerPresentation.SpinnerPresentation, {
    expandToOverlay: true,
    variant: "indeterminate",
    size: 24,
    ariaLabel: loadingAriaLabel,
    loading: loading
  })));
};
ClickListItemPresentation.displayName = "ClickListItemPresentation";

exports.ClickListItemPresentation = ClickListItemPresentation;
exports.defaultProps = defaultProps;

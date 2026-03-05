'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var index = require('../../../utils/Hooks/index.js');
var ButtonGroupWrapper = require('../../ButtonGroup/shared/ButtonGroupWrapper.js');
var DrawerPresentation = require('../../Drawer/shared/DrawerPresentation.js');
var IconLinkWrapper = require('../../IconLink/shared/IconLinkWrapper.js');
var IconLinkGroupWrapper = require('../../IconLinkGroup/shared/IconLinkGroupWrapper.js');
var SectionPresentation = require('../../Section/shared/SectionPresentation.js');
var HeaderContainerWrapper = require('../../_HeaderContainer/HeaderContainerWrapper.js');

// @ts-strict-ignore
const LayerPresentation = ({
  id,
  children,
  closeLinkLabel,
  layout = "right",
  noMargin,
  className,
  onCloseClick = () => {
    /* empty */
  },
  open,
  onBackdropClick,
  buttons,
  htmlAttrs,
  ariaLabel,
  ariaLabelledBy,
  returnFocus,
  onFocusLoss = () => {
    /* empty */
  },
  ariaLabelButtons
}) => {
  const isMobile = index.useViewportRange(undefined, "sm");
  // Saves the previous state of open state, so focusLoss is just triggered if state changes from open to close
  const [prevOpen, setPrevOpen] = React__default.useState(undefined);
  React__default.useEffect(() => {
    // Layer toggles from open state to closed state:
    if (prevOpen === true && open === false) {
      setPrevOpen(open);
      onFocusLoss(); // User CallBack function onFocusLoss is triggered
    }
    setPrevOpen(open);
  }, [open]);
  return /*#__PURE__*/React__default.createElement(DrawerPresentation.DrawerPresentation, {
    id: id,
    noMargin: noMargin,
    className: className,
    layout: `layer-${layout}`,
    open: open,
    returnFocus: returnFocus,
    onBackdropClick: closeLinkLabel ? onBackdropClick || onCloseClick : undefined,
    htmlAttrs: htmlAttrs,
    dataComponentType: "layer",
    ...(ariaLabel && !ariaLabelledBy && {
      ariaLabel
    }),
    ...(ariaLabelledBy && !ariaLabel && {
      ariaLabelledBy
    })
  }, /*#__PURE__*/React__default.createElement(HeaderContainerWrapper.HeaderContainerWrapper, {
    width: "layer",
    theme: "elevated",
    isMobile: !buttons && isMobile,
    position: "sticky",
    topLeft: closeLinkLabel && (/*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
      noMargin: true,
      direction: buttons ? "collapse-sm" : " horizontal"
    }, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
      label: closeLinkLabel,
      icon: icons.interaction_arrows_chevronLeft,
      onClick: onCloseClick
    }))),
    topRight: buttons ? (/*#__PURE__*/React__default.createElement(ButtonGroupWrapper.ButtonGroupWrapper, {
      noMargin: true,
      align: "right",
      dontFlipFocus: true,
      ariaLabel: ariaLabelButtons
    }, buttons)) : undefined
  }), /*#__PURE__*/React__default.createElement(SectionPresentation.SectionPresentation, {
    spacing: layout === "right-25" ? "technical" : "marketing"
  }, children));
};
LayerPresentation.displayName = "LayerPresentation";

exports.LayerPresentation = LayerPresentation;

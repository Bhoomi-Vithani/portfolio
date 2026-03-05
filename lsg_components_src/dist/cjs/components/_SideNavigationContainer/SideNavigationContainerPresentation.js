'use strict';

var components = require('@lsg/components');
var icons = require('@lsg/icons');
var React__default = require('react');
var zIndex = require('../../styles/zIndex.js');
var DomUtils = require('../../utils/DomUtils.js');
var index = require('../../utils/Hooks/index.js');
var Localization = require('../../utils/Localization.js');
var DrawerPresentation = require('../Drawer/shared/DrawerPresentation.js');
var IconLinkWrapper = require('../IconLink/shared/IconLinkWrapper.js');
var IconLinkGroupWrapper = require('../IconLinkGroup/shared/IconLinkGroupWrapper.js');
var SectionPresentation = require('../Section/shared/SectionPresentation.js');
var ThemePresentation = require('../Theme/shared/ThemePresentation.js');
var HeaderContainerPresentation = require('../_HeaderContainer/HeaderContainerPresentation.js');
var SideNavigationContainer_styles = require('./SideNavigationContainer.styles.js');

// @ts-strict-ignore
const SideNavigationContainerPresentation = ({
  contentId,
  children,
  className,
  hasBurgerMenu,
  isDesktopHeaderSize,
  menuOpen,
  onMenuOpenChange,
  navigationArea,
  noMargin,
  theme,
  contentRef,
  drawerAttrs,
  isClosedArea,
  pageTitle,
  headerTitleId
}) => {
  const sidebarRef = React__default.useRef(null);
  const [sidebarWidth, setSidebarWidth] = React__default.useState(undefined);
  const updateSidebarWidth = () => {
    if (sidebarRef.current) {
      setSidebarWidth(sidebarRef.current.offsetWidth - sidebarRef.current.clientWidth);
    }
  };
  React__default.useEffect(updateSidebarWidth);
  index.useResize(updateSidebarWidth);
  const Header = menuOpen ? "header" : "div";
  const headline = isClosedArea ? (/*#__PURE__*/React__default.createElement(components.Headline, {
    as: "span",
    size: "h5",
    id: headerTitleId
  }, pageTitle)) : null;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, hasBurgerMenu && (/*#__PURE__*/React__default.createElement(Header, {
    className: ThemePresentation.getThemeClass(theme)
  }, /*#__PURE__*/React__default.createElement(DrawerPresentation.DrawerPresentation, {
    open: menuOpen,
    onBackdropClick: () => onMenuOpenChange(false),
    layout: "side-menu-left",
    htmlAttrs: drawerAttrs
  }, /*#__PURE__*/React__default.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: zIndex.zIndex.zHeader
    }
  }, /*#__PURE__*/React__default.createElement(HeaderContainerPresentation.HeaderContainerPresentation, {
    width: "layer",
    isMobile: !isDesktopHeaderSize,
    noSemanticElements: true,
    topLeft: /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
      noMargin: true
    }, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
      label: Localization.texts.lsg.component.SideNavigation.closeMenu,
      onClick: () => onMenuOpenChange(false),
      icon: icons.interaction_arrows_chevronLeft
    }))
  })), noMargin ? navigationArea : /*#__PURE__*/React__default.createElement(SectionPresentation.SectionPresentation, null, navigationArea)))), /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [SideNavigationContainer_styles.mainClass]: true,
      [`${SideNavigationContainer_styles.mainClass}__side-navigation`]: !hasBurgerMenu && navigationArea
    })
  }, !hasBurgerMenu && navigationArea && (/*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("aside", {
    className: DomUtils.cleanupClassObject({
      [`${SideNavigationContainer_styles.mainClass}-navigation`]: true,
      [ThemePresentation.getThemeClass(theme)]: true
    }),
    ref: sidebarRef
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${SideNavigationContainer_styles.mainClass}-fade-in`
  }), noMargin ? (/*#__PURE__*/React__default.createElement(React__default.Fragment, null, headline, navigationArea)) : (/*#__PURE__*/React__default.createElement(SectionPresentation.SectionPresentation, null, headline, navigationArea)), /*#__PURE__*/React__default.createElement("div", {
    className: `${SideNavigationContainer_styles.mainClass}-fade-out`
  })), theme !== "dark" && (/*#__PURE__*/React__default.createElement("div", {
    className: `${SideNavigationContainer_styles.mainClass}-scrollbar-cover`,
    style: {
      width: sidebarWidth
    }
  })))), /*#__PURE__*/React__default.createElement("div", {
    id: contentId,
    className: `${SideNavigationContainer_styles.mainClass}-content`,
    ref: contentRef
  }, children)));
};
SideNavigationContainerPresentation.displayName = "SideNavigationContainerPresentation";

exports.SideNavigationContainerPresentation = SideNavigationContainerPresentation;

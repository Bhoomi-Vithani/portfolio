'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var Localization = require('../../../utils/Localization.js');
var DrawerPresentation = require('../../Drawer/shared/DrawerPresentation.js');
var IconLinkWrapper = require('../../IconLink/shared/IconLinkWrapper.js');
var IconLinkGroupWrapper = require('../../IconLinkGroup/shared/IconLinkGroupWrapper.js');
var SectionPresentation = require('../../Section/shared/SectionPresentation.js');
var ThemePresentation = require('../../Theme/shared/ThemePresentation.js');
var HeaderContainerWrapper = require('../../_HeaderContainer/HeaderContainerWrapper.js');
var LogoPresentation = require('../../_Logo/LogoPresentation.js');
var NavigationBarPresentation = require('../../_NavigationBar/NavigationBarPresentation.js');
var NavigationBlockWrapper = require('../../_NavigationBlock/shared/NavigationBlockWrapper.js');
var SimpleHeader_styles = require('./SimpleHeader.styles.js');

// @ts-strict-ignore
const SimpleHeaderPresentation = ({
  id,
  className,
  noMargin,
  isStencilHost,
  activeRef,
  activeElement,
  isSticky,
  isMobile,
  logoSrcMobile,
  logoSrcDesktop,
  logoHref,
  logoLabel,
  logoHtmlAttrs,
  logoDisabled,
  logoActionAs,
  logoActionProps,
  logoName,
  onLogoClick,
  segmentLabel,
  navigationTree,
  navigationAriaLabel,
  navigationActionAs,
  value,
  onChange,
  name,
  iconLinksInteraction,
  onOpenChange,
  onForceMobileChange,
  open,
  mobileOpenMenuButtonRef,
  menuFlyoutAriaLabel,
  handleOnIconClick
}) => {
  const logoId = index.useUniqueId(`${SimpleHeader_styles.hostClass}-logo`, id && `${id}-logo`);
  const defaultLogoLabel = logoSrcMobile || logoSrcDesktop ? Localization.texts.lsg.component.Logo.actionHome : Localization.texts.lsg.component.Logo.actionCoba;
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [SimpleHeader_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    isStencilHost: isStencilHost,
    "data-lsg-component": "simple-header"
  }, /*#__PURE__*/React__default.createElement(HeaderContainerWrapper.HeaderContainerWrapper, {
    width: "page",
    theme: "dark",
    activeElement: activeElement,
    isFullUnderline: false,
    position: isSticky ? "fixed" : undefined,
    isMobile: isMobile,
    onForceMobileChange: onForceMobileChange,
    logo: /*#__PURE__*/React__default.createElement(LogoPresentation.LogoPresentation, {
      id: logoId,
      variant: isMobile ? "mobile" : "horizontal",
      disabled: logoDisabled,
      href: logoHref,
      onClick: onLogoClick,
      actionAs: logoActionAs,
      actionProps: logoActionProps,
      logoLabel: logoLabel || defaultLogoLabel,
      srcCustom: isMobile ? logoSrcMobile : logoSrcDesktop,
      fitToBox: true,
      logoName: logoName,
      // if this link is the currently opened page, set aria-current to page
      htmlAttrs: logoName === value ? {
        ...logoHtmlAttrs,
        "aria-current": "page"
      } : logoHtmlAttrs
    }),
    segmentLabel: segmentLabel,
    topRightAriaLabel: !open ? navigationAriaLabel : undefined,
    topRight: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, !isMobile && navigationTree && navigationTree.length > 0 && (/*#__PURE__*/React__default.createElement(NavigationBarPresentation.NavigationBarPresentation, {
      className: `${SimpleHeader_styles.hostClass}-navigation`,
      navigationTree: navigationTree,
      navigationActionAs: navigationActionAs,
      value: value,
      activeRef: activeRef,
      onChange: (v, e) => onChange(v, name, e)
    })), (iconLinksInteraction || isMobile) && (/*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
      noMargin: true,
      direction: "collapse-xs"
    }, iconLinksInteraction, isMobile && navigationTree && navigationTree.length > 0 && (/*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
      label: Localization.texts.lsg.component.SimpleHeader.openMenu,
      icon: icons.interaction___menu,
      appearance: "no-text",
      onClick: () => {
        onOpenChange(true);
      },
      actionRef: mobileOpenMenuButtonRef,
      expanded: false
    })))))
  }), /*#__PURE__*/React__default.createElement(ThemePresentation.ThemePresentation, {
    componentContext: true,
    componentName: "header"
  }, /*#__PURE__*/React__default.createElement(DrawerPresentation.DrawerPresentation, {
    id: `side-menu-${id}`,
    open: isMobile && open,
    layout: "side-menu-right",
    onBackdropClick: () => onOpenChange(undefined),
    ariaLabel: menuFlyoutAriaLabel,
    setPersistentFocus: true
  }, /*#__PURE__*/React__default.createElement("nav", {
    "aria-label": navigationAriaLabel
  }, /*#__PURE__*/React__default.createElement(HeaderContainerWrapper.HeaderContainerWrapper, {
    width: "layer",
    theme: "elevated",
    noSemanticElements: true,
    isMobile: isMobile,
    topRight:
    /*#__PURE__*/
    // mobile close menu button
    React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
      noMargin: true
    }, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
      label: Localization.texts.lsg.component.SimpleHeader.closeMenu,
      icon: icons.interaction___close,
      onClick: () => {
        onOpenChange(undefined);
        handleOnIconClick();
      },
      appearance: "no-text",
      expanded: true
    }))
  }), /*#__PURE__*/React__default.createElement(SectionPresentation.SectionPresentation, null, /*#__PURE__*/React__default.createElement(NavigationBlockWrapper.NavigationBlockWrapper, {
    navigationTree: navigationTree,
    navigationActionAs: navigationActionAs,
    startLevel: "page",
    onChange: (v, e) => onChange(v, name, e),
    value: value
  }))))));
};
SimpleHeaderPresentation.displayName = "SimpleHeaderPresentation";

exports.SimpleHeaderPresentation = SimpleHeaderPresentation;

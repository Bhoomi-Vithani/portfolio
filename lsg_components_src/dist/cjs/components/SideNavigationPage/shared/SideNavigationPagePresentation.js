'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var Localization = require('../../../utils/Localization.js');
var NavigationUtils = require('../../../utils/NavigationUtils.js');
var IconLinkWrapper = require('../../IconLink/shared/IconLinkWrapper.js');
var IconLinkGroupWrapper = require('../../IconLinkGroup/shared/IconLinkGroupWrapper.js');
var LiveRegion = require('../../LiveRegion/LiveRegion.js');
var ParagraphPresentation = require('../../Paragraph/shared/ParagraphPresentation.js');
var PortalHeader_styles = require('../../PortalHeader/shared/PortalHeader.styles.js');
var SearchPresentation = require('../../Search/shared/SearchPresentation.js');
var SectionPresentation = require('../../Section/shared/SectionPresentation.js');
var HeaderContainerWrapper = require('../../_HeaderContainer/HeaderContainerWrapper.js');
var LogoPresentation = require('../../_Logo/LogoPresentation.js');
var NavigationBlockWrapper = require('../../_NavigationBlock/shared/NavigationBlockWrapper.js');
var SideNavigationContainerPresentation = require('../../_SideNavigationContainer/SideNavigationContainerPresentation.js');
var variables = require('../../../styles/variables.js');
var animation = require('../../../utils/Hooks/animation.js');

// @ts-strict-ignore
const SideNavigationPagePresentation = ({
  id,
  className,
  noMargin,
  isStencilHost,
  searchDisabled,
  searchInvisible = false,
  searchPlaceholder,
  searchFormHtmlAttrs,
  searchHtmlAttrs,
  navigationTree,
  navigationActionAs,
  indicatorAtLevel,
  logoHref,
  logoActionAs,
  logoActionProps,
  logoLabel,
  logoAriaLabel,
  logoDisabled,
  logoHtmlAttrs,
  onLogoClick,
  value,
  onChange,
  iconLinksBottom,
  onSearchChange,
  searchValue,
  searchName,
  name,
  children,
  expandAll,
  navigationAriaLabel
}) => {
  const logoId = index.useUniqueId(`${PortalHeader_styles.hostClass}-logo`, id && `${id}-logo`);
  const navigationId = index.useUniqueId(`${PortalHeader_styles.hostClass}-logo`, id && `${id}-navigation`);
  const [menuOpen, setMenuOpen] = React__default.useState(false);
  const isMobile = index.useViewportRange(undefined, "md");
  const liveRegionRef = React__default.useRef(null);
  const contentRef = React__default.useRef(null);
  // close menu when value changes. This is useful for react router, that cannot trigger and onClick.
  const previousValue = index.usePrevious(value);
  if (previousValue !== value && menuOpen) {
    setTimeout(() => {
      setMenuOpen(false);
    }, animation.isPreferReducedMotion() ? 0 : variables.animationDuration.slowest);
  }
  // Set focus to the content container, when a menu item is clicked.
  // https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/
  const focusDeepestChild = element => {
    if (!element || !element.children || element.children.length === 0) {
      element.setAttribute("tabIndex", "-1");
      element.focus();
    } else {
      focusDeepestChild(element.children[0]);
    }
  };
  const logo = /*#__PURE__*/React__default.createElement(LogoPresentation.LogoPresentation, {
    id: logoId,
    variant: "mobile",
    logoLabel: logoAriaLabel,
    disabled: logoDisabled,
    onClick: onLogoClick,
    href: logoHref,
    actionAs: logoActionAs,
    actionProps: logoActionProps,
    fitToBox: true,
    htmlAttrs: logoHtmlAttrs
  });
  const sideNavigationContent = /*#__PURE__*/React__default.createElement(React__default.Fragment, null, !isMobile && (/*#__PURE__*/React__default.createElement(HeaderContainerWrapper.HeaderContainerWrapper, {
    className: `${className}header-desktop`,
    logo: logo,
    width: "sidebar",
    noSemanticElements: true,
    isMobile: true,
    topLeft: /*#__PURE__*/React__default.createElement(ParagraphPresentation.ParagraphPresentation, {
      horizontalAlignment: "left",
      size: "copy-text",
      noMargin: true
    }, logoLabel)
  })), /*#__PURE__*/React__default.createElement(SectionPresentation.SectionPresentation, {
    spacing: "side-navigation-page",
    separator: true,
    as: "div"
  }, !searchInvisible && (/*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(SearchPresentation.SearchPresentation, {
    appearance: "default",
    value: searchValue,
    label: searchPlaceholder,
    htmlAttrs: {
      autoComplete: "off",
      "aria-autocomplete": "list",
      "aria-controls": navigationId,
      ...searchHtmlAttrs
    },
    name: searchName,
    disabled: searchDisabled,
    formAttrs: searchFormHtmlAttrs,
    onChange: (v, n, e) => {
      onSearchChange(v, n, e);
      // Let blind users know how many results their search shows (counts for sub menu items as well)
      setTimeout(() => {
        liveRegionRef.current?.announce(NavigationUtils.deepFlatten(navigationTree).length.toString() + Localization.texts.lsg.component.SideNavigation.results);
      }, 50);
    }
  }), /*#__PURE__*/React__default.createElement(LiveRegion.LiveRegion, {
    ref: liveRegionRef
  }))), navigationTree && (/*#__PURE__*/React__default.createElement(NavigationBlockWrapper.NavigationBlockWrapper, {
    containerAs: "nav",
    navigationAriaLabel: navigationAriaLabel,
    navigationTree: navigationTree,
    navigationActionAs: navigationActionAs,
    value: value,
    id: navigationId,
    startLevel: indicatorAtLevel,
    expandAll: expandAll,
    onChange: (targetValue, e) => {
      // Every navigation element used to open a sub-menu should not be used to show new page content at the same time.
      // See disclosure pattern: https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/
      if (!NavigationUtils.hasItemChildren(targetValue, navigationTree) || expandAll) {
        focusDeepestChild(contentRef.current);
      }
      onChange(targetValue, name, e);
    }
  }))), /*#__PURE__*/React__default.createElement(SectionPresentation.SectionPresentation, {
    spacing: "side-navigation-page",
    as: "div"
  }, iconLinksBottom && /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
    direction: "vertical"
  }, iconLinksBottom)));
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    isStencilHost: isStencilHost,
    "data-lsg-component": "side-navigation-page"
  }, isMobile && (/*#__PURE__*/React__default.createElement(HeaderContainerWrapper.HeaderContainerWrapper, {
    theme: "dark",
    position: "sticky",
    noSemanticElements: menuOpen,
    logo: /*#__PURE__*/React__default.createElement(LogoPresentation.LogoPresentation, {
      id: logoId,
      variant: "mobile",
      logoLabel: logoAriaLabel,
      disabled: logoDisabled,
      onClick: onLogoClick,
      actionAs: logoActionAs,
      actionProps: logoActionProps,
      htmlAttrs: logoHtmlAttrs,
      fitToBox: true
    }),
    width: "page",
    isMobile: true,
    topLeft: /*#__PURE__*/React__default.createElement(ParagraphPresentation.ParagraphPresentation, {
      horizontalAlignment: "left",
      size: "copy-text",
      noMargin: true
    }, logoLabel),
    topRight: /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
      label: Localization.texts.lsg.component.SideNavigation.openMenu,
      icon: icons.interaction___menu,
      onClick: () => setMenuOpen(!menuOpen),
      appearance: "no-text"
    })
  })), /*#__PURE__*/React__default.createElement(SideNavigationContainerPresentation.SideNavigationContainerPresentation, {
    theme: "dark",
    noMargin: true,
    hasBurgerMenu: isMobile,
    menuOpen: menuOpen,
    onMenuOpenChange: () => setMenuOpen(!menuOpen),
    navigationArea: sideNavigationContent,
    contentRef: contentRef
  }, children));
};
SideNavigationPagePresentation.displayName = "SideNavigationPagePresentation";

exports.SideNavigationPagePresentation = SideNavigationPagePresentation;

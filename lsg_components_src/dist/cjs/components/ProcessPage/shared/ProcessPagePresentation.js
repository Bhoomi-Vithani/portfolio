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
var ProcessNavigationPresentation = require('../../ProcessNavigation/shared/ProcessNavigationPresentation.js');
var HeaderContainerWrapper = require('../../_HeaderContainer/HeaderContainerWrapper.js');
var LogoPresentation = require('../../_Logo/LogoPresentation.js');
var NavigationBlockWrapper = require('../../_NavigationBlock/shared/NavigationBlockWrapper.js');
var NavigationLinkWrapper = require('../../_NavigationLink/NavigationLinkWrapper.js');
var NavigationLinkGroupPresentation = require('../../_NavigationLinkGroup/NavigationLinkGroupPresentation.js');
var SideNavigationContainerPresentation = require('../../_SideNavigationContainer/SideNavigationContainerPresentation.js');
var PortalMetaBarPresentation = require('./PortalMetaBar/PortalMetaBarPresentation.js');
var ProcessPage_styles = require('./ProcessPage.styles.js');

// @ts-strict-ignore
const ProcessPagePresentation = ({
  id: idProp,
  className,
  noMargin,
  children,
  headerTitle,
  headerTitleAs = "span",
  hasPortalFooter,
  progress,
  menuOpen,
  onMenuOpenChange,
  iconLinks,
  countIconLinks,
  navigationTree,
  navigationActionAs,
  navigationLabel,
  navigationAriaLabel = Localization.texts.lsg.component.ProcessPage.navigationAriaLabel,
  footerNavigationTree,
  footerNavigationAriaLabel,
  isMobile,
  forceBurgerMenu,
  value,
  newNavigation = false,
  noSemanticElements = false,
  stickyNavigation = false,
  isClosedArea,
  onChange = () => {
    /* empty */
  }
}) => {
  const hasBurgerMenu = !!navigationTree && (isMobile || forceBurgerMenu);
  const id = index.useUniqueId(`${ProcessPage_styles.hostClass}-`, idProp);
  const headerTitleId = `${id}-header-title`;
  const contentId = `${id}-content`;
  const navigationArea = navigationTree && (/*#__PURE__*/React__default.createElement("nav", {
    "aria-label": navigationAriaLabel
  }, newNavigation ? (/*#__PURE__*/React__default.createElement(ProcessNavigationPresentation.ProcessNavigationPresentation, {
    navigationTree: NavigationUtils.getNamedNavigationTree(navigationTree),
    navigationActionAs: navigationActionAs,
    value: value
  })) : (/*#__PURE__*/React__default.createElement(NavigationBlockWrapper.NavigationBlockWrapper, {
    isProcessNavigation: true,
    startLevel: "page",
    navigationTree: NavigationUtils.getNamedNavigationTree(navigationTree),
    navigationActionAs: navigationActionAs,
    clusterLabel: navigationLabel,
    value: value,
    onChange: onChange
  }))));
  // Todo: This topLeftMaxWidth thingy is just a workaround solution and could be reworked in the future
  // if we come up with something better.
  const topLeftMaxWidth = `calc(100% - ${50 * (countIconLinks || 0)}px`;
  const logoId = index.useUniqueId(`${ProcessPage_styles.hostClass}-logo`, id && `${id}-logo`);
  const footerNavigationAriaLabelText = footerNavigationAriaLabel || Localization.texts.lsg.component.ProcessPage.footerNavigationAriaLabel;
  const HeaderTitleComponent = headerTitleAs;
  React__default.useEffect(() => {
    // Proposed pattern für process pages: If there's a h1 in the content, add an aria-describedby of the header
    // title for better accessibility.
    // E.g. if the header title is "Schritt 1 von 5" and the h1 in the content is "Personendaten", the screen reader
    // will read out "Personendaten, Schritt 1 von 5".
    // The header title e.g. "Schritt 1 von 5 - Personendaten" should not be a in a h1 element, because it is not
    // the main heading of the page.
    const h1 = document.querySelector(`#${contentId.replace(/[:]/g, "\\:")} h1`);
    if (h1 && !h1.hasAttribute("aria-describedby")) {
      h1.setAttribute("aria-describedby", headerTitleId);
    }
  });
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    className: DomUtils.cleanupClassObject({
      [`${ProcessPage_styles.hostClass}`]: true,
      [className]: className,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${prefix.lsgPre}sidebar__anchor`]: !!navigationTree,
      [`${ProcessPage_styles.hostClass}__menu`]: !!navigationTree
    }),
    id: id
  }, isClosedArea && hasBurgerMenu && (/*#__PURE__*/React__default.createElement("div", {
    className: `${ProcessPage_styles.hostClass}-inline-header`
  }, /*#__PURE__*/React__default.createElement(HeaderTitleComponent, {
    id: headerTitleId,
    className: `${ProcessPage_styles.hostClass}-title`
  }, headerTitle), /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
    maxWidth: "100%"
  }, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
    label: headerTitle,
    icon: icons.interaction___listTwo,
    onClick: () => onMenuOpenChange(!menuOpen),
    htmlAttrs: {
      "aria-label": Localization.texts.lsg.component.ProcessPage.openMenu,
      "aria-expanded": menuOpen
    },
    // iconName={"Open Menu"}
    textEllipsis: true
  })))), !isClosedArea && (/*#__PURE__*/React__default.createElement(HeaderContainerWrapper.HeaderContainerWrapper, {
    width: "page",
    progress: progress,
    noSemanticElements: noSemanticElements,
    logo: hasBurgerMenu ? undefined : (/*#__PURE__*/React__default.createElement(LogoPresentation.LogoPresentation, {
      disabled: true,
      id: logoId,
      variant: "mobile",
      fitToBox: true
    })),
    position: stickyNavigation ? "sticky" : "content",
    topLeft: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, !hasBurgerMenu && (/*#__PURE__*/React__default.createElement(HeaderTitleComponent, {
      id: headerTitleId,
      className: `${ProcessPage_styles.hostClass}-title`
    }, headerTitle)), hasBurgerMenu && (/*#__PURE__*/React__default.createElement("div", {
      style: {
        display: "flex"
      }
    }, /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
      noMargin: true,
      maxWidth: "100%"
    }, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
      label: /*#__PURE__*/React__default.createElement("span", {
        id: headerTitleId
      }, headerTitle),
      icon: icons.interaction___menu,
      onClick: () => onMenuOpenChange(!menuOpen),
      htmlAttrs: {
        "aria-label": Localization.texts.lsg.component.ProcessPage.openMenu,
        "aria-expanded": menuOpen
      },
      // iconName={"Open Menu"}
      textEllipsis: true
    }))))),
    topLeftMaxWidth: topLeftMaxWidth,
    topRight: /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
      noMargin: true,
      direction: "collapse-sm"
    }, iconLinks),
    isMobile: isMobile
  })), /*#__PURE__*/React__default.createElement(SideNavigationContainerPresentation.SideNavigationContainerPresentation, {
    contentId: `${id}-content`,
    hasBurgerMenu: hasBurgerMenu,
    isDesktopHeaderSize: !isMobile,
    menuOpen: menuOpen,
    onMenuOpenChange: onMenuOpenChange,
    navigationArea: navigationArea,
    drawerAttrs: {
      "aria-label": Localization.texts.lsg.component.ProcessPage.processDialog
    },
    isClosedArea: isClosedArea,
    pageTitle: headerTitle,
    headerTitleId: headerTitleId
  }, children, (footerNavigationTree || hasPortalFooter) && (/*#__PURE__*/React__default.createElement("footer", {
    className: `${ProcessPage_styles.hostClass}-footer`
  }, hasPortalFooter && (/*#__PURE__*/React__default.createElement(PortalMetaBarPresentation.PortalMetaBarPresentation, {
    footerNavigationAriaLabel: footerNavigationAriaLabelText
  })) || (/*#__PURE__*/React__default.createElement("nav", {
    "aria-label": footerNavigationAriaLabelText
  }, /*#__PURE__*/React__default.createElement(NavigationLinkGroupPresentation.NavigationLinkGroupPresentation, {
    centeredLayout: true
  }, footerNavigationTree && footerNavigationTree.map((item, i) => (/*#__PURE__*/React__default.createElement(NavigationLinkWrapper.NavigationLinkWrapper, {
    key: i,
    ...item,
    actionAs: item.actionAs || navigationActionAs
  }, item.label))))))))));
};
ProcessPagePresentation.displayName = "ProcessPagePresentation";

exports.ProcessPagePresentation = ProcessPagePresentation;

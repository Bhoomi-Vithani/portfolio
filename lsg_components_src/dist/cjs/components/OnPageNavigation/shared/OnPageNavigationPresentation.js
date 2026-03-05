'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var Localization = require('../../../utils/Localization.js');
var NavigationUtils = require('../../../utils/NavigationUtils.js');
var ResizeEvents = require('../../../utils/windowEvents/ResizeEvents.js');
var ScrollEvents = require('../../../utils/windowEvents/ScrollEvents.js');
var ButtonPresentation = require('../../Button/shared/ButtonPresentation.js');
var DrawerPresentation = require('../../Drawer/shared/DrawerPresentation.js');
var IconLinkWrapper = require('../../IconLink/shared/IconLinkWrapper.js');
var IconLinkGroupWrapper = require('../../IconLinkGroup/shared/IconLinkGroupWrapper.js');
var JumpLinksPresentation = require('../../JumpLinks/shared/JumpLinksPresentation.js');
var SectionPresentation = require('../../Section/shared/SectionPresentation.js');
var HeaderContainerWrapper = require('../../_HeaderContainer/HeaderContainerWrapper.js');
var IndicatorWrapper = require('../../_Indicator/shared/IndicatorWrapper.js');
var NavigationBarPresentation = require('../../_NavigationBar/NavigationBarPresentation.js');
var NavigationBlockWrapper = require('../../_NavigationBlock/shared/NavigationBlockWrapper.js');
var OnPageNavigation_styles = require('./OnPageNavigation.styles.js');

const Div = /*#__PURE__*/React__default.forwardRef((props, ref) => (/*#__PURE__*/React__default.createElement("div", {
  ...props,
  ref: ref
})));
const OnPageNavigationPresentation = ({
  ...props
}) => {
  const {
    id,
    className,
    noMargin,
    ctaLabel,
    ctaHref,
    ctaActionAs,
    ctaActionProps,
    ctaHtmlAttrs,
    ctaName,
    navigationActionAs,
    activeElementInline,
    activeRefInline,
    onCtaClick,
    backToTopHref,
    onBackToTopClick,
    backToTopHtmlAttrs
  } = props;
  const containerElement = React__default.useRef(null);
  const footerElements = Array.from(document.getElementsByClassName(`${prefix.lsgPre}footer`));
  const [activeElementName, setActiveElementName] = React__default.useState("");
  const [mobileCtaVisible, setMobileCtaVisible] = React__default.useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = React__default.useState(false);
  const [open, setOpen] = React__default.useState(false);
  const [activeElementHeader, setActiveElementHeader] = React__default.useState(undefined);
  const navigationTree = props.navigationTree ? props.navigationTree.map(JumpLinksPresentation.addHref) : [];
  const isMobile = index.useViewportRange(undefined, "sm");
  const handleVisibility = activeElementId => {
    const val = NavigationUtils.getNamedNavigationTree(navigationTree).find(item => item.targetId === activeElementId)?.name;
    if (val) setActiveElementName(val);
  };
  const handleScroll = () => {
    const header = containerElement?.current?.parentElement;
    const isHeaderVisibleNew = header ? header.getBoundingClientRect().bottom <= -1 : false;
    if (isHeaderVisibleNew !== isHeaderVisible) {
      setIsHeaderVisible(isHeaderVisibleNew);
    }
    const mobileCtaVisibleNew = footerElements?.reduce((acc, element) => acc && element.getBoundingClientRect().top > window.innerHeight, true);
    if (mobileCtaVisibleNew !== mobileCtaVisible) {
      setMobileCtaVisible(mobileCtaVisibleNew);
    }
  };
  const handleChange = newName => {
    const targetId = navigationTree.find(item => item.name === newName)?.targetId;
    if (targetId) document.getElementById(targetId)?.focus();
    if (isMobile) {
      setOpen(false);
    }
  };
  React__default.useEffect(() => {
    ScrollEvents.addScrollCallback(handleScroll);
    ResizeEvents.addResizeCallback(handleScroll);
    return () => {
      ScrollEvents.removeScrollCallback(handleScroll);
      ResizeEvents.removeResizeCallback(handleScroll);
    };
  });
  React__default.useEffect(() => {
    const idTargets = navigationTree.flatMap(item => item.targetId ? [item.targetId] : []);
    const offset = window.innerHeight * 0.2;
    ScrollEvents.addIndicatorCallback(handleVisibility, idTargets, offset);
    navigationTree.forEach(item => {
      if (item.targetId) {
        const section = document.getElementById(item.targetId)?.firstChild;
        const firstChild = section?.firstChild ?? null;
        const anchor = document.createElement("a");
        anchor.setAttribute("id", item.targetId);
        anchor.setAttribute("style", "display: block; position: relative;");
        anchor.setAttribute("tabIndex", "-1");
        section?.insertBefore(anchor, firstChild);
        // Adjust old ID to avoid duplicates
        document.getElementById(item.targetId)?.setAttribute("id", `${item.targetId}-1`);
      }
    });
    return () => {
      ScrollEvents.removeIndicatorCallback(handleVisibility);
    };
  }, []);
  // Add a "Scroll to" or "Springe zu" to the menu points for better A11Y
  const navigationTreeWithLabel = navigationTree.map(obj => ({
    htmlAttrs: {
      "aria-label": `${Localization.texts.lsg.component.OnPageNavigation.scrollTo} ${obj.label}`,
      ...obj.htmlAttrs
    },
    ...obj
  }));
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [OnPageNavigation_styles.hostClass]: true,
      ...(className ? {
        [className]: true
      } : null),
      [`${OnPageNavigation_styles.hostClass}__mobile`]: isMobile,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    "data-lsg-component": "on-page-navigation"
  }, /*#__PURE__*/React__default.createElement(Div, {
    key: "desktopNavigation",
    ref: containerElement,
    className: `${OnPageNavigation_styles.hostClass}-inline`,
    style: isHeaderVisible ? {
      display: "none"
    } : {}
  }, !isMobile && (/*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(NavigationBarPresentation.NavigationBarPresentation, {
    navigationAriaLabel: "nav",
    navigationTree: NavigationUtils.getNamedNavigationTree(navigationTreeWithLabel),
    value: activeElementName,
    onChange: handleChange,
    activeRef: activeRefInline
  }), /*#__PURE__*/React__default.createElement(IndicatorWrapper.IndicatorWrapper, {
    activeElement: activeElementInline
  }), ctaLabel && (/*#__PURE__*/React__default.createElement(ButtonPresentation.ButtonPresentation, {
    className: `${OnPageNavigation_styles.hostClass}-cta-desktop`,
    key: "cta",
    noMargin: true,
    href: ctaHref,
    actionAs: ctaActionAs,
    actionProps: ctaActionProps,
    htmlAttrs: ctaHtmlAttrs,
    name: ctaName,
    onClick: onCtaClick,
    label: ctaLabel
  }))))), /*#__PURE__*/React__default.createElement(HeaderContainerWrapper.HeaderContainerWrapper, {
    key: "mobileView",
    width: "layer",
    className: DomUtils.cleanupClassObject({
      [`${OnPageNavigation_styles.hostClass}-header__hidden`]: !isHeaderVisible
    }),
    activeElement: isMobile ? undefined : activeElementHeader,
    isFullUnderline: false,
    isHidden: !isHeaderVisible,
    // TODO check if stick="sticky" works here
    position: "fixed",
    isMobile: isMobile,
    topLeftMaxWidth: isMobile ? `calc(100% - 40px` : undefined,
    topLeft: isMobile ? (/*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
      noMargin: true,
      maxWidth: "100%"
    }, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
      label: Localization.texts.lsg.component.SideNavigation.openMenu,
      key: "menu",
      icon: icons.interaction___more02,
      appearance: "no-text",
      onClick: () => setOpen(true)
    }), /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
      label: NavigationUtils.getNamedNavigationTree(navigationTreeWithLabel).find(item => item.name === activeElementName)?.label,
      key: "iconlink",
      appearance: "no-icon",
      textEllipsis: true
    }))) : (/*#__PURE__*/React__default.createElement(NavigationBarPresentation.NavigationBarPresentation, {
      navigationAriaLabel: "nav",
      navigationTree: NavigationUtils.getNamedNavigationTree(navigationTreeWithLabel),
      navigationActionAs: navigationActionAs,
      value: activeElementName,
      onChange: handleChange,
      activeRef: r => setActiveElementHeader(r)
    })),
    topRight: isMobile ? (/*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
      noMargin: true
    }, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
      label: Localization.texts.lsg.component.SideNavigation.openMenu,
      icon: icons.interaction_arrows_arrowUp,
      appearance: "no-text",
      href: "#"
    }))) : (/*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
      noMargin: true
    }, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
      label: Localization.texts.lsg.component.OnPageNavigation.backtoTop,
      key: "iconlink",
      icon: icons.interaction_arrows_arrowUp,
      appearance: "no-text",
      href: backToTopHref,
      onClick: (p1, p2) => {
        if (onBackToTopClick) {
          onBackToTopClick(p1, p2);
        } else {
          try {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth"
            });
          } catch (_) {
            window.scrollTo(0, 0);
          }
        }
      },
      htmlAttrs: backToTopHtmlAttrs
    })), ctaLabel && !isMobile && (/*#__PURE__*/React__default.createElement(ButtonPresentation.ButtonPresentation, {
      className: `${OnPageNavigation_styles.hostClass}-cta-desktop`,
      key: "cta",
      noMargin: true,
      href: ctaHref,
      actionAs: ctaActionAs,
      actionProps: ctaActionProps,
      htmlAttrs: ctaHtmlAttrs,
      name: ctaName,
      onClick: onCtaClick,
      label: ctaLabel
    }))))
  }), ctaLabel && isMobile && (/*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${OnPageNavigation_styles.hostClass}-cta-mobile`]: true,
      [`${OnPageNavigation_styles.hostClass}-cta-mobile__visible`]: mobileCtaVisible
    })
  }, /*#__PURE__*/React__default.createElement(ButtonPresentation.ButtonPresentation, {
    key: "cta",
    noMargin: true,
    href: ctaHref,
    actionAs: ctaActionAs,
    actionProps: ctaActionProps,
    htmlAttrs: ctaHtmlAttrs,
    name: ctaName,
    onClick: onCtaClick,
    label: ctaLabel
  }))), /*#__PURE__*/React__default.createElement(DrawerPresentation.DrawerPresentation, {
    key: "drawer",
    open: open,
    onBackdropClick: () => setOpen(false),
    layout: "side-menu-left"
  }, /*#__PURE__*/React__default.createElement(HeaderContainerWrapper.HeaderContainerWrapper, {
    isMobile: true,
    position: "sticky",
    topLeft: /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
      noMargin: true
    }, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
      label: Localization.texts.lsg.component.SideNavigation.closeMenu,
      icon: icons.interaction_arrows_chevronLeft,
      onClick: () => setOpen(false)
    }))
  }), /*#__PURE__*/React__default.createElement(SectionPresentation.SectionPresentation, null, /*#__PURE__*/React__default.createElement(NavigationBlockWrapper.NavigationBlockWrapper, {
    navigationTree: NavigationUtils.getNamedNavigationTree(navigationTreeWithLabel),
    value: activeElementName,
    onChange: handleChange,
    startLevel: "page"
  }))));
};
OnPageNavigationPresentation.displayName = "OnPageNavigationPresentation";

exports.OnPageNavigationPresentation = OnPageNavigationPresentation;

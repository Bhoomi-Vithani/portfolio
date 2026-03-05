'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var variables = require('../../../styles/variables.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var Localization = require('../../../utils/Localization.js');
var NavigationUtils = require('../../../utils/NavigationUtils.js');
var React = require('../../../utils/React.js');
var DrawerPresentation = require('../../Drawer/shared/DrawerPresentation.js');
var GridPresentation = require('../../Grid/shared/GridPresentation.js');
var GridColumnPresentation = require('../../GridColumn/shared/GridColumnPresentation.js');
var GridRowPresentation = require('../../GridRow/shared/GridRowPresentation.js');
var IconLinkWrapper = require('../../IconLink/shared/IconLinkWrapper.js');
var IconLinkGroupWrapper = require('../../IconLinkGroup/shared/IconLinkGroupWrapper.js');
var SectionPresentation = require('../../Section/shared/SectionPresentation.js');
var ThemePresentation = require('../../Theme/shared/ThemePresentation.js');
var HeaderContainerWrapper = require('../../_HeaderContainer/HeaderContainerWrapper.js');
var LogoPresentation = require('../../_Logo/LogoPresentation.js');
var NavigationBarPresentation = require('../../_NavigationBar/NavigationBarPresentation.js');
var NavigationBlockPresentation = require('../../_NavigationBlock/shared/NavigationBlockPresentation.js');
var NavigationSeparatorPresentation = require('../../_NavigationSeparator/NavigationSeparatorPresentation.js');
var PortalHeader_styles = require('./PortalHeader.styles.js');
var animation = require('../../../utils/Hooks/animation.js');

// @ts-strict-ignore
const findPathRecursive = (navigationTree, value) => {
  const item = navigationTree.find(i => i.name === value);
  if (item) {
    return [item];
  }
  return navigationTree.map(i => {
    if (i.children) {
      const childResult = findPathRecursive(i.children, value);
      if (childResult) {
        return [i].concat(childResult);
      }
    }
    return undefined;
  }).find(Boolean);
};
/**
 * Finds the path for a given value (like an id) for an item in the given navigation
 * tree and its sub children
 */
const findPath = (navigationTree, value) => {
  if (value === undefined) {
    return;
  }
  return findPathRecursive(navigationTree, value) || [];
};
const Div = React.fRef(({
  ref,
  ...props
}) => /*#__PURE__*/React__default.createElement("div", {
  ...props,
  ref: ref
}));
const Nav = ({
  label,
  children
}) => label ? /*#__PURE__*/React__default.createElement("nav", {
  "aria-label": label
}, " ", children, " ") : children;
const PortalHeaderPresentation = ({
  id,
  className,
  noMargin,
  isStencilHost,
  navigationTree: navigationTreeProp,
  navigationAriaLabel,
  navigationActionAs,
  segmentNavigationTree,
  segmentNavigationAriaLabel,
  value,
  onChange = () => {},
  segmentValue,
  onSegmentChange = () => {},
  name,
  iconLinksInteraction,
  iconLinksInteractionAriaLabel,
  iconLinksQuickLink,
  iconLinksMobileHeader,
  iconLinksMobileSidebar,
  isSticky,
  segmentLabel,
  logoSrcMobile,
  logoSrcDesktop,
  logoHref,
  logoName,
  logoLabel = Localization.texts.lsg.component.Logo.actionHome,
  logoHtmlAttrs,
  logoDisabled,
  logoActionAs,
  logoActionProps,
  onLogoClick,
  onMobileMenuClick,
  menuFlyoutAriaLabel
}) => {
  // navigational elements
  const activeElementRef = React__default.useRef(undefined);
  const activeSubmenuElementRef = React__default.useRef(undefined);
  const activeMobileElementRef = React__default.useRef(undefined);
  const activeMobileSubmenuElementRef = React__default.useRef(undefined);
  const navigationBarElementRef = React__default.useRef(undefined);
  const mobileMenuLinkElementRef = React__default.useRef(undefined);
  const mobileOpenMenuButtonRef = React__default.useRef(undefined);
  /**
   * undefined = nothing open
   * "" = mobile menu open
   * value = submenu flyout is open
   */
  const [openValue, setOpenValue] = React__default.useState();
  const prevOpenValue = index.usePrevious(openValue);
  // https://stackoverflow.com/questions/46240647/how-to-force-a-functional-react-component-to-render/53837442#53837442
  const [, forceUpdate] = React__default.useReducer(x => x + 1, 0);
  const [forceMobile, setForceMobile] = React__default.useState(false);
  // distinguish viewport size for menu layer sizing, see f() = setLayerSize further below
  // const isMobileViewport = useViewportRange(undefined, "md");
  const viewport = index.useViewport();
  const isMobile = forceMobile || ["xs", "sm", "md"].includes(viewport); // xs, sm md considered as mobile view in previous implementation
  const [selectedPath, setSelectedPath] = React__default.useState([]);
  const [scrollPosition, setScrollPosition] = React__default.useState();
  const navigationTree = React__default.useMemo(() => NavigationUtils.getNamedNavigationTree(navigationTreeProp), [navigationTreeProp]);
  const openPath = findPath(navigationTree, openValue);
  const prevOpenPath = findPath(navigationTree, prevOpenValue);
  const mobileMenuOpen = openValue === "";
  const [iconLinkPressedOrClicked, setIconLinkPressedOrClicked] = React__default.useState(false);
  const setLayerSize = (vp, mobil) => {
    // based on spec https://neugelb.atlassian.net/wiki/spaces/BR/pages/40110407/Flyout+Spec+Design+5.0
    if (mobil) {
      switch (vp) {
        case "xs":
          return "layer-full";
        case "sm":
        case "md":
          return "layer-right-75";
        // case "xl": currently set to tbd in spec
        default:
          return "layer-right";
        // at the moment for l and xl version means 50%
      }
    }
    return "mega-menu";
  };
  // transition through submenu pages in mobile menu
  const {
    transitionState
  } = index.useTransitionState(isMobile && findPath(navigationTree, openValue)?.length > 0, variables.animationDuration.slower);
  const logoId = index.useUniqueId(`${PortalHeader_styles.hostClass}-logo`, id && `${id}-logo`);
  const defaultLogoLabel = logoSrcMobile || logoSrcDesktop ? Localization.texts.lsg.component.Logo.actionHome : Localization.texts.lsg.component.Logo.actionCoba;
  /**
   * Creates Refs for all menu buttons, based on the given navigation tree.
   *
   * The refs are placed in a 3-dimensional array and can be accessed like
   * menuItemsRefs[indexOfNavigationBarItem][indexOfGroupInFlyout][indexOfElementInGroup]
   *
   * That way you can "easily" manage the focus for the buttons.
   */
  const menuItemsRefs = React__default.useMemo(() => navigationTree?.map(flyoutCategory => flyoutCategory.children ? flyoutCategory.children?.map(({
    children = [],
    ...groupHeadlineItem
  }) => [groupHeadlineItem, ...children].map(_menuItem => /*#__PURE__*/React__default.createRef())) : [[/*#__PURE__*/React__default.createRef()]]), [navigationTree]);
  const mobileSubMenuNavigationBlockRef = React__default.useRef(undefined);
  /**
   * Function that focusses the first menu button (mobile) or first button in flyout (desktop)
   */
  const setFocusAfterOpening = () => {
    if (isMobile) {
      // Mobile:  focus very first button
      menuItemsRefs[0][0][0]?.current?.focus({
        preventScroll: true
      });
    } else {
      // Desktop: Determine the index of the currently opened submenu menu flyout and focus the first button
      const openedFlyout = navigationTree.find(item => item.name === openValue);
      if (openedFlyout?.children) {
        const button = menuItemsRefs[navigationTree.indexOf(openedFlyout)][0][0].current;
        button?.focus();
      }
    }
  };
  const previousValue = index.usePrevious(value);
  React__default.useEffect(() => {
    setSelectedPath(findPath(navigationTree, value));
    // close menu when value changes. This is useful for react router, that cannot trigger and onClick.
    if (previousValue !== value && openPath !== undefined) {
      setTimeout(() => {
        setOpenValue(undefined);
      }, animation.isPreferReducedMotion() ? 0 : variables.animationDuration.slowest);
    }
  }, [value]);
  /** Place Focus on mobile Menu button, after mobile menu has been closed */
  React__default.useEffect(() => {
    if (openValue === undefined && isMobile && iconLinkPressedOrClicked) {
      mobileOpenMenuButtonRef.current.focus();
    }
  }, [openValue, iconLinkPressedOrClicked]);
  /** Close menu when switching from mobile to desktop if no specific submenu is opened.
   * This prevents an empty flyout. */
  React__default.useEffect(() => {
    if (mobileMenuOpen) {
      setOpenValue(undefined);
    }
  }, [isMobile]);
  React__default.useEffect(() => {
    // render twice to update indicator
    setTimeout(() => {
      forceUpdate();
    }, 10);
  }, [selectedPath, openValue, isMobile]);
  const onHeaderClick = e => {
    if (!DomUtils.isTargetInsideContainer(e.target, navigationBarElementRef.current) && !DomUtils.isTargetInsideContainer(e.target, mobileMenuLinkElementRef.current)) {
      setOpenValue(undefined);
    }
  };
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [PortalHeader_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    isStencilHost: isStencilHost,
    onFocus: () => {
      if (document.documentElement.getAttribute("data-whatinput") === "keyboard") {
        window.scrollTo({
          top: 0,
          left: 0
        });
      }
    },
    "data-lsg-component": "portal-header"
  }, /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(HeaderContainerWrapper.HeaderContainerWrapper, {
    width: "page",
    theme: "dark",
    activeElement: activeElementRef.current,
    isFullUnderline: false,
    isMobile: isMobile,
    hasOpenFlyout: openPath !== undefined && !isMobile,
    position: isSticky ? "fixed" : undefined,
    onScrollChangeCallback: s => setScrollPosition(s),
    onForceMobileChange: onForceMobileValue => setForceMobile(onForceMobileValue),
    logo: /*#__PURE__*/React__default.createElement(LogoPresentation.LogoPresentation, {
      id: logoId,
      scrollPosition: scrollPosition,
      variant: isMobile ? "mobile" : "vertical",
      disabled: logoDisabled,
      href: logoHref,
      actionAs: logoActionAs,
      actionProps: logoActionProps,
      onClick: onLogoClick,
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
    onClick: onHeaderClick,
    segmentLabel: segmentLabel,
    topLeft: !isMobile && segmentNavigationTree && (/*#__PURE__*/React__default.createElement(NavigationBarPresentation.NavigationBarPresentation, {
      size: "segment-bar",
      navigationTree: segmentNavigationTree,
      navigationActionAs: navigationActionAs,
      navigationAriaLabel: segmentNavigationAriaLabel,
      value: segmentValue,
      onChange: (v, e) => {
        onSegmentChange(v, name, e);
      }
    })),
    topRightAriaLabel: !isMobile ?
    // on desktop: label for icon links
    iconLinksInteraction && iconLinksInteractionAriaLabel :
    // on mobile (with closed menu): main label
    openValue === undefined && navigationAriaLabel,
    topRight: /*#__PURE__*/React__default.createElement(Div, {
      ref: mobileMenuLinkElementRef,
      className: `${PortalHeader_styles.hostClass}-top-right`
    }, /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
      noMargin: true,
      direction: "collapse-sm"
    }, isMobile ? iconLinksMobileHeader : iconLinksInteraction, isMobile && (
    /*#__PURE__*/
    // mobile open menu button
    React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
      label: Localization.texts.lsg.component.PortalHeader.openMenu,
      icon: icons.interaction___menu,
      appearance: "no-text",
      actionRef: mobileOpenMenuButtonRef,
      onClick: event => {
        if (onMobileMenuClick) {
          onMobileMenuClick(event, name);
        }
        setOpenValue("");
      },
      expanded: false
    })))),
    bottomLeft: !isMobile && (/*#__PURE__*/React__default.createElement(Div, {
      ref: navigationBarElementRef
    }, /*#__PURE__*/React__default.createElement(NavigationBarPresentation.NavigationBarPresentation, {
      navigationTree: navigationTree,
      navigationAriaLabel: navigationAriaLabel,
      navigationActionAs: navigationActionAs,
      value: openPath?.[0]?.name || selectedPath?.[0]?.name,
      expandedValue: openValue,
      activeValue: selectedPath?.[selectedPath.length - 1]?.name,
      onChange: (v, e) => {
        // if there are children, open the flyout
        if (navigationTree.find(item => item.name === v)?.children) {
          // if new value is the same as before, it means the user clicked on the same menu element again.
          // we therefore close the menu by setting openValue to undefined
          setOpenValue(v === prevOpenValue ? undefined : v);
        } else {
          onChange(v, name, e);
        }
      },
      activeRef: activeElementRef
    }))),
    bottomRight: !isMobile && /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
      noMargin: true
    }, iconLinksQuickLink)
  }), /*#__PURE__*/React__default.createElement(ThemePresentation.ThemePresentation, {
    componentContext: true,
    componentName: "header"
  }, /*#__PURE__*/React__default.createElement(DrawerPresentation.DrawerPresentation, {
    open: openPath !== undefined,
    // layout={isMobile ? "layer-right" : "mega-menu"}
    layout: setLayerSize(viewport, isMobile),
    onBackdropClick: () => setOpenValue(undefined),
    autoFocus: false,
    onFocusLockActivation: () => {
      /* The focus needs to go to the first menu entry, but FocusLock calls this function
       *  just before the DOM is updated :/. setTimeout with 0s will be executed after the next
       *  render */
      setTimeout(setFocusAfterOpening, 0);
    },
    ariaLabel: menuFlyoutAriaLabel
  }, /*#__PURE__*/React__default.createElement(Nav, {
    label: isMobile && navigationAriaLabel
  }, isMobile && (/*#__PURE__*/React__default.createElement(HeaderContainerWrapper.HeaderContainerWrapper, {
    width: "layer",
    theme: "elevated",
    noSemanticElements: true,
    isMobile: isMobile,
    topLeft: openPath?.length > 0 && (/*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
      noMargin: true
    }, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
      label: Localization.texts.lsg.component.PortalHeader.backMenu,
      icon: icons.interaction_arrows_chevronLeft,
      onClick: () => setOpenValue("")
    }))),
    topRight:
    /*#__PURE__*/
    // mobile close menu button
    React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
      noMargin: true
    }, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
      label: Localization.texts.lsg.component.PortalHeader.closeMenu,
      icon: icons.interaction___close,
      onClick: () => {
        setIconLinkPressedOrClicked(true); // triggered by clicking or pressing Enter on Icon, necessary for focus outline placement back on Burger Menu in case of Key use
        setOpenValue(undefined);
      },
      appearance: "no-text",
      expanded: true
    }))
  })), isMobile && (/*#__PURE__*/React__default.createElement(SectionPresentation.SectionPresentation, {
    as: "div"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${PortalHeader_styles.hostClass}-whole-menu-container`]: true
    })
  }, /*#__PURE__*/React__default.createElement("div", {
    style: {
      visibility: transitionState.entered ? "hidden" : "visible"
    },
    className: DomUtils.cleanupClassObject({
      [`${PortalHeader_styles.hostClass}-menu-mobile`]: true,
      [`${PortalHeader_styles.hostClass}-top-menu-mobile${transitionState.entering || transitionState.entered ? "-left" : ""}`]: true
    })
  }, /*#__PURE__*/React__default.createElement(NavigationBlockPresentation.NavigationBlockPresentation, {
    navigationTree: navigationTree.map(({
      children: _,
      ...n
    }) => n),
    navigationActionAs: navigationActionAs,
    expandAll: true,
    alwaysShowIndicator: true,
    onChange: (v, e) => {
      if (navigationTree.find(item => item.name === v)?.children) {
        setOpenValue(v);
        setTimeout(() =>
        // set the focus to the newly opened NavigationBlocks's first element
        mobileSubMenuNavigationBlockRef?.current?.focusFirstElement(), 0);
      } else {
        onChange(v, name, e);
        setOpenValue(undefined);
      }
    },
    value: openPath?.[0]?.name || selectedPath?.[0]?.name,
    activeRef: activeMobileElementRef,
    activeElement: activeMobileElementRef.current,
    buttonRefs: menuItemsRefs?.[0]?.[0]
  }), /*#__PURE__*/React__default.createElement(NavigationSeparatorPresentation.NavigationSeparatorPresentation, null), /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
    direction: "vertical"
  }, iconLinksMobileSidebar), segmentNavigationTree && (/*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(NavigationSeparatorPresentation.NavigationSeparatorPresentation, null), /*#__PURE__*/React__default.createElement(NavigationBlockPresentation.NavigationBlockPresentation, {
    navigationTree: segmentNavigationTree,
    expandAll: true,
    startLevel: "segment",
    value: segmentValue,
    onChange: (v, e) => {
      onSegmentChange(v, name, e);
    },
    groupsAlwaysHighlighted: true
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${PortalHeader_styles.hostClass}-menu-mobile`]: true,
      [`${PortalHeader_styles.hostClass}-sub-menu-mobile${transitionState.entering || transitionState.entered ? "-left" : ""}`]: true
    })
  }, !transitionState.exited && !transitionState.unmounted && (/*#__PURE__*/React__default.createElement(React__default.Fragment, null, navigationTree.map((item, i) =>
  // Mobile submenu (aka "groups in Flyout" on Desktop)
  item.children && (/*#__PURE__*/React__default.createElement(NavigationBlockPresentation.NavigationBlockPresentation, {
    key: item.name || i,
    navigationTree: item.children,
    navigationActionAs: navigationActionAs,
    expandAll: true,
    startLevel: "group",
    onChange: (v, e) => {
      // TODO check if leaf node
      onChange(v, name, e);
      setOpenValue(undefined);
    },
    value: value,
    activeRef: activeMobileSubmenuElementRef,
    activeElement: activeMobileSubmenuElementRef.current,
    style: transitionState.exiting ? {
      display: prevOpenPath?.slice(-1)?.[0]?.name === item.name ? "block" : "none"
    } : {
      display: openPath?.slice(-1)?.[0]?.name === item.name ? "block" : "none"
    },
    ref:
    // set the ref only to the currently opened NavigationBlock (logic stolen from style property above..)
    transitionState.exiting && prevOpenPath?.slice(-1)?.[0]?.name || !transitionState.exiting && openPath?.slice(-1)?.[0]?.name === item.name ? mobileSubMenuNavigationBlockRef : undefined,
    groupsAlwaysHighlighted: true
  }))), segmentNavigationTree && (/*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(NavigationSeparatorPresentation.NavigationSeparatorPresentation, null), /*#__PURE__*/React__default.createElement(NavigationBlockPresentation.NavigationBlockPresentation, {
    navigationTree: segmentNavigationTree,
    navigationActionAs: navigationActionAs,
    expandAll: true,
    startLevel: "group",
    value: segmentValue,
    onChange: (v, e) => {
      onSegmentChange(v, name, e);
    },
    groupsAlwaysHighlighted: true
  }))))))))), !isMobile && (/*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: `${PortalHeader_styles.hostClass}-flyout-close`
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${PortalHeader_styles.hostClass}-flyout-close-link`
  }, /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
    noMargin: true
  }, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
    label: Localization.texts.lsg.component.PortalHeader.closeMenu,
    appearance: "no-text",
    icon: icons.interaction___close,
    onClick: () => setOpenValue(undefined)
  })))), /*#__PURE__*/React__default.createElement(SectionPresentation.SectionPresentation, {
    as: "div",
    spacing: "side-navigation-page"
  }, /*#__PURE__*/React__default.createElement(GridPresentation.GridPresentation, null, navigationTree.map((item, i) => (/*#__PURE__*/React__default.createElement("ul", {
    className: GridRowPresentation.getGridRowClasses({}),
    style: {
      display: openPath?.[0]?.name === item.name ? "flex" : "none"
    },
    key: item.name || i
  }, item?.children?.map((navigation, x) => (
  /*#__PURE__*/
  // each subsection in a flyout
  React__default.createElement(GridColumnPresentation.GridColumnPresentation, {
    as: "li",
    key: navigation.name,
    size: Math.floor(12 / item.children.length)
  }, /*#__PURE__*/React__default.createElement(NavigationBlockPresentation.NavigationBlockPresentation, {
    navigationTree: [navigation],
    navigationActionAs: navigationActionAs,
    expandAll: true,
    noIndent: true,
    startLevel: "group",
    onChange: (v, e) => {
      onChange(v, name, e);
      setOpenValue(undefined);
    },
    value: value,
    activeRef: activeSubmenuElementRef,
    activeElement: selectedPath?.[1]?.name === navigation.name ? activeSubmenuElementRef.current : undefined,
    groupsAlwaysHighlighted: true,
    onKeyDownHandlers: {
      /** Move focus to the left column or the last */
      arrowLeft: currentIndex => {
        const columLeftNextToMe = menuItemsRefs[i][x - 1];
        const lastColumn = menuItemsRefs[i][menuItemsRefs[i].length - 1];
        const columnToUse = x === 0 ? lastColumn : columLeftNextToMe;
        columnToUse[
        // try to focus the element with the same index
        Math.min(currentIndex, columnToUse.length - 1)].current.focus();
      },
      /** Move focus to the element above or close the flyout if it's the first */
      arrowUp: currentIndex => {
        if (currentIndex === 0) {
          setOpenValue(undefined);
        } else {
          menuItemsRefs[i][x][currentIndex - 1].current.focus();
        }
      },
      /** Move focus to the right column or the first */
      arrowRight: currentIndex => {
        const allColumns = menuItemsRefs[i];
        const columnRightOrFirst = menuItemsRefs[i][(x + 1) % allColumns.length];
        columnRightOrFirst[
        // try to focus the element with the same index
        Math.min(currentIndex, columnRightOrFirst.length - 1)].current.focus();
      },
      /** Move focus to the element below or the first element */
      arrowDown: currentIndex => {
        const thisColumn = menuItemsRefs[i][x];
        thisColumn[(currentIndex + 1) % thisColumn.length].current.focus();
      }
    },
    buttonRefs: menuItemsRefs[i][x]
  }))))))))))))))));
};
PortalHeaderPresentation.displayName = "PortalHeaderPresentation";

exports.PortalHeaderPresentation = PortalHeaderPresentation;

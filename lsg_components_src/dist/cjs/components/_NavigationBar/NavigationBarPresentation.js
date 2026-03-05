'use strict';

var React__default = require('react');
var BadgePresentation = require('../Badge/shared/BadgePresentation.js');
var IconLinkWrapper = require('../IconLink/shared/IconLinkWrapper.js');
var IconLinkGroupWrapper = require('../IconLinkGroup/shared/IconLinkGroupWrapper.js');
var NavigationLinkWrapper = require('../_NavigationLink/NavigationLinkWrapper.js');
var NavigationLinkGroupPresentation = require('../_NavigationLinkGroup/NavigationLinkGroupPresentation.js');

// @ts-strict-ignore
/* eslint-disable etc/no-commented-out-code */
const Nav = ({
  label,
  children
}) => label ? /*#__PURE__*/React__default.createElement("nav", {
  "aria-label": label
}, children) : children;
const NavigationBarPresentation = props => {
  const {
    className,
    navigationTree,
    navigationAriaLabel,
    navigationActionAs,
    onChange = () => {},
    onNewElementFocussed,
    value,
    activeRef,
    size = "menu",
    centeredLayout,
    activeValue,
    expandedValue
  } = props;
  const buttonRefs = React__default.useMemo(() => navigationTree.map(_ => /*#__PURE__*/React__default.createRef()), [navigationTree]);
  const internalOnClick = (e, name, item) => {
    onChange(name, e);
    if (item.onClick) {
      item.onClick(e, name);
    }
  };
  // size = "segment-bar" - used in PortalHeaderPresentation
  // size = "meta-bar" - used in FooterMetabarPresentation, SimpleFooterPresentation
  if (size === "segment-bar" || size === "meta-bar") {
    return /*#__PURE__*/React__default.createElement(Nav, {
      label: navigationAriaLabel
    }, /*#__PURE__*/React__default.createElement(NavigationLinkGroupPresentation.NavigationLinkGroupPresentation, {
      noMargin: true,
      size: size,
      centeredLayout: centeredLayout
    }, navigationTree?.map(({
      label,
      actionAs,
      ...item
    }, i) => (/*#__PURE__*/React__default.createElement(NavigationLinkWrapper.NavigationLinkWrapper, {
      ...item,
      htmlAttrs: {
        ...(item.htmlAttrs || {}),
        ...{
          "data-lsg-nav-level": size === "segment-bar" ? "segment" : undefined
        }
      },
      key: `${item.name || ""}+${i}`,
      onClick: (e, name) => internalOnClick(e, name, item),
      secondary: value && value !== item.name,
      actionRef: value === item.name ? activeRef : undefined,
      actionAs: actionAs || navigationActionAs
    }, label)))));
  }
  // size = "tab-bar" - used in TabBarPresentation
  // TODO remove redundancies
  if (size === "tab-bar") {
    return /*#__PURE__*/React__default.createElement(Nav, {
      label: navigationAriaLabel
    }, /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
      as: "div",
      noMargin: true,
      className: className,
      direction: "header-menu"
    }, navigationTree.map(({
      label,
      showBadge,
      actionAs,
      ...item
    }, i) => (
    /*#__PURE__*/
    // This is only an additional interaction. The main interaction (tabbing and Enter) remains on the
    //  IconLink button and is therefore accessible.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    React__default.createElement("div", {
      key: `${item.name || ""}+${i}`,
      /** needed for Indicator */
      ref: value === item.name ? activeRef : undefined,
      /**
       * Keyboard navigation
       *  Since we use buttons for the tabs, the click also is activated
       *  with the space and enter keys.
       */
      onKeyDown: e => {
        // don't bubble the event up
        e.stopPropagation();
        let elementToFocus = null;
        switch (e.key) {
          case "ArrowRight":
            // Focus next element (or first, if this is the last)
            elementToFocus = buttonRefs[(i + 1) % navigationTree.length].current;
            break;
          case "ArrowLeft":
            // Focus previous element (or last, if this is the first)
            elementToFocus = buttonRefs[i === 0 ? navigationTree.length - 1 : (i - 1) % navigationTree.length].current;
            break;
          case "Home":
            // When a tab has focus, moves focus to the first tab.
            elementToFocus = buttonRefs[0].current;
            break;
          case "End":
            // When a tab has focus, moves focus to the last tab.
            elementToFocus = buttonRefs[navigationTree.length - 1].current;
            break;
        }
        if (elementToFocus) {
          elementToFocus.focus();
          onNewElementFocussed?.(elementToFocus, e);
        }
      }
    }, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
      as: "div",
      role: "tab",
      label: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, showBadge && (/*#__PURE__*/React__default.createElement(BadgePresentation.BadgePresentation, {
        color: "primary",
        inline: true,
        margin: "right"
      })), label),
      ...item,
      onClick: (event, name) => onChange(name, event),
      color: value && value !== item.name ? "secondary" : "primary",
      actionRef: buttonRefs[i],
      actionAs: actionAs || navigationActionAs,
      selected: (activeValue || value) === item.name,
      // Roving tab index: Set tabindex="-1" when a tab is not selected so that only the selected
      // (active) tab is in the page tab sequence.
      hasTabIndex: (activeValue || value) === item.name,
      // Set id of the panel that is controlled by this tab
      htmlAttrs: {
        ...(item.htmlAttrs || {}),
        ...{
          "aria-controls": `${item.id}-panel`
        },
        "data-nav-type": "tab-bar-menu"
      }
    }))))));
  }
  // size = "menu" (default) - not set and therefore used in e.g.:
  // OnPageNavigationPresentation, PortalHeaderPresentation, SimpleHeaderPresentation,
  return /*#__PURE__*/React__default.createElement(Nav, {
    label: navigationAriaLabel
  }, /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
    noMargin: true,
    className: className,
    direction: "header-menu"
  }, navigationTree.map(({
    label,
    showBadge,
    actionAs,
    ...item
  }, i) => (
  /*#__PURE__*/
  // This is only an additional interaction. The main interaction (tabbing and Enter) remains on the
  //  IconLink button and is therefore accessible
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  React__default.createElement("li", {
    key: `${item.name || ""}+${i}`,
    /** needed for Indicator */
    ref: value === item.name ? activeRef : undefined,
    /** keyboard navigation via arrow keys */
    onKeyDown: e => {
      // don't bubble the event up
      e.stopPropagation();
      let elementToFocus = null;
      switch (e.key) {
        case "ArrowDown":
          if (item.children?.length > 0) {
            e.preventDefault(); // prevent scrolling
            // arrow down: open this menu
            onChange(item.name, e);
          }
          break;
        case "ArrowRight":
          // Focus next element (or first, if this is the last)
          elementToFocus = buttonRefs[(i + 1) % navigationTree.length].current;
          break;
        case "ArrowLeft":
          // Todo: Something is strange with left arrow in Tabs and Headers
          // Focus previous element (or last, if this is the first)
          elementToFocus = buttonRefs[i === 0 ? navigationTree.length - 1 : (i - 1) % navigationTree.length].current;
          break;
      }
      if (elementToFocus) {
        elementToFocus.focus();
        onNewElementFocussed?.(elementToFocus, e);
      }
    }
  }, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
    as: "div",
    label: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, showBadge && /*#__PURE__*/React__default.createElement(BadgePresentation.BadgePresentation, {
      color: "primary",
      inline: true,
      margin: "right"
    }), label),
    ...item,
    onClick: (event, name) => onChange(name, event),
    color: value && value !== item.name ? "secondary" : "primary",
    actionRef: buttonRefs[i],
    actionAs: actionAs || navigationActionAs,
    ...(item.children?.length > 0 && {
      actionProps: {
        "aria-expanded": expandedValue === item.name
      }
    }),
    // If link is the currently opened page, set aria-current to page.
    htmlAttrs: {
      ...(item.htmlAttrs || {}),
      ...((activeValue || value) === item.name ? {
        "aria-current": "page"
      } : {}),
      "data-lsg-nav-level": "topic"
    }
  }))))));
};
NavigationBarPresentation.displayName = "NavigationBarPresentation";

exports.NavigationBarPresentation = NavigationBarPresentation;

'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var prefix = require('../../config/prefix.js');
var DomUtils = require('../../utils/DomUtils.js');
var index = require('../../utils/Hooks/index.js');
var Host = require('../../utils/Host.js');
var Localization = require('../../utils/Localization.js');
var IconLinkWrapper = require('../IconLink/shared/IconLinkWrapper.js');
var IconLinkGroupWrapper = require('../IconLinkGroup/shared/IconLinkGroupWrapper.js');
var Pagination_styles = require('./Pagination.styles.js');

// @ts-strict-ignore
// @ts-ignore
const PaginationPresentation = props => {
  const {
    children,
    label,
    className,
    noMargin,
    isStencilHost,
    numPages,
    activePage,
    onClick,
    handleKey,
    paginationLinks,
    rightArrowRef,
    leftArrowRef,
    pageLinksRefs,
    ariaLabel,
    previousButtonAriaLabel,
    itemAriaLabelFormatter,
    nextButtonAriaLabel
  } = props;
  const id = index.useUniqueId(`${Pagination_styles.hostClass}`, props.id);
  const lastActionWasArrow = React__default.useRef(false);
  const leftLocalRef = React__default.useRef(null);
  const rightLocalRef = React__default.useRef(null);
  const [liveAnnouncement, setLiveAnnouncement] = React__default.useState("");
  const combinedLeftRef = r => {
    leftLocalRef.current = r;
    if (typeof leftArrowRef === "function") {
      leftArrowRef(r);
    }
  };
  const combinedRightRef = r => {
    rightLocalRef.current = r;
    if (typeof rightArrowRef === "function") {
      rightArrowRef(r);
    }
  };
  // those are the pageSymbols that are visible in the navigation.
  // if it's a number, it will be rendered to an link.
  const pageSymbols = numPages <= 7 ? Array(numPages).fill(0).map((_, i) => i + 1) : [1, activePage > 4 ? "…" : 2, Math.min(Math.max(activePage - 1, 3), numPages - 4), Math.min(Math.max(activePage, 4), numPages - 3), Math.min(Math.max(activePage + 1, 5), numPages - 2), activePage < numPages - 3 ? "…" : numPages - 1, numPages];
  const navAria = {};
  if ((label || children) && !ariaLabel) {
    navAria["aria-labelledby"] = `${id}-label`;
  } else {
    navAria["aria-label"] = ariaLabel || Localization.texts.lsg.component.Pagination.pagination;
  }
  const preparedLiveText = itemAriaLabelFormatter && itemAriaLabelFormatter(activePage, true) || `now on active page : ${activePage}`;
  React__default.useEffect(() => {
    if (lastActionWasArrow.current) {
      setLiveAnnouncement(preparedLiveText);
      lastActionWasArrow.current = false;
      const t = window.setTimeout(() => setLiveAnnouncement(""), 800);
      return () => window.clearTimeout(t);
    }
    return;
  }, [activePage, preparedLiveText]);
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [Pagination_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    isStencilHost: isStencilHost,
    "data-lsg-component": "pagination"
  }, !!(label || children) && (/*#__PURE__*/React__default.createElement("div", {
    id: `${id}-label`,
    className: `${Pagination_styles.hostClass}-label`
  }, label || children)), /*#__PURE__*/React__default.createElement("nav", {
    className: `${Pagination_styles.hostClass}-pages`,
    ...navAria
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${Pagination_styles.hostClass}-pagelist`
  }, /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
    direction: "pagination",
    noMargin: true
  }, /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
    noMargin: true,
    className: DomUtils.cleanupClassNames([`${Pagination_styles.hostClass}-icon-links`])
  }, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
    label: previousButtonAriaLabel || Localization.texts.lsg.component.Pagination.previousPage,
    icon: icons.interaction_arrows_chevronLeft,
    appearance: "no-text",
    iconColor: activePage <= 1 ? "disabled" : "secondary",
    onClick: (e, name) => {
      lastActionWasArrow.current = true;
      onClick && onClick(activePage - 1, e, name);
    },
    onKeyDown: handleKey,
    actionRef: combinedLeftRef,
    disabled: activePage <= 1 /* disabled link needed for a11y */,
    hoverAnimation: "left"
  })), pageSymbols.map((item, i) => {
    const isNumber = typeof item === "number";
    const isKey = i;
    let itemProps = {};
    if (isNumber) {
      if (paginationLinks && paginationLinks[item - 1]) {
        itemProps = paginationLinks[item - 1];
      }
      itemProps.htmlAttrs = itemProps.htmlAttrs || {};
      let pageLinkAriaLabel = itemProps.htmlAttrs["aria-label"] || `${Localization.texts.lsg.component.Pagination.pageText} ${item}`;
      if (itemAriaLabelFormatter) {
        pageLinkAriaLabel = itemAriaLabelFormatter(item) || pageLinkAriaLabel;
        if (activePage === item) {
          pageLinkAriaLabel = itemAriaLabelFormatter(item, true) || pageLinkAriaLabel;
        }
      }
      itemProps.htmlAttrs["aria-label"] = pageLinkAriaLabel;
      itemProps.htmlAttrs["aria-current"] = activePage === item ? "page" : undefined;
    }
    return item && (/*#__PURE__*/React__default.createElement("li", {
      key: isKey,
      className: DomUtils.cleanupClassNames([`${Pagination_styles.hostClass}-page`, activePage === item && `${Pagination_styles.hostClass}-page__active`])
    }, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
      label: /*#__PURE__*/React__default.createElement("div", {
        className: `${Pagination_styles.hostClass}-action-inner-wrapper`
      }, /*#__PURE__*/React__default.createElement("div", {
        className: `${Pagination_styles.hostClass}-action-inner`
      }, item)),
      ...itemProps,
      inactive: item !== activePage,
      className: `${Pagination_styles.hostClass}-action`,
      onClick: e => {
        if (isNumber) {
          lastActionWasArrow.current = false;
          onClick(item, e);
        }
      },
      onKeyDown: e => {
        if (isNumber) {
          handleKey(e);
        }
      },
      actionRef: r => {
        if (isNumber) {
          pageLinksRefs(i, r);
        }
      },
      "aria-current": activePage === item ? "page" : undefined,
      hasTabIndex: isNumber
    })));
  }), /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
    noMargin: true,
    className: `${Pagination_styles.hostClass}-icon-links`
  }, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
    label: nextButtonAriaLabel || Localization.texts.lsg.component.Pagination.nextPage,
    icon: icons.interaction_arrows_chevronRight,
    appearance: "no-text",
    iconColor: activePage === numPages || numPages === 0 ? "disabled" : "secondary",
    onClick: (e, name) => {
      const target = Math.min(activePage + 1, numPages);
      if (target !== numPages) {
        lastActionWasArrow.current = true;
      } else {
        lastActionWasArrow.current = false;
      }
      onClick && onClick(target, e, name);
    },
    onKeyDown: handleKey,
    actionRef: combinedRightRef,
    disabled: activePage >= numPages /* disabled link needed for a11y */,
    hoverAnimation: "right"
  })))), /*#__PURE__*/React__default.createElement("div", {
    id: `${id}-status`,
    "aria-live": "polite",
    "aria-atomic": "true",
    className: `${Pagination_styles.hostClass}-invisible-links`
  }, liveAnnouncement)));
};
PaginationPresentation.displayName = "PaginationPresentation";

exports.PaginationPresentation = PaginationPresentation;

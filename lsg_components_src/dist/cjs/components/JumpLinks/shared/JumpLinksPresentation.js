'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var NavigationUtils = require('../../../utils/NavigationUtils.js');
var ResizeEvents = require('../../../utils/windowEvents/ResizeEvents.js');
var ScrollEvents = require('../../../utils/windowEvents/ScrollEvents.js');
var HeaderContainer_styles = require('../../_HeaderContainer/HeaderContainer.styles.js');
var NavigationBlockWrapper = require('../../_NavigationBlock/shared/NavigationBlockWrapper.js');
var JumpLinks_styles = require('./JumpLinks.styles.js');

// @ts-strict-ignore
/**
 * Function that adds href to #targetId for each navigationItem
 */
function addHref(navItem) {
  const result = {
    ...navItem
  };
  if (!result.href) {
    result.href = `#${result.targetId}`;
  }
  if (result.children) {
    result.children = result.children.map(addHref);
  }
  return result;
}
const JumpLinksPresentation = props => {
  const {
    id,
    className,
    noMargin,
    isStencilHost,
    navigationActionAs,
    ariaLabel
  } = props;
  const navigationTree = props.navigationTree.map(addHref);
  const containerElement = React__default.useRef(null);
  const [value, setValue] = React__default.useState("0");
  const [style, setStyle] = React__default.useState();
  const [stickyHeader, setStickyHeader] = React__default.useState(null);
  const handleVisibility = activeElementId => {
    const val = NavigationUtils.getNamedNavigationTree(navigationTree).find(item => item.targetId === activeElementId)?.name;
    setValue(val);
  };
  const handleStickyHeader = () => {
    if (stickyHeader) {
      const headerHeight = document.querySelector(`div.${HeaderContainer_styles.mainClass}-row`).clientHeight;
      navigationTree.forEach(item => {
        const navItem = document.getElementById(item.targetId);
        navItem.style.scrollMarginTop = `${headerHeight + 10}px`; // added 10px buffer to header height
      });
    }
  };
  const handleScroll = () => {
    const targetIds = navigationTree?.map(item => item.targetId);
    if (!containerElement?.current) {
      return;
    }
    const offsetTop = parseInt(window.getComputedStyle(containerElement.current.parentElement).top, 10);
    const offsetBottom = parseInt(window.getComputedStyle(containerElement.current.parentElement).bottom, 10);
    const remainingHeight = window.innerHeight - (containerElement.current.offsetHeight + offsetTop + offsetBottom);
    // reduce the spacing between upper screen edge and JumpLinks if not enough space
    const top = remainingHeight >= 0 ? offsetTop : Math.max(offsetTop - offsetBottom, offsetTop + remainingHeight / 2);
    if (document !== undefined && targetIds) {
      const firstElm = document.getElementById(targetIds[0]);
      const lastElm = document.getElementById(targetIds[targetIds.length - 1]);
      if (firstElm && lastElm) {
        if (firstElm.getBoundingClientRect().top > top) {
          setStyle(undefined);
        } else if (top + containerElement.current.offsetHeight < lastElm.getBoundingClientRect().bottom) {
          setStyle({
            position: "fixed",
            top: `${top}px`,
            left: `${containerElement.current.parentElement.getBoundingClientRect().left}px`,
            width: `${containerElement.current.parentElement.getBoundingClientRect().width}px`
          });
        } else {
          // when the JumpLinks Container's bottom distance gets bigger than the last elements', set the JumpLinks Container to position absolute
          setStyle({
            position: "absolute",
            top: `${lastElm.offsetTop + lastElm.offsetHeight - containerElement.current.offsetHeight - containerElement.current.parentElement.offsetTop}px`,
            left: 0,
            right: 0
          });
        }
      }
    }
  };
  React__default.useEffect(() => {
    const idTargets = navigationTree.map(item => item.targetId);
    const headerElm = document.querySelector(`header.${HeaderContainer_styles.mainClass}__sticky`);
    setStickyHeader(headerElm);
    ScrollEvents.addIndicatorCallback(handleVisibility, idTargets, 100);
    ScrollEvents.addScrollCallback(handleScroll);
    ResizeEvents.addResizeCallback(handleScroll);
    return () => {
      ScrollEvents.removeIndicatorCallback(handleVisibility);
      ScrollEvents.removeScrollCallback(handleScroll);
      ResizeEvents.removeResizeCallback(handleScroll);
    };
  }, []);
  React__default.useEffect(() => {
    ScrollEvents.addScrollCallback(handleStickyHeader);
    ResizeEvents.addResizeCallback(handleStickyHeader);
    return () => {
      ScrollEvents.removeScrollCallback(handleStickyHeader);
      ResizeEvents.removeResizeCallback(handleStickyHeader);
    };
  }, [stickyHeader]);
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [JumpLinks_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    isStencilHost: isStencilHost,
    style: style?.position ? {
      position: "relative"
    } : undefined,
    as: "nav",
    htmlAttrs: {
      "aria-label": ariaLabel
    },
    "data-lsg-component": "jump-links"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${JumpLinks_styles.hostClass}-inner`,
    style: style,
    ref: containerElement
  }, /*#__PURE__*/React__default.createElement(NavigationBlockWrapper.NavigationBlockWrapper, {
    navigationTree: NavigationUtils.getNamedNavigationTree(navigationTree),
    navigationActionAs: navigationActionAs,
    value: value,
    startLevel: "page"
  })));
};
JumpLinksPresentation.displayName = "JumpLinksPresentation";

exports.JumpLinksPresentation = JumpLinksPresentation;
exports.addHref = addHref;

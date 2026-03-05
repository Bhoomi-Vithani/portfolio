'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var Localization = require('../../../utils/Localization.js');
var ReactUtils = require('../../../utils/ReactUtils.js');
var Breadcrumbs_styles = require('./Breadcrumbs.styles.js');

// @ts-strict-ignore
const BreadcrumbsPresentation = ({
  id,
  children,
  className,
  alwaysVisible,
  separatorBottom,
  noMargin,
  title = Localization.texts.lsg.component.BreadCrumbs.title
}) => {
  const numChildren = ReactUtils.fragmentCount(children);
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    as: "nav",
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [Breadcrumbs_styles.hostClass]: true,
      [`${Breadcrumbs_styles.hostClass}__hide-sm`]: !alwaysVisible,
      [`${Breadcrumbs_styles.hostClass}__separator`]: separatorBottom,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    htmlAttrs: {
      "aria-label": title
    }
  }, /*#__PURE__*/React__default.createElement("ol", {
    className: `${Breadcrumbs_styles.hostClass}-ol`,
    role: "list" // Because of style-type: none - Safari Bug: https://web.dev/articles/creative-list-styling?hl=de#styling_lists_that_dont_look_like_lists
  }, ReactUtils.fragmentMap(children, (child, i) => /*#__PURE__*/React__default.cloneElement(child, i === numChildren - 1 ? {
    htmlAttrs: {
      ...child.props.htmlAttrs,
      "aria-current": child.props.htmlAttrs?.["aria-current"] ?? "page"
    }
  } : {}))));
};
BreadcrumbsPresentation.displayName = "BreadcrumbsPresentation";

exports.BreadcrumbsPresentation = BreadcrumbsPresentation;

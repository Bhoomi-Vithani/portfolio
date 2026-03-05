'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var ReactUtils = require('../../../utils/ReactUtils.js');
var TeaserGroup_styles = require('./TeaserGroup.styles.js');

// @ts-strict-ignore
const TeaserGroupPresentation = ({
  id,
  children,
  className,
  noMargin,
  hasFocusTeaser,
  groupImageRatio = "16-9",
  groupHeadlineSize = "h4",
  groupHeadlineAs
}) => (/*#__PURE__*/React__default.createElement(Host.Host, {
  id: id,
  className: DomUtils.cleanupClassObject({
    [className]: !!className,
    [TeaserGroup_styles.hostClass]: true,
    [`${prefix.lsgPre}no-margin`]: noMargin,
    [`${prefix.lsgPre}teaser-group-focus-topic`]: hasFocusTeaser
  }),
  as: "ul"
}, ReactUtils.fragmentMap(children, child => /*#__PURE__*/React__default.cloneElement(child, {
  as: "li",
  imageRatio: groupImageRatio,
  headlineSize: groupHeadlineSize,
  headlineAs: groupHeadlineAs
}))));
TeaserGroupPresentation.displayName = "TeaserGroupPresentation";

exports.TeaserGroupPresentation = TeaserGroupPresentation;

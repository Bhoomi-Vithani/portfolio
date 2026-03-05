'use strict';

var React__default = require('react');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var ContentInclude_styles = require('./ContentInclude.styles.js');

// @ts-strict-ignore
const ContentIncludePresentation = ({
  id,
  className,
  cid
}) => {
  const ci = typeof window === "object" ? document.getElementById(cid) : undefined;
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [ContentInclude_styles.hostClass]: true
    }),
    dangerouslySetInnerHTML: ci && {
      __html: ci?.innerHTML
    }
  });
};
ContentIncludePresentation.displayName = "ContentIncludePresentation";

exports.ContentIncludePresentation = ContentIncludePresentation;

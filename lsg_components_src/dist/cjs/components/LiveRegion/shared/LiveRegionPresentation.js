'use strict';

var React__default = require('react');
var DomUtils = require('../../../utils/DomUtils.js');
var LiveRegion_styles = require('./LiveRegion.styles.js');

const LiveRegionPresentation = /*#__PURE__*/React__default.forwardRef(({
  ariaLive = "assertive"
}, ref) => {
  const [content, setContent] = React__default.useState("");
  React__default.useImperativeHandle(ref, () => ({
    announce: (announcement, callback) => {
      // reset announcement if it is not changing, so that it will be read again
      setContent(prevContent => prevContent !== announcement ? announcement : "");
      requestAnimationFrame(() => {
        setContent(announcement);
        requestAnimationFrame(() => {
          callback?.();
        });
      });
    }
  }), []);
  return /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [LiveRegion_styles.hostClass]: true
    }),
    "aria-live": ariaLive,
    "aria-atomic": true
  }, typeof content === "function" ? content() : content);
});

exports.LiveRegionPresentation = LiveRegionPresentation;

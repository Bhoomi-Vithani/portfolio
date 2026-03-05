'use strict';

var styleInject = require('style-inject');
var ssr = require('@lsg/ssr');

const reactStyles = " .lsgs-a12e7--tan-panel{display:block;} .lsgs-a12e7--tan-panel:not(.lsgs-a12e7--no-margin){margin-bottom:24px;}@media screen and (min-width:64rem){ .lsgs-a12e7--tan-panel:not(.lsgs-a12e7--no-margin){margin-bottom:32px;}}";
const hostClass = "lsgs-a12e7--tan-panel";
if (styleInject.hasOwnProperty("default")) {
  styleInject["default"](reactStyles);
} else {
  styleInject(reactStyles);
}
ssr.collectStyles(reactStyles);

exports.hostClass = hostClass;
exports.reactStyles = reactStyles;

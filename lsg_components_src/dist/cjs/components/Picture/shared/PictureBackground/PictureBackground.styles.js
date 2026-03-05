'use strict';

var styleInject = require('style-inject');
var ssr = require('@lsg/ssr');

const reactStyles = " .lsgs-a12e7--picture-background{display:block;height:100%;background-repeat:no-repeat;background-size:cover;} .lsgs-a12e7--picture-background:not(.lsgs-a12e7--no-margin){margin-bottom:16px;}@media screen and (min-width:64rem){ .lsgs-a12e7--picture-background:not(.lsgs-a12e7--no-margin){margin-bottom:24px;}} .lsgs-a12e7--picture-background.lsgs-a12e7--picture-background__inline{display:inline-block;}";
const hostClass = "lsgs-a12e7--picture-background";
if (styleInject.hasOwnProperty("default")) {
  styleInject["default"](reactStyles);
} else {
  styleInject(reactStyles);
}
ssr.collectStyles(reactStyles);

exports.hostClass = hostClass;
exports.reactStyles = reactStyles;

'use strict';

var styleInject = require('style-inject');
var ssr = require('@lsg/ssr');

const reactStyles = ".lsgs-a12e7--subline-text-error-text-wrapper{display:flex;}.lsgs-a12e7--subline-text-error-text-wrapper__error-text-set{margin-top:8px;}.lsgs-a12e7--subline-text__dense .lsgs-a12e7--subline-text-error-text-wrapper__error-text-set{margin-top:2px;}.lsgs-a12e7--subline-text-error-text{margin-left:6px;}.lsgs-a12e7--subline-text-error-icon,.lsgs-a12e7--subline-text-error-icon svg{margin-bottom:0;height:20px;width:18px;}";
const hostClass = "lsgs-a12e7--subline-text";
if (styleInject.hasOwnProperty("default")) {
  styleInject["default"](reactStyles);
} else {
  styleInject(reactStyles);
}
ssr.collectStyles(reactStyles);

exports.hostClass = hostClass;
exports.reactStyles = reactStyles;

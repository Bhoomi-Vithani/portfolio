'use strict';

var styleInject = require('style-inject');
var ssr = require('@lsg/ssr');

const reactStyles = " .lsgs-a12e7--simple-header{display:block;}.lsgs-a12e7--simple-header-navigation{margin-right:48px;}";
const hostClass = "lsgs-a12e7--simple-header";
if (styleInject.hasOwnProperty("default")) {
  styleInject["default"](reactStyles);
} else {
  styleInject(reactStyles);
}
ssr.collectStyles(reactStyles);

exports.hostClass = hostClass;
exports.reactStyles = reactStyles;

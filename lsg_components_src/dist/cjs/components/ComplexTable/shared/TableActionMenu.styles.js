'use strict';

var styleInject = require('style-inject');
var ssr = require('@lsg/ssr');

const reactStyles = " .lsgs-a12e7--table-action-menu{width:-moz-max-content;width:max-content;margin-left:auto;display:flex;flex-direction:row;-moz-column-gap:12px;column-gap:12px;}";
const hostClass = "lsgs-a12e7--table-action-menu";
if (styleInject.hasOwnProperty("default")) {
  styleInject["default"](reactStyles);
} else {
  styleInject(reactStyles);
}
ssr.collectStyles(reactStyles);

exports.hostClass = hostClass;
exports.reactStyles = reactStyles;

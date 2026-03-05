'use strict';

var styleInject = require('style-inject');
var ssr = require('@lsg/ssr');

const reactStyles = ".lsgs-a12e7--footnote{margin:32px 0 0;padding-left:0;counter-reset:li;}.lsgs-a12e7--footnote:not(.lsgs-a12e7--no-margin){margin-bottom:32px;}@media screen and (min-width:64rem){.lsgs-a12e7--footnote:not(.lsgs-a12e7--no-margin){margin-bottom:48px;}}@media screen and (min-width:64rem){.lsgs-a12e7--footnote{margin-top:48px;}}";
const mainClass = "lsgs-a12e7--footnote";
if (styleInject.hasOwnProperty("default")) {
  styleInject["default"](reactStyles);
} else {
  styleInject(reactStyles);
}
ssr.collectStyles(reactStyles);

exports.mainClass = mainClass;
exports.reactStyles = reactStyles;

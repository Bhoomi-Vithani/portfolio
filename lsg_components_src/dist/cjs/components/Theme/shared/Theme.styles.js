'use strict';

var styleInject = require('style-inject');
var ssr = require('@lsg/ssr');

const reactStyles = " .lsgs-a12e7--theme{display:block;} .lsgs-a12e7--theme.lsgs-a12e7--theme__prevent-margin-overlap:before{content:\" \";display:block;height:0;padding-bottom:1px;margin-bottom:-1px;} .lsgs-a12e7--theme.lsgs-a12e7--theme__prevent-margin-overlap:after{content:\" \";display:block;height:0;padding-top:1px;margin-top:-1px;}";
const hostClass = "lsgs-a12e7--theme";
if (styleInject.hasOwnProperty("default")) {
  styleInject["default"](reactStyles);
} else {
  styleInject(reactStyles);
}
ssr.collectStyles(reactStyles);

exports.hostClass = hostClass;
exports.reactStyles = reactStyles;

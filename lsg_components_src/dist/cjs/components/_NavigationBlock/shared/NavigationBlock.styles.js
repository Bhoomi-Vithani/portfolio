'use strict';

var styleInject = require('style-inject');
var ssr = require('@lsg/ssr');

const reactStyles = ".lsgs-a12e7--navigation-block{position:relative;}.lsgs-a12e7--navigation-block-group{list-style:none;margin:0;padding:0;margin-bottom:8px;}.lsgs-a12e7--navigation-block__indent .lsgs-a12e7--navigation-block__page-group{padding-left:16px;}.lsgs-a12e7--navigation-block__process{margin-left:24px;}.lsgs-a12e7--navigation-block__process .lsgs-a12e7--navigation-block-group{padding-left:32px;}.lsgs-a12e7--navigation-block__process > .lsgs-a12e7--navigation-block-group{margin-left:-52px;padding-left:16px;}.lsgs-a12e7--navigation-block__cluster-item{margin-bottom:8px;padding:7px 0;}@media screen and (min-width:64rem){.lsgs-a12e7--navigation-block__cluster-item{padding:6px 0;}}";
const mainClass = "lsgs-a12e7--navigation-block";
if (styleInject.hasOwnProperty("default")) {
  styleInject["default"](reactStyles);
} else {
  styleInject(reactStyles);
}
ssr.collectStyles(reactStyles);

exports.mainClass = mainClass;
exports.reactStyles = reactStyles;

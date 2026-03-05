'use strict';

var styleInject = require('style-inject');
var ssr = require('@lsg/ssr');

const reactStyles = ".lsgs-a12e7--simple-table{width:100%;border-collapse:collapse;display:table;margin:0;}.lsgs-a12e7--simple-table:not(.lsgs-a12e7--no-margin){margin-bottom:24px;}@media screen and (min-width:64rem){.lsgs-a12e7--simple-table:not(.lsgs-a12e7--no-margin){margin-bottom:32px;}}.lsgs-a12e7--simple-tabletitle__notext{border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;}@supports not (clip-path:inset(100%)){.lsgs-a12e7--simple-tabletitle__notext{clip:rect(0 0 0 0);}}@supports (clip-path:inset(100%)){.lsgs-a12e7--simple-tabletitle__notext{clip-path:inset(100%);}}";
const hostClass = "lsgs-a12e7--simple-table";
if (styleInject.hasOwnProperty("default")) {
  styleInject["default"](reactStyles);
} else {
  styleInject(reactStyles);
}
ssr.collectStyles(reactStyles);

exports.hostClass = hostClass;
exports.reactStyles = reactStyles;

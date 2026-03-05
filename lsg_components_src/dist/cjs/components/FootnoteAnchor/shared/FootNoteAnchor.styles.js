'use strict';

var styleInject = require('style-inject');
var ssr = require('@lsg/ssr');

const reactStyles = ".lsgs-a12e7--footnote-anchor__text-visually-hidden{border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;}@supports not (clip-path:inset(100%)){.lsgs-a12e7--footnote-anchor__text-visually-hidden{clip:rect(0 0 0 0);}}@supports (clip-path:inset(100%)){.lsgs-a12e7--footnote-anchor__text-visually-hidden{clip-path:inset(100%);}}";
const hostClass = "lsgs-a12e7--footnote-anchor";
if (styleInject.hasOwnProperty("default")) {
  styleInject["default"](reactStyles);
} else {
  styleInject(reactStyles);
}
ssr.collectStyles(reactStyles);

exports.hostClass = hostClass;
exports.reactStyles = reactStyles;

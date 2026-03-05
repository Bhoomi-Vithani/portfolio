'use strict';

var styleInject = require('style-inject');
var ssr = require('@lsg/ssr');

const reactStyles = ".lsgs-a12e7--grid{display:flex;flex-direction:column;}.lsgs-a12e7--grid__gallery-slider .lsgs-a12e7--grid-row{flex-wrap:nowrap;}@media screen and (min-width:64rem){.lsgs-a12e7--grid__gallery-slider .lsgs-a12e7--grid-row{overflow:hidden;}}.lsgs-a12e7--grid__gallery-slider-spacing .lsgs-a12e7--grid-row{margin:0 -4px;}@media screen and (min-width:0.0625rem){.lsgs-a12e7--grid,.lsgs-a12e7--grid__additional-spacing-small{row-gap:24px;margin:24px 0;}.lsgs-a12e7--grid__additional-spacing-medium{row-gap:30px;margin:30px 0;}.lsgs-a12e7--grid__additional-spacing-large{row-gap:36px;margin:36px 0;}}@media screen and (min-width:64rem){.lsgs-a12e7--grid,.lsgs-a12e7--grid__additional-spacing-small{row-gap:32px;margin:32px 0;}.lsgs-a12e7--grid__additional-spacing-medium{row-gap:40px;margin:40px 0;}.lsgs-a12e7--grid__additional-spacing-large{row-gap:48px;margin:48px 0;}}@media screen and (min-width:74.75rem){.lsgs-a12e7--grid,.lsgs-a12e7--grid__additional-spacing-small{row-gap:32px;margin:32px 0;}.lsgs-a12e7--grid__additional-spacing-medium{row-gap:44px;margin:44px 0;}.lsgs-a12e7--grid__additional-spacing-large{row-gap:56px;margin:56px 0;}}@media screen and (min-width:105rem){.lsgs-a12e7--grid,.lsgs-a12e7--grid__additional-spacing-small{row-gap:32px;margin:32px 0;}.lsgs-a12e7--grid__additional-spacing-medium{row-gap:48px;margin:48px 0;}.lsgs-a12e7--grid__additional-spacing-large{row-gap:64px;margin:64px 0;}}@media screen and (min-width:120rem){.lsgs-a12e7--grid,.lsgs-a12e7--grid__additional-spacing-small{row-gap:32px;margin:32px 0;}.lsgs-a12e7--grid__additional-spacing-medium{row-gap:52px;margin:52px 0;}.lsgs-a12e7--grid__additional-spacing-large{row-gap:72px;margin:72px 0;}}.lsgs-a12e7--grid__dense{row-gap:24px;margin:24px 0;}.lsgs-a12e7--grid .lsgs-a12e7--grid{margin-top:0;}";
const hostClass = "lsgs-a12e7--grid";
if (styleInject.hasOwnProperty("default")) {
  styleInject["default"](reactStyles);
} else {
  styleInject(reactStyles);
}
ssr.collectStyles(reactStyles);

exports.hostClass = hostClass;
exports.reactStyles = reactStyles;

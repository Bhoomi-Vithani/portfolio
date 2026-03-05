'use strict';

var styleInject = require('style-inject');
var ssr = require('@lsg/ssr');

const reactStyles = " .lsgs-a12e7--icon-link-group{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;-moz-column-gap:32px;column-gap:32px;row-gap:8px;} .lsgs-a12e7--icon-link-group:not(.lsgs-a12e7--no-margin){margin-bottom:24px;}@media screen and (min-width:64rem){ .lsgs-a12e7--icon-link-group:not(.lsgs-a12e7--no-margin){margin-bottom:32px;}}.lsgs-a12e7--icon-link-group__horizontal{flex-direction:row;flex-wrap:wrap;}.lsgs-a12e7--icon-link-group__pagination,.lsgs-a12e7--icon-link-group__textfield{-moz-column-gap:8px;column-gap:8px;}.lsgs-a12e7--icon-link-group__table{-moz-column-gap:12px;column-gap:12px;}.lsgs-a12e7--icon-link-group__hero-search{-moz-column-gap:24px;column-gap:24px;}.lsgs-a12e7--icon-link-group__align-left.lsgs-a12e7--icon-link-group__horizontal{justify-content:flex-start;}.lsgs-a12e7--icon-link-group__align-left.lsgs-a12e7--icon-link-group__vertical{align-items:flex-start;}.lsgs-a12e7--icon-link-group__align-center.lsgs-a12e7--icon-link-group__horizontal{justify-content:center;}.lsgs-a12e7--icon-link-group__align-center.lsgs-a12e7--icon-link-group__vertical{align-items:center;}.lsgs-a12e7--icon-link-group__align-right.lsgs-a12e7--icon-link-group__horizontal{justify-content:flex-end;}.lsgs-a12e7--icon-link-group__align-right.lsgs-a12e7--icon-link-group__vertical{align-items:flex-end;}.lsgs-a12e7--icon-link-group__no-wrap{flex-wrap:nowrap;}.lsgs-a12e7--cards-custom-item-menu .lsgs-a12e7--icon-link-group{gap:0;margin-bottom:0;}";
const hostClass = "lsgs-a12e7--icon-link-group";
if (styleInject.hasOwnProperty("default")) {
  styleInject["default"](reactStyles);
} else {
  styleInject(reactStyles);
}
ssr.collectStyles(reactStyles);

exports.hostClass = hostClass;
exports.reactStyles = reactStyles;

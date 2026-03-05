'use strict';

var styleInject = require('style-inject');
var ssr = require('@lsg/ssr');

const reactStyles = " .lsgs-a12e7--description-list{border:0;margin-top:0;} .lsgs-a12e7--description-list:not(.lsgs-a12e7--no-margin){margin-bottom:32px;}@media screen and (min-width:40rem){ .lsgs-a12e7--description-list{display:grid;grid-template-columns:0 fit-content(30%) 48px fit-content(70%) auto;row-gap:16px;}}.lsgs-a12e7--description-list__align-center .lsgs-a12e7--description-list-item-dt{text-align:right;}.lsgs-a12e7--description-list__align-center .lsgs-a12e7--description-list-item-dt,.lsgs-a12e7--description-list__align-center .lsgs-a12e7--description-list-item-dd{margin-left:auto;margin-right:auto;text-align:center;}@media screen and (min-width:40rem){.lsgs-a12e7--description-list__align-center{grid-template-columns:auto fit-content(30%) 48px fit-content(70%) auto;}.lsgs-a12e7--description-list__align-center .lsgs-a12e7--description-list-item-dt{text-align:right;margin-left:unset;margin-right:unset;}.lsgs-a12e7--description-list__align-center .lsgs-a12e7--description-list-item-dd{text-align:left;margin-left:unset;margin-right:unset;}}@media screen and (min-width:40rem){.lsgs-a12e7--description-list__align-right{grid-template-columns:auto fit-content(30%) 48px fit-content(70%) 0;}}.lsgs-a12e7--description-list__align-right .lsgs-a12e7--description-list-item-dt,.lsgs-a12e7--description-list__align-right .lsgs-a12e7--description-list-item-dd{margin-left:auto;text-align:right;}";
const hostClass = "lsgs-a12e7--description-list";
if (styleInject.hasOwnProperty("default")) {
  styleInject["default"](reactStyles);
} else {
  styleInject(reactStyles);
}
ssr.collectStyles(reactStyles);

exports.hostClass = hostClass;
exports.reactStyles = reactStyles;

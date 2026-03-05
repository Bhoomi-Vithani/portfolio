'use strict';

var styleInject = require('style-inject');
var ssr = require('@lsg/ssr');

const reactStyles = " .lsgs-a12e7--article-list-item{display:block;font-size:0.8125rem;line-height:calc(0.8125rem + 7px);letter-spacing:0.1px;font-family:var(--lsg-font-family-400,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-400,400);max-width:35.5rem;}@media screen and (min-width:64rem){ .lsgs-a12e7--article-list-item{font-size:0.9375rem;line-height:calc(0.9375rem + 9px);letter-spacing:0.1px;font-family:var(--lsg-font-family-400,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-400,400);max-width:48rem;}} .lsgs-a12e7--article-list-item.lsgs-a12e7--article-list-item__align-center{margin-left:auto;margin-right:auto;} .lsgs-a12e7--article-list-item.lsgs-a12e7--article-list-item__align-right{margin-left:auto;} .lsgs-a12e7--article-list-item:not(.lsgs-a12e7--no-margin){margin-bottom:24px;}@media screen and (min-width:64rem){ .lsgs-a12e7--article-list-item:not(.lsgs-a12e7--no-margin){margin-bottom:32px;}}h6{margin-bottom:8px;}@media screen and (min-width:64rem){h6{margin-bottom:16px;}}";
const hostClass = "lsgs-a12e7--article-list-item";
if (styleInject.hasOwnProperty("default")) {
  styleInject["default"](reactStyles);
} else {
  styleInject(reactStyles);
}
ssr.collectStyles(reactStyles);

exports.hostClass = hostClass;
exports.reactStyles = reactStyles;

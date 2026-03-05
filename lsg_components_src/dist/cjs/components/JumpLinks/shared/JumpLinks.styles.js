'use strict';

var styleInject = require('style-inject');
var ssr = require('@lsg/ssr');

const reactStyles = " .lsgs-a12e7--jump-links{display:block;top:48px;bottom:48px;} .lsgs-a12e7--jump-links:not(.lsgs-a12e7--no-margin){margin-bottom:16px;}@media screen and (min-width:64rem){ .lsgs-a12e7--jump-links:not(.lsgs-a12e7--no-margin){margin-bottom:24px;}}@media screen and (min-width:64rem){ .lsgs-a12e7--jump-links{top:96px;bottom:96px;}}@media screen and (min-width:0.0625rem) and (max-width:39.99875rem){ .lsgs-a12e7--jump-links{display:none;}}.lsgs-a12e7--section__header-anchor-22  .lsgs-a12e7--jump-links{top:112px;}@media screen and (min-width:64rem){.lsgs-a12e7--section__header-anchor-22  .lsgs-a12e7--jump-links{top:120px;}}.lsgs-a12e7--section__header-anchor-16  .lsgs-a12e7--jump-links{top:88px;}@media screen and (min-width:64rem){.lsgs-a12e7--section__header-anchor-16  .lsgs-a12e7--jump-links{top:96px;}}.lsgs-a12e7--jump-links-inner{background-color:var(--lsg-color-col-background-light,#ffffff);}.lsg-a12e7---theme__medium .lsgs-a12e7--jump-links-inner{background-color:var(--lsg-color-col-background-medium,#F1EFED);}.lsg-a12e7---theme__hover .lsgs-a12e7--jump-links-inner{background-color:var(--lsg-color-col-background-elevated-light,#ECEFF2);}.lsg-a12e7---theme__dark .lsgs-a12e7--jump-links-inner{background-color:var(--lsg-color-col-background-dark,#002E3C);}.lsg-a12e7---theme__dark .lsg-a12e7---theme__hover .lsgs-a12e7--jump-links-inner,.lsg-a12e7---theme__dark .lsg-a12e7---theme__elevated .lsgs-a12e7--jump-links-inner{background-color:var(--lsg-color-col-background-elevated-dark,#103D4B);}.lsg-a12e7---theme__medium .lsg-a12e7---theme__elevated .lsgs-a12e7--jump-links-inner{background-color:var(--lsg-color-col-background-light,#ffffff);}.lsg-a12e7---theme__medium .lsg-a12e7---theme__hover .lsgs-a12e7--jump-links-inner,.lsg-a12e7---theme__contrast .lsgs-a12e7--jump-links-inner{background-color:var(--lsg-color-col-background-contrast-light,#E0E0DD);}.lsg-a12e7---theme__dark .lsg-a12e7---theme__elevated .lsg-a12e7---theme__hover .lsgs-a12e7--jump-links-inner,.lsg-a12e7---theme__dark .lsg-a12e7---theme__contrast .lsgs-a12e7--jump-links-inner{background-color:var(--lsg-color-col-background-contrast-dark,#1D4856);}.lsg-a12e7---theme__brand .lsgs-a12e7--jump-links-inner,.lsg-a12e7---theme__dark .lsg-a12e7---theme__brand .lsgs-a12e7--jump-links-inner{background-color:var(--lsg-color-col-background-brand,#FFD700);}";
const hostClass = "lsgs-a12e7--jump-links";
if (styleInject.hasOwnProperty("default")) {
  styleInject["default"](reactStyles);
} else {
  styleInject(reactStyles);
}
ssr.collectStyles(reactStyles);

exports.hostClass = hostClass;
exports.reactStyles = reactStyles;

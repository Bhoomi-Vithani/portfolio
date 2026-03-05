'use strict';

var styleInject = require('style-inject');
var ssr = require('@lsg/ssr');

const reactStyles = " .lsgs-a12e7--breadcrumbs{display:block;padding:24px 0;}@media screen and (min-width:64rem){ .lsgs-a12e7--breadcrumbs{padding:32px 0;}} .lsgs-a12e7--breadcrumbs.lsgs-a12e7--breadcrumbs__separator{border-bottom:1px solid;}@media screen and (max-width:63.99875rem){ .lsgs-a12e7--breadcrumbs.lsgs-a12e7--breadcrumbs__hide-sm{display:none;}}.lsgs-a12e7--breadcrumbs-ol{display:flex;flex-flow:row wrap;list-style-type:none;margin:0;padding:0;} .lsgs-a12e7--breadcrumbs.lsgs-a12e7--breadcrumbs__separator{border-bottom-color:var(--lsg-color-col-fine-line-light,#CED8DA);}.lsg-a12e7---theme__medium .lsgs-a12e7--breadcrumbs.lsgs-a12e7--breadcrumbs__separator{border-bottom-color:var(--lsg-color-col-fine-line-medium,#C3CAC8);}.lsg-a12e7---theme__hover .lsgs-a12e7--breadcrumbs.lsgs-a12e7--breadcrumbs__separator{border-bottom-color:var(--lsg-color-col-fine-line-elevated-light,#ABBAC0);}.lsg-a12e7---theme__dark .lsgs-a12e7--breadcrumbs.lsgs-a12e7--breadcrumbs__separator{border-bottom-color:var(--lsg-color-col-fine-line-dark,#1D4856);}.lsg-a12e7---theme__dark .lsg-a12e7---theme__hover .lsgs-a12e7--breadcrumbs.lsgs-a12e7--breadcrumbs__separator,.lsg-a12e7---theme__dark .lsg-a12e7---theme__elevated .lsgs-a12e7--breadcrumbs.lsgs-a12e7--breadcrumbs__separator{border-bottom-color:var(--lsg-color-col-fine-line-elevated-dark,#305764);}.lsg-a12e7---theme__medium .lsg-a12e7---theme__elevated .lsgs-a12e7--breadcrumbs.lsgs-a12e7--breadcrumbs__separator{border-bottom-color:var(--lsg-color-col-fine-line-light,#CED8DA);}.lsg-a12e7---theme__medium .lsg-a12e7---theme__hover .lsgs-a12e7--breadcrumbs.lsgs-a12e7--breadcrumbs__separator,.lsg-a12e7---theme__contrast .lsgs-a12e7--breadcrumbs.lsgs-a12e7--breadcrumbs__separator{border-bottom-color:var(--lsg-color-col-fine-line-contrast-light,#778F8D);}.lsg-a12e7---theme__dark .lsg-a12e7---theme__elevated .lsg-a12e7---theme__hover .lsgs-a12e7--breadcrumbs.lsgs-a12e7--breadcrumbs__separator,.lsg-a12e7---theme__dark .lsg-a12e7---theme__contrast .lsgs-a12e7--breadcrumbs.lsgs-a12e7--breadcrumbs__separator{border-bottom-color:var(--lsg-color-col-fine-line-contrast-dark,#5E7B83);}.lsg-a12e7---theme__brand .lsgs-a12e7--breadcrumbs.lsgs-a12e7--breadcrumbs__separator,.lsg-a12e7---theme__dark .lsg-a12e7---theme__brand .lsgs-a12e7--breadcrumbs.lsgs-a12e7--breadcrumbs__separator{border-bottom-color:var(--lsg-color-col-fine-line-brand,#ABBAC0);}";
const hostClass = "lsgs-a12e7--breadcrumbs";
if (styleInject.hasOwnProperty("default")) {
  styleInject["default"](reactStyles);
} else {
  styleInject(reactStyles);
}
ssr.collectStyles(reactStyles);

exports.hostClass = hostClass;
exports.reactStyles = reactStyles;

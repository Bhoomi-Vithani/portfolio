'use strict';

var styleInject = require('style-inject');
var ssr = require('@lsg/ssr');

const reactStyles = ".lsgs-a12e7--process-page-title{font-size:0.9375rem;line-height:calc(0.9375rem + 9px);letter-spacing:0.1px;font-family:var(--lsg-font-family-500,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-500,500);max-width:25rem;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;margin:0;}@media screen and (min-width:64rem){.lsgs-a12e7--process-page-title{font-size:1.0625rem;line-height:calc(1.0625rem + 11px);letter-spacing:0;font-family:var(--lsg-font-family-500,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-500,500);max-width:48rem;}}.lsgs-a12e7--process-page-logo-container{height:30px;}.lsgs-a12e7--process-page-inline-header{position:relative;border-bottom:1px solid #dddddd;margin:0 28px;padding-top:32px;}.lsgs-a12e7--process-page-inline-header .lsgs-a12e7--process-page-title{display:none;}.lsgs-a12e7--process-page-title{color:var(--lsg-color-col-text-primary-light,#002E3C);}.lsg-a12e7---theme__medium .lsgs-a12e7--process-page-title{color:var(--lsg-color-col-text-primary-medium,#002E3C);}.lsg-a12e7---theme__hover .lsgs-a12e7--process-page-title{color:var(--lsg-color-col-text-primary-elevated-light,#002530);}.lsg-a12e7---theme__dark .lsgs-a12e7--process-page-title{color:var(--lsg-color-col-text-primary-dark,#DBE2E5);}.lsg-a12e7---theme__dark .lsg-a12e7---theme__hover .lsgs-a12e7--process-page-title,.lsg-a12e7---theme__dark .lsg-a12e7---theme__elevated .lsgs-a12e7--process-page-title{color:var(--lsg-color-col-text-primary-elevated-dark,#E9EDF0);}.lsg-a12e7---theme__medium .lsg-a12e7---theme__elevated .lsgs-a12e7--process-page-title{color:var(--lsg-color-col-text-primary-light,#002E3C);}.lsg-a12e7---theme__medium .lsg-a12e7---theme__hover .lsgs-a12e7--process-page-title,.lsg-a12e7---theme__contrast .lsgs-a12e7--process-page-title{color:var(--lsg-color-col-text-primary-contrast-light,#002530);}.lsg-a12e7---theme__dark .lsg-a12e7---theme__elevated .lsg-a12e7---theme__hover .lsgs-a12e7--process-page-title,.lsg-a12e7---theme__dark .lsg-a12e7---theme__contrast .lsgs-a12e7--process-page-title{color:var(--lsg-color-col-text-primary-contrast-dark,#FFFFFF);}.lsg-a12e7---theme__brand .lsgs-a12e7--process-page-title,.lsg-a12e7---theme__dark .lsg-a12e7---theme__brand .lsgs-a12e7--process-page-title{color:var(--lsg-color-col-text-primary-brand,#002530);}";
const hostClass = "lsgs-a12e7--process-page";
if (styleInject.hasOwnProperty("default")) {
  styleInject["default"](reactStyles);
} else {
  styleInject(reactStyles);
}
ssr.collectStyles(reactStyles);

exports.hostClass = hostClass;
exports.reactStyles = reactStyles;

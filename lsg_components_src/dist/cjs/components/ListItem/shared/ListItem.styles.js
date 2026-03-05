'use strict';

var styleInject = require('style-inject');
var ssr = require('@lsg/ssr');

const reactStyles = " .lsgs-a12e7--list-item{color:var(--lsg-color-col-text-primary-light,#002E3C);padding-left:12px;text-wrap:pretty;}.lsg-a12e7---theme__medium .lsgs-a12e7--list-item{color:var(--lsg-color-col-text-primary-medium,#002E3C);padding-left:12px;text-wrap:pretty;}.lsg-a12e7---theme__hover .lsgs-a12e7--list-item{color:var(--lsg-color-col-text-primary-elevated-light,#002530);padding-left:12px;text-wrap:pretty;}.lsg-a12e7---theme__dark .lsgs-a12e7--list-item{color:var(--lsg-color-col-text-primary-dark,#DBE2E5);padding-left:12px;text-wrap:pretty;}.lsg-a12e7---theme__dark .lsg-a12e7---theme__hover .lsgs-a12e7--list-item,.lsg-a12e7---theme__dark .lsg-a12e7---theme__elevated .lsgs-a12e7--list-item{color:var(--lsg-color-col-text-primary-elevated-dark,#E9EDF0);padding-left:12px;text-wrap:pretty;}.lsg-a12e7---theme__medium .lsg-a12e7---theme__elevated .lsgs-a12e7--list-item{color:var(--lsg-color-col-text-primary-light,#002E3C);padding-left:12px;text-wrap:pretty;}.lsg-a12e7---theme__medium .lsg-a12e7---theme__hover .lsgs-a12e7--list-item,.lsg-a12e7---theme__contrast .lsgs-a12e7--list-item{color:var(--lsg-color-col-text-primary-contrast-light,#002530);padding-left:12px;text-wrap:pretty;}.lsg-a12e7---theme__dark .lsg-a12e7---theme__elevated .lsg-a12e7---theme__hover .lsgs-a12e7--list-item,.lsg-a12e7---theme__dark .lsg-a12e7---theme__contrast .lsgs-a12e7--list-item{color:var(--lsg-color-col-text-primary-contrast-dark,#FFFFFF);padding-left:12px;text-wrap:pretty;}.lsg-a12e7---theme__brand .lsgs-a12e7--list-item,.lsg-a12e7---theme__dark .lsg-a12e7---theme__brand .lsgs-a12e7--list-item{color:var(--lsg-color-col-text-primary-brand,#002530);padding-left:12px;text-wrap:pretty;}";
const hostClass = "lsgs-a12e7--list-item";
if (styleInject.hasOwnProperty("default")) {
  styleInject["default"](reactStyles);
} else {
  styleInject(reactStyles);
}
ssr.collectStyles(reactStyles);

exports.hostClass = hostClass;
exports.reactStyles = reactStyles;

'use strict';

var styleInject = require('style-inject');
var ssr = require('@lsg/ssr');

const reactStyles = ".lsgs-a12e7--banner-message{display:block;border-radius:16px;margin:0;}.lsgs-a12e7--banner-message:not(.lsgs-a12e7--no-margin){margin-bottom:24px;}@media screen and (min-width:64rem){.lsgs-a12e7--banner-message:not(.lsgs-a12e7--no-margin){margin-bottom:32px;}}.lsgs-a12e7--banner-message__with-heading .lsgs-a12e7--message-container{padding:24px;}.lsgs-a12e7--banner-message .lsgs-a12e7--info-text{max-width:768px;}@media (forced-colors:active){.lsgs-a12e7--banner-message .lsgs-a12e7--message-container{border:3px solid;border-radius:16px;}}.lsgs-a12e7--banner-message{background-color:var(--lsg-color-neutral-1-light,#ECEFF2);}.lsg-a12e7---theme__medium .lsgs-a12e7--banner-message{background-color:var(--lsg-color-neutral-1-medium,#E0E0DD);}.lsg-a12e7---theme__hover .lsgs-a12e7--banner-message{background-color:var(--lsg-color-neutral-1-elevated-light,#CED8DA);}.lsg-a12e7---theme__dark .lsgs-a12e7--banner-message{background-color:var(--lsg-color-neutral-1-dark,#103D4B);}.lsg-a12e7---theme__dark .lsg-a12e7---theme__hover .lsgs-a12e7--banner-message,.lsg-a12e7---theme__dark .lsg-a12e7---theme__elevated .lsgs-a12e7--banner-message{background-color:var(--lsg-color-neutral-1-elevated-dark,#204A58);}.lsg-a12e7---theme__medium .lsg-a12e7---theme__elevated .lsgs-a12e7--banner-message{background-color:var(--lsg-color-neutral-1-light,#ECEFF2);}.lsg-a12e7---theme__medium .lsg-a12e7---theme__hover .lsgs-a12e7--banner-message,.lsg-a12e7---theme__contrast .lsgs-a12e7--banner-message{background-color:var(--lsg-color-neutral-1-contrast-light,#A0AEAC);}.lsg-a12e7---theme__dark .lsg-a12e7---theme__elevated .lsg-a12e7---theme__hover .lsgs-a12e7--banner-message,.lsg-a12e7---theme__dark .lsg-a12e7---theme__contrast .lsgs-a12e7--banner-message{background-color:var(--lsg-color-neutral-1-contrast-dark,#426671);}.lsg-a12e7---theme__brand .lsgs-a12e7--banner-message,.lsg-a12e7---theme__dark .lsg-a12e7---theme__brand .lsgs-a12e7--banner-message{background-color:var(--lsg-color-neutral-1-brand,#CED8DA);}@media screen and (prefers-reduced-motion:no-preference){.lsgs-a12e7--banner-message__exiting{animation:fadeOut 300ms forwards;}@keyframes fadeOut{0%{opacity:100;}100%{opacity:0;}}}";
const hostClass = "lsgs-a12e7--banner-message";
if (styleInject.hasOwnProperty("default")) {
  styleInject["default"](reactStyles);
} else {
  styleInject(reactStyles);
}
ssr.collectStyles(reactStyles);

exports.hostClass = hostClass;
exports.reactStyles = reactStyles;

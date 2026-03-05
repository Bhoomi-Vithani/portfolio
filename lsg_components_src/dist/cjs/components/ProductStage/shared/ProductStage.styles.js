'use strict';

var styleInject = require('style-inject');
var ssr = require('@lsg/ssr');

const reactStyles = ".lsgs-a12e7--product-stage{margin:0 32px;}.lsgs-a12e7--product-stage-wrapper{display:flex;flex-direction:column;position:relative;margin:0 auto;}@media screen and (min-width:1024px) and (orientation:portrait){.lsgs-a12e7--product-stage-wrapper{min-height:30vh;}}@media screen and (min-width:64rem){.lsgs-a12e7--product-stage-wrapper{flex-direction:row-reverse;min-height:55vh;max-width:1024px;}}@media screen and (min-width:74.75rem){.lsgs-a12e7--product-stage-wrapper{width:86%;max-width:1440px;}}.lsgs-a12e7--product-stage-content{padding:24px 0;}@media screen and (min-width:64rem){.lsgs-a12e7--product-stage-content{padding:32px 0;}}@media screen and (min-width:64rem){.lsgs-a12e7--product-stage-content{width:58%;margin:auto 0;position:relative;box-sizing:border-box;padding:32px 32px 32px 0;}}.lsgs-a12e7--product-stage-visual{position:relative;width:100vw;margin-left:-32px;}.lsgs-a12e7--product-stage-visual .lsgs-a12e7--picture-background{width:calc(42vw + 32px);}.lsgs-a12e7--product-stage-visual__clipped{padding:24px;width:auto;}@media screen and (min-width:40rem){.lsgs-a12e7--product-stage-visual__clipped{padding:32px;}}@media screen and (min-width:64rem){.lsgs-a12e7--product-stage-visual{position:initial;margin:0;width:42%;}.lsgs-a12e7--product-stage-visual__clipped{box-sizing:border-box;height:100%;display:flex;align-items:center;}}@media screen and (min-width:105rem){.lsgs-a12e7--product-stage-visual .lsgs-a12e7--picture-background{width:47vw;}}.lsgs-a12e7--product-stage-visual__primary{background-color:var(--lsg-color-brand-primary-1-brand,#FFD700);box-shadow:-32px -64px 0 64px var(--lsg-color-brand-primary-1-brand,#FFD700);}@media screen and (min-width:64rem){.lsgs-a12e7--product-stage-visual__primary{box-shadow:100vw -100vw 0 100vw var(--lsg-color-brand-primary-1-brand,#FFD700);}}.lsgs-a12e7--product-stage-visual__medium{background-color:var(--lsg-color-col-background-medium,#F1EFED);box-shadow:-32px -64px 0 64px var(--lsg-color-col-background-medium,#F1EFED);}@media screen and (min-width:64rem){.lsgs-a12e7--product-stage-visual__medium{box-shadow:100vw -100vw 0 100vw var(--lsg-color-col-background-medium,#F1EFED);}}.lsgs-a12e7--product-stage-visual__light{background-color:var(--lsg-color-col-background-light,#ffffff);}.lsgs-a12e7--product-stage-action-button .lsgs-a12e7--button{margin-bottom:0;}.lsgs-a12e7--product-stage-action-button__sticky{z-index:20;position:fixed;bottom:0;}@media screen and (max-width:39.99875rem){.lsgs-a12e7--product-stage-action-button__sticky{right:24px;left:24px;}}@media screen and (prefers-reduced-motion:no-preference){.lsgs-a12e7--product-stage-scroller-icon{animation-direction:alternate;animation-duration:500ms;animation-iteration-count:6;animation-name:bounce;animation-timing-function:ease-in;}}";
const hostClass = "lsgs-a12e7--product-stage";
if (styleInject.hasOwnProperty("default")) {
  styleInject["default"](reactStyles);
} else {
  styleInject(reactStyles);
}
ssr.collectStyles(reactStyles);

exports.hostClass = hostClass;
exports.reactStyles = reactStyles;

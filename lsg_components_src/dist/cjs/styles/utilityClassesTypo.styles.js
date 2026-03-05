'use strict';

var styleInject = require('style-inject');
var ssr = require('@lsg/ssr');

const reactStyles = ".lsg-a12e7---typo-1-1{font-size:2rem;line-height:calc(2rem + 8px);letter-spacing:-0.4px;font-family:var(--lsg-font-family-700,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-700,700);max-width:32.5rem;}@media screen and (min-width:64rem){.lsg-a12e7---typo-1-1{font-size:2.75rem;line-height:calc(2.75rem + 8px);letter-spacing:-0.4px;font-family:var(--lsg-font-family-700,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-700,700);max-width:61.25rem;}}@media screen and (min-width:74.75rem){.lsg-a12e7---typo-1-1{font-size:3.375rem;line-height:calc(3.375rem + 8px);letter-spacing:-0.6px;}}@media screen and (min-width:105rem){.lsg-a12e7---typo-1-1{font-size:3.875rem;line-height:calc(3.875rem + 6px);letter-spacing:-0.6px;max-width:75rem;}}@media screen and (min-width:120rem){.lsg-a12e7---typo-1-1{font-size:4.5rem;line-height:calc(4.5rem + 8px);letter-spacing:-1px;}}.lsg-a12e7---typo-1-3{font-size:2rem;line-height:calc(2rem + 8px);letter-spacing:-0.4px;font-family:var(--lsg-font-family-400,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-400,400);max-width:32.5rem;}@media screen and (min-width:64rem){.lsg-a12e7---typo-1-3{font-size:2.75rem;line-height:calc(2.75rem + 8px);letter-spacing:-0.4px;font-family:var(--lsg-font-family-400,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-400,400);max-width:61.25rem;}}@media screen and (min-width:74.75rem){.lsg-a12e7---typo-1-3{font-size:3.375rem;line-height:calc(3.375rem + 8px);letter-spacing:-0.6px;}}@media screen and (min-width:105rem){.lsg-a12e7---typo-1-3{font-size:3.875rem;line-height:calc(3.875rem + 6px);letter-spacing:-0.6px;max-width:75rem;}}@media screen and (min-width:120rem){.lsg-a12e7---typo-1-3{font-size:4.5rem;line-height:calc(4.5rem + 8px);letter-spacing:-1px;}}.lsg-a12e7---typo-2-1{font-size:1.6875rem;line-height:calc(1.6875rem + 9px);letter-spacing:-0.2px;font-family:var(--lsg-font-family-700,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-500,500);max-width:32.5rem;}@media screen and (min-width:64rem){.lsg-a12e7---typo-2-1{font-size:2rem;line-height:calc(2rem + 8px);letter-spacing:-0.2px;font-family:var(--lsg-font-family-700,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-700,700);max-width:55rem;}}@media screen and (min-width:74.75rem){.lsg-a12e7---typo-2-1{font-size:2.625rem;line-height:calc(2.625rem + 8px);letter-spacing:-0.4px;}}@media screen and (min-width:105rem){.lsg-a12e7---typo-2-1{font-size:3.25rem;line-height:calc(3.25rem + 8px);letter-spacing:-0.4px;max-width:68.75rem;}}@media screen and (min-width:120rem){.lsg-a12e7---typo-2-1{font-size:3.75rem;line-height:calc(3.75rem + 8px);letter-spacing:-0.6px;}}.lsg-a12e7---typo-2-3{font-size:1.6875rem;line-height:calc(1.6875rem + 9px);letter-spacing:-0.2px;font-family:var(--lsg-font-family-400,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-400,400);max-width:32.5rem;}@media screen and (min-width:64rem){.lsg-a12e7---typo-2-3{font-size:2rem;line-height:calc(2rem + 8px);letter-spacing:-0.2px;font-family:var(--lsg-font-family-400,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-400,400);max-width:55rem;}}@media screen and (min-width:74.75rem){.lsg-a12e7---typo-2-3{font-size:2.625rem;line-height:calc(2.625rem + 8px);letter-spacing:-0.4px;}}@media screen and (min-width:105rem){.lsg-a12e7---typo-2-3{font-size:3.25rem;line-height:calc(3.25rem + 8px);letter-spacing:-0.4px;max-width:68.75rem;}}@media screen and (min-width:120rem){.lsg-a12e7---typo-2-3{font-size:3.75rem;line-height:calc(3.75rem + 8px);letter-spacing:-0.6px;}}.lsg-a12e7---typo-3-2{font-size:1.375rem;line-height:calc(1.375rem + 10px);letter-spacing:-0.1px;font-family:var(--lsg-font-family-500,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-500,500);max-width:40rem;}@media screen and (min-width:64rem){.lsg-a12e7---typo-3-2{font-size:1.6875rem;line-height:calc(1.6875rem + 9px);letter-spacing:-0.2px;font-family:var(--lsg-font-family-500,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-500,500);max-width:48.75rem;}}@media screen and (min-width:74.75rem){.lsg-a12e7---typo-3-2{font-size:2rem;line-height:calc(2rem + 8px);letter-spacing:-0.2px;}}@media screen and (min-width:105rem){.lsg-a12e7---typo-3-2{font-size:2.25rem;line-height:calc(2.25rem + 8px);letter-spacing:-0.2px;max-width:50rem;}}@media screen and (min-width:120rem){.lsg-a12e7---typo-3-2{font-size:2.5rem;line-height:calc(2.5rem + 10px);letter-spacing:-0.4px;}}.lsg-a12e7---typo-3-3{font-size:1.375rem;line-height:calc(1.375rem + 10px);letter-spacing:-0.1px;font-family:var(--lsg-font-family-400,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-400,400);max-width:40rem;}@media screen and (min-width:64rem){.lsg-a12e7---typo-3-3{font-size:1.6875rem;line-height:calc(1.6875rem + 9px);letter-spacing:-0.2px;font-family:var(--lsg-font-family-400,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-400,400);max-width:48.75rem;}}@media screen and (min-width:74.75rem){.lsg-a12e7---typo-3-3{font-size:2rem;line-height:calc(2rem + 8px);letter-spacing:-0.2px;}}@media screen and (min-width:105rem){.lsg-a12e7---typo-3-3{max-width:50rem;}}.lsg-a12e7---typo-4-2{font-size:1.125rem;line-height:calc(1.125rem + 10px);letter-spacing:0;font-family:var(--lsg-font-family-500,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-500,500);max-width:40rem;}@media screen and (min-width:64rem){.lsg-a12e7---typo-4-2{font-size:1.375rem;line-height:calc(1.375rem + 10px);letter-spacing:-0.1px;font-family:var(--lsg-font-family-500,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-500,500);max-width:48rem;}}.lsg-a12e7---typo-4-3{font-size:1.125rem;line-height:calc(1.125rem + 10px);letter-spacing:0;font-family:var(--lsg-font-family-400,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-400,400);max-width:40rem;}@media screen and (min-width:64rem){.lsg-a12e7---typo-4-3{font-size:1.375rem;line-height:calc(1.375rem + 10px);letter-spacing:-0.1px;font-family:var(--lsg-font-family-400,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-400,400);max-width:48rem;}}.lsg-a12e7---typo-5-2{font-size:0.9375rem;line-height:calc(0.9375rem + 9px);letter-spacing:0.1px;font-family:var(--lsg-font-family-500,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-500,500);max-width:35.5rem;}@media screen and (min-width:64rem){.lsg-a12e7---typo-5-2{font-size:1.0625rem;line-height:calc(1.0625rem + 11px);letter-spacing:0;font-family:var(--lsg-font-family-500,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-500,500);max-width:48rem;}}.lsg-a12e7---typo-5-3{font-size:0.9375rem;line-height:calc(0.9375rem + 9px);letter-spacing:0.1px;font-family:var(--lsg-font-family-400,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-400,400);max-width:35.5rem;}@media screen and (min-width:64rem){.lsg-a12e7---typo-5-3{font-size:1.0625rem;line-height:calc(1.0625rem + 11px);letter-spacing:0;font-family:var(--lsg-font-family-400,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-400,400);max-width:48rem;}}.lsg-a12e7---typo-6-2{font-size:0.8125rem;line-height:calc(0.8125rem + 7px);letter-spacing:0.1px;font-family:var(--lsg-font-family-500,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-500,500);max-width:35.5rem;}@media screen and (min-width:64rem){.lsg-a12e7---typo-6-2{font-size:0.9375rem;line-height:calc(0.9375rem + 9px);letter-spacing:0.1px;font-family:var(--lsg-font-family-500,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-500,500);max-width:48rem;}}.lsg-a12e7---typo-6-3{font-size:0.8125rem;line-height:calc(0.8125rem + 7px);letter-spacing:0.1px;font-family:var(--lsg-font-family-400,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-400,400);max-width:35.5rem;}@media screen and (min-width:64rem){.lsg-a12e7---typo-6-3{font-size:0.9375rem;line-height:calc(0.9375rem + 9px);letter-spacing:0.1px;font-family:var(--lsg-font-family-400,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-400,400);max-width:48rem;}}.lsg-a12e7---typo-7-1{font-size:0.6875rem;line-height:calc(0.6875rem + 7px);font-family:var(--lsg-font-family-700,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-700,700);letter-spacing:0.4px;max-width:46rem;}@media screen and (min-width:64rem){.lsg-a12e7---typo-7-1{font-size:0.8125rem;line-height:calc(0.8125rem + 7px);font-family:var(--lsg-font-family-700,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-700,700);letter-spacing:0.3px;max-width:55rem;}}@media screen and (min-width:105rem){.lsg-a12e7---typo-7-1{max-width:55rem;}}.lsg-a12e7---typo-7-2{font-size:0.6875rem;line-height:calc(0.6875rem + 7px);font-family:var(--lsg-font-family-500,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-500,500);letter-spacing:0.3px;max-width:46rem;}@media screen and (min-width:64rem){.lsg-a12e7---typo-7-2{font-size:0.8125rem;line-height:calc(0.8125rem + 7px);font-family:var(--lsg-font-family-500,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-500,500);letter-spacing:0.2px;max-width:55rem;}}@media screen and (min-width:105rem){.lsg-a12e7---typo-7-2{max-width:55rem;}}.lsg-a12e7---typo-7-3{font-size:0.6875rem;line-height:calc(0.6875rem + 7px);font-family:var(--lsg-font-family-400,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-400,400);letter-spacing:0.2px;max-width:46rem;}@media screen and (min-width:64rem){.lsg-a12e7---typo-7-3{font-size:0.8125rem;line-height:calc(0.8125rem + 7px);font-family:var(--lsg-font-family-400,\"Gotham\",sans-serif);font-weight:var(--lsg-font-weight-400,400);letter-spacing:0.2px;max-width:55rem;}}@media screen and (min-width:105rem){.lsg-a12e7---typo-7-3{max-width:55rem;}}";
const utilityClassesTypo = {
  "1.1": "lsg-a12e7---typo-1-1",
  "1.3": "lsg-a12e7---typo-1-3",
  "2.1": "lsg-a12e7---typo-2-1",
  "2.3": "lsg-a12e7---typo-2-3",
  "3.2": "lsg-a12e7---typo-3-2",
  "3.3": "lsg-a12e7---typo-3-3",
  "4.2": "lsg-a12e7---typo-4-2",
  "4.3": "lsg-a12e7---typo-4-3",
  "5.2": "lsg-a12e7---typo-5-2",
  "5.3": "lsg-a12e7---typo-5-3",
  "6.2": "lsg-a12e7---typo-6-2",
  "6.3": "lsg-a12e7---typo-6-3",
  "7.1": "lsg-a12e7---typo-7-1",
  "7.2": "lsg-a12e7---typo-7-2",
  "7.3": "lsg-a12e7---typo-7-3",
  "h1": "lsg-a12e7---typo-1-1",
  "h2": "lsg-a12e7---typo-2-1",
  "h3": "lsg-a12e7---typo-3-2",
  "h4": "lsg-a12e7---typo-4-2",
  "h5": "lsg-a12e7---typo-5-2",
  "h6": "lsg-a12e7---typo-6-2",
  "h1Thin": "lsg-a12e7---typo-1-3",
  "h2Thin": "lsg-a12e7---typo-2-3",
  "h3Thin": "lsg-a12e7---typo-3-3",
  "h4Thin": "lsg-a12e7---typo-4-3",
  "h5Thin": "lsg-a12e7---typo-5-3",
  "h6Thin": "lsg-a12e7---typo-6-3",
  "textLead": "lsg-a12e7---typo-4-3",
  "textSignal": "lsg-a12e7---typo-4-2",
  "textOverline": "lsg-a12e7---typo-4-3",
  "textCopy": "lsg-a12e7---typo-5-3",
  "textCopyStrong": "lsg-a12e7---typo-5-2",
  "textLabelInteractive": "lsg-a12e7---typo-6-2",
  "textInfo": "lsg-a12e7---typo-6-3",
  "textInfoStrong": "lsg-a12e7---typo-6-2",
  "textFootnote": "lsg-a12e7---typo-7-3",
  "textDisclaimer": "lsg-a12e7---typo-7-3",
  "textCaption": "lsg-a12e7---typo-7-3",
  "textLabelSm": "lsg-a12e7---typo-7-3",
  "textHelper": "lsg-a12e7---typo-7-3",
  "textError": "lsg-a12e7---typo-7-3"
};
if (styleInject.hasOwnProperty("default")) {
  styleInject["default"](reactStyles);
} else {
  styleInject(reactStyles);
}
ssr.collectStyles(reactStyles);

exports.reactStyles = reactStyles;
exports.utilityClassesTypo = utilityClassesTypo;

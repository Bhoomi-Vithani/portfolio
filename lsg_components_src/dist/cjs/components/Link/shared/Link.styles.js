'use strict';

var styleInject = require('style-inject');
var ssr = require('@lsg/ssr');

const reactStyles = ".lsgs-a12e7--link{display:inline;font-family:inherit;font-size:inherit;line-height:normal;font-weight:500;text-decoration:none;border-bottom:1px solid;padding-bottom:1px;text-indent:0;word-break:break-word;}.lsgs-a12e7--link:active:not(.lsgs-a12e7--link__nonInteractive):not(.lsgs-a12e7--link__disabled){border-bottom:3px solid;padding-bottom:0;margin-bottom:1px;}.lsgs-a12e7--link__footnote{border:0;font-weight:inherit;}.lsgs-a12e7--link__footnote sup{font-size:0.55em;font-size:max(0.55em,0.625rem);text-decoration:underline;text-underline-offset:2px;text-decoration-thickness:1px;margin-left:0.25em;}.lsgs-a12e7--link__hover,.lsgs-a12e7--link__hover-area  .lsgs-a12e7--link{border-bottom:2px solid;padding-bottom:0;}.lsgs-a12e7--link__hover sup,.lsgs-a12e7--link__hover-area  .lsgs-a12e7--link sup{text-decoration-thickness:2px;}.lsgs-a12e7--link__hover.lsgs-a12e7--link__footnote,.lsgs-a12e7--link__hover-area  .lsgs-a12e7--link.lsgs-a12e7--link__footnote{border:0;}.lsgs-a12e7--eyecatcher .lsgs-a12e7--link__hover{color:var(--lsg-color-dark-accent,#002530);}";
const hostClass = "lsgs-a12e7--link";
if (styleInject.hasOwnProperty("default")) {
  styleInject["default"](reactStyles);
} else {
  styleInject(reactStyles);
}
ssr.collectStyles(reactStyles);

exports.hostClass = hostClass;
exports.reactStyles = reactStyles;

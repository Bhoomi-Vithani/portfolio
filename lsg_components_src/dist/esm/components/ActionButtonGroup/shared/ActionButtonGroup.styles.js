import styleInject from 'style-inject';
import { collectStyles } from '@lsg/ssr';

const reactStyles = " .lsgs-a12e7--action-button-group{display:flex;gap:16px;justify-content:center;flex-flow:row wrap;list-style:none;margin:0;padding:0;}@media screen and (min-width:64rem){ .lsgs-a12e7--action-button-group{gap:32px;}} .lsgs-a12e7--action-button-group:not(.lsgs-a12e7--no-margin){margin-bottom:40px;}@media screen and (min-width:64rem){ .lsgs-a12e7--action-button-group:not(.lsgs-a12e7--no-margin){margin-bottom:48px;}}.lsgs-a12e7--footer-contact-area  .lsgs-a12e7--action-button-group{gap:0;flex-wrap:nowrap;}@media screen and (min-width:0.0625rem) and (max-width:39.99875rem){.lsgs-a12e7--footer-contact-area  .lsgs-a12e7--action-button-group{flex-wrap:wrap;}}";
const hostClass = "lsgs-a12e7--action-button-group";
if (styleInject.hasOwnProperty("default")) {
    styleInject["default"](reactStyles);
}
else {
    styleInject(reactStyles);
}
collectStyles(reactStyles);

export { hostClass, reactStyles };

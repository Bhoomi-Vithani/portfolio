import styleInject from 'style-inject';
import { collectStyles } from '@lsg/ssr';

const reactStyles = " .lsgs-a12e7--button-group{list-style:none;margin:0;padding:0;display:block;} .lsgs-a12e7--button-group:not(.lsgs-a12e7--no-margin){margin-bottom:24px;}@media screen and (min-width:64rem){ .lsgs-a12e7--button-group:not(.lsgs-a12e7--no-margin){margin-bottom:32px;}}.lsgs-a12e7--action-group .lsgs-a12e7--button-group:not(.lsgs-a12e7--no-margin){margin-bottom:0px;}@media screen and (min-width:64rem){.lsgs-a12e7--action-group .lsgs-a12e7--button-group:not(.lsgs-a12e7--no-margin){margin-bottom:0px;}}.lsgs-a12e7--button-group{display:flex;-moz-column-gap:32px;column-gap:32px;row-gap:16px;}@media screen and (min-width:64rem){.lsgs-a12e7--button-group{row-gap:32px;}}.lsgs-a12e7--button-group__vertical{flex-flow:column wrap;}@media screen and (min-width:40rem){.lsgs-a12e7--button-group__vertical.lsgs-a12e7--button-group__left{align-items:flex-start;}.lsgs-a12e7--button-group__vertical.lsgs-a12e7--button-group__center{align-items:center;}.lsgs-a12e7--button-group__vertical.lsgs-a12e7--button-group__right{align-items:flex-end;}}.lsgs-a12e7--button-group__horizontal{flex-flow:row wrap;align-items:flex-start;}.lsgs-a12e7--button-group__horizontal.lsgs-a12e7--button-group__center{justify-content:center;}.lsgs-a12e7--button-group__horizontal.lsgs-a12e7--button-group__right:not(.lsgs-a12e7--button-group__noFlip){flex-flow:row-reverse wrap;}";
const hostClass = "lsgs-a12e7--button-group";
if (styleInject.hasOwnProperty("default")) {
    styleInject["default"](reactStyles);
}
else {
    styleInject(reactStyles);
}
collectStyles(reactStyles);

export { hostClass, reactStyles };

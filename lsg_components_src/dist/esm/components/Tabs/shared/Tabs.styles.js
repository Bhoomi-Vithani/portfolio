import styleInject from 'style-inject';
import { collectStyles } from '@lsg/ssr';

const reactStyles = " .lsgs-a12e7--tabs{display:block;} .lsgs-a12e7--tabs:not(.lsgs-a12e7--no-margin){margin-bottom:24px;}@media screen and (min-width:64rem){ .lsgs-a12e7--tabs:not(.lsgs-a12e7--no-margin){margin-bottom:32px;}}.lsgs-a12e7--tabs-panel{margin-top:24px;}@media screen and (min-width:40rem){.lsgs-a12e7--tabs-panel{margin-top:32px;}}";
const hostClass = "lsgs-a12e7--tabs";
if (styleInject.hasOwnProperty("default")) {
    styleInject["default"](reactStyles);
}
else {
    styleInject(reactStyles);
}
collectStyles(reactStyles);

export { hostClass, reactStyles };

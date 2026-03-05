import styleInject from 'style-inject';
import { collectStyles } from '@lsg/ssr';

const reactStyles = " .lsgs-a12e7--date-picker{display:block;} .lsgs-a12e7--date-picker:not(.lsgs-a12e7--no-margin){margin-bottom:16px;}@media screen and (min-width:64rem){ .lsgs-a12e7--date-picker:not(.lsgs-a12e7--no-margin){margin-bottom:24px;}}@media screen and (min-width:428px){ .lsgs-a12e7--date-picker{position:relative;}}.lsgs-a12e7--date-picker-chip{display:inline-block;}";
const hostClass = "lsgs-a12e7--date-picker";
if (styleInject.hasOwnProperty("default")) {
    styleInject["default"](reactStyles);
}
else {
    styleInject(reactStyles);
}
collectStyles(reactStyles);

export { hostClass, reactStyles };

import styleInject from 'style-inject';
import { collectStyles } from '@lsg/ssr';

const reactStyles = " .lsgs-a12e7--accordion-group{display:block;margin-top:0;margin-bottom:0;} .lsgs-a12e7--accordion-group:not(.lsgs-a12e7--no-margin){margin-bottom:24px;}@media screen and (min-width:64rem){ .lsgs-a12e7--accordion-group:not(.lsgs-a12e7--no-margin){margin-bottom:32px;}}";
const hostClass = "lsgs-a12e7--accordion-group";
if (styleInject.hasOwnProperty("default")) {
    styleInject["default"](reactStyles);
}
else {
    styleInject(reactStyles);
}
collectStyles(reactStyles);

export { hostClass, reactStyles };

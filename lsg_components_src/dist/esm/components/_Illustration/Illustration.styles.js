import styleInject from 'style-inject';
import { collectStyles } from '@lsg/ssr';

const reactStyles = " .lsgs-a12e7--illustration{display:block;} .lsgs-a12e7--illustration:not(.lsgs-a12e7--no-margin){margin-bottom:16px;}@media screen and (min-width:64rem){ .lsgs-a12e7--illustration:not(.lsgs-a12e7--no-margin){margin-bottom:24px;}}.lsgs-a12e7--illustration-img{display:block;max-width:100%;width:192px;height:auto;}.lsgs-a12e7--illustration-img__small,.lsgs-a12e7--illustration-img__responsive{width:96px;}@media screen and (min-width:64rem){.lsgs-a12e7--illustration-img__responsive{width:192px;margin:24px;}}.lsgs-a12e7--illustration-img__large{width:192px;}";
const hostClass = "lsgs-a12e7--illustration";
if (styleInject.hasOwnProperty("default")) {
    styleInject["default"](reactStyles);
}
else {
    styleInject(reactStyles);
}
collectStyles(reactStyles);

export { hostClass, reactStyles };

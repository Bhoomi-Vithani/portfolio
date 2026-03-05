import styleInject from 'style-inject';
import { collectStyles } from '@lsg/ssr';

const reactStyles = " .lsgs-a12e7--article-list{display:block;} .lsgs-a12e7--article-list:not(.lsgs-a12e7--no-margin){margin-bottom:24px;}@media screen and (min-width:64rem){ .lsgs-a12e7--article-list:not(.lsgs-a12e7--no-margin){margin-bottom:32px;}}.lsgs-a12e7--article-list-list{list-style:none;margin:0;padding:0;}";
const hostClass = "lsgs-a12e7--article-list";
if (styleInject.hasOwnProperty("default")) {
    styleInject["default"](reactStyles);
}
else {
    styleInject(reactStyles);
}
collectStyles(reactStyles);

export { hostClass, reactStyles };

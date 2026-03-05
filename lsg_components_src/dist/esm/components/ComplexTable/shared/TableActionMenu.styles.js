import styleInject from 'style-inject';
import { collectStyles } from '@lsg/ssr';

const reactStyles = " .lsgs-a12e7--table-action-menu{width:-moz-max-content;width:max-content;margin-left:auto;display:flex;flex-direction:row;-moz-column-gap:12px;column-gap:12px;}";
const hostClass = "lsgs-a12e7--table-action-menu";
if (styleInject.hasOwnProperty("default")) {
    styleInject["default"](reactStyles);
}
else {
    styleInject(reactStyles);
}
collectStyles(reactStyles);

export { hostClass, reactStyles };

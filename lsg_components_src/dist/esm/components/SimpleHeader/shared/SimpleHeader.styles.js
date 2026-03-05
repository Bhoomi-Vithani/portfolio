import styleInject from 'style-inject';
import { collectStyles } from '@lsg/ssr';

const reactStyles = " .lsgs-a12e7--simple-header{display:block;}.lsgs-a12e7--simple-header-navigation{margin-right:48px;}";
const hostClass = "lsgs-a12e7--simple-header";
if (styleInject.hasOwnProperty("default")) {
    styleInject["default"](reactStyles);
}
else {
    styleInject(reactStyles);
}
collectStyles(reactStyles);

export { hostClass, reactStyles };

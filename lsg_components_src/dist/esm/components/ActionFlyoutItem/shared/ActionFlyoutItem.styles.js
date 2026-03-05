import styleInject from 'style-inject';
import { collectStyles } from '@lsg/ssr';

const reactStyles = " .lsgs-a12e7--action-flyout-item{display:block;margin:8px;}";
const hostClass = "lsgs-a12e7--action-flyout-item";
if (styleInject.hasOwnProperty("default")) {
    styleInject["default"](reactStyles);
}
else {
    styleInject(reactStyles);
}
collectStyles(reactStyles);

export { hostClass, reactStyles };

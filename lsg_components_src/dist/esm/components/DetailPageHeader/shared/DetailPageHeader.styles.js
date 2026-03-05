import styleInject from 'style-inject';
import { collectStyles } from '@lsg/ssr';

const reactStyles = " .lsgs-a12e7--detailPage-header{display:block;}.lsgs-a12e7--detailPage-header-actions-container > *:not(.lsgs--no-margin){margin-bottom:0;}";
const hostClass = "lsgs-a12e7--detailPage-header";
if (styleInject.hasOwnProperty("default")) {
    styleInject["default"](reactStyles);
}
else {
    styleInject(reactStyles);
}
collectStyles(reactStyles);

export { hostClass, reactStyles };

import styleInject from 'style-inject';
import { collectStyles } from '@lsg/ssr';

const reactStyles = " .lsgs-a12e7--stepper{display:block;}";
const hostClass = "lsgs-a12e7--stepper";
if (styleInject.hasOwnProperty("default")) {
    styleInject["default"](reactStyles);
}
else {
    styleInject(reactStyles);
}
collectStyles(reactStyles);

export { hostClass, reactStyles };

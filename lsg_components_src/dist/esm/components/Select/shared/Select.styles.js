import styleInject from 'style-inject';
import { collectStyles } from '@lsg/ssr';

const reactStyles = " .lsgs-a12e7--select{display:block;margin-bottom:32px;}.lsgs-a12e7--select__dense{margin-bottom:24px;}.lsgs-a12e7--no-margin{margin-bottom:0;}.lsgs-a12e7--hidden{display:none;}.lsgs-a12e7--select-chip{display:inline-block;}.lsgs-a12e7--select-chip.lsgs-a12e7--select-hidden{display:none;}";
const hostClass = "lsgs-a12e7--select";
if (styleInject.hasOwnProperty("default")) {
    styleInject["default"](reactStyles);
}
else {
    styleInject(reactStyles);
}
collectStyles(reactStyles);

export { hostClass, reactStyles };

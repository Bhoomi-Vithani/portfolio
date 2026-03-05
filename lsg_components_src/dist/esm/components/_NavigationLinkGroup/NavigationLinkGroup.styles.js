import styleInject from 'style-inject';
import { collectStyles } from '@lsg/ssr';

const reactStyles = " .lsgs-a12e7--navigation-link-group{display:flex;flex-wrap:wrap;flex-direction:row;list-style-image:none;list-style-type:none;padding:0;margin:24px -8px;}.lsgs-a12e7--navigation-link-group-centered-layout{justify-content:center;margin:0 0 24px 0;}@media screen and (min-width:64rem){.lsgs-a12e7--navigation-link-group-centered-layout{margin:24px 0;}}";
const hostClass = "lsgs-a12e7--navigation-link-group";
if (styleInject.hasOwnProperty("default")) {
    styleInject["default"](reactStyles);
}
else {
    styleInject(reactStyles);
}
collectStyles(reactStyles);

export { hostClass, reactStyles };

import styleInject from 'style-inject';
import { collectStyles } from '@lsg/ssr';

const reactStyles = ".lsgs-a12e7--grid-row{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;width:100%;-moz-column-gap:32px;column-gap:32px;}.lsgs-a12e7--grid__centered > .lsgs-a12e7--grid-row{justify-content:center;}.lsgs-a12e7--grid-row-align-top{align-items:start;}.lsgs-a12e7--grid-row-align-middle{align-items:center;}.lsgs-a12e7--grid-row-align-bottom{align-items:end;}@media screen and (min-width:0.0625rem){.lsgs-a12e7--grid-row,.lsgs-a12e7--grid__additional-spacing-small .lsgs-a12e7--grid-row{row-gap:24px;}.lsgs-a12e7--grid__additional-spacing-medium .lsgs-a12e7--grid-row{row-gap:30px;}.lsgs-a12e7--grid__additional-spacing-large .lsgs-a12e7--grid-row{row-gap:36px;}}@media screen and (min-width:64rem){.lsgs-a12e7--grid-row,.lsgs-a12e7--grid__additional-spacing-small .lsgs-a12e7--grid-row{row-gap:32px;}.lsgs-a12e7--grid__additional-spacing-medium .lsgs-a12e7--grid-row{row-gap:40px;}.lsgs-a12e7--grid__additional-spacing-large .lsgs-a12e7--grid-row{row-gap:48px;}}@media screen and (min-width:74.75rem){.lsgs-a12e7--grid-row,.lsgs-a12e7--grid__additional-spacing-small .lsgs-a12e7--grid-row{row-gap:32px;}.lsgs-a12e7--grid__additional-spacing-medium .lsgs-a12e7--grid-row{row-gap:44px;}.lsgs-a12e7--grid__additional-spacing-large .lsgs-a12e7--grid-row{row-gap:56px;}}@media screen and (min-width:105rem){.lsgs-a12e7--grid-row,.lsgs-a12e7--grid__additional-spacing-small .lsgs-a12e7--grid-row{row-gap:32px;}.lsgs-a12e7--grid__additional-spacing-medium .lsgs-a12e7--grid-row{row-gap:48px;}.lsgs-a12e7--grid__additional-spacing-large .lsgs-a12e7--grid-row{row-gap:64px;}}@media screen and (min-width:120rem){.lsgs-a12e7--grid-row,.lsgs-a12e7--grid__additional-spacing-small .lsgs-a12e7--grid-row{row-gap:32px;}.lsgs-a12e7--grid__additional-spacing-medium .lsgs-a12e7--grid-row{row-gap:52px;}.lsgs-a12e7--grid__additional-spacing-large .lsgs-a12e7--grid-row{row-gap:72px;}}@media screen and (min-width:40rem){.lsgs-a12e7--grid-row-reverse-sm{flex-direction:row-reverse;}}@media screen and (min-width:64rem){.lsgs-a12e7--grid-row-reverse-md{flex-direction:row-reverse;}}";
const hostClass = "lsgs-a12e7--grid-row";
if (styleInject.hasOwnProperty("default")) {
    styleInject["default"](reactStyles);
}
else {
    styleInject(reactStyles);
}
collectStyles(reactStyles);

export { hostClass, reactStyles };

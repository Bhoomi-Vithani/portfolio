import styleInject from 'style-inject';
import { collectStyles } from '@lsg/ssr';

const reactStyles = ".lsg-a12e7---scroll{overflow:auto;overflow-x:hidden;position:relative;}.lsg-a12e7---scroll__padding-16{scroll-padding-top:96px;}.lsg-a12e7---scroll__padding-22{scroll-padding-top:120px;}";
const utilityClassScroll = "lsg-a12e7---scroll";
const utilityClassScrollPadding16 = "lsg-a12e7---scroll__padding-16";
const utilityClassScrollPadding22 = "lsg-a12e7---scroll__padding-22";
if (styleInject.hasOwnProperty("default")) {
    styleInject["default"](reactStyles);
}
else {
    styleInject(reactStyles);
}
collectStyles(reactStyles);

export { reactStyles, utilityClassScroll, utilityClassScrollPadding16, utilityClassScrollPadding22 };

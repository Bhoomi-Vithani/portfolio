import styleInject from 'style-inject';
import { collectStyles } from '@lsg/ssr';

const reactStyles = ".lsgs-a12e7--live-region{border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;}@supports not (clip-path:inset(100%)){.lsgs-a12e7--live-region{clip:rect(0 0 0 0);}}@supports (clip-path:inset(100%)){.lsgs-a12e7--live-region{clip-path:inset(100%);}}";
const hostClass = "lsgs-a12e7--live-region";
if (styleInject.hasOwnProperty("default")) {
    styleInject["default"](reactStyles);
}
else {
    styleInject(reactStyles);
}
collectStyles(reactStyles);

export { hostClass, reactStyles };

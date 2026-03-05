import styleInject from 'style-inject';
import { collectStyles } from '@lsg/ssr';

const reactStyles = ".lsgs-a12e7--chart-croshair-line{stroke:#00414B;stroke-width:2px;}.lsgs-a12e7--chart-croshair-circle{fill:#fff;stroke:#00414B;stroke-width:2px;}";
const hostClass = "lsgs-a12e7--chart-croshair";
if (styleInject.hasOwnProperty("default")) {
    styleInject["default"](reactStyles);
}
else {
    styleInject(reactStyles);
}
collectStyles(reactStyles);

export { hostClass, reactStyles };

import React__default from 'react';
import { hostClass } from './ChartCroshair.styles.js';

// @ts-strict-ignore
const ChartCroshairPresentation = ({ xScale, yScale, points }) => {
    const xScaleNice = xScale.nice();
    const yScaleNice = yScale.nice();
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("line", { className: `${hostClass}-line`, x1: xScaleNice(points[0].point.x), y1: 0, x2: xScaleNice(points[0].point.x), y2: yScaleNice(yScale.nice().domain()[0]) }),
        points.map(point => (React__default.createElement("circle", { className: `${hostClass}-circle`, cx: xScaleNice(point.point.x), cy: yScaleNice(point.point.y), r: 4 })))));
};
ChartCroshairPresentation.displayName = "ChartCroshairPresentation";

export { ChartCroshairPresentation };

import { line, curveStep } from 'd3-shape';
import React__default from 'react';
import { cleanupClassObject } from '../../../../utils/DomUtils.js';
import { hostClass } from './ChartLineSeries.styles.js';

const ChartLineSeriesPresentation = ({ xScale, yScale, data, color, mobile, curveType, }) => {
    const x = d => xScale(d.x);
    const y = d => yScale(d.y);
    const chartLine = line(x, y);
    const pathFunction = curveType === "stepped" ? chartLine.curve(curveStep) : chartLine;
    return (React__default.createElement("path", { className: cleanupClassObject({
            [`${hostClass}`]: true,
            [`${hostClass}-line`]: true,
            [`${hostClass}-line__${color}`]: color,
            [`${hostClass}-line__mobile`]: mobile,
        }), d: pathFunction(data) }));
};
ChartLineSeriesPresentation.displayName = "ChartLineSeriesPresentation";

export { ChartLineSeriesPresentation };

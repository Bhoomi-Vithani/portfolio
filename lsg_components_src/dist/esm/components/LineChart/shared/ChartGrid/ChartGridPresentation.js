import React__default from 'react';
import { cleanupClassObject } from '../../../../utils/DomUtils.js';
import { hostClass } from './ChartGrid.styles.js';

// @ts-strict-ignore
const ChartGridPresentation = ({ xScale, yScale, columnLineStyle, rowLineStyle, columnTickValues, rowTickValues, zeroLineBold, }) => {
    const xScaleNice = xScale.nice();
    const yScaleNice = yScale.nice();
    const ticksX = rowTickValues
        ? rowTickValues.map(value => ({
            value,
            xOffset: xScale(value),
        }))
        : xScaleNice.ticks().map(value => ({
            value,
            xOffset: xScaleNice(value),
        }));
    const ticksY = columnTickValues
        ? columnTickValues.map(value => ({
            value,
            xOffset: yScale(value),
        }))
        : yScaleNice.ticks().map(value => ({
            value,
            xOffset: yScaleNice(value),
        }));
    //  disable bold zero line if zero line is the minimum x-axis
    const ticksYValues = ticksY.map(({ value }) => value);
    const checkBoldZeroLine = Math.min(...ticksYValues) <= 0 && zeroLineBold;
    return (React__default.createElement(React__default.Fragment, null,
        rowLineStyle !== "none" &&
            ticksY.map(({ xOffset }, i) => (React__default.createElement("line", { key: `rowLine${i}`, className: cleanupClassObject({
                    [`${hostClass}-line`]: true,
                    [`${hostClass}-line__${rowLineStyle}`]: rowLineStyle,
                }), x1: xScaleNice(xScale.nice().domain()[0]), x2: xScaleNice(xScale.nice().domain()[1]), y1: xOffset, y2: xOffset }))),
        columnLineStyle !== "none" &&
            ticksX.map(({ xOffset }, i) => (React__default.createElement("line", { key: `columnLine${i}`, className: cleanupClassObject({
                    [`${hostClass}-line`]: true,
                    [`${hostClass}-line__${columnLineStyle}`]: columnLineStyle,
                }), x1: xOffset, x2: xOffset, y1: yScaleNice(yScale.nice().domain()[0]), y2: yScaleNice(yScale.nice().domain()[1]) }))),
        rowLineStyle !== "none" && checkBoldZeroLine && (React__default.createElement("line", { className: cleanupClassObject({
                [`${hostClass}-line`]: true,
                [`${hostClass}-line__bold`]: true,
            }), x1: xScaleNice(xScale.nice().domain()[0]), x2: xScaleNice(xScale.nice().domain()[1]), y1: yScaleNice(0), y2: yScaleNice(0) }))));
};
ChartGridPresentation.displayName = "ChartGridPresentation";

export { ChartGridPresentation };

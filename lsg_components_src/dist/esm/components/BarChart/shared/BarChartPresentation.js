import { scaleLinear } from 'd3-scale';
import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { InfoAreaItemPresentation } from '../../_InfoAreaItem/InfoAreaItemPresentation.js';
import { hostClass } from './BarChart.styles.js';

// @ts-strict-ignore
const BarChartPresentation = ({ id, className, noMargin, isStencilHost, bars, width, height, hostRef, yAxisRef, yAxisWidth, barLabelRef, viewport, interactive, handleOnMouseEnter, handleOnMouseLeave, hoveredElement, separator, highlightedElement, chartRef, infoArea, barsOptions, legendItems, barChartAxisOptions, barLabelYPosition, responsiveHeight, }) => {
    // TODO: Simplify ternary operation
    // eslint-disable-next-line
    const yDomainMin = barChartAxisOptions?.yAxis?.min
        ? barChartAxisOptions?.yAxis?.min
        : bars.flatMap(b => b.dataPoints).reduce((prev, curr) => (prev.y < curr.y ? prev : curr)).y >= 0
            ? 0
            : bars.flatMap(b => b.dataPoints).reduce((prev, curr) => (prev.y < curr.y ? prev : curr)).y;
    // eslint-disable-next-line
    const yDomainMax = barChartAxisOptions?.yAxis?.max
        ? barChartAxisOptions?.yAxis?.max
        : bars.flatMap(b => b.dataPoints).reduce((prev, curr) => (prev.y > curr.y ? prev : curr)).y < 0
            ? 0
            : bars.flatMap(b => b.dataPoints).reduce((prev, curr) => (prev.y > curr.y ? prev : curr)).y;
    let barOffset;
    switch (viewport) {
        case "xs":
            barOffset = 16;
            break;
        case "sm":
            barOffset = 16;
            break;
        case "md":
            barOffset = 24;
            break;
        default:
            barOffset = 56;
    }
    const yAxisSpace = ["xs", "sm", "md"].includes(viewport) ? 12 : 16;
    const yScale = scaleLinear()
        .domain([yDomainMin, yDomainMax])
        .range([height - 40, 0]);
    const xAxisLabels = [...new Set(bars[0].dataPoints.map(x => x.x))];
    const hasGroupedBars = barDataSet => {
        let xValue;
        let returnValue = false;
        barDataSet[0].dataPoints.map(dataPoint => {
            if (xValue === dataPoint.x) {
                returnValue = true;
            }
            xValue = dataPoint.x;
            return;
        });
        return returnValue;
    };
    const getBarHeight = (value, yStart, yEnd) => {
        if (value > 0) {
            return yStart - yEnd >= 4 ? yStart - yEnd : 4;
        }
        if (value < 0) {
            return yEnd - yStart >= 4 ? yEnd - yStart : 4;
        }
        return value; // return valid height value when incoming value is equal 0.
    };
    const renderSeparatorLines = (separatorValues, paintingAreaWidth, paintingAreaOffset) => separatorValues.map((separatorValue, separatorValueIndex) => {
        const key = separatorValueIndex;
        return (React__default.createElement("line", { key: key, className: `${hostClass}-separator-line`, x1: paintingAreaOffset, x2: paintingAreaWidth, y1: yScale(separatorValue), y2: yScale(separatorValue), strokeWidth: 1 }));
    });
    const renderGridColumns = (paintingArea, offsetPaintingArea, numberOfBars, columnLineHeight, isGrouped, isInteractive, options) => {
        if (options === "none" || options === undefined) {
            return null;
        }
        const itemWidth = isGrouped ? (paintingArea * 0.55) / numberOfBars : (paintingArea * 0.42) / numberOfBars;
        const spaceBetweenItems = isGrouped
            ? (paintingArea - paintingArea * 0.55) / (numberOfBars / 2 - 1)
            : (paintingArea - paintingArea * 0.42) / (numberOfBars - 1);
        const verticalLines = [];
        const spaceBetweenTwins = isInteractive ? 3 : 2;
        if (!isGrouped) {
            for (let i = 0; i < numberOfBars; i += 1) {
                verticalLines.push(React__default.createElement("line", { key: i, className: cleanupClassObject({
                        [`${hostClass}-cartesian-grid-column`]: true,
                        [`${hostClass}-cartesian-grid-column__solid`]: options === "solid",
                        [`${hostClass}-cartesian-grid-column__dashed`]: options === "dashed",
                    }), x1: offsetPaintingArea + (i + 1) * (itemWidth / 2) + i * spaceBetweenItems + i * (itemWidth / 2), x2: offsetPaintingArea + (i + 1) * (itemWidth / 2) + i * spaceBetweenItems + i * (itemWidth / 2), y1: 0, y2: columnLineHeight }));
            }
        }
        else {
            const numberOfGroups = numberOfBars / 2;
            let xPosition;
            for (let i = 0; i < numberOfGroups; i += 1) {
                xPosition =
                    offsetPaintingArea -
                        spaceBetweenTwins +
                        itemWidth * (i + 1) +
                        itemWidth * i +
                        spaceBetweenItems * i;
                verticalLines.push(React__default.createElement("line", { key: i, className: `${hostClass}-cartesian-grid-column`, x1: xPosition, x2: xPosition, y1: 0, y2: columnLineHeight }));
            }
        }
        return verticalLines;
    };
    const createDividedDataSet = (barDataSet, dividingLines) => {
        const limitedLayerArray1 = [];
        const limitedLayerArray2 = [];
        const limitedLayerArray3 = [];
        const firstDividingValue = dividingLines[0];
        const secondDividingValue = dividingLines[1];
        barDataSet[barDataSet.length - 1].dataPoints.map(item => {
            if (item.y > firstDividingValue) {
                limitedLayerArray1.push({ x: item.x, y: firstDividingValue });
                if (secondDividingValue && item.y > secondDividingValue) {
                    limitedLayerArray2.push({ x: item.x, y: secondDividingValue });
                    limitedLayerArray3.push(item);
                }
                else {
                    limitedLayerArray2.push(item);
                    limitedLayerArray3.push({ x: item.x, y: 0 });
                }
            }
            else {
                limitedLayerArray1.push(item);
                limitedLayerArray2.push({ x: item.x, y: 0 });
                limitedLayerArray3.push({ x: item.x, y: 0 });
            }
            return;
        });
        return [
            { dataPoints: limitedLayerArray3 },
            { dataPoints: limitedLayerArray2 },
            { dataPoints: limitedLayerArray1 },
        ];
    };
    const isMultiTopicChart = barDataSet => barDataSet[0].style;
    const renderSingleBars = (barDataSet, barPaintingAreaWidth, barPaintingAreaOffset, isInteractive, selectedElement, highlightedStyle, 
    // eslint-disable-next-line @typescript-eslint/no-shadow
    hoveredElement, dividingLines, 
    // eslint-disable-next-line @typescript-eslint/no-shadow
    barsOptions, 
    // eslint-disable-next-line @typescript-eslint/no-shadow
    barLabelRef, 
    // eslint-disable-next-line @typescript-eslint/no-shadow
    barLabelYPosition) => {
        let workingDataSet = [...barDataSet].reverse();
        if (dividingLines) {
            workingDataSet = createDividedDataSet(barDataSet, dividingLines);
        }
        return (React__default.createElement("g", { className: cleanupClassObject({
                [`${hostClass}-standard`]: !isMultiTopicChart(barDataSet),
                [`${hostClass}-multi-topic`]: isMultiTopicChart(barDataSet),
            }) }, workingDataSet.map((barLayer, barLayerIndex) => barLayer.dataPoints.map((barItem, barItemIndex) => {
            const value = barItem.y;
            const yStart = yScale(0);
            const yEnd = yScale(value);
            const barCount = barLayer.dataPoints.length;
            const barHeight = getBarHeight(value, yStart, yEnd);
            const barWidth = (barPaintingAreaWidth * 0.55) / barCount;
            const barSpace = (barPaintingAreaWidth - barPaintingAreaWidth * 0.55) / (barCount - 1);
            const yPosition = value >= 0 ? Math.round(yScale(0) - barHeight) : yScale(0);
            const xPosition = barPaintingAreaOffset + barItemIndex * barWidth + barItemIndex * barSpace;
            const barItemStyle = barsOptions?.style
                ? `${hostClass}-bar-item__${barsOptions?.style[barItemIndex]}`
                : ``;
            const barItemGroupStyle = barsOptions?.style
                ? `${hostClass}-bar-item__group-${barsOptions?.style[barItemIndex]}`
                : ``;
            const keyBarItem = `bar-item__${barLayerIndex}-${barItemIndex}`;
            const keyBarItemGroup = `bar-background__${barLayerIndex}-${barItemIndex}`;
            const keyBarBackground = `bar-background__${barLayerIndex}-${barItemIndex}`;
            const labelHeight = barLabelYPosition[barItemIndex];
            return (React__default.createElement("g", { key: keyBarItemGroup },
                React__default.createElement("foreignObject", { x: xPosition - barSpace / 2 + 8, y: yPosition - 16 - barLabelYPosition[barItemIndex], width: barWidth + barSpace >= 16 ? barWidth + barSpace - 16 : 0, height: labelHeight },
                    React__default.createElement("div", { 
                        /*
                        // @ts-ignore */
                        xmlns: "http://www.w3.org/1999/xhtml", className: `${hostClass}-bar-item-label`, 
                        // Hope it works
                        // @ts-ignore
                        ref: ref => (barLabelRef[barItemIndex] = ref) // eslint-disable-line
                     }, barItem.label)),
                React__default.createElement("rect", { key: keyBarBackground, className: cleanupClassObject({
                        [`${hostClass}-bar-item__background`]: true,
                    }), x: xPosition, y: yPosition, width: barWidth >= 0 ? barWidth : 0, height: barHeight >= 0 ? barHeight : 0 }),
                React__default.createElement("rect", { key: keyBarItem, className: cleanupClassObject({
                        [`${hostClass}-bar-item`]: true,
                        [barItemStyle]: true,
                        [`${hostClass}-bar-item__interactive`]: isInteractive,
                        [`${hostClass}-segment__${barLayer?.style}`]: barLayer?.style,
                        [barItemGroupStyle]: true,
                        [`${hostClass}-bar-segment-${barLayerIndex}`]: true,
                        [`${hostClass}-bar-item__hovered`]: hoveredElement === barItemIndex &&
                            isInteractive &&
                            !(selectedElement === barItemIndex + 1),
                        [`${hostClass}-bar-item__highlighted`]: selectedElement === barItemIndex + 1,
                        [`${hostClass}-bar-item__highlighted-positive`]: selectedElement === barItemIndex + 1 &&
                            barLayerIndex === 1 &&
                            highlightedStyle === "positive",
                        [`${hostClass}-bar-item__highlighted-negative`]: selectedElement === barItemIndex + 1 &&
                            barLayerIndex === 1 &&
                            highlightedStyle === "negative",
                        [`${hostClass}-bar-segment__opacity-30`]: workingDataSet.length - barLayerIndex === 3 &&
                            !barLayer?.style &&
                            !(selectedElement === barItemIndex + 1),
                        [`${hostClass}-bar-segment__opacity-60`]: workingDataSet.length - barLayerIndex === 2 &&
                            !barLayer?.style &&
                            !(selectedElement === barItemIndex + 1),
                    }), "data-group": barItemIndex + 1, x: xPosition, y: yPosition, width: barWidth >= 0 ? barWidth : 0, height: barHeight >= 0 ? barHeight : 0, onMouseEnter: interactive ? handleOnMouseEnter : null, onMouseLeave: interactive ? handleOnMouseLeave : null })));
        }))));
    };
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const renderGroupedBars = (barDataSet, surface, offset, interactive, hoveredElement, dividingLines) => {
        let barPrev;
        let stripeCount = 1;
        let workingDataSet = [...barDataSet].reverse();
        if (dividingLines) {
            workingDataSet = createDividedDataSet(barDataSet, dividingLines);
        }
        return workingDataSet.map((barSet, barSetCount) => {
            let barGroup = 0;
            return barSet.dataPoints.map((barItem, barItemCount) => {
                const value = barItem.y;
                const yStart = yScale(0);
                const yEnd = yScale(value);
                const spaceBetweenTwins = interactive ? 3 : 2;
                const barCount = barSet.dataPoints.length / 2;
                const barHeight = getBarHeight(value, yStart, yEnd);
                const barWidth = (surface * 0.42) / barCount;
                let stripeWidth = barWidth >= 0 ? barWidth / 2 - spaceBetweenTwins : 0;
                const yPosition = value >= 0 ? yScale(0) - barHeight : yScale(0);
                const barSpace = (surface - surface * 0.42) / (barCount - 1);
                if (barItem.x === barPrev) {
                    stripeCount += stripeCount;
                }
                else {
                    stripeCount = 1;
                }
                let xPosition;
                if (barItem.x !== barPrev) {
                    xPosition =
                        offset +
                            Math.round(barItemCount / 2) * barSpace +
                            Math.round(barItemCount / 2) * barWidth -
                            spaceBetweenTwins;
                    barGroup += 1;
                    barPrev = barItem.x;
                }
                else {
                    xPosition =
                        offset +
                            Math.round((barItemCount - 1) / 2) * barSpace +
                            Math.round((barItemCount - 1) / 2) * barWidth +
                            stripeWidth +
                            spaceBetweenTwins;
                }
                if (barGroup === hoveredElement + 1 && interactive) {
                    stripeWidth += 4;
                    if (barItem.x !== barPrev) {
                        xPosition += 2;
                    }
                    else {
                        xPosition -= 2;
                    }
                }
                const keyBarBackground = `bar-background__${barSetCount}-${barItemCount}`;
                const keyBarItem = `bar-item__${barSetCount}-${barItemCount}`;
                const keyBarItemGroup = `bar-background__${barSetCount}-${barItemCount}`;
                return (React__default.createElement("g", { key: keyBarItemGroup },
                    React__default.createElement("rect", { key: keyBarBackground, className: `${hostClass}-bar-item__background`, x: xPosition, y: yPosition, width: stripeWidth, height: barHeight >= 0 ? barHeight : 0 }),
                    React__default.createElement("rect", { key: keyBarItem, "data-group": barGroup, className: cleanupClassObject({
                            [`${hostClass}-bar-item`]: true,
                            [`${hostClass}-bar-item__interactive`]: interactive,
                            [`${hostClass}-bar-stripe-${stripeCount}`]: true,
                            [`${hostClass}-bar-segment__opacity-30`]: workingDataSet.length - barSetCount === 3,
                            [`${hostClass}-bar-segment__opacity-60`]: workingDataSet.length - barSetCount === 2,
                        }), x: xPosition, y: yPosition, width: stripeWidth, height: barHeight >= 0 ? barHeight : 0, onMouseEnter: interactive ? handleOnMouseEnter : null, onMouseLeave: interactive ? handleOnMouseLeave : null })));
            });
        });
    };
    const renderXAxis = (tickLabels, labelAreaWidth, labelAreaOffset, isGrouped) => {
        const barCount = tickLabels.length;
        const barWidth = isGrouped ? (labelAreaWidth * 0.55) / barCount : (labelAreaWidth * 0.42) / barCount;
        const barSpace = isGrouped
            ? (labelAreaWidth - labelAreaWidth * 0.55) / (barCount - 1)
            : (labelAreaWidth - labelAreaWidth * 0.42) / (barCount - 1);
        const spaceBetweenTwins = interactive ? 3 : 2;
        return (React__default.createElement("g", null, tickLabels.map((tickLabel, tickLabelIndex) => {
            const key = tickLabelIndex;
            return (React__default.createElement("text", { key: key, className: `${hostClass}-axis-label ${hostClass}-x-axis-label`, x: labelAreaOffset +
                    (key + 1) * (barWidth / 2) +
                    key * barSpace +
                    key * (barWidth / 2) -
                    spaceBetweenTwins, y: height - 16 }, tickLabel));
        })));
    };
    const renderGridRows = (yAxisOptions, scale, defaultMinValue, defaultMaxValue, offset, lineWidth) => {
        const { tickValues, min, max, steps } = yAxisOptions || {};
        const minWorking = min || defaultMinValue;
        const maxWorking = max || defaultMaxValue;
        const stepsWorking = steps || 5;
        const lineYValues = [];
        if (tickValues) {
            tickValues.map(tickValue => lineYValues.push(tickValue));
        }
        else {
            for (let i = minWorking; i <= maxWorking; i += (maxWorking - minWorking) / stepsWorking) {
                lineYValues.push(Math.round(i));
            }
        }
        return lineYValues.map((yPosition, rowIndex) => {
            const key = rowIndex;
            return (React__default.createElement("line", { key: key, className: `${hostClass}-cartesian-grid-row`, x1: offset, y1: scale(yPosition) >= 0 ? scale(yPosition) : 0, x2: lineWidth, y2: scale(yPosition) >= 0 ? scale(yPosition) : 0 }));
        });
    };
    const renderYAxis = (yAxisOptions, scale, ref, defaultMinValue, defaultMaxValue) => {
        const { tickValues, tickFormatter, min, max, steps, display } = yAxisOptions || {};
        const minWorking = min || defaultMinValue;
        const maxWorking = max || defaultMaxValue;
        const stepsWorking = steps || 5;
        let tickValuesWorking = [];
        if (tickValues) {
            tickValuesWorking = tickValues;
        }
        else {
            for (let i = minWorking; i <= maxWorking; i += (maxWorking - minWorking) / stepsWorking) {
                tickValuesWorking.push(Math.round(i));
            }
        }
        return (React__default.createElement("g", { ref: ref, display: display },
            tickValuesWorking.map((value, tickLabelIndex) => {
                const key = tickLabelIndex;
                if (scale(value) >= 0) {
                    return (React__default.createElement("text", { key: key, className: `${hostClass}-axis-label`, y: scale(value) + 3, x: 0 }, tickFormatter ? tickFormatter(value) : value));
                }
                return;
            }),
            ";"));
    };
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const renderLegend = legendItems => {
        if (legendItems) {
            return (React__default.createElement("div", { className: `${hostClass}-legend` }, legendItems.items.map((legendItem, legendItemKey) => {
                const key = legendItemKey;
                return (React__default.createElement("div", { key: key, className: `${hostClass}-legend-item` },
                    React__default.createElement("div", { className: `${hostClass}-legend-item-indicator ${hostClass}-legend-item-indicator__${legendItem.style}` }),
                    React__default.createElement("div", { className: `${hostClass}-legend-item-label` }, legendItem.label)));
            })));
        }
        return null;
    };
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
        }), isStencilHost: isStencilHost },
        React__default.createElement("div", { className: cleanupClassObject({
                [`${hostClass}-main`]: true,
                [`${hostClass}__responsive-height`]: responsiveHeight,
                [`${hostClass}__default-height`]: !responsiveHeight,
            }), ref: hostRef },
            infoArea && (React__default.createElement("div", { className: `${hostClass}-info-area` }, infoArea.items.map((infoAreaItem, infoAreaItemIndex) => {
                const key = infoAreaItemIndex;
                return infoAreaItemIndex < 3 ? (React__default.createElement(InfoAreaItemPresentation, { key: key, overline: infoAreaItem.overline, value: infoAreaItem.value, variant: infoAreaItem.variant })) : null;
            }))),
            React__default.createElement("div", { className: `${hostClass}-chart-area`, ref: chartRef },
                React__default.createElement("svg", { width: width, height: height },
                    React__default.createElement("g", { transform: "translate(0,13)" },
                        !(barChartAxisOptions?.rowGrid === "none") &&
                            renderGridRows(barChartAxisOptions?.yAxis, yScale, yDomainMin, yDomainMax, yAxisWidth + yAxisSpace, width),
                        renderYAxis(barChartAxisOptions?.yAxis, yScale, yAxisRef, yDomainMin, yDomainMax),
                        renderXAxis(xAxisLabels, width - (yAxisWidth + yAxisSpace + 2 * barOffset), yAxisWidth + yAxisSpace + barOffset, hasGroupedBars(bars)),
                        renderGridColumns(width - (yAxisWidth + yAxisSpace + 2 * barOffset), yAxisWidth + yAxisSpace + barOffset, bars[0].dataPoints.length, yScale(yDomainMin), hasGroupedBars(bars), interactive, barChartAxisOptions?.columnGrid),
                        hasGroupedBars(bars) &&
                            renderGroupedBars(bars, width - (yAxisWidth + yAxisSpace + 2 * barOffset), yAxisWidth + yAxisSpace + barOffset, interactive, hoveredElement, separator),
                        !hasGroupedBars(bars) &&
                            renderSingleBars(bars, width - (yAxisWidth + yAxisSpace + 2 * barOffset), yAxisWidth + yAxisSpace + barOffset, interactive, highlightedElement, barsOptions?.highlightStyle, hoveredElement, separator, barsOptions, barLabelRef, barLabelYPosition),
                        separator && renderSeparatorLines(separator, width, yAxisWidth + yAxisSpace),
                        React__default.createElement("line", { className: `${hostClass}-base-line`, x1: yAxisWidth + yAxisSpace, y1: yScale(0), x2: width, y2: yScale(0) }))))),
        renderLegend(legendItems)));
};
BarChartPresentation.displayName = "BarChartPresentation";

export { BarChartPresentation };

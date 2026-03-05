import React__default, { useState } from 'react';
import { useUniqueId } from '../../utils/Hooks/index.js';
import { ChartInfo } from '../ChartInfos/ChartInfo.js';
import '../../utils/Host.js';
import 'react-is';
import '../Headline/shared/HeadlinePresentation.js';
import '../ChartInfos/shared/ChartInfoContainer.styles.js';
import { GridPresentation } from '../Grid/shared/GridPresentation.js';
import { GridColumnPresentation } from '../GridColumn/shared/GridColumnPresentation.js';
import { GridRowPresentation } from '../GridRow/shared/GridRowPresentation.js';
import { hostClass } from '../_Logo/Logo.styles.js';
import { PieChartPresentation } from './shared/PieChartPresentation.js';

// @ts-strict-ignore
const defaultValueFormatter = v => new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(Number(v));
// TODO rename directory and files from PieXYZ to DonutXYZ
const DonutChart = ({ id: idProp, centeredLayout, data = [], chartInfoArea = {}, isDecorative, sizeChart = 6, sizeInfoArea, valueFormatter = defaultValueFormatter, ...props }) => {
    const id = useUniqueId(`${hostClass}-`, idProp);
    // TODO move logic to PieChartPresentation.tsx
    const [activeItemIndex, setActiveItemIndex] = useState();
    const donut = (React__default.createElement(PieChartPresentation, { id: id, donutShape: true, dataSeries: data.map((d, i) => ({
            ...d,
            // make a connection between the donut segment and the legend item by default
            ariaLabelledBy: d.ariaLabelledBy || (isDecorative ? undefined : d.idLabel || `${id}-item${i}`),
        })), ...props, onItemActive: index => setActiveItemIndex(index), activeIndex: activeItemIndex, isDecorative: isDecorative }));
    if (isDecorative && !sizeChart) {
        // Don't render a grid if not needed
        return donut;
    }
    let chartInfo;
    let chartInfoPosition;
    if (!isDecorative) {
        chartInfo = (
        // TODO: Remove ChartInfo.tsx and use `<ChartInfoContainer />` directly
        React__default.createElement(ChartInfo, { activeIndex: activeItemIndex, onItemActive: index => setActiveItemIndex(index), appearance: chartInfoArea.appearance || "infoarea", 
            // TODO fix typing for valueFormatter. Generic T must include both data and valueFormatter if we want
            // TODO to have a benefit here. Then, the valueFormatter has the same type as the data.
            // items are derived from data, to reduce duplicates
            items: data.map((d, i) => ({
                ...d,
                id: d.idLabel || `${id}-item${i}`,
                valueFormatter: valueFormatter,
            })), ...chartInfoArea }));
        chartInfoPosition = chartInfoArea.position || "right";
    }
    return (React__default.createElement(GridPresentation, { centeredLayout: centeredLayout },
        chartInfoPosition === "top" && (React__default.createElement(GridRowPresentation, null,
            React__default.createElement(GridColumnPresentation, { size: sizeInfoArea }, chartInfo))),
        React__default.createElement(GridRowPresentation, null,
            React__default.createElement(GridColumnPresentation, { size: sizeChart }, donut),
            (chartInfoPosition === "right" || chartInfoPosition === "auto") && (React__default.createElement(GridColumnPresentation, { size: sizeInfoArea }, chartInfo))),
        chartInfoPosition === "bottom" && (React__default.createElement(GridRowPresentation, null,
            React__default.createElement(GridColumnPresentation, { size: sizeInfoArea }, chartInfo)))));
};
DonutChart.displayName = "DonutChart";

export { DonutChart };

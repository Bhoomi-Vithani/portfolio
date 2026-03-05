import React__default from 'react';
import { hostClass } from './ChartAxis.styles.js';

const ChartAxisPresentation = ({ scale, orientation = "horizontal", tickValues, tickFormat, }) => {
    const defaultXAxisTickFormatter = (v) => v.toLocaleDateString("de-DE", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
    const defaultYAxisTickFormatter = v => v;
    const formatValue = v => {
        if (orientation === "horizontal") {
            return tickFormat ? tickFormat(v) : defaultXAxisTickFormatter(v);
        }
        return tickFormat ? tickFormat(v) : defaultYAxisTickFormatter(v);
    };
    return (React__default.createElement("g", null, (tickValues || scale.ticks()).map((tick, i) => (React__default.createElement("g", { key: i, className: `${hostClass}-${orientation === undefined || orientation === "horizontal" ? "independent" : "dependent"}` },
        React__default.createElement("text", { className: `${hostClass}-tick-label`, x: orientation === "horizontal" ? scale(tick) : 0, y: orientation === "vertical" ? scale(tick) : 0 }, formatValue(tick)))))));
};
ChartAxisPresentation.displayName = "ChartAxisPresentation";

export { ChartAxisPresentation };

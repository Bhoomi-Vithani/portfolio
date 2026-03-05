import React__default from 'react';
import { ChartInfoContainer } from './shared/ChartInfoContainer.js';
import { ChartInfoItemPresentation } from './shared/ChartInfoItemPresentation.js';

// @ts-strict-ignore
const ChartInfo = ({ title, items, activeIndex, ...props }) => {
    const hasActiveIndex = typeof activeIndex === "number";
    return (React__default.createElement(ChartInfoContainer, { title: title, ...props }, items.map((child, index) => {
        /* eslint-disable-next-line no-nested-ternary */
        const isActive = !hasActiveIndex ? false : hasActiveIndex && index === activeIndex ? true : undefined;
        return React__default.createElement(ChartInfoItemPresentation, { ...child, isActive: isActive });
    })));
};
ChartInfo.displayName = "ChartInfo";

export { ChartInfo };

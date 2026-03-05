import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { hostClass } from './ChartInfoItem.styles.js';

// @ts-strict-ignore
const ChartInfoItemPresentation = (props) => {
    const { id, className, noMargin, isStencilHost, label, labelColor = "primary", value, valueColor = "primary", valueFormatter, indicatorColor, 
    // internal props
    appearance, isActive, role, onMouseEnter, onMouseLeave, } = props;
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
            [`${hostClass}-active`]: isActive,
            [`${hostClass}-inactive`]: isActive === undefined,
        }), isStencilHost: isStencilHost, role: role, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
        isActive,
        React__default.createElement("div", { className: cleanupClassObject({
                [`${hostClass}-indicator__${indicatorColor}`]: !!indicatorColor,
                [`${hostClass}-indicator`]: true,
            }) }),
        React__default.createElement("div", { className: cleanupClassObject({
                [`${hostClass}-content`]: true,
                [`${hostClass}-content-${appearance}`]: !!appearance,
            }) },
            React__default.createElement("div", { className: cleanupClassObject({
                    [`${hostClass}-label__${labelColor}`]: !!labelColor,
                    [`${hostClass}-label`]: true,
                    [`${hostClass}-label-infoarea`]: appearance === "infoarea",
                    [`${hostClass}-label-other`]: appearance !== "infoarea",
                }) }, label),
            React__default.createElement("div", { className: cleanupClassObject({
                    [`${hostClass}-value__${valueColor}`]: !!valueColor,
                    [`${hostClass}-value`]: true,
                    [`${hostClass}-value__hidden`]: appearance === "legend",
                    [`${hostClass}-value-${appearance}`]: !!appearance,
                }) }, valueFormatter ? valueFormatter(value) : value))));
};

export { ChartInfoItemPresentation };

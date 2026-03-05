import React__default from 'react';
import { lsgPre } from '../../../../config/prefix.js';
import { cleanupClassObject } from '../../../../utils/DomUtils.js';
import { Host } from '../../../../utils/Host.js';
import { hostClass } from './ChartInfoBox.styles.js';

// @ts-strict-ignore
const ChartInfoBoxPresentation = ({ id, className, noMargin, isStencilHost, label, value, indicatorColor, look, valueColor, valueFormatter, }) => {
    const valColor = valueColor ? `__${valueColor}` : ``;
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
        }), isStencilHost: isStencilHost },
        React__default.createElement("div", { className: cleanupClassObject({
                [`${hostClass}-indicator__${indicatorColor}`]: true,
                [`${hostClass}-indicator`]: true,
            }) }),
        React__default.createElement("div", { className: cleanupClassObject({
                [`${hostClass}-content`]: true,
                [`${hostClass}-content-${look}`]: true,
            }) },
            React__default.createElement("div", { className: cleanupClassObject({
                    [`${hostClass}-label__bold`]: ["legend", "tooltip"].includes(look),
                    [`${hostClass}-label`]: true,
                }) }, label),
            React__default.createElement("div", { className: cleanupClassObject({
                    [`${hostClass}-value__bold`]: ["infoarea"].includes(look),
                    [`${hostClass}-value${valColor}`]: valueColor,
                    [`${hostClass}-value`]: true,
                }) }, valueFormatter ? valueFormatter(value) : value)),
        " "));
};
ChartInfoBoxPresentation.displayName = "ChartInfoBoxPresentation";

export { ChartInfoBoxPresentation };

import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { getGridClasses } from '../../Grid/shared/GridPresentation.js';
import { getGridRowClasses } from '../../GridRow/shared/GridRowPresentation.js';
import { hostClass } from './Cards.styles.js';

// @ts-strict-ignore
const CardsPresentation = ({ id, children, className, noMargin, as = "ul", centeredLayout, type, fieldsetLegend, ariaDescribedby, }) => {
    const InnerComponent = as;
    if (type === "SingleOptionToggle" || type === "MultiOptionToggle") {
        return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
                [className]: !!className,
                [hostClass]: true,
                [`${lsgPre}no-margin`]: noMargin,
                [getGridClasses({ spacing: "subsection", centeredLayout })]: true,
            }) },
            React__default.createElement("fieldset", { className: cleanupClassObject({
                    [getGridRowClasses({})]: true,
                    [`${hostClass}-fieldset`]: true,
                }), key: "selection-card-row", "aria-describedby": ariaDescribedby },
                React__default.createElement("legend", null, fieldsetLegend),
                children)));
    }
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
            [getGridClasses({ spacing: "subsection", centeredLayout })]: true,
        }) },
        React__default.createElement(InnerComponent, { className: cleanupClassObject({
                [getGridRowClasses({})]: true,
                [`${hostClass}-ul`]: true,
            }), key: "selection-card-row", "aria-describedby": ariaDescribedby }, children)));
};
CardsPresentation.displayName = "CardsPresentation";

export { CardsPresentation };

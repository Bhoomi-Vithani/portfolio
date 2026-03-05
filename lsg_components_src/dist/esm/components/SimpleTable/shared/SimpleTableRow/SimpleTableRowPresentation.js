import React__default, { cloneElement } from 'react';
import { lsgPre } from '../../../../config/prefix.js';
import { cleanupClassObject } from '../../../../utils/DomUtils.js';
import { useViewportRange } from '../../../../utils/Hooks/index.js';
import { fragmentMap } from '../../../../utils/ReactUtils.js';
import { ParagraphPresentation } from '../../../Paragraph/shared/ParagraphPresentation.js';
import { hostClass } from './SimpleTableRow.styles.js';

// @ts-strict-ignore
const SimpleTableRowPresentation = ({ id, children, className, title, helperText, noMargin, }) => {
    const isSm = useViewportRange("sm", "sm");
    return (React__default.createElement("tr", { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
        }) },
        React__default.createElement("th", { className: `${hostClass}-title`, scope: "row" },
            React__default.createElement(ParagraphPresentation, { as: "div", noMargin: true }, title),
            helperText && (React__default.createElement(ParagraphPresentation, { as: "div", size: "helper-text", noMargin: true }, helperText))),
        React__default.createElement("td", { className: `${hostClass}-value` },
            React__default.createElement(ParagraphPresentation, { as: "div", noMargin: true }, fragmentMap(children, (child) => isSm ? cloneElement(child, { horizontalAlignment: "right" }) : child)))));
};
SimpleTableRowPresentation.displayName = "SimpleTableRowPresentation";

export { SimpleTableRowPresentation };

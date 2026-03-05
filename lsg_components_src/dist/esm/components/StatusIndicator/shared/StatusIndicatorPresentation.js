import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { IconPresentation } from '../../Icon/shared/IconPresentation.js';
import { ParagraphPresentation } from '../../Paragraph/shared/ParagraphPresentation.js';
import { hostClass } from './StatusIndicator.styles.js';

const StatusIndicatorPresentation = ({ id, statusColor = "inactive", icon, tag, tagHidden, tagRole, noMargin, className, helperText, }) => (React__default.createElement(Host, { id: id, className: cleanupClassObject({
        [className]: !!className,
        [hostClass]: true,
        [`${lsgPre}no-margin`]: noMargin,
        [`${hostClass}--${statusColor}`]: true,
    }) },
    React__default.createElement("div", { className: `${hostClass}-first-line`, role: tagRole },
        React__default.createElement("div", { className: `${hostClass}__sphere`, title: tagHidden ? tag || statusColor : undefined }, icon !== undefined && (React__default.createElement(IconPresentation, { icon: icon, size: "xsmall", variant: "solid", color: ["inactive", undefined].includes(statusColor) ? "black" : "white", svgAttrs: {
                role: !tagHidden ? "presentation" : "img",
                "aria-label": tagHidden && tag,
                "aria-hidden": !tagHidden,
                "aria-atomic": false,
            } }))),
        React__default.createElement("span", { className: cleanupClassObject({
                [`${hostClass}-span`]: true,
                [`${hostClass}-tag-visually__hidden`]: tagHidden,
            }) }, tag || statusColor)),
    helperText && !tagHidden && (React__default.createElement(ParagraphPresentation, { className: `${hostClass}-helper-text`, size: "helper-text" }, helperText))));
StatusIndicatorPresentation.displayName = "StatusIndicatorPresentation";

export { StatusIndicatorPresentation };

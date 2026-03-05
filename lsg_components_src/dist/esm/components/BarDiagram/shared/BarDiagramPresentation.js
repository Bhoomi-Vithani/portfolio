import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { hostClass } from './BarDiagram.styles.js';

// @ts-strict-ignore
const BarDiagramPresentation = ({ id: idProp, className, noMargin, isStencilHost, label, labelSubline, percent, valueLabel, valueLabelSubline, status, color = "primary-1", width, hide, }) => {
    const id = useUniqueId(`${hostClass}-`, idProp);
    const labelId = `${id}-label`;
    const percentClean = Math.min(100, Math.max(0, percent));
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${hostClass}__feedback-${status}`]: status,
            [`${lsgPre}no-margin`]: noMargin,
        }), isStencilHost: isStencilHost, "aria-labelledby": labelId, style: { width: width > 0 ? `${width}px` : undefined, visibility: hide ? "hidden" : "visible" }, role: "img" },
        React__default.createElement("span", { id: labelId, className: `${hostClass}-label__hidden` }, [label, labelSubline, valueLabel, valueLabelSubline].join(", ")),
        React__default.createElement("div", { className: `${hostClass}-header` },
            React__default.createElement("div", { "aria-hidden": true, className: `${hostClass}-header-label` }, label),
            React__default.createElement("div", { "aria-hidden": true, className: `${hostClass}-header-valuelabel` }, valueLabel)),
        React__default.createElement("div", { className: `${hostClass}-bar` },
            React__default.createElement("div", { className: `${hostClass}-bar-track ${hostClass}-bar-track_${color}`, style: { width: `${percentClean}%` } }, "\u00A0")),
        React__default.createElement("div", { className: `${hostClass}-footer` },
            React__default.createElement("div", { "aria-hidden": true, className: `${hostClass}-footer-label-subline` }, labelSubline),
            React__default.createElement("div", { "aria-hidden": true, className: `${hostClass}-footer-valuelabel-subline` }, valueLabelSubline))));
};
BarDiagramPresentation.displayName = "BarDiagramPresentation";

export { BarDiagramPresentation };

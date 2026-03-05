import React__default from 'react';
import { lsgPre } from '../../../../config/prefix.js';
import { cleanupClassObject } from '../../../../utils/DomUtils.js';
import { mainClass } from './ClickListLayoutContainer.styles.js';

const ClickListLayoutContainerPresentation = ({ left, right, actions, className, id, noMargin, }) => (React__default.createElement("div", { className: cleanupClassObject({
        [`${mainClass}`]: true,
        [`${className}`]: !!className,
        [`${lsgPre}no-margin`]: noMargin,
    }), id: id },
    React__default.createElement("div", { className: `${mainClass}-content` },
        React__default.createElement("div", { className: `${mainClass}-left` }, left),
        React__default.createElement("div", { className: `${mainClass}-right` }, right)),
    React__default.createElement("div", { className: `${mainClass}-actions` }, actions)));
ClickListLayoutContainerPresentation.displayName = "ClickListLayoutContainerPresentation";

export { ClickListLayoutContainerPresentation };

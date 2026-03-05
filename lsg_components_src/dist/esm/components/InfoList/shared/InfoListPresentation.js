import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { getGridClasses } from '../../Grid/shared/GridPresentation.js';
import { getGridRowClasses } from '../../GridRow/shared/GridRowPresentation.js';
import { hostClass } from './InfoList.styles.js';

// @ts-strict-ignore
const InfoListPresentation = ({ id, children, noMargin, className }) => (React__default.createElement(Host, { id: id, className: cleanupClassObject({
        [className]: !!className,
        [hostClass]: true,
        [`${lsgPre}no-margin`]: noMargin,
        [getGridClasses({ spacing: "doublesubsection" })]: true,
    }) },
    React__default.createElement("div", { className: getGridRowClasses({}) }, children)));
InfoListPresentation.displayName = "InfoListPresentation";

export { InfoListPresentation };

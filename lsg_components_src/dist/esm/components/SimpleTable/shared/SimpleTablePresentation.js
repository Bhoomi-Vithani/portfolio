import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { hostClass } from './SimpleTable.styles.js';

// @ts-strict-ignore
// TODO: Ration become not resolved, so ration seems redundancy. J-Ticket will open for diving in and improve
const SimpleTablePresentation = ({ id, ratio, children, className, noMargin, description, title, }) => (React__default.createElement("table", { id: id, className: cleanupClassObject({
        [className]: !!className,
        [hostClass]: true,
        [`${hostClass}__${ratio}`]: !!ratio,
        [`${lsgPre}no-margin`]: noMargin,
    }), summary: description },
    title && React__default.createElement("caption", { className: `${hostClass}title__notext` }, title),
    React__default.createElement("tbody", null, children)));
SimpleTablePresentation.displayName = "SimpleTablePresentation";

export { SimpleTablePresentation };

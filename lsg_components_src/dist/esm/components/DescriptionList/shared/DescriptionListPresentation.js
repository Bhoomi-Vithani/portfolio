import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { hostClass } from './DescriptionList.styles.js';

// @ts-strict-ignore
const DescriptionListPresentation = ({ termWrap, id, className, noMargin, children, horizontalAlignment, }) => (React__default.createElement("dl", { className: cleanupClassObject({
        [`${hostClass}`]: true,
        [className]: !!className,
        [`${hostClass}__align-${horizontalAlignment}`]: horizontalAlignment,
        [`${hostClass}__term-wrap`]: termWrap === true,
        [`${lsgPre}no-margin`]: noMargin,
    }), id: id }, children));
DescriptionListPresentation.displayName = "DescriptionListPresentation";

export { DescriptionListPresentation };

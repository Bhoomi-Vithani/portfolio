import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { mainClass } from './Footnote.styles.js';

// @ts-strict-ignore
const FootnotePresentation = ({ id, className, children, noMargin }) => (React__default.createElement("ol", { className: cleanupClassObject({
        [mainClass]: true,
        [className]: !!className,
        [`${lsgPre}no-margin`]: noMargin,
    }), id: id }, children));
FootnotePresentation.displayName = "FootnotePresentation";

export { FootnotePresentation };

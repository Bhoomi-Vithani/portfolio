import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { hostClass } from './Paragraph.styles.js';

const ParagraphPresentation = ({ as = "p", children, id: idProp, className, noMargin, size = "copy-text", lineLength = "default", centeredLayout = false, horizontalAlignment, disabled = false, htmlAttrs = {}, manualHyphenation, columns = 1, columnRuler = false, }) => {
    const As = as;
    const id = useUniqueId(`${hostClass}-`, idProp);
    const align = centeredLayout ? "center" : horizontalAlignment;
    return (React__default.createElement(As, { id: id, className: cleanupClassObject({
            [`${className}`]: !!className,
            [`${lsgPre}${size}`]: true,
            [`${lsgPre}${size}__line-length__${lineLength}`]: lineLength,
            [`${lsgPre}${size}__align-${align}`]: align,
            [`${lsgPre}${size}__disabled`]: disabled,
            [`${lsgPre}no-margin`]: noMargin,
            [`${lsgPre}-centered-layout`]: centeredLayout,
            [`${lsgPre}${size}__hyphens-manual`]: manualHyphenation,
            [`${lsgPre}multicolumn-${columns}`]: columns && columns > 1,
            [`${lsgPre}multicolumn-ruler`]: columns && columns > 1 && columnRuler,
        }), ...htmlAttrs }, children));
};
ParagraphPresentation.displayName = "ParagraphPresentation";

export { ParagraphPresentation };

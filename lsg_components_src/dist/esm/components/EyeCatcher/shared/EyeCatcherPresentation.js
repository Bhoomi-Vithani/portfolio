import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { getThemeClass } from '../../Theme/shared/ThemePresentation.js';
import { hostClass } from './EyeCatcher.styles.js';

// @ts-strict-ignore
const EyeCatcherPresentation = ({ id, className, noMargin, text, textLong, increaseWidth, fontSize = "medium", viewport, horizontalAlignment, }) => (React__default.createElement(Host, { className: cleanupClassObject({
        [className]: !!className,
        [hostClass]: true,
        [`${hostClass}__align-${horizontalAlignment}`]: horizontalAlignment,
        [`${lsgPre}no-margin`]: noMargin,
        [getThemeClass("brand")]: true,
    }), id: id },
    React__default.createElement("p", { className: cleanupClassObject({
            [`${hostClass}-text`]: true,
            [`${hostClass}-text-${fontSize}`]: true,
            [`${hostClass}-text-wide`]: increaseWidth,
        }) },
        React__default.createElement("div", null,
            React__default.createElement("strong", null, viewport === "xl" || (viewport === "lg" && textLong) ? textLong : text)))));
EyeCatcherPresentation.displayName = "EyeCatcherPresentation";

export { EyeCatcherPresentation };

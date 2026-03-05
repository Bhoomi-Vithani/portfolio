import React__default from 'react';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { getThemeChildrenClass } from '../../Theme/shared/ThemePresentation.js';
import { mainClass } from './CardContainer.styles.js';

const CardContainerPresentation = ({ topArea, bottomArea, hasHover, disabled, active, separator, contentAlignment, innerSpacing, }) => (React__default.createElement("div", { className: cleanupClassObject({
        [mainClass]: true,
        [`${mainClass}__has-hover`]: hasHover && !disabled,
        [`${mainClass}__disabled`]: disabled,
        [`${mainClass}__active`]: active,
        [`${mainClass}__${innerSpacing}`]: innerSpacing,
        [getThemeChildrenClass("elevated")]: true,
    }) },
    React__default.createElement("div", { className: `${mainClass}__before` }),
    React__default.createElement("div", { className: cleanupClassObject({
            [`${mainClass}-top-area`]: true,
            [`${mainClass}__${contentAlignment}`]: !!contentAlignment,
        }) }, topArea),
    bottomArea && (React__default.createElement("div", { className: cleanupClassObject({
            [`${mainClass}-bottom-area`]: true,
            [`${mainClass}-bottom-area__centered`]: !!contentAlignment,
            [`${mainClass}-bottom-area__separator`]: !!separator,
        }) }, bottomArea))));
CardContainerPresentation.displayName = "CardContainerPresentation";

export { CardContainerPresentation };

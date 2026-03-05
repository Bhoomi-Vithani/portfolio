import React__default from 'react';
import { lsgPre } from '../../../../config/prefix.js';
import { cleanupClassObject } from '../../../../utils/DomUtils.js';
import { Host } from '../../../../utils/Host.js';
import { getGridColumnClasses } from '../../../GridColumn/shared/GridColumnPresentation.js';
import { HeadlinePresentation } from '../../../Headline/shared/HeadlinePresentation.js';
import { IconPresentation } from '../../../Icon/shared/IconPresentation.js';
import { ParagraphPresentation } from '../../../Paragraph/shared/ParagraphPresentation.js';
import { hostClass } from './StepperItem.styles.js';

const StepperItemPresentation = ({ children, noMargin, className, iconName, icon, headline, overline, headlineAs, iconSize = "medium", gridColumnSize = 3, centeredLayout, iconColor = "default", }) => {
    const horizontalAlignment = centeredLayout ? "center" : "left";
    return (React__default.createElement(Host, { className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
            [getGridColumnClasses({ size: 4, md: gridColumnSize })]: true,
            [`${lsgPre}-centered-layout`]: centeredLayout,
        }) },
        React__default.createElement(IconPresentation, { name: iconName, icon: icon, size: iconSize, color: iconColor, title: "", horizontalAlignment: horizontalAlignment }),
        React__default.createElement(HeadlinePresentation, { size: "h4", as: headlineAs, centeredLayout: centeredLayout, overline: overline }, headline),
        React__default.createElement(ParagraphPresentation, { centeredLayout: centeredLayout }, children)));
};
StepperItemPresentation.displayName = "StepperItemPresentation";

export { StepperItemPresentation };

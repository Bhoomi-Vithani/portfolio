import * as React from 'react';
import { utilityClassesColor, utilityClassesBorder, utilityClassesStroke, utilityClassesBackground, utilityClassesBoxShadow, utilityClassVisuallyHidden } from '../../styles/utilityClassesColor.styles.js';
import { utilityClassScroll } from '../../styles/utilityClassesScroll.styles.js';
import { utilityClassesTypo } from '../../styles/utilityClassesTypo.styles.js';
import { cleanupClassObject } from '../../utils/DomUtils.js';
import { getThemeClass, getThemeBackgroundClass, getThemeChildrenClass } from '../Theme/shared/ThemePresentation.js';

// @ts-strict-ignore
/* eslint-disable etc/no-commented-out-code */
const inscriptionColors = {
    colNeutral1: "colNeutral7",
    colNeutral2: "colNeutral7",
    colNeutral3: "colNeutral7",
    colNeutral4: "colNeutral7",
    colNeutral5: "colBackground",
    colNeutral6: "colBackground",
    colNeutral7: "colBackground",
    colNeutral8: "colBackground",
    colBackground: "colTextPrimary",
    colTextPrimary: "colBackground",
    colTextSupplementary: "colBackground",
    colTextHighlight: "colBackground",
    colActionSecondary: "colBackground",
    colActionSecondaryHover: "colBackground",
    colActionTertiary: "colBackground",
    colActionTertiaryHover: "colBackground",
    colError: "colErrorInscription",
    colWarning: "colWarningInscription",
    colSuccess: "colSuccessInscription",
    colActionInactive: "colBackground",
    colBrandPrimary1: "colBrandPrimary1Inscription",
    secondaryAccent1: "secondaryAccent1Inscription",
    secondaryAccent2: "secondaryAccent2Inscription",
    secondaryAccent3: "secondaryAccent3Inscription",
    secondaryAccent4: "secondaryAccent4Inscription",
    secondaryAccent5: "secondaryAccent5Inscription",
    secondaryAccent6: "secondaryAccent6Inscription",
};
const Box = ({ id, className, as = "div", children, color, colorAll, colorInscription, backgroundColor, borderColor, strokeColor, boxShadow, scrollVertical, theme, themeBackground, themeChildren, visuallyHidden, typo, style, htmlAttrs, }) => {
    const Component = as;
    return (React.createElement(Component, { id: id, className: cleanupClassObject({
            [className]: className,
            [utilityClassesColor[(color || colorAll || inscriptionColors[colorInscription])]]: color || colorAll || colorInscription,
            [utilityClassesBorder[borderColor]]: borderColor,
            [utilityClassesStroke[strokeColor]]: strokeColor,
            [utilityClassesBackground[backgroundColor]]: backgroundColor,
            [utilityClassesBoxShadow[boxShadow]]: boxShadow,
            [utilityClassesTypo[typo]]: typo,
            [utilityClassVisuallyHidden]: visuallyHidden,
            [getThemeClass(theme)]: theme,
            [getThemeBackgroundClass(themeBackground)]: themeBackground,
            [getThemeChildrenClass(themeChildren)]: themeChildren,
            [utilityClassScroll]: scrollVertical,
        }), style: style, ...htmlAttrs }, children));
};

export { Box };

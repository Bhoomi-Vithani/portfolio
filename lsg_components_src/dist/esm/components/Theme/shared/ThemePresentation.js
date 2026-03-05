import React__default from 'react';
import { lsgPreGlobal, lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { hostClass } from './Theme.styles.js';

// @ts-strict-ignore
const getThemeChildrenClass = (color, component) => {
    const whiteLabelColor = (typeof window !== "undefined" && window.lsgWL?.componentMap?.[component]) ||
        (typeof window !== "undefined" && window.lsgWL?.themeMap?.[color]) ||
        color;
    return `${lsgPreGlobal}theme__${whiteLabelColor}`;
};
const getThemeBackgroundClass = (color, component) => {
    const whiteLabelColor = (typeof window !== "undefined" && window.lsgWL?.componentMap?.[component]) ||
        (typeof window !== "undefined" && window.lsgWL?.themeMap?.[color]) ||
        color;
    return `${lsgPreGlobal}theme__bg-${whiteLabelColor}`;
};
const getThemeClass = (color, component) => `${getThemeBackgroundClass(color, component)} ${getThemeChildrenClass(color, component)}`;
const ThemePresentation = ({ id, children, noMargin, className, color = "dark", componentContext, componentName, }) => (React__default.createElement(Host, { id: id, className: cleanupClassObject({
        [className]: !!className,
        [hostClass]: true,
        [`${lsgPre}no-margin`]: noMargin,
        [`${hostClass}__prevent-margin-overlap`]: !componentContext,
        [getThemeClass(color, componentName)]: true,
    }) }, children));
ThemePresentation.displayName = "ThemePresentation";

export { ThemePresentation, getThemeBackgroundClass, getThemeChildrenClass, getThemeClass };

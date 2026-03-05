import React__default from 'react';
import { cleanupClassObject } from '../../utils/DomUtils.js';
import { fRef } from '../../utils/React.js';
import { getThemeChildrenClass } from '../Theme/shared/ThemePresentation.js';
import { mainClass } from './Dwindle.styles.js';

const defaultProps = {
    shape: "rectangular",
};
const DwindlePresentation = fRef(props => {
    const { children, ref, color, shape, hover, clicked, floating, disabled, focus: keyboardFocus, className } = props;
    return (React__default.createElement("div", { className: cleanupClassObject({
            [`${mainClass}`]: true,
            [`${mainClass}__${color}`]: !disabled,
            [`${mainClass}__disabled`]: disabled,
            [`${mainClass}__${shape}`]: !!shape,
            [`${mainClass}__hover`]: hover,
            [`${mainClass}__clicked`]: clicked,
            [`${mainClass}__${color}__focus`]: keyboardFocus,
            [`${mainClass}__inner_floating`]: floating,
            [getThemeChildrenClass("brand")]: color === "primary" && !disabled,
            [className]: className,
        }), ref: ref },
        React__default.createElement("div", { className: `${mainClass}-inner` }, children)));
}, defaultProps);
DwindlePresentation.displayName = "DwindlePresentation";

export { DwindlePresentation };

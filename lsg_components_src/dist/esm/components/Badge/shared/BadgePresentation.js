import React__default from 'react';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { fragmentCount } from '../../../utils/ReactUtils.js';
import { hostClass as hostClass$1 } from '../../Icon/shared/Icon.styles.js';
import { hostClass } from './Badge.styles.js';

// @ts-strict-ignore
const BadgePresentation = ({ id: idProp, className, children, color: colorInternal = "primary", size: sizeInternal = "default", inline = false, margin, htmlAttrs, }) => {
    const size = fragmentCount(children, true) > 0 ? sizeInternal : "dot";
    const color = size === "dot" && colorInternal === "primary" ? undefined : colorInternal;
    const id = useUniqueId(`${hostClass}-`, idProp);
    return (React__default.createElement("span", { id: id, className: cleanupClassObject({
            [className]: !!className,
            [`${hostClass}`]: true,
            [`${hostClass$1}__inherit-color`]: true,
            [`${hostClass}__${color}`]: color,
            [`${hostClass}__${size}`]: size,
            [`${hostClass}__inline`]: inline,
            [`${hostClass}__margin-left`]: margin === "left" || margin === "both",
            [`${hostClass}__margin-right`]: margin === "right" || margin === "both",
        }), "data-lsg-component": "badge", ...htmlAttrs },
        React__default.createElement("span", { className: `${hostClass}-inner` }, children)));
};

export { BadgePresentation };

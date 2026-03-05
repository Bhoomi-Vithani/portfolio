import React__default from 'react';
import { lsgPre } from '../../../../config/prefix.js';
import { cleanupClassObject } from '../../../../utils/DomUtils.js';
import { Host } from '../../../../utils/Host.js';
import { hostClass } from './PictureBackground.styles.js';

// @ts-strict-ignore
const PictureBackgroundPresentation = ({ id, children, className, noMargin, isStencilHost, focalPoint, style, viewportSource, }) => {
    let backgroundPosition;
    if (focalPoint) {
        const { offsetLeft, offsetTop } = focalPoint;
        backgroundPosition = `
            ${offsetLeft ? `left ${offsetLeft}%` : ""}
            ${offsetTop ? `top ${offsetTop}%` : ""}
        `;
    }
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
        }), isStencilHost: isStencilHost, style: {
            ...style,
            backgroundImage: viewportSource && `url(${viewportSource})`,
            backgroundPosition,
            backgroundSize: "cover", // gets override somehow if not defined as inline style
        } }, children));
};
PictureBackgroundPresentation.displayName = "PictureBackgroundPresentation";

export { PictureBackgroundPresentation };

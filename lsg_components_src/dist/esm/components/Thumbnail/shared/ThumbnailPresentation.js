import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { IconPresentation } from '../../Icon/shared/IconPresentation.js';
import { getThemeClass } from '../../Theme/shared/ThemePresentation.js';
import { hostClass } from './Thumbnail.styles.js';

const ThumbnailPresentation = ({ id: idProp, className, icon, iconName, iconVariant, iconTitle, text, src, imgAltText, htmlAttrs, noMargin, size = "regular", look = "clear", }) => {
    let visual = null;
    const ariaHidden = htmlAttrs?.["aria-hidden"] ? "true" : false;
    const id = useUniqueId(`${hostClass}-`, idProp);
    if (!!iconName || !!icon) {
        if (!!text || !!src) {
            console.info("Multiple visuals defined for the thumbnail (please only specify the props for either text, icon or src).");
        }
        else {
            visual = (React__default.createElement(IconPresentation, { icon: icon, name: iconName, variant: iconVariant, size: "small", title: iconTitle, noMargin: true, svgAttrs: { "aria-hidden": ariaHidden } }));
        }
    }
    else if (text) {
        if (src) {
            console.info("Multiple visuals defined for the thumbnail (please only specify the props for either text, icon or src).");
        }
        else {
            visual = (React__default.createElement("div", { className: `${hostClass}__text`, "aria-label": text + (iconTitle ? `, ${iconTitle}` : ""), role: "img" }, text));
        }
    }
    else if (src) {
        visual = (React__default.createElement("img", { "aria-hidden": htmlAttrs?.["aria-hidden"], className: `${hostClass}__img`, src: src, alt: imgAltText, title: iconTitle }));
    }
    else {
        console.info("No visual defined for the thumbnail (please specify the props for either text, icon or src).");
    }
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [hostClass]: true,
            [className]: !!className,
            [`${lsgPre}no-margin`]: noMargin,
            [`${hostClass}__size-${size}`]: size,
            [`${hostClass}__thick-border`]: look === "thick-border",
            [`${hostClass}__no_border`]: look === "filled",
            // TODO: @as: Probably looks weird in dark theme. Should be implemented with color inversion rather
            //  than theming.
            [getThemeClass("dark")]: look === "filled",
        }) }, visual));
};
ThumbnailPresentation.displayName = "ThumbnailPresentation";

export { ThumbnailPresentation };

import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { CardContainerPresentation } from '../../CardContainer/shared/CardContainerPresentation.js';
import { PicturePresentation } from '../../Picture/shared/PicturePresentation.js';
import { hostClass } from './GallerySliderItem.styles.js';

// @ts-strict-ignore
const GallerySliderItemPresentation = ({ id, children, className, noMargin, isStencilHost, pictureAlt, pictureSource, pictureImgSrc, pictureImgAttrs, appearance, ariaLabel, ariaRoleDescription, ariaLabelledBy, }) => (React__default.createElement(Host, { id: id, className: cleanupClassObject({
        [className]: !!className,
        [hostClass]: true,
        [`${lsgPre}no-margin`]: noMargin,
    }), isStencilHost: isStencilHost, role: "group", "aria-roledescription": ariaRoleDescription, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy }, appearance === "cards" ? (React__default.createElement(CardContainerPresentation, { topArea: React__default.createElement(React__default.Fragment, null,
        React__default.createElement("div", { className: `${hostClass}-cards-image-container` },
            React__default.createElement(PicturePresentation, { imgSrc: pictureImgSrc, source: pictureSource, alt: pictureAlt, imgAttrs: pictureImgAttrs })),
        children) })) : (React__default.createElement(React__default.Fragment, null,
    pictureImgSrc && (React__default.createElement(PicturePresentation, { imgSrc: pictureImgSrc, source: pictureSource, alt: pictureAlt, imgAttrs: pictureImgAttrs })),
    React__default.createElement("div", { className: `${hostClass}-content` }, children)))));
GallerySliderItemPresentation.displayName = "GallerySliderItemPresentation";

export { GallerySliderItemPresentation };

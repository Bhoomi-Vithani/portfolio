import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { BadgePresentation } from '../../Badge/shared/BadgePresentation.js';
import { HeadlinePresentation } from '../../Headline/shared/HeadlinePresentation.js';
import { IconPresentation } from '../../Icon/shared/IconPresentation.js';
import { ParagraphPresentation } from '../../Paragraph/shared/ParagraphPresentation.js';
import { SpinnerPresentation } from '../../Spinner/shared/SpinnerPresentation.js';
import { ThumbnailPresentation } from '../../Thumbnail/shared/ThumbnailPresentation.js';
import { hostClass } from './TwoLineItem.styles.js';

const TwoLineItemPresentation = (props) => {
    const { id: idProp, className, icon, iconName, iconVariant, text, src, label = "", subline, sublineAs, centeredLayout, badgeText, badgeIcon, badgeIconVariant, badgeColor = "primary", appearance, iconTitle, noMargin, sublineId: sublineIdProp, badgeId: badgeIdProp, labelAs = "strong", // TODO V20 : Decide if labelAs default value is needed
    // https://confluence.intranet.commerzbank.com/display/LSG/Release+20.0
    loading, loadingAriaLabel, } = props;
    const hasThumb = !!text || !!iconName || !!icon || !!src;
    const hasSubline = !!subline;
    const id = useUniqueId(`${hostClass}-`, idProp);
    const sublineId = useUniqueId(`${hostClass}-subline-`, sublineIdProp);
    const badgeId = useUniqueId(`${hostClass}-badge-`, badgeIdProp);
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [hostClass]: true,
            [className]: !!className,
            [`${lsgPre}-centered-layout`]: centeredLayout,
            [`${lsgPre}no-margin`]: noMargin,
        }) },
        hasThumb && (React__default.createElement("div", { className: cleanupClassObject({
                [`${hostClass}__thumbnail`]: true,
                [`${hostClass}__loading`]: !!loading,
            }) },
            React__default.createElement(ThumbnailPresentation, { id: `${id}-thumbnail`, icon: icon, iconName: iconName, iconVariant: iconVariant, 
                // A11y-Decision: Thumbnail always hidden bc it is decorative and described by headline text.
                // Exception: iconTitle is set, which will be read.
                htmlAttrs: {
                    "aria-hidden": !iconTitle,
                    role: "img",
                }, iconTitle: iconTitle, text: text, src: src, noMargin: !centeredLayout }))),
        React__default.createElement("div", { className: cleanupClassObject({
                [`${hostClass}__loading`]: !!loading,
                [`${hostClass}__text-container`]: true,
                [`${hostClass}__text-container-thumb`]: hasThumb,
                [`${hostClass}__no-text`]: appearance === "no-text",
            }) },
            React__default.createElement(HeadlinePresentation, { id: `${id}-headline`, as: labelAs, size: "h5", className: cleanupClassObject({
                    [`${hostClass}__label-text`]: true,
                    [`${hostClass}__label-text--centered`]: !hasSubline,
                }), noMargin: true }, label),
            subline && (React__default.createElement(ParagraphPresentation, { as: sublineAs, id: sublineId, className: `${hostClass}__helper-text`, size: "helper-text", noMargin: true }, subline))),
        ((badgeText && badgeText?.trim() !== "") || badgeIcon) && (React__default.createElement("div", { className: cleanupClassObject({
                [`${hostClass}__loading`]: !!loading,
                [`${hostClass}-badge-container`]: true,
                [`${hostClass}-badge-container__centered`]: centeredLayout,
            }) },
            React__default.createElement(BadgePresentation, { id: badgeId, color: badgeColor, size: "default" }, badgeIcon ? (React__default.createElement(IconPresentation, { icon: badgeIcon, size: "xsmall", noMargin: true, variant: badgeIconVariant })) : (badgeText)))),
        loading && (React__default.createElement(SpinnerPresentation, { expandToOverlay: true, variant: "indeterminate", size: 24, ariaLabel: loadingAriaLabel, loading: loading }))));
};
TwoLineItemPresentation.displayName = "TwoLineItemPresentation";

export { TwoLineItemPresentation };

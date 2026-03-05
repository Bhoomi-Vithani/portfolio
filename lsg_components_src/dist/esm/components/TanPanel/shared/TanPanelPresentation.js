import { symbols___error, symbols___infoCircle, interaction_arrows_arrowLeft, banking___phototan } from '@lsg/icons';
import React__default, { useContext, useEffect, useState } from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId, useViewportRange, combineRefs } from '../../../utils/Hooks/index.js';
import { ActionGroupPresentation } from '../../ActionGroup/shared/ActionGroupPresentation.js';
import { BannerMessagePresentation } from '../../BannerMessage/shared/BannerMessagePresentation.js';
import { ButtonPresentation } from '../../Button/shared/ButtonPresentation.js';
import { CheckboxWrapper } from '../../Checkbox/shared/CheckboxWrapper.js';
import { GridPresentation } from '../../Grid/shared/GridPresentation.js';
import { GridColumnPresentation } from '../../GridColumn/shared/GridColumnPresentation.js';
import { GridColumnWrapper } from '../../GridColumn/shared/GridColumnWrapper.js';
import { GridRowPresentation } from '../../GridRow/shared/GridRowPresentation.js';
import { HeadlinePresentation } from '../../Headline/shared/HeadlinePresentation.js';
import { IconLinkWrapper } from '../../IconLink/shared/IconLinkWrapper.js';
import { IconLinkGroupWrapper } from '../../IconLinkGroup/shared/IconLinkGroupWrapper.js';
import { LayerPresentation } from '../../Layer/shared/LayerPresentation.js';
import { ParagraphPresentation } from '../../Paragraph/shared/ParagraphPresentation.js';
import { SectionPresentation } from '../../Section/shared/SectionPresentation.js';
import { TanContext } from '../../TanArea/shared/TanAreaPresentation.js';
import { TextFieldWrapper } from '../../TextField/shared/TextFieldWrapper.js';
import { IllustrationPresentation } from '../../_Illustration/IllustrationPresentation.js';
import { hostClass } from './TanPanel.styles.js';

// @ts-strict-ignore
const TanPanelPresentation = ({ children, className, noMargin, panelRef: panelRefProp, titleText, titleAs, subtitleText, infoLinkText, infoLayerBackbuttonText, tanTextfieldVisible, tanTextfieldAutofocus = false, tanTextfieldErrorText, tanTextfieldLabel, tanTextfieldPlaceholder, tanTextfieldRef: tanTextfieldRefProp, tanTextfieldValue, onTanTextfieldChange, checkboxAutofocus, checkboxErrorText, checkboxLabel, checkboxVisible, checkboxRef: checkboxRefProp, imageQrCode, cancelButtonText, cancelButtonDisabled, cancelButtonIcon = interaction_arrows_arrowLeft, cancelButtonLoading, onCancelTan, miscButtonDisabled, miscButtonIcon = banking___phototan, miscButtonLoading, miscButtonText, onMiscClick, loadingText, imageAltText, imageSrc, submitButtonDisabled, submitButtonLoading, submitButtonSecondary = false, submitButtonText, onSubmit, messageHeading, messageText, messageType = "alert", centeredLayout, notificationSubline, notificationImageSrc, notificationImageAlt, notificationTitleAs, notificationTitleText, notificationDisabled, asSection = true, }) => {
    const { id, ref, setNotification, setTanPanelMounted } = useContext(TanContext);
    useEffect(() => {
        setNotification({
            notificationSubline,
            notificationImageSrc,
            notificationImageAlt,
            notificationTitleText,
            notificationDisabled,
        });
    }, [
        notificationSubline,
        notificationImageSrc,
        notificationImageAlt,
        notificationTitleAs,
        notificationTitleText,
        notificationDisabled,
    ]);
    useEffect(() => {
        setTanPanelMounted?.(true);
        return () => {
            setTanPanelMounted?.(false);
        };
    }, [setTanPanelMounted]);
    const headlineId = useUniqueId("", id && `${id}-headline`);
    const subtitleId = useUniqueId("", id && `${id}-subtitle`);
    const bannerMessageId = useUniqueId("", id && `${id}-banner`);
    const messageHeadingAs = {
        h1: "h2",
        h2: "h3",
        h3: "h4",
        h4: "h5",
        h5: "h6",
        h6: "h6",
    }[titleAs];
    const [infoLayerOpen, setInfoLayerOpen] = useState(false);
    const [checkboxValue, setCheckboxValue] = useState(false);
    const isMobile = useViewportRange(undefined, "sm");
    const confirmButtonId = useUniqueId(`${hostClass}-confirm`, id && `${id}-confirm`);
    const cancelButtonId = useUniqueId(`${hostClass}-cancel`, id && `${id}-cancel`);
    const miscButtonId = useUniqueId(`${hostClass}-misc`, id && `${id}-misc`);
    const [readyForFocus, setReadyForFocus] = useState(true);
    const panelRef = combineRefs(panelRefProp, ref);
    const tanTextfieldRef = combineRefs(tanTextfieldRefProp);
    const checkboxRef = combineRefs(checkboxRefProp);
    // TextField.autoFocus is executed before the viewport is know. Therefore, we need to set the focus manually
    useEffect(() => {
        // skip mobile, because the on-screen-keyboard will be shown and will drastically shrink the visible area
        if (readyForFocus && !isMobile) {
            if (tanTextfieldVisible && tanTextfieldAutofocus) {
                tanTextfieldRef?.current?.focus();
                setReadyForFocus(false);
            }
            if (checkboxVisible && checkboxAutofocus) {
                checkboxRef?.current?.focus();
                setReadyForFocus(false);
            }
        }
        // Don't autofocus on viewport changes after 1 sec.
        setTimeout(() => setReadyForFocus(false), 1000);
    }, [isMobile, readyForFocus, tanTextfieldAutofocus, checkboxAutofocus]);
    const panelResult = (React__default.createElement("div", { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
        }), tabIndex: -1, ref: panelRef },
        React__default.createElement("form", { onSubmit: event => {
                event.preventDefault();
                onSubmit(event);
            }, "aria-labelledby": headlineId },
            React__default.createElement(GridPresentation, { centeredLayout: centeredLayout },
                React__default.createElement(GridRowPresentation, null,
                    React__default.createElement(GridColumnWrapper, { size: 8 },
                        React__default.createElement(HeadlinePresentation, { size: "h4", as: titleAs, id: headlineId }, titleText),
                        React__default.createElement(BannerMessagePresentation, { heading: messageHeading, headlineAs: messageHeadingAs, id: bannerMessageId, content: typeof messageText === "string" ? (React__default.createElement(ParagraphPresentation, null, messageText)) : (messageText), badgeColor: messageType, showLargeIconBadge: true, badgeIcon: symbols___error, badgeIconVariant: "outline", isVisible: !!messageText }))),
                React__default.createElement(GridRowPresentation, { columnReverse: "sm", verticalAlignment: "middle" },
                    // Spacer that is needed, because columns are filled from right to left (reverse)
                    !centeredLayout && React__default.createElement(GridColumnWrapper, { size: 0, md: 4 }),
                    React__default.createElement(GridColumnWrapper, { size: imageQrCode ? 3 : 2, xs: 4, horizontalAlignment: "right", horizontalAlignmentXs: "center" },
                        React__default.createElement(IllustrationPresentation, { src: imageSrc, alt: imageAltText, size: imageQrCode ? "large" : "responsive" })),
                    React__default.createElement(GridColumnWrapper, { size: imageQrCode ? 5 : 6 },
                        React__default.createElement(ParagraphPresentation, { size: "info-text", id: subtitleId }, subtitleText),
                        infoLinkText && (React__default.createElement(IconLinkGroupWrapper, null,
                            React__default.createElement(IconLinkWrapper, { label: infoLinkText, icon: symbols___infoCircle, onClick: () => setInfoLayerOpen(true) }))),
                        (tanTextfieldVisible && (React__default.createElement(GridPresentation, null,
                            React__default.createElement(GridRowPresentation, null,
                                React__default.createElement(GridColumnPresentation, { size: 4 },
                                    React__default.createElement(TextFieldWrapper, { inputRef: tanTextfieldRef, invalid: !!tanTextfieldErrorText, errorText: tanTextfieldErrorText, placeholder: tanTextfieldPlaceholder, label: tanTextfieldLabel, value: tanTextfieldValue, htmlAttrs: {
                                            autoComplete: "off",
                                            "aria-describedby": [bannerMessageId, subtitleId]
                                                .filter(d => !!d)
                                                .join(" "),
                                        }, onChange: onTanTextfieldChange })))))) ||
                            (!!tanTextfieldErrorText && (React__default.createElement(ParagraphPresentation, { size: "error-text" }, tanTextfieldErrorText))),
                        checkboxVisible && (React__default.createElement(CheckboxWrapper, { inputRef: checkboxRef, invalid: !!checkboxErrorText, "error-text": checkboxErrorText, label: checkboxLabel, value: checkboxValue, onChange: setCheckboxValue, htmlAttrs: {
                                "aria-describedby": [bannerMessageId, subtitleId].filter(d => !!d).join(" "),
                            } })))),
                React__default.createElement(GridRowPresentation, null,
                    React__default.createElement(GridColumnWrapper, { size: 8 },
                        React__default.createElement(ActionGroupPresentation, { left: React__default.createElement(React__default.Fragment, null,
                                cancelButtonText && (React__default.createElement(IconLinkWrapper, { label: cancelButtonText, icon: cancelButtonIcon, appearance: "left", loading: cancelButtonLoading, loadingAriaLabel: loadingText, disabled: cancelButtonDisabled, onClick: onCancelTan, id: cancelButtonId })),
                                miscButtonText && (React__default.createElement(IconLinkWrapper, { label: miscButtonText, icon: miscButtonIcon, appearance: "left", onClick: onMiscClick, disabled: miscButtonDisabled, loading: miscButtonLoading, loadingAriaLabel: loadingText, id: miscButtonId }))) }, submitButtonText && (React__default.createElement(ButtonPresentation, { disabled: (checkboxVisible && !checkboxValue) || submitButtonDisabled, loading: submitButtonLoading, loadingAriaLabel: loadingText, htmlAttrs: { type: "submit" }, color: submitButtonSecondary ? "secondary" : "primary", label: submitButtonText, id: confirmButtonId })))))))));
    return (React__default.createElement(React__default.Fragment, null,
        asSection ? React__default.createElement(SectionPresentation, { spacing: "technical" }, panelResult) : panelResult,
        React__default.createElement(LayerPresentation, { layout: "right", open: infoLayerOpen, onCloseClick: () => setInfoLayerOpen(false), closeLinkLabel: infoLayerBackbuttonText }, children)));
};
TanPanelPresentation.displayName = "TanPanelPresentation";

export { TanPanelPresentation };

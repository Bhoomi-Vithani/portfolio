'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var ActionGroupPresentation = require('../../ActionGroup/shared/ActionGroupPresentation.js');
var BannerMessagePresentation = require('../../BannerMessage/shared/BannerMessagePresentation.js');
var ButtonPresentation = require('../../Button/shared/ButtonPresentation.js');
var CheckboxWrapper = require('../../Checkbox/shared/CheckboxWrapper.js');
var GridPresentation = require('../../Grid/shared/GridPresentation.js');
var GridColumnPresentation = require('../../GridColumn/shared/GridColumnPresentation.js');
var GridColumnWrapper = require('../../GridColumn/shared/GridColumnWrapper.js');
var GridRowPresentation = require('../../GridRow/shared/GridRowPresentation.js');
var HeadlinePresentation = require('../../Headline/shared/HeadlinePresentation.js');
var IconLinkWrapper = require('../../IconLink/shared/IconLinkWrapper.js');
var IconLinkGroupWrapper = require('../../IconLinkGroup/shared/IconLinkGroupWrapper.js');
var LayerPresentation = require('../../Layer/shared/LayerPresentation.js');
var ParagraphPresentation = require('../../Paragraph/shared/ParagraphPresentation.js');
var SectionPresentation = require('../../Section/shared/SectionPresentation.js');
var TanAreaPresentation = require('../../TanArea/shared/TanAreaPresentation.js');
var TextFieldWrapper = require('../../TextField/shared/TextFieldWrapper.js');
var IllustrationPresentation = require('../../_Illustration/IllustrationPresentation.js');
var TanPanel_styles = require('./TanPanel.styles.js');

// @ts-strict-ignore
const TanPanelPresentation = ({
  children,
  className,
  noMargin,
  panelRef: panelRefProp,
  titleText,
  titleAs,
  subtitleText,
  infoLinkText,
  infoLayerBackbuttonText,
  tanTextfieldVisible,
  tanTextfieldAutofocus = false,
  tanTextfieldErrorText,
  tanTextfieldLabel,
  tanTextfieldPlaceholder,
  tanTextfieldRef: tanTextfieldRefProp,
  tanTextfieldValue,
  onTanTextfieldChange,
  checkboxAutofocus,
  checkboxErrorText,
  checkboxLabel,
  checkboxVisible,
  checkboxRef: checkboxRefProp,
  imageQrCode,
  cancelButtonText,
  cancelButtonDisabled,
  cancelButtonIcon = icons.interaction_arrows_arrowLeft,
  cancelButtonLoading,
  onCancelTan,
  miscButtonDisabled,
  miscButtonIcon = icons.banking___phototan,
  miscButtonLoading,
  miscButtonText,
  onMiscClick,
  loadingText,
  imageAltText,
  imageSrc,
  submitButtonDisabled,
  submitButtonLoading,
  submitButtonSecondary = false,
  submitButtonText,
  onSubmit,
  messageHeading,
  messageText,
  messageType = "alert",
  centeredLayout,
  notificationSubline,
  notificationImageSrc,
  notificationImageAlt,
  notificationTitleAs,
  notificationTitleText,
  notificationDisabled,
  asSection = true
}) => {
  const {
    id,
    ref,
    setNotification,
    setTanPanelMounted
  } = React__default.useContext(TanAreaPresentation.TanContext);
  React__default.useEffect(() => {
    setNotification({
      notificationSubline,
      notificationImageSrc,
      notificationImageAlt,
      notificationTitleText,
      notificationDisabled
    });
  }, [notificationSubline, notificationImageSrc, notificationImageAlt, notificationTitleAs, notificationTitleText, notificationDisabled]);
  React__default.useEffect(() => {
    setTanPanelMounted?.(true);
    return () => {
      setTanPanelMounted?.(false);
    };
  }, [setTanPanelMounted]);
  const headlineId = index.useUniqueId("", id && `${id}-headline`);
  const subtitleId = index.useUniqueId("", id && `${id}-subtitle`);
  const bannerMessageId = index.useUniqueId("", id && `${id}-banner`);
  const messageHeadingAs = {
    h1: "h2",
    h2: "h3",
    h3: "h4",
    h4: "h5",
    h5: "h6",
    h6: "h6"
  }[titleAs];
  const [infoLayerOpen, setInfoLayerOpen] = React__default.useState(false);
  const [checkboxValue, setCheckboxValue] = React__default.useState(false);
  const isMobile = index.useViewportRange(undefined, "sm");
  const confirmButtonId = index.useUniqueId(`${TanPanel_styles.hostClass}-confirm`, id && `${id}-confirm`);
  const cancelButtonId = index.useUniqueId(`${TanPanel_styles.hostClass}-cancel`, id && `${id}-cancel`);
  const miscButtonId = index.useUniqueId(`${TanPanel_styles.hostClass}-misc`, id && `${id}-misc`);
  const [readyForFocus, setReadyForFocus] = React__default.useState(true);
  const panelRef = index.combineRefs(panelRefProp, ref);
  const tanTextfieldRef = index.combineRefs(tanTextfieldRefProp);
  const checkboxRef = index.combineRefs(checkboxRefProp);
  // TextField.autoFocus is executed before the viewport is know. Therefore, we need to set the focus manually
  React__default.useEffect(() => {
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
  const panelResult = /*#__PURE__*/React__default.createElement("div", {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [TanPanel_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    tabIndex: -1,
    ref: panelRef
  }, /*#__PURE__*/React__default.createElement("form", {
    onSubmit: event => {
      event.preventDefault();
      onSubmit(event);
    },
    "aria-labelledby": headlineId
  }, /*#__PURE__*/React__default.createElement(GridPresentation.GridPresentation, {
    centeredLayout: centeredLayout
  }, /*#__PURE__*/React__default.createElement(GridRowPresentation.GridRowPresentation, null, /*#__PURE__*/React__default.createElement(GridColumnWrapper.GridColumnWrapper, {
    size: 8
  }, /*#__PURE__*/React__default.createElement(HeadlinePresentation.HeadlinePresentation, {
    size: "h4",
    as: titleAs,
    id: headlineId
  }, titleText), /*#__PURE__*/React__default.createElement(BannerMessagePresentation.BannerMessagePresentation, {
    heading: messageHeading,
    headlineAs: messageHeadingAs,
    id: bannerMessageId,
    content: typeof messageText === "string" ? (/*#__PURE__*/React__default.createElement(ParagraphPresentation.ParagraphPresentation, null, messageText)) : messageText,
    badgeColor: messageType,
    showLargeIconBadge: true,
    badgeIcon: icons.symbols___error,
    badgeIconVariant: "outline",
    isVisible: !!messageText
  }))), /*#__PURE__*/React__default.createElement(GridRowPresentation.GridRowPresentation, {
    columnReverse: "sm",
    verticalAlignment: "middle"
  },
  // Spacer that is needed, because columns are filled from right to left (reverse)
  !centeredLayout && /*#__PURE__*/React__default.createElement(GridColumnWrapper.GridColumnWrapper, {
    size: 0,
    md: 4
  }), /*#__PURE__*/React__default.createElement(GridColumnWrapper.GridColumnWrapper, {
    size: imageQrCode ? 3 : 2,
    xs: 4,
    horizontalAlignment: "right",
    horizontalAlignmentXs: "center"
  }, /*#__PURE__*/React__default.createElement(IllustrationPresentation.IllustrationPresentation, {
    src: imageSrc,
    alt: imageAltText,
    size: imageQrCode ? "large" : "responsive"
  })), /*#__PURE__*/React__default.createElement(GridColumnWrapper.GridColumnWrapper, {
    size: imageQrCode ? 5 : 6
  }, /*#__PURE__*/React__default.createElement(ParagraphPresentation.ParagraphPresentation, {
    size: "info-text",
    id: subtitleId
  }, subtitleText), infoLinkText && (/*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, null, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
    label: infoLinkText,
    icon: icons.symbols___infoCircle,
    onClick: () => setInfoLayerOpen(true)
  }))), tanTextfieldVisible && (/*#__PURE__*/React__default.createElement(GridPresentation.GridPresentation, null, /*#__PURE__*/React__default.createElement(GridRowPresentation.GridRowPresentation, null, /*#__PURE__*/React__default.createElement(GridColumnPresentation.GridColumnPresentation, {
    size: 4
  }, /*#__PURE__*/React__default.createElement(TextFieldWrapper.TextFieldWrapper, {
    inputRef: tanTextfieldRef,
    invalid: !!tanTextfieldErrorText,
    errorText: tanTextfieldErrorText,
    placeholder: tanTextfieldPlaceholder,
    label: tanTextfieldLabel,
    value: tanTextfieldValue,
    htmlAttrs: {
      autoComplete: "off",
      "aria-describedby": [bannerMessageId, subtitleId].filter(d => !!d).join(" ")
    },
    onChange: onTanTextfieldChange
  }))))) || !!tanTextfieldErrorText && (/*#__PURE__*/React__default.createElement(ParagraphPresentation.ParagraphPresentation, {
    size: "error-text"
  }, tanTextfieldErrorText)), checkboxVisible && (/*#__PURE__*/React__default.createElement(CheckboxWrapper.CheckboxWrapper, {
    inputRef: checkboxRef,
    invalid: !!checkboxErrorText,
    "error-text": checkboxErrorText,
    label: checkboxLabel,
    value: checkboxValue,
    onChange: setCheckboxValue,
    htmlAttrs: {
      "aria-describedby": [bannerMessageId, subtitleId].filter(d => !!d).join(" ")
    }
  })))), /*#__PURE__*/React__default.createElement(GridRowPresentation.GridRowPresentation, null, /*#__PURE__*/React__default.createElement(GridColumnWrapper.GridColumnWrapper, {
    size: 8
  }, /*#__PURE__*/React__default.createElement(ActionGroupPresentation.ActionGroupPresentation, {
    left: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, cancelButtonText && (/*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
      label: cancelButtonText,
      icon: cancelButtonIcon,
      appearance: "left",
      loading: cancelButtonLoading,
      loadingAriaLabel: loadingText,
      disabled: cancelButtonDisabled,
      onClick: onCancelTan,
      id: cancelButtonId
    })), miscButtonText && (/*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
      label: miscButtonText,
      icon: miscButtonIcon,
      appearance: "left",
      onClick: onMiscClick,
      disabled: miscButtonDisabled,
      loading: miscButtonLoading,
      loadingAriaLabel: loadingText,
      id: miscButtonId
    })))
  }, submitButtonText && (/*#__PURE__*/React__default.createElement(ButtonPresentation.ButtonPresentation, {
    disabled: checkboxVisible && !checkboxValue || submitButtonDisabled,
    loading: submitButtonLoading,
    loadingAriaLabel: loadingText,
    htmlAttrs: {
      type: "submit"
    },
    color: submitButtonSecondary ? "secondary" : "primary",
    label: submitButtonText,
    id: confirmButtonId
  }))))))));
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, asSection ? /*#__PURE__*/React__default.createElement(SectionPresentation.SectionPresentation, {
    spacing: "technical"
  }, panelResult) : panelResult, /*#__PURE__*/React__default.createElement(LayerPresentation.LayerPresentation, {
    layout: "right",
    open: infoLayerOpen,
    onCloseClick: () => setInfoLayerOpen(false),
    closeLinkLabel: infoLayerBackbuttonText
  }, children));
};
TanPanelPresentation.displayName = "TanPanelPresentation";

exports.TanPanelPresentation = TanPanelPresentation;

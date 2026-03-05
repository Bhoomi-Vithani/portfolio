'use strict';

var icons = require('@lsg/icons');
var dateFns = require('date-fns');
var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var Localization = require('../../../utils/Localization.js');
var React = require('../../../utils/React.js');
var ActionButtonPresentation = require('../../ActionButton/shared/ActionButtonPresentation.js');
var IconPresentation = require('../../Icon/shared/IconPresentation.js');
var IconLinkWrapper = require('../../IconLink/shared/IconLinkWrapper.js');
var IconLinkGroupWrapper = require('../../IconLinkGroup/shared/IconLinkGroupWrapper.js');
var ParagraphPresentation = require('../../Paragraph/shared/ParagraphPresentation.js');
var SpinnerPresentation = require('../../Spinner/shared/SpinnerPresentation.js');
var ThemePresentation = require('../../Theme/shared/ThemePresentation.js');
var SliderWrapper = require('../../_Slider/SliderWrapper.js');
var Video_styles = require('./Video.styles.js');

// @ts-strict-ignore
/* eslint-disable */
// eslint-disable-next-line jsx-a11y/media-has-caption
const Video = React.fRef(({
  ref,
  ...props
}) => /*#__PURE__*/React__default.createElement("video", {
  ...props,
  ref: ref
}));
// Formats the time to 00:00
const formatTime = timeIncoming => {
  const dateTime = dateFns.addMilliseconds(new Date(2000, 1, 1), timeIncoming * 1000);
  return dateFns.format(dateTime, timeIncoming > 3600 ? "hh:mm:ss" : "mm:ss");
};
// TODO: For the next video component rework:
// 1. Mouse-Click on resize, space play/pause should work
// 2. Mouse-Click on centered PlayBtn or initial play -> video has not a focus and space play/pause ist not working yet
const VideoPresentation = ({
  actionTopLeft,
  actionTopRight,
  id,
  className,
  noMargin,
  isStencilHost,
  src,
  isMute,
  onIsMuteChange,
  audioPanelOpen,
  onAudioPanelSetOpen,
  audioVolume,
  onAudioVolumeChange,
  controlsOpen,
  onControlsSetOpen,
  loop,
  poster,
  playbackState,
  onPlaybackStateChange,
  onFullScreen,
  showControls = true,
  showProgressBar = true,
  textVideoAlt,
  time,
  videoProgress,
  onVideoProgressChange,
  onVideoCanPlay,
  videoTitle,
  videoRef,
  // videoElement,
  videoContainerRef,
  videoAutoplayMarkerId,
  fullscreenActive,
  captionSrc,
  captionLang
}) => (/*#__PURE__*/React__default.createElement(Host.Host, {
  className: DomUtils.cleanupClassObject({
    [className]: !!className,
    [Video_styles.hostClass]: true,
    [`${prefix.lsgPre}no-margin`]: noMargin,
    [ThemePresentation.getThemeClass("dark")]: true
  }),
  isStencilHost: isStencilHost
}, /*#__PURE__*/React__default.createElement("div", {
  className: DomUtils.cleanupClassObject({
    [`${Video_styles.hostClass}-overlay`]: true,
    [ThemePresentation.getThemeClass("contrast")]: true,
    [`${Video_styles.hostClass}-unavailable`]: playbackState === "unavailable"
  }),
  onMouseMove: onControlsSetOpen,
  ref: videoContainerRef
}, /*#__PURE__*/React__default.createElement(Video, {
  className: DomUtils.cleanupClassObject({
    [`${Video_styles.hostClass}-source`]: true,
    [`${Video_styles.hostClass}-source-fullscreen`]: fullscreenActive
  }),
  id: id,
  ref: videoRef,
  src: src,
  onClick: () => onPlaybackStateChange(playbackState === "paused" ? "running" : "paused"),
  onCanPlay: onVideoCanPlay,
  title: videoTitle,
  loop: loop,
  onError: () => onPlaybackStateChange("unavailable"),
  tabIndex: 0,
  onKeyDown: event => {
    if (event.key === " ") {
      onPlaybackStateChange(playbackState === "paused" ? "running" : "paused");
    }
  }
}, /*#__PURE__*/React__default.createElement("div", null), Localization.texts.lsg.component.Video.notSupported, /*#__PURE__*/React__default.createElement("br", null), textVideoAlt, captionSrc && /*#__PURE__*/React__default.createElement("track", {
  default: true,
  kind: "captions",
  src: captionSrc,
  srcLang: captionLang
})), poster && (videoProgress == 0 || videoProgress == 100) && (/*#__PURE__*/React__default.createElement("div", {
  className: `${Video_styles.hostClass}-poster`,
  style: {
    backgroundImage: `url('${poster}')`
  },
  onClick: () => onPlaybackStateChange("running")
})), /*#__PURE__*/React__default.createElement("div", {
  id: videoAutoplayMarkerId,
  className: DomUtils.cleanupClassObject({
    [`${Video_styles.hostClass}-grey-overlay`]: true,
    [`${Video_styles.hostClass}-grey-overlay__hidden`]: playbackState === "running"
  }),
  onClick: () => onPlaybackStateChange("paused")
}), /*#__PURE__*/React__default.createElement("div", {
  className: DomUtils.cleanupClassObject({
    [`${Video_styles.hostClass}-actions`]: true,
    [`${Video_styles.hostClass}__hidden`]: !controlsOpen,
    [`${Video_styles.hostClass}-show-controls`]: showControls
  })
}, /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
  className: DomUtils.cleanupClassObject({
    [`${Video_styles.hostClass}-actions-left`]: true
  }),
  direction: "collapse-xs"
}, actionTopLeft), /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
  className: DomUtils.cleanupClassObject({
    [`${Video_styles.hostClass}-actions-right`]: true
  }),
  direction: "collapse-xs"
}, actionTopRight)), /*#__PURE__*/React__default.createElement("div", {
  className: DomUtils.cleanupClassObject({
    [`${Video_styles.hostClass}-center`]: true,
    [`${Video_styles.hostClass}__hidden`]: playbackState === "running" || !showControls,
    [`${Video_styles.hostClass}-controls-hidden`]: !controlsOpen
  }),
  onClick: () => playbackState === "paused" || playbackState === "done" ? onPlaybackStateChange("running") : onPlaybackStateChange("paused")
}, /*#__PURE__*/React__default.createElement("div", {
  className: DomUtils.cleanupClassObject({
    [`${Video_styles.hostClass}-center-interaction-buttons`]: true
  })
}, (playbackState === "paused" || playbackState === "running") && (/*#__PURE__*/React__default.createElement("div", {
  className: `${Video_styles.hostClass}-center-play-button`
}, /*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
  noMargin: true,
  icon: icons.interaction___playbutton,
  color: "anthracite",
  variant: "solid",
  title: ""
}))), /*#__PURE__*/React__default.createElement("div", {
  className: `${Video_styles.hostClass}-center-loading-and-error`
}, (playbackState === "loading" || playbackState === "unavailable") && (/*#__PURE__*/React__default.createElement(SpinnerPresentation.SpinnerPresentation, {
  loading: true,
  ariaLabel: ""
})), playbackState === "unavailable" && (/*#__PURE__*/React__default.createElement(ParagraphPresentation.ParagraphPresentation, {
  size: "info-text"
}, Localization.texts.lsg.component.Video.notSupported))), playbackState === "done" && (/*#__PURE__*/React__default.createElement("div", {
  className: `${Video_styles.hostClass}-center-replay-button`
}, /*#__PURE__*/React__default.createElement(ActionButtonPresentation.ActionButtonPresentation, {
  noMargin: true,
  icon: icons.interaction___replay,
  color: "secondary",
  label: "Play Video",
  appearance: "no-text",
  iconVariant: "solid",
  onClick: () => onPlaybackStateChange("running")
}), /*#__PURE__*/React__default.createElement("div", {
  className: `${Video_styles.hostClass}-center-text`
}, Localization.texts.lsg.component.Video.replay))))), /*#__PURE__*/React__default.createElement("div", {
  className: DomUtils.cleanupClassObject({
    [`${Video_styles.hostClass}-footer`]: true,
    [`${Video_styles.hostClass}__hidden`]: !controlsOpen || !showControls
  })
}, /*#__PURE__*/React__default.createElement("div", {
  className: DomUtils.cleanupClassObject({
    [`${Video_styles.hostClass}-progress`]: true,
    [`${Video_styles.hostClass}__hidden`]: !controlsOpen,
    [`${Video_styles.hostClass}__progress-bar-hidden`]: !showProgressBar
  })
}, /*#__PURE__*/React__default.createElement("div", {
  className: `${Video_styles.hostClass}-slider`
}, /*#__PURE__*/React__default.createElement(SliderWrapper.SliderWrapper, {
  noMargin: true,
  minValue: 0,
  value: videoProgress,
  maxValue: 100,
  onChange: onVideoProgressChange,
  // onDragStart={onVideoSliderDragStart}
  showThumb: controlsOpen
})), /*#__PURE__*/React__default.createElement("div", {
  className: `${Video_styles.hostClass}-time`
}, time && formatTime(time) || "Live")), /*#__PURE__*/React__default.createElement("div", {
  className: DomUtils.cleanupClassObject({
    [`${Video_styles.hostClass}-controls`]: true,
    [`${Video_styles.hostClass}-show-controls`]: showControls
  })
}, /*#__PURE__*/React__default.createElement("div", {
  className: `${Video_styles.hostClass}-controls-left`
}, /*#__PURE__*/React__default.createElement("div", {
  className: DomUtils.cleanupClassObject({
    [`${Video_styles.hostClass}-audio-control`]: true,
    [`${Video_styles.hostClass}__hidden`]: audioPanelOpen === false
  }),
  onMouseMove: onAudioPanelSetOpen
}, /*#__PURE__*/React__default.createElement("input", {
  className: DomUtils.cleanupClassObject({
    [`${Video_styles.hostClass}-audio-control-input`]: true
  }),
  type: "range",
  min: "0",
  max: "100",
  value: isMute ? 0 : audioVolume,
  onChange: e => onAudioVolumeChange(parseInt(e.target.value, 10))
})), /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
  noMargin: true,
  className: DomUtils.cleanupClassObject({
    [`${Video_styles.hostClass}iconlink__no-animation`]: true
  }),
  direction: "horizontal"
}, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
  label: playbackState === "paused" && Localization.texts.lsg.component.Video.play || Localization.texts.lsg.component.Video.pause,
  iconColor: "white",
  icon: playbackState === "paused" && icons.interaction___playbutton || icons.interaction___pause,
  iconVariant: "solid",
  appearance: "no-text",
  onClick: () => onPlaybackStateChange(playbackState === "paused" ? "running" : "paused"),
  hasTabIndex: true
}), /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
  label: isMute && Localization.texts.lsg.component.Video.unMute || Localization.texts.lsg.component.Video.mute,
  className: DomUtils.cleanupClassObject({
    [`${Video_styles.hostClass}iconlink_audio`]: true
  }),
  appearance: "no-text",
  iconColor: "white",
  icon: (isMute || audioVolume === 0) && icons.interaction___volumeOff || audioVolume > 50 && icons.interaction___volume || icons.interaction___volumeLow,
  hasTabIndex: true,
  onClick: () => onIsMuteChange(!isMute),
  onMouseHoverChange: () => onAudioPanelSetOpen()
}), captionSrc && (/*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
  label: Localization.texts.lsg.component.Video.captionOff || Localization.texts.lsg.component.Video.captionOn,
  appearance: "no-text",
  iconColor: "white",
  icon: icons.banking_transfer_transferslip,
  hasTabIndex: true
}))), /*#__PURE__*/React__default.createElement("div", {
  className: `${Video_styles.hostClass}-controls-title`
}, videoTitle)), /*#__PURE__*/React__default.createElement("div", {
  className: `${Video_styles.hostClass}-controls-right`
}, /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
  noMargin: true,
  direction: "horizontal"
}, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
  label: Localization.texts.lsg.component.Video.fullScreen,
  icon: fullscreenActive ? icons.interaction___fullscreenExit : icons.interaction___fullscreenEnter,
  onClick: onFullScreen,
  iconColor: "white",
  hasTabIndex: true,
  appearance: "no-text"
}))))))));
VideoPresentation.displayName = "VideoPresentation";

exports.VideoPresentation = VideoPresentation;

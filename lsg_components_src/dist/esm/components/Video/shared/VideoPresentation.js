import { interaction___playbutton, interaction___replay, interaction___pause, interaction___volumeOff, interaction___volume, interaction___volumeLow, banking_transfer_transferslip, interaction___fullscreenExit, interaction___fullscreenEnter } from '@lsg/icons';
import { addMilliseconds, format } from 'date-fns';
import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { texts } from '../../../utils/Localization.js';
import { fRef } from '../../../utils/React.js';
import { ActionButtonPresentation } from '../../ActionButton/shared/ActionButtonPresentation.js';
import { IconPresentation } from '../../Icon/shared/IconPresentation.js';
import { IconLinkWrapper } from '../../IconLink/shared/IconLinkWrapper.js';
import { IconLinkGroupWrapper } from '../../IconLinkGroup/shared/IconLinkGroupWrapper.js';
import { ParagraphPresentation } from '../../Paragraph/shared/ParagraphPresentation.js';
import { SpinnerPresentation } from '../../Spinner/shared/SpinnerPresentation.js';
import { getThemeClass } from '../../Theme/shared/ThemePresentation.js';
import { SliderWrapper } from '../../_Slider/SliderWrapper.js';
import { hostClass } from './Video.styles.js';

// @ts-strict-ignore
/* eslint-disable */
// eslint-disable-next-line jsx-a11y/media-has-caption
const Video = fRef(({ ref, ...props }) => React__default.createElement("video", { ...props, ref: ref }));
// Formats the time to 00:00
const formatTime = (timeIncoming) => {
    const dateTime = addMilliseconds(new Date(2000, 1, 1), timeIncoming * 1000);
    return format(dateTime, timeIncoming > 3600 ? "hh:mm:ss" : "mm:ss");
};
// TODO: For the next video component rework:
// 1. Mouse-Click on resize, space play/pause should work
// 2. Mouse-Click on centered PlayBtn or initial play -> video has not a focus and space play/pause ist not working yet
const VideoPresentation = ({ actionTopLeft, actionTopRight, id, className, noMargin, isStencilHost, src, isMute, onIsMuteChange, audioPanelOpen, onAudioPanelSetOpen, audioVolume, onAudioVolumeChange, controlsOpen, onControlsSetOpen, loop, poster, playbackState, onPlaybackStateChange, onFullScreen, showControls = true, showProgressBar = true, textVideoAlt, time, videoProgress, onVideoProgressChange, onVideoCanPlay, videoTitle, videoRef, 
// videoElement,
videoContainerRef, videoAutoplayMarkerId, fullscreenActive, captionSrc, captionLang, }) => (React__default.createElement(Host, { className: cleanupClassObject({
        [className]: !!className,
        [hostClass]: true,
        [`${lsgPre}no-margin`]: noMargin,
        [getThemeClass("dark")]: true,
    }), isStencilHost: isStencilHost },
    React__default.createElement("div", { className: cleanupClassObject({
            [`${hostClass}-overlay`]: true,
            [getThemeClass("contrast")]: true,
            [`${hostClass}-unavailable`]: playbackState === "unavailable",
        }), onMouseMove: onControlsSetOpen, ref: videoContainerRef },
        React__default.createElement(Video, { className: cleanupClassObject({
                [`${hostClass}-source`]: true,
                [`${hostClass}-source-fullscreen`]: fullscreenActive,
            }), id: id, ref: videoRef, src: src, onClick: () => onPlaybackStateChange(playbackState === "paused" ? "running" : "paused"), onCanPlay: onVideoCanPlay, title: videoTitle, loop: loop, onError: () => onPlaybackStateChange("unavailable"), tabIndex: 0, onKeyDown: event => {
                if (event.key === " ") {
                    onPlaybackStateChange(playbackState === "paused" ? "running" : "paused");
                }
            } },
            React__default.createElement("div", null),
            texts.lsg.component.Video.notSupported,
            React__default.createElement("br", null),
            textVideoAlt,
            captionSrc && React__default.createElement("track", { default: true, kind: "captions", src: captionSrc, srcLang: captionLang })),
        poster && (videoProgress == 0 || videoProgress == 100) && (React__default.createElement("div", { className: `${hostClass}-poster`, style: { backgroundImage: `url('${poster}')` }, onClick: () => onPlaybackStateChange("running") })),
        React__default.createElement("div", { id: videoAutoplayMarkerId, className: cleanupClassObject({
                [`${hostClass}-grey-overlay`]: true,
                [`${hostClass}-grey-overlay__hidden`]: playbackState === "running",
            }), onClick: () => onPlaybackStateChange("paused") }),
        React__default.createElement("div", { className: cleanupClassObject({
                [`${hostClass}-actions`]: true,
                [`${hostClass}__hidden`]: !controlsOpen,
                [`${hostClass}-show-controls`]: showControls,
            }) },
            React__default.createElement(IconLinkGroupWrapper, { className: cleanupClassObject({
                    [`${hostClass}-actions-left`]: true,
                }), direction: "collapse-xs" }, actionTopLeft),
            React__default.createElement(IconLinkGroupWrapper, { className: cleanupClassObject({
                    [`${hostClass}-actions-right`]: true,
                }), direction: "collapse-xs" }, actionTopRight)),
        React__default.createElement("div", { className: cleanupClassObject({
                [`${hostClass}-center`]: true,
                [`${hostClass}__hidden`]: playbackState === "running" || !showControls,
                [`${hostClass}-controls-hidden`]: !controlsOpen,
            }), onClick: () => playbackState === "paused" || playbackState === "done"
                ? onPlaybackStateChange("running")
                : onPlaybackStateChange("paused") },
            React__default.createElement("div", { className: cleanupClassObject({
                    [`${hostClass}-center-interaction-buttons`]: true,
                }) },
                (playbackState === "paused" || playbackState === "running") && (React__default.createElement("div", { className: `${hostClass}-center-play-button` },
                    React__default.createElement(IconPresentation, { noMargin: true, icon: interaction___playbutton, color: "anthracite", variant: "solid", title: "" }))),
                React__default.createElement("div", { className: `${hostClass}-center-loading-and-error` },
                    (playbackState === "loading" || playbackState === "unavailable") && (React__default.createElement(SpinnerPresentation, { loading: true, ariaLabel: "" })),
                    playbackState === "unavailable" && (React__default.createElement(ParagraphPresentation, { size: "info-text" }, texts.lsg.component.Video.notSupported))),
                playbackState === "done" && (React__default.createElement("div", { className: `${hostClass}-center-replay-button` },
                    React__default.createElement(ActionButtonPresentation, { noMargin: true, icon: interaction___replay, color: "secondary", label: "Play Video", appearance: "no-text", iconVariant: "solid", onClick: () => onPlaybackStateChange("running") }),
                    React__default.createElement("div", { className: `${hostClass}-center-text` }, texts.lsg.component.Video.replay))))),
        React__default.createElement("div", { className: cleanupClassObject({
                [`${hostClass}-footer`]: true,
                [`${hostClass}__hidden`]: !controlsOpen || !showControls,
            }) },
            React__default.createElement("div", { className: cleanupClassObject({
                    [`${hostClass}-progress`]: true,
                    [`${hostClass}__hidden`]: !controlsOpen,
                    [`${hostClass}__progress-bar-hidden`]: !showProgressBar,
                }) },
                React__default.createElement("div", { className: `${hostClass}-slider` },
                    React__default.createElement(SliderWrapper, { noMargin: true, minValue: 0, value: videoProgress, maxValue: 100, onChange: onVideoProgressChange, 
                        // onDragStart={onVideoSliderDragStart}
                        showThumb: controlsOpen })),
                React__default.createElement("div", { className: `${hostClass}-time` }, (time && formatTime(time)) || "Live")),
            React__default.createElement("div", { className: cleanupClassObject({
                    [`${hostClass}-controls`]: true,
                    [`${hostClass}-show-controls`]: showControls,
                }) },
                React__default.createElement("div", { className: `${hostClass}-controls-left` },
                    React__default.createElement("div", { className: cleanupClassObject({
                            [`${hostClass}-audio-control`]: true,
                            [`${hostClass}__hidden`]: audioPanelOpen === false,
                        }), onMouseMove: onAudioPanelSetOpen },
                        React__default.createElement("input", { className: cleanupClassObject({
                                [`${hostClass}-audio-control-input`]: true,
                            }), type: "range", min: "0", max: "100", value: isMute ? 0 : audioVolume, onChange: e => onAudioVolumeChange(parseInt(e.target.value, 10)) })),
                    React__default.createElement(IconLinkGroupWrapper, { noMargin: true, className: cleanupClassObject({
                            [`${hostClass}iconlink__no-animation`]: true,
                        }), direction: "horizontal" },
                        React__default.createElement(IconLinkWrapper, { label: (playbackState === "paused" && texts.lsg.component.Video.play) ||
                                texts.lsg.component.Video.pause, iconColor: "white", icon: (playbackState === "paused" && interaction___playbutton) || interaction___pause, iconVariant: "solid", appearance: "no-text", onClick: () => onPlaybackStateChange(playbackState === "paused" ? "running" : "paused"), hasTabIndex: true }),
                        React__default.createElement(IconLinkWrapper, { label: (isMute && texts.lsg.component.Video.unMute) || texts.lsg.component.Video.mute, className: cleanupClassObject({
                                [`${hostClass}iconlink_audio`]: true,
                            }), appearance: "no-text", iconColor: "white", icon: ((isMute || audioVolume === 0) && interaction___volumeOff) ||
                                (audioVolume > 50 && interaction___volume) ||
                                interaction___volumeLow, hasTabIndex: true, onClick: () => onIsMuteChange(!isMute), onMouseHoverChange: () => onAudioPanelSetOpen() }),
                        captionSrc && (React__default.createElement(IconLinkWrapper, { label: texts.lsg.component.Video.captionOff || texts.lsg.component.Video.captionOn, appearance: "no-text", iconColor: "white", icon: banking_transfer_transferslip, hasTabIndex: true }))),
                    React__default.createElement("div", { className: `${hostClass}-controls-title` }, videoTitle)),
                React__default.createElement("div", { className: `${hostClass}-controls-right` },
                    React__default.createElement(IconLinkGroupWrapper, { noMargin: true, direction: "horizontal" },
                        React__default.createElement(IconLinkWrapper, { label: texts.lsg.component.Video.fullScreen, icon: fullscreenActive ? interaction___fullscreenExit : interaction___fullscreenEnter, onClick: onFullScreen, iconColor: "white", hasTabIndex: true, appearance: "no-text" }))))))));
VideoPresentation.displayName = "VideoPresentation";

export { VideoPresentation };

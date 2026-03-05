import React, { ReactNode } from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IVideoSharedProps extends IBasicPropsInternal {
    src: string;
    videoTitle?: string;
    poster?: string;
    loop?: boolean;
    autoplay?: boolean;
    textVideoAlt?: string;
    showControls?: boolean;
    showProgressBar?: boolean;
    actionTopLeft?: ReactNode;
    actionTopRight?: ReactNode;
    /** CaptionSrc and captionLang only for internal/future use */
    /** Address of the caption (subtitel) file (*.vtt file). Must be a valid URL. */
    captionSrc?: string;
    /** Language of the caption file. (e.g. "de", "en", etc. */
    captionLang?: string;
}
interface IVideoPresentationOnlyProps {
    time?: number;
    centerAction?: "play" | "spinner" | "replay";
    videoProgress: number;
    onVideoProgressChange: (newProgress: number) => void;
    onVideoCanPlay: (newCanPlayState: boolean) => void;
    playbackState: "running" | "paused" | "done" | "loading" | "unavailable";
    onPlaybackStateChange: (newState: "running" | "paused" | "done" | "loading" | "unavailable") => void;
    onFullScreen: any;
    isMute: boolean;
    onIsMuteChange: (newMute: boolean) => void;
    audioVolume: number;
    onAudioVolumeChange: (newVolume: number) => void;
    audioPanelOpen: boolean;
    onAudioPanelSetOpen: () => void;
    controlsOpen: boolean;
    onControlsSetOpen: () => void;
    videoRef: any;
    videoContainerRef: any;
    videoElement: HTMLVideoElement;
    videoAutoplayMarkerId: string;
    fullscreenActive: boolean;
}
export interface IVideoPresentationProps extends IVideoSharedProps, IVideoPresentationOnlyProps {
}
export declare const VideoPresentation: {
    ({ actionTopLeft, actionTopRight, id, className, noMargin, isStencilHost, src, isMute, onIsMuteChange, audioPanelOpen, onAudioPanelSetOpen, audioVolume, onAudioVolumeChange, controlsOpen, onControlsSetOpen, loop, poster, playbackState, onPlaybackStateChange, onFullScreen, showControls, showProgressBar, textVideoAlt, time, videoProgress, onVideoProgressChange, onVideoCanPlay, videoTitle, videoRef, videoContainerRef, videoAutoplayMarkerId, fullscreenActive, captionSrc, captionLang, }: IVideoPresentationProps): React.JSX.Element;
    displayName: string;
};
export {};

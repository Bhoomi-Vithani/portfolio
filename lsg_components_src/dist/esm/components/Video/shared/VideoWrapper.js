import React__default, { useRef, useState, useCallback, useEffect } from 'react';
import { useUniqueId, usePrevious } from '../../../utils/Hooks/index.js';
import { setLsgTimeout, clearLsgTimeout } from '../../../utils/timing.js';
import { addVisibilityCallback, Visibility } from '../../../utils/windowEvents/ScrollEvents.js';
import { VideoPresentation } from './VideoPresentation.js';

// @ts-strict-ignore
const VideoWrapper = (props) => {
    const audioPanelTimeoutRef = useRef(undefined);
    const controlsTimeoutRef = useRef(undefined);
    const hideControlsTimeoutMillis = 3000;
    const videoElementRef = useRef(undefined);
    const videoContainerRef = useRef(undefined);
    const runningIntervalRef = useRef(undefined);
    const runningIntervalMillis = 100;
    const videoAutoplayMarkerId = useUniqueId("video-autoplay-marker-id-");
    // todo: If the component is worked on again, we can probably split this state further.
    const [state, setState] = useState({
        videoProgress: 0, // Percentage
        canPlayState: false,
        time: 0,
    });
    const [audioState, setAudioState] = useState({
        isMute: props.autoplay, // set mute on autoplay
        audioVolume: 100,
    });
    const [controlsOpen, setControlsOpen] = useState(false);
    const [audioPanelOpen, setAudioPanelOpen] = useState(false);
    const [fullscreenActive, setFullscreenActive] = useState(false);
    const [playbackState, setPlaybackState] = useState("paused");
    const { time, centerAction, videoProgress } = state;
    const { isMute, audioVolume } = audioState;
    const prevIsMute = usePrevious(audioState.isMute);
    const prevAudioVolume = usePrevious(audioState.audioVolume);
    const prevStatePlaybackState = usePrevious(playbackState);
    const handleVisibilityChange = () => {
        setPlaybackState("running");
    };
    const onRunningHandler = useCallback(() => {
        setState(prevState => ({
            ...prevState,
            time: videoElementRef.current?.currentTime || 0,
            videoProgress: (videoElementRef.current &&
                (videoElementRef.current.currentTime / videoElementRef.current.duration) * 100) ||
                0,
        }));
        if (videoElementRef?.current?.currentTime &&
            videoElementRef.current.currentTime === videoElementRef.current.duration) {
            setPlaybackState("done");
            clearInterval(runningIntervalRef.current);
        }
    }, [setState]);
    const onVideoProgressChange = newProgress => {
        if (videoElementRef.current?.duration)
            if ((videoElementRef.current.duration || 0) * (newProgress / 100) !== state.time) {
                setState({ ...state, videoProgress: newProgress });
                videoElementRef.current.currentTime = (videoElementRef.current.duration || 0) * (newProgress / 100);
            }
    };
    const onFullScreen = async () => {
        if (document.fullscreenElement || fullscreenActive) {
            // TODO: check if { capture: true } is required to prevent bugs with react >= 17
            document.removeEventListener("fullscreenchange", onFullScreen);
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
            setFullscreenActive(false);
        }
        else {
            await videoContainerRef.current.requestFullscreen();
            setFullscreenActive(true);
            // This function and listener is used for exiting the fullscreen with the esc key.
            setLsgTimeout(() => {
                // TODO: check if { capture: true } is required to prevent bugs with react >= 17
                document.addEventListener("fullscreenchange", onFullScreen);
            }, 2000);
        }
    };
    useEffect(() => {
        videoElementRef.current.volume = audioState.isMute ? 0 : audioState.audioVolume / 100;
        if (props.autoplay) {
            setLsgTimeout(() => {
                addVisibilityCallback(handleVisibilityChange, [videoAutoplayMarkerId], Visibility.FULLY_VISIBLE);
            }, 1500);
        }
        return () => {
            document.removeEventListener("fullscreenchange", onFullScreen);
        };
    }, []);
    useEffect(() => {
        if (prevAudioVolume !== audioVolume) {
            videoElementRef.current.volume = audioVolume / 100;
            setAudioState({ ...audioState, isMute: false });
        }
        else if (prevIsMute !== isMute) {
            videoElementRef.current.volume = isMute ? 0 : audioVolume / 100;
        }
    }, [audioVolume, isMute]);
    useEffect(() => {
        if (state.canPlayState) {
            if (!state.time || state.time === 0) {
                setState({
                    ...state,
                    time: videoElementRef.current.duration,
                });
            }
        }
        if (prevStatePlaybackState !== playbackState) {
            switch (playbackState) {
                case "running":
                    videoElementRef.current.play();
                    // TODO: reset this when the video is finished
                    // eslint-disable-next-line @typescript-eslint/no-implied-eval
                    runningIntervalRef.current = setInterval(() => onRunningHandler(), runningIntervalMillis);
                    break;
                case "paused":
                    videoElementRef.current.pause();
                    clearInterval(runningIntervalRef.current);
                    break;
            }
        }
        // eslint-disable-next-line etc/no-commented-out-code
    } // [audioVolume, isMute, playbackState]
    );
    return (React__default.createElement(VideoPresentation, { ...props, time: time, centerAction: centerAction, videoProgress: videoProgress, onVideoProgressChange: newProgress => onVideoProgressChange(newProgress), onVideoCanPlay: newCanPlayState => setState({ ...state, canPlayState: newCanPlayState }), playbackState: playbackState, onPlaybackStateChange: newState => setPlaybackState(newState), isMute: isMute, onIsMuteChange: newMute => setAudioState({ ...audioState, isMute: newMute }), audioVolume: audioVolume, onAudioVolumeChange: newVolume => setAudioState({ ...audioState, audioVolume: newVolume }), audioPanelOpen: audioPanelOpen, onAudioPanelSetOpen: () => {
            if (audioPanelOpen !== true) {
                setAudioPanelOpen(true);
            }
            clearLsgTimeout(audioPanelTimeoutRef.current);
            audioPanelTimeoutRef.current = setLsgTimeout(() => {
                setAudioPanelOpen(false);
            }, hideControlsTimeoutMillis);
        }, controlsOpen: controlsOpen || playbackState !== "running", onControlsSetOpen: () => {
            if (controlsOpen !== true) {
                setControlsOpen(true);
            }
            clearLsgTimeout(controlsTimeoutRef.current);
            controlsTimeoutRef.current = setLsgTimeout(() => {
                setControlsOpen(false);
            }, hideControlsTimeoutMillis);
        }, videoRef: r => {
            videoElementRef.current = r;
        }, videoContainerRef: r => {
            videoContainerRef.current = r;
        }, videoElement: videoElementRef.current, videoAutoplayMarkerId: videoAutoplayMarkerId, onFullScreen: onFullScreen, fullscreenActive: fullscreenActive }));
};

export { VideoWrapper };

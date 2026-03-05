import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IVideoProps extends IBasicProps {
    /** The video source */
    src: string;
    /** The video source type  */
    type?: string;
    /** Title  */
    videoTitle?: string;
    /** Source of the poster image  */
    poster?: string;
    /** Enables loop function (default: false)  */
    loop?: boolean;
    /** Enables Autoplay function (default: false) */
    autoplay?: boolean;
    /** Normally, a greyish overlay is shown to indicate that the video is stopped or paused. if set on false no overlay is shown  */
    overlay?: boolean;
    /**  Optional centerText for the replay button */
    textReplayButton?: any;
    /** Alternative text if video cannot be played (e.g. no browser support)  */
    textVideoAlt?: string;
    /** Iconlinks to the left at the top.  They should have the appearance="left" prop  */
    left?: React.ReactNode;
    /** Iconlinks to the right at the top. They should have the appearance="right" prop */
    right?: React.ReactNode;
    /** Show controls, if false, controls are not visible  */
    showControls?: boolean;
    /** Show the progress bar at the bottom  */
    showProgressBar?: boolean;
}
/** @deprecated. The component will be removed in the next major release. Please use alternative libraries. */
declare class Video extends React.Component<IVideoProps> {
    static displayName: string;
    render(): React.JSX.Element;
}
export { Video, IVideoProps };

import * as React from 'react';
import { VideoWrapper } from './shared/VideoWrapper.js';

// @ts-strict-ignore
/** @deprecated. The component will be removed in the next major release. Please use alternative libraries. */
class Video extends React.Component {
    render() {
        const { left, right, ...props } = this.props;
        return React.createElement(VideoWrapper, { ...props, actionTopLeft: left, actionTopRight: right });
    }
}
Video.displayName = "Video";

export { Video };

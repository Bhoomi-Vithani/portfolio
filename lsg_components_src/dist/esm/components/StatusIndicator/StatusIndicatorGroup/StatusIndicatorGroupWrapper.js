import React__default from 'react';
import { getInitialViewportSize, addViewportCallback, removeViewportCallback } from '../../../utils/windowEvents/ResizeEvents.js';
import { StatusIndicatorGroupPresentation } from './StatusIndicatorGroupPresentation.js';

// @ts-strict-ignore
const defaultProps = {
    direction: "vertical",
};
class StatusIndicatorGroupWrapper extends React__default.Component {
    constructor(props) {
        super(props);
        this.updateViewport = viewport => this.setState(() => ({ viewport }));
        this.state = {
            viewport: getInitialViewportSize(),
        };
    }
    componentDidMount() {
        addViewportCallback(this.updateViewport);
    }
    componentWillUnmount() {
        removeViewportCallback(this.updateViewport);
    }
    render() {
        const { viewport } = this.state;
        return React__default.createElement(StatusIndicatorGroupPresentation, { ...this.props, viewport: viewport });
    }
}
StatusIndicatorGroupWrapper.defaultProps = defaultProps;

export { StatusIndicatorGroupWrapper };

import * as React from 'react';
import '../../../utils/windowEvents/ScrollEvents.js';
import { getInitialViewportSize, addViewportCallback, removeViewportCallback } from '../../../utils/windowEvents/ResizeEvents.js';
import { EyeCatcherPresentation } from './EyeCatcherPresentation.js';

class EyeCatcherWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.viewportHandler = (viewport) => {
            this.setState(() => ({ viewport }));
        };
        this.state = {
            viewport: getInitialViewportSize(),
        };
    }
    componentDidMount() {
        addViewportCallback(this.viewportHandler);
    }
    componentWillUnmount() {
        removeViewportCallback(this.viewportHandler);
    }
    render() {
        return React.createElement(EyeCatcherPresentation, { ...this.props, viewport: this.state.viewport });
    }
}

export { EyeCatcherWrapper };

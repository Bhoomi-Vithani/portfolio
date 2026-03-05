import React__default from 'react';
import { fragmentCount, fragmentMap } from '../../../utils/ReactUtils.js';
import { getInitialViewportSize, addViewportCallback, removeViewportCallback } from '../../../utils/windowEvents/ResizeEvents.js';
import { StepperPresentation } from './StepperPresentation.js';

// @ts-strict-ignore
class StepperWrapper extends React__default.Component {
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
        const { iconSize, centeredLayout, children, ...otherProps } = this.props;
        const { viewport } = this.state;
        const iconSizeItem = ["xs", "sm"].includes(viewport) ? "medium" : iconSize;
        const numElements = fragmentCount(children);
        const gridColumnSize = numElements === 2 || numElements === 4 ? 5 : 4;
        return (React__default.createElement(StepperPresentation, { centeredLayout: centeredLayout, ...otherProps }, fragmentMap(children, (child) => React__default.cloneElement(child, {
            iconSize: iconSizeItem,
            centeredLayout,
            gridColumnSize,
        }))));
    }
}
StepperWrapper.defaultProps = {
    iconSize: "medium",
    centeredLayout: false,
};

export { StepperWrapper };

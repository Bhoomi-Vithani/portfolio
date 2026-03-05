import React__default from 'react';
import { fragmentMap } from '../../../utils/ReactUtils.js';
import { getInitialViewportSize, addViewportCallback, removeViewportCallback } from '../../../utils/windowEvents/ResizeEvents.js';
import { GridColumnPresentation } from './GridColumnPresentation.js';

// @ts-strict-ignore
class GridColumnWrapper extends React__default.Component {
    constructor(props) {
        super(props);
        this.updateViewport = viewport => {
            this.setState({ viewport });
        };
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
        const { children, horizontalAlignment, horizontalAlignmentMd, horizontalAlignmentSm, horizontalAlignmentXs, ...otherProps } = this.props;
        const { viewport } = this.state;
        const align = {
            xs: horizontalAlignmentXs || horizontalAlignment,
            sm: horizontalAlignmentSm || horizontalAlignment,
            md: horizontalAlignmentMd || horizontalAlignment,
            lg: horizontalAlignmentMd || horizontalAlignment,
            xl: horizontalAlignmentMd || horizontalAlignment,
        }[viewport] || horizontalAlignment;
        return (React__default.createElement(GridColumnPresentation, { ...otherProps, horizontalAlignment: horizontalAlignment, horizontalAlignmentXs: horizontalAlignmentXs, horizontalAlignmentSm: horizontalAlignmentSm, horizontalAlignmentMd: horizontalAlignmentMd }, fragmentMap(children, (child) => typeof child.type === "string" ? child : React__default.cloneElement(child, { horizontalAlignment: align }))));
    }
}

export { GridColumnWrapper };

import React__default, { isValidElement } from 'react';
import { fragmentCount, fragmentMap } from '../../../utils/ReactUtils.js';
import { getInitialViewportSize, addViewportCallback, removeViewportCallback } from '../../../utils/windowEvents/ResizeEvents.js';
import { ButtonGroupPresentation } from './ButtonGroupPresentation.js';

// @ts-strict-ignore
class ButtonGroupWrapper extends React__default.Component {
    constructor(props) {
        super(props);
        this.updateViewport = viewport => {
            this.setState(() => ({ viewport }));
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
        const { children, as: asProp, ...otherProps } = this.props;
        const { viewport } = this.state;
        const forceUl = asProp !== "ul" && asProp !== "ol" && fragmentCount(children) > 1;
        const as = forceUl ? "ul" : asProp;
        return (React__default.createElement(ButtonGroupPresentation, { ...otherProps, viewport: viewport, as: as }, fragmentMap(children, (child) => isValidElement(child) &&
            React__default.cloneElement(child, {
                as: as === "ul" || as === "ol" ? "li" : child.props.as,
                // avoid full width of buttons in the layer header
                reducedWidthMobile: otherProps.direction === "horizontal",
            }))));
    }
}
ButtonGroupWrapper.defaultProps = {
    direction: "horizontal",
};

export { ButtonGroupWrapper };

import React__default from 'react';
import { ChartInfoBoxContainerPresentation } from './ChartInfoBoxContainerPresentation.js';

// @ts-strict-ignore
class ChartInfoBoxContainerWrapper extends React__default.Component {
    constructor(props) {
        super(props);
        this.state = {
            containerWidth: 0,
            containerHeight: 0,
        };
    }
    componentDidMount() {
        if (this.props.onMeasure) {
            const width = this.componentRef.getBoundingClientRect().width;
            const height = this.componentRef.getBoundingClientRect().height;
            this.props.onMeasure(width, height);
            this.setState(() => ({ containerWidth: width, containerHeight: height }));
        }
    }
    componentDidUpdate() {
        const width = this.componentRef.getBoundingClientRect().width;
        const height = this.componentRef.getBoundingClientRect().height;
        if (!!this.componentRef &&
            (this.state.containerWidth !== width || this.state.containerHeight !== height) &&
            this.props.onMeasure) {
            this.props.onMeasure(width, height);
            this.setState(() => ({ containerWidth: width, containerHeight: height }));
        }
        return true;
    }
    render() {
        return React__default.createElement(ChartInfoBoxContainerPresentation, { ...this.props, containerRef: r => (this.componentRef = r) });
    }
}
ChartInfoBoxContainerWrapper.defaultProps = {};

export { ChartInfoBoxContainerWrapper };

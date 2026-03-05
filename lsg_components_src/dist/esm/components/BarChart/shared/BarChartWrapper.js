import isEqual from 'lodash.isequal';
import React__default from 'react';
import { getViewportSize, getInitialViewportSize, addViewportCallback, addResizeCallback, removeViewportCallback, removeResizeCallback } from '../../../utils/windowEvents/ResizeEvents.js';
import { BarChartPresentation } from './BarChartPresentation.js';

// @ts-strict-ignore
class BarChartWrapper extends React__default.Component {
    constructor(props) {
        super(props);
        this.handleViewport = () => this.setState(() => ({ viewport: getViewportSize() }));
        this.handleResize = () => {
            this.setState(() => ({
                hostHeight: this.hostElement?.clientHeight || 0,
                hostWidth: 200,
                chartWidth: this.chartElement?.clientWidth || 0,
                yAxisWidth: this.yAxisElement?.getBBox?.()?.width || 0,
            }));
        };
        this.handleOnMouseEnter = event => {
            const barIndex = parseInt(event.target.getAttribute("data-group"), 10) - 1;
            if (this.props.onBarHover) {
                this.props.onBarHover(barIndex, event);
            }
            this.setState(() => ({ hoveredElement: barIndex }));
        };
        const barLabelInitialHeight = [];
        for (let i = 0; i < props.bars[0].dataPoints.length; i++) {
            barLabelInitialHeight.push(0);
        }
        this.state = {
            hostWidth: 0,
            hostHeight: 0,
            chartWidth: 0,
            yAxisWidth: 0,
            viewport: getInitialViewportSize(),
            hoveredElement: -1,
            barLabelHeight: barLabelInitialHeight,
        };
        this.barRefArray = [];
    }
    componentDidMount() {
        addViewportCallback(this.handleViewport);
        addResizeCallback(this.handleResize);
        this.handleResize();
    }
    componentWillUnmount() {
        removeViewportCallback(this.handleViewport);
        removeResizeCallback(this.handleResize);
    }
    componentDidUpdate(_prevProps, prevState, _snapshot) {
        const labelHeight = this.barRefArray.map(ref => ref?.offsetHeight);
        if (!isEqual(prevState.barLabelHeight, labelHeight)) {
            this.setState(() => ({ barLabelHeight: labelHeight }));
        }
    }
    render() {
        const { barsOptions, responsiveHeight } = this.props;
        return (React__default.createElement(BarChartPresentation, { width: this.state.chartWidth, height: this.state.hostHeight, responsiveHeight: responsiveHeight, hostRef: r => (this.hostElement = r), chartRef: r => (this.chartElement = r), yAxisRef: r => (this.yAxisElement = r), yAxisWidth: this.state.yAxisWidth, barLabelRef: this.barRefArray, viewport: this.state.viewport, handleOnMouseEnter: this.handleOnMouseEnter, hoveredElement: this.state.hoveredElement, handleOnMouseLeave: _ => this.setState(() => ({ hoveredElement: -1 })), separator: barsOptions?.separator, highlightedElement: barsOptions?.highlight, barLabelYPosition: this.state.barLabelHeight, ...this.props }));
    }
}

export { BarChartWrapper };

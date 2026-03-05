'use strict';

var isEqual = require('lodash.isequal');
var React__default = require('react');
var ResizeEvents = require('../../../utils/windowEvents/ResizeEvents.js');
var BarChartPresentation = require('./BarChartPresentation.js');

// @ts-strict-ignore
class BarChartWrapper extends React__default.Component {
  constructor(props) {
    super(props);
    this.handleViewport = () => this.setState(() => ({
      viewport: ResizeEvents.getViewportSize()
    }));
    this.handleResize = () => {
      this.setState(() => ({
        hostHeight: this.hostElement?.clientHeight || 0,
        hostWidth: 200,
        chartWidth: this.chartElement?.clientWidth || 0,
        yAxisWidth: this.yAxisElement?.getBBox?.()?.width || 0
      }));
    };
    this.handleOnMouseEnter = event => {
      const barIndex = parseInt(event.target.getAttribute("data-group"), 10) - 1;
      if (this.props.onBarHover) {
        this.props.onBarHover(barIndex, event);
      }
      this.setState(() => ({
        hoveredElement: barIndex
      }));
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
      viewport: ResizeEvents.getInitialViewportSize(),
      hoveredElement: -1,
      barLabelHeight: barLabelInitialHeight
    };
    this.barRefArray = [];
  }
  componentDidMount() {
    ResizeEvents.addViewportCallback(this.handleViewport);
    ResizeEvents.addResizeCallback(this.handleResize);
    this.handleResize();
  }
  componentWillUnmount() {
    ResizeEvents.removeViewportCallback(this.handleViewport);
    ResizeEvents.removeResizeCallback(this.handleResize);
  }
  componentDidUpdate(_prevProps, prevState, _snapshot) {
    const labelHeight = this.barRefArray.map(ref => ref?.offsetHeight);
    if (!isEqual(prevState.barLabelHeight, labelHeight)) {
      this.setState(() => ({
        barLabelHeight: labelHeight
      }));
    }
  }
  render() {
    const {
      barsOptions,
      responsiveHeight
    } = this.props;
    return /*#__PURE__*/React__default.createElement(BarChartPresentation.BarChartPresentation, {
      width: this.state.chartWidth,
      height: this.state.hostHeight,
      responsiveHeight: responsiveHeight,
      hostRef: r => this.hostElement = r,
      chartRef: r => this.chartElement = r,
      yAxisRef: r => this.yAxisElement = r,
      yAxisWidth: this.state.yAxisWidth,
      barLabelRef: this.barRefArray,
      viewport: this.state.viewport,
      handleOnMouseEnter: this.handleOnMouseEnter,
      hoveredElement: this.state.hoveredElement,
      handleOnMouseLeave: _ => this.setState(() => ({
        hoveredElement: -1
      })),
      separator: barsOptions?.separator,
      highlightedElement: barsOptions?.highlight,
      barLabelYPosition: this.state.barLabelHeight,
      ...this.props
    });
  }
}

exports.BarChartWrapper = BarChartWrapper;

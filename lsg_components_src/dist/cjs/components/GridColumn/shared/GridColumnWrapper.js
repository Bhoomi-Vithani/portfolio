'use strict';

var React__default = require('react');
var ReactUtils = require('../../../utils/ReactUtils.js');
var ResizeEvents = require('../../../utils/windowEvents/ResizeEvents.js');
var GridColumnPresentation = require('./GridColumnPresentation.js');

// @ts-strict-ignore
class GridColumnWrapper extends React__default.Component {
  constructor(props) {
    super(props);
    this.updateViewport = viewport => {
      this.setState({
        viewport
      });
    };
    this.state = {
      viewport: ResizeEvents.getInitialViewportSize()
    };
  }
  componentDidMount() {
    ResizeEvents.addViewportCallback(this.updateViewport);
  }
  componentWillUnmount() {
    ResizeEvents.removeViewportCallback(this.updateViewport);
  }
  render() {
    const {
      children,
      horizontalAlignment,
      horizontalAlignmentMd,
      horizontalAlignmentSm,
      horizontalAlignmentXs,
      ...otherProps
    } = this.props;
    const {
      viewport
    } = this.state;
    const align = {
      xs: horizontalAlignmentXs || horizontalAlignment,
      sm: horizontalAlignmentSm || horizontalAlignment,
      md: horizontalAlignmentMd || horizontalAlignment,
      lg: horizontalAlignmentMd || horizontalAlignment,
      xl: horizontalAlignmentMd || horizontalAlignment
    }[viewport] || horizontalAlignment;
    return /*#__PURE__*/React__default.createElement(GridColumnPresentation.GridColumnPresentation, {
      ...otherProps,
      horizontalAlignment: horizontalAlignment,
      horizontalAlignmentXs: horizontalAlignmentXs,
      horizontalAlignmentSm: horizontalAlignmentSm,
      horizontalAlignmentMd: horizontalAlignmentMd
    }, ReactUtils.fragmentMap(children, child => typeof child.type === "string" ? child : /*#__PURE__*/React__default.cloneElement(child, {
      horizontalAlignment: align
    })));
  }
}

exports.GridColumnWrapper = GridColumnWrapper;

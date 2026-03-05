'use strict';

var React__default = require('react');
var ResizeEvents = require('../../../utils/windowEvents/ResizeEvents.js');
var StatusIndicatorGroupPresentation = require('./StatusIndicatorGroupPresentation.js');

// @ts-strict-ignore
const defaultProps = {
  direction: "vertical"
};
class StatusIndicatorGroupWrapper extends React__default.Component {
  constructor(props) {
    super(props);
    this.updateViewport = viewport => this.setState(() => ({
      viewport
    }));
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
      viewport
    } = this.state;
    return /*#__PURE__*/React__default.createElement(StatusIndicatorGroupPresentation.StatusIndicatorGroupPresentation, {
      ...this.props,
      viewport: viewport
    });
  }
}
StatusIndicatorGroupWrapper.defaultProps = defaultProps;

exports.StatusIndicatorGroupWrapper = StatusIndicatorGroupWrapper;

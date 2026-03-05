'use strict';

var React__default = require('react');
var ReactUtils = require('../../../utils/ReactUtils.js');
var ResizeEvents = require('../../../utils/windowEvents/ResizeEvents.js');
var StepperPresentation = require('./StepperPresentation.js');

// @ts-strict-ignore
class StepperWrapper extends React__default.Component {
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
      iconSize,
      centeredLayout,
      children,
      ...otherProps
    } = this.props;
    const {
      viewport
    } = this.state;
    const iconSizeItem = ["xs", "sm"].includes(viewport) ? "medium" : iconSize;
    const numElements = ReactUtils.fragmentCount(children);
    const gridColumnSize = numElements === 2 || numElements === 4 ? 5 : 4;
    return /*#__PURE__*/React__default.createElement(StepperPresentation.StepperPresentation, {
      centeredLayout: centeredLayout,
      ...otherProps
    }, ReactUtils.fragmentMap(children, child => /*#__PURE__*/React__default.cloneElement(child, {
      iconSize: iconSizeItem,
      centeredLayout,
      gridColumnSize
    })));
  }
}
StepperWrapper.defaultProps = {
  iconSize: "medium",
  centeredLayout: false
};

exports.StepperWrapper = StepperWrapper;

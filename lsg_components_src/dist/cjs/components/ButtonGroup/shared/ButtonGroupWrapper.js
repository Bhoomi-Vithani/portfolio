'use strict';

var React__default = require('react');
var ReactUtils = require('../../../utils/ReactUtils.js');
var ResizeEvents = require('../../../utils/windowEvents/ResizeEvents.js');
var ButtonGroupPresentation = require('./ButtonGroupPresentation.js');

// @ts-strict-ignore
class ButtonGroupWrapper extends React__default.Component {
  constructor(props) {
    super(props);
    this.updateViewport = viewport => {
      this.setState(() => ({
        viewport
      }));
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
      as: asProp,
      ...otherProps
    } = this.props;
    const {
      viewport
    } = this.state;
    const forceUl = asProp !== "ul" && asProp !== "ol" && ReactUtils.fragmentCount(children) > 1;
    const as = forceUl ? "ul" : asProp;
    return /*#__PURE__*/React__default.createElement(ButtonGroupPresentation.ButtonGroupPresentation, {
      ...otherProps,
      viewport: viewport,
      as: as
    }, ReactUtils.fragmentMap(children, child => /*#__PURE__*/React__default.isValidElement(child) && /*#__PURE__*/React__default.cloneElement(child, {
      as: as === "ul" || as === "ol" ? "li" : child.props.as,
      // avoid full width of buttons in the layer header
      reducedWidthMobile: otherProps.direction === "horizontal"
    })));
  }
}
ButtonGroupWrapper.defaultProps = {
  direction: "horizontal"
};

exports.ButtonGroupWrapper = ButtonGroupWrapper;

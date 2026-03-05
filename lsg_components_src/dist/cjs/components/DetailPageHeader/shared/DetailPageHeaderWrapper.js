'use strict';

var React__default = require('react');
var ResizeEvents = require('../../../utils/windowEvents/ResizeEvents.js');
var DetailPageHeaderPresentation = require('./DetailPageHeaderPresentation.js');

// @ts-strict-ignore
class DetailPageHeaderWrapper extends React__default.Component {
  constructor(props) {
    super(props);
    this.onViewportChange = viewport => this.setState(() => ({
      isMobile: ["sm", "xs"].includes(viewport)
    }));
    this.state = {
      isMobile: ["sm", "xs"].includes(ResizeEvents.getInitialViewportSize()),
      forceMobile: false
    };
  }
  componentDidMount() {
    ResizeEvents.addViewportCallback(this.onViewportChange);
  }
  componentWillUnmount() {
    ResizeEvents.removeViewportCallback(this.onViewportChange);
  }
  render() {
    const {
      isMobile,
      forceMobile
    } = this.state;
    return /*#__PURE__*/React__default.createElement(DetailPageHeaderPresentation.DetailPageHeaderPresentation, {
      ...this.props,
      isMobile: forceMobile || isMobile,
      onForceMobileChange: forceMobileValue => this.setState(() => ({
        forceMobile: forceMobileValue
      }))
    });
  }
}

exports.DetailPageHeaderWrapper = DetailPageHeaderWrapper;

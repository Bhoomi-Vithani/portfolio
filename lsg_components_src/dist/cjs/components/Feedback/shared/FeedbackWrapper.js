'use strict';

var React__default = require('react');
var timing = require('../../../utils/timing.js');
var FeedbackPresentation = require('./FeedbackPresentation.js');

class FeedbackWrapper extends React__default.Component {
  constructor(props) {
    super(props);
    this.onChange = result => {
      this.setState({
        animationHide: true
      }, () => {
        if (typeof this.props.onChange !== "undefined") {
          this.props.onChange(result);
        }
      });
      timing.setLsgTimeout(() => {
        this.setState({
          animationHide: false
        });
      }, 250);
    };
    this.onTrueClick = () => {
      this.onChange(true);
    };
    this.onFalseClick = () => {
      this.onChange(false);
    };
    this.state = {
      animationHide: false
    };
  }
  render() {
    return /*#__PURE__*/React__default.createElement(FeedbackPresentation.FeedbackPresentation, {
      ...this.props,
      onFalseClick: this.onFalseClick,
      onTrueClick: this.onTrueClick,
      animationHide: this.state.animationHide
    });
  }
}

exports.FeedbackWrapper = FeedbackWrapper;

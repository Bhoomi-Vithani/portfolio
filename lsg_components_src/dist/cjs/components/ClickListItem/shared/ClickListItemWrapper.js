'use strict';

var React__default = require('react');
var timing = require('../../../utils/timing.js');
var ClickListItemPresentation = require('./ClickListItemPresentation.js');

// @ts-strict-ignore
class ClickListItemWrapper extends React__default.Component {
  constructor(props) {
    super(props);
    // Todo: Place this constant somewhere in utils. (Alternatively, in ButtonPresentation there's a clickanimationduration from DwindlePresentation)
    this.clickAnimationDuration = 300;
    this.state = {
      hasKeyboardFocus: false,
      hasMouseHover: false,
      clicked: false
    };
  }
  componentWillUnmount() {
    timing.clearLsgTimeout(this.timeout);
  }
  render() {
    const {
      hasKeyboardFocus,
      hasMouseHover,
      clicked
    } = this.state;
    return /*#__PURE__*/React__default.createElement(ClickListItemPresentation.ClickListItemPresentation, {
      ...this.props,
      hasKeyboardFocus: hasKeyboardFocus,
      onKeyboardFocusChange: newFocus => this.setState(() => ({
        hasKeyboardFocus: newFocus
      })),
      hasMouseHover: hasMouseHover,
      onMouseHoverChange: newHover => {
        if (!this.props.disabled) {
          this.setState(() => ({
            hasMouseHover: newHover
          }));
        }
      },
      onClick: (...p) => {
        if (!this.props.disabled && this.props.look !== "multiaction") {
          this.setState({
            clicked: true
          });
          this.timeout = timing.setLsgTimeout(() => this.setState({
            clicked: false
          }), this.clickAnimationDuration);
          this.props.onClick(...p);
        }
      },
      clicked: clicked
    }, this.props.children);
  }
}
ClickListItemWrapper.defaultProps = ClickListItemPresentation.defaultProps;

exports.ClickListItemWrapper = ClickListItemWrapper;

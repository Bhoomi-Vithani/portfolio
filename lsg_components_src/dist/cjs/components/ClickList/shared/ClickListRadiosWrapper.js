'use strict';

var React__default = require('react');
var ReactUtils = require('../../../utils/ReactUtils.js');
var ClickListPresentation = require('./ClickListPresentation.js');

// @ts-strict-ignore
class ClickListRadiosWrapper extends React__default.Component {
  constructor(props) {
    super(props);
    this.handleOnBlur = event => {
      if (this.hostRef.contains(event.relatedTarget)) return;
      if (this.props.onBlur && event.currentTarget === this.hostRef) {
        // suppress double on blur call from child component
        this.props.onBlur(event);
      }
    };
    this.state = {};
  }
  render() {
    const {
      children,
      value,
      name,
      invalid,
      onChange,
      ...otherProps
    } = this.props;
    return /*#__PURE__*/React__default.createElement(ClickListPresentation.ClickListPresentation, {
      ...otherProps,
      hostRef: r => this.hostRef = r,
      handleOnBlur: this.handleOnBlur,
      look: "radio"
    }, ReactUtils.fragmentMap(children, (child, i) => {
      const nameChild = child.props.name || `${i}`;
      return /*#__PURE__*/React__default.cloneElement(child, {
        value: value === child.props.name,
        invalid: invalid && (value === nameChild || !value),
        onChange: (_value, chName, event) => onChange(chName, name, event)
      });
    }));
  }
}

exports.ClickListRadiosWrapper = ClickListRadiosWrapper;

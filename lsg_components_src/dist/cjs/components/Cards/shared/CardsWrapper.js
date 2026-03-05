'use strict';

var React__default = require('react');
var ReactUtils = require('../../../utils/ReactUtils.js');
var CardsPresentation = require('./CardsPresentation.js');

class CardsWrapper extends React__default.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      children,
      itemsPerRow,
      ...otherProps
    } = this.props;
    return /*#__PURE__*/React__default.createElement(CardsPresentation.CardsPresentation, {
      ...otherProps
    }, ReactUtils.fragmentMap(children, child => /*#__PURE__*/React__default.cloneElement(child, {
      itemsPerRow
    })));
  }
}
CardsWrapper.defaultProps = {
  itemsPerRow: 4,
  type: "NoInput"
};

exports.CardsWrapper = CardsWrapper;

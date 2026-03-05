'use strict';

var React__default = require('react');
var ParagraphPresentation = require('./shared/ParagraphPresentation.js');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__default__namespace = /*#__PURE__*/_interopNamespaceDefault(React__default);

class Paragraph extends React__default__namespace.Component {
  render() {
    const {
      children,
      size,
      centeredLayout,
      as = "p",
      ...props
    } = this.props;
    return /*#__PURE__*/React__default__namespace.createElement(ParagraphPresentation.ParagraphPresentation, {
      size: size,
      centeredLayout: centeredLayout,
      as: as,
      ...props
    }, children);
  }
}
Paragraph.displayName = "Paragraph";
Paragraph.defaultProps = {
  size: "copy-text"
};

exports.Paragraph = Paragraph;

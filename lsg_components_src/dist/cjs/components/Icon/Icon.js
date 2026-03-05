'use strict';

var React__default = require('react');
var BadgePresentation = require('../Badge/shared/BadgePresentation.js');
var IconPresentation = require('./shared/IconPresentation.js');

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

class Icon extends React__default__namespace.Component {
  render() {
    return /*#__PURE__*/React__default__namespace.createElement(IconPresentation.IconPresentation, {
      ...this.props,
      transform: undefined,
      hover: undefined,
      badge: this.props.showBadge && /*#__PURE__*/React__default__namespace.createElement(BadgePresentation.BadgePresentation, null, this.props.badgeText)
    });
  }
}
Icon.displayName = "Icon";
Icon.defaultProps = {
  color: "default",
  size: "small",
  variant: "outline"
};

exports.Icon = Icon;

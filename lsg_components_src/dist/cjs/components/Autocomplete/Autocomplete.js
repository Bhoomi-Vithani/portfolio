'use strict';

var React__default = require('react');
var AutoCompletePresentation = require('./shared/AutoCompletePresentation.js');

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

// @ts-strict-ignore
class Autocomplete extends React__default__namespace.Component {
  render() {
    const {
      optional,
      label,
      ...props
    } = this.props;
    return /*#__PURE__*/React__default__namespace.createElement(AutoCompletePresentation.AutoCompletePresentation, {
      ...props,
      // @ts-ignore
      label: label,
      onKeyDown: props.onKeyDown,
      readonly: props.readOnly,
      optional: !!optional,
      optionalText: typeof optional === "string" ? optional : undefined
    });
  }
}
Autocomplete.displayName = "Autocomplete";
Autocomplete.defaultProps = {
  options: [],
  onKeyDown: () => {},
  onFocus: () => {},
  onBlur: () => {},
  onChange: () => {},
  clearIcon: true
};

exports.Autocomplete = Autocomplete;

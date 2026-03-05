'use strict';

var React__default = require('react');
var ChipsTogglePresentation = require('../Chips/shared/ChipsTogglePresentation.js');
var ChipsItemRadio = require('../ChipsItemRadio/ChipsItemRadio.js');

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

const ChipsRadios = ({
  direction = "wrap",
  as = "fieldset",
  groupLabel = "",
  ...props
}) => {
  // TODO: Remove when radioGroupLook is removed
  let groupLook = direction;
  if (props.radioGroupLook === "condensed") {
    groupLook = "condensed";
  } else if (props.look === "scroll") {
    groupLook = "scroll";
  }
  return /*#__PURE__*/React__default__namespace.createElement(ChipsTogglePresentation.ChipsTogglePresentation, {
    direction: groupLook,
    type: "radio",
    as,
    groupLabel,
    ...props
  }, props.children);
};
ChipsRadios.displayName = "Chips.Radios";
ChipsRadios.Item = ChipsItemRadio.ChipsItemRadio;

exports.ChipsRadios = ChipsRadios;

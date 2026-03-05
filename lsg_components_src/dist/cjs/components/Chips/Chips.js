'use strict';

var React__default = require('react');
var ChipsCheckboxes = require('../ChipsCheckboxes/ChipsCheckboxes.js');
var ChipsItemCheckbox = require('../ChipsItemCheckbox/ChipsItemCheckbox.js');
var ChipsItemRadio = require('../ChipsItemRadio/ChipsItemRadio.js');
var ChipsRadios = require('../ChipsRadios/ChipsRadios.js');
var ChipsPresentation = require('./shared/ChipsPresentation.js');

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

const Chips = ({
  as = "ul",
  direction = "wrap",
  appearance = "default",
  groupLabel = "",
  ...props
}) => {
  // TODO: Remove when radioGroupLook is removed
  let groupLook = direction;
  if (props.look === "scroll") {
    groupLook = "scroll";
  }
  return /*#__PURE__*/React__default__namespace.createElement(ChipsPresentation.ChipsPresentation, {
    as: as,
    direction: groupLook,
    groupLabel: groupLabel,
    appearance: appearance,
    ...props
  });
};
Chips.displayName = "Chips";
Chips.Radios = ChipsRadios.ChipsRadios;
Chips.RadioItem = ChipsItemRadio.ChipsItemRadio;
Chips.Checkboxes = ChipsCheckboxes.ChipsCheckboxes;
Chips.CheckboxItem = ChipsItemCheckbox.ChipsItemCheckbox;

exports.Chips = Chips;

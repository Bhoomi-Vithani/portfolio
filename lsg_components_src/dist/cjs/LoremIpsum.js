'use strict';

var React__default = require('react');
var Paragraph = require('./components/Paragraph/Paragraph.js');
var loremIpsumTexts = require('./loremIpsumTexts.js');

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

const LoremIpsum = ({
  count = 1,
  startIndex = 0,
  asSpan
}) => {
  const length = startIndex + count;
  const Component = asSpan ? "span" : Paragraph.Paragraph;
  return /*#__PURE__*/React__default__namespace.createElement(React__default__namespace.Fragment, null, loremIpsumTexts.texts.slice(startIndex, length).map((value, index) => (/*#__PURE__*/React__default__namespace.createElement(Component, {
    key: index
  }, value))));
};

exports.LoremIpsum = LoremIpsum;

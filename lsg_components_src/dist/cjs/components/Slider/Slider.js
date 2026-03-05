'use strict';

var React__default = require('react');
var SliderWrapper = require('../_Slider/SliderWrapper.js');

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

/* eslint-disable react/require-default-props */
// Defines whether slider is a range slider, which has an effect in treatment of onchange, onInput as well as value. /
// rangeSlider?: boolean;
// The explicit range-slider prop is deactivated temporary to observe, whether there isn't really a need for this and give better handling.
const Slider = props => (/*#__PURE__*/React__default__namespace.createElement(SliderWrapper.SliderWrapper, {
  look: Array.isArray(props.value) ? "rangeSlider" : "singleSlider",
  ...props
}));
Slider.displayName = "Slider";

exports.Slider = Slider;

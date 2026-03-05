'use strict';

var React__default = require('react');
var GallerySliderItem = require('../GallerySliderItem/GallerySliderItem.js');
var GallerySliderWrapper = require('./shared/GallerySliderWrapper.js');

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

const GallerySlider = ({
  look,
  appearance,
  slidesToDisplay = 3,
  ...props
}) => (/*#__PURE__*/React__default__namespace.createElement(GallerySliderWrapper.GallerySliderWrapper, {
  appearance: appearance || look,
  slidesToDisplay: slidesToDisplay,
  ...props
}));
GallerySlider.displayName = "GallerySlider";
GallerySlider.Item = GallerySliderItem.GallerySliderItem;

exports.GallerySlider = GallerySlider;

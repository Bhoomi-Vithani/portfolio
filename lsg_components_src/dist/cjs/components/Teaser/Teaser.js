'use strict';

var React__default = require('react');
var TeaserGroup = require('../TeaserGroup/TeaserGroup.js');
var TeaserPresentation = require('./shared/TeaserPresentation.js');

const Teaser = ({
  imageRatio = "16-9",
  headlineSize = "h4",
  headlineAs = "h4",
  ...props
}) => (/*#__PURE__*/React__default.createElement(TeaserPresentation.TeaserPresentation, {
  headlineSize: headlineSize,
  headlineAs: headlineAs,
  imageRatio: imageRatio,
  ...props
}));
Teaser.displayName = "Teaser";
Teaser.Group = TeaserGroup.TeaserGroup;

exports.Teaser = Teaser;

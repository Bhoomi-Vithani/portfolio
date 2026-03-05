'use strict';

var React__default = require('react');
var DomUtils = require('../../../utils/DomUtils.js');
var Localization = require('../../../utils/Localization.js');
var IconLinkPresentation = require('../../IconLink/shared/IconLinkPresentation.js');
var SkipLinks_styles = require('./SkipLinks.styles.js');

const SkipLinksPresentation = ({
  links,
  ariaLabel = Localization.texts.lsg.component.SkipLink.navLabel
}) => {
  const [hasKeyboardFocus, setHasKeyboardFocus] = React__default.useState(-1);
  return /*#__PURE__*/React__default.createElement("nav", {
    "aria-label": ariaLabel,
    className: DomUtils.cleanupClassObject({
      [SkipLinks_styles.mainClass]: true,
      [`${SkipLinks_styles.mainClass}-visible`]: hasKeyboardFocus >= 0
    }),
    "data-lsg-component": "skip-links"
  }, links.map(({
    label,
    href,
    onClick
  }, i) => (/*#__PURE__*/React__default.createElement(IconLinkPresentation.IconLinkPresentation, {
    key: href || label || i,
    href: href,
    onClick: onClick,
    className: `${SkipLinks_styles.mainClass}-link`,
    label: label,
    hasKeyboardFocus: links.length > 1 && hasKeyboardFocus === i,
    onKeyboardFocusChange: isFocussed => setHasKeyboardFocus(isFocussed ? i : -1)
  }))));
};
SkipLinksPresentation.displayName = "SkipLinksPresentation";

exports.SkipLinksPresentation = SkipLinksPresentation;

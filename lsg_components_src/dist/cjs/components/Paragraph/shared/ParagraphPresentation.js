'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Paragraph_styles = require('./Paragraph.styles.js');

const ParagraphPresentation = ({
  as = "p",
  children,
  id: idProp,
  className,
  noMargin,
  size = "copy-text",
  lineLength = "default",
  centeredLayout = false,
  horizontalAlignment,
  disabled = false,
  htmlAttrs = {},
  manualHyphenation,
  columns = 1,
  columnRuler = false
}) => {
  const As = as;
  const id = index.useUniqueId(`${Paragraph_styles.hostClass}-`, idProp);
  const align = centeredLayout ? "center" : horizontalAlignment;
  return /*#__PURE__*/React__default.createElement(As, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [`${className}`]: !!className,
      [`${prefix.lsgPre}${size}`]: true,
      [`${prefix.lsgPre}${size}__line-length__${lineLength}`]: lineLength,
      [`${prefix.lsgPre}${size}__align-${align}`]: align,
      [`${prefix.lsgPre}${size}__disabled`]: disabled,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${prefix.lsgPre}-centered-layout`]: centeredLayout,
      [`${prefix.lsgPre}${size}__hyphens-manual`]: manualHyphenation,
      [`${prefix.lsgPre}multicolumn-${columns}`]: columns && columns > 1,
      [`${prefix.lsgPre}multicolumn-ruler`]: columns && columns > 1 && columnRuler
    }),
    ...htmlAttrs
  }, children);
};
ParagraphPresentation.displayName = "ParagraphPresentation";

exports.ParagraphPresentation = ParagraphPresentation;

'use strict';

var React__default = require('react');
var prefix = require('../../../../config/prefix.js');
var DomUtils = require('../../../../utils/DomUtils.js');
var Host = require('../../../../utils/Host.js');
var PictureBackground_styles = require('./PictureBackground.styles.js');

// @ts-strict-ignore
const PictureBackgroundPresentation = ({
  id,
  children,
  className,
  noMargin,
  isStencilHost,
  focalPoint,
  style,
  viewportSource
}) => {
  let backgroundPosition;
  if (focalPoint) {
    const {
      offsetLeft,
      offsetTop
    } = focalPoint;
    backgroundPosition = `
            ${offsetLeft ? `left ${offsetLeft}%` : ""}
            ${offsetTop ? `top ${offsetTop}%` : ""}
        `;
  }
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [PictureBackground_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    isStencilHost: isStencilHost,
    style: {
      ...style,
      backgroundImage: viewportSource && `url(${viewportSource})`,
      backgroundPosition,
      backgroundSize: "cover" // gets override somehow if not defined as inline style
    }
  }, children);
};
PictureBackgroundPresentation.displayName = "PictureBackgroundPresentation";

exports.PictureBackgroundPresentation = PictureBackgroundPresentation;

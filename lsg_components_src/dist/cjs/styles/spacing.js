'use strict';

var prefix = require('../config/prefix.js');
var styled = require('./styled.js');
var units = require('./units.js');
var viewport = require('./viewport.js');

const styleHorizontalAlignment = () => styled.styled`
    .${prefix.lsgPre}margin-align-center,
    .${prefix.lsgPre}margin-align-left {
        margin-right: auto;
    }
    .${prefix.lsgPre}margin-align-center,
    .${prefix.lsgPre}margin-align-right {
        margin-left: auto;
    }
    .${prefix.lsgPre}text-align-left {
        text-align: left;
    }
    .${prefix.lsgPre}text-align-center {
        text-align: center;
    }
    .${prefix.lsgPre}text-align-right {
        text-align: right;
    }
`;
const styleMarginBottom = (marginBottom, marginBottomMdViewPort, isRem) => `
    &:not(.${prefix.lsgPre}no-margin){
        margin-bottom: ${(isRem ? units.buRem : units.bu)(marginBottom)};

        ${typeof marginBottomMdViewPort !== "number" ? "" : viewport.styleViewportMdMin(styled.styled`
                    margin-bottom: ${(isRem ? units.buRem : units.bu)(marginBottomMdViewPort)};
                `)}
    }
`;
const styleMarginBottomRem = (marginBottom, marginBottomMdViewPort) => styleMarginBottom(marginBottom, marginBottomMdViewPort, true);
const styleMarginRight = (marginRight, marginRightMdViewPort, isRem) => `
    &:not(.${prefix.lsgPre}no-margin){
        margin-right: ${(isRem ? units.buRem : units.bu)(marginRight)};

        ${typeof marginRightMdViewPort !== "number" ? "" : viewport.styleViewport("md", "min", styled.styled`
                          margin-right: ${(isRem ? units.buRem : units.bu)(marginRightMdViewPort)};
                      `)}
    }
`;
const styleMarginLeft = (marginLeft, marginLeftMdViewPort, isRem) => `
    &:not(.${prefix.lsgPre}no-margin){
        margin-left: ${(isRem ? units.buRem : units.bu)(marginLeft)};

        ${typeof marginLeftMdViewPort !== "number" ? "" : viewport.styleViewport("md", "min", styled.styled`
                        margin-left: ${(isRem ? units.buRem : units.bu)(marginLeftMdViewPort)};
                    `)}
    }
`;
const styleMarginRightRem = (marginRight, marginRightMdViewPort) => styleMarginRight(marginRight, marginRightMdViewPort, true);

exports.styleHorizontalAlignment = styleHorizontalAlignment;
exports.styleMarginBottom = styleMarginBottom;
exports.styleMarginBottomRem = styleMarginBottomRem;
exports.styleMarginLeft = styleMarginLeft;
exports.styleMarginRight = styleMarginRight;
exports.styleMarginRightRem = styleMarginRightRem;

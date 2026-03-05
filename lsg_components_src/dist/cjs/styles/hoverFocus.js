'use strict';

var animation = require('./animation.js');
var colors = require('./colors.js');
var styled = require('./styled.js');
var units = require('./units.js');
var variables = require('./variables.js');
var zIndex = require('./zIndex.js');

const focusOutlineInlineStyles = ({
  radius = units.bu(1.5),
  /*
  insetX = bu(-1.5),
  insetY = bu(-1.5),
  
   */
  additionalStyles = ``
} = {}) => styled.styled`

    border-radius: ${radius};
    outline: ${units.bu(0.5)} solid transparent;
    outline-offset: ${units.bu(1)};

    /**
     * Forced Colors
     * Remove the default (transparent) outline used for focus, which would otherwise be displayed in forced-colors mode.
     */
    @media (forced-colors: active) {
        outline: none;
    }

    ${additionalStyles}

    /** Animation  */
    ${animation.stylePreferMotion(styled.styled`
        transition: border ${variables.animationDuration.standard}ms ease-in-out;
    `)}
`;
const focusOutlineInlineColor = theme => styled.styled`
    outline-color: ${colors.Colors.colTextPrimary[theme]};

    /** Forced Colors - (re-)set disabled outline-style on focus for active forced-colors mode. */
    @media (forced-colors: active) {
        outline-style: solid;
        outline-color: Highlight;
    }
`;
const focusOutlineStyles = ({
  radius = units.bu(1.5),
  insetX = units.bu(-1.5),
  insetY = units.bu(-1.5),
  additionalStyles = ``
} = {}) => styled.styled`
    content: "";
    pointer-events: none;
    background-color: transparent;
    inset: ${insetY} ${insetX};
    position: absolute;
    border-radius: ${radius};

    border: ${units.bu(0.5)} solid transparent;

    /** Forced Colors */
    @media (forced-colors: active) {
        // Remove default (transparent) border used as focus outline, which would otherwise be displayed in forced-colors mode.
        border: none;
    }

    ${additionalStyles}

    /** Animation  */
    ${animation.stylePreferMotion(styled.styled`
        transition: border ${variables.animationDuration.standard}ms ease-in-out;
    `)}
`;
const focusOutlineColor = theme => styled.styled`
    border-color: ${colors.Colors.colTextPrimary[theme]};

    /** Forced Colors */
    @media (forced-colors: active) {
        // (re-)set removed border-style on focus for active forced-colors mode
        border-style: solid;
        border-color: Highlight;
    }
`;
const listShadowStyles = styled.styled`
    content: "";
    pointer-events: none;
    background-color: transparent;
    inset: 0 ${units.bu(-4)};
    position: absolute;
    border-radius: ${units.bu(4)};
    z-index: ${zIndex.zIndex.zHidden};

    /** Animation  */
    ${animation.stylePreferMotion(styled.styled`
        transition: background-color ${variables.animationDuration.slow}ms;
    `)}

`;
const listShadowStylesHover = theme => styled.styled`
    background-color: ${colors.Colors.colBackgroundHover[theme]};

    /** Forced Colors */
    @media (forced-colors: active) {
        border: ${units.bu(0.5)} solid;
    }

`;
const listShadowStylesFocus = theme => styled.styled`
    border: ${units.bu(0.5)} solid ${colors.Colors.colTextPrimary[theme]};

    /** Forced Colors */
    @media (forced-colors: active) {
        border: ${units.bu(0.75)} solid Highlight;
    }
`;

exports.focusOutlineColor = focusOutlineColor;
exports.focusOutlineInlineColor = focusOutlineInlineColor;
exports.focusOutlineInlineStyles = focusOutlineInlineStyles;
exports.focusOutlineStyles = focusOutlineStyles;
exports.listShadowStyles = listShadowStyles;
exports.listShadowStylesFocus = listShadowStylesFocus;
exports.listShadowStylesHover = listShadowStylesHover;

import { stylePreferMotion } from './animation.js';
import { Colors } from './colors.js';
import { styled } from './styled.js';
import { bu } from './units.js';
import { animationDuration } from './variables.js';
import { zIndex } from './zIndex.js';

const focusOutlineInlineStyles = ({ radius = bu(1.5), 
/*
insetX = bu(-1.5),
insetY = bu(-1.5),

 */
additionalStyles = ``, } = {}) => styled `

    border-radius: ${radius};
    outline: ${bu(0.5)} solid transparent;
    outline-offset: ${bu(1)};

    /**
     * Forced Colors
     * Remove the default (transparent) outline used for focus, which would otherwise be displayed in forced-colors mode.
     */
    @media (forced-colors: active) {
        outline: none;
    }

    ${additionalStyles}

    /** Animation  */
    ${stylePreferMotion(styled `
        transition: border ${animationDuration.standard}ms ease-in-out;
    `)}
`;
const focusOutlineInlineColor = (theme) => styled `
    outline-color: ${Colors.colTextPrimary[theme]};

    /** Forced Colors - (re-)set disabled outline-style on focus for active forced-colors mode. */
    @media (forced-colors: active) {
        outline-style: solid;
        outline-color: Highlight;
    }
`;
const focusOutlineStyles = ({ radius = bu(1.5), insetX = bu(-1.5), insetY = bu(-1.5), additionalStyles = ``, } = {}) => styled `
    content: "";
    pointer-events: none;
    background-color: transparent;
    inset: ${insetY} ${insetX};
    position: absolute;
    border-radius: ${radius};

    border: ${bu(0.5)} solid transparent;

    /** Forced Colors */
    @media (forced-colors: active) {
        // Remove default (transparent) border used as focus outline, which would otherwise be displayed in forced-colors mode.
        border: none;
    }

    ${additionalStyles}

    /** Animation  */
    ${stylePreferMotion(styled `
        transition: border ${animationDuration.standard}ms ease-in-out;
    `)}
`;
const focusOutlineColor = (theme) => styled `
    border-color: ${Colors.colTextPrimary[theme]};

    /** Forced Colors */
    @media (forced-colors: active) {
        // (re-)set removed border-style on focus for active forced-colors mode
        border-style: solid;
        border-color: Highlight;
    }
`;
const listShadowStyles = styled `
    content: "";
    pointer-events: none;
    background-color: transparent;
    inset: 0 ${bu(-4)};
    position: absolute;
    border-radius: ${bu(4)};
    z-index: ${zIndex.zHidden};

    /** Animation  */
    ${stylePreferMotion(styled `
        transition: background-color ${animationDuration.slow}ms;
    `)}

`;
const listShadowStylesHover = (theme) => styled `
    background-color: ${Colors.colBackgroundHover[theme]};

    /** Forced Colors */
    @media (forced-colors: active) {
        border: ${bu(0.5)} solid;
    }

`;
const listShadowStylesFocus = (theme) => styled `
    border: ${bu(0.5)} solid ${Colors.colTextPrimary[theme]};

    /** Forced Colors */
    @media (forced-colors: active) {
        border: ${bu(0.75)} solid Highlight;
    }
`;

export { focusOutlineColor, focusOutlineInlineColor, focusOutlineInlineStyles, focusOutlineStyles, listShadowStyles, listShadowStylesFocus, listShadowStylesHover };

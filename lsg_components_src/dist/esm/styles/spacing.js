import { lsgPre } from '../config/prefix.js';
import { styled } from './styled.js';
import { buRem, bu } from './units.js';
import { styleViewportMdMin, styleViewport } from './viewport.js';

const styleHorizontalAlignment = () => styled `
    .${lsgPre}margin-align-center,
    .${lsgPre}margin-align-left {
        margin-right: auto;
    }
    .${lsgPre}margin-align-center,
    .${lsgPre}margin-align-right {
        margin-left: auto;
    }
    .${lsgPre}text-align-left {
        text-align: left;
    }
    .${lsgPre}text-align-center {
        text-align: center;
    }
    .${lsgPre}text-align-right {
        text-align: right;
    }
`;
const styleMarginBottom = (marginBottom, marginBottomMdViewPort, isRem) => `
    &:not(.${lsgPre}no-margin){
        margin-bottom: ${(isRem ? buRem : bu)(marginBottom)};

        ${typeof marginBottomMdViewPort !== "number"
    ? ""
    : styleViewportMdMin(styled `
                    margin-bottom: ${(isRem ? buRem : bu)(marginBottomMdViewPort)};
                `)}
    }
`;
const styleMarginBottomRem = (marginBottom, marginBottomMdViewPort) => styleMarginBottom(marginBottom, marginBottomMdViewPort, true);
const styleMarginRight = (marginRight, marginRightMdViewPort, isRem) => `
    &:not(.${lsgPre}no-margin){
        margin-right: ${(isRem ? buRem : bu)(marginRight)};

        ${typeof marginRightMdViewPort !== "number"
    ? ""
    : styleViewport("md", "min", styled `
                          margin-right: ${(isRem ? buRem : bu)(marginRightMdViewPort)};
                      `)}
    }
`;
const styleMarginLeft = (marginLeft, marginLeftMdViewPort, isRem) => `
    &:not(.${lsgPre}no-margin){
        margin-left: ${(isRem ? buRem : bu)(marginLeft)};

        ${typeof marginLeftMdViewPort !== "number"
    ? ""
    : styleViewport("md", "min", styled `
                        margin-left: ${(isRem ? buRem : bu)(marginLeftMdViewPort)};
                    `)}
    }
`;
const styleMarginRightRem = (marginRight, marginRightMdViewPort) => styleMarginRight(marginRight, marginRightMdViewPort, true);

export { styleHorizontalAlignment, styleMarginBottom, styleMarginBottomRem, styleMarginLeft, styleMarginRight, styleMarginRightRem };

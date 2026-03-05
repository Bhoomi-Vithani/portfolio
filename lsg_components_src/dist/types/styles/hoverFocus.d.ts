import { ThemeType } from "./theming";
export declare const focusOutlineInlineStyles: ({ radius, additionalStyles, }?: {
    radius?: string;
    additionalStyles?: string;
}) => string;
export declare const focusOutlineInlineColor: (theme: ThemeType) => string;
export declare const focusOutlineStyles: ({ radius, insetX, insetY, additionalStyles, }?: {
    radius?: string;
    insetX?: string;
    insetY?: string;
    additionalStyles?: string;
}) => string;
export declare const focusOutlineColor: (theme: ThemeType) => string;
export declare const listShadowStyles: string;
export declare const listShadowStylesHover: (theme: ThemeType) => string;
export declare const listShadowStylesFocus: (theme: ThemeType) => string;

import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
export interface IFlyoutProps extends IBasicProps {
    host?: HTMLElement;
    onKeyDown?: (ev: React.KeyboardEvent<HTMLElement>) => void;
    /** @deprecated: use `toggleInnerElement` (soon `toggleElement`) instead in conjunction with a React ref. */
    toggleId?: string;
    /** @deprecated: will be renamed to `toggleElement` in next major release. */
    toggleInnerElement?: HTMLElement;
    /** @deprecated: will be renamed to `toggleContainerElement` in next major release. */
    toggleElement?: HTMLElement;
    isToggleElmWidth?: boolean;
    hasTabIndex?: boolean;
    role?: string;
    stretchBreakpointBu?: number;
    withGap?: boolean;
    innerSpacing?: "small" | "medium" | "large" | "none";
    open: boolean;
    noAutoFocus?: boolean;
    onClose: () => void;
    hostRef?: any;
    isDrawerOnMobile?: boolean;
}
/** @deprecated: Not intended to be used directly due to accessibility concerns. Please contact the LSG Team, if the component is required */
export declare const Flyout: React.FunctionComponent<IFlyoutProps>;

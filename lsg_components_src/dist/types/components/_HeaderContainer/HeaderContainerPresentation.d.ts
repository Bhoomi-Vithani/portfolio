import React, { ReactNode } from "react";
import { IBasicPropsInternal } from "../../utils/IBasicPropsInternal";
export interface IHeaderContainerPresentationProps extends IBasicPropsInternal {
    progress?: number;
    logo?: ReactNode;
    /** Content on the top left side. If you want this to be a navigation, you should wrap it inside a <nav>. */
    topLeft?: ReactNode;
    /** Navigation content in the top right side. Will be wrapped in a <nav> */
    topRight?: ReactNode;
    /** aria label for the top right navigation */
    topRightAriaLabel?: string;
    bottomLeft?: ReactNode;
    /** aria label for the bottom left navigation */
    bottomLeftAriaLabel?: string;
    bottomRight?: ReactNode;
    /** aria label for the bottom right navigation */
    bottomRightAriaLabel?: string;
    activeElement?: HTMLElement;
    isMobile?: boolean;
    isFullUnderline?: boolean;
    hasOpenFlyout?: boolean;
    scrollPosition?: number;
    key?: string;
    ref?: (ref: HTMLElement) => void;
    mainContainerRightTopRef?: (ref: HTMLElement) => void | React.RefObject<HTMLElement>;
    mainContainerRightBottomRef?: (ref: HTMLElement) => void | React.RefObject<HTMLElement>;
    width?: "content" | "page" | "layer" | "sidebar";
    topLeftMaxWidth?: string;
    /** sets the css position property for a sticky header. Use `sticky` when possible and `fixed` otherwise.
     *  `fixed` includes additional markup and styles to achieve the same result as `sticky`. This is necessary because
     *  `sticky` does not work when there are elements rendered between scroll element and header (e.g.
     *  `<body><div><HeaderContainerWrapper /></div></body>`) */
    position?: "sticky" | "fixed" | "content";
    isHidden?: boolean;
    theme?: "light" | "dark" | "elevated";
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    segmentLabel?: string;
    /** Set to true if you don't want to use <header> and <nav> elements */
    noSemanticElements?: boolean;
}
export declare const HeaderContainerPresentation: {
    ({ noMargin, className, logo, topLeft, topRight, topRightAriaLabel, bottomLeft, bottomLeftAriaLabel, bottomRight, bottomRightAriaLabel, activeElement, isMobile, isFullUnderline, hasOpenFlyout, progress, width, topLeftMaxWidth, position, isHidden, scrollPosition, theme, onClick, segmentLabel, mainContainerRightTopRef, mainContainerRightBottomRef, noSemanticElements, }: IHeaderContainerPresentationProps): React.JSX.Element;
    displayName: string;
};

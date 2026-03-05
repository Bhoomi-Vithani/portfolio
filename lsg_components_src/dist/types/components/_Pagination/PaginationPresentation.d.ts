import React from "react";
import { IBasicPropsInternal } from "../../utils/IBasicPropsInternal";
export interface IPaginationSharedProps extends IBasicPropsInternal {
    label?: React.ReactNode;
    ariaLabel?: string;
    paginationLinks?: Array<any>;
    /** Total number of dots */
    numPages: number;
    /** The index of the current active dot index, starts with 1 */
    activePage: number;
    onClick?: (symbol: number, e: React.MouseEvent<HTMLElement>, name?: string) => void;
    /** Accepts a function which returns a string value that provides a user-friendly name for the slider elements (navigation buttons and pages). This is important for screen reader users. */
    itemAriaLabelFormatter?: (page?: number, isSelected?: boolean) => string;
    /** An aria-label for the previous button. */
    previousButtonAriaLabel?: string;
    /** An aria-label for the next button. */
    nextButtonAriaLabel?: string;
}
interface IPaginationPresentationOnlyProps {
    handleKey: (event: React.KeyboardEvent<HTMLElement>) => void;
    rightArrowRef?: (arrow: HTMLElement) => void;
    leftArrowRef?: (arrow: HTMLElement) => void;
    pageLinksRefs?: (iterator: number, link: HTMLElement) => void;
}
export interface IPaginationPresentationProps extends IPaginationSharedProps, IPaginationPresentationOnlyProps {
}
export declare const PaginationPresentation: {
    (props: IPaginationPresentationProps): React.JSX.Element;
    displayName: string;
};
export {};

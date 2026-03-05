import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
import { IButtonBaseProps } from "../Button/Button";
interface IPaginationProps extends IBasicProps {
    /** label */
    label?: React.ReactNode;
    /** An aria-label, which is required if no label is provided. */
    ariaLabel?: string;
    /** Total number of dots */
    numPages: number;
    /** The index of the current active dot index, starts with 1 */
    activePage: number;
    /** Function to be called when point is clicked */
    onClick: (page: number, e: React.MouseEvent<HTMLElement>) => void;
    /** Array of IconLink props to provide hrefs to the links for SEO purposes. Example for an IconLink prop: {href:
     *  "#?page=3", htmlAttrs: {aria-label: "Go to page 3"}}
     * Keep in mind: paginationLinks[0] is the link for the first navigation element, labelled "1"
     */
    paginationLinks?: Array<Omit<IButtonBaseProps, "disabled" | "refCallback" | "onClick">>;
    /** Accepts a function which returns a string value that provides a user-friendly name for the slider elements (navigation buttons and pages). This is important for screen reader users.
     * The `page` argument is the page (1..n) and the `selected` argument is true, if the page is the currently selected page.
     * */
    itemAriaLabelFormatter?: (page?: number, isSelected?: boolean) => string;
    /** An aria-label for the previous button. */
    previousButtonAriaLabel?: string;
    /** An aria-label for the next button. */
    nextButtonAriaLabel?: string;
}
declare const Pagination: {
    (props: IPaginationProps): React.JSX.Element;
    displayName: string;
};
export { Pagination, IPaginationProps };

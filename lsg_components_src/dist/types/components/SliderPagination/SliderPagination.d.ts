import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface ISliderPagination extends IBasicProps {
    /** Total number of dots */
    numDots: number;
    /** The index of the current active dot index, starts with 0 */
    activeDotIndex: number;
    /** Function to be called when point is clicked */
    onPointClick: any;
    /** Function to be called when left arrow icon is clicked */
    onArrowLeftClick?: any;
    /** Function to be called when right arrow icon is clicked */
    onArrowRightClick?: any;
    /** Accepts a function which returns a string value that provides a user-friendly name for the slider elements (navigation buttons and pages). This is important for screen reader users.
     * The `page` argument is the page (1..n) and the `selected` argument is true, if the page is the currently selected page.
     * */
    itemAriaLabelFormatter?: (page?: number, isSelected?: boolean) => string;
    /** An aria-label for the previous button. */
    previousButtonAriaLabel?: string;
    /** An aria-label for the next button. */
    nextButtonAriaLabel?: string;
}
declare const SliderPagination: {
    ({ onArrowRightClick, onArrowLeftClick, ...props }: ISliderPagination): React.JSX.Element;
    displayName: string;
};
export { SliderPagination, ISliderPagination };

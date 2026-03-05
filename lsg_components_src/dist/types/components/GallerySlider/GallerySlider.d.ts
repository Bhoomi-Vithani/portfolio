import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
type IGallerySliderProps = IBasicProps & {
    /** Number of slides to be displayed depending on the viewport size; several configurations are predefined in the SlidesToDisplay enumeration.  */
    slidesToDisplay?: number;
    /** Sets the initial index of the first slide to be displayed */
    initialSlide?: number;
    /** Called on pagination click. */
    onChange?: (openIndex: number, event: React.SyntheticEvent<HTMLElement>) => void;
    /** @deprecated 29.01.2024: Use appearance instead. Look of the cards */
    look?: "cards";
    /** Look of the cards */
    appearance?: "default" | "cards";
    /** A11y-Properties to customize the Pagination. Useful if you use a languague other than English or German. */
    pagination?: {
        /** Accepts a function which returns a string value that provides a user-friendly name for the slider elements (navigation buttons and pages). This is important for screen reader users.
         * The `page` argument is the page (1..n) and the `selected` argument is true, if the page is the currently selected page.
         * */
        itemAriaLabelFormatter?: (page?: number, isSelected?: boolean) => string;
        /** An aria-label for the previous button. */
        previousButtonAriaLabel?: string;
        /** An aria-label for the next button. */
        nextButtonAriaLabel?: string;
    };
    /** Translation of the word 'Gallery', 'Carousel' or similar (depending on what you build), so that screen reader users can understand what kind of content they can expect (required) */
    ariaRoleDescription: string;
} & ({
    /** Id of the element that acts as a unique label (for example a headline before the GallerySlider). Required if ariaLabel is not set */
    ariaLabelledBy: React.AriaAttributes["aria-labelledby"];
} | {
    /** Descriptive ARIA-Label for the GallerySlider. Required if ariaLabelledBy is not set */
    ariaLabel: string;
});
declare const GallerySlider: {
    ({ look, appearance, slidesToDisplay, ...props }: IGallerySliderProps): React.JSX.Element;
    displayName: string;
    Item: {
        (props: import("../GallerySliderItem/GallerySliderItem").IGallerySliderItemProps): React.JSX.Element;
        displayName: string;
    };
};
export { GallerySlider, IGallerySliderProps };

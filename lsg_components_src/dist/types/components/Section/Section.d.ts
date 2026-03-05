import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface ISectionProps extends IBasicProps {
    /** @deprecated (29.01.2024) - Use the 'spacing' prop instead. */
    look?: "standard" | "large" | "marketing" | "technical";
    /** Spacing that is applied before and after the Section content. */
    spacing?: "standard" | "large" | "marketing" | "technical";
    /** Whether a separator should be displayed below the Section to separate two Sections with the same theming. */
    separatorBottom?: boolean;
    /** @deprecated: Not needed anymore. Whether the contents of the section should use the full screen width instead of the content area. This is needed
     * when using components like the GallerySlider, which displays contents outside the content area. Use a
     * Section.Content component inside the full-width-section to show contents inside the content area.
     */
    fullWidth?: boolean;
    /** Overwrites the HTML tag that is rendered for the Section component. */
    as?: "section" | "article" | "main" | "div";
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React.HTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
    /** Sets the content width for the whole Section based on the maximum number (12) of Grid columns per row. */
    contentWidth?: 12 | 10 | 8 | 6;
}
declare const Section: {
    ({ separatorBottom, look, spacing, as, fullWidth, contentWidth, ...props }: ISectionProps): React.JSX.Element;
    /** @deprecated rename to Subsection with the correct english casing */
    SubSection: {
        ({ look, spacing, as, ...props }: import("../Subsection/Subsection").ISubSectionProps): React.JSX.Element;
        displayName: string;
    };
    Subsection: {
        ({ look, spacing, as, ...props }: import("../Subsection/Subsection").ISubSectionProps): React.JSX.Element;
        displayName: string;
    };
    displayName: string;
};
export { Section, ISectionProps };

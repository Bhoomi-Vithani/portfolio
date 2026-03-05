import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface ISubSectionProps extends IBasicProps {
    /** Whether a separator should be displayed below the section to separate two sections with the same theming */
    separatorBottom?: boolean;
    /** Overwrites the HTML tag that is rendered for the SubSection component. */
    as?: "div" | "section" | "article";
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React.HTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
    /** @deprecated */
    look?: "standard" | "small";
    /** spacing that is applied before and after the section content */
    spacing?: "standard" | "small";
}
declare const Subsection: {
    ({ look, spacing, as, ...props }: ISubSectionProps): React.JSX.Element;
    displayName: string;
};
export { Subsection, ISubSectionProps };

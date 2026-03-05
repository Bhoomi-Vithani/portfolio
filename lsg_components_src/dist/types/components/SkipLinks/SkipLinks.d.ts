import * as React from "react";
import { ISkipLink } from "./shared/SkipLinksPresentation";
export interface ISkipLinksProps {
    /**
     * Array of Links to render.
     * Example:
     * [
     *   {label: "jump to main content", href: "#mainContent"},
     *   {label: "jump to banking content", href: "#bankingContent"}
     * ]
     */
    links: ISkipLink[];
    /** Provide a label for the SkipLinks' `<nav>` element. If empty, a default value will be set. This enables screen reader users to distinguish the navigation areas. */
    ariaLabel?: string;
}
declare const SkipLinks: {
    (props: ISkipLinksProps): React.JSX.Element;
    displayName: string;
};
export { SkipLinks };

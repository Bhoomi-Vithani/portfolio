import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
import { INavigationTree } from "../../interfaces";
interface IJumpLinksProps extends IBasicProps {
    /** The navigation structure as JSON */
    navigationTree: INavigationTree[];
    /** Standard component to be rendered as a navigation link; e.g. you can add a ReactRouter link here
     * If no actionProps are defined in the navigationTree item, a "normal" LSG Action component (<a> or <button>)
     * will be rendered.
     */
    navigationActionAs?: any;
    /** Provide a unique ARIA-label for the JumpLinks' navigation `<nav>` element.
     * This enables screen reader users to distinguish the navigation areas. */
    ariaLabel: string;
}
declare const JumpLinks: {
    (props: IJumpLinksProps): React.JSX.Element;
    displayName: string;
};
export { JumpLinks, IJumpLinksProps };

import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
import { INavigationTree } from "../../interfaces";
interface IOnPageNavigationProps extends IBasicProps {
    /** The navigation structure */
    navigationTree: INavigationTree[];
    /** Standard component to be rendered as a navigation link; e.g. you can add a ReactRouter link here
     * If no actionProps are defined in the navigationTree item, a "normal" LSG Action component (<a> or <button>
     * will be rendered.
     */
    navigationActionAs?: any;
    /** Label for CTA/Primary Button */
    ctaLabel: string;
    /** External link address. An 'a'-tag will be used. */
    ctaHref?: string;
    /** Render an alternative action component, e.g. a React Router link */
    ctaActionAs?: any;
    /** These are the props for the alternative action component (e.g. a React Router link) */
    ctaActionProps?: any;
    /** Target window.  */
    ctaTarget?: string;
    /** The button type - will only get passed for button elements, so will be omitted if you specify href */
    ctaType?: string;
    /** The button name - will only get passed for button elements, so will be omitted if you specify href */
    ctaName?: string;
    /** Will be passed to the internal 'a' element */
    ctaRel?: string;
    /** The button value - will only get passed for button elements, so will be omitted if you specify href */
    ctaValue?: string;
    /** button onClick event */
    onCtaClick?: (event: React.MouseEvent<HTMLElement>, name: string) => void;
}
declare const OnPageNavigation: {
    (props: IOnPageNavigationProps): React.JSX.Element;
    displayName: string;
};
export { OnPageNavigation };
export type { IOnPageNavigationProps };

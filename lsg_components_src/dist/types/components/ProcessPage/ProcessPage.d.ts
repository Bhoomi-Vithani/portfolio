import * as React from "react";
import { ReactNode } from "react";
import { IBasicProps } from "../../base/IBasicProps";
import { INavigationTree } from "../../interfaces";
interface IProcessPageProps extends IBasicProps {
    /** Title that is shown in the header bar on top of the page. It may contain the name of the current process
     *  step, e.g. `Process Step 1/5`. */
    headerTitle?: string;
    /** The HTML tag that is rendered for the title that is shown in the header bar on top of the page.
     * Note: For a11y reasons, the header title should not be a h1 tag. Instead the headline on your content page
     * should be a h1. If you use a h1 in your content, the `headerTitle` is connected by aria-describedby to your h1
     * tag. */
    headerTitleAs?: keyof React.JSX.IntrinsicElements;
    /** Whether to force a burger menu and hide the navigation per default. */
    forceBurgerMenu?: boolean;
    /** @Deprecated(21.10.24): The footer will soon always be used as a separate component
     * For CCB usage only: If true, the footer menu is taken from the json script tags that are sent with the page. */
    hasPortalFooter?: boolean;
    /** Percentage (0-100) of the progress for the current step. It will be displayed as a bar below the process header. */
    progress?: number;
    /** React fragment of icon links */
    iconLinks?: ReactNode;
    /** @Deprecated(21.10.24): The footer will be used as a separate component
     * Tree of the footer navigation */
    footerNavigationTree?: INavigationTree[];
    /** @deprecated: Use footerNavigationAriaLabel instead. Use the default localised ARIA-label for the footer navigation or provide your own. */
    footerNavigationTreeAriaLabel?: string;
    /** @Deprecated(21.10.24): The footer will be used as a separate component
     * Use the default localised ARIA-label
     *  for the footer navigation or provide your own. This enables screen reader
     * users to distinguish the navigation areas. */
    footerNavigationAriaLabel?: string;
    /** Tree of the side navigation. For a React Router link, you can use this prop together with the
     *  'navigationActionAs' prop and set 'actionProps' in a navigationTree item. */
    navigationTree?: INavigationTree[];
    /** Use the default localised ARIA-label for the side navigation or provide your own. This enables screen reader
     * users to distinguish the navigation areas. */
    navigationAriaLabel?: string;
    /** Standard component to be rendered as a navigation link; e.g. you can add a ReactRouter link here. See https://markenportal.commerzbank.com/styleguide/using-navigation-components/.
     * If no actionProps are defined in the navigationTree item, a "normal" LSG Action component (<a> or <button>)
     * will be rendered. This prop is not meant for setting a custom HTML element. */
    navigationActionAs?: any;
    /** Label that is placed above the menu of the side navigation */
    navigationLabel?: string;
    /** The value contains the name of the menu item that is active/selected */
    value?: string;
    /** Callback that is called if a menu item was clicked */
    onChange?: (newValue: string, event?: any) => void;
    /** Activate the new navigation for the ProcessPage. No sub steps allowed, view examples for more information. */
    newNavigation?: boolean;
    /** Index of the active step which will be highlighted */
    activeValue?: number;
    /** Removes semantic Elements from the ProcessPageHeader, this is recommended when it's used together with the
     *  PortalHeader */
    noSemanticElements?: boolean;
    /** Makes the Header sticky. Please only use it when there is no PortalHeader on the Page. Default is "false". */
    stickyNavigation?: boolean;
}
declare const ProcessPage: {
    ({ footerNavigationAriaLabel, footerNavigationTreeAriaLabel, headerTitleAs, ...props }: IProcessPageProps): React.JSX.Element;
    displayName: string;
};
export { ProcessPage, IProcessPageProps };

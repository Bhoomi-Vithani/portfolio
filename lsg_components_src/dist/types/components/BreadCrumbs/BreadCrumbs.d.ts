import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IBreadCrumbsProps extends IBasicProps {
    /**
     * The ARIA label of the Breadcrumbs nav element which can be read by screen readers. Set to be compliant with
     * accessibility demands.
     */
    title?: string;
    /** Whether the Breadcrumbs have a separator line below. You can set this to 'false' for use cases outside a Footer. */
    separatorBottom?: boolean;
    /** Whether the item is visible on all viewports. Per default, the Breadcrumbs are hidden on viewports XS and SM. For use cases e.g. inside a Footer, setting this prop to `true` will avoid hiding. */
    alwaysVisible?: boolean;
}
declare class BreadCrumbs extends React.Component<IBreadCrumbsProps> {
    static displayName: string;
    static defaultProps: {
        title: string;
        separatorBottom: boolean;
        alwaysVisible: boolean;
    };
    static Item: {
        (props: import("../BreadCrumbsItem/BreadCrumbsItem").IBreadCrumbsItemProps): React.JSX.Element;
        displayName: string;
    };
    render(): React.JSX.Element;
}
export { BreadCrumbs, IBreadCrumbsProps };

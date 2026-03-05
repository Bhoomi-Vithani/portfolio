import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
import { IButtonBaseProps } from "../Button/Button";
type IActionFlyoutProps = IBasicProps & {
    /** The unique id of the element (e.g. Button) the ActionFlyout is attached to. */
    id?: string;
    /** The unique id of the flyout menu */
    menuId?: string;
    /** HTML tag of the outer container. Defaults to a React Fragment */
    as?: keyof React.ReactElement;
    /** Defines whether the Flyout always opens to the left side. */
    preferOpenToLeft?: boolean;
    /** The React component that the ActionFlyout is attached to. */
    menuButton: (props: Omit<IButtonBaseProps, "as">) => React.ReactElement;
};
declare const ActionFlyout: {
    ({ children, menuButton, preferOpenToLeft, id: idProp, ...props }: IActionFlyoutProps): React.JSX.Element;
    displayName: string;
    Item: {
        ({ ...props }: import("../ActionFlyoutItem/ActionFlyoutItem").IActionFlyoutItemProps): React.JSX.Element;
        displayName: string;
    };
};
export { ActionFlyout };
export type { IActionFlyoutProps };

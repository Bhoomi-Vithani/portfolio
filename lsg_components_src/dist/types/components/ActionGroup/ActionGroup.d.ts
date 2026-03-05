import * as React from "react";
import { ReactNode } from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IActionGroupProps extends IBasicProps {
    /** Inner components that should be displayed on the left side. */
    left?: ReactNode;
    /** Inner components that should be displayed on the right side. */
    right?: ReactNode;
    /** Switch between left and centered layout. */
    centeredLayout?: boolean;
    /** You can set your own aria-label for the ul element of the ActionGroup. Default value is "Button Group"
     *  (equivalent German value implemented as well). */
    ariaLabel?: string;
}
declare const ActionGroup: {
    ({ left, centeredLayout, ...props }: IActionGroupProps): React.JSX.Element;
    displayName: string;
};
export { ActionGroup, IActionGroupProps };

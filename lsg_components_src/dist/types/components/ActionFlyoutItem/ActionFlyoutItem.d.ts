import * as React from "react";
import { IButtonBaseProps } from "../Button/Button";
interface IActionFlyoutItemProps extends Omit<IButtonBaseProps, "loading" | "loadingText"> {
}
declare const ActionFlyoutItem: {
    ({ ...props }: IActionFlyoutItemProps): React.JSX.Element;
    displayName: string;
};
export { ActionFlyoutItem, IActionFlyoutItemProps };

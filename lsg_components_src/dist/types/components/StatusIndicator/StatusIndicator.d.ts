import { IIcon } from "@lsg/icons";
import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IStatusIndicatorProps extends IBasicProps {
    /** One of "inactive", "success", "warning", "error" or "neutral". */
    statusColor?: "inactive" | "success" | "warning" | "error" | "neutral";
    /** Shows an icon. Especially if `tagHidden` is true, the usage of an icon is recommended. */
    icon?: IIcon;
    /** Tag is used to describe the status. */
    tag: string;
    /** The text/tag will be hidden and tag-prop used as ARIA-label for screen readers. */
    tagHidden?: boolean;
    /** HelperText is visible below main tag. */
    helperText?: string;
    /**
     * Sets a role attribute on the tag element to ensure the correct a11y. Set to `role="status"` if the status is
     * changed interactively, while the page is opened by the user. Then, a change of the `tag` or `statusColor`
     * prop will produce an announcement to screen reader users. Make sure, that it is not set on with `<StatusIndicator>`s
     * inside a dynamically changing container (e.g. inside a sortable table).
     * For more information @see: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role
     */
    tagRole?: "none" | "status";
}
interface IStatusIndicatorGroupProps extends IBasicProps {
    direction?: "vertical" | "horizontal" | "flip-xs" | "flip-sm" | "flip-md" | "collapse-xs" | "collapse-sm" | "collapse-md";
    label?: string;
}
declare const StatusIndicator: {
    ({ statusColor, tagHidden, tagRole, ...otherProps }: IStatusIndicatorProps): React.JSX.Element;
    Group({ ...props }: IStatusIndicatorGroupProps): React.JSX.Element;
    displayName: string;
};
export { StatusIndicator, IStatusIndicatorProps, IStatusIndicatorGroupProps };

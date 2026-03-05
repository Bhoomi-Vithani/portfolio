import * as React from "react";
import { HTMLAttributes } from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IIconLinkGroupProps extends IBasicProps {
    /** The layout direction of the group, can only be values from enum DIRECTIONS */
    direction?: "vertical" | "horizontal" | "table" | "flip-xs" | "flip-sm" | "flip-md" | "flip-lg" | "collapse-xs" | "collapse-sm" | "collapse-md" | "collapse-lg";
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: HTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
    /** Name of the html tag that is rendered for the group container. If set to "ul" or "ol", the `as`-prop of
     * children will be set to "li". Default is "ul", if the group contains more than one IconLink. */
    as?: keyof JSX.IntrinsicElements;
}
declare const IconLinkGroup: {
    ({ direction, ...props }: IIconLinkGroupProps): React.JSX.Element;
    displayName: string;
};
export { IconLinkGroup, IIconLinkGroupProps };

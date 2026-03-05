import { JSX } from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IActionButtonGroupProps extends IBasicProps {
    /** Name of the html tag that is rendered for the group container. If set to "ul" or "ol", the `as`-prop of children will be set to "li". Default is "ul", if the group contains more than one IconLink. */
    as?: keyof JSX.IntrinsicElements;
}
declare const ActionButtonGroup: {
    (props: IActionButtonGroupProps): JSX.Element;
    displayName: string;
};
export { ActionButtonGroup, IActionButtonGroupProps };

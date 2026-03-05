import { JSX } from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
interface IActionButtonGroupProps extends IBasicPropsInternal {
    as?: keyof JSX.IntrinsicElements;
}
export declare const ActionButtonGroupPresentation: {
    ({ id, children, noMargin, className, as: asProp, }: IActionButtonGroupProps): JSX.Element;
    displayName: string;
};
export {};

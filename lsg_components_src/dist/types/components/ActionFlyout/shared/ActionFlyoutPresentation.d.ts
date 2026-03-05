import React, { Ref, JSX } from "react";
import { IActionBaseProps } from "../../Action/shared/ActionPresentation";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IActionFlyoutPresentationProps extends IBasicPropsInternal {
    id?: string;
    toggleElement?: HTMLElement;
    toggleContainerElement?: HTMLElement;
    ariaLabelledBy?: string;
    htmlAttrs?: React.AllHTMLAttributes<any>;
    hostRef?: Ref<HTMLElement>;
    onKeyDown?: (ev: React.KeyboardEvent<HTMLElement>) => void;
    preferOpenToLeft?: boolean;
    as?: string;
    menuButton: (props: IActionBaseProps) => JSX.Element;
    buttonId?: string;
    onOpenChange?: (open: any) => void;
}
export declare const ActionFlyoutPresentation: {
    ({ id: idProp, children, className, noMargin, htmlAttrs, ariaLabelledBy, preferOpenToLeft, hostRef, as, menuButton, buttonId, onOpenChange, ...otherProps }: IActionFlyoutPresentationProps): JSX.Element;
    displayName: string;
};

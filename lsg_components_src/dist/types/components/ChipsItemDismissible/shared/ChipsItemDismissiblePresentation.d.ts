import React, { Ref } from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
import { IChipsItemInternalBaseProps } from "../../ChipsItemAction/shared/ChipsItemActionPresentation";
export interface IChipsItemDismissiblePresentationProps extends IChipsItemInternalBaseProps, IBasicPropsInternal {
    onDismiss?: (event: React.MouseEvent<HTMLElement>, name: string) => void;
    onFocusLoss?: () => void;
    noMargin?: boolean;
    htmlAttrs?: React.ButtonHTMLAttributes<HTMLButtonElement> | Record<`data-${string}`, string | number | boolean>;
    ref?: Ref<HTMLElement>;
}
export declare const ChipsItemDismissiblePresentation: React.ForwardRefExoticComponent<Omit<IChipsItemDismissiblePresentationProps, "ref"> & React.RefAttributes<HTMLElement>>;

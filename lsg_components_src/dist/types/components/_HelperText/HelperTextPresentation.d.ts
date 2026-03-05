import * as React from "react";
import { IBasicPropsInternal } from "../../utils/IBasicPropsInternal";
interface IHelperTextPresentationProps extends IBasicPropsInternal {
    helperText?: React.ReactNode;
    errorText?: React.ReactNode;
    helperTextId: string;
    errorTextId: string;
    disabled?: boolean;
    errorTextAriaLive?: boolean;
    /** For FormContainer usage only: */
    spacing?: "dense";
}
declare const HelperTextPresentation: {
    ({ className, helperText, errorText, helperTextId, errorTextId, disabled, errorTextAriaLive, spacing, }: IHelperTextPresentationProps): React.JSX.Element;
    displayName: string;
};
export { HelperTextPresentation, IHelperTextPresentationProps };

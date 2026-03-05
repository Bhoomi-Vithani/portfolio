import type { IIcon } from "@lsg/icons";
import * as React from "react";
import { ReactNode, RefObject } from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface ITanPanel extends IBasicProps {
    panelRef?: RefObject<HTMLDivElement>;
    imageQrCode?: boolean;
    /** @deprecated: use imageQrCode instead */
    imageFullHeight?: boolean;
    imageSrc?: string;
    imageAltText: string;
    titleText?: string;
    titleAs: string;
    subtitleText?: string;
    infoLinkText?: string;
    infoLayerBackbuttonText?: string;
    cancelButtonText?: string;
    cancelButtonIcon?: IIcon;
    cancelButtonLoading?: boolean;
    cancelButtonDisabled?: boolean;
    miscButtonText?: string;
    miscButtonIcon?: IIcon;
    miscButtonLoading?: boolean;
    miscButtonDisabled?: boolean;
    submitButtonText?: string;
    submitButtonLoading?: boolean;
    submitButtonDisabled?: boolean;
    submitButtonSecondary?: boolean;
    loadingText: string;
    tanTextfieldVisible?: boolean;
    tanTextfieldErrorText?: string;
    tanTextfieldPlaceholder?: string;
    tanTextfieldLabel?: string;
    tanTextfieldValue?: string;
    tanTextfieldAutofocus?: boolean;
    tanTextfieldRef?: RefObject<HTMLInputElement>;
    checkboxVisible?: boolean;
    checkboxErrorText?: boolean;
    checkboxLabel?: string;
    checkboxAutofocus?: boolean;
    checkboxRef?: RefObject<HTMLInputElement>;
    onCancelTan?: (event: React.MouseEvent<HTMLElement>, name: string) => void;
    onSubmit?: (event: React.FormEvent) => void;
    onMiscClick?: (event: React.MouseEvent<HTMLElement>, name: string) => void;
    onChange?: (newValue: string, name: string, event: React.SyntheticEvent) => void;
    notificationSubline?: string;
    notificationImageSrc?: string;
    notificationImageAlt: string;
    notificationTitleText?: string;
    notificationTitleAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    notificationDisabled?: boolean;
    /** @deprecated setting this prop never had an effect. */
    fullWidth?: boolean;
    messageHeading?: string;
    messageText?: ReactNode;
    /** The standard design of the TanPanel is left-aligned, with 8 Grid columns!
        However, if your page design is centered by Grid (md= 4-8-4), this option is available to align the TanPanel
        to your Layout.
    */
    centeredLayout?: boolean;
    /** Whether to render a section around the TanPanel. The default behavior is `true` and will change to `false`
     *  in the next major release */
    asSection?: boolean;
}
declare const TanPanel: {
    ({ onChange, notificationDisabled, imageFullHeight, imageQrCode, ...props }: ITanPanel): React.JSX.Element;
    displayName: string;
};
export { TanPanel, ITanPanel };

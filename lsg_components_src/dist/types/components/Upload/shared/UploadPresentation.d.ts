import React, { Ref } from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IUploadPresentationProps extends IBasicPropsInternal {
    disabled?: boolean;
    loading?: boolean;
    loadingText?: string;
    onChange?: (event: React.DragEvent | React.ChangeEvent<HTMLInputElement>) => void;
    cardAs?: "div" | "li";
    multipleFiles?: boolean;
    handleFileUpload?: (file: FileList) => void;
    inputRef?: Ref<HTMLInputElement>;
    acceptedFileTypes?: string[];
    invalid?: boolean;
    ariaLabel?: string;
    name?: string;
}
export declare const UploadPresentation: {
    (props: IUploadPresentationProps): React.JSX.Element;
    displayName: string;
};

import * as React from "react";
import { Ref } from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IUploadProps extends IBasicProps {
    disabled?: boolean;
    /** Use the loading state to indicate an upload process for example */
    loading?: boolean;
    /** Let the user know what the reason for the loading time is */
    loadingText?: string;
    /** Returns event with FileList which can be iterated with for...of
      https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/files
     */
    onChange?: (event: React.DragEvent | React.ChangeEvent<HTMLInputElement>) => void;
    /** Set to true to allow multiple file uploads at once */
    multipleFiles?: boolean;
    /** Unified interface for the file, because onChange events vary if the file is dragged into our select by the
     user. */
    handleFileUpload?: (file: FileList) => void;
    /** You can use the inputRef to reset the Upload field if needed */
    inputRef?: Ref<HTMLInputElement>;
    /** Optional array of accepted file types for the file input. This is a suggestion and does not enforce strict
     * limitations on the file types that can be uploaded. */
    acceptedFileTypes?: string[];
    /** Sets aria-invalid={true} on the input */
    invalid?: boolean;
    /** Aria-label which is set to the input element. Important: Set this to be accessible */
    ariaLabel?: string;
    /** Name of the input element */
    name?: string;
}
declare const Upload: {
    (props: IUploadProps): React.JSX.Element;
    displayName: string;
};
export { Upload, IUploadProps };

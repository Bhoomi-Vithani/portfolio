import { IBasicPropsInternal } from "../../utils/IBasicPropsInternal";
export interface IResponsiveSharedProps extends IBasicPropsInternal {
    max?: string;
    min?: string;
}
interface IResponsivePresentationOnlyProps {
    display: boolean;
}
interface IResponsivePresentationProps extends IResponsiveSharedProps, IResponsivePresentationOnlyProps {
}
export declare const defaultProps: Partial<IResponsivePresentationProps>;
export {};

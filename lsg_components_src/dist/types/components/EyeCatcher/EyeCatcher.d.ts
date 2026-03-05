import * as React from "react";
import { ReactNode } from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IEyeCatcherProps extends IBasicProps {
    /** Short text for EyeCatcher on small screens (viewport < lg) */
    text?: ReactNode;
    /** Long text for EyeCatcher on large screens (viewport >= lg) */
    textLong?: ReactNode;
    /** EyeCatcher font-size */
    fontSize?: "small" | "medium" | "large" | "xlarge";
    /** Increase width of text container on large screens (viewport >= lg) */
    wideText?: boolean;
}
declare const EyeCatcher: {
    ({ fontSize, ...props }: IEyeCatcherProps): React.JSX.Element;
    displayName: string;
};
export { EyeCatcher, IEyeCatcherProps };

import * as React from "react";
import { ReactNode } from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IDetailPageHeaderProps extends IBasicProps {
    /** Close button label. If unset label will be "back"/"zurück" */
    closeLabel?: string;
    /** Set the href for the close button */
    closeHref?: string;
    /** Set the onClick handler for the close button */
    closeOnClick?: (e: MouseEvent | React.MouseEvent, name: string) => void;
    /** Slot for actions on the right side */
    actions?: ReactNode;
    /** Dark theme or light theme header */
    theme?: "light" | "dark";
    /** Decides if the navigation should be sticky */
    isSticky?: boolean;
}
declare const DetailPageHeader: {
    (props: IDetailPageHeaderProps): React.JSX.Element;
    displayName: string;
};
export { DetailPageHeader, IDetailPageHeaderProps };

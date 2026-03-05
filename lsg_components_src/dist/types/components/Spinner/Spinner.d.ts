import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface ISpinnerProps extends IBasicProps {
    /** Size of the Spinner circle */
    size?: number;
    /** Responsible for displaying the progress */
    value?: number;
    /** For the "indeterminate" Spinner variant, this accessibility-relevant prop informs screen reader users about the current status of processes.
     *  If not set, a fixed text ("Loading"/"Laden...") will be read by screen readers. Note that this fixed text (also visible beneath the Spinner circle in "indeterminate" variant and with reduced-motion browser settings) cannot be modified to avoid potential UX issues caused by too long text.
     */
    ariaLabel?: string;
    /** 3.9.2025 - Prop not functional: CCSN-91276. (Useful for fine-tuning. When prop is not used, both elements - text (with a fixed value) and circle - will be displayed.) */
    appearance?: "no-text" | "no-circle";
    /** Progress runs endlessly by using "indeterminate" or with steps based on a given value when you use "static". */
    variant?: "indeterminate" | "static";
    /** Switches the Spinner on. Hence, fine-tuning can be done via the 'appearance' prop.  */
    loading?: boolean;
}
declare const Spinner: {
    ({ size, variant, ...props }: ISpinnerProps): React.JSX.Element;
    displayName: string;
};
export { Spinner, ISpinnerProps };

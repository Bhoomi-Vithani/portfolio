import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IBarDiagramProps extends IBasicProps {
    /** Text on the left side. */
    label: string;
    /** Additional label below the bar */
    labelSubline?: string;
    /** Text on the right side. */
    valueLabel: string;
    /** Additional label below the bar on the right side */
    valueLabelSubline?: string;
    /** Please pass a number between 0 and 100. */
    percent: number;
    /** highlight the BarDiagram value */
    status?: "valid" | "invalid";
    /** Beyond the setting of color in group element the color can be set also on single bar diagram selectively  */
    color?: "primary-1" | "primary-2";
}
declare const BarDiagram: {
    (props: IBarDiagramProps): React.JSX.Element;
    displayName: string;
    Group: {
        (props: import("../BarDiagramGroup/BarDiagramGroup").IBarDiagramGroupProps): React.JSX.Element;
        displayName: string;
    };
};
export { BarDiagram, IBarDiagramProps };

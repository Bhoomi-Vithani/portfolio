export type DataPresentationColorName = "level-0" | "level-1" | "level-2" | "level-3" | "level-4" | "level-5" | "level-6" | "level-7" | "level-8" | "secondary-1" | "secondary-2" | "secondary-3" | "secondary-4" | "secondary-5" | "secondary-6" | "primary-1" | "primary-2";
export interface IDatapointPresentation {
    /** Name of segment */
    label: string;
    /** Value of segment */
    value?: number | string;
    /** Optional aria-label that will override label set automatically by the component */
    ariaLabel?: string;
    /** Optional aria-labelledby that will override label */
    ariaLabelledBy?: string;
    id?: string;
    /** Color of the visualized segment */
    indicatorColor: DataPresentationColorName;
    /** @Deprecated Kept for comparability. Color of text are not meant to be set  */
    valueColor?: "primary" | "error" | "success" | "primaryBold" | "errorBold" | "successBold";
}

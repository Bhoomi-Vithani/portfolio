import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IParagraphProps extends IBasicProps {
    /** Alternative HTML tag that is rendered for paragraph. */
    as?: string;
    /** Sets the paragraph type. */
    size?: "copy-text" | "helper-text" | "lead-text" | "error-text" | "info-text";
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React.HTMLAttributes<HTMLParagraphElement> | Record<`data-${string}`, string | number | boolean>;
    /** Switch between left and centered layout. Default is left. */
    centeredLayout?: boolean;
    /** Deactivate automatic hyphens if you want to set them manually */
    manualHyphenation?: boolean;
    /** Sets the line length of the paragraph. Default is 768px. Wide is 960px */
    lineLength?: "default" | "wide";
    /** Number of columns: 1, 2, 3, or 4 */
    columns?: 1 | 2 | 3 | 4;
    /** Show vertical dividing lines between columns */
    columnRuler?: boolean;
}
declare class Paragraph extends React.Component<IParagraphProps, {}> {
    static displayName: string;
    static defaultProps: Partial<IParagraphProps>;
    render(): React.JSX.Element;
}
export { Paragraph };

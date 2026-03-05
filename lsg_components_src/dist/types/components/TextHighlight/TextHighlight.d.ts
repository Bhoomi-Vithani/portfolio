import * as React from "react";
import { ReactNode } from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface ITextHighlightProps extends IBasicProps {
    /** the item heading */
    headline?: string;
    /** If set a subline will be rendered */
    subline?: string;
    /** Set to true if the text is a long text according to the design guidlines. The text will be rendered with a smaller font size */
    isLongText?: boolean;
    /** Set to true if the text is not a citation */
    noQuotes?: boolean;
    /** Quoted or highlighted text */
    text: string;
    /** Thumb icon name */
    thumbIconName?: string;
    /** Thumb Icon iconvariant. One of: "outline" | "solid" */
    thumbIconVariant?: "outline" | "solid";
    /** Thumb Icon Title. */
    thumbIconTitle?: string;
    /** Text that should be placed inside the circle */
    thumbText?: string;
    /** Source for thumb image */
    thumbImgSrc?: string;
    /** Pass a node with IconLinks which will be placed beside or below the information block */
    iconLinks?: ReactNode[];
    /** Switch between left and centered layout. */
    centeredLayout?: boolean;
    /** deactivate automatic hyphens if you want to set them manually */
    manualHyphenation?: boolean;
}
declare function TextHighlight(props: ITextHighlightProps): React.JSX.Element;
declare namespace TextHighlight {
    var displayName: string;
}
export { TextHighlight, ITextHighlightProps };

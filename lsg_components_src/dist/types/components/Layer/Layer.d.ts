import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
type ILayerProps = IBasicProps & {
    /** Callback that is called on backdrop click. If undefined, onClose is triggered instead */
    onBackdropClick?: (event?: MouseEvent) => void;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React.HTMLAttributes<HTMLDivElement> | Record<`data-${string}`, string | number | boolean>;
    /** Deprecated, not used anymore, due to A11y issues */
    noFocusLock?: boolean;
    /** Layer returns focus automatically after closing. Doesn't work for a stacked Layer. Default: true */
    returnFocus?: boolean;
    /** Callback for keyboard focus handling, if focus get lost. Highly recommended for a stacked Layer. */
    onFocusLoss?: () => void;
    /** Please pass the layout by a literal type  */
    layout?: "left" | "right" | "left-75" | "right-75" | "right-25" | "full";
    /** If set to true, the Layer is displayed */
    open?: boolean;
    /** The text that shall be displayed to close the Layer again. If the text label is not defined, the Layer appears in model mode */
    closeLinkLabel: string;
    /** Callback function that will be called when you click the close button */
    onCloseClick?: (ev: React.MouseEvent<HTMLElement>) => void;
    /** You can set one Button or more Buttons inside the Layer header in the right corner with this prop. */
    buttons?: React.ReactNode;
    /** If you implement more than one Button in the Layer header using the buttons
     *  prop, you can set your own aria-label. Default value is "Button Group" (equivalent German value implemented
     as well). */
    ariaLabelButtons?: string;
    /** Deprecated, not used anymore */
    innerRef?: (r: HTMLElement) => void;
} & ({
    /** ARIA-Label for the Layer for screen reader users (required if ariaLabelledBy is not set). You should only use ariaLabel when it is not possible to have the label visible on screen, see https://www.symphonious.net/2010/12/07/aria-labelledby-vs-aria-label/. */
    ariaLabel: string;
    ariaLabelledBy?: never;
} | {
    /** Id of the element (for example a headline) that labels this Layer (required if ariaLabel is not set). You should use ariaLabelledBy for labels that are visible on screen. */
    ariaLabelledBy: string;
    ariaLabel?: never;
});
declare const Layer: {
    (props: ILayerProps): React.JSX.Element;
    displayName: string;
};
export { ILayerProps, Layer };

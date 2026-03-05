import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
export type IFormContainerProps = IBasicProps & {
    /** Sets an HTML tag for the FormContainer. Default: "form". */
    as?: keyof React.JSX.IntrinsicElements | string;
    /** With this prop, you can add CSS styles as a React style object which will be forwarded to the HTML element. */
    style?: React.CSSProperties;
    /** Additional HTML attributes (e.g. 'onSubmit' if <form> is rendered, aria-*, data-*) will be forwarded to the host element. */
    htmlAttrs?: React.FormHTMLAttributes<HTMLFormElement> | React.HTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
    /** Reduces the whitespace of components having a TextField by reducing its paddings and bottom-margin when nested in the FormContainer.
     *  Also works for these components in a Grid by reducing the Grid row-gaps. The following components
     *  support this prop: Autocomplete, DatePicker, DateTextField, NumberTextField, OptionsTextField, Select, and TextField. */
    spacing?: "dense";
};
export declare const FormContainer: React.FC<IFormContainerProps>;

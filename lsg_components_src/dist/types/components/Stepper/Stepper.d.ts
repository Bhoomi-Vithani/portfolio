import * as React from "react";
import { ReactNode } from "react";
import { IBasicProps } from "../../base/IBasicProps";
/** @deprecated */
declare enum IconSizes {
    MEDIUM = "medium",
    LARGE = "large"
}
/** @deprecated */
declare enum IconColors {
    DEFAULT = "default",
    PRIMARY = "primary"
}
interface IStepperProps extends IBasicProps {
    /** Title above the blocks. */
    title?: string;
    /** Alternative HTML tag for title above the blocks. */
    titleAs?: string;
    /** Pass a node with IconLinks which will be placed below the */
    links?: ReactNode[];
    /** Html Attributes for the nav element that contains the links */
    navHtmlAttrs?: React.HTMLAttributes<HTMLHtmlElement> & {
        "aria-label": React.AriaAttributes["aria-label"];
    };
    centeredLayout?: boolean;
    /** for displaying icon in different sizing version */
    iconSize?: "medium" | "large";
}
interface IStepperBlockProps {
    /** Will be passed to a SVGIcon component. */
    icon: any;
    /** For displaying icon in different sizing version */
    iconSize?: "medium" | "large";
    /** Choose between default or primary brand color */
    iconColor?: "default" | "primary";
    /** Headline of block. */
    headline: string;
    /** Alternative HTML tag that is rendered for headline of block. (e.g. "h3", "h4", "div", "span", "p") */
    headlineAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | string;
    /** Text of block. */
    text: ReactNode;
    centeredLayout?: boolean;
}
/**
 * @deprecated: 11.2023 - Will be removed in the next major release.
 * Have a look at the "Stepper Pattern" which uses native components like shown in the Markenportal UX Patterns
 * section: https://markenportal.commerzbank.com/styleguide/stepper-pattern/index.html
 */
declare class Stepper extends React.Component<IStepperProps> {
    static Block: React.FunctionComponent<IStepperBlockProps>;
    static displayName: string;
    static defaultProps: Partial<IStepperProps>;
    /** @deprecated */
    static IconSizes: typeof IconSizes;
    /** @deprecated */
    static IconColors: typeof IconColors;
    render(): React.JSX.Element;
}
export { IconSizes, IconColors, IStepperProps, IStepperBlockProps, Stepper };

import React, { Ref } from "react";
import { IBasicProps } from "../../base/IBasicProps";
export interface IChipsItemContainerProps extends IBasicProps {
    as?: "div" | "li";
    hasMouseHover?: boolean;
    hasKeyboardFocus?: boolean;
    isSelected?: boolean;
    noMargin?: boolean;
    clicked?: boolean;
    appearance?: "left" | "right" | "no-text";
    containerRef?: Ref<HTMLElement>;
}
export declare const ChipsItemContainer: (props: IChipsItemContainerProps) => React.JSX.Element;

import React from "react";
import { IBasicPropsInternal } from "../../utils/IBasicPropsInternal";
interface IDwindleProps extends IBasicPropsInternal {
    color: "primary" | "secondary";
    disabled?: boolean;
    shape?: "rectangular" | "circle" | "circle-button";
    hover?: boolean;
    focus?: boolean;
    clicked?: boolean;
    floating?: boolean;
}
export declare const DwindlePresentation: React.ForwardRefExoticComponent<IDwindleProps & React.RefAttributes<HTMLElement>>;
export {};

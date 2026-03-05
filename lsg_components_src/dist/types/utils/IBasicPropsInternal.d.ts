import type { ReactNode } from "react";
export interface IBasicPropsInternal {
    id?: string;
    className?: string;
    children?: ReactNode;
    noMargin?: boolean;
    horizontalAlignment?: "left" | "center" | "right";
    isStencilHost?: boolean;
}

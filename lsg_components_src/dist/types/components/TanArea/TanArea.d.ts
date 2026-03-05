import React, { ReactNode } from "react";
interface ITanAreaProps {
    id?: string;
    children: ReactNode;
    notificationTitleAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
export declare const TanArea: (props: ITanAreaProps) => React.JSX.Element;
export {};

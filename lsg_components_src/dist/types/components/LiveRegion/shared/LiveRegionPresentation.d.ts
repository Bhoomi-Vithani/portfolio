import React, { ReactNode, RefObject } from "react";
interface IRef {
    announce: (announcement: string | (() => ReactNode), callback?: () => void) => void;
}
export interface ILiveRegionPresentationProps {
    ref?: RefObject<IRef>;
    ariaLive?: "polite" | "assertive";
}
export declare const LiveRegionPresentation: React.ForwardRefExoticComponent<Omit<ILiveRegionPresentationProps, "ref"> & React.RefAttributes<IRef>>;
export {};

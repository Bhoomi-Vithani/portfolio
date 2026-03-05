import * as React from "react";
import { ReactNode } from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface ILiveRegionRef {
    announce: (announcement: string | (() => ReactNode), callback?: () => void) => void;
}
interface ILiveRegionProps extends IBasicProps {
    ariaLive?: "polite" | "assertive";
}
declare const LiveRegion: React.ForwardRefExoticComponent<ILiveRegionProps & React.RefAttributes<ILiveRegionRef>>;
export { LiveRegion };
export type { ILiveRegionProps, ILiveRegionRef };

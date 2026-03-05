import React, { ReactNode, RefObject } from "react";
interface INotificationType {
    notificationSubline?: string;
    notificationImageSrc?: string;
    notificationImageAlt: string;
    notificationTitleText?: string;
    notificationDisabled?: boolean;
}
interface ITanContext {
    id?: string;
    ref?: RefObject<HTMLDivElement>;
    setNotification: (newNotification: INotificationType) => void;
    setTanPanelMounted?: (isMounted: boolean) => void;
}
interface ITanAreaPresentationProps {
    id?: string;
    children: ReactNode;
    /** @deprecated: notficationTitleAs is not needed anymore, since it doesnt have an effect in a live-region  */
    notificationTitleAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
export declare const TanContext: React.Context<ITanContext>;
export declare const TanAreaPresentation: ({ children, id }: ITanAreaPresentationProps) => React.JSX.Element;
export {};

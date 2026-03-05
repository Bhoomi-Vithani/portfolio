import React, { RefObject } from "react";
import { INavigationTree } from "../../../interfaces/NavigationTree";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IOnPageNavigationPresentationProps extends IBasicPropsInternal {
    navigationTree?: INavigationTree[];
    navigationActionAs?: any;
    activeElementName?: string;
    activeElementInline?: HTMLElement;
    ctaLabel?: string;
    ctaHref?: string;
    ctaActionAs?: any;
    ctaActionProps?: any;
    ctaHtmlAttrs?: React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement>;
    backToTopHref?: string;
    onBackToTopClick?: (event: React.MouseEvent<HTMLElement>, name: string) => void;
    backToTopHtmlAttrs?: React.AnchorHTMLAttributes<HTMLAnchorElement> | React.ButtonHTMLAttributes<HTMLButtonElement>;
    ctaName?: string;
    onCtaClick?: (event: React.MouseEvent<HTMLElement>, name: string) => void;
    onOpenChange?: (open: boolean) => void;
    mobileCtaVisible?: boolean;
    activeRefInline?: RefObject<HTMLElement> | ((r: HTMLElement) => void);
    containerRefInline?: RefObject<HTMLElement> | ((r: HTMLElement) => void);
}
export declare const OnPageNavigationPresentation: {
    ({ ...props }: IOnPageNavigationPresentationProps): React.ReactElement;
    displayName: string;
};

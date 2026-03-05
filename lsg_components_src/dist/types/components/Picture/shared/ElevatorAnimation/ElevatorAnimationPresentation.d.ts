import React from "react";
import { IBasicPropsInternal } from "../../../../utils/IBasicPropsInternal";
export interface IYellowElevatorPresentationProps extends IBasicPropsInternal {
    isVisible?: boolean;
    hostRef?: any;
    active?: boolean;
}
export declare const defaultProps: Partial<IYellowElevatorPresentationProps>;
export declare const ElevatorAnimationPresentation: React.ForwardRefExoticComponent<IYellowElevatorPresentationProps & React.RefAttributes<HTMLElement>>;

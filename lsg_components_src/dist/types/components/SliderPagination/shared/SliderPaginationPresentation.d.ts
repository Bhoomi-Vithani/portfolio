import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface ISliderPaginationPresentationProps extends IBasicPropsInternal {
    numDots: number;
    activeDotIndex: number;
    onPointClick: (index: number, e: React.SyntheticEvent<HTMLElement>) => void;
    onArrowLeftClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>, name: string) => void;
    onArrowRightClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>, name: string) => void;
    itemAriaLabelFormatter?: (page?: number, isSelected?: boolean) => string;
    previousButtonAriaLabel?: string;
    nextButtonAriaLabel?: string;
    actionHtmlAttrs?: React.HTMLAttributes<HTMLDivElement> | Record<`data-${string}`, string | number | boolean>;
}
export declare const SliderPaginationPresentation: {
    ({ id, className, noMargin, numDots, activeDotIndex, onPointClick, itemAriaLabelFormatter, previousButtonAriaLabel, nextButtonAriaLabel, actionHtmlAttrs, onArrowLeftClick, onArrowRightClick, }: ISliderPaginationPresentationProps): React.JSX.Element;
    displayName: string;
};

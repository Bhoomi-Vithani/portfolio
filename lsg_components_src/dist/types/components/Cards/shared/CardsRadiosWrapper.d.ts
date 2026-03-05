import React from "react";
import { ICardsSharedProps } from "./CardsPresentation";
import { ICardsWrapperProps } from "./CardsWrapper";
interface ICardsRadiosWrapperProps extends ICardsSharedProps, ICardsWrapperProps {
    value?: string;
    name?: string;
    onChange?: (value: string, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    itemsPerRow?: 2 | 3 | 4 | 6;
    fieldsetLegend?: string;
}
export declare const CardsRadiosWrapper: {
    ({ children, value, name, onChange, itemsPerRow, ...otherProps }: ICardsRadiosWrapperProps): React.JSX.Element;
    displayName: string;
};
export {};

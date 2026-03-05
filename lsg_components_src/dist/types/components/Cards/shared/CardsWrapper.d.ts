import React from "react";
import { ICardsSharedProps } from "./CardsPresentation";
interface ICardsWrapperState {
}
export interface ICardsWrapperProps extends ICardsSharedProps {
    itemsPerRow?: 2 | 3 | 4 | 6;
    type?: "SingleOptionToggle" | "MultiOptionToggle" | "NoInput";
}
export declare class CardsWrapper extends React.Component<ICardsWrapperProps, ICardsWrapperState> {
    static defaultProps: {
        itemsPerRow: number;
        type: string;
    };
    constructor(props: ICardsWrapperProps);
    render(): React.JSX.Element;
}
export {};

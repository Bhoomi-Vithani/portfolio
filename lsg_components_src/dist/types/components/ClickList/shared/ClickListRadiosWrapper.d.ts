import React from "react";
import { IClickListSharedProps } from "./ClickListPresentation";
interface IClickListRadiosWrapperProps extends IClickListSharedProps {
    value?: string;
    name?: string;
    onChange?: (value: string, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    invalid?: boolean;
}
export declare class ClickListRadiosWrapper extends React.Component<IClickListRadiosWrapperProps, unknown> {
    private hostRef;
    constructor(props: IClickListRadiosWrapperProps);
    handleOnBlur: (event: any) => void;
    render(): React.JSX.Element;
}
export {};

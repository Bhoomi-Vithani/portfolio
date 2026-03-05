import React from "react";
import { IClickListSharedProps } from "./ClickListPresentation";
interface IClickListCheckboxesWrapperProps extends IClickListSharedProps {
    invalid?: boolean;
}
export declare class ClickListCheckboxesWrapper extends React.Component<IClickListCheckboxesWrapperProps, unknown> {
    private hostRef;
    constructor(props: IClickListCheckboxesWrapperProps);
    handleOnBlur: (event: any) => void;
    render(): React.JSX.Element;
}
export {};

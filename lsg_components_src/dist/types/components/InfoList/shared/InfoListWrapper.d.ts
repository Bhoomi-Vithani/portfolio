import React from "react";
import { IInfoListPresentationProps } from "./InfoListPresentation";
export interface InfoListWrapperProps extends IInfoListPresentationProps {
    singleColumn?: boolean;
}
export declare class InfoListWrapper extends React.Component<InfoListWrapperProps, {}> {
    render(): React.JSX.Element;
}

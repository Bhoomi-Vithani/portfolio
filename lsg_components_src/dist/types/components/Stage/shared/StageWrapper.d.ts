import React from "react";
import { IStageSharedProps } from "./StagePresentation";
interface IStageWrapperState {
    viewport: string;
    hideEyeCatcher: boolean;
    eyeCatcherDefaultAppearanceTime: number;
    /** ToDo: A short explanation of what is breaking here would be nice */
    layout: "regular" | "breaking" | "breaking-full";
    eyeCatcherPosition: any;
}
interface IStageWrapperProps extends IStageSharedProps {
}
export declare class StageWrapper extends React.Component<IStageWrapperProps, IStageWrapperState> {
    private timeout;
    private layoutRegularRef;
    private layoutBreakingRef;
    private hostRef;
    private innerRef;
    private scrollerRef;
    private eyeCatcherRef;
    constructor(props: IStageWrapperProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    doHandleResizeWindow(): void;
    scrollStageHeight: () => void;
    render(): React.JSX.Element;
}
export {};

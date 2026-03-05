import * as React from "react";
import type { ITabsProps } from "../Tabs/Tabs";
interface ITabsStatefulState {
    openIndex: number;
    isMobile: boolean;
}
/**
 * This is a stateful version of `<Tabs>`.
 * The `<Tabs.Stateful>` variant is made for showcase purposes and non-React environments.
 * It should not be used in a React application. Please have a look at the section on "Stateful Components" in the
 * developer guidelines.
 * Check `<Tabs>` for implementation examples.
 */
declare class TabsStateful extends React.Component<Omit<ITabsProps, "isMobile" | "openIndex"> & {
    initialOpenIndex?: number;
}, ITabsStatefulState> {
    static displayName: string;
    state: {
        openIndex: number;
        isMobile: boolean;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    readonly onViewportChange: (viewportSize: string) => void;
    handleChange: (openIndex: number) => void;
    render(): React.JSX.Element;
}
export { TabsStateful, ITabsStatefulState };

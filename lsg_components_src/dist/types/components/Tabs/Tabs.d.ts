import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
import { TabsStateful } from "../TabsStateful";
interface ITabsProps extends IBasicProps {
    /** Active id. Pass the id of a containing Tabs.Tab */
    openIndex?: number;
    /** Called on Tabs.Tab click. */
    onChange?: (openIndex: number, event: React.SyntheticEvent<HTMLElement>) => void;
    /** @deprecated (date: 08.04.21): Indicate whether viewport is mobile(xs, sm) or not. */
    isMobile?: boolean;
    /** Switch between left and centered layout. Default is left. */
    centeredLayout?: boolean;
    /** ARIA label that describes the purpose of the set of tabs. */
    ariaLabel?: string;
    /** Provide the id of an element for the ARIA label. */
    ariaLabelledBy?: string;
}
declare const Tabs: {
    ({ ...props }: ITabsProps): React.JSX.Element;
    Stateful: typeof TabsStateful;
    Tab: ({ label: _, ...props }: import("../Tab/Tab").ITabProps) => React.JSX.Element;
    displayName: string;
};
export { Tabs };
export type { ITabsProps };

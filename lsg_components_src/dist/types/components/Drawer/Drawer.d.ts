import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IDrawerProps extends IBasicProps {
    /** Callback that is called on backdrop click. If undefined, onClose is triggered instead */
    onBackdropClick?: (event?: MouseEvent) => void;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React.HTMLAttributes<HTMLDivElement> | Record<`data-${string}`, string | number | boolean>;
    /** A focus lock is the functionality to keep the focus, while tabbing, within a dialog.
     * If you press TAB on the last focusable element (e.g. a form element), the first element in the Drawer is focused.
     */
    noFocusLock?: boolean;
    /** Please pass layout by literal type  */
    layout?: "layer-left" | "layer-right" | "layer-right-legacy" | "layer-full" | "layer-left-75" | "layer-right-75" | "layer-right-25" | "side-menu-left" | "side-menu-right" | "mega-menu" | "mega-menu-legacy";
    /** If the Drawer is displayed or not */
    open?: boolean;
    /** @deprecated */
    legacyStickyMegaMenu?: boolean;
}
declare const Drawer: {
    ({ layout, ...props }: IDrawerProps): React.JSX.Element;
    displayName: string;
};
export { Drawer };
export type { IDrawerProps };

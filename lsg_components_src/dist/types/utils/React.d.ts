import { MutableRefObject, PropsWithChildren, ReactElement } from "react";
type RefRenderFunction<T, P = {}> = (props: PropsWithChildren<P & {
    ref: ((instance: T | null) => void) | MutableRefObject<T | null> | null;
}>) => ReactElement | null;
/** @deprecated: Use standard react definitions */
export declare function fRef<T, P = {}>(render: RefRenderFunction<T, P>, defaultProps?: Partial<P>): import("react").ForwardRefExoticComponent<import("react").PropsWithoutRef<P> & import("react").RefAttributes<T>>;
export {};

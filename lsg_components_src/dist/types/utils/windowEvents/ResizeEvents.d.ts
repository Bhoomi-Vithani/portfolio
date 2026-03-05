export type Viewport = "xl" | "lg" | "md" | "sm" | "xs";
/** Method for getting the viewport size change. Use `getInitialViewportSize` if the component is not hydrated */
export declare function getViewportSize(): any;
/** Method for setting the viewport size inside the constructor or before the component is hydrated into the DOM */
export declare const setInitialViewportSize: (v: string) => string;
/** Method for getting the viewport size inside the constructor or before the component is hydrated into the DOM */
export declare const getInitialViewportSize: () => any;
export declare const addResizeCallback: (callback: () => void) => void;
export declare const addRatioCallback: (minRatio: number, callback: (isLargerThan: boolean) => void) => void;
export declare const addViewportCallback: (callback: (viewportSize: Viewport) => void) => void;
export declare const removeResizeCallback: (callback: () => void) => void;
export declare const removeRatioCallback: (callback: (isLargerThan: boolean) => void) => void;
export declare const removeViewportCallback: (callback: (viewportSize: Viewport) => void) => void;

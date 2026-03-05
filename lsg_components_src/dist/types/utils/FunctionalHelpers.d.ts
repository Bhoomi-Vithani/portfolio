/**
 * Deep-merges a props object with a defaultProps object.
 * Only recommended for special legacy edge cases; you should use default values in functions instead.
 *
 * @param props Current props object
 * @param defaultProps An object containing default Props
 * @returns props object containing default props if props were unset
 */
export declare const functionalHelpers: (props: any, defaultProps: any) => any;
/** @deprecated use combineRefs, that returns a ref */
export declare const reuseRef: (getExternalRef: () => any) => (() => any)[];

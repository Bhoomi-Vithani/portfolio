// @ts-strict-ignore
/**
 * Deep-merges a props object with a defaultProps object.
 * Only recommended for special legacy edge cases; you should use default values in functions instead.
 *
 * @param props Current props object
 * @param defaultProps An object containing default Props
 * @returns props object containing default props if props were unset
 */
const functionalHelpers = (props, defaultProps) => defaultProps
    ? {
        ...defaultProps,
        ...Object.entries(props).reduce((acc, [k, v]) => (v === undefined ? acc : { ...acc, [k]: v }), {}),
    }
    : props;
// Helper to use a ref both externally and internally
// improved version of this: https://itnext.io/reusing-the-ref-from-forwardref-with-react-hooks-4ce9df693dd
/** @deprecated use combineRefs, that returns a ref */
const reuseRef = (getExternalRef) => {
    let element;
    const getElement = () => getExternalRef()?.current || element;
    const getRef = () => {
        const externalRef = getExternalRef();
        switch (typeof externalRef) {
            case "function":
                return r => {
                    externalRef(r);
                    element = r;
                };
            case "object":
                return externalRef;
            default:
                return r => (element = r);
        }
    };
    return [getRef, getElement];
};

export { functionalHelpers, reuseRef };

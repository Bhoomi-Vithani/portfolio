declare const isHTMLAttr: (attribute: string, interfaces?: any[], noFilter?: boolean) => any;
/**
 * CAUTION: This will only give you HTML attributes that are specified ON THE DOM ELEMENT.
 * Attributes that are set via prop will not be included.
 */
declare const getHTMLAttrs: (attrs: NamedNodeMap | any[], interfaces?: any[], options?: {
    omit: string[];
}) => any;
export { isHTMLAttr, getHTMLAttrs };

export declare const isTargetInsideContainer: (target: EventTarget | HTMLElement, container: HTMLElement) => boolean;
/** @deprecated use element.closest() instead */
export declare const findParentWithTagName: (child: Element, tagName: string) => Element | false;
export declare const formatSvgBase64Src: (svgString: string) => string;
export declare const formatSvgSrc: (svgString: string) => string;
export declare function cleanupClassNames(classNames: string[]): string;
export declare function cleanupClassObject(classObject: {
    [key: string]: any;
}): string;
export declare const isSafari: () => boolean;
export declare const uniqueId: (prefix?: string) => string;

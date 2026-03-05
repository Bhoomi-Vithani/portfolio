/**
 * Prefix for legacy components, which are yet not implemented/wrapped from a shared version.
 * e.g.: [lsg-xxxxx--]
 */
declare const lsgPre: string;
declare function prefixEnumClassNames(className: string): string;
export { lsgPre, prefixEnumClassNames };

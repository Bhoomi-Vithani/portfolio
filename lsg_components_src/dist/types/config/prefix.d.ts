/** Prefix for components of lsg.shared [lsgs-xxxxx--] */
declare const lsgPre: string;
/** Prefix for legacy components of lsg.components (yet not wrapped from shared) [lsg-xxxxx--] */
declare const lsgPreComp: string;
/** Prefix for components of lsg.shared that are used globally (like Theme) [lsg-xxxxx---] */
declare const lsgPreGlobal: string;
/** In some places we need the current version of shared as MD5 */
declare const versionAsMd5: string;
export { lsgPre, lsgPreComp, lsgPreGlobal, versionAsMd5 };

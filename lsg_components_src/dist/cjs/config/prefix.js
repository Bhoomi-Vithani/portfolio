'use strict';

/** Package version - The current version is encoded and set in rollup.config.js by string replacement. */
const VERSION = "a12e7"; // e.g. c2ee7 for shared version 2.3.2
const prefix = `-${VERSION}`; // -c2ee7
/** Prefix for components of lsg.shared [lsgs-xxxxx--] */
const lsgPre = `lsgs${prefix}--`; // lsgs-c2ee7--
/** Prefix for legacy components of lsg.components (yet not wrapped from shared) [lsg-xxxxx--] */
const lsgPreComp = `lsg${prefix}--`; // lsg-c2ee7--
/** Prefix for components of lsg.shared that are used globally (like Theme) [lsg-xxxxx---] */
const lsgPreGlobal = `lsg${prefix}---`; // lsg-c2ee7---

exports.lsgPre = lsgPre;
exports.lsgPreComp = lsgPreComp;
exports.lsgPreGlobal = lsgPreGlobal;

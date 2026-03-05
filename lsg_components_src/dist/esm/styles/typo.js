import { buRem } from './units.js';
import { styleViewport } from './viewport.js';

// @ts-strict-ignore
const fontFamily400 = 'var(--lsg-font-family-400, "Gotham", sans-serif)';
const fontFamily500 = 'var(--lsg-font-family-500, "Gotham", sans-serif)';
const fontFamily700 = 'var(--lsg-font-family-700, "Gotham", sans-serif)';
const fontWeight400 = "var(--lsg-font-weight-400, 400)";
const fontWeight500 = "var(--lsg-font-weight-500, 500)";
const fontWeight700 = "var(--lsg-font-weight-700, 700)";
const typoParts = {
    "1": {
        desktopXxl: {
            "font-size": buRem(18),
            "line-height": buRem(18, 2),
            "letter-spacing": "-1px",
        },
        desktopXl: {
            "font-size": buRem(15.5),
            "line-height": buRem(15.5, 1.5),
            "letter-spacing": "-0.6px",
        },
        desktopLg: {
            "font-size": buRem(13.5),
            "line-height": buRem(13.5, 2),
            "letter-spacing": "-0.6px",
        },
        desktop: {
            "font-size": buRem(11),
            "line-height": buRem(11, 2),
            "letter-spacing": "-0.4px",
        },
        mobile: {
            "font-size": buRem(8),
            "line-height": buRem(8, 2),
            "letter-spacing": "-0.4px",
        },
    },
    "2": {
        desktopXxl: {
            "font-size": buRem(15),
            "line-height": buRem(15, 2),
            "letter-spacing": "-0.6px",
        },
        desktopXl: {
            "font-size": buRem(13),
            "line-height": buRem(13, 2),
            "letter-spacing": "-0.4px",
        },
        desktopLg: {
            "font-size": buRem(10.5),
            "line-height": buRem(10.5, 2),
            "letter-spacing": "-0.4px",
        },
        desktop: {
            "font-size": buRem(8),
            "line-height": buRem(8, 2),
            "letter-spacing": "-0.2px",
        },
        mobile: {
            "font-size": buRem(6.75),
            "line-height": buRem(6.75, 2.25),
            "letter-spacing": "-0.2px",
        },
    },
    "3": {
        desktopXxl: {
            "font-size": buRem(10),
            "line-height": buRem(10, 2.5),
            "letter-spacing": "-0.4px",
        },
        desktopXl: {
            "font-size": buRem(9),
            "line-height": buRem(9, 2),
            "letter-spacing": "-0.2px",
        },
        desktopLg: {
            "font-size": buRem(8),
            "line-height": buRem(8, 2),
            "letter-spacing": "-0.2px",
        },
        desktop: {
            "font-size": buRem(6.75),
            "line-height": buRem(6.75, 2.25),
            "letter-spacing": "-0.2px",
        },
        mobile: {
            "font-size": buRem(5.5),
            "line-height": buRem(5.5, 2.5),
            "letter-spacing": "-0.1px",
        },
    },
    "4": {
        desktopXxl: {
            "font-size": buRem(10),
            "line-height": buRem(10, 2.5),
            "letter-spacing": "-0.4px",
        },
        desktop: {
            "font-size": buRem(5.5),
            "line-height": buRem(5.5, 2.5),
            "letter-spacing": "-0.1px",
        },
        mobile: {
            "font-size": buRem(4.5),
            "line-height": buRem(4.5, 2.5),
            "letter-spacing": "0",
        },
    },
    "5": {
        desktop: {
            "font-size": buRem(4.25),
            "line-height": buRem(4.25, 2.75),
            "letter-spacing": "0",
        },
        mobile: {
            "font-size": buRem(3.75),
            "line-height": buRem(3.75, 2.25),
            "letter-spacing": "0.1px",
        },
    },
    "6": {
        desktop: {
            "font-size": buRem(3.75),
            "line-height": buRem(3.75, 2.25),
            "letter-spacing": "0.1px",
        },
        mobile: {
            "font-size": buRem(3.25),
            "line-height": buRem(3.25, 1.75),
            "letter-spacing": "0.1px",
        },
    },
    "7": {
        desktop: {
            "font-size": buRem(3.25),
            "line-height": buRem(3.25, 1.75),
        },
        mobile: {
            "font-size": buRem(2.75),
            "line-height": buRem(2.75, 1.75),
        },
    },
    "8": {
        desktop: {
            "font-size": buRem(2.75),
            "line-height": buRem(2.75, 1.75),
        },
        mobile: {
            "font-size": buRem(2.75),
            "line-height": buRem(2.75, 1.75),
        },
    },
    ".1": {
        "font-family": fontFamily700,
        "font-weight": fontWeight700,
    },
    ".2": {
        "font-family": fontFamily500,
        "font-weight": fontWeight500,
    },
    ".3": {
        "font-family": fontFamily400,
        "font-weight": fontWeight400,
    },
};
const typo = {
    "1.1": {
        desktopXxl: { ...typoParts["1"].desktopXxl },
        desktopXl: { ...typoParts["1"].desktopXl },
        desktopLg: { ...typoParts["1"].desktopLg },
        desktop: { ...typoParts["1"].desktop, ...typoParts[".1"] },
        mobile: { ...typoParts["1"].mobile, ...typoParts[".1"] },
    },
    "1.3": {
        desktopXxl: { ...typoParts["1"].desktopXxl },
        desktopXl: { ...typoParts["1"].desktopXl },
        desktopLg: { ...typoParts["1"].desktopLg },
        desktop: { ...typoParts["1"].desktop, ...typoParts[".3"] },
        mobile: { ...typoParts["1"].mobile, ...typoParts[".3"] },
    },
    "2.1": {
        desktopXxl: { ...typoParts["2"].desktopXxl },
        desktopXl: { ...typoParts["2"].desktopXl },
        desktopLg: { ...typoParts["2"].desktopLg },
        desktop: { ...typoParts["2"].desktop, ...typoParts[".1"] },
        // font-weight=500
        mobile: { ...typoParts["2"].mobile, ...typoParts[".1"], "font-weight": fontWeight500 },
    },
    "2.3": {
        desktopXxl: { ...typoParts["2"].desktopXxl },
        desktopXl: { ...typoParts["2"].desktopXl },
        desktopLg: { ...typoParts["2"].desktopLg },
        desktop: { ...typoParts["2"].desktop, ...typoParts[".3"] },
        mobile: { ...typoParts["2"].mobile, ...typoParts[".3"] },
    },
    "3.2": {
        desktopXxl: { ...typoParts["3"].desktopXxl },
        desktopXl: { ...typoParts["3"].desktopXl },
        desktopLg: { ...typoParts["3"].desktopLg },
        desktop: { ...typoParts["3"].desktop, ...typoParts[".2"] },
        mobile: { ...typoParts["3"].mobile, ...typoParts[".2"] },
    },
    "3.3": {
        desktopLg: { ...typoParts["3"].desktopLg },
        desktop: { ...typoParts["3"].desktop, ...typoParts[".3"] },
        mobile: { ...typoParts["3"].mobile, ...typoParts[".3"] },
    },
    "4.2": {
        desktop: { ...typoParts["4"].desktop, ...typoParts[".2"] },
        mobile: { ...typoParts["4"].mobile, ...typoParts[".2"] },
    },
    "4.3": {
        desktop: { ...typoParts["4"].desktop, ...typoParts[".3"] },
        mobile: { ...typoParts["4"].mobile, ...typoParts[".3"] },
    },
    "5.2": {
        desktop: { ...typoParts["5"].desktop, ...typoParts[".2"] },
        mobile: { ...typoParts["5"].mobile, ...typoParts[".2"] },
    },
    "5.3": {
        desktop: { ...typoParts["5"].desktop, ...typoParts[".3"] },
        mobile: { ...typoParts["5"].mobile, ...typoParts[".3"] },
    },
    "6.2": {
        desktop: { ...typoParts["6"].desktop, ...typoParts[".2"] },
        mobile: { ...typoParts["6"].mobile, ...typoParts[".2"] },
    },
    "6.3": {
        desktop: { ...typoParts["6"].desktop, ...typoParts[".3"] },
        mobile: { ...typoParts["6"].mobile, ...typoParts[".3"] },
    },
    "7.1": {
        desktop: { ...typoParts["7"].desktop, ...typoParts[".1"], "letter-spacing": "0.3px" },
        mobile: { ...typoParts["7"].mobile, ...typoParts[".1"], "letter-spacing": "0.4px" },
    },
    "7.2": {
        desktop: { ...typoParts["7"].desktop, ...typoParts[".2"], "letter-spacing": "0.2px" },
        mobile: { ...typoParts["7"].mobile, ...typoParts[".2"], "letter-spacing": "0.3px" },
    },
    "7.3": {
        desktop: { ...typoParts["7"].desktop, ...typoParts[".3"], "letter-spacing": "0.2px" },
        mobile: { ...typoParts["7"].mobile, ...typoParts[".3"], "letter-spacing": "0.2px" },
    },
    "8.1": {
        desktop: { ...typoParts["8"].desktop, ...typoParts[".1"], "letter-spacing": "0.4px" },
        mobile: { ...typoParts["8"].mobile, ...typoParts[".1"], "letter-spacing": "0.4px" },
    },
    "8.2": {
        desktop: { ...typoParts["8"].desktop, ...typoParts[".2"], "letter-spacing": "0.3px" },
        mobile: { ...typoParts["8"].mobile, ...typoParts[".2"], "letter-spacing": "0.3px" },
    },
    "8.3": {
        desktop: { ...typoParts["8"].desktop, ...typoParts[".3"], "letter-spacing": "0.2px" },
        mobile: { ...typoParts["8"].mobile, ...typoParts[".3"], "letter-spacing": "0.2px" },
    },
    h2overline: {
        desktopLg: { ...typoParts["4"].desktop },
        desktop: { ...typoParts["5"].desktop, ...typoParts[".3"], "letter-spacing": "0" },
        mobile: { ...typoParts["5"].mobile, ...typoParts[".3"], "letter-spacing": "0" },
    },
    h3overline: {
        desktopXxl: { ...typoParts["4"].desktop },
        desktopXl: { ...typoParts["5"].desktop },
        desktopLg: { ...typoParts["5"].desktop },
        desktop: { ...typoParts["6"].desktop, ...typoParts[".3"], "letter-spacing": "0.1px" },
        mobile: { ...typoParts["6"].mobile, ...typoParts[".3"], "letter-spacing": "0.1px" },
    },
    lineLengthWideParagraph: {
        desktop: { ...typoParts["5"].desktop, ...typoParts[".3"] },
        mobile: { ...typoParts["5"].mobile, ...typoParts[".3"] },
    },
    lineLengthWideLeadText: {
        desktop: { ...typoParts["4"].desktop, ...typoParts[".3"] },
        mobile: { ...typoParts["4"].mobile, ...typoParts[".3"] },
    },
    lineLengthWideCopyText: {
        desktop: { ...typoParts["5"].desktop, ...typoParts[".3"] },
        mobile: { ...typoParts["5"].mobile, ...typoParts[".3"] },
    },
    lineLengthWideHelperText: {
        desktop: { ...typoParts["7"].desktop, ...typoParts[".3"] },
        mobile: { ...typoParts["7"].mobile, ...typoParts[".3"] },
    },
    lineLengthWideInfoText: {
        desktop: { ...typoParts["6"].desktop, ...typoParts[".3"] },
        mobile: { ...typoParts["6"].mobile, ...typoParts[".3"] },
    },
    lineLengthWideH4: {
        desktop: { ...typoParts["4"].desktop, ...typoParts[".2"] },
        mobile: { ...typoParts["4"].mobile, ...typoParts[".2"] },
    },
    lineLengthWideH5: {
        desktop: { ...typoParts["5"].desktop, ...typoParts[".2"] },
        mobile: { ...typoParts["5"].mobile, ...typoParts[".2"] },
    },
    lineLengthWideH6: {
        desktop: { ...typoParts["6"].desktop, ...typoParts[".2"] },
        mobile: { ...typoParts["6"].mobile, ...typoParts[".2"] },
    },
    ".1": {
        desktop: typoParts[".1"],
        mobile: typoParts[".1"],
    },
    ".2": {
        desktop: typoParts[".2"],
        mobile: typoParts[".2"],
    },
    ".3": {
        desktop: typoParts[".3"],
        mobile: typoParts[".3"],
    },
};
// use case: headline / label-text
// See specification: https://www.figma.com/design/S4B3baboYfqtx7VJBNE3Ag?node-id=3325-51837#1411250701
// See design specification table for text lengths on https://www.figma.com/design/S4B3baboYfqtx7VJBNE3Ag?node-id=1-169#1411250701
const maxWidthNarrow = {
    "1": {
        desktopXxl: buRem(300),
        desktopXl: buRem(275),
        desktopLg: buRem(245),
        desktop: buRem(220),
        mobile: buRem(130),
    },
    "2": {
        desktopXxl: buRem(275),
        desktopXl: buRem(245),
        desktopLg: buRem(220),
        desktop: buRem(205),
        mobile: buRem(130),
    },
    "3": {
        desktopXxl: buRem(220),
        desktopXl: buRem(212.5),
        desktopLg: buRem(205),
        desktop: buRem(195),
        mobile: buRem(125),
    },
    "4": {
        desktop: buRem(192),
        mobile: buRem(120),
    },
    "5": {
        desktop: buRem(192),
        mobile: buRem(100),
    },
    "6": {
        desktop: buRem(192),
        mobile: buRem(100),
    },
    "7": {
        desktop: buRem(220),
        mobile: buRem(184),
    },
    h2overline: {
        desktopXl: buRem(275),
        desktopLg: buRem(220),
        desktop: buRem(180),
        mobile: buRem(130),
    },
    h3overline: {
        desktopLg: buRem(220),
        desktop: buRem(170),
        mobile: buRem(125),
    },
    lineLengthWideParagraph: {
        desktop: buRem(240),
        mobile: buRem(160),
    },
    lineLengthWideLeadText: {
        desktop: buRem(240),
        mobile: buRem(160),
    },
    lineLengthWideCopyText: {
        desktop: buRem(240),
        mobile: buRem(160),
    },
    lineLengthWideHelperText: {
        desktop: buRem(240),
        mobile: buRem(160),
    },
    lineLengthWideInfoText: {
        desktop: buRem(240),
        mobile: buRem(160),
    },
    lineLengthWideH4: {
        desktop: buRem(240),
        mobile: buRem(160),
    },
    lineLengthWideH5: {
        desktop: buRem(240),
        mobile: buRem(160),
    },
    lineLengthWideH6: {
        desktop: buRem(240),
        mobile: buRem(160),
    },
};
// use case: copy / helper / lead-text
const maxWidthWide = {
    "1": {
        desktopXl: buRem(300),
        desktop: buRem(245),
        mobile: buRem(130),
    },
    "2": {
        desktopXl: buRem(275),
        desktop: buRem(220),
        mobile: buRem(130),
    },
    "3": {
        desktopXl: buRem(200),
        desktop: buRem(195),
        mobile: buRem(160),
    },
    "4": {
        desktop: buRem(192),
        mobile: buRem(160),
    },
    "5": {
        desktop: buRem(192),
        mobile: buRem(142),
    },
    "6": {
        desktop: buRem(192),
        mobile: buRem(142),
    },
    "7": {
        desktopXl: buRem(220),
        desktop: buRem(220),
        mobile: buRem(184),
    },
    h2overline: {
        desktopXl: buRem(275),
        desktopLg: buRem(220),
        desktop: buRem(180),
        mobile: buRem(130),
    },
    h3overline: {
        desktopLg: buRem(220),
        desktop: buRem(170),
        mobile: buRem(125),
    },
    lineLengthWideParagraph: {
        desktop: buRem(240),
        mobile: buRem(160),
    },
    lineLengthWideLeadText: {
        desktop: buRem(240),
        mobile: buRem(160),
    },
    lineLengthWideCopyText: {
        desktop: buRem(240),
        mobile: buRem(160),
    },
    lineLengthWideHelperText: {
        desktop: buRem(240),
        mobile: buRem(160),
    },
    lineLengthWideInfoText: {
        desktop: buRem(240),
        mobile: buRem(160),
    },
    lineLengthWideH4: {
        desktop: buRem(240),
        mobile: buRem(160),
    },
    lineLengthWideH5: {
        desktop: buRem(240),
        mobile: buRem(160),
    },
    lineLengthWideH6: {
        desktop: buRem(240),
        mobile: buRem(160),
    },
};
const aliases = {
    h1: "1.1",
    h2: "2.1",
    h3: "3.2",
    h4: "4.2",
    h5: "5.2",
    h6: "6.2",
    h1Thin: "1.3",
    h2Thin: "2.3",
    h3Thin: "3.3",
    h4Thin: "4.3",
    h5Thin: "5.3",
    h6Thin: "6.3",
    textLead: "4.3",
    textSignal: "4.2",
    textOverline: "4.3",
    textCopy: "5.3",
    textCopyStrong: "5.2",
    textLabelInteractive: "6.2",
    textInfo: "6.3",
    textInfoStrong: "6.2",
    textFootnote: "7.3",
    textDisclaimer: "7.3",
    textCaption: "7.3",
    textLabelSm: "7.3",
    textHelper: "7.3",
    textError: "7.3",
    textBadge: "8.2",
    textBadgeLarge: "7.2",
    overlineH2: "h2overline",
    overlineH3: "h3overline",
    lineLengthWideParagraph: "lineLengthWideParagraph", // todo: find number to shorten
    lineLengthWideLeadText: "lineLengthWideLeadText",
    lineLengthWideCopyText: "lineLengthWideCopyText",
    lineLengthWideHelperText: "lineLengthWideHelperText",
    lineLengthWideInfoText: "lineLengthWideInfoText",
    lineLengthWideH4: "lineLengthWideH4",
    lineLengthWideH5: "lineLengthWideH5",
    lineLengthWideH6: "lineLengthWideH6",
};
/**
 * Include Styling for typography
 * @param alias name or digit code of the typography
 * @param breadth determines the max-width
 * @param includeExclude object which has the css-properties as keys, and booleans as values. Entries with true are
 * included, entries with false are excluded. If there is no defined include, all css-properties are included
 *
 */
const styleTypo2 = (alias, breadth = "none", includeExclude = {}) => {
    const name = aliases[alias] || alias;
    const size = name.split(".")[0];
    const includeAll = Object.values(includeExclude).reduce((acc, val) => acc && val !== true, true);
    const cssProperties = {
        desktopXxl: {
            ...typo[name].desktopXxl,
        },
        desktopXl: {
            ...typo[name].desktopXl,
        },
        desktopLg: {
            ...typo[name].desktopLg,
        },
        desktop: {
            ...typo[name].desktop,
        },
        mobile: {
            ...typo[name].mobile,
        },
    };
    if (breadth !== "none") {
        cssProperties.desktopXxl["max-width"] =
            breadth === "narrow" ? maxWidthNarrow[size].desktopXxl : maxWidthWide[size].desktopXxl;
        cssProperties.desktopXl["max-width"] =
            breadth === "narrow" ? maxWidthNarrow[size].desktopXl : maxWidthWide[size].desktopXl;
        cssProperties.desktopLg["max-width"] =
            breadth === "narrow" ? maxWidthNarrow[size].desktopLg : maxWidthWide[size].desktopLg;
        cssProperties.desktop["max-width"] =
            breadth === "narrow" ? maxWidthNarrow[size].desktop : maxWidthWide[size].desktop;
        cssProperties.mobile["max-width"] =
            breadth === "narrow" ? maxWidthNarrow[size].mobile : maxWidthWide[size].mobile;
    }
    const desktopXxlCss = cssProperties.desktopXxl
        ? Object.entries(cssProperties.desktopXxl)
            .filter(([prop, v]) => v && ((includeAll && includeExclude[prop] !== false) || includeExclude[prop] === true))
            .map(([prop, value]) => `${prop}: ${value};`)
            .join("\n")
        : "";
    const desktopXlCss = cssProperties.desktopXl
        ? Object.entries(cssProperties.desktopXl)
            .filter(([prop, v]) => v && ((includeAll && includeExclude[prop] !== false) || includeExclude[prop] === true))
            .map(([prop, value]) => `${prop}: ${value};`)
            .join("\n")
        : "";
    const desktopLgCss = cssProperties.desktopLg
        ? Object.entries(cssProperties.desktopLg)
            .filter(([prop, v]) => v && ((includeAll && includeExclude[prop] !== false) || includeExclude[prop] === true))
            .map(([prop, value]) => `${prop}: ${value};`)
            .join("\n")
        : "";
    const desktopCss = Object.entries(cssProperties.desktop)
        .filter(([prop, v]) => v && ((includeAll && includeExclude[prop] !== false) || includeExclude[prop] === true))
        .map(([prop, value]) => `${prop}: ${value};`)
        .join("\n");
    const mobileCss = Object.entries(cssProperties.mobile)
        .filter(([prop, v]) => v && ((includeAll && includeExclude[prop] !== false) || includeExclude[prop] === true))
        .map(([prop, value]) => `${prop}: ${value};`)
        .join("\n");
    return [
        mobileCss,
        styleViewport("md", "min", desktopCss),
        desktopLgCss ? styleViewport("lg", "min", desktopLgCss) : "",
        desktopXlCss ? styleViewport("xl", "min", desktopXlCss) : "",
        desktopXxlCss ? styleViewport("xxl", "min", desktopXxlCss) : "",
    ].join(" ");
};

export { aliases, styleTypo2, typo };

import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
export interface IBoxProps extends IBasicProps {
    color?: "colNeutral5" | "colNeutral6" | "colNeutral7" | "colNeutral8" | "colBackground" | "colTextPrimary" | "colTextSupplementary" | "colTextHighlight" | "colActionSecondary" | "colActionSecondaryHover" | "colActionTertiary" | "colActionTertiaryHover" | "colError" | "colWarning" | "colSuccess" | "colActionInactive" | "secondaryAccent1" | "secondaryAccent2";
    colorAll?: "colNeutral1" | "colNeutral2" | "colNeutral3" | "colNeutral4" | "colNeutral5" | "colNeutral6" | "colNeutral7" | "colNeutral8" | "colBackground" | "colBrandPrimary1" | "colTextPrimary" | "colTextSupplementary" | "colTextHighlight" | "colActionSecondary" | "colActionSecondaryHover" | "colActionTertiary" | "colActionTertiaryHover" | "colError" | "colWarning" | "colSuccess" | "colActionInactive" | "secondaryAccent1" | "secondaryAccent2" | "secondaryAccent3" | "secondaryAccent4" | "secondaryAccent5" | "secondaryAccent6";
    colorInscription?: "colNeutral1" | "colNeutral2" | "colNeutral3" | "colNeutral4" | "colNeutral5" | "colNeutral6" | "colNeutral7" | "colNeutral8" | "colBackground" | "colBrandPrimary1" | "colTextPrimary" | "colTextSupplementary" | "colTextHighlight" | "colActionSecondary" | "colActionSecondaryHover" | "colActionTertiary" | "colActionTertiaryHover" | "colError" | "colWarning" | "colSuccess" | "colActionInactive" | "secondaryAccent1" | "secondaryAccent2" | "secondaryAccent3" | "secondaryAccent4" | "secondaryAccent5" | "secondaryAccent6";
    borderColor?: "colNeutral5" | "colFineLine" | "colSeparatorLine" | "colActionOutlineInactive";
    strokeColor?: "colTextPrimary" | "colNeutral5" | "colFineLine" | "colSeparatorLine" | "colActionOutlineInactive";
    backgroundColor?: "colBackground" | "colBackgroundHover";
    boxShadow?: "01" | "02" | "03";
    style?: React.CSSProperties;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React.HTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
    scrollVertical?: boolean;
    typo?: "1.1" | "1.3" | "2.1" | "2.3" | "3.2" | "3.3" | "4.2" | "4.3" | "5.2" | "5.3" | "6.2" | "6.3" | "7.1" | "7.2" | "7.3" | "8.1" | "8.2" | "8.3" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h1Thin" | "h2Thin" | "h3Thin" | "h4Thin" | "h5Thin" | "h6Thin" | "textLead" | "textSignal" | "textOverline" | "textCopy" | "textCopyStrong" | "textLabelInteractive" | "textInfo" | "textInfoStrong" | "textFootnote" | "textDisclaimer" | "textCaption" | "textLabelSm" | "textHelper" | "textError" | "textBadge" | "textBadgeLarge" | "overlineH2" | "overlineH3";
    visuallyHidden?: boolean;
    themeChildren?: "light" | "dark" | "medium" | "elevated" | "contrast" | "hover" | "brand";
    themeBackground?: "light" | "dark" | "medium" | "elevated" | "contrast" | "hover" | "brand";
    theme?: "light" | "dark" | "medium" | "elevated" | "contrast" | "hover" | "brand";
    as?: keyof React.JSX.IntrinsicElements | string;
}
export declare const Box: ({ id, className, as, children, color, colorAll, colorInscription, backgroundColor, borderColor, strokeColor, boxShadow, scrollVertical, theme, themeBackground, themeChildren, visuallyHidden, typo, style, htmlAttrs, }: IBoxProps) => React.JSX.Element;

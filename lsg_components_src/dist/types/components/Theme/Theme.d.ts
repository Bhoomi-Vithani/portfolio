import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IThemeProps extends IBasicProps {
    /** @deprecated Use `color` instead (29.01.2024) */
    look?: "dark" | "elevated" | "light" | "medium";
    /** Background color of the theme. */
    color?: "dark" | "elevated" | "light" | "medium";
}
declare const Theme: {
    ({ look, color, ...props }: IThemeProps): React.JSX.Element;
    displayName: string;
};
export { Theme, IThemeProps };

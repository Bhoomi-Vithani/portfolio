import React from "react";
import { IBasicProps } from "../../base/IBasicProps";
import { IChartInfoContainerProps } from "../ChartInfos/shared/ChartInfoContainer";
import { IChartInfoItemProps } from "../ChartInfos/shared/ChartInfoItemPresentation";
export interface IChartInfoListProps extends Omit<IChartInfoContainerProps, "noMargin" | "isStencilHost"> {
}
export interface IChartInfoListItem extends Omit<IChartInfoItemProps, "noMargin" | "isStencilHost"> {
}
interface ICircleCountdownProps extends IBasicProps {
    /** @deprecated 26.11.24: use ariaLabel instead, With this description any detailed information can be placed
     *  to a circle diagram as aria-labelledby for users with a visual impairment. */
    ariaDescription?: string;
    /** a11y -relevant: With this description any detailed information can be placed to a circle diagram as
     *  aria-labelledby for users with a visual impairment.
     Note: It's recommended  to use  */
    ariaLabel?: string;
    /** Text corresponding to the amount (mostly a percentage info like "66%" ). */
    valueLabel: string;
    /** Callback on animation. Please use the callback with the parameter `progress` and multiply with 0 - 1. for value animation.
     * Second parameter ´amount:number´ will deprecate soon, because the second parameter is for internal purposes only and doesn't make sense on public .
     * Not relevant in a countdown scenario */
    valueAnimationCallback?: (progress: number, amount: number) => string;
    /** Small text below is useful in none countdown scenario and works as a
     * subline for valueLabel and an essential, additional information part  */
    label?: string;
    /** Please pass a value between 0 and 1. Do not use in a countdown scenario */
    amount?: number;
    /** Color of diagram, can be switched between 2 color aspects  (default: primary-1)
     *  Useful for countdown scenario and other. */
    color?: "primary-1" | "primary-2";
    /** Set true for noAnimation. The value will appear directly after loading. (default = false) */
    noAnimation?: boolean;
    /** On true the animation starts right after loading, even when the Circle is not in the viewport (default = false). Not relevant for countdown scenarios.
     * Prop is not relevant in a countdown scenario */
    animationOnStart?: boolean;
    /** Headline is placed above the value, relevant for none countdown and countdown scenario */
    headline?: string;
    /** Callback which is triggered when the refresh button is clicked. Useful in a countdown scenario. */
    onRefreshClick?: () => void;
    /** If countdown is active, you can set how many seconds the countdown starts with. Useful in a countdown scenario. */
    secondsUntilRefresh?: number;
    /** Activates a countdown, which can be reset by user (default is 5 seconds). Essential prop
     *  in a countdown scenario  */
    countdown?: boolean;
    /** This text become displayed in color red. Because the user should pay attention to the status when countdown run to zero.
     * The legacy message become provided as default when no other text is needed. But it can be overwritten. ( default: "Orderfrist abgelaufen" (de) / "Order period has exprired" (en)
     * Useful in a Countdown scenario.
     * */
    countDownFinishText?: string;
    /** A button can be added to the CircleDiagram in a countdown scenario */
    callToActionButton?: any;
    /** Chart information as presentation of amounts behind circle diagram chart expression. Prop is not intended for countdown scenarios, means value presentation only.
     * Not relevant for countdown scenarios. */
    chartInfoArea?: IChartInfoListProps;
    /** Size mode: `fixed` considers behavior so far, `dynamic` needs a limiting box around (parent element like div) to catch the size (default = fixed / with 480 px).
     * Useful for countdown scenarios and other. */
    sizeMode?: "fixed" | "dynamic";
}
declare const CircleDiagram: {
    ({ noAnimation, animationOnStart, valueLabel, chartInfoArea, ariaDescription, ariaLabel, ...props }: ICircleCountdownProps): React.JSX.Element;
    displayName: string;
};
export { CircleDiagram };
export type { ICircleCountdownProps };
export type { ChartInfoPosition } from "../ChartInfos/shared/ChartInfoContainer";

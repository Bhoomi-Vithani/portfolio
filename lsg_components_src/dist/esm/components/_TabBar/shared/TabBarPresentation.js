import { interaction_arrows_chevronLeft, interaction_arrows_chevronRight } from '@lsg/icons';
import React__default, { forwardRef } from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { texts } from '../../../utils/Localization.js';
import { IconLinkWrapper } from '../../IconLink/shared/IconLinkWrapper.js';
import { IndicatorWrapper } from '../../_Indicator/shared/IndicatorWrapper.js';
import { NavigationBarPresentation } from '../../_NavigationBar/NavigationBarPresentation.js';
import { hostClass } from './TabBar.styles.js';

// @ts-strict-ignore
const Div = forwardRef((props, ref) => React__default.createElement("div", { ...props, ref: ref }));
const TabBarPresentation = (props) => {
    const { id, className, noMargin, innerRef, showArrowLeft, showArrowRight, value, onClickArrowLeft, onClickArrowRight, centeredLayout, ariaLabel, ariaLabelledBy, onChange = () => { }, ...restProps } = props;
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
            [`${lsgPre}-centered-layout`]: centeredLayout,
        }), role: "tablist", "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "data-lsg-component": "tab-bar" },
        React__default.createElement(Div, { className: `${hostClass}-outer` },
            React__default.createElement(Div, { className: `${hostClass}-inner`, ref: innerRef },
                React__default.createElement(NavigationBarPresentation, { size: "tab-bar", value: value, onChange: onChange, ...restProps }),
                React__default.createElement(IndicatorWrapper, { activeElement: props.activeElement }))),
        showArrowLeft && (React__default.createElement(IconLinkWrapper, { icon: interaction_arrows_chevronLeft, onClick: onClickArrowLeft, noMargin: false, color: "primary", label: texts.lsg.component.TabBar.scrollLeft, appearance: "no-text", className: `${hostClass}-arrow-left`, htmlAttrs: { "aria-hidden": true }, hasTabIndex: false })),
        showArrowRight && (React__default.createElement(IconLinkWrapper, { icon: interaction_arrows_chevronRight, onClick: onClickArrowRight, color: "primary", label: texts.lsg.component.TabBar.scrollRight, appearance: "no-text", className: `${hostClass}-arrow-right`, htmlAttrs: { "aria-hidden": true }, hasTabIndex: false }))));
};
TabBarPresentation.displayName = "TabBarPresentation";

export { TabBarPresentation };

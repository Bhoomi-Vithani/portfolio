import { interaction_arrows_chevronRight } from '@lsg/icons';
import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { utilityClassesBackgroundBaseBefore, utilityClassesBackgroundHoverBefore, utilityClassesBackgroundFocusBefore } from '../../../styles/utilityClassesColor.styles.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { ActionPresentation } from '../../Action/shared/ActionPresentation.js';
import { CheckboxWrapper } from '../../Checkbox/shared/CheckboxWrapper.js';
import { ClickListLayoutContainerPresentation } from '../../ClickList/shared/ClickListLayoutContainer/ClickListLayoutContainerPresentation.js';
import { IconPresentation } from '../../Icon/shared/IconPresentation.js';
import { RadioWrapper } from '../../Radio/shared/RadioWrapper.js';
import { SpinnerPresentation } from '../../Spinner/shared/SpinnerPresentation.js';
import { StatusIndicatorPresentation } from '../../StatusIndicator/shared/StatusIndicatorPresentation.js';
import { TwoLineItemPresentation } from '../../TwoLineItem/shared/TwoLineItemPresentation.js';
import { LabelPresentation } from '../../_Label/LabelPresentation.js';
import { hostClass } from './ClickListItem.styles.js';

const defaultProps = {
    onClick: () => {
        /* empty */
    },
    actionRef: () => {
        /* empty */
    },
    onMouseHoverChange: () => {
        /* empty */
    },
    onKeyboardFocusChange: () => {
        /* empty */
    },
    showLinkLabel: true,
    look: "default",
    badgeColor: "primary",
};
const ClickListItemPresentation = ({ id, name, className, disabled, onClick, noMargin, href, actionRef, hasMouseHover, onMouseHoverChange, hasKeyboardFocus, onKeyboardFocusChange, showLinkLabel, linkIcon, linkLabel, thumbImgSrc, thumbText, thumbIcon, thumbIconVariant, thumbIconName, thumbIconTitle, headline, headlineAs = linkIcon ? "strong" : "div", subline, sublineAs, statusColor, statusTag, statusIndicatorIcon, look, value, onChange, badgeText, badgeScreenReaderLabel, badgeIcon, badgeIconVariant, badgeColor, actions, invalid, as = "div", loading, loadingAriaLabel, htmlAttrs, ...otherProps }) => {
    const standardArrowRightIcon = interaction_arrows_chevronRight;
    const SelectionComponent = {
        checkbox: CheckboxWrapper,
        radio: RadioWrapper,
    }[look];
    const hasSelectionComponent = !!SelectionComponent;
    const isMultiAction = look === "multiaction";
    const actionOnMouseHoverChange = look === "default" ? onMouseHoverChange : undefined;
    const actionOnKeyboardFocusChange = look === "default" ? onKeyboardFocusChange : undefined;
    const mainId = useUniqueId(`${hostClass}`, id);
    const toggleId = useUniqueId(`${hostClass}-toggle`, id && `${id}-toggle`);
    const sublineId = useUniqueId(`${hostClass}-helper-text-`, id && `${id}-helper-text`);
    const badgeId = useUniqueId(`${hostClass}-badge-text-`, id && `${id}-badge-text`);
    // Do not show hover on the line, when there is a checkbox, radio or switch
    const hasLineMouseHover = hasMouseHover && (look === "multiaction" || look === "default");
    /** Add a Conditional Wrapper over the given content */
    const withWrapper = ({ withAction = false, withLabel = false, content }) => {
        switch (true) {
            case withAction:
                return (React__default.createElement(ActionPresentation, { id: mainId, disabled: disabled, href: look === "default" ? href : undefined, name: name, onClick: onClick, actionRef: actionRef, onMouseHoverChange: actionOnMouseHoverChange, onKeyboardFocusChange: actionOnKeyboardFocusChange, fullWidth: true, expandToOverlay: true, htmlAttrs: {
                        "data-lsg-component": "click-list-item-action",
                        "aria-describedby": [
                            subline && sublineId,
                            (badgeText || badgeScreenReaderLabel) && badgeId,
                        ]
                            .filter(t => !!t)
                            .join(" "),
                        ...htmlAttrs,
                    }, ...otherProps }, content));
            case withLabel:
                return (React__default.createElement(LabelPresentation, { id: mainId, htmlFor: toggleId, hasMouseHover: hasMouseHover, onMouseHoverChange: onMouseHoverChange, disabled: disabled, expandToOverlay: true, htmlAttrs: {
                        "aria-describedby": [badgeText && badgeId].filter(t => !!t).join(" "),
                    } }, content));
            default:
                return content;
        }
    };
    return (React__default.createElement(Host, { className: cleanupClassObject({
            [hostClass]: true,
            [className]: !!className,
            [utilityClassesBackgroundBaseBefore]: true,
            [utilityClassesBackgroundHoverBefore]: !disabled && hasLineMouseHover,
            [`${hostClass}__hover`]: hasLineMouseHover,
            [utilityClassesBackgroundFocusBefore]: hasKeyboardFocus,
            [`${hostClass}__focus`]: hasKeyboardFocus,
            [`${hostClass}__disabled`]: disabled,
            [`${lsgPre}no-margin`]: noMargin,
        }), "aria-disabled": disabled || loading, as: as, id: `${mainId}-base`, "data-lsg-component": "click-list-item" },
        React__default.createElement(ClickListLayoutContainerPresentation
        // TODO check if the layout container still needs to be a separate component
        , { 
            // TODO check if the layout container still needs to be a separate component
            left: [
                statusColor && (React__default.createElement(StatusIndicatorPresentation, { className: cleanupClassObject({ [`${hostClass}__loading`]: loading }), statusColor: statusColor, tag: statusTag, icon: statusIndicatorIcon, tagHidden: true, noMargin: true, key: "status" })),
            ], right: React__default.createElement(TwoLineItemPresentation, { className: cleanupClassObject({ [`${hostClass}__loading`]: loading }), noMargin: true, src: thumbImgSrc, text: thumbText, icon: thumbIcon, iconName: thumbIconName, iconVariant: thumbIconVariant, iconTitle: thumbIconTitle, label: 
                // set the headline as button, but only if no multiaction, selection component or linklabel ist set
                withWrapper({
                    content: headline,
                    withAction: !isMultiAction && !hasSelectionComponent && !linkLabel,
                    withLabel: hasSelectionComponent,
                }), labelAs: headlineAs, subline: subline, sublineAs: sublineAs, sublineId: sublineId, badgeText: badgeText, badgeIcon: badgeIcon, badgeIconVariant: badgeIconVariant, badgeColor: badgeColor, badgeScreenReaderLabel: badgeScreenReaderLabel, badgeId: badgeId }), actions: 
            // eslint-disable-next-line no-nested-ternary
            look === "multiaction" ? (React__default.isValidElement(actions) &&
                React__default.cloneElement(actions, {
                    direction: actions.props.direction || "table",
                    noMargin: true,
                })) : look === "default" ? (
            // linkLabel button with icon
            withWrapper({
                withAction: Boolean(linkLabel),
                content: (React__default.createElement("div", { className: cleanupClassObject({
                        [`${hostClass}__loading`]: loading,
                        [`${hostClass}-icon`]: true,
                    }), onMouseEnter: () => onMouseHoverChange(true), onMouseLeave: () => onMouseHoverChange(false) },
                    showLinkLabel && linkLabel && (React__default.createElement("span", { className: `${hostClass}-icon-label` }, linkLabel)),
                    (!disabled || (disabled && linkIcon)) && (React__default.createElement(IconPresentation, { noMargin: true, name: thumbIconName, icon: linkIcon || (!thumbIconName && standardArrowRightIcon), title: !showLinkLabel ? linkLabel : "" })))),
            })) : (
            // Checkbox or radio inputs
            React__default.createElement("div", { className: `${hostClass}-icon` },
                React__default.createElement(SelectionComponent, { id: toggleId, noMargin: true, disabled: disabled, name: name, value: value, hasMouseHover: hasMouseHover, onMouseHoverChange: onMouseHoverChange, onChange: onChange, invalid: !disabled && invalid, 
                    // Overwrite inner aria-describedby to connect input with headline and subline
                    htmlAttrs: {
                        "aria-describedby": [subline && sublineId].filter(t => !!t).join(" "),
                    }, className: cleanupClassObject({
                        [`${hostClass}__loading`]: loading,
                    }) }))) }),
        loading && (React__default.createElement(SpinnerPresentation, { expandToOverlay: true, variant: "indeterminate", size: 24, ariaLabel: loadingAriaLabel, loading: loading }))));
};
ClickListItemPresentation.displayName = "ClickListItemPresentation";

export { ClickListItemPresentation, defaultProps };

import { people___profile } from '@lsg/icons';
import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { texts } from '../../../utils/Localization.js';
import { ButtonPresentation } from '../../Button/shared/ButtonPresentation.js';
import { ButtonGroupPresentation } from '../../ButtonGroup/shared/ButtonGroupPresentation.js';
import { IconLinkWrapper } from '../../IconLink/shared/IconLinkWrapper.js';
import { IconLinkGroupWrapper } from '../../IconLinkGroup/shared/IconLinkGroupWrapper.js';
import { LayerPresentation } from '../../Layer/shared/LayerPresentation.js';
import { ParagraphPresentation } from '../../Paragraph/shared/ParagraphPresentation.js';
import { TwoLineItemPresentation } from '../../TwoLineItem/shared/TwoLineItemPresentation.js';
import { NavigationBlockWrapper } from '../../_NavigationBlock/shared/NavigationBlockWrapper.js';
import { SeparatorLinePresentation } from '../../_SeparatorLine/SeparatorLinePresentation.js';
import { hostClass } from './ProfileWidget.styles.js';

const ProfileWidgetPresentation = ({ id, children, className, noMargin, isStencilHost, open, onCloseClick, onBackdropClick, profileName, profileSubline, profileImg, profileImgAltText, profileIcon, profileIconVariant, switchProfileLinkText, switchProfileLinkIcon, switchProfileLinkHref, switchProfileLinkTarget, switchProfileLinkActionAs, switchProfileLinkActionProps, onProfileSwitchClick, navigationTree, navigationActionAs, onLogOutButtonClick, logOutButtonHref, logOutButtonTarget, logOutButtonText, logOutButtonActionAs, logOutButtonActionProps, logOutButtonHidden, messageText, linkSectionLeft, linkSectionRight, }) => (React__default.createElement(Host, { id: id, className: cleanupClassObject({
        [className]: !!className,
        [hostClass]: true,
        [`${lsgPre}no-margin`]: noMargin,
    }), isStencilHost: isStencilHost },
    React__default.createElement(LayerPresentation, { closeLinkLabel: texts.lsg.component.ProfileWidget.closeMenu, layout: "right-25", open: open, onCloseClick: onCloseClick, onBackdropClick: onBackdropClick, ariaLabel: "Profile" },
        React__default.createElement(TwoLineItemPresentation, { label: profileName, subline: profileSubline, horizontalAlignment: "center", centeredLayout: true, text: profileImgAltText, src: profileImg, icon: !profileImgAltText && !profileIcon && !profileImg ? people___profile : profileIcon, iconVariant: profileIconVariant }),
        switchProfileLinkText && (React__default.createElement(IconLinkGroupWrapper, { direction: "horizontal", noMargin: true, centeredLayout: true },
            React__default.createElement(IconLinkWrapper, { label: switchProfileLinkText, icon: switchProfileLinkIcon, horizontalAlignment: "center", onClick: onProfileSwitchClick, href: switchProfileLinkHref, htmlAttrs: { target: switchProfileLinkTarget }, actionAs: switchProfileLinkActionAs, actionProps: switchProfileLinkActionProps }))),
        React__default.createElement(SeparatorLinePresentation, { componentSpacing: "small" }),
        navigationTree?.length > 0 && (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(NavigationBlockWrapper, { navigationTree: navigationTree, navigationActionAs: navigationActionAs, startLevel: "page", noIndent: true }),
            React__default.createElement(SeparatorLinePresentation, { componentSpacing: "small" }))),
        React__default.createElement("div", { className: `${hostClass}-link-container` },
            React__default.createElement("div", { className: `${hostClass}-link-container-left` }, linkSectionLeft),
            React__default.createElement("div", { className: `${hostClass}-link-container-right` }, linkSectionRight)),
        React__default.createElement(SeparatorLinePresentation, { componentSpacing: "small" }),
        !logOutButtonHidden && (React__default.createElement(ButtonGroupPresentation, { direction: "vertical" },
            React__default.createElement(ButtonPresentation, { color: "secondary", onClick: onLogOutButtonClick, href: logOutButtonHref, htmlAttrs: { target: logOutButtonTarget }, actionAs: logOutButtonActionAs, actionProps: logOutButtonActionProps, label: logOutButtonText || texts.lsg.component.ProfileWidget.logout }))),
        React__default.createElement(ParagraphPresentation, { size: "helper-text", centeredLayout: true }, messageText),
        children)));
ProfileWidgetPresentation.displayName = "ProfileWidgetPresentation";

export { ProfileWidgetPresentation };

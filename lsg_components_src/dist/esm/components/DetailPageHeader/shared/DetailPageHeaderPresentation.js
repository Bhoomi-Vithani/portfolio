import { interaction_arrows_arrowLeft } from '@lsg/icons';
import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { texts } from '../../../utils/Localization.js';
import { IconLinkWrapper } from '../../IconLink/shared/IconLinkWrapper.js';
import { IconLinkGroupWrapper } from '../../IconLinkGroup/shared/IconLinkGroupWrapper.js';
import { HeaderContainerWrapper } from '../../_HeaderContainer/HeaderContainerWrapper.js';
import { hostClass } from './DetailPageHeader.styles.js';

// @ts-strict-ignore
const DetailPageHeaderPresentation = ({ id, className, noMargin, isStencilHost, theme = "light", closeLabel, closeHref, closeOnClick, isSticky = false, actions, isMobile, onForceMobileChange, }) => (React__default.createElement(Host, { id: id, className: cleanupClassObject({
        [className]: !!className,
        [hostClass]: true,
        [`${lsgPre}no-margin`]: noMargin,
    }), isStencilHost: isStencilHost },
    React__default.createElement(HeaderContainerWrapper, { width: "page", theme: theme, isFullUnderline: false, position: isSticky ? "fixed" : undefined, isMobile: isMobile, onForceMobileChange: onForceMobileChange, topLeft: closeHref || closeOnClick ? (React__default.createElement(IconLinkGroupWrapper, { noMargin: true, direction: "collapse-xs" },
            React__default.createElement(IconLinkWrapper, { href: closeHref, onClick: closeOnClick, label: closeLabel || texts.lsg.component.DetailPageHeader.backButton, icon: interaction_arrows_arrowLeft }))) : null, topRight: React__default.createElement("div", { className: `${hostClass}-actions-container` }, actions) })));
DetailPageHeaderPresentation.displayName = "DetailPageHeaderPresentation";

export { DetailPageHeaderPresentation };

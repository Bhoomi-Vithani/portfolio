import { communication___call } from '@lsg/icons';
import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { ActionButtonGroupPresentation } from '../../ActionButtonGroup/shared/ActionButtonGroupPresentation.js';
import { HeadlinePresentation } from '../../Headline/shared/HeadlinePresentation.js';
import { IconPresentation } from '../../Icon/shared/IconPresentation.js';
import { LinkWrapper } from '../../Link/shared/LinkWrapper.js';
import { ParagraphPresentation } from '../../Paragraph/shared/ParagraphPresentation.js';
import { getThemeClass } from '../../Theme/shared/ThemePresentation.js';
import { hostClass } from './ContactModule.styles.js';

// @ts-strict-ignore
const ContactModulePresentation = ({ id, children, className, noMargin, href, phoneNumber, phoneText, onClick, headline, headlineAs, subline, sublineAs, htmlAttrs: htmlAttrsProp, actionAs, actionProps, }) => {
    const linkHref = (phoneNumber && `tel:${phoneNumber}`) || href || undefined;
    const isAction = Boolean(linkHref || onClick);
    const headlineText = phoneText || headline;
    const phoneDescriptionId = useUniqueId(`${hostClass}-phone-description`);
    const htmlAttrs = {
        "aria-describedby": phoneNumber && subline ? phoneDescriptionId : undefined,
        ...htmlAttrsProp,
    };
    // @ts-ignore
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
            [getThemeClass("brand")]: true,
        }) },
        React__default.createElement("div", { className: `${hostClass}-toparea` },
            isAction && phoneText && (React__default.createElement("div", { className: `${hostClass}-phonenumber-container` },
                React__default.createElement(IconPresentation, { icon: communication___call, "aria-hidden": true }),
                React__default.createElement(HeadlinePresentation, { size: "h4", as: "div", className: `${hostClass}-phonenumber` },
                    React__default.createElement(LinkWrapper, { label: headlineText, href: linkHref, onClick: onClick, actionAs: actionAs, actionProps: actionProps, htmlAttrs: htmlAttrs })))),
            isAction && headline && (React__default.createElement(HeadlinePresentation, { size: "h4", as: headlineAs, noMargin: true, className: `${hostClass}-headline`, centeredLayout: false },
                React__default.createElement(LinkWrapper, { label: headlineText, href: linkHref, onClick: onClick, actionAs: actionAs, actionProps: actionProps, htmlAttrs: htmlAttrs }))),
            !isAction && headlineText && (React__default.createElement(HeadlinePresentation, { size: "h4", as: headlineAs, noMargin: true, className: `${hostClass}-headline`, centeredLayout: false }, headlineText)),
            subline && (React__default.createElement(ParagraphPresentation, { size: "lead-text", as: sublineAs, noMargin: true, className: `${hostClass}-subline`, id: phoneNumber && phoneDescriptionId }, subline))),
        children && (React__default.createElement("div", { className: `${hostClass}-actionbuttons` },
            React__default.createElement(ActionButtonGroupPresentation, { noMargin: true }, children)))));
};
ContactModulePresentation.displayName = "ContactModulePresentation";

export { ContactModulePresentation };

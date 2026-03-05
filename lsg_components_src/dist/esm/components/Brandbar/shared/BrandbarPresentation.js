import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { LogoPresentation } from '../../_Logo/LogoPresentation.js';
import { hostClass } from './Brandbar.styles.js';

// @ts-strict-ignore
const BrandbarPresentation = ({ id, className, noMargin, isStencilHost, slogan, href, actionAs, actionProps, logoLabel, logoSrcCustom, logoDisabled, logoHtmlAttrs, onLogoClick, }) => {
    const logoId = useUniqueId(`${hostClass}-logo`, id && `${id}-logo`);
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
        }), isStencilHost: isStencilHost },
        React__default.createElement(LogoPresentation, { id: logoId, className: `${hostClass}-logo`, logoLabel: logoLabel, isMonochrome: true, fitToBox: true, variant: "horizontal", href: href, onClick: onLogoClick, actionAs: actionAs, actionProps: actionProps, disabled: logoDisabled, srcCustom: logoSrcCustom, htmlAttrs: logoHtmlAttrs }),
        React__default.createElement("p", { className: `${hostClass}-claim` }, slogan)));
};
BrandbarPresentation.displayName = "BrandbarPresentation";

export { BrandbarPresentation };

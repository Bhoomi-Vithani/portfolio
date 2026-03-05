import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { ActionPresentation } from '../../Action/shared/ActionPresentation.js';
import { HeadlinePresentation } from '../../Headline/shared/HeadlinePresentation.js';
import { hostClass as hostClass$1 } from '../../Link/shared/Link.styles.js';
import { PicturePresentation } from '../../Picture/shared/PicturePresentation.js';
import { hostClass } from './Teaser.styles.js';

// @ts-strict-ignore
const TeaserPresentation = ({ children, id, className, noMargin, headline, headlineSize = "h4", headlineAs, overline, overlineAs, subline, sublineAs, imgSrc, imgAlt, imageRatio = "16-9", actionRef, href, as = "li", onClick = undefined, htmlAttrs = {}, actionAs, actionProps, }) => {
    const [hasKeyboardFocus, setHasKeyboardFocus] = React__default.useState(false);
    const [hasMouseHover, setHasMouseHover] = React__default.useState(false);
    return (React__default.createElement(Host, { className: cleanupClassObject({
            [hostClass]: true,
            [className]: !!className,
            [`${lsgPre}no-margin`]: noMargin,
            [`${hostClass}__image-21-9`]: imageRatio === "21-9",
            [`${hostClass}__hover`]: hasMouseHover,
            [`${hostClass$1}__hover-area`]: hasMouseHover,
        }), as: as },
        React__default.createElement("div", { className: `${lsgPre}teaser-content-container` },
            React__default.createElement(HeadlinePresentation, { size: headlineSize, as: headlineAs, overline: overline, overlineAs: overlineAs, subline: subline, sublineAs: sublineAs },
                React__default.createElement(ActionPresentation, { id: id, actionAs: actionAs, nonInteractive: !onClick && !href, actionProps: actionProps, expandToOverlay: true, ref: actionRef, href: href, onClick: onClick, htmlAttrs: htmlAttrs, hasKeyboardFocus: hasKeyboardFocus, onKeyboardFocusChange: newFocus => setHasKeyboardFocus(newFocus), onMouseHoverChange: newHover => setHasMouseHover(newHover) }, headline)),
            children),
        React__default.createElement("div", { className: `${lsgPre}teaser-image-container` },
            React__default.createElement(PicturePresentation, { src: imgSrc, alt: imgAlt, className: `${lsgPre}teaser-image`, yellowElevator: false }))));
};
TeaserPresentation.displayName = "TeaserPresentation";

export { TeaserPresentation };

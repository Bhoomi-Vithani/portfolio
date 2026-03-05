import { interaction_arrows_chevronLeft } from '@lsg/icons';
import React__default from 'react';
import { useViewportRange } from '../../../utils/Hooks/index.js';
import { ButtonGroupWrapper } from '../../ButtonGroup/shared/ButtonGroupWrapper.js';
import { DrawerPresentation } from '../../Drawer/shared/DrawerPresentation.js';
import { IconLinkWrapper } from '../../IconLink/shared/IconLinkWrapper.js';
import { IconLinkGroupWrapper } from '../../IconLinkGroup/shared/IconLinkGroupWrapper.js';
import { SectionPresentation } from '../../Section/shared/SectionPresentation.js';
import { HeaderContainerWrapper } from '../../_HeaderContainer/HeaderContainerWrapper.js';

// @ts-strict-ignore
const LayerPresentation = ({ id, children, closeLinkLabel, layout = "right", noMargin, className, onCloseClick = () => {
    /* empty */
}, open, onBackdropClick, buttons, htmlAttrs, ariaLabel, ariaLabelledBy, returnFocus, onFocusLoss = () => {
    /* empty */
}, ariaLabelButtons, }) => {
    const isMobile = useViewportRange(undefined, "sm");
    // Saves the previous state of open state, so focusLoss is just triggered if state changes from open to close
    const [prevOpen, setPrevOpen] = React__default.useState(undefined);
    React__default.useEffect(() => {
        // Layer toggles from open state to closed state:
        if (prevOpen === true && open === false) {
            setPrevOpen(open);
            onFocusLoss(); // User CallBack function onFocusLoss is triggered
        }
        setPrevOpen(open);
    }, [open]);
    return (React__default.createElement(DrawerPresentation, { id: id, noMargin: noMargin, className: className, layout: `layer-${layout}`, open: open, returnFocus: returnFocus, onBackdropClick: closeLinkLabel ? onBackdropClick || onCloseClick : undefined, htmlAttrs: htmlAttrs, dataComponentType: "layer", ...(ariaLabel && !ariaLabelledBy && { ariaLabel }), ...(ariaLabelledBy && !ariaLabel && { ariaLabelledBy }) },
        React__default.createElement(HeaderContainerWrapper, { width: "layer", theme: "elevated", isMobile: !buttons && isMobile, position: "sticky", topLeft: closeLinkLabel && (React__default.createElement(IconLinkGroupWrapper, { noMargin: true, direction: (buttons ? "collapse-sm" : " horizontal") },
                React__default.createElement(IconLinkWrapper, { label: closeLinkLabel, icon: interaction_arrows_chevronLeft, onClick: onCloseClick }))), topRight: buttons ? (React__default.createElement(ButtonGroupWrapper, { noMargin: true, align: "right", dontFlipFocus: true, ariaLabel: ariaLabelButtons }, buttons)) : undefined }),
        React__default.createElement(SectionPresentation, { spacing: layout === "right-25" ? "technical" : "marketing" }, children)));
};
LayerPresentation.displayName = "LayerPresentation";

export { LayerPresentation };

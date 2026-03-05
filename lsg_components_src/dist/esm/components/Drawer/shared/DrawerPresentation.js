import React__default, { useReducer, useEffect, useCallback } from 'react';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';
import { lsgPre } from '../../../config/prefix.js';
import { utilityClassScroll } from '../../../styles/utilityClassesScroll.styles.js';
import { animationDuration } from '../../../styles/variables.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useTransitionState } from '../../../utils/Hooks/index.js';
import { isPreferReducedMotion } from '../../../utils/Hooks/animation.js';
import { Host } from '../../../utils/Host.js';
import { Key } from '../../../utils/Keys.js';
import { hostClass as hostClass$1 } from '../../Grid/shared/Grid.styles.js';
import { hostClass } from './Drawer.styles.js';

// @ts-strict-ignore
const layoutClasses = {
    "layer-left": `${hostClass}__layer ${hostClass}__left ${hostClass}__50`,
    "layer-right": `${hostClass}__layer ${hostClass}__right ${hostClass}__50`,
    "layer-right-legacy": `${hostClass}__layer ${hostClass}__layer-legacy ${hostClass}__right ${hostClass}__50`,
    "layer-full": `${hostClass}__layer ${hostClass}__right ${hostClass}__full`,
    "layer-left-75": `${hostClass}__layer ${hostClass}__left ${hostClass}__75`,
    "layer-right-75": `${hostClass}__layer ${hostClass}__right ${hostClass}__75`,
    "layer-right-25": `${hostClass}__layer ${hostClass}__right ${hostClass}__25`,
    "side-menu-left": `${hostClass}__side-menu ${hostClass}__left`,
    "side-menu-right": `${hostClass}__side-menu ${hostClass}__right`,
    "mega-menu": `${hostClass}__mega-menu`,
    "mega-menu-legacy": `${hostClass}__mega-menu-legacy`,
};
const DrawerPresentation = ({ noMargin, className, layout = "layer-right", open, onBackdropClick, htmlAttrs, children, legacyStickyMegaMenu, noFocusLock, onFocusLockActivation, id, ariaLabel, ariaLabelledBy, setPersistentFocus, autoFocus, returnFocus = true, dataComponentType, }) => {
    const animationSpeed = isPreferReducedMotion() ? 0 : animationDuration.slower;
    const { transitionState } = useTransitionState(open, animationSpeed); // similarly to BannerMessagePresentation.tsx
    // cjs issue: There seems to be a bug from FocusLock regarding the cjs export, which is used by tests and probably ssr apps, too.
    // With cjs, the FocusLock component is exported as an "default" attribute of an object.
    // With esm/esm-es5, the component is the default imported FocusLock component.
    const FocusLockComponent = FocusLock.default || FocusLock;
    // Enforce rerender when layer gets opened
    const [rerenderKey, forceRerender] = useReducer(key => key + 1, 0);
    useEffect(() => {
        if (transitionState.entering) {
            forceRerender();
        }
    }, [transitionState]);
    const onKeyDown = useCallback((e) => {
        switch (e.key) {
            case Key.Escape:
                e.preventDefault();
                onBackdropClick?.();
                return;
        }
    }, [onBackdropClick]);
    useEffect(() => {
        // TODO check that function is not called too often
        if (open) {
            document.body.addEventListener("keydown", onKeyDown);
        }
        else {
            document.body.removeEventListener("keydown", onKeyDown);
        }
        return () => {
            document.body.removeEventListener("keydown", onKeyDown);
        };
    }, [open, layout, onKeyDown]); // triggers useEffect() on either open or layout change
    // TODO: We need to instantiate the FocusLock component as a singleton to correctly work across multiple react
    //  bundles (e.g. main app, cookie consent, portal header)
    return (React__default.createElement(FocusLockComponent, { persistentFocus: setPersistentFocus, disabled: Boolean(noFocusLock || !open), autoFocus: autoFocus, 
        // Returns Focus after Closing Drawer. Causes Problems in Stacked Layers - so optional property.
        returnFocus: returnFocus, onActivation: onFocusLockActivation },
        React__default.createElement(RemoveScroll, { enabled: Boolean(!noFocusLock && open && layout !== "mega-menu") },
            React__default.createElement(Host, { className: cleanupClassObject({
                    [className]: !!className,
                    [hostClass]: true,
                    [layoutClasses[layout]]: true,
                    [`${hostClass}__mega-menu-legacy-sticky`]: legacyStickyMegaMenu,
                    [`${lsgPre}no-margin`]: noMargin,
                }), style: {
                    display: transitionState && !transitionState.unmounted ? "inherit" : "none",
                }, "data-lsg-component": dataComponentType || "drawer", id: id },
                React__default.createElement("div", { ...htmlAttrs, role: "dialog", className: cleanupClassObject({
                        [`${hostClass}-inner`]: true,
                        [`${hostClass}__hidden`]: transitionState && !transitionState.entering && !transitionState.entered,
                    }), "aria-modal": open, ...(ariaLabel && !ariaLabelledBy && { "aria-label": ariaLabel }), ...(ariaLabelledBy && !ariaLabel && { "aria-labelledby": ariaLabelledBy }) },
                    React__default.createElement("div", { className: `${hostClass}-background`, onClick: onBackdropClick, role: "none" }),
                    React__default.createElement("div", { className: cleanupClassObject({
                            [`${hostClass}-content`]: true,
                            [utilityClassScroll]: true,
                            [`${hostClass$1}-column__md-col-6`]: ["layer-left", "layer-right"].includes(layout),
                            [`${hostClass$1}-column__md-col-8`]: ["layer-left-75", "layer-right-75"].includes(layout),
                            [`${hostClass$1}-column__sm-col-4`]: ["layer-left", "layer-right"].includes(layout),
                            [`${hostClass$1}-column__sm-col-6`]: ["layer-left-75", "layer-right-75"].includes(layout),
                            [`${hostClass$1}-column__xs-col-4`]: [
                                "layer-left",
                                "layer-right",
                                "layer-left-75",
                                "layer-right-75",
                            ].includes(layout),
                        }) },
                        React__default.createElement(React__default.Fragment, { key: rerenderKey }, children)))))));
};
DrawerPresentation.displayName = "DrawerPresentation";

export { DrawerPresentation };

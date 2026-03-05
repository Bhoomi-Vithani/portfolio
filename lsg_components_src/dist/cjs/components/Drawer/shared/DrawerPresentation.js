'use strict';

var React__default = require('react');
var FocusLock = require('react-focus-lock');
var reactRemoveScroll = require('react-remove-scroll');
var prefix = require('../../../config/prefix.js');
var utilityClassesScroll_styles = require('../../../styles/utilityClassesScroll.styles.js');
var variables = require('../../../styles/variables.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var animation = require('../../../utils/Hooks/animation.js');
var Host = require('../../../utils/Host.js');
var Keys = require('../../../utils/Keys.js');
var Grid_styles = require('../../Grid/shared/Grid.styles.js');
var Drawer_styles = require('./Drawer.styles.js');

// @ts-strict-ignore
const layoutClasses = {
  "layer-left": `${Drawer_styles.hostClass}__layer ${Drawer_styles.hostClass}__left ${Drawer_styles.hostClass}__50`,
  "layer-right": `${Drawer_styles.hostClass}__layer ${Drawer_styles.hostClass}__right ${Drawer_styles.hostClass}__50`,
  "layer-right-legacy": `${Drawer_styles.hostClass}__layer ${Drawer_styles.hostClass}__layer-legacy ${Drawer_styles.hostClass}__right ${Drawer_styles.hostClass}__50`,
  "layer-full": `${Drawer_styles.hostClass}__layer ${Drawer_styles.hostClass}__right ${Drawer_styles.hostClass}__full`,
  "layer-left-75": `${Drawer_styles.hostClass}__layer ${Drawer_styles.hostClass}__left ${Drawer_styles.hostClass}__75`,
  "layer-right-75": `${Drawer_styles.hostClass}__layer ${Drawer_styles.hostClass}__right ${Drawer_styles.hostClass}__75`,
  "layer-right-25": `${Drawer_styles.hostClass}__layer ${Drawer_styles.hostClass}__right ${Drawer_styles.hostClass}__25`,
  "side-menu-left": `${Drawer_styles.hostClass}__side-menu ${Drawer_styles.hostClass}__left`,
  "side-menu-right": `${Drawer_styles.hostClass}__side-menu ${Drawer_styles.hostClass}__right`,
  "mega-menu": `${Drawer_styles.hostClass}__mega-menu`,
  "mega-menu-legacy": `${Drawer_styles.hostClass}__mega-menu-legacy`
};
const DrawerPresentation = ({
  noMargin,
  className,
  layout = "layer-right",
  open,
  onBackdropClick,
  htmlAttrs,
  children,
  legacyStickyMegaMenu,
  noFocusLock,
  onFocusLockActivation,
  id,
  ariaLabel,
  ariaLabelledBy,
  setPersistentFocus,
  autoFocus,
  returnFocus = true,
  dataComponentType
}) => {
  const animationSpeed = animation.isPreferReducedMotion() ? 0 : variables.animationDuration.slower;
  const {
    transitionState
  } = index.useTransitionState(open, animationSpeed); // similarly to BannerMessagePresentation.tsx
  // cjs issue: There seems to be a bug from FocusLock regarding the cjs export, which is used by tests and probably ssr apps, too.
  // With cjs, the FocusLock component is exported as an "default" attribute of an object.
  // With esm/esm-es5, the component is the default imported FocusLock component.
  const FocusLockComponent = FocusLock.default || FocusLock;
  // Enforce rerender when layer gets opened
  const [rerenderKey, forceRerender] = React__default.useReducer(key => key + 1, 0);
  React__default.useEffect(() => {
    if (transitionState.entering) {
      forceRerender();
    }
  }, [transitionState]);
  const onKeyDown = React__default.useCallback(e => {
    switch (e.key) {
      case Keys.Key.Escape:
        e.preventDefault();
        onBackdropClick?.();
        return;
    }
  }, [onBackdropClick]);
  React__default.useEffect(() => {
    // TODO check that function is not called too often
    if (open) {
      document.body.addEventListener("keydown", onKeyDown);
    } else {
      document.body.removeEventListener("keydown", onKeyDown);
    }
    return () => {
      document.body.removeEventListener("keydown", onKeyDown);
    };
  }, [open, layout, onKeyDown]); // triggers useEffect() on either open or layout change
  // TODO: We need to instantiate the FocusLock component as a singleton to correctly work across multiple react
  //  bundles (e.g. main app, cookie consent, portal header)
  return /*#__PURE__*/React__default.createElement(FocusLockComponent, {
    persistentFocus: setPersistentFocus,
    disabled: Boolean(noFocusLock || !open),
    autoFocus: autoFocus,
    // Returns Focus after Closing Drawer. Causes Problems in Stacked Layers - so optional property.
    returnFocus: returnFocus,
    onActivation: onFocusLockActivation
  }, /*#__PURE__*/React__default.createElement(reactRemoveScroll.RemoveScroll, {
    enabled: Boolean(!noFocusLock && open && layout !== "mega-menu")
  }, /*#__PURE__*/React__default.createElement(Host.Host, {
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [Drawer_styles.hostClass]: true,
      [layoutClasses[layout]]: true,
      [`${Drawer_styles.hostClass}__mega-menu-legacy-sticky`]: legacyStickyMegaMenu,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    style: {
      display: transitionState && !transitionState.unmounted ? "inherit" : "none"
    },
    "data-lsg-component": dataComponentType || "drawer",
    id: id
  }, /*#__PURE__*/React__default.createElement("div", {
    ...htmlAttrs,
    role: "dialog",
    className: DomUtils.cleanupClassObject({
      [`${Drawer_styles.hostClass}-inner`]: true,
      [`${Drawer_styles.hostClass}__hidden`]: transitionState && !transitionState.entering && !transitionState.entered
    }),
    "aria-modal": open,
    ...(ariaLabel && !ariaLabelledBy && {
      "aria-label": ariaLabel
    }),
    ...(ariaLabelledBy && !ariaLabel && {
      "aria-labelledby": ariaLabelledBy
    })
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${Drawer_styles.hostClass}-background`,
    onClick: onBackdropClick,
    role: "none"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${Drawer_styles.hostClass}-content`]: true,
      [utilityClassesScroll_styles.utilityClassScroll]: true,
      [`${Grid_styles.hostClass}-column__md-col-6`]: ["layer-left", "layer-right"].includes(layout),
      [`${Grid_styles.hostClass}-column__md-col-8`]: ["layer-left-75", "layer-right-75"].includes(layout),
      [`${Grid_styles.hostClass}-column__sm-col-4`]: ["layer-left", "layer-right"].includes(layout),
      [`${Grid_styles.hostClass}-column__sm-col-6`]: ["layer-left-75", "layer-right-75"].includes(layout),
      [`${Grid_styles.hostClass}-column__xs-col-4`]: ["layer-left", "layer-right", "layer-left-75", "layer-right-75"].includes(layout)
    })
  }, /*#__PURE__*/React__default.createElement(React__default.Fragment, {
    key: rerenderKey
  }, children))))));
};
DrawerPresentation.displayName = "DrawerPresentation";

exports.DrawerPresentation = DrawerPresentation;

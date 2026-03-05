import { interaction___menu, interaction_arrows_chevronLeft, interaction___close } from '@lsg/icons';
import React__default, { useRef, useState, useReducer, useMemo, useEffect } from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { animationDuration } from '../../../styles/variables.js';
import { cleanupClassObject, isTargetInsideContainer } from '../../../utils/DomUtils.js';
import { usePrevious, useViewport, useTransitionState, useUniqueId } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { texts } from '../../../utils/Localization.js';
import { getNamedNavigationTree } from '../../../utils/NavigationUtils.js';
import { fRef } from '../../../utils/React.js';
import { DrawerPresentation } from '../../Drawer/shared/DrawerPresentation.js';
import { GridPresentation } from '../../Grid/shared/GridPresentation.js';
import { GridColumnPresentation } from '../../GridColumn/shared/GridColumnPresentation.js';
import { getGridRowClasses } from '../../GridRow/shared/GridRowPresentation.js';
import { IconLinkWrapper } from '../../IconLink/shared/IconLinkWrapper.js';
import { IconLinkGroupWrapper } from '../../IconLinkGroup/shared/IconLinkGroupWrapper.js';
import { SectionPresentation } from '../../Section/shared/SectionPresentation.js';
import { ThemePresentation } from '../../Theme/shared/ThemePresentation.js';
import { HeaderContainerWrapper } from '../../_HeaderContainer/HeaderContainerWrapper.js';
import { LogoPresentation } from '../../_Logo/LogoPresentation.js';
import { NavigationBarPresentation } from '../../_NavigationBar/NavigationBarPresentation.js';
import { NavigationBlockPresentation } from '../../_NavigationBlock/shared/NavigationBlockPresentation.js';
import { NavigationSeparatorPresentation } from '../../_NavigationSeparator/NavigationSeparatorPresentation.js';
import { hostClass } from './PortalHeader.styles.js';
import { isPreferReducedMotion } from '../../../utils/Hooks/animation.js';

// @ts-strict-ignore
const findPathRecursive = (navigationTree, value) => {
    const item = navigationTree.find(i => i.name === value);
    if (item) {
        return [item];
    }
    return navigationTree
        .map(i => {
        if (i.children) {
            const childResult = findPathRecursive(i.children, value);
            if (childResult) {
                return [i].concat(childResult);
            }
        }
        return undefined;
    })
        .find(Boolean);
};
/**
 * Finds the path for a given value (like an id) for an item in the given navigation
 * tree and its sub children
 */
const findPath = (navigationTree, value) => {
    if (value === undefined) {
        return;
    }
    return findPathRecursive(navigationTree, value) || [];
};
const Div = fRef(({ ref, ...props }) => React__default.createElement("div", { ...props, ref: ref }));
const Nav = ({ label, children }) => (label ? React__default.createElement("nav", { "aria-label": label },
    " ",
    children,
    " ") : children);
const PortalHeaderPresentation = ({ id, className, noMargin, isStencilHost, navigationTree: navigationTreeProp, navigationAriaLabel, navigationActionAs, segmentNavigationTree, segmentNavigationAriaLabel, value, onChange = () => { }, segmentValue, onSegmentChange = () => { }, name, iconLinksInteraction, iconLinksInteractionAriaLabel, iconLinksQuickLink, iconLinksMobileHeader, iconLinksMobileSidebar, isSticky, segmentLabel, logoSrcMobile, logoSrcDesktop, logoHref, logoName, logoLabel = texts.lsg.component.Logo.actionHome, logoHtmlAttrs, logoDisabled, logoActionAs, logoActionProps, onLogoClick, onMobileMenuClick, menuFlyoutAriaLabel, }) => {
    // navigational elements
    const activeElementRef = useRef(undefined);
    const activeSubmenuElementRef = useRef(undefined);
    const activeMobileElementRef = useRef(undefined);
    const activeMobileSubmenuElementRef = useRef(undefined);
    const navigationBarElementRef = useRef(undefined);
    const mobileMenuLinkElementRef = useRef(undefined);
    const mobileOpenMenuButtonRef = useRef(undefined);
    /**
     * undefined = nothing open
     * "" = mobile menu open
     * value = submenu flyout is open
     */
    const [openValue, setOpenValue] = useState();
    const prevOpenValue = usePrevious(openValue);
    // https://stackoverflow.com/questions/46240647/how-to-force-a-functional-react-component-to-render/53837442#53837442
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const [forceMobile, setForceMobile] = useState(false);
    // distinguish viewport size for menu layer sizing, see f() = setLayerSize further below
    // const isMobileViewport = useViewportRange(undefined, "md");
    const viewport = useViewport();
    const isMobile = forceMobile || ["xs", "sm", "md"].includes(viewport); // xs, sm md considered as mobile view in previous implementation
    const [selectedPath, setSelectedPath] = useState([]);
    const [scrollPosition, setScrollPosition] = useState();
    const navigationTree = useMemo(() => getNamedNavigationTree(navigationTreeProp), [navigationTreeProp]);
    const openPath = findPath(navigationTree, openValue);
    const prevOpenPath = findPath(navigationTree, prevOpenValue);
    const mobileMenuOpen = openValue === "";
    const [iconLinkPressedOrClicked, setIconLinkPressedOrClicked] = useState(false);
    const setLayerSize = (vp, mobil) => {
        // based on spec https://neugelb.atlassian.net/wiki/spaces/BR/pages/40110407/Flyout+Spec+Design+5.0
        if (mobil) {
            switch (vp) {
                case "xs":
                    return "layer-full";
                case "sm":
                case "md":
                    return "layer-right-75";
                // case "xl": currently set to tbd in spec
                default:
                    return "layer-right"; // at the moment for l and xl version means 50%
            }
        }
        return "mega-menu";
    };
    // transition through submenu pages in mobile menu
    const { transitionState } = useTransitionState(isMobile && findPath(navigationTree, openValue)?.length > 0, animationDuration.slower);
    const logoId = useUniqueId(`${hostClass}-logo`, id && `${id}-logo`);
    const defaultLogoLabel = logoSrcMobile || logoSrcDesktop ? texts.lsg.component.Logo.actionHome : texts.lsg.component.Logo.actionCoba;
    /**
     * Creates Refs for all menu buttons, based on the given navigation tree.
     *
     * The refs are placed in a 3-dimensional array and can be accessed like
     * menuItemsRefs[indexOfNavigationBarItem][indexOfGroupInFlyout][indexOfElementInGroup]
     *
     * That way you can "easily" manage the focus for the buttons.
     */
    const menuItemsRefs = useMemo(() => navigationTree?.map(flyoutCategory => flyoutCategory.children
        ? flyoutCategory.children?.map(({ children = [], ...groupHeadlineItem }) => [groupHeadlineItem, ...children].map(_menuItem => React__default.createRef()))
        : [[React__default.createRef()]]), [navigationTree]);
    const mobileSubMenuNavigationBlockRef = useRef(undefined);
    /**
     * Function that focusses the first menu button (mobile) or first button in flyout (desktop)
     */
    const setFocusAfterOpening = () => {
        if (isMobile) {
            // Mobile:  focus very first button
            menuItemsRefs[0][0][0]?.current?.focus({ preventScroll: true });
        }
        else {
            // Desktop: Determine the index of the currently opened submenu menu flyout and focus the first button
            const openedFlyout = navigationTree.find(item => item.name === openValue);
            if (openedFlyout?.children) {
                const button = menuItemsRefs[navigationTree.indexOf(openedFlyout)][0][0].current;
                button?.focus();
            }
        }
    };
    const previousValue = usePrevious(value);
    useEffect(() => {
        setSelectedPath(findPath(navigationTree, value));
        // close menu when value changes. This is useful for react router, that cannot trigger and onClick.
        if (previousValue !== value && openPath !== undefined) {
            setTimeout(() => {
                setOpenValue(undefined);
            }, isPreferReducedMotion() ? 0 : animationDuration.slowest);
        }
    }, [value]);
    /** Place Focus on mobile Menu button, after mobile menu has been closed */
    useEffect(() => {
        if (openValue === undefined && isMobile && iconLinkPressedOrClicked) {
            mobileOpenMenuButtonRef.current.focus();
        }
    }, [openValue, iconLinkPressedOrClicked]);
    /** Close menu when switching from mobile to desktop if no specific submenu is opened.
     * This prevents an empty flyout. */
    useEffect(() => {
        if (mobileMenuOpen) {
            setOpenValue(undefined);
        }
    }, [isMobile]);
    useEffect(() => {
        // render twice to update indicator
        setTimeout(() => {
            forceUpdate();
        }, 10);
    }, [selectedPath, openValue, isMobile]);
    const onHeaderClick = e => {
        if (!isTargetInsideContainer(e.target, navigationBarElementRef.current) &&
            !isTargetInsideContainer(e.target, mobileMenuLinkElementRef.current)) {
            setOpenValue(undefined);
        }
    };
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
        }), isStencilHost: isStencilHost, onFocus: () => {
            if (document.documentElement.getAttribute("data-whatinput") === "keyboard") {
                window.scrollTo({
                    top: 0,
                    left: 0,
                });
            }
        }, "data-lsg-component": "portal-header" },
        React__default.createElement(React__default.Fragment, null,
            React__default.createElement(HeaderContainerWrapper, { width: "page", theme: "dark", activeElement: activeElementRef.current, isFullUnderline: false, isMobile: isMobile, hasOpenFlyout: openPath !== undefined && !isMobile, position: isSticky ? "fixed" : undefined, onScrollChangeCallback: s => setScrollPosition(s), onForceMobileChange: onForceMobileValue => setForceMobile(onForceMobileValue), logo: React__default.createElement(LogoPresentation, { id: logoId, scrollPosition: scrollPosition, variant: isMobile ? "mobile" : "vertical", disabled: logoDisabled, href: logoHref, actionAs: logoActionAs, actionProps: logoActionProps, onClick: onLogoClick, logoLabel: logoLabel || defaultLogoLabel, srcCustom: isMobile ? logoSrcMobile : logoSrcDesktop, fitToBox: true, logoName: logoName, 
                    // if this link is the currently opened page, set aria-current to page
                    htmlAttrs: logoName === value ? { ...logoHtmlAttrs, "aria-current": "page" } : logoHtmlAttrs }), onClick: onHeaderClick, segmentLabel: segmentLabel, topLeft: !isMobile &&
                    segmentNavigationTree && (React__default.createElement(NavigationBarPresentation, { size: "segment-bar", navigationTree: segmentNavigationTree, navigationActionAs: navigationActionAs, navigationAriaLabel: segmentNavigationAriaLabel, value: segmentValue, onChange: (v, e) => {
                        onSegmentChange(v, name, e);
                    } })), topRightAriaLabel: !isMobile
                    ? // on desktop: label for icon links
                        iconLinksInteraction && iconLinksInteractionAriaLabel
                    : // on mobile (with closed menu): main label
                        openValue === undefined && navigationAriaLabel, topRight: React__default.createElement(Div, { ref: mobileMenuLinkElementRef, className: `${hostClass}-top-right` },
                    React__default.createElement(IconLinkGroupWrapper, { noMargin: true, direction: "collapse-sm" },
                        isMobile ? iconLinksMobileHeader : iconLinksInteraction,
                        isMobile && ( // mobile open menu button
                        React__default.createElement(IconLinkWrapper, { label: texts.lsg.component.PortalHeader.openMenu, icon: interaction___menu, appearance: "no-text", actionRef: mobileOpenMenuButtonRef, onClick: event => {
                                if (onMobileMenuClick) {
                                    onMobileMenuClick(event, name);
                                }
                                setOpenValue("");
                            }, expanded: false })))), bottomLeft: !isMobile && (React__default.createElement(Div, { ref: navigationBarElementRef },
                    React__default.createElement(NavigationBarPresentation, { navigationTree: navigationTree, navigationAriaLabel: navigationAriaLabel, navigationActionAs: navigationActionAs, value: openPath?.[0]?.name || selectedPath?.[0]?.name, expandedValue: openValue, activeValue: selectedPath?.[selectedPath.length - 1]?.name, onChange: (v, e) => {
                            // if there are children, open the flyout
                            if (navigationTree.find(item => item.name === v)?.children) {
                                // if new value is the same as before, it means the user clicked on the same menu element again.
                                // we therefore close the menu by setting openValue to undefined
                                setOpenValue(v === prevOpenValue ? undefined : v);
                            }
                            else {
                                onChange(v, name, e);
                            }
                        }, activeRef: activeElementRef }))), bottomRight: !isMobile && React__default.createElement(IconLinkGroupWrapper, { noMargin: true }, iconLinksQuickLink) }),
            React__default.createElement(ThemePresentation, { componentContext: true, componentName: "header" },
                React__default.createElement(DrawerPresentation, { open: openPath !== undefined, 
                    // layout={isMobile ? "layer-right" : "mega-menu"}
                    layout: setLayerSize(viewport, isMobile), onBackdropClick: () => setOpenValue(undefined), autoFocus: false, onFocusLockActivation: () => {
                        /* The focus needs to go to the first menu entry, but FocusLock calls this function
                         *  just before the DOM is updated :/. setTimeout with 0s will be executed after the next
                         *  render */
                        setTimeout(setFocusAfterOpening, 0);
                    }, ariaLabel: menuFlyoutAriaLabel },
                    React__default.createElement(Nav, { label: isMobile && navigationAriaLabel },
                        isMobile && (React__default.createElement(HeaderContainerWrapper, { width: "layer", theme: "elevated", noSemanticElements: true, isMobile: isMobile, topLeft: openPath?.length > 0 && (React__default.createElement(IconLinkGroupWrapper, { noMargin: true },
                                React__default.createElement(IconLinkWrapper, { label: texts.lsg.component.PortalHeader.backMenu, icon: interaction_arrows_chevronLeft, onClick: () => setOpenValue("") }))), topRight: 
                            // mobile close menu button
                            React__default.createElement(IconLinkGroupWrapper, { noMargin: true },
                                React__default.createElement(IconLinkWrapper, { label: texts.lsg.component.PortalHeader.closeMenu, icon: interaction___close, onClick: () => {
                                        setIconLinkPressedOrClicked(true); // triggered by clicking or pressing Enter on Icon, necessary for focus outline placement back on Burger Menu in case of Key use
                                        setOpenValue(undefined);
                                    }, appearance: "no-text", expanded: true })) })),
                        isMobile && (React__default.createElement(SectionPresentation, { as: "div" },
                            React__default.createElement("div", { className: cleanupClassObject({
                                    [`${hostClass}-whole-menu-container`]: true,
                                }) },
                                React__default.createElement("div", { style: { visibility: transitionState.entered ? "hidden" : "visible" }, className: cleanupClassObject({
                                        [`${hostClass}-menu-mobile`]: true,
                                        [`${hostClass}-top-menu-mobile${transitionState.entering || transitionState.entered ? "-left" : ""}`]: true,
                                    }) },
                                    React__default.createElement(NavigationBlockPresentation, { navigationTree: navigationTree.map(({ children: _, ...n }) => n), navigationActionAs: navigationActionAs, expandAll: true, alwaysShowIndicator: true, onChange: (v, e) => {
                                            if (navigationTree.find(item => item.name === v)?.children) {
                                                setOpenValue(v);
                                                setTimeout(() => 
                                                // set the focus to the newly opened NavigationBlocks's first element
                                                mobileSubMenuNavigationBlockRef?.current?.focusFirstElement(), 0);
                                            }
                                            else {
                                                onChange(v, name, e);
                                                setOpenValue(undefined);
                                            }
                                        }, value: openPath?.[0]?.name || selectedPath?.[0]?.name, activeRef: activeMobileElementRef, activeElement: activeMobileElementRef.current, buttonRefs: menuItemsRefs?.[0]?.[0] }),
                                    React__default.createElement(NavigationSeparatorPresentation, null),
                                    React__default.createElement(IconLinkGroupWrapper, { direction: "vertical" }, iconLinksMobileSidebar),
                                    segmentNavigationTree && (React__default.createElement(React__default.Fragment, null,
                                        React__default.createElement(NavigationSeparatorPresentation, null),
                                        React__default.createElement(NavigationBlockPresentation, { navigationTree: segmentNavigationTree, expandAll: true, startLevel: "segment", value: segmentValue, onChange: (v, e) => {
                                                onSegmentChange(v, name, e);
                                            }, groupsAlwaysHighlighted: true })))),
                                React__default.createElement("div", { className: cleanupClassObject({
                                        [`${hostClass}-menu-mobile`]: true,
                                        [`${hostClass}-sub-menu-mobile${transitionState.entering || transitionState.entered ? "-left" : ""}`]: true,
                                    }) }, !transitionState.exited && !transitionState.unmounted && (React__default.createElement(React__default.Fragment, null,
                                    navigationTree.map((item, i) => 
                                    // Mobile submenu (aka "groups in Flyout" on Desktop)
                                    item.children && (React__default.createElement(NavigationBlockPresentation, { key: item.name || i, navigationTree: item.children, navigationActionAs: navigationActionAs, expandAll: true, startLevel: "group", onChange: (v, e) => {
                                            // TODO check if leaf node
                                            onChange(v, name, e);
                                            setOpenValue(undefined);
                                        }, value: value, activeRef: activeMobileSubmenuElementRef, activeElement: activeMobileSubmenuElementRef.current, style: transitionState.exiting
                                            ? {
                                                display: prevOpenPath?.slice(-1)?.[0]
                                                    ?.name === item.name
                                                    ? "block"
                                                    : "none",
                                            }
                                            : {
                                                display: openPath?.slice(-1)?.[0]?.name ===
                                                    item.name
                                                    ? "block"
                                                    : "none",
                                            }, ref: 
                                        // set the ref only to the currently opened NavigationBlock (logic stolen from style property above..)
                                        (transitionState.exiting &&
                                            prevOpenPath?.slice(-1)?.[0]?.name) ||
                                            (!transitionState.exiting &&
                                                openPath?.slice(-1)?.[0]?.name ===
                                                    item.name)
                                            ? mobileSubMenuNavigationBlockRef
                                            : undefined, groupsAlwaysHighlighted: true }))),
                                    segmentNavigationTree && (React__default.createElement(React__default.Fragment, null,
                                        React__default.createElement(NavigationSeparatorPresentation, null),
                                        React__default.createElement(NavigationBlockPresentation, { navigationTree: segmentNavigationTree, navigationActionAs: navigationActionAs, expandAll: true, startLevel: "group", value: segmentValue, onChange: (v, e) => {
                                                onSegmentChange(v, name, e);
                                            }, groupsAlwaysHighlighted: true }))))))))),
                        !isMobile && (React__default.createElement(React__default.Fragment, null,
                            React__default.createElement("div", { className: `${hostClass}-flyout-close` },
                                React__default.createElement("div", { className: `${hostClass}-flyout-close-link` },
                                    React__default.createElement(IconLinkGroupWrapper, { noMargin: true },
                                        React__default.createElement(IconLinkWrapper, { label: texts.lsg.component.PortalHeader.closeMenu, appearance: "no-text", icon: interaction___close, onClick: () => setOpenValue(undefined) })))),
                            React__default.createElement(SectionPresentation, { as: "div", spacing: "side-navigation-page" },
                                React__default.createElement(GridPresentation, null, navigationTree.map((item, i) => (React__default.createElement("ul", { className: getGridRowClasses({}), style: {
                                        display: openPath?.[0]?.name === item.name ? "flex" : "none",
                                    }, key: item.name || i }, item?.children?.map((navigation, x) => (
                                // each subsection in a flyout
                                React__default.createElement(GridColumnPresentation, { as: "li", key: navigation.name, size: Math.floor(12 / item.children.length) },
                                    React__default.createElement(NavigationBlockPresentation, { navigationTree: [navigation], navigationActionAs: navigationActionAs, expandAll: true, noIndent: true, startLevel: "group", onChange: (v, e) => {
                                            onChange(v, name, e);
                                            setOpenValue(undefined);
                                        }, value: value, activeRef: activeSubmenuElementRef, activeElement: selectedPath?.[1]?.name === navigation.name
                                            ? activeSubmenuElementRef.current
                                            : undefined, groupsAlwaysHighlighted: true, onKeyDownHandlers: {
                                            /** Move focus to the left column or the last */
                                            arrowLeft: currentIndex => {
                                                const columLeftNextToMe = menuItemsRefs[i][x - 1];
                                                const lastColumn = menuItemsRefs[i][menuItemsRefs[i].length - 1];
                                                const columnToUse = x === 0 ? lastColumn : columLeftNextToMe;
                                                columnToUse[
                                                // try to focus the element with the same index
                                                Math.min(currentIndex, columnToUse.length - 1)].current.focus();
                                            },
                                            /** Move focus to the element above or close the flyout if it's the first */
                                            arrowUp: currentIndex => {
                                                if (currentIndex === 0) {
                                                    setOpenValue(undefined);
                                                }
                                                else {
                                                    menuItemsRefs[i][x][currentIndex - 1].current.focus();
                                                }
                                            },
                                            /** Move focus to the right column or the first */
                                            arrowRight: currentIndex => {
                                                const allColumns = menuItemsRefs[i];
                                                const columnRightOrFirst = menuItemsRefs[i][(x + 1) % allColumns.length];
                                                columnRightOrFirst[
                                                // try to focus the element with the same index
                                                Math.min(currentIndex, columnRightOrFirst.length - 1)].current.focus();
                                            },
                                            /** Move focus to the element below or the first element */
                                            arrowDown: currentIndex => {
                                                const thisColumn = menuItemsRefs[i][x];
                                                thisColumn[(currentIndex + 1) % thisColumn.length].current.focus();
                                            },
                                        }, buttonRefs: menuItemsRefs[i][x] })))))))))))))))));
};
PortalHeaderPresentation.displayName = "PortalHeaderPresentation";

export { PortalHeaderPresentation };

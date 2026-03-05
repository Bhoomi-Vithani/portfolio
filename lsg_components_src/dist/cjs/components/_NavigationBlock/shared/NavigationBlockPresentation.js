'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var DomUtils = require('../../../utils/DomUtils.js');
var Keys = require('../../../utils/Keys.js');
var IconLinkWrapper = require('../../IconLink/shared/IconLinkWrapper.js');
var ParagraphPresentation = require('../../Paragraph/shared/ParagraphPresentation.js');
var IndicatorWrapper = require('../../_Indicator/shared/IndicatorWrapper.js');
var NavigationItemWrapper = require('../../_NavigationItem/NavigationItemWrapper.js');
var NavigationBlock_styles = require('./NavigationBlock.styles.js');

// @ts-strict-ignore
const Level = ({
  navigation,
  level,
  value,
  activeRef,
  isProcessNavigation,
  onChange,
  openObject,
  onOpenObjectChange,
  expandAll,
  navigationActionAs,
  groupsAlwaysHighlighted,
  onKeyDownHandlers,
  buttonRefs
}) => {
  const successorLevel = level === "topic" ? "group" : "page";
  const ListContainer = navigation?.length > 1 ? "ul" : "div";
  const ListItem = navigation?.length > 1 ? "li" : "div";
  return /*#__PURE__*/React__default.createElement(ListContainer, {
    className: DomUtils.cleanupClassObject({
      [`${NavigationBlock_styles.mainClass}-group`]: true,
      [`${NavigationBlock_styles.mainClass}__page-group`]: level === "page"
    }),
    style: {
      position: "relative"
    }
  }, navigation.map(({
    children,
    ...n
  }) => {
    const emptyIcon = () => '<svg width="24" height="24" />';
    emptyIcon.iconName = "emptyIcon";
    const icon = n.name === value && icons.interaction___dashShort || n.completed && icons.interaction___checkmark || emptyIcon;
    const onClick = e => {
      // Because of a11y, we need to prevent default action on click if the button is disabled  but we
      // still want to allow keyboard navigation (tabbing) so screen readers can read the link
      // instead, we set aria-disabled to true. This pattern was proposed by Mindscreen.
      if (isProcessNavigation && n.disabled && !(n.collapsible && children?.length > 0)) {
        e.preventDefault();
        return;
      }
      if (n.collapsible && !n.active && !expandAll) {
        onOpenObjectChange({
          ...openObject,
          [n.name]: !openObject[n.name]
        });
      }
      if (!n.collapsible) onChange(n.name, e);
      if (n.onClick) n.onClick(e, n.name);
    };
    /**
     * Indicates if children are rendered.
     * This must be the same mechanism as in flattenChildren() below, so that rendered items match the
     * indexed items.
     *
     * Todo (Heiko): What is the sense of defaultOpen? From my perspective it should initiate the open/close state of collapsible nodes
     * But this is not done in NavigationBlockWrapper
     *
     * It should be:
     *     const isOpen = expandAll || navItem.collapsible && navItem.defaultOpen || !!openObject[navItem.name] || navItem.active || navItem.open;
     * And open state should be initialized by defaultOpen.
     */
    const isOpen = expandAll || n.defaultOpen || !!openObject[n.name] || n.active || n.open;
    const isCurrentPage = value === n.name;
    const htmlAttrs = n.htmlAttrs || {};
    if (isCurrentPage) {
      // if this link is the currently opened page, set aria-current to true
      htmlAttrs["aria-current"] = "true";
    }
    if (isProcessNavigation) {
      // For process navigation (sidebarnavi) we have the requirement that all steps are selectable by
      // keyboard (have a tab index) but are aria-disabled (instead of disabled)
      if (n.disabled) {
        htmlAttrs["aria-disabled"] = "true";
      }
      if (children) {
        // if this is a process navigation item with children, we need to set aria-expanded to true or
        // false depending on whether the children are open or not
        htmlAttrs["aria-expanded"] = isOpen ? "true" : "false";
      }
    }
    htmlAttrs["data-lsg-nav-level"] = level;
    return (
      /*#__PURE__*/
      // This is only an additional interaction. The main interaction (tabbing and enter) remains on the
      // IconLink button and is therefore accessible,
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      React__default.createElement(ListItem, {
        key: n.name,
        /** keyboard navigation via arrow keys */
        onKeyDown: e => {
          const keyFunction = {
            [Keys.Key.ArrowRight]: onKeyDownHandlers.arrowRight && (() => onKeyDownHandlers.arrowRight(n.index, e)),
            [Keys.Key.ArrowDown]: onKeyDownHandlers.arrowDown && (() => onKeyDownHandlers.arrowDown(n.index, e)),
            [Keys.Key.ArrowLeft]: onKeyDownHandlers.arrowLeft && (() => onKeyDownHandlers.arrowLeft(n.index, e)),
            [Keys.Key.ArrowUp]: onKeyDownHandlers.arrowUp && (() => onKeyDownHandlers.arrowUp(n.index, e)),
            [Keys.Key.Escape]: onKeyDownHandlers.escape && (() => onKeyDownHandlers.escape(n.index, e))
          }[e.key];
          if (keyFunction) {
            e.stopPropagation(); // don't bubble the event up
            e.preventDefault(); // e.eg. prevent scrolling
            keyFunction();
          }
        }
      }, level === "page" ? (
      /*#__PURE__*/
      // eslint-disable-next-line react/jsx-no-useless-fragment
      React__default.createElement(React__default.Fragment, null, isProcessNavigation ? (/*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
        className: DomUtils.cleanupClassObject({
          [`${NavigationBlock_styles.mainClass}-process-navigation-item`]: true,
          [`${NavigationBlock_styles.mainClass}-process-navigation-item__disabled`]: n.disabled,
          [`${NavigationBlock_styles.mainClass}-process-navigation-item__collapsible`]: n.collapsible && children?.length > 0
        }),
        ...n,
        label: n.label,
        /** needed for button */
        // actionRef={buttonRefs.current[i]}
        actionRef: buttonRefs?.[n.index],
        /** needed for Indicator */
        innerRef: value === n.name ? activeRef : undefined,
        color: !n.disabled ? "primary" : "secondary",
        iconColor: n.name === value ? "secondary" : undefined,
        onClick: onClick,
        actionProps: n.actionProps,
        actionAs: n.actionAs || navigationActionAs,
        icon: icon,
        href: n.disabled ? undefined : n.href,
        disabled: false,
        htmlAttrs: htmlAttrs
      })) : (/*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
        ...n,
        label: n.label,
        /** needed for button */
        actionRef: buttonRefs?.[n.index],
        /** needed for Indicator */
        innerRef: value === n.name ? activeRef : undefined,
        color: !n.active ? "secondary" : "primary",
        iconColor: n.name === value ? "primary" : undefined,
        onClick: onClick,
        actionProps: n.actionProps,
        actionAs: n.actionAs || navigationActionAs,
        htmlAttrs: htmlAttrs
      })))) : (/*#__PURE__*/React__default.createElement(NavigationItemWrapper.NavigationItemWrapper, {
        ...n,
        level: level,
        role: children ? "group" : undefined,
        expanded: children ? isOpen : undefined,
        secondary: !n.active && !(groupsAlwaysHighlighted && (level === "group" || level === "segment")),
        onClick: onClick,
        /** needed for button */
        actionRef: buttonRefs?.[n.index],
        /** needed for Indicator */
        innerRef: value === n.name ? activeRef : undefined,
        actionProps: n.actionProps,
        actionAs: n.actionAs || navigationActionAs,
        htmlAttrs: htmlAttrs
      }, n.label)), children && isOpen && (/*#__PURE__*/React__default.createElement(Level, {
        navigation: children,
        level: successorLevel,
        value: value,
        activeRef: activeRef,
        isProcessNavigation: isProcessNavigation,
        onChange: onChange,
        openObject: openObject,
        onOpenObjectChange: onOpenObjectChange,
        expandAll: expandAll,
        navigationActionAs: navigationActionAs,
        groupsAlwaysHighlighted: groupsAlwaysHighlighted,
        buttonRefs: buttonRefs?.slice(0),
        onKeyDownHandlers: onKeyDownHandlers
      })))
    );
  }));
};
const reducer = value => (acc, item) => {
  const children = item.children?.reduce(reducer(value), []);
  const active = children?.some(child => child.active) || value === item.name;
  return [...acc, {
    ...item,
    children,
    active
  }];
};
const getActiveItemLevel = (items, level = 0) => {
  const item = items.find(i => i.active);
  if (item) {
    return item.children ? getActiveItemLevel(item.children, level + 1) : level + 1;
  }
  return level;
};
/**
 * Reducer function that collects all navigationItems and their opened children
 * from a navigation Tree into a single flat array. Closed children are ommited.
 */
function flattenChildren(resultArr, navItem, {
  expandAll,
  openObject
}) {
  resultArr.push(navItem);
  /**
   * Indicates if children are open.
   * This must be the same mechanism as in Level Component, so that indexed items match the rendered items
   *
   * Todo (Heiko): What is the sense of defaultOpen? From my perspective it should initiate the open/close state of collapsible nodes
   * But this is not done in NavigationBlockWrapper
   *
   * It should be:
   *     const isOpen = expandAll || navItem.collapsible && navItem.defaultOpen || !!openObject[navItem.name] || navItem.active || navItem.open;
   * And open state should be initialized by defaultOpen.
   */
  const isOpen = expandAll || navItem.defaultOpen || !!openObject[navItem.name] || navItem.active || navItem.open;
  if (isOpen && navItem.children) {
    // recursively call this function on children and push the results to the results array
    resultArr.push(...navItem.children.reduce((res, item) => flattenChildren(res, item, {
      expandAll,
      openObject
    }), []));
  }
  return resultArr;
}
const NavigationBlockPresentation = /*#__PURE__*/React__default.forwardRef(({
  navigationTree,
  navigationActionAs,
  clusterLabel,
  startLevel = "topic",
  value,
  activeRef,
  activeElement,
  isProcessNavigation,
  onChange = () => {
    /* empty */
  },
  openObject,
  onOpenObjectChange,
  expandAll,
  noIndent,
  style,
  alwaysShowIndicator,
  groupsAlwaysHighlighted = false,
  onKeyDownHandlers: onKeyDownHandlersProp = {},
  buttonRefs: buttonRefsProp,
  containerAs,
  navigationAriaLabel
}, ref) => {
  const navigationTreeInternal = navigationTree.reduce(reducer(value), []);
  const buttonRefs = buttonRefsProp || [];
  // collect all navigationItems (and all their opened children and so on) in a single flat array. Closed children are ommited.
  const navItemsOrdered = navigationTreeInternal.reduce((result, navItem) => flattenChildren(result, navItem, {
    expandAll,
    openObject
  }), []);
  // add the index to each navItem and create a ref
  navItemsOrdered.forEach((navItem, i) => {
    // we are working on a copy here
    // eslint-disable-next-line no-param-reassign
    navItem.index = i;
    if (!buttonRefsProp) {
      buttonRefs.push(/*#__PURE__*/React__default.createRef());
    }
  });
  const activeItemLevel = getActiveItemLevel(navigationTreeInternal) || 0;
  const onKeyDownHandlers = {
    /** Move focus to the element above or the last element */
    arrowUp: currentIndex => {
      if (currentIndex === 0) {
        buttonRefs[buttonRefs.length - 1].current.focus();
      } else {
        buttonRefs[currentIndex - 1].current.focus();
      }
    },
    /** Move focus to the element below or the first element */
    arrowDown: currentIndex => {
      if (currentIndex === buttonRefs.length - 1) {
        buttonRefs[0].current.focus();
      } else {
        buttonRefs[currentIndex + 1].current.focus();
      }
    },
    ...onKeyDownHandlersProp
  };
  const indicatorOffsetIndent = Math.max({
    topic: -3,
    group: -2,
    page: -1
  }[startLevel] + activeItemLevel, -1);
  const showIndicator = indicatorOffsetIndent >= 0 || alwaysShowIndicator;
  const indicatorOffset = noIndent ? -1 : indicatorOffsetIndent;
  const Container = containerAs || "div";
  React__default.useImperativeHandle(ref, () => ({
    focusFirstElement: () => {
      // prevent scroll, because this function is probably executed while an animation is in progress
      buttonRefs?.[0].current?.focus({
        preventScroll: true
      });
    }
  }), []);
  return /*#__PURE__*/React__default.createElement(Container, {
    className: DomUtils.cleanupClassObject({
      [NavigationBlock_styles.mainClass]: true,
      [`${NavigationBlock_styles.mainClass}__process`]: isProcessNavigation,
      [`${NavigationBlock_styles.mainClass}__indent`]: !noIndent
    }),
    "aria-label": navigationAriaLabel,
    style: style
  }, !isProcessNavigation && showIndicator && (/*#__PURE__*/React__default.createElement(IndicatorWrapper.IndicatorWrapper, {
    direction: "vertical",
    activeElement: showIndicator ? activeElement : undefined,
    noAnimation: !showIndicator,
    translateOrthogonal: indicatorOffset * 16
  })), clusterLabel && (/*#__PURE__*/React__default.createElement(ParagraphPresentation.ParagraphPresentation, {
    className: `${NavigationBlock_styles.mainClass}__cluster-item`,
    size: "helper-text",
    noMargin: true
  }, clusterLabel)), /*#__PURE__*/React__default.createElement(Level, {
    navigation: navigationTreeInternal,
    level: startLevel,
    value: value,
    activeRef: activeRef,
    isProcessNavigation: isProcessNavigation,
    onChange: onChange,
    openObject: openObject,
    onOpenObjectChange: onOpenObjectChange,
    expandAll: expandAll,
    navigationActionAs: navigationActionAs,
    groupsAlwaysHighlighted: groupsAlwaysHighlighted,
    onKeyDownHandlers: onKeyDownHandlers,
    buttonRefs: buttonRefs
  }));
});
NavigationBlockPresentation.displayName = "NavigationBlockPresentation";

exports.NavigationBlockPresentation = NavigationBlockPresentation;

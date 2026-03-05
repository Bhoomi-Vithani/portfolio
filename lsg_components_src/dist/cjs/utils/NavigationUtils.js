'use strict';

/**
 * Recursive function that adds a name field (if missing) to the given navigation tree items and all their children
 */
const getNamedNavigationTree = (navigationTree, path = "") => navigationTree.map((n, i) => ({
  ...n,
  name: n.name || `${path}${i}`,
  children: n.children ? getNamedNavigationTree(n.children, `${path}${i}-`) : undefined
}));
const navigationIdSeparator = "_-_"; // DONT USE DOTS/COLONS! (they will break querySelector) - Remaining valid characters are: - _
const regExpEscape = s => s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
// this function sets ids like id[0][1][4] to each item in the navigationObject
// you can still set custom ids on each item of the navigationObject or give the whole SideNavigation a custom id so ids look like customId[][]...
// if no id is set, generated uuid will be used
function deepGenerateNavObject(navigationObject, id, path = "") {
  return navigationObject.map((item, i) => {
    const {
      children,
      ...rest
    } = item;
    const currentPath = `${path}${navigationIdSeparator}${i}`;
    const test = index => Array.isArray(currentPath.match(`^(${regExpEscape(navigationIdSeparator)}\\d*){${index}}$`));
    let lvl = 0;
    do {
      lvl += 1;
    } while (!test(lvl));
    return {
      ...rest,
      id: rest.id || `${id}${currentPath}`,
      path: currentPath,
      key: rest.id || `${id}${currentPath}`,
      item: i,
      level: lvl,
      children: Array.isArray(children) && !!children.length ? deepGenerateNavObject(children, id, currentPath) : undefined
    };
  });
}
// this flattens the navigationObject to one array - used to easily filter for open or active items
function deepFlatten(navigationObject) {
  return navigationObject ? navigationObject.reduce((result, current) => [...result, current, ...deepFlatten(current.children)].filter(item => item !== undefined), []) : [];
}
// checks if the selected value in a navigationObject, searched by it's name, has children. Returns true or false
function hasItemChildren(item, navTree) {
  for (const i of navTree) {
    if (i.name === item && i.children) {
      return true;
    }
    if (i.name === item && !i.children) {
      return false;
    }
    if (i.children) {
      return hasItemChildren(item, i.children);
    }
  }
}

exports.deepFlatten = deepFlatten;
exports.deepGenerateNavObject = deepGenerateNavObject;
exports.getNamedNavigationTree = getNamedNavigationTree;
exports.hasItemChildren = hasItemChildren;

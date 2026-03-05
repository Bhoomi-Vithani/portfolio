'use strict';

var icons = require('@lsg/icons');
var LsgConsole = require('./LsgConsole.js');

// @ts-strict-ignore
const mapTree = (tree, isLogin, isFk) => {
  const classes = (tree.class || "").split(" ").filter(x => !!x);
  const {
    url,
    id,
    text,
    newColumn,
    noMobile,
    children = [],
    params = "",
    target,
    targetParams
  } = tree;
  const result = {
    href: url + params,
    targetValue: id,
    label: text,
    newColumn,
    children: children.map(child => mapTree(child, isLogin, isFk)),
    target: target === "_blank" && "coba",
    noMobile: noMobile || classes.includes("u-no-mobile"),
    isTileGroup: classes.includes("iconTiles"),
    tileSize: classes.includes("tl-01") && 1 || classes.includes("tl-02") && 2,
    hideMenuItem: classes.includes("toggleArea"),
    inFooter: tree.inFooter ? tree.inFooter.replace(" ", "").split(",") : []
  };
  if (target === "window") {
    const p = targetParams.split(",");
    result.onClick = () => window.open(result.href, tree.id, `height=${p[0]}, width=${p[1]}`);
  }
  // explicitly check for false (undefined should be the same as true)
  let hasProtectedIcon = tree.public === false && !isLogin && !classes.includes("noSecureIcon");
  if (isFk && isLogin) {
    // explicitly check for false (undefined should be the same as true)
    hasProtectedIcon = tree.hasPermission === false;
  }
  if (hasProtectedIcon) {
    result.icon = icons.object___lock;
  }
  return result;
};
const getSingleData = dataField => {
  let lsgAppData = null;
  try {
    lsgAppData = JSON.parse(document.getElementById(dataField).innerText);
  } catch {
    LsgConsole.warn("Can't read ", dataField);
  }
  return lsgAppData;
};
const getData = () => ["navigationData", "applicationData", "resourceBundleData", "frameworkData", "contentIncludesData"].reduce((acc, curr) => ({
  ...acc,
  [curr]: getSingleData(curr)
}), {});

exports.getData = getData;
exports.getSingleData = getSingleData;
exports.mapTree = mapTree;

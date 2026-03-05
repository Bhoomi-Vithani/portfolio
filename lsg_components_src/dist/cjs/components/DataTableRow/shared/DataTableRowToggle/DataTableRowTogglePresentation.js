'use strict';

var React__default = require('react');
var prefix = require('../../../../config/prefix.js');
var DomUtils = require('../../../../utils/DomUtils.js');
var Host = require('../../../../utils/Host.js');
var Localization = require('../../../../utils/Localization.js');
var DataTable_styles = require('../../../DataTable/shared/DataTable.styles.js');

// @ts-strict-ignore
const DataTableRowTogglePresentation = ({
  id,
  className,
  noMargin,
  as = "td",
  toggleAs,
  value,
  name,
  onChange,
  htmlAttrs,
  hasMouseHover,
  hasKeyboardFocus,
  onMouseHoverChange,
  onKeyboardFocusChange,
  isStencilHost,
  gridStructure,
  isFooter,
  isHeader,
  inputDisabled,
  inputHidden,
  inputType,
  cellRef
}) => {
  const ToggleComponent = toggleAs;
  const hiddenTableHeaderTitle = isHeader ? Localization.texts.lsg.component.DataTable.toggleColumnHeaderLabel : undefined;
  const style = {
    gridColumn: "1 / span 1",
    gridRow: `1 / span ${gridStructure.maxColLength}`
  };
  if (isFooter) {
    style.gridRow = "1 / span 1";
  }
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [`${DataTable_styles.hostClass}-${as}`]: as,
      [`${DataTable_styles.hostClass}-tx`]: true,
      [`${DataTable_styles.hostClass}-toggle`]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${DataTable_styles.hostClass}__has-top-margin`]: true,
      [`${DataTable_styles.hostClass}__first-column`]: true,
      [`${DataTable_styles.hostClass}-th__hidden`]: isHeader && inputHidden
    }),
    isStencilHost: isStencilHost,
    as: as,
    style: style,
    "aria-label": hiddenTableHeaderTitle,
    htmlAttrs: {
      // @ts-ignore
      scope: isHeader ? "col" : undefined
    },
    ref: cellRef
  }, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${DataTable_styles.hostClass}-checkbox`]: true,
      [`${DataTable_styles.hostClass}-tx-inner`]: true,
      [`${DataTable_styles.hostClass}__first-column`]: true
    })
  }, ToggleComponent && !inputHidden && (/*#__PURE__*/React__default.createElement(ToggleComponent, {
    noMargin: true,
    value: value,
    name: name,
    onChange: onChange,
    disabled: inputDisabled,
    id: id,
    htmlAttrs: htmlAttrs,
    hasMouseHover: hasMouseHover,
    onMouseHoverChange: onMouseHoverChange,
    hasKeyboardFocus: hasKeyboardFocus,
    onKeyboardFocusChange: onKeyboardFocusChange
  })), isHeader && !(inputType === "checkbox" && !inputHidden) && (/*#__PURE__*/React__default.createElement("span", null, `${Localization.texts.lsg.component.DataTable.toggleColumnHeaderLabel}`))));
};
DataTableRowTogglePresentation.displayName = "DataTableRowTogglePresentation";

exports.DataTableRowTogglePresentation = DataTableRowTogglePresentation;

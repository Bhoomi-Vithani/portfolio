'use strict';

var React__default = require('react');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var CheckboxPresentation = require('../../Checkbox/shared/CheckboxPresentation.js');
var DataTable_styles = require('../../DataTable/shared/DataTable.styles.js');
var DataTableRowTogglePresentation = require('../../DataTableRow/shared/DataTableRowToggle/DataTableRowTogglePresentation.js');
var LabelPresentation = require('../../_Label/LabelPresentation.js');

// @ts-strict-ignore
const DataTableSelectionFooterPresentation = ({
  id: idProp,
  className,
  // columnsPreprocessed,
  inputType,
  inputValue,
  onInputChange,
  inputName,
  label,
  actions,
  hasMouseHover,
  hasKeyboardFocus,
  onMouseHoverChange,
  onKeyboardFocusChange,
  gridStructure,
  inputHidden,
  inputDisabled
}) => {
  const id = index.useUniqueId(`${DataTable_styles.hostClass}-footer__selection-`, idProp);
  const hasToggleColumn = inputType === "checkbox" || inputType === "radio";
  const labelId = `${id}-label`;
  return /*#__PURE__*/React__default.createElement("tr", {
    className: DomUtils.cleanupClassObject({
      [`${DataTable_styles.hostClass}-tr`]: true
    }),
    id: id,
    style: gridStructure.tableRowStyles
  }, hasToggleColumn && (/*#__PURE__*/React__default.createElement(DataTableRowTogglePresentation.DataTableRowTogglePresentation, {
    id: `${id}-input`,
    as: "td",
    toggleAs: inputType === "checkbox" && CheckboxPresentation.CheckboxPresentation,
    value: inputValue,
    name: inputName,
    onChange: onInputChange,
    inputHidden: inputHidden,
    inputDisabled: inputDisabled,
    htmlAttrs: {
      "aria-labelledby": labelId
    },
    hasMouseHover: hasMouseHover,
    hasKeyboardFocus: hasKeyboardFocus,
    onMouseHoverChange: onMouseHoverChange,
    onKeyboardFocusChange: onKeyboardFocusChange,
    gridStructure: gridStructure,
    isFooter: true
  })), /*#__PURE__*/React__default.createElement("td", {
    className: DomUtils.cleanupClassObject({
      [`${DataTable_styles.hostClass}-tx`]: true,
      [`${DataTable_styles.hostClass}-td`]: true,
      [`${DataTable_styles.hostClass}__first-column`]: !hasToggleColumn,
      [`${DataTable_styles.hostClass}__last-column`]: true,
      [`${DataTable_styles.hostClass}__has-top-margin`]: true,
      [`${DataTable_styles.hostClass}__has-bottom-margin`]: true
    }),
    style: {
      gridColumn: `span ${gridStructure.gridHeaderCols.length}`
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [className]: className,
      [`${DataTable_styles.hostClass}-footer`]: true,
      [`${DataTable_styles.hostClass}-footer__selection`]: true,
      [`${DataTable_styles.hostClass}-tx-inner`]: true,
      [`${DataTable_styles.hostClass}__has-top-margin`]: true
    })
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${DataTable_styles.hostClass}-footer__selection-left`
  }, /*#__PURE__*/React__default.createElement(LabelPresentation.LabelPresentation, {
    id: `${id}-label`,
    htmlFor: `${id}-input`,
    expandToOverlay: true,
    onMouseHoverChange: onMouseHoverChange,
    onKeyboardFocusChange: onKeyboardFocusChange
  }, label)), /*#__PURE__*/React__default.createElement("div", {
    className: `${DataTable_styles.hostClass}-footer__selection-right`
  }, actions))));
};
DataTableSelectionFooterPresentation.displayName = "DataTableSelectionFooterPresentation";

exports.DataTableSelectionFooterPresentation = DataTableSelectionFooterPresentation;

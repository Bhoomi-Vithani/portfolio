'use strict';

var icons = require('@lsg/icons');
var dateFns = require('date-fns');
var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DateUtils = require('../../../utils/DateUtils.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var Localization = require('../../../utils/Localization.js');
var IconPresentation = require('../../Icon/shared/IconPresentation.js');
var IconLinkWrapper = require('../../IconLink/shared/IconLinkWrapper.js');
var IconLinkGroupWrapper = require('../../IconLinkGroup/shared/IconLinkGroupWrapper.js');
var LayerPresentation = require('../../Layer/shared/LayerPresentation.js');
var ComplexTable_styles = require('./ComplexTable.styles.js');
var TableActionMenu = require('./TableActionMenu.js');

// @ts-strict-ignore
const formatTableColumnData = (colData, colIndex, columnProperties) => {
  let result;
  if (columnProperties[colIndex].formatter) {
    result = columnProperties[colIndex].formatter(colData);
  } else if (colData instanceof Date) {
    const formatString = DateUtils.getLocaleDateFormat();
    result = dateFns.format(colData, formatString);
  } else {
    result = colData;
  }
  return result;
};
const ComplexTablePresentation = ({
  id,
  isMobile,
  className,
  columnProperties,
  tableBodyData,
  sortColumnIndex,
  isSortedAscending = false,
  onOpenLayerChange,
  isSortLayerOpen,
  onTableColumnHeadClick,
  onTableBodyRowClick,
  noMargin,
  onBodyRowClick
}) => {
  // Check, whether a bodyClick event is defined by user to display chevron icon then for body row actions events
  const isBodyRowClickEventDefinedByUser = !!onBodyRowClick;
  const hasActions = tableBodyData && tableBodyData.reduce((acc, val) => acc || val.rowActions && val.rowActions.length > 0, false);
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    className: DomUtils.cleanupClassObject({
      [ComplexTable_styles.hostClass]: true,
      [className]: className,
      [`${prefix.lsgPre}no-margin`]: noMargin
    })
  }, isMobile && columnProperties.some(col => col.isSortable) && (/*#__PURE__*/React__default.createElement("header", {
    className: `${ComplexTable_styles.hostClass}-mobile-header`
  }, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
    label: Localization.texts.lsg.component.ComplexTable.labelSortMenu,
    icon: icons.interaction___filter01,
    onClick: () => onOpenLayerChange(true)
  }), /*#__PURE__*/React__default.createElement(LayerPresentation.LayerPresentation, {
    closeLinkLabel: Localization.texts.lsg.component.ComplexTable.labelSortLayerBackButton,
    open: isSortLayerOpen,
    onCloseClick: () => onOpenLayerChange(false)
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${ComplexTable_styles.hostClass}-mobile-header-layer-headline`
  }, Localization.texts.lsg.component.ComplexTable.labelSortLayer), /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
    direction: "vertical"
  }, columnProperties.map((th, colIndex) => {
    const isSortColumn = colIndex === sortColumnIndex;
    return th.isSortable && (/*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
      label: th.title,
      className: `${ComplexTable_styles.hostClass}-layer-full-width-button`,
      key: colIndex,
      onClick: e => onTableColumnHeadClick(colIndex, e),
      disabled: false,
      noMargin: true
    }, /*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
      className: DomUtils.cleanupClassNames([`${ComplexTable_styles.hostClass}-wrap-icon__sort`, isSortColumn && `${ComplexTable_styles.hostClass}-wrap-icon__sort-column__sort`]),
      icon:
      // down arrow = isSortedAscending !
      isSortColumn && !isSortedAscending ? icons.interaction_arrows_arrowUp : icons.interaction_arrows_arrowDown,
      noMargin: false,
      title: ""
    })));
  }))))), /*#__PURE__*/React__default.createElement("table", {
    id: id,
    className: DomUtils.cleanupClassNames([`${ComplexTable_styles.hostClass}-table`, className])
  }, !isMobile && (/*#__PURE__*/React__default.createElement("thead", null, /*#__PURE__*/React__default.createElement("tr", {
    className: `${ComplexTable_styles.hostClass}-head-tr`
  }, columnProperties.map((th, colIndex) => {
    const isSortColumn = colIndex === sortColumnIndex;
    return /*#__PURE__*/React__default.createElement("th", {
      key: colIndex,
      className: DomUtils.cleanupClassNames([`${ComplexTable_styles.hostClass}-th`, columnProperties[colIndex].alignRight && `${ComplexTable_styles.hostClass}-th__alignright`, columnProperties[colIndex].isSortable && `${ComplexTable_styles.hostClass}-th__sortable`, colIndex === sortColumnIndex && `${prefix.lsgPre}-th__sorted`, `${prefix.lsgPre}h5`]),
      onClick: e => onTableColumnHeadClick(colIndex, e)
    }, /*#__PURE__*/React__default.createElement("div", {
      className: `${ComplexTable_styles.hostClass}-wrap`
    }, /*#__PURE__*/React__default.createElement("div", {
      className: `${ComplexTable_styles.hostClass}-wrap-label`
    }, th.title), columnProperties[colIndex].isSortable && (/*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
      className: DomUtils.cleanupClassNames([`${ComplexTable_styles.hostClass}-wrap-icon__sort`, isSortColumn && `${ComplexTable_styles.hostClass}-wrap-icon__sort-column__sort`]),
      noMargin: noMargin,
      icon:
      // down arrow = isSortedAscending !
      isSortColumn && !isSortedAscending ? icons.interaction_arrows_arrowUp : icons.interaction_arrows_arrowDown,
      title: !isSortColumn || !isSortedAscending ? Localization.texts.lsg.component.ComplexTable.sortAscending : Localization.texts.lsg.component.ComplexTable.sortDescending
    }))));
  }), (isBodyRowClickEventDefinedByUser || hasActions) && !isMobile && /*#__PURE__*/React__default.createElement("th", null)))), /*#__PURE__*/React__default.createElement("tbody", {
    className: `${ComplexTable_styles.hostClass}-body`
  }, tableBodyData && tableBodyData.map((row, rowIndex) => (/*#__PURE__*/React__default.createElement("tr", {
    key: rowIndex,
    className: DomUtils.cleanupClassNames([`${ComplexTable_styles.hostClass}-body-tr`, isBodyRowClickEventDefinedByUser && `${ComplexTable_styles.hostClass}-body-tr__clickable`]),
    onClick: e => onTableBodyRowClick(rowIndex, row.rowId, e)
  }, row.rowData.map((column, colIndex) => (/*#__PURE__*/React__default.createElement("td", {
    key: colIndex,
    className: DomUtils.cleanupClassNames([`${ComplexTable_styles.hostClass}-td`, columnProperties[colIndex].alignRight && `${ComplexTable_styles.hostClass}-td__alignright`, `${prefix.lsgPre}copy-text`])
  }, isMobile && (/*#__PURE__*/React__default.createElement("span", {
    className: `${ComplexTable_styles.hostClass}-inline-heading`
  }, columnProperties[colIndex].title)), formatTableColumnData(column, colIndex, columnProperties)))), (isBodyRowClickEventDefinedByUser || row.rowActions) && (/*#__PURE__*/React__default.createElement("td", {
    className: DomUtils.cleanupClassNames([`${ComplexTable_styles.hostClass}-td`, `${ComplexTable_styles.hostClass}-action-column`])
  }, isBodyRowClickEventDefinedByUser && !row.rowActions && (/*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
    className: `${ComplexTable_styles.hostClass}-body-tr-action-arrow`,
    noMargin: true,
    icon: icons.interaction_arrows_chevronRight,
    size: "small",
    title: ""
  })),
  // Todo for IconLink -> Should have a tooltip if iconOnly
  // Todo: As an alternative for the complextable-td-action-wrapper: Take a IconlinkGroup instead?
  //    -> to do this, paddings, hovereffect and wrapping must be specified in IconLinkGroup
  row.rowActions && (/*#__PURE__*/React__default.createElement(TableActionMenu.TableActionMenu, {
    tableActionsProperties: row.rowActions,
    rowActionsLook: row.rowActionsLook,
    tableRowIndex: rowIndex,
    isMobile: isMobile
  }))))))))));
};
ComplexTablePresentation.displayName = "ComplexTablePresentation";

exports.ComplexTablePresentation = ComplexTablePresentation;

'use strict';

var React__default = require('react');
var utilityClassesColor_styles = require('../../../styles/utilityClassesColor.styles.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var ReactUtils = require('../../../utils/ReactUtils.js');
var ActionPresentation = require('../../Action/shared/ActionPresentation.js');
var CheckboxPresentation = require('../../Checkbox/shared/CheckboxPresentation.js');
var DataTable_styles = require('../../DataTable/shared/DataTable.styles.js');
var RadioPresentation = require('../../Radio/shared/RadioPresentation.js');
var LabelPresentation = require('../../_Label/LabelPresentation.js');
var DataTableRowTogglePresentation = require('./DataTableRowToggle/DataTableRowTogglePresentation.js');

// @ts-strict-ignore
/* eslint-disable no-param-reassign */
const DataTableRowPresentation = props => {
  const {
    data,
    colspans,
    className,
    inputName,
    visibility,
    isHeader,
    isTopHeader,
    columnsPreprocessed,
    inputType,
    inputValue,
    onInputChange,
    htmlInputAttrs = {},
    ariaAttrs,
    isExpandableHeader,
    ids,
    id,
    onLinkClick,
    linkHref,
    htmlLinkAttrs,
    htmlCellAttrs,
    hasMouseHover,
    hasMouseHoverToggle,
    onMouseHoverChange,
    onMouseHoverChangeToggle,
    hasKeyboardFocus,
    hasKeyboardFocusToggle,
    onKeyboardFocusChange,
    onKeyboardFocusChangeToggle,
    gridStructure,
    inputHidden,
    inputDisabled,
    separateColumnsXsWidthRatio,
    tableCellsArrayRef,
    toggleColumnCellRef,
    insetLevel,
    spacing
  } = props;
  const TX = isHeader ? "th" : "td";
  // todo const variant = "dl" as "td" | "dl";
  const hasCheckbox = inputType === "checkbox" && !inputHidden;
  const hasRadio = inputType === "radio" && !isHeader && !inputHidden;
  const hasToggleColumn = inputType === "checkbox" || inputType === "radio" || inputType === "button";
  const hasLabel = (hasCheckbox || hasRadio) && !isHeader;
  const hasRowAction = !!(onLinkClick || linkHref || htmlLinkAttrs);
  const viewport = index.useViewport();
  const isXsViewport = viewport === "xs";
  const actionRef = React__default.useRef(null);
  const tableRowRef = React__default.useRef(null);
  /**
   * Helper function to check if the click target is a button or link within the DataTable row
   * (or a child element of such a button/link).
   * Returns the button/link element if found, otherwise null.
   */
  const findButtonOrLinkInDataTable = target => {
    let element = target;
    while (element && element !== tableRowRef.current) {
      const tagName = element.tagName?.toLowerCase();
      const role = element.getAttribute("role");
      // Check if this element is a button or link
      if (tagName === "button" || tagName === "a" || role === "button" || role === "link") {
        return element;
      }
      element = element.parentElement;
    }
    return null;
  };
  // the columns, that are not excluded by the colspan criterion, or by a columnHide criterion.
  // if a column is separated because columnSeparateXs=true and current viewport=xs, the column is contained even if hidden by a columnHide criterion.
  // example:  cols = [1,2,3,4,5,6,7,8,9] // those numbers are an example only, in reality those are the preprocessed columns.
  // colSpans = [1,1, 2,3]
  // the dataCols will contain 1,2,4,7,8,9
  const dataVisiblePre = columnsPreprocessed.reduce((acc, colHeader, index) => {
    const result = {
      ...acc
    };
    if (colHeader.isLabelColumn) {
      result.labelColumn = index;
    }
    if (acc.span > 1) {
      result.span -= 1;
      acc.spannedColHeaderIndexes.push(index);
    } else {
      let contents = data[acc.dataIndex];
      let foundLabel = false;
      if (colHeader.isLabelColumn && hasRowAction) {
        contents = /*#__PURE__*/React__default.createElement(ActionPresentation.ActionPresentation, {
          id: `${id}-label`,
          className: `${DataTable_styles.hostClass}-tr-label-column-action`,
          ref: actionRef,
          userSelect: true,
          onClick: (e, name) => {
            // Text on a clickable row should be selectable.
            // do not execute a click when text is selected.
            if (!window.getSelection()?.toString() && onLinkClick) {
              e.stopPropagation();
              onLinkClick?.(e, name);
            }
          },
          href: linkHref,
          htmlAttrs: htmlLinkAttrs,
          onMouseHoverChange: onMouseHoverChange,
          onKeyboardFocusChange: onKeyboardFocusChange
        }, contents);
        foundLabel = true;
      } else if (colHeader.isLabelColumn && hasLabel) {
        contents = /*#__PURE__*/React__default.createElement(LabelPresentation.LabelPresentation, {
          id: `${id}-label`,
          className: `${DataTable_styles.hostClass}-tr-label-column-label`,
          htmlFor: hasToggleColumn && `${id}-input` || undefined,
          expandToOverlay: !inputDisabled,
          onMouseHoverChange: onMouseHoverChangeToggle,
          onKeyboardFocusChange: onKeyboardFocusChangeToggle
        }, contents);
        foundLabel = true;
      }
      if (!colHeader.isHiddenInHeader || colHeader.isSeparated) {
        // add this col, if it is separated (so it's xs viewport and columnSeparateXs=true) even if it is
        // hidden in header by a defined columnHide rule (e.g. columnHide="md")
        result.columns.push({
          ...colHeader,
          contents,
          headerIndex: index,
          headerColspan: 1
        });
      }
      result.spanIndex += 1;
      result.span = colspans?.[result.spanIndex] || 1;
      result.hasLabel = acc.hasLabel || foundLabel;
      result.dataIndex += 1;
    }
    return result;
  }, {
    columns: [],
    spanIndex: -1,
    span: 1,
    hasLabel: false,
    dataIndex: 0,
    spannedColHeaderIndexes: [],
    // a list of data columns that is skipped by the colspan prop.
    labelColumn: NaN
  });
  // the next code (a, b, c) just adds the headerColspan info to the columns of dataVisiblePre.
  // Explanation: we need to find out the grid-colspans for each grid cell in the header area.
  // special cases: wrapped columns -> each table cell in this grid column must have the same grid-colspan.
  // separated columns are not in the header anymore but could also have a colspan > 1. So you have to add this
  // colspan to a possible colspan that lies directly before this colspan.
  // Example: gridHeaderCols has the Structure: [[0,1], [2, 3], [4]]. Each entry is a column in the horizontal table grid
  // and e.g. [0,1] are the corresponding dataCols. If dataCols 2, 3 are in the list of the skipped dataCols (spannedColHeaderIndexes),
  // the grid column 1 gets a grid-column: span 2
  // a) which grid cols are spanned?
  const gridHeaderColSpanInfos = gridStructure.gridHeaderCols.map(dataCols => {
    const result = {
      dataCols,
      isSpanned: true,
      headerColspan: 1
    };
    dataCols.forEach(dataCol => {
      if (!dataVisiblePre.spannedColHeaderIndexes.includes(dataCol)) {
        result.isSpanned = false;
      }
    });
    return result;
  });
  // b) summing the grid colspan for a grid column
  // Todo: Maybe we should adapt this way of calculating the row span because of edge cases.
  // because if there are multiple colspans
  for (let index = 0; index < gridHeaderColSpanInfos.length; index++) {
    let j = index + 1;
    while (j < gridHeaderColSpanInfos.length && gridHeaderColSpanInfos[j].isSpanned) {
      // eslint-disable-next-line no-param-reassign
      gridHeaderColSpanInfos[index].headerColspan += 1;
      j++;
    }
  }
  let separatedGridRow = gridStructure.maxColLength + 1;
  dataVisiblePre.columns.forEach((item, i) => {
    // c) assign each td in the header the grid colspan.
    // if the header is wrapped (multiple column headers), all columns are assigned the colspan of the
    // last data column within this grid column.
    //
    for (let index = 0; index < gridHeaderColSpanInfos.length; index++) {
      for (let j = 0; j < gridHeaderColSpanInfos[index].dataCols.length; j++) {
        if (gridHeaderColSpanInfos[index].dataCols[j] === item.headerIndex) {
          // eslint-disable-next-line no-param-reassign
          item.headerColspan = gridHeaderColSpanInfos[index].headerColspan;
        }
      }
    }
    // assign each col (in header (wrapped or not) or separated a table td colspan) (<td colspan=3 />)
    if (i > 0) {
      let lastTableColspan = 1;
      const colIndexLastVisibleColumn = dataVisiblePre.columns[i - 1].colIndex;
      for (let ind = colIndexLastVisibleColumn + 1; ind < item.colIndex; ind++) {
        if (!columnsPreprocessed[ind].isHiddenInHeader && !columnsPreprocessed[ind].isSeparated) {
          lastTableColspan++;
        }
      }
      dataVisiblePre.columns[i - 1].tableColSpan = lastTableColspan;
    }
    // Assign gridRow and gridRowSpan info
    gridStructure.gridHeaderCols.forEach(headerCol => {
      if (headerCol.includes(item.headerIndex)) {
        // eslint-disable-next-line no-param-reassign
        item.gridRow = headerCol.indexOf(item.headerIndex) + 1;
        item.gridRowSpan = 1;
        if (item.gridRow === headerCol.length && item.gridRow < gridStructure.maxColLength) {
          item.gridRowSpan = gridStructure.maxColLength - item.gridRow + 1;
        }
      }
      if (isExpandableHeader) {
        // the label of the ExpandableRow is rendered in the label column.
        // combine the headerColumns vertically so the labal is centered.
        if (headerCol.includes(dataVisiblePre.labelColumn)) {
          item.gridRow = 1;
          item.gridRowSpan = gridStructure.maxColLength;
        }
      }
    });
    // Assign gridRow to separated columns and (separated) actionColumn
    if (isXsViewport) {
      // next row below vertical header grid rows.
      if (item.isActionColumn || item.isSeparated) {
        item.gridRow = separatedGridRow;
        item.gridRowSpan = 1;
        separatedGridRow++;
      }
    }
  });
  if (hasRowAction && !dataVisiblePre.hasLabel) {
    // eslint-disable-next-line no-console
    console.error("Label for Table Row link missing. Either the labelColumn prop is missing, or the column is not displayed for a specific row and viewport.");
  }
  // in mobile view data is displayed in minimised form to avoid horizontal scrolling
  // DataTableWrapper column prop has columnSeparateXs: true
  const dataSeparated = dataVisiblePre.columns.filter(col => col.isSeparated && !col.isActionColumn);
  const rowSeparatorStyle = gridStructure.tableRowStyles.separatorStyles || {
    weight: "default"
  };
  if (dataSeparated.length > 0) {
    dataSeparated[0].isFirstSeparatedColumn = true;
  }
  // cleanupClassObject does not support "0" as it is falsy.
  let insetLevelClassText = "none";
  if (!gridStructure.isMobile && gridStructure.insetLevel > 0) {
    if (insetLevel === 0) {
      insetLevelClassText = "none";
    } else if (insetLevel > 0) {
      insetLevelClassText = `${insetLevel}`;
    } else if (gridStructure.insetLevel > 0) {
      insetLevelClassText = `${gridStructure.insetLevel}`;
    }
  }
  return /*#__PURE__*/React__default.createElement("tr", {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [`${DataTable_styles.hostClass}-tr`]: true,
      [`${DataTable_styles.hostClass}-tr__row`]: !isExpandableHeader && !isTopHeader,
      [`${DataTable_styles.hostClass}-tr__row-separator__${rowSeparatorStyle.weight}`]: true,
      [`${DataTable_styles.hostClass}-tr__${visibility}`]: visibility,
      [`${DataTable_styles.hostClass}-tr__expandable`]: isExpandableHeader,
      [`${DataTable_styles.hostClass}-tr__disabled`]: inputDisabled,
      [`${DataTable_styles.hostClass}-tr__inset-level-${insetLevelClassText}`]: true,
      [`${DataTable_styles.hostClass}-tr__spacing-${spacing}`]: !!spacing && !isHeader,
      [`${DataTable_styles.hostClass}-tr__has-row-action`]: hasRowAction,
      [utilityClassesColor_styles.utilityClassesBackgroundBaseAfter]: !isHeader,
      [utilityClassesColor_styles.utilityClassesBackgroundHoverAfter]: hasMouseHover,
      [utilityClassesColor_styles.utilityClassesBackgroundFocusAfter]: hasKeyboardFocus
    }),
    ref: tableRowRef,
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    onMouseOver: () => {
      if (hasRowAction) {
        onMouseHoverChange(true);
      }
    },
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    onMouseOut: () => {
      if (hasRowAction) {
        onMouseHoverChange(false);
      }
    },
    onClick: event => {
      // if the row is clickable, e.g. has a link or action, then the click event is handled
      // by the ActionPresentation component.
      // We have to make sure that click events from IconLinks or other clickable elements are not propagated to the row.
      const target = event.target;
      // Find if the click target is a button/link within the DataTable (or a child of such a button/link)
      const buttonOrLinkElement = findButtonOrLinkInDataTable(target);
      if (buttonOrLinkElement) {
        // Found a button/link in the DataTable - check if it's NOT the actionRef
        if (buttonOrLinkElement !== actionRef.current) {
          // It's a different button/link (e.g., IconLink, action button in a column)
          // Don't forward to actionRef, the button/link will handle its own click
          event.stopPropagation();
          return;
        }
        // It's the actionRef itself - let it handle the click naturally
      } else if (hasRowAction) {
        // No button/link found in the click path, but the row has an action
        // Forward the click to the actionRef
        actionRef.current?.click();
      }
      event.stopPropagation();
    },
    // TODO: temporary fix to avoid z-index overlay issues. Position: relative in combination with the z-index is causing issues with Flyouts int the DataTable
    // See full discussion about this topic here: https://confluence.intranet.commerzbank.com/display/LSG/20231018+-+Code+Review
    style: {
      position: "relative",
      ...gridStructure.tableRowStyles
    },
    ...ariaAttrs
  }, hasToggleColumn && (/*#__PURE__*/React__default.createElement(DataTableRowTogglePresentation.DataTableRowTogglePresentation, {
    ...htmlCellAttrs,
    id: `${id}-input`,
    as: TX,
    toggleAs: hasCheckbox && CheckboxPresentation.CheckboxPresentation || hasRadio && RadioPresentation.RadioPresentation,
    inputType: inputType,
    inputDisabled: inputDisabled,
    inputHidden: inputHidden,
    value: inputValue,
    name: inputName,
    onChange: onInputChange,
    htmlAttrs: htmlInputAttrs,
    hasMouseHover: hasMouseHoverToggle,
    hasKeyboardFocus: hasKeyboardFocusToggle,
    onMouseHoverChange: onMouseHoverChangeToggle,
    onKeyboardFocusChange: onKeyboardFocusChangeToggle,
    className: DomUtils.cleanupClassObject({
      [`${DataTable_styles.hostClass}-tx-data-separated-toggle-column`]: dataSeparated.length > 0,
      [`${DataTable_styles.hostClass}__has-top-margin`]: true
    }),
    gridStructure: gridStructure,
    isHeader: isHeader,
    cellRef: toggleColumnCellRef
  })), dataVisiblePre.columns.map(col => {
    const headerIndex = col.headerIndex;
    const header = col;
    let inner = col.contents;
    if (!col.isSeparated && !(isXsViewport && col.isActionColumn)) {
      // pass a horizontalAlignment prop to subcomponents, if the type of the
      // child is a custom React component (e.g. "MyIconLink"; not a <div>, <span>, <strong> etc.).
      // this React component could implement a horizontalAlignment prop to display a special design.
      // Todo: This has to be documented on the Markenportal
      if (/*#__PURE__*/React__default.isValidElement(col.contents) && typeof col.contents !== "string") {
        inner = ReactUtils.fragmentMap(col.contents, child => /*#__PURE__*/React__default.cloneElement(child, header.horizontalAlignment && typeof child.type !== "string" ? {
          horizontalAlignment: header.horizontalAlignment
        } : {}));
      }
    } else {
      const validRatio = separateColumnsXsWidthRatio > 0 && separateColumnsXsWidthRatio < 1;
      const styleLeft = validRatio && !col.isActionColumn ? {
        flex: separateColumnsXsWidthRatio
      } : {};
      const styleRight = validRatio && !col.isActionColumn ? {
        flex: 1 - separateColumnsXsWidthRatio
      } : {};
      // separated label is aria-hidden because in the table header (th) the col.contents = col.title.
      // it would be read twice.
      inner = /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
        className: `${DataTable_styles.hostClass}-separated-label`,
        "aria-hidden": true,
        style: styleLeft
      }, col.title), /*#__PURE__*/React__default.createElement("div", {
        className: `${DataTable_styles.hostClass}-separated-contents`,
        style: styleRight
      }, col.contents));
    }
    const gridHeaderColIndex = hasToggleColumn ? header.gridHeaderColIndex + 2 : header.gridHeaderColIndex + 1;
    // // getGridHeaderColIndexByHeaderIndex(col.headerIndex);
    const cellStyle = {
      gridRow: `${col.gridRow} / span ${col.gridRowSpan}`
    };
    if (!col.isSeparated && !(isXsViewport && col.isActionColumn)) {
      cellStyle.gridColumn = `${gridHeaderColIndex} / span ${col.headerColspan}`;
    } else {
      cellStyle.gridColumn = `span ${gridStructure.gridHeaderCols.length + (hasToggleColumn ? 1 : 0)}`;
    }
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, {
      key: headerIndex
    }, /*#__PURE__*/React__default.createElement(TX, {
      ...htmlCellAttrs?.[headerIndex],
      id: ids?.[headerIndex],
      className: DomUtils.cleanupClassObject({
        [`${DataTable_styles.hostClass}-tx`]: true,
        [`${DataTable_styles.hostClass}-${TX}`]: true,
        [`${DataTable_styles.hostClass}__wrap-no-wrap`]: col.textWrap === "no-wrap",
        [`${DataTable_styles.hostClass}__wrap-hyphenation`]: header.textWrap === "hyphenation",
        [`${DataTable_styles.hostClass}__wrap-character`]: header.textWrap === "character",
        [`${DataTable_styles.hostClass}__first-column`]: !hasToggleColumn && header.isFirstGridCol,
        [`${DataTable_styles.hostClass}__first-data-column`]: header.gridHeaderColIndex === 0,
        [`${DataTable_styles.hostClass}__last-column`]: header.isLastGridCol,
        [`${DataTable_styles.hostClass}__${header.horizontalAlignment}`]: header.horizontalAlignment && header.horizontalAlignmentType !== "prop-only" || isTopHeader,
        [`${DataTable_styles.hostClass}-th__hidden`]: isTopHeader && header.headerHidden,
        [`${DataTable_styles.hostClass}__has-top-margin`]: header.hasTopMargin,
        [`${DataTable_styles.hostClass}__has-bottom-margin`]: (header.hasBottomMargin || isExpandableHeader) && !(header.isActionColumn && !isXsViewport),
        [`${DataTable_styles.hostClass}__separated`]: header.isSeparated,
        [`${DataTable_styles.hostClass}__first_separated_column`]: col.isFirstSeparatedColumn,
        [`${DataTable_styles.hostClass}__action-column`]: header.isActionColumn,
        [`${DataTable_styles.hostClass}__separated-action-column`]: isXsViewport && header.isActionColumn,
        [`${DataTable_styles.hostClass}__sortable-column`]: header.isSortable,
        [`${DataTable_styles.hostClass}__grid-col-${header.gridHeaderColIndex}`]: true,
        [`${DataTable_styles.hostClass}__sticky-left`]: header.isStickyLeft,
        [`${DataTable_styles.hostClass}__sticky-right`]: header.isStickyRight
      }),
      style: cellStyle,
      scope: isHeader ? "col" : undefined,
      ref: ref => {
        if (tableCellsArrayRef?.current) tableCellsArrayRef.current[headerIndex] = ref;
      },
      "aria-sort": isHeader ? col.ariaSort : undefined
    }, inner && /*#__PURE__*/React__default.createElement("div", {
      className: `${DataTable_styles.hostClass}-tx-inner`
    }, inner)),
    // The colspan-attribute does not work in DataTable, it is ignored
    // Maybe the cause is the use of a css grid, nut sure.
    // Workaround: render "empty" td's
    col.tableColSpan > 1 && Array(col.tableColSpan - 1).fill(0).map((_, i) => /*#__PURE__*/React__default.createElement(TX, {
      key: `${headerIndex}-${i}`
    })));
  }));
};
DataTableRowPresentation.displayName = "DataTableRowPresentation";

exports.DataTableRowPresentation = DataTableRowPresentation;

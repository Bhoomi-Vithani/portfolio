'use strict';

var React__default = require('react');
var index = require('../../../utils/Hooks/index.js');
var ReactUtils = require('../../../utils/ReactUtils.js');
var PortalHeader_styles = require('../../PortalHeader/shared/PortalHeader.styles.js');
var HeaderContainer_styles = require('../../_HeaderContainer/HeaderContainer.styles.js');
var DataTable_styles = require('./DataTable.styles.js');
var DataTablePresentation = require('./DataTablePresentation.js');

// @ts-strict-ignore
const getHeaderOffset = viewport => {
  const elements = document.getElementsByClassName(`${HeaderContainer_styles.mainClass}__sticky`);
  if (elements?.length > 0) {
    const portalHeader = document.getElementsByClassName(PortalHeader_styles.hostClass)?.length > 0;
    return ["lg", "xl"].includes(viewport) && portalHeader ? elements[0].clientHeight / 2 // full header become reduce to half height, when it's a portal header and become scrolled
    : elements[0].clientHeight; // has reduced header height
  }
  return 0;
};
const DataTableWrapper = props => {
  const {
    id: idProp,
    radiosName,
    onRadiosChange,
    radiosValue,
    labelColumn,
    columns,
    inputType,
    children,
    footer,
    isHeaderSticky,
    sortColumn,
    sortColumns: sortColumnsProp,
    sortAscending: sortAscendingProp,
    width,
    separateColumnsXsWidthRatio,
    insetLevel,
    ...otherProps
  } = {
    ...DataTablePresentation.defaultProps,
    ...props
  };
  const tableHeadRef = React__default.useRef(undefined);
  const [state, setState] = React__default.useState({
    headerOffsetOn: undefined,
    headerShadow: false
  });
  const viewport = index.useViewport();
  const onHandleScroll = React__default.useCallback(() => {
    if (isHeaderSticky) {
      const currentTopPosition = tableHeadRef.current.getBoundingClientRect().top;
      if (currentTopPosition > state.headerOffsetOn && state.headerShadow) {
        // remove shadow on sticky table header
        setState(prevState => ({
          ...prevState,
          headerShadow: false
        }));
      }
      if (currentTopPosition <= state.headerOffsetOn && !state.headerShadow) {
        // set shadow on sticky table header
        setState(prevState => ({
          ...prevState,
          headerShadow: true
        }));
      }
    }
  }, [state, setState]);
  index.useScroll(onHandleScroll);
  React__default.useEffect(() => {
    if (isHeaderSticky) {
      setState(prevState => ({
        ...prevState,
        headerOffsetOn: getHeaderOffset(viewport)
      }));
    }
  }, []);
  React__default.useEffect(() => {
    if (isHeaderSticky) {
      const offset = getHeaderOffset(viewport);
      if (offset > 0 && offset !== state.headerOffsetOn && ["lg", "xl"].includes(viewport)) {
        setState(prevState => ({
          ...prevState,
          headerOffsetOn: offset
        }));
      }
    }
  }, [viewport, isHeaderSticky, state.headerOffsetOn]);
  const id = index.useUniqueId(`${DataTable_styles.hostClass}-`, idProp);
  const isMultiSort = Array.isArray(sortColumnsProp);
  const sortColumns = typeof sortColumn === "number" && sortColumn > -1 && [sortColumn] || Array.isArray(sortColumnsProp) && sortColumnsProp || [];
  const sortAscending = typeof sortAscendingProp === "boolean" && [sortAscendingProp] || Array.isArray(sortAscendingProp) && sortAscendingProp || [];
  const viewports = ["xs", "sm", "md", "lg", "xl"];
  const viewportIndex = viewports.findIndex(v => v === (viewport || "xl"));
  const hasToggleColumn = inputType === "checkbox" || inputType === "radio" || inputType === "button";
  const columnsPreprocessed = columns.map((header, i) => {
    const sortPriority = sortColumns.findIndex(s => s === i);
    const sortDirection = sortAscending[sortPriority] ? "ascending" : "descending";
    return {
      ...header,
      colIndex: i,
      isWrapped: header.columnWrap && viewports.findIndex(v => header.columnWrap === v) >= viewportIndex,
      // TODO rename this: it's hidden everywhere
      isHiddenInHeader: header.columnHide && viewports.findIndex(v => header.columnHide === v) >= viewportIndex,
      isLabelColumn: labelColumn === i,
      id: header.id || `${id}-th${i}`,
      isSeparated: header.columnSeparateXs && !header.isActionColumn && viewport === "xs",
      gridRow: 1,
      gridRowSpan: 1,
      hasTopMargin: false,
      hasBottomMargin: false,
      isFirstGridCol: false,
      isLastGridCol: false,
      isInRightAlignedCol: false,
      // eslint-disable-next-line no-nested-ternary
      ariaSort: sortPriority > -1 ? sortDirection : undefined,
      sortPriority: sortColumns.length > 1 ? sortPriority : undefined
    };
  });
  const columnsSeparated = columnsPreprocessed.filter(header => !header.isHiddenInHeader && header.isSeparated);
  const gridStructure = columnsPreprocessed.reduce((acc, colPreprocessed, i) => {
    const result = {
      ...acc
    };
    if (colPreprocessed.isActionColumn) {
      result.hasActionColumn = true;
    }
    if (colPreprocessed.isActionColumn && viewport === "xs") {
      result.gridSeparatedActionColIndex = colPreprocessed.colIndex;
    } else if (colPreprocessed.isSeparated) {
      result.gridSeparatedCols.push(colPreprocessed.colIndex);
    } else if (result.gridHeaderCols.length === 0 || !(colPreprocessed.isWrapped || colPreprocessed.isHiddenInHeader)) {
      result.gridHeaderCols.push([colPreprocessed.colIndex]);
    } else if (!colPreprocessed.isHiddenInHeader && !colPreprocessed.isSeparated) {
      const currentCol = result.gridHeaderCols.slice(-1)[0];
      currentCol.push(i);
      result.maxColLength = Math.max(acc.maxColLength, currentCol.length);
    }
    return result;
  }, {
    gridHeaderCols: [],
    // a structure of headerIndexes, will look something like this: [[(if checkbox
    // exists)], [0,1,2], [3], [4,5,8]]
    gridSeparatedCols: [],
    // an array of the indexes of the separated cols e.g. [6,7]
    gridSeparatedActionColIndex: undefined,
    // the action col in xs viewport
    hasActionColumn: false,
    hasToggleColumn,
    maxColLength: 1,
    gridTemplateAreaRows: [""],
    gridTemplateAreasString: "",
    tableStyles: {},
    tableHeaderAndBodyStyles: {},
    tableRowStyles: {},
    isMobile: viewport === "xs",
    insetLevel
  });
  // adding infos for top and bottom margin to the header columns preprocessed
  gridStructure.gridHeaderCols.forEach(col => {
    if (columnsPreprocessed[col[0]]) {
      columnsPreprocessed[col[0]].hasTopMargin = true;
      if (col.length === gridStructure.maxColLength) {
        columnsPreprocessed[col[col.length - 1]].hasBottomMargin = true;
      }
    }
  });
  if (!hasToggleColumn) {
    if (gridStructure.gridHeaderCols?.[0]?.[0] !== undefined) {
      gridStructure.gridHeaderCols[0].forEach(headerIndex => {
        columnsPreprocessed[headerIndex].isFirstGridCol = true;
      });
    }
  }
  // find out if the field is in the last column of the horizontal table header. E.g in the last column, there shall be now padding to the right.
  if (gridStructure.gridHeaderCols.length > 0) {
    gridStructure.gridHeaderCols[gridStructure.gridHeaderCols.length - 1].forEach(headerIndex => {
      columnsPreprocessed[headerIndex].isLastGridCol = true;
    });
  }
  // is right-aligned column? That is, if the col is wrapped and one of the fields of the column is right-aligned,
  // set the horizontal alignment of all fields to "right".
  // Example: Field ("value") has a horizontal alignment of "right" and "stock market" has an alignment of "left",
  // for aesthetical reasons, if they are wrapped in the same column, align "stock marked" also on the right.
  if (gridStructure.gridHeaderCols.length > 0) {
    for (let col = 0; col < gridStructure.gridHeaderCols.length; col++) {
      let colIsRightAligned = false;
      gridStructure.gridHeaderCols[col].forEach(headerIndex => {
        colIsRightAligned = colIsRightAligned || columnsPreprocessed[headerIndex].horizontalAlignment === "right";
      });
      if (colIsRightAligned) {
        gridStructure.gridHeaderCols[col].forEach(headerIndex => {
          columnsPreprocessed[headerIndex].horizontalAlignment = "right";
        });
      }
    }
  }
  // we distinguish between header columns and grid columns.
  // example: gridHeaderCols = [[0,1,2], [3], [4,5,8]].
  // The 4th header  column is in the 2nd gridHeaderCol, so the gridHeaderColIndex is 2.
  // This code adds the info "gridHeaderColIndex", in which gridHeaderCol the header/field is in.
  // this can be used to set css properties: a class "lsgs-data-table__grid-col-2" can be set on the 4th header column.
  // note: the checkbox/radio column is not counted as a gridHeaderCol.
  if (gridStructure.gridHeaderCols.length > 0) {
    for (let col = 0; col < gridStructure.gridHeaderCols.length; col++) {
      gridStructure.gridHeaderCols[col].forEach(headerIndex => {
        columnsPreprocessed[headerIndex].gridHeaderColIndex = col;
      });
    }
  }
  // Creates the gridTemplateColumns string for the table, e.g.
  // style="grid-template-columns: auto minmax(350px, min-content) auto auto auto auto auto auto auto minmax(100px, min-content);
  let gridTemplateColumns = hasToggleColumn ? "60px " : "";
  gridTemplateColumns += columnsPreprocessed.filter(col => !col.isHiddenInHeader).reduce((acc, val) => val.isWrapped ? [...acc.slice(0, -1), [...acc[acc.length - 1], val]] : [...acc, [val]], []).map(v => {
    const ws = v.map(v2 => width === "full" ? v2.widthFr : v2.widthPx).filter(w => w !== undefined);
    if (ws.length === 0) {
      return "auto";
    }
    if (width === "full") {
      // css only allows fr units as the second parameter of minmax. fr inside the max-function is not allowed
      return `minmax(min-content, ${Math.max(...ws)}fr)`;
    }
    // uses px instead of fr for fixed width tables
    return `minmax(${Math.max(...ws)}px, min-content)`;
  }).join(" ");
  // on xs viewport, add the actionColIndex to the gridSeparatedCols.
  if (gridStructure.gridSeparatedActionColIndex >= 0) {
    gridStructure.gridSeparatedCols.push(gridStructure.gridSeparatedActionColIndex);
  }
  gridStructure.tableStyles = {
    gridTemplateColumns // "minmax(0, 2fr) auto auto",
  };
  gridStructure.tableHeaderAndBodyStyles = {
    gridColumn: `1 / span ${gridStructure.gridHeaderCols.length + (hasToggleColumn ? 1 : 0)} `
  };
  gridStructure.tableRowStyles = {
    gridColumn: `1 / span ${gridStructure.gridHeaderCols.length + (hasToggleColumn ? 1 : 0)}  `
  };
  // if a header column in the same grid column as a sticky left header column, add the header column to the
  // stickyLeftGridColumns.
  gridStructure.stickyLeftGridColumns = [];
  gridStructure.gridHeaderCols.forEach((gridHeaderCol, i) => {
    if (gridHeaderCol.some(colId => columnsPreprocessed[colId].isStickyLeft)) {
      gridStructure.stickyLeftGridColumns.push(i);
    }
  });
  // if a header column in the same grid column as a sticky right header column, add the header column to the
  // stickyRightGridColumns.
  gridStructure.stickyRightGridColumns = [];
  gridStructure.gridHeaderCols.forEach((gridHeaderCol, i) => {
    if (gridHeaderCol.some(colId => columnsPreprocessed[colId].isStickyRight)) {
      gridStructure.stickyRightGridColumns.push(i);
    }
  });
  const elementMapper = isFooter => (child, i) => {
    const labelChild = child;
    if (labelChild.props.leftLabel || labelChild.props.rightLabel) {
      const labelChildId = labelChild.props.id || `${id}-label${i}`;
      return /*#__PURE__*/React__default.cloneElement(labelChild, {
        id: labelChildId,
        gridStructure
      });
    }
    const rowChild = child;
    return /*#__PURE__*/React__default.cloneElement(rowChild, {
      id: rowChild.props.id || (isFooter ? `${id}-f${i}` : `${id}-r${i}`),
      columnsPreprocessed,
      columnsSeparated,
      gridStructure,
      inputType,
      separateColumnsXsWidthRatio,
      inputValue: inputType === "radio" ? radiosValue === rowChild.props.inputName : rowChild.props.inputValue,
      onInputChange: inputType === "radio" ? (_, _1, event) => onRadiosChange(rowChild.props.inputName, radiosName, event) : rowChild.props.onInputChange
    });
  };
  return /*#__PURE__*/React__default.createElement(DataTablePresentation.DataTablePresentation, {
    ...otherProps,
    id: id,
    inputType: inputType,
    columnsPreprocessed: columnsPreprocessed,
    gridStructure: gridStructure,
    columnsSeparated: columnsSeparated,
    footer: footer && ReactUtils.fragmentMap(footer, elementMapper(true)),
    tableHeadRef: tableHeadRef,
    tableHeadStickPosition: state.headerOffsetOn,
    headerShadow: state.headerShadow,
    isHeaderSticky: isHeaderSticky,
    isMultiSort: isMultiSort,
    sortColumns: sortColumns,
    sortAscending: sortAscending,
    width: width
  }, ReactUtils.fragmentMap(children, elementMapper(false)));
};

exports.DataTableWrapper = DataTableWrapper;

'use strict';

var React__default = require('react');
var ResizeEvents = require('../../../utils/windowEvents/ResizeEvents.js');
var ComplexTablePresentation = require('./ComplexTablePresentation.js');

class ComplexTableWrapper extends React__default.Component {
  constructor(props) {
    super(props);
    this.mobileViewports = ["sm", "xs"];
    this.onViewportChanged = viewport => this.setState(() => ({
      isMobile: this.mobileViewports.includes(viewport)
    }));
    this.onHandleTableColumnHeadClick = (columnIndex, e) => {
      const {
        columnProperties,
        onColumnHeadClick,
        sortColumnIndex,
        isSortedAscending
      } = this.props;
      if (columnProperties[columnIndex].isSortable && onColumnHeadClick) {
        const isAscending = sortColumnIndex !== columnIndex ? true : !isSortedAscending;
        const columnName = columnProperties[columnIndex].name;
        onColumnHeadClick(columnIndex, columnName, isAscending, e);
      }
    };
    this.onHandleTableBodyRowClick = (rowIndex, rowId, e) => {
      if (this.props.onBodyRowClick) {
        this.props.onBodyRowClick(rowIndex, rowId, e);
      }
    };
    this.state = {
      isMobile: this.mobileViewports.includes(ResizeEvents.getInitialViewportSize()),
      isSortLayerOpen: false
    };
  }
  componentDidMount() {
    ResizeEvents.addViewportCallback(this.onViewportChanged);
  }
  componentWillUnmount() {
    ResizeEvents.removeViewportCallback(this.onViewportChanged);
  }
  render() {
    return /*#__PURE__*/React__default.createElement(ComplexTablePresentation.ComplexTablePresentation, {
      ...this.props,
      isMobile: this.state.isMobile,
      isSortLayerOpen: this.state.isSortLayerOpen,
      onOpenLayerChange: open => this.setState(() => ({
        isSortLayerOpen: open
      })),
      onTableColumnHeadClick: this.onHandleTableColumnHeadClick,
      onTableBodyRowClick: this.onHandleTableBodyRowClick
    });
  }
}

exports.ComplexTableWrapper = ComplexTableWrapper;

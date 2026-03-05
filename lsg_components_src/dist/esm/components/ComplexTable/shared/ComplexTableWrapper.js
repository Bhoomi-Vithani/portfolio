import React__default from 'react';
import { getInitialViewportSize, addViewportCallback, removeViewportCallback } from '../../../utils/windowEvents/ResizeEvents.js';
import { ComplexTablePresentation } from './ComplexTablePresentation.js';

class ComplexTableWrapper extends React__default.Component {
    constructor(props) {
        super(props);
        this.mobileViewports = ["sm", "xs"];
        this.onViewportChanged = (viewport) => this.setState(() => ({ isMobile: this.mobileViewports.includes(viewport) }));
        this.onHandleTableColumnHeadClick = (columnIndex, e) => {
            const { columnProperties, onColumnHeadClick, sortColumnIndex, isSortedAscending } = this.props;
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
            isMobile: this.mobileViewports.includes(getInitialViewportSize()),
            isSortLayerOpen: false,
        };
    }
    componentDidMount() {
        addViewportCallback(this.onViewportChanged);
    }
    componentWillUnmount() {
        removeViewportCallback(this.onViewportChanged);
    }
    render() {
        return (React__default.createElement(ComplexTablePresentation, { ...this.props, isMobile: this.state.isMobile, isSortLayerOpen: this.state.isSortLayerOpen, onOpenLayerChange: open => this.setState(() => ({ isSortLayerOpen: open })), onTableColumnHeadClick: this.onHandleTableColumnHeadClick, onTableBodyRowClick: this.onHandleTableBodyRowClick }));
    }
}

export { ComplexTableWrapper };

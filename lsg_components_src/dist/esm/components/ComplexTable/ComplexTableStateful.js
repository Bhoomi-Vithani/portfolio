import * as React from 'react';
import { getViewportSize } from '../../utils/windowEvents/ResizeEvents.js';
import { Pagination } from '../Pagination/Pagination.js';
import { ComplexTableWrapper } from './shared/ComplexTableWrapper.js';

// @ts-strict-ignore
function sortRows(column, sortComparator, isSortAscending, data) {
    data.sort((row1, row2) => {
        let result = sortComparator(row1.rowData[column], row2.rowData[column]);
        result = isSortAscending ? result : -result;
        return result;
    });
}
/**
 * This is a stateful version of `<ComplexTable>`. PLEASE NOTE: Unlike the Stateful variants of formfield components
 * that are meant to be implemented for non-React-Environment (e.g. ShowCases), this variant of the `ComplexTable` is meant for React Logic also.
 * The `ComplexTable.Stateful` adds a sorting functionality, so you do not have necessarily to maintain the contents of the table and the sorting
 * algorithm in your wrapping component. For the sorting functionality, you can also define a sorting comparator for each column.
 */
class ComplexTableStateful extends React.PureComponent {
    // eslint-disable-next-line react/sort-comp
    constructor(props) {
        super(props);
        // DOWN-Arrow = Sort ASCENDING = A..Z, 0..9, earliest date .. latest date  !!
        // at first click, the sorting shall be ascending (down arrow)
        this.onStatefulTableHeadingClick = (column, 
        /* columnName: string, */
        isSortAscending
        /* e: React.MouseEvent<HTMLElement> */
        ) => {
            // Make a copy of the table data and sort it in an immutable way
            if (this.props.columnProperties[column].isSortable) {
                this.setState(() => ({ sortColumn: column, isSortedAscending: isSortAscending }));
            }
        };
        this.defaultSortComparator = (a, b) => (a > b && 1) || (a < b && -1) || 0;
        this.state = {
            sortColumn: this.props.defaultSortColumn,
            isSortedAscending: this.props.defaultIsSortedAscending,
            tableBodyData: this.props.tableBodyData,
            isMobile: ComplexTableStateful.mobileViewports.includes(getViewportSize()),
            activePage: 1,
        };
    }
    render() {
        // Sorting at render time -> should not be inperfomant
        // TableBodyData is not managed by this component, but by the parent component.
        const sortedTableBodyData = this.props.tableBodyData.slice();
        const sortColumn = this.state.sortColumn;
        if (sortColumn !== undefined && this.props.columnProperties[this.state.sortColumn].isSortable) {
            // const sortedTableData = this.state.tableBodyData.slice();
            const sortComparator = this.props.columnProperties[this.state.sortColumn].sortComparator || this.defaultSortComparator;
            sortRows(this.state.sortColumn, sortComparator, this.state.isSortedAscending, sortedTableBodyData);
        }
        const numPages = Math.max(1, Math.ceil(this.props.tableBodyData.length / this.props.numRowsPerPage));
        const paginatedTableBodyData = sortedTableBodyData.slice((this.state.activePage - 1) * this.props.numRowsPerPage, this.state.activePage * this.props.numRowsPerPage);
        return (React.createElement(React.Fragment, null,
            React.createElement(ComplexTableWrapper, { ...this.props, tableBodyData: this.props.numRowsPerPage === undefined ? sortedTableBodyData : paginatedTableBodyData, onColumnHeadClick: (column, _, isSortAscending) => this.onStatefulTableHeadingClick(column, isSortAscending), sortColumnIndex: this.state.sortColumn, isSortedAscending: this.state.isSortedAscending }),
            this.props.numRowsPerPage !== undefined && (React.createElement(Pagination, { numPages: numPages, activePage: Math.min(this.state.activePage, numPages), onClick: page => this.setState(() => ({ activePage: page })) }))));
    }
}
ComplexTableStateful.displayName = "ComplexTable.Stateful";
ComplexTableStateful.mobileViewports = ["sm", "xs"];

export { ComplexTableStateful };

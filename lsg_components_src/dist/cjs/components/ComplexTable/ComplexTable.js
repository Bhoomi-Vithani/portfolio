'use strict';

var React__default = require('react');
var ComplexTableStateful = require('./ComplexTableStateful.js');
var ComplexTableWrapper = require('./shared/ComplexTableWrapper.js');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__default__namespace = /*#__PURE__*/_interopNamespaceDefault(React__default);

// @ts-strict-ignore
/*
    This helper (fall back, backward compatibility) function supports the target prop of unknown object from outside.
    The new and better way filling a htmlAttrs-Prop with required properties, but bose are supported now.
 */
const mapPropData = props => {
  // if no action are defined then returning 1:1 without supplementation
  if (!props.tableBodyData) return props;
  let withActions = 0;
  props.tableBodyData.forEach(data => {
    withActions += !data.rowActions ? 0 : 1;
  });
  if (withActions === 0) return props;
  const tableDataProps = props.tableBodyData.map(data => ({
    ...data,
    // Immutable: Hier machen wir eine Kopie, damit wir nicht die Original-Daten versehentlich überschreiben.
    rowActions: data.rowActions.map(action => ({
      ...action,
      // Das gleiche hier
      htmlAttrs: {
        target: action.target,
        ...action.htmlAttrs
      } // Hier werden die htmlAttrs und die legacy target prop zusammengeführt.
    }))
  }));
  return {
    ...props,
    tableData: tableDataProps
  };
};
/** @deprecated This component will not be further maintained and will not receive a11y updates. Use DataTable instead. */
const ComplexTable = ({
  isSortedAscending = false,
  onHeadingClick,
  sortColumn,
  ...props
}) => (/*#__PURE__*/React__default__namespace.createElement(ComplexTableWrapper.ComplexTableWrapper, {
  isSortedAscending,
  ...mapPropData(props),
  onColumnHeadClick: onHeadingClick,
  sortColumnIndex: sortColumn
}));
ComplexTable.displayName = "ComplexTable";
ComplexTable.Stateful = ComplexTableStateful.ComplexTableStateful;

exports.ComplexTable = ComplexTable;

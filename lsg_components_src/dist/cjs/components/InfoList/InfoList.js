'use strict';

var React__default = require('react');
var InfoListItemPresentation = require('../InfoListItem/shared/InfoListItemPresentation.js');
var InfoListPresentation = require('./shared/InfoListPresentation.js');

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

/**
 * @deprecated: 11.2023 - Will be removed in the next major release.
 * Have a look at the "Info List Pattern" which uses native components like shown in the Markenportal UX Patterns
 * section: https://markenportal.commerzbank.com/styleguide/info-list-pattern/index.html
 */
class InfoList extends React__default__namespace.Component {
  render() {
    const {
      children,
      ...props
    } = this.props;
    return /*#__PURE__*/React__default__namespace.createElement(InfoListPresentation.InfoListPresentation, {
      ...props
    }, children);
  }
}
InfoList.displayName = "InfoList";
InfoList.Item = ({
  ...props
}) => (/*#__PURE__*/React__default__namespace.createElement(InfoListItemPresentation.InfoListItemPresentation, {
  ...props
}));
// eslint-disable-next-line react/static-property-placement
InfoList.Item.displayName = "InfoList.Item";

exports.InfoList = InfoList;

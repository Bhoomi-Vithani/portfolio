'use strict';

var React__default = require('react');
var Localization = require('../../utils/Localization.js');
var BreadCrumbsItem = require('../BreadCrumbsItem/BreadCrumbsItem.js');
var BreadcrumbsPresentation = require('./shared/BreadcrumbsPresentation.js');

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

class BreadCrumbs extends React__default__namespace.Component {
  render() {
    return /*#__PURE__*/React__default__namespace.createElement(BreadcrumbsPresentation.BreadcrumbsPresentation, {
      ...this.props
    });
  }
}
BreadCrumbs.displayName = "BreadCrumbs";
BreadCrumbs.defaultProps = {
  title: Localization.texts.lsg.component.BreadCrumbs.title,
  separatorBottom: true,
  alwaysVisible: false
};
BreadCrumbs.Item = BreadCrumbsItem.BreadCrumbsItem;

exports.BreadCrumbs = BreadCrumbs;

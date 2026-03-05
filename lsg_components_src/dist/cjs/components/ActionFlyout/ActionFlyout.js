'use strict';

var React__default = require('react');
var index = require('../../utils/Hooks/index.js');
var ActionFlyoutItem = require('../ActionFlyoutItem/ActionFlyoutItem.js');
var ActionFlyout_styles = require('./shared/ActionFlyout.styles.js');
var ActionFlyoutPresentation = require('./shared/ActionFlyoutPresentation.js');

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

const ActionFlyout = ({
  children,
  menuButton,
  preferOpenToLeft,
  id: idProp,
  ...props
}) => {
  const id = index.useUniqueId(`${ActionFlyout_styles.hostClass}-`, idProp);
  const menuId = index.useUniqueId(`${ActionFlyout_styles.hostClass}-menu`, props.menuId);
  return /*#__PURE__*/React__default__namespace.createElement(ActionFlyoutPresentation.ActionFlyoutPresentation, {
    menuButton: ({
      actionRef,
      ...btnProps
    }) => menuButton({
      refCallback: actionRef,
      ...btnProps
    }),
    id: menuId,
    buttonId: id,
    preferOpenToLeft: preferOpenToLeft,
    ...props
  }, children);
};
ActionFlyout.displayName = "ActionFlyout";
ActionFlyout.Item = ActionFlyoutItem.ActionFlyoutItem;

exports.ActionFlyout = ActionFlyout;

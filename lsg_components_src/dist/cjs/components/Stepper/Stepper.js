'use strict';

var React__default = require('react');
var HeadlinePresentation = require('../Headline/shared/HeadlinePresentation.js');
var StepperItemPresentation = require('./shared/StepperItem/StepperItemPresentation.js');
var StepperWrapper = require('./shared/StepperWrapper.js');

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

/** @deprecated */
exports.IconSizes = void 0;
(function (IconSizes) {
  IconSizes["MEDIUM"] = "medium";
  IconSizes["LARGE"] = "large";
})(exports.IconSizes || (exports.IconSizes = {}));
/** @deprecated */
exports.IconColors = void 0;
(function (IconColors) {
  IconColors["DEFAULT"] = "default";
  IconColors["PRIMARY"] = "primary";
})(exports.IconColors || (exports.IconColors = {}));
/**
 * @deprecated: 11.2023 - Will be removed in the next major release.
 * Have a look at the "Stepper Pattern" which uses native components like shown in the Markenportal UX Patterns
 * section: https://markenportal.commerzbank.com/styleguide/stepper-pattern/index.html
 */
class Stepper extends React__default__namespace.Component {
  render() {
    const {
      title,
      titleAs,
      links,
      children,
      centeredLayout,
      ...props
    } = this.props;
    return /*#__PURE__*/React__default__namespace.createElement(StepperWrapper.StepperWrapper, {
      headline: /*#__PURE__*/React__default__namespace.createElement(HeadlinePresentation.HeadlinePresentation, {
        size: "h2",
        as: titleAs,
        centeredLayout: centeredLayout
      }, title),
      iconLinks: links,
      centeredLayout: centeredLayout,
      ...props
    }, children);
  }
}
// eslint-disable-next-line react/sort-comp
Stepper.Block = ({
  text,
  ...otherProps
}) => {
  const stepperBlockDefaultProps = {
    headlineAs: "h4",
    iconSize: "medium",
    iconColor: "default"
  };
  return /*#__PURE__*/React__default__namespace.createElement(StepperItemPresentation.StepperItemPresentation, {
    ...stepperBlockDefaultProps,
    ...otherProps
  }, text);
};
Stepper.displayName = "Stepper.Block";
Stepper.defaultProps = {
  centeredLayout: false,
  iconSize: "medium"
};
/** @deprecated */
Stepper.IconSizes = exports.IconSizes;
/** @deprecated */
Stepper.IconColors = exports.IconColors;

exports.Stepper = Stepper;

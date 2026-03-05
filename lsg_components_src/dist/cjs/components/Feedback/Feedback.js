'use strict';

var React__default = require('react');
var Localization = require('../../utils/Localization.js');
var FeedbackWrapper = require('./shared/FeedbackWrapper.js');

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

class Feedback extends React__default__namespace.Component {
  render() {
    return /*#__PURE__*/React__default__namespace.createElement(FeedbackWrapper.FeedbackWrapper, {
      ...this.props
    });
  }
}
Feedback.displayName = "Feedback";
Feedback.defaultProps = {
  textButtonTrue: Localization.texts.lsg.component.Feedback.trueButton,
  textButtonFalse: Localization.texts.lsg.component.Feedback.falseButton,
  textResult: Localization.texts.lsg.component.Feedback.result,
  onChange: () => {
    /* empty */
  }
};

exports.Feedback = Feedback;

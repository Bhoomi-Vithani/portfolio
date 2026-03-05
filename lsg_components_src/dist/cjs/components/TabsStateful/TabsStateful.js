'use strict';

var React__default = require('react');
var ResizeEvents = require('../../utils/windowEvents/ResizeEvents.js');
var TabsPresentation = require('../Tabs/shared/TabsPresentation.js');

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
 * This is a stateful version of `<Tabs>`.
 * The `<Tabs.Stateful>` variant is made for showcase purposes and non-React environments.
 * It should not be used in a React application. Please have a look at the section on "Stateful Components" in the
 * developer guidelines.
 * Check `<Tabs>` for implementation examples.
 */
class TabsStateful extends React__default__namespace.Component {
  constructor() {
    super(...arguments);
    this.state = {
      openIndex: this.props.initialOpenIndex || 0,
      isMobile: ["sm", "xs"].includes(ResizeEvents.getViewportSize())
    };
    this.onViewportChange = viewportSize => {
      this.setState(() => ({
        isMobile: ["sm", "xs"].includes(viewportSize)
      }));
    };
    this.handleChange = openIndex => {
      this.setState(() => ({
        openIndex
      }));
    };
  }
  componentDidMount() {
    ResizeEvents.addViewportCallback(this.onViewportChange);
  }
  componentWillUnmount() {
    ResizeEvents.removeViewportCallback(this.onViewportChange);
  }
  render() {
    return /*#__PURE__*/React__default__namespace.createElement(TabsPresentation.TabsPresentation, {
      ...this.props,
      ...this.state,
      onChange: this.handleChange
    });
  }
}
TabsStateful.displayName = "Tabs.Stateful";

exports.TabsStateful = TabsStateful;

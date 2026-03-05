'use strict';

var React__default = require('react');
require('../../../utils/windowEvents/ScrollEvents.js');
var ResizeEvents = require('../../../utils/windowEvents/ResizeEvents.js');
var EyeCatcherPresentation = require('./EyeCatcherPresentation.js');

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

class EyeCatcherWrapper extends React__default__namespace.Component {
  constructor(props) {
    super(props);
    this.viewportHandler = viewport => {
      this.setState(() => ({
        viewport
      }));
    };
    this.state = {
      viewport: ResizeEvents.getInitialViewportSize()
    };
  }
  componentDidMount() {
    ResizeEvents.addViewportCallback(this.viewportHandler);
  }
  componentWillUnmount() {
    ResizeEvents.removeViewportCallback(this.viewportHandler);
  }
  render() {
    return /*#__PURE__*/React__default__namespace.createElement(EyeCatcherPresentation.EyeCatcherPresentation, {
      ...this.props,
      viewport: this.state.viewport
    });
  }
}

exports.EyeCatcherWrapper = EyeCatcherWrapper;

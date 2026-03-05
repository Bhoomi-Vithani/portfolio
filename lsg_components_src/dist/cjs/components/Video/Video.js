'use strict';

var React__default = require('react');
var VideoWrapper = require('./shared/VideoWrapper.js');

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
/** @deprecated. The component will be removed in the next major release. Please use alternative libraries. */
class Video extends React__default__namespace.Component {
  render() {
    const {
      left,
      right,
      ...props
    } = this.props;
    return /*#__PURE__*/React__default__namespace.createElement(VideoWrapper.VideoWrapper, {
      ...props,
      actionTopLeft: left,
      actionTopRight: right
    });
  }
}
Video.displayName = "Video";

exports.Video = Video;

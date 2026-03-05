'use strict';

var React__default = require('react');
var ResizeEvents = require('../../../utils/windowEvents/ResizeEvents.js');
var ProcessPagePresentation = require('./ProcessPagePresentation.js');

// @ts-strict-ignore
class ProcessPageWrapper extends React__default.Component {
  constructor(props) {
    super(props);
    this.onViewportChange = vp => this.setState(() => ({
      isMobile: ["xs", "sm", "md"].includes(vp)
    }));
    this.findPortalHeaderAndSetClosed = () => {
      // This is a workaround to detect if the page has a PortalHeader.
      // It checks for the presence of the host class that is used in the PortalHeader component.
      // Maybe this can be improved in the future by using a more reliable method.
      // the class start with "lsg" and ends with "--portal-header"
      const el = document.querySelector('[class^="lsg"][class$="--portal-header"]');
      if (el) {
        this.setState({
          isClosedArea: true
        });
      }
    };
    this.state = {
      menuOpen: false,
      isMobile: ["xs", "sm", "md"].includes(ResizeEvents.getInitialViewportSize()),
      isClosedArea: false
    };
  }
  componentDidMount() {
    ResizeEvents.addViewportCallback(this.onViewportChange);
    this.findPortalHeaderAndSetClosed();
  }
  componentWillUnmount() {
    ResizeEvents.removeViewportCallback(this.onViewportChange);
  }
  render() {
    const {
      menuOpen,
      isMobile
    } = this.state;
    // Besides, countIconLinks logic is for React only.
    let countIconLinks = 0;
    if (this.props.iconLinks?.props?.children) {
      if (!this.props.iconLinks?.props?.children?.length) {
        countIconLinks = 1;
      } else {
        countIconLinks = this.props.iconLinks?.props?.children?.length;
      }
    }
    return /*#__PURE__*/React__default.createElement(ProcessPagePresentation.ProcessPagePresentation, {
      ...this.props,
      countIconLinks: countIconLinks,
      isMobile: isMobile,
      menuOpen: menuOpen,
      onMenuOpenChange: newOpen => this.setState(() => ({
        menuOpen: newOpen
      })),
      isClosedArea: this.state.isClosedArea
    });
  }
}

exports.ProcessPageWrapper = ProcessPageWrapper;

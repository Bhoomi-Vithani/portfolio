'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var ResizeEvents = require('../../../utils/windowEvents/ResizeEvents.js');
var BarDiagramGroup_styles = require('./BarDiagramGroup.styles.js');

// @ts-strict-ignore
// TODO: Import from styles throws an error during building, and cannot be imported. Problem should be solved to
//  avoid drifting.
const spaceBetweenItems = 8;
const BarDiagramGroupPresentation = ({
  id,
  children,
  className,
  noMargin,
  isStencilHost,
  ariaDescription,
  color,
  direction = "vertical",
  amountItemsInRow
}) => {
  const descriptionId = index.useUniqueId(`${BarDiagramGroup_styles.hostClass}-`, id);
  const groupElementRef = React__default.useRef(null);
  const [state, setState] = React__default.useState({
    width: 0,
    viewport: ""
  });
  const sizeOfEachChildItem = direction === "horizontal" && amountItemsInRow ?
  // eslint-disable-next-line no-unsafe-optional-chaining
  Math.floor(groupElementRef?.current?.clientWidth / amountItemsInRow) - spaceBetweenItems * 4 // bu
  :
  // factor
  0;
  const viewPort = ResizeEvents.getViewportSize();
  // The width of one bar diagram become always recalculated depending on the given amount of child per
  // row. But there is a min-width in single bar style which can overruling the calculated width.
  const onResize = () => {
    setState({
      width: sizeOfEachChildItem,
      viewport: viewPort
    });
  };
  index.useResize(onResize, [sizeOfEachChildItem, viewPort]);
  React__default.useEffect(onResize, [sizeOfEachChildItem]);
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [BarDiagramGroup_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${BarDiagramGroup_styles.hostClass}-bars-direction__${direction}`]: !!direction,
      [`${BarDiagramGroup_styles.hostClass}-bars-direction__${direction}_expand`]: direction === "horizontal"
    }),
    isStencilHost: isStencilHost,
    "aria-describedby": ariaDescription ? descriptionId : undefined,
    ref: groupElementRef
  }, ariaDescription && (/*#__PURE__*/React__default.createElement("span", {
    id: descriptionId,
    className: `${BarDiagramGroup_styles.hostClass}-description__hidden`
  }, ariaDescription)), React__default.Children.map(children, child => /*#__PURE__*/React__default.cloneElement(child, {
    color: child.props.color || color,
    width: state.width,
    hide: direction === "horizontal" && state.width === 0 // show children in horizontal when
    // measurement of available space is completed in order to prevent flicker effect of bars
    // (render order parent/child)
  })));
};
BarDiagramGroupPresentation.displayName = "BarDiagramGroupPresentation";

exports.BarDiagramGroupPresentation = BarDiagramGroupPresentation;

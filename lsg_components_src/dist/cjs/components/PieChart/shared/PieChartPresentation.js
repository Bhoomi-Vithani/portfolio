'use strict';

var d3Shape = require('d3-shape');
var React__default = require('react');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var PieChart_styles = require('./PieChart.styles.js');

// @ts-strict-ignore
const spread = s => s.value;
const PieChartPresentation = ({
  id,
  label,
  subline,
  className,
  dataSeries,
  isDecorative = true,
  activeIndex,
  onItemActive,
  htmlAttrs = {},
  ...props
}) => {
  const idSlice = index.useUniqueId(`${PieChart_styles.hostClass}-pie-slice`, id);
  const hostRef = React__default.useRef(null);
  const ringThickness = index.useViewportRange(undefined, "md") ? 24 : 28;
  const [size, setSize] = React__default.useState(hostRef.current?.getBoundingClientRect().width || 0);
  const [radius, setRadius] = React__default.useState(0);
  const resize = () => {
    if (hostRef.current) {
      setSize(hostRef.current.getBoundingClientRect().width);
    }
  };
  index.useResize(resize, [size, hostRef]);
  React__default.useEffect(resize, []);
  React__default.useEffect(() => {
    setRadius(size / 2);
  }, [size]);
  // #########  Hover state handling #########
  const [hoveredIndex, setHoveredIndex] = React__default.useState(activeIndex);
  const handleSliceHover = index => {
    setHoveredIndex(index);
    onItemActive?.(index);
  };
  const handleSliceHoverOut = () => {
    setHoveredIndex(null);
    onItemActive?.(null);
  };
  React__default.useEffect(() => {
    handleSliceHover(activeIndex);
  }, [activeIndex]);
  // #########  Keyboard navigation #########
  const [focusedIndex, setFocusedIndex] = React__default.useState(activeIndex);
  const sliceRefs = React__default.useRef([]);
  const handleSliceBlur = () => {
    sliceRefs.current[focusedIndex]?.blur();
    onItemActive?.(null);
    setFocusedIndex(null);
  };
  const handleSliceFocusIn = index => {
    setFocusedIndex(index);
    onItemActive?.(index);
  };
  React__default.useEffect(() => {
    sliceRefs.current[focusedIndex]?.focus();
  }, [focusedIndex]);
  const handleKeyDown = (event, index) => {
    setHoveredIndex(null);
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault(); // prevent scrolling
        handleSliceFocusIn((index + 1 + dataSeries.length) % dataSeries.length);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault(); // prevent scrolling
        handleSliceFocusIn((index - 1 + dataSeries.length) % dataSeries.length);
        break;
      case "Escape":
        handleSliceBlur();
        break;
      case "Tab":
        event.preventDefault(); // prevent skipping element
        if (event.shiftKey) {
          handleSliceFocusIn((index - 1 + dataSeries.length) % dataSeries.length);
          if (focusedIndex === 0) {
            handleSliceBlur();
          }
        } else {
          handleSliceFocusIn((index + 1 + dataSeries.length) % dataSeries.length);
          if (focusedIndex === dataSeries.length - 1) {
            handleSliceBlur();
          }
        }
        break;
    }
  };
  const pie$1 = d3Shape.pie().value(spread).sort(null)(dataSeries);
  const arcGenerator = d3Shape.arc().outerRadius(radius).innerRadius(props.donutShape ? radius - ringThickness : 0).padAngle(0);
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [`${PieChart_styles.hostClass}`]: true
    }),
    ref: hostRef,
    id: id,
    "aria-hidden": isDecorative
  }, /*#__PURE__*/React__default.createElement("svg", {
    className: DomUtils.cleanupClassObject({
      [`${PieChart_styles.hostClass}-chart-area`]: true,
      [className]: !!className
    }),
    viewBox: `0 0 ${size} ${size}`,
    "aria-labelledby": isDecorative ? undefined : [`${PieChart_styles.hostClass}__text-label`, htmlAttrs["aria-labelledby"]].filter(t => !!t).join(" "),
    "aria-describedby": isDecorative ? undefined : [`${PieChart_styles.hostClass}__text-subline`, htmlAttrs["aria-describedby"]].filter(t => !!t).join(" "),
    // role is set to document https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/document_role
    // this makes sure that screen readers can read the content of the chart but do not interfere with
    // the keyboard navigation
    role: isDecorative ? "presentation" : "document",
    tabIndex: 0
  }, /*#__PURE__*/React__default.createElement("g", {
    transform: `translate(${radius}, ${radius})`,
    role: isDecorative ? "presentation" : "grid"
  }, /*#__PURE__*/React__default.createElement("g", {
    role: isDecorative ? "presentation" : "row"
  }, pie$1.map((arc, index) => {
    const isHovered = index === hoveredIndex;
    const isFocused = index === focusedIndex;
    const isActive = hoveredIndex !== undefined && focusedIndex !== undefined;
    const pieSliceId = `${idSlice}-${index}`;
    return /*#__PURE__*/React__default.createElement("g", {
      role: "gridcell",
      className: DomUtils.cleanupClassObject({
        [`${PieChart_styles.hostClass}-pie-piece__container`]: true
      }),
      tabIndex: isDecorative ? undefined : 0,
      "aria-labelledby": isDecorative ? "presentation" : `${arc.data.value}`,
      onKeyDown: event => handleKeyDown(event, index),
      onFocus: () => {
        handleSliceFocusIn(index);
      },
      onMouseEnter: () => {
        setFocusedIndex(null);
        handleSliceHover(index);
      },
      onMouseLeave: () => {
        setFocusedIndex(null);
        handleSliceHoverOut();
      },
      ref: el => {
        sliceRefs.current[index] = el;
      }
    }, /*#__PURE__*/React__default.createElement("title", null, arc.data.ariaLabel ?? `${arc.data.label}: ${arc.data.value}`), /*#__PURE__*/React__default.createElement("path", {
      className: DomUtils.cleanupClassObject({
        [`${PieChart_styles.hostClass}-pie-piece`]: true,
        [`${PieChart_styles.hostClass}-pie-piece__color-${arc.data.indicatorColor ?? "primary-1"}`]: !!arc.data.indicatorColor,
        [`${PieChart_styles.hostClass}-pie-piece__inactive`]: isActive && (hoveredIndex !== null && !isHovered || focusedIndex !== null && !isFocused)
      }),
      key: pieSliceId,
      id: pieSliceId,
      d: arcGenerator(arc)
    }));
  }))), /*#__PURE__*/React__default.createElement("circle", {
    className: DomUtils.cleanupClassObject({
      [`${PieChart_styles.hostClass}-outer-border`]: true
    }),
    cx: radius,
    cy: radius,
    r: radius,
    pointerEvents: "none"
  }), props.donutShape && (/*#__PURE__*/React__default.createElement("circle", {
    className: DomUtils.cleanupClassObject({
      [`${PieChart_styles.hostClass}-inner-circle`]: true
    }),
    cx: radius,
    cy: radius,
    r: radius - ringThickness,
    pointerEvents: "none"
  })), props.donutShape && label && (/*#__PURE__*/React__default.createElement("foreignObject", {
    x: radius - size * 0.35,
    y: radius - size * 0.25,
    width: size * 0.7,
    height: size * 0.5
  }, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${PieChart_styles.hostClass}__text-container`]: true
    }),
    id: `${PieChart_styles.hostClass}__text`,
    role: isDecorative ? "presentation" : undefined
  }, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${PieChart_styles.hostClass}__text-label`]: true
    }),
    id: `${PieChart_styles.hostClass}__text-label`
  }, label), /*#__PURE__*/React__default.createElement("div", {
    className: `${PieChart_styles.hostClass}__text-subline`,
    id: `${PieChart_styles.hostClass}__text-subline`
  }, subline))))));
};

exports.PieChartPresentation = PieChartPresentation;

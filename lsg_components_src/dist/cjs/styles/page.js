'use strict';

var units = require('./units.js');
var viewport = require('./viewport.js');

// @ts-strict-ignore
const sectionMeasurementsConfiguration = {
  noSidebarContent: {
    width: {
      xs: "100%",
      // substract double page padding from width
      lg: "86%",
      // see grid (optional for desktop): margin 1/14
      xl: "86%" // see grid (optional for desktop): margin 1/14
    },
    maxWidth: {
      xs: "30rem",
      sm: "48rem",
      md: "64rem",
      lg: "90rem",
      xl: "90rem"
    },
    pageMaxWidth: "105rem" // 1680px content max-width (including content margins), also applied to headers
    // (undocumented)
  },
  sidebarContent: {
    width: {
      xs: `calc(100% - ${units.bu(14)})`,
      // substract double page padding from width
      md: "80%",
      // see grid (mandatory for desktop): margin 1/10
      lg: "80%",
      // see grid (mandatory for desktop): margin 1/10
      xl: `${100 * 12 / 14}%` // see grid (mandatory for desktop): margin 1/14
    },
    maxWidth: {
      xs: "480px",
      sm: "768px",
      md: "1024px",
      lg: "1024px",
      xl: "1440px"
    },
    pageMaxWidth: "2280px" // 360px sidebar width + 1920 content max-width (including content margins) (undocumented)
  },
  layer: {
    padding: {
      xs: `0 ${units.bu(4)}`,
      // Measurement 5
      sm: `0 ${units.bu(8)}`,
      // Measurement 5
      md: `0 ${units.bu(24)}`,
      // Measurement 5
      xl: `0 ${units.bu(30)}` // Measurement 5
    },
    width: {
      xs: `calc(100% - ${units.bu(8)})`,
      // override sidebar definition here
      sm: `calc(100% - ${units.bu(16)})`,
      // override sidebar definition here
      md: `calc(100% - ${units.bu(48)})`,
      // override sidebar definition here
      xl: `calc(100% - ${units.bu(60)})` // override sidebar definition here
    },
    maxWidth: {
      xs: units.bu(120),
      // Measurement 3
      sm: "none",
      md: units.bu(251),
      // Measurement 2 - 4bu Section padding
      lg: units.bu(251),
      // Measurement 2 - 4bu Section padding
      xl: units.bu(251) // Measurement 2 - 4bu Section padding
    }
  },
  layer75: {
    maxWidth: {
      xs: units.bu(120),
      // Measurement 3
      sm: "none",
      md: units.bu(382.5),
      // Measurement 2 - 4bu Section padding
      lg: units.bu(382.5),
      // Measurement 2 - 4bu Section padding
      xl: units.bu(382.5) // Measurement 2 - 4bu Section padding
    }
  },
  sidemenu: {
    padding: {
      xs: `0 ${units.bu(8 - 1)}`
    },
    width: {
      md: "100%",
      // override sidebar definition here
      lg: "100%",
      // override sidebar definition here
      xl: "100%" // override sidebar definition here
    },
    maxWidth: {
      xs: "none",
      sm: "none",
      md: "none",
      lg: "none",
      xl: "none"
    }
  }
};
const viewports = ["xs", "sm", "md", "lg", "xl", "xxl"];
// convert viewport-specific definitions from sectionMeasurementsConfiguration to css in mobile-first notation
const styleForViewports = (property, values) => {
  if (!values) {
    return undefined;
  }
  return viewports.reduce((acc, viewport$1) => {
    const value = values[viewport$1];
    if (value) {
      const statement = `${property}: ${value};`;
      // mobile first notation
      return acc + (viewport$1 === "xs" ? statement : viewport.styleViewport(viewport$1, "min", statement));
    }
    return acc;
  }, "");
};
const sectionMeasurements = Object.keys(sectionMeasurementsConfiguration).reduce((acc, key) => {
  const value = sectionMeasurementsConfiguration[key];
  acc[key] = {
    padding: styleForViewports("padding", value.padding),
    width: styleForViewports("width", value.width),
    maxWidth: styleForViewports("max-width", value.maxWidth),
    pageMaxWidth: `max-width: ${value.pageMaxWidth}`
  };
  return acc;
}, {});

exports.sectionMeasurements = sectionMeasurements;

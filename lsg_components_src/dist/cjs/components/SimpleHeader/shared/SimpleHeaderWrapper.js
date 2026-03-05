'use strict';

var React__default = require('react');
var index = require('../../../utils/Hooks/index.js');
var SimpleHeaderPresentation = require('./SimpleHeaderPresentation.js');

// @ts-strict-ignore
const SimpleHeaderWrapper = props => {
  const {
    value
  } = props;
  // navigational elements
  const activeElement = React__default.useRef(undefined);
  const mobileOpenMenuButton = React__default.useRef(undefined);
  const [open, setOpen] = React__default.useState(false);
  const [forceMobile, setForceMobile] = React__default.useState(false);
  // https://stackoverflow.com/questions/46240647/how-to-force-a-functional-react-component-to-render/53837442#53837442
  const [, forceUpdate] = React__default.useReducer(x => x + 1, 0);
  const isMobileViewport = index.useViewportRange(undefined, "md");
  const isMobile = forceMobile || isMobileViewport;
  const [iconLinkPressedOrClicked, setIconLinkPressedOrClicked] = React__default.useState(false);
  // triggered by pressing Enter or clicking on X Icon in opened mobile side menu, necessary for focus outline placement back on Burger Menu Icon in case of Key use
  const handleOnIconClick = () => {
    setIconLinkPressedOrClicked(true);
  };
  /** Place Focus on mobile Menu button, after mobile menu has been closed */
  React__default.useEffect(() => {
    if (!open && isMobile && iconLinkPressedOrClicked) {
      mobileOpenMenuButton.current?.focus();
    }
  }, [open, iconLinkPressedOrClicked]);
  /** Trigger a 2nd render to update value indicator (the line below the menu items) */
  React__default.useEffect(() => {
    // and also close mobile menu
    setOpen(false);
    forceUpdate();
  }, [value]);
  /** Also trigger a 2nd render to update value indicator when we change from mobile/desktop */
  React__default.useEffect(() => {
    forceUpdate();
  }, [isMobile]);
  return /*#__PURE__*/React__default.createElement(SimpleHeaderPresentation.SimpleHeaderPresentation, {
    ...props,
    activeElement: activeElement.current,
    activeRef: activeElement,
    isMobile: forceMobile || isMobile,
    mobileOpenMenuButtonRef: mobileOpenMenuButton,
    open: open,
    onOpenChange: newOpen => setOpen(newOpen),
    onForceMobileChange: forceMobileValue => setForceMobile(forceMobileValue),
    handleOnIconClick: handleOnIconClick
  });
};

exports.SimpleHeaderWrapper = SimpleHeaderWrapper;

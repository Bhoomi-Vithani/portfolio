'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var index = require('../../../utils/Hooks/index.js');
var Localization = require('../../../utils/Localization.js');
var IconLinkWrapper = require('../../IconLink/shared/IconLinkWrapper.js');
var SnackbarPresentation = require('../../Snackbar/shared/SnackbarPresentation.js');

// @ts-strict-ignore
const TanContext = /*#__PURE__*/React__default.createContext({
  setNotification: () => {}
});
const observerOptions = {
  root: null,
  // null = viewport
  threshold: 0.3,
  // 0-1 how much of element needs to be shown
  rootMargin: "0px" // px / %
};
const TanAreaPresentation = ({
  children,
  id
}) => {
  const uniqueId = index.useUniqueId("", id);
  const ref = React__default.useRef(null);
  const [notification, setNotification] = React__default.useState({
    notificationSubline: "",
    notificationImageAlt: "",
    notificationImageSrc: "",
    notificationTitleText: "",
    notificationDisabled: false
  });
  const [notificationOpen, setNotificationOpen] = React__default.useState(false);
  const [notificationClicked, setNotificationClicked] = React__default.useState(false);
  const [tanPanelMounted, setTanPanelMounted] = React__default.useState(false);
  const value = React__default.useMemo(() => ({
    id: uniqueId,
    ref,
    setNotification,
    setTanPanelMounted
  }), [uniqueId, ref, setNotification, setTanPanelMounted]);
  React__default.useEffect(() => {
    if (ref.current && !notificationClicked) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setNotificationOpen(!entry.isIntersecting));
      }, observerOptions);
      const element = ref.current;
      observer.observe(element);
      return () => {
        observer.unobserve(element);
      };
    }
  }, [ref.current, notificationClicked]);
  const scrollToTanPanel = () => {
    ref.current.scrollIntoView({
      behavior: "smooth"
    });
    setNotificationClicked(true);
  };
  return /*#__PURE__*/React__default.createElement(TanContext.Provider, {
    value: value
  }, tanPanelMounted && !notification.notificationDisabled && (/*#__PURE__*/React__default.createElement(SnackbarPresentation.SnackbarPresentation, {
    illustration: notification.notificationImageSrc,
    illustrationAlt: notification.notificationImageAlt,
    heading: notification.notificationTitleText,
    subline: notification.notificationSubline,
    open: notificationOpen,
    role: undefined,
    iconLinks: /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
      label: Localization.texts.lsg.component.TanPanel.downButton,
      appearance: "no-text",
      icon: icons.interaction_arrows_arrowDown,
      onClick: () => {
        scrollToTanPanel();
        setNotificationOpen(false);
      }
    })
  })), children);
};

exports.TanAreaPresentation = TanAreaPresentation;
exports.TanContext = TanContext;

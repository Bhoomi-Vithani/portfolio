import { interaction_arrows_arrowDown } from '@lsg/icons';
import React__default, { useRef, useState, useMemo, useEffect } from 'react';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { texts } from '../../../utils/Localization.js';
import { IconLinkWrapper } from '../../IconLink/shared/IconLinkWrapper.js';
import { SnackbarPresentation } from '../../Snackbar/shared/SnackbarPresentation.js';

// @ts-strict-ignore
const TanContext = React__default.createContext({ setNotification: () => { } });
const observerOptions = {
    root: null, // null = viewport
    threshold: 0.3, // 0-1 how much of element needs to be shown
    rootMargin: "0px", // px / %
};
const TanAreaPresentation = ({ children, id }) => {
    const uniqueId = useUniqueId("", id);
    const ref = useRef(null);
    const [notification, setNotification] = useState({
        notificationSubline: "",
        notificationImageAlt: "",
        notificationImageSrc: "",
        notificationTitleText: "",
        notificationDisabled: false,
    });
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [notificationClicked, setNotificationClicked] = useState(false);
    const [tanPanelMounted, setTanPanelMounted] = useState(false);
    const value = useMemo(() => ({ id: uniqueId, ref, setNotification, setTanPanelMounted }), [uniqueId, ref, setNotification, setTanPanelMounted]);
    useEffect(() => {
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
        ref.current.scrollIntoView({ behavior: "smooth" });
        setNotificationClicked(true);
    };
    return (React__default.createElement(TanContext.Provider, { value: value },
        tanPanelMounted && !notification.notificationDisabled && (React__default.createElement(SnackbarPresentation, { illustration: notification.notificationImageSrc, illustrationAlt: notification.notificationImageAlt, heading: notification.notificationTitleText, subline: notification.notificationSubline, open: notificationOpen, role: undefined, iconLinks: React__default.createElement(IconLinkWrapper, { label: texts.lsg.component.TanPanel.downButton, appearance: "no-text", icon: interaction_arrows_arrowDown, onClick: () => {
                    scrollToTanPanel();
                    setNotificationOpen(false);
                } }) })),
        children));
};

export { TanAreaPresentation, TanContext };

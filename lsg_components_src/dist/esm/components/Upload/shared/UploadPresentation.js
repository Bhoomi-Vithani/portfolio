import React__default, { useMemo } from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useDwindle, useUniqueId } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { A11yMeaningfulLabelContext } from '../../A11yMeaningfulLabel/shared/A11yMeaningfulLabelContext.js';
import { CardsCustomItemPresentation } from '../../CardsCustomItem/shared/CardsCustomItemPresentation.js';
import { hostClass } from './Upload.styles.js';

// @ts-strict-ignore
// Figma: https://www.figma.com/design/kwXSBuPSii083bcLgLgv9m/Data-Upload-Specs?node-id=2-160&t=mvb9zOzxZDELirQB-0
// Article about Accessible File uploads: https://medium.com/@christophergoodwin.me/accessible-file-uploads-9ecacac17276
// This component is build to handle a variety of use-cases. It can cover multi and single file uploads.
// It can handle drag & drop events and can take different items as children inside the card container.
const UploadPresentation = (props) => {
    const { id: idProp, className, noMargin, onChange = () => { }, children, disabled, loading, cardAs = "div", multipleFiles, handleFileUpload, loadingText, inputRef, acceptedFileTypes, ariaLabel, invalid, name, } = props;
    const [dragOver, setDragOver] = React__default.useState(false);
    const [hasFocus, setHasFocus] = React__default.useState(false);
    const [isActive, setIsActive] = React__default.useState(false);
    const [{ hasKeyboardFocus, hasMouseHover, clicked }, { setHasKeyboardFocus, setHasMouseHover }, { onMouseDown, onMouseUp, onMouseLeave, onKeyDown, onKeyUp },] = useDwindle(props);
    const id = useUniqueId(`${hostClass}-`, idProp);
    const value = useMemo(() => ({
        onMouseHoverChange: setHasMouseHover,
        onKeyboardFocusChange: setHasKeyboardFocus,
        onMouseUp,
        onMouseDown,
        onMouseLeave,
        onKeyDown,
        onKeyUp,
        disabled,
        loading,
        isActive: clicked,
        hasMouseHover,
        hasKeyboardFocus,
        type: "label",
        htmlFor: id,
    }), [
        setHasMouseHover,
        setHasKeyboardFocus,
        onMouseUp,
        onMouseDown,
        onMouseLeave,
        onKeyDown,
        onKeyUp,
        disabled,
        loading,
        clicked,
        hasMouseHover,
        hasKeyboardFocus,
        id,
    ]);
    return (React__default.createElement(Host, { id: `${id}-base`, "data-loading": loading, "data-disabled": disabled, className: cleanupClassObject({
            [hostClass]: true,
            [className]: !!className,
            [`${lsgPre}no-margin`]: noMargin,
            [`${hostClass}-disabled`]: disabled,
        }) },
        React__default.createElement(A11yMeaningfulLabelContext.Provider, { value: value },
            React__default.createElement(CardsCustomItemPresentation, { id: `${id}-drop-zone`, "data-drag-over": !disabled && dragOver, verticalAlign: "center", horizontalAlignment: "center", disabled: disabled, as: cardAs, spinnerSize: 25, loading: loading, loadingText: loadingText, appearance: "placeholder", centeredLayout: true, className: cleanupClassObject({
                    [`${hostClass}__drag`]: !disabled && dragOver,
                }), hasKeyboardFocus: hasFocus, hasMouseHover: !disabled && hasMouseHover, isActive: isActive, contentTop: React__default.createElement("input", { type: "file", name: name, "aria-invalid": invalid, "aria-label": ariaLabel, accept: acceptedFileTypes?.join(", "), multiple: multipleFiles, className: cleanupClassObject({
                        [`${hostClass}-input`]: true,
                    }), ref: inputRef, id: id, disabled: disabled, onFocus: () => {
                        if (document.documentElement.getAttribute("data-whatinput") === "keyboard") {
                            setHasFocus(true);
                        }
                    }, onChange: ev => {
                        onChange(ev);
                        if (handleFileUpload) {
                            const files = ev.target.files;
                            handleFileUpload(files);
                            // eslint-disable-next-line no-param-reassign
                            ev.target.value = "";
                        }
                    }, onBlur: () => setHasFocus(false), onMouseEnter: () => setHasMouseHover(true), onMouseLeave: () => setHasMouseHover(false), onMouseDown: () => setIsActive(true), onMouseUp: () => setIsActive(false), onDragOver: event => {
                        event.preventDefault();
                    }, onDragLeave: () => {
                        setDragOver(false);
                    }, onDragEnter: () => {
                        setDragOver(true);
                    }, onKeyDown: event => {
                        if (loading && (event.key === "Enter" || event.key === " ")) {
                            event.preventDefault();
                        }
                    }, onDrop: event => {
                        event.preventDefault();
                        setDragOver(false);
                        if (!disabled) {
                            handleFileUpload(event.dataTransfer.files);
                            onChange(event);
                        }
                    } }) }, children))));
};
UploadPresentation.displayName = "UploadPresentation";

export { UploadPresentation };

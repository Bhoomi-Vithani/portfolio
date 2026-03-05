'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var A11yMeaningfulLabelContext = require('../../A11yMeaningfulLabel/shared/A11yMeaningfulLabelContext.js');
var CardsCustomItemPresentation = require('../../CardsCustomItem/shared/CardsCustomItemPresentation.js');
var Upload_styles = require('./Upload.styles.js');

// @ts-strict-ignore
// Figma: https://www.figma.com/design/kwXSBuPSii083bcLgLgv9m/Data-Upload-Specs?node-id=2-160&t=mvb9zOzxZDELirQB-0
// Article about Accessible File uploads: https://medium.com/@christophergoodwin.me/accessible-file-uploads-9ecacac17276
// This component is build to handle a variety of use-cases. It can cover multi and single file uploads.
// It can handle drag & drop events and can take different items as children inside the card container.
const UploadPresentation = props => {
  const {
    id: idProp,
    className,
    noMargin,
    onChange = () => {},
    children,
    disabled,
    loading,
    cardAs = "div",
    multipleFiles,
    handleFileUpload,
    loadingText,
    inputRef,
    acceptedFileTypes,
    ariaLabel,
    invalid,
    name
  } = props;
  const [dragOver, setDragOver] = React__default.useState(false);
  const [hasFocus, setHasFocus] = React__default.useState(false);
  const [isActive, setIsActive] = React__default.useState(false);
  const [{
    hasKeyboardFocus,
    hasMouseHover,
    clicked
  }, {
    setHasKeyboardFocus,
    setHasMouseHover
  }, {
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    onKeyDown,
    onKeyUp
  }] = index.useDwindle(props);
  const id = index.useUniqueId(`${Upload_styles.hostClass}-`, idProp);
  const value = React__default.useMemo(() => ({
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
    htmlFor: id
  }), [setHasMouseHover, setHasKeyboardFocus, onMouseUp, onMouseDown, onMouseLeave, onKeyDown, onKeyUp, disabled, loading, clicked, hasMouseHover, hasKeyboardFocus, id]);
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: `${id}-base`,
    "data-loading": loading,
    "data-disabled": disabled,
    className: DomUtils.cleanupClassObject({
      [Upload_styles.hostClass]: true,
      [className]: !!className,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${Upload_styles.hostClass}-disabled`]: disabled
    })
  }, /*#__PURE__*/React__default.createElement(A11yMeaningfulLabelContext.A11yMeaningfulLabelContext.Provider, {
    value: value
  }, /*#__PURE__*/React__default.createElement(CardsCustomItemPresentation.CardsCustomItemPresentation, {
    id: `${id}-drop-zone`,
    "data-drag-over": !disabled && dragOver,
    verticalAlign: "center",
    horizontalAlignment: "center",
    disabled: disabled,
    as: cardAs,
    spinnerSize: 25,
    loading: loading,
    loadingText: loadingText,
    appearance: "placeholder",
    centeredLayout: true,
    className: DomUtils.cleanupClassObject({
      [`${Upload_styles.hostClass}__drag`]: !disabled && dragOver
    }),
    hasKeyboardFocus: hasFocus,
    hasMouseHover: !disabled && hasMouseHover,
    isActive: isActive,
    contentTop: /*#__PURE__*/React__default.createElement("input", {
      type: "file",
      name: name,
      "aria-invalid": invalid,
      "aria-label": ariaLabel,
      accept: acceptedFileTypes?.join(", "),
      multiple: multipleFiles,
      className: DomUtils.cleanupClassObject({
        [`${Upload_styles.hostClass}-input`]: true
      }),
      ref: inputRef,
      id: id,
      disabled: disabled,
      onFocus: () => {
        if (document.documentElement.getAttribute("data-whatinput") === "keyboard") {
          setHasFocus(true);
        }
      },
      onChange: ev => {
        onChange(ev);
        if (handleFileUpload) {
          const files = ev.target.files;
          handleFileUpload(files);
          // eslint-disable-next-line no-param-reassign
          ev.target.value = "";
        }
      },
      onBlur: () => setHasFocus(false),
      onMouseEnter: () => setHasMouseHover(true),
      onMouseLeave: () => setHasMouseHover(false),
      onMouseDown: () => setIsActive(true),
      onMouseUp: () => setIsActive(false),
      onDragOver: event => {
        event.preventDefault();
      },
      onDragLeave: () => {
        setDragOver(false);
      },
      onDragEnter: () => {
        setDragOver(true);
      },
      onKeyDown: event => {
        if (loading && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
        }
      },
      onDrop: event => {
        event.preventDefault();
        setDragOver(false);
        if (!disabled) {
          handleFileUpload(event.dataTransfer.files);
          onChange(event);
        }
      }
    })
  }, children)));
};
UploadPresentation.displayName = "UploadPresentation";

exports.UploadPresentation = UploadPresentation;

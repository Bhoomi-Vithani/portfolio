### Upcoming versions

-   Further a11y optimization
-   Dependency vulnerability issue fixes (SonarType/Elias)
-   Review of SonarQube Security Hotspots, Bugs & Code Coverage
-   Overworked spacing and layout features

### Please note!

-   13.02.2023: Webfont Gotham is now part of the Monotype library, so we updated the font files accordingly.
-   13.02.2023: Gotham ScreenSmart webfont license isn't valid anymore. Please switch to the regular Gotham webfont if
    necessary!
-   21.09.2022: The LSG Figma starter package is now available on Neugelb's Figma site. For
    informative purposes, the site can be visited by anyone without registration. You can find the link on the
    'Designer' Brand Portal LSG website.
-   12.03.2025: Added information to the LSG 'Designer' website about how you can work with the Figma starter package.

### ❄️ 19.13.0 (lsgs-a12e7) 02.02.2026

**RELEASE NOTES**

-   We finally migrated to React 19. Support for React 18 will be dropped soon. Contact us if you still rely on React 18.
-   We upgraded the Vite boilerplate to the most recent version. Please check your custom configurations after updating.

**FEATURES**

-   **feat**: Added data attributes to LSG components for tracking purposes (CCSN-92962)
-   **feat**: React 19 support (CCSN-96702)
-   **feat**: Upgrade boilerplate to most recent vite version (CCSN-96704)
-   **feat** (_Paragraph_): Added Multi-Column option (CCSN-94778).
-   **feat** (_PortalHeader_): Close Flyout when the page changes to facilitate the usage of react router (CCSN-96783)
-   **feat** (_SideNavigationPage_): Close Flyout when the page changes to facilitate the usage of react router (CCSN-96783)

**NON-BREAKING CHANGES**

-   **chore**: Converting interface/type exports to use TypeScript's export type {} syntax (CCSN-95132).
-   **fix** (_ChipsItemAction_, _ChipsItemDismissible_, _ChipsSelect_): The color levels of the 'X' clear icon now comply with the design specifications (CCSN-95071).
-   **fix** (_DataTable_): Fixed an issue where the vertical divider line of sticky columns extended over the horizontal scrollbar (CCSN-84581).
-   **fix** (_DonutChart_): Smaller label headline inside donat depends on viewport and grid columns. Fix appearance of legend elements to new design spec (CCSN-94986)
-   **fix** (_DatePicker_): Improved the calendar icon's color level behavior: The color now darkens when the input field is focused (CCSN-95071).
-   **fix** (_DatePicker_): Fixed a bug where the Datepicker Flyout was cut off by a layer header (CCSN-94988).
-   **fix** (_GallerySlider_, _SliderPagination_): The color levels of the forward and back arrow icons now comply with the design specifications; also improved text on both LSG websites (CCSN-95071).
-   **fix** (_Paragraph_): Setting the `lineLength` prop of Paragraph to "wide" now shows the correct font size and width of the appropriate Paragraph variations (CCSN-94491).
-   **fix** (_Search_): The color levels of the magnifying glass icon now comply with the design specification; exchanged structural image file and improved text for LSG website (CCSN-95071).
-   **fix** (_Search_): Removed the native search cancel button (x-Icon) so only our custom one is showing and not two at the same time (CCSN-94402).ç
-   **fix** (_Select_): The color levels of the chevron arrow icon now comply with the design specification (CCSN-95071).
-   **fix** (_Snackbar_): The Self-Dismissing Snackbar version now properly closes itself also when the user goes to another browser tab and comes back later (CCSN-94387).

**DOCUMENTATION**

-   **docs**: Styleguide app is now migrated to vite js (CCSN-96704)
-   **docs**: Improved the ReactRouter documentation page. (CCSN-96783)
-   **docs** (_ProcessPage_, _ProcessPage_UXPattern_): Added a hint that according to the design specifications, the 'Next Step'/'Submit' Buttons should switch from
    Secondary to Primary style once all required fields are filled in correctly; adjusted code examples and exchanged image files accordingly (CCSN-94147).
-   **docs** (_TextField_): Clarified the usage of `aria-errormessage` (CCSN-92343).

### 🍂 19.12.0 (lsgs-ba4a3) 01.12.2025

**NEW COMPONENT**

-   **feat** (_FormContainer_): The new FormContainer component simplifies reducing vertical whitespace of user-input forms by automatically reducing
    paddings and bottom-margins for nested form elements when `spacing="dense"` is set.
    This works seamlessly within Grid layouts. The following components support the dense spacing functionality:
    TextField, Autocomplete, DatePicker, DateTextField, NumberTextField, OptionsTextField, and Select.
    See further information on https://markenportal.commerzbank.com/styleguide/forms-pattern/ (CCSN-93977).

**FEATURES**

-   **feat** (_Autocomplete_, _Checkbox_, _DatePicker_, _InputGroup_, _Radio_, _Select_, _Switch_, _TextField_): Added a margin of 2 BU (8 px) between errorText and helperText (when both are set) to comply with the design specifications (CCSN-92941).
-   **feat** (_Autocomplete_, _DatePicker_, _DateTextField_, _Grid_, _NumberTextField_, _OptionsTextField_, _Select_, _TextField_): Added new `spacing="dense"` prop to each component (CCSN-92509).
-   **feat** (_CardsCustomItem_): Added a divider line feature (CCSN-90364).
-   **feat** (_DescriptionList_): Support centered layout (CCSN-92693)
-   **feat** (_DonutChart_): Rework of DonutChart in 'lsg.charts' package (CCSN-94298).
-   **feat** (_Layout_): add 'small' option to componentSpacing prop; update examples and documentation (CCSN-94421)
-   **feat** (_Picture_): The "ratio" now includes 3:4 and 9:16 and is available as an image example on the Brand
    Portal/Markenportal (CCSN-93920).
-   **feat** (_Stage_): Added prop `onScrollerClick` to customize the click behaviour of the scroll button (CCSN-93919).

**NON-BREAKING CHANGES**

-   **fix** (_Accordion_): Fixed an animation bug that led to a visibly stuck state when the chevron icon was clicked in quick succession many times (CCSN-77937).
-   **fix** (_Accordion_): Added z-Index to ':hover' pseudo-class to ensure hover is always visible in a theme (CCSN-93310).
-   **fix** (_Cards_): Fixed the card for medium theme. It should stay in light theme but switched to medium (CCSN-93132).
-   **fix** (_CardsRadios_, _CardsRadiosCustomItem_): Radio Card groups now properly focus the previously clicked Card (e.g. the second one) when pressing the Tab key instead of always first focusing the first Card (CCSN-68944).
-   **fix** (_Chart2D_): Fixed colors and theming (CCSN-92793)
-   **fix** (_Chart2D_): Improved hover on x Axis (CCSN-92915)
-   **fix** (_Chart2D_): Tooltip did not disappear when moving the mouse out of the chart area (CCSN-92793)
-   **fix** (_Chips_): Chips Group is now correctly displayed when it is right aligned. (CCSN-94990).
-   **fix** (_Chips_): Fixed an issue where className prop was not passed down (CCSN-94990).
-   **fix** (_ChipsItemAction_): Fixed an issue where className prop was not passed down (CCSN-86806).
-   **fix** (_ClickList_): Added z-Index to ':hover' pseudo-class to ensure hover is always visible in a theme (CCSN-93310).
-   **fix** (_ClickList_): Fixed the height of the disabled versions to match the specification (CCSN-92880).
-   **fix** (_DataTable_): Added offset to border when using `insetLevel`, so that content and borders are aligned
    CCSN-93042
-   **fix** (_DataTable_): Clickable row now shows pointer cursor on hover (CCSN-89651).
-   **fix** (_DataTable_): Clickable row now supports click actions (onLinkClick, linkHref) on custom JSX components in table cell (CCSN-89651).
-   **fix** (_DatePicker_): Separated mouse hover from date selection (CCSN-91692).
-   **fix** (_Headline_): Text lengths (`max-width` CSS property) are now correctly applied to the XL and XXL viewports (CCSN-94497).
-   **fix** (_Link_): Fixed a bug where the Link component did not apply the correct styles when the `disabled` prop was set (CCSN-67041).
-   **fix** (_List_): Removed the native List marker for ordered lists and added a custom one. This fixes the issue that nested ordered lists were not properly announced by screen readers (CCSN-70297).
-   **fix** (_Pagination_): Next and last page button announce the site you changed to now (CCSN-89935)
-   **fix** (_Snackbar_): Improved cleanup management of internal 'autoDismiss' functionality to prevent timer issues of self-dismissing Snackbar version (CCSN-93969).
-   **fix** (_Stage_): Improved scrolling behavior when clicking on the scroll button (CCSN-93919).
-   **fix** (_TextField_): The text of read only versions is now highlighted when marked (CCSN-92653).
-   **fix** (_TextField_): The text area variant caused problems with scrolling of the web page (CCSN-94781)
-   **fix** (_TextHighlight_): Changed the quotation marks to be rendered out of the resources files instead of being hardcoded in the component, so that the quotation marks are rendered correctly for every language (CCSN-93362).
-   **fix** (_Upload_): Problem with reupload of the same file caused by underlying input-type-file-element (CSSN-91774).

**DOCUMENTATION**

-   **docs** (_Box_): The 'Box With Background' code example on the LSG website now correctly shows a hover effect (CCSN-93969).
-   **docs** (_ChipsDatePicker_, _DatePicker_, _DateTextField_): Added to the examples how to correctly convert local time to ISO (CCSN-92361).
-   **docs** (_Form_UXPattern_): Added a note about the error summary box usage in user-input forms (CCSN-86958).
-   **docs** (_Form_UXPattern_): Added a hint that the 'Submit' Button should switch from Secondary to Primary style according to the design specifications once all required fields are
    filled in correctly (CCSN-92941).
-   **docs** (_IconLink_): Improved prop descriptions and removed outdated remark about `title` attribute in the `label` prop description (CCSN-93969).
-   **docs** (_Layout_): Enhanced documentation for the Layout component on the LSG website (CCSN-91855).
-   **docs** (_Upload_): Added a note banner about a new aspect of an underlying input element (CCSN-91744).

### 🌽 19.11.1 (lsgs-2e252) 27.10.2025

**NON-BREAKING CHANGES**

-   **fix** (_Select_): Fixed onClick handler with Selects that have a withTextInput prop (CCSN-93193).

### 🎃 19.11.0 (lsgs-aa29d) 07.10.2025

**FEATURES**

-   **feat** (_BarChart_): lsg.chart-Package, adjustable grid lines off/dashed/solid, axis - visible/hide (CCSN-89750), and bug fixes (CCSN-88949).
-   **feat** (_Chart2D_): adjustable grid lines off/dashed/solid, axis - visible/hide (CCSN-89750)
-   **feat** (_Headline_): Increased spacing between headline size 5 und subline (CCSN-91067)
-   **feat** (_Headline_): New lineLength prop for headlines with size 4-6 (CCSN-81150)
-   **feat** (_LineChart_): lsg.chart-Package, adjustable grid lines off/dashed/solid, axis - visible/hide (CCSN-89750).
-   **feat** (_Paragraph_): New lineLength prop for Paragraph (CCSN-81150)
-   **feat** (_TextField_): Adjusted the 'x' clear icon colors to match the design specification, with lighter colors for default and hover states (CCSN-92508).

**NON-BREAKING CHANGES**

-   **fix** (_ActionButton_, _Button_, _IconLink_, _Link_): The `loadingText` prop now functions as intended, correctly setting an ARIA label for improved accessibility (CCSN-91222).
-   **fix** (_Chart2D_): bug fixes (CCSN-88949)
-   **fix** (_Chart2D_): Improved axis tick calculation and default formatter. The custom formatters for the x axis are now correctly interpreted (CCSN-91475)
-   **fix** (_DescriptionList_): Update title wrapping behavior and adjust styles for better responsiveness. The "titleWrap"-Property is deprecated (CCSN-68919)
-   **fix** (_InputGroup_, _RadioGroup_, _Checkbox_, _Radio_, _Switch_): The 'invalid' prop of each item (e.g. Switch) in a group can now be controlled individually or through the parent group (e.g. Switch.Group) (CCSN-80573).
-   **fix** (_Select_): Fixed a bug where the onBlur event was triggered endlessly when selecting a disabled option (CCSN-84866).
-   **fix** (_StatusIndicator_): The marker icon now remains circular on smaller screen widths, instead of becoming oval-shaped (CCSN-89436).
-   **fix** (_TextHighlight_): Language check returned undefined if not running in the browser.

**DOCUMENTATION**

-   **docs** (_ActionButton_, _Button_, _Spinner_): Improved descriptions on websites and for props, especially concerning the Spinner/`loadingText` prop(s) (CCSN-91222).
-   **docs**: Improved and updated content of `readme.md` for 'lsg.components' package (CCSN-89781).

### 🍹 19.10.0 (lsgs-f46cd) 08.09.2025

**RELEASE NOTES**

-   Several SonarQube security hotspots have been reviewed and marked as safe (CCSN-86478).
-   Several SonarQube bugs have been reviewed and fixed (CCSN-86479).

**NEW COMPONENT**

_Layout_: The Layout component is a container that assists with well-known flexbox options for micro layouts in your
pages and applications (CCSN-81910).

**FEATURES**

-   **feat**: Enable 200% text zoom a11y requirement for lsg components (CCSN-78127).
-   **feat** (_BannerMessage_): The badge is now placed on the left top side of the BannerMessage when its more than one
    line long. Also for collapsible versions (CCSN-83922)
-   **feat** (_DatePicker_): The color levels of the 'calendar' icon now comply with the design specification (CCSN-83135).
-   **feat** (_Flyout_): Improved focus management: The Flyout now automatically focuses the first interactive element
    when opened, enhancing keyboard accessibility (CCSN-73600).
-   **feat** (_Icon_): Added 12 px (xsmall) versions of the following icons: 'info', 'exclamationmark', 'lock',
    'lightbulb', 'close', 'checkmark', 'dashShort' (CCSN-84834).
-   **feat** (_IconLink_): The color level of the icon now complies with the design specification when hovering over
    it or pressing 'Tab' (CCSN-83135).
-   **feat** (_ProfileWidget_): Checked accessibility requirements and added documentation website to 'UX Patterns'
    section (CCSN-69211).
-   **feat** (_Radio_): Added new description to 'title' prop and added a Brand Portal example (CCSN-80409).
-   **feat** (_SideNavigation_): Increased content width from 1680 px to 1920 px (CCSN-91705).
-   **feat** (_Snackbar_): Enable plain text as Snackbar content and remove semantic roles from the subline
    (CCSN-80396).
-   **feat** (_TextField_): Fixed a bug where a disappearing TextField was still focused and caused an endless loop (CCSN-89438).
-   **feat** (_TextHighlight_): Fixed the quotation to match the English and German punctuation rules (CCSN-88137).

**NON-BREAKING CHANGES**

-   **fix** (_lsg.icons - package.json_): Removed rimraf line to solve ELIAS findings and prevent Denial of Service
    conditions (CCSN-89464).
-   **fix** (_ActionGroup_): Relocated useViewportRange code to solve SonarQube bug (CCSN-89985).
-   **fix** (_ChipsRadios_): Rearranged useUniqueId code to solve SonarQube bug (CCSN-88812).
-   **fix** (_DatePicker_): enable maxDate in the past and minDate in the future (CCSN-88155)
-   **fix** (_DonutChart_): Rearranged useUniqueId code to solve SonarQube bug (CCSN-89965).
-   **fix** (_Flyout_): Fixed SonarQube bug about type without members (CCSN-91107).
-   **fix** (_FooterNavigation.Block_): Added `footerNavigationBlockAs` prop to improve the HTML structure, also for
    accessibility (CCSN-80870).
-   **fix** (_JumpLinks_): Solves: "Cannot read property of null (reading 'parentElement')" (CCSN-91265)
-   **fix** (_LineChart_): Rearranged code to fix useMemo SonarQube bug (CCSN-90207).
-   **fix** (_Link_): Fix: The underline of Link element appears well when the text is longer and the viewpoint is small.(CCSN-90206).
-   **fix** (_NavigationBar_): Relocated useMemo code to solve SonarQube bug (CCSN-90207).
-   **fix** (_PortalHeader_): Fixed miss match of flyout size at different viewports according spec (CCSN-59500)
-   **fix** (_Select_): Cannot read properties of undefined (reading 'label') error from SelectFlyout (Quickfix).
-   **fix** (_Select_): Fixed Flyout is cut off inside Layer on some screen sizes (CCSN-91224).
-   **fix** (_SimpleHeader_): Scroll bug when no menu item was clicked in side layer (CCSN-91426)
-   **fix** (_Slider_): Focus picture with outline at knob not working, mouse moving feature on first knob at range not
    working (CCSN-89974).
-   **fix** (_Slider_): Updated the Slider examples to clarify the Paragraphs are not part of the component (CCSN-84488).
-   **fix** (_SliderPagination_): Duplicate margins and duplicate ids (CCSN-91289)
-   **fix** (_StatusIndicator_): Error message appeared occasionally (CCSN-81416).
-   **fix** (_Tabs_): Fix: IDs of tabs weren't used but replaced by generated IDs (CCSN-91339).

**DOCS**

-   **docs**: The 'Do's and 'Don't's on LSG websites are now nested in a 'strong' HTML element to improve their
    semantics (CCSN-80836).
-   **docs** (_Accordion_): Clarified difference between multiple and single open accordion (CCSN-77462).
-   **docs** (_Designer_): Removed outdated instructions about using Gotham fonts in Figma on the LSG 'Designer'
    website (CCSN-89959).
-   **docs** (_GallerySlider_): Added note about the Section component usage being necessary (CCSN-89120).
-   **docs** (_Slider_): Fixed SonarQube bug about empty object pattern in 'Stepped Slider' code example on LSG
    website (CCSN-91131).
-   **docs** (_Slider_, _TextSlider_): In terms of the keyboard Icon, structural images now comply with the coded
    component on the corresponding LSG website (CCSN-90890).

### 🐻 19.9.2 (lsgs-5f749) 15.08.2025

**NON-BREAKING CHANGES**

-   **fix** style-inject library is now cjs compatible (LWS-Issue) (CCSN-90745)

### 🙉 19.9.1 (lsgs-b29b1) 14.07.2025

**NON-BREAKING CHANGES**

-   **fix** (_Chart2d_): Fixed Bug: Chart2D does not render correctly with negative values (CCSN-89442).
-   **fix** (_CircleIconLink_, _ClickListItem_, _Link_): Typescript definition of htmlAttrs prop with CircleIconLink,
    ClickListItem or Link (CCSN-89330).
-   **fix** (_DataTable_): Fixed: Checkbox and 3-dots menu click triggered row click action in DataTable (CCSN-89295).
-   **fix** (_Logo_): onClick is now routed to the logo action (CCSN-89334).
-   **fix** (_Select_, _SimpleHeader_): Fixed indexOf TypeError (CCSN-89370).

### 🌴 19.9.0 (lsgs-8fcfb) 04.07.2025

**RELEASE NOTES**

-   The `<Video>` component is deprecated and will be removed in the next major release. Please use alternative libraries.

**FEATURES**

-   **docs** (_Guidelines_): Added 5 'Motion Design' pages to the 'Guidelines' section for a better understanding of the
    motion significance (CCSN-85787).
-   **docs** (_BannerMessage_): Adjusted examples on LSG website to match the design specifications especially in
    terms of the text sizes and text lengths (CCSN-87139).
-   **feat**: Added support for smart automation (additional id's and more)
-   **feat** (_Chart2D_): Add new package for charts in LSG (CCSN-83998).
-   **feat** (_Checkbox_): The indeterminate state is now supported for screen readers. (CCSN-79572)
-   **feat** (_ClickListItem_): Added new `headlineAs` prop to allow custom HTML elements and improved default values
    for the different ClickListItem variations (CCSN-80867).
-   **feat** (_DataTable_): Inactive expandable row (CCSN-86451)
-   **feat** (_DataTable_): Text is now selectable/copyable in clickable DataTableRow (CCSN-78621)
-   **feat** (_DataTable_): Text is now selectable/copyable in DataTableExpandableRow (CCSN-81515)
-   **feat** (_DatePicker_): Opt-out for the year picker (CCSN-85387)
-   **feat** (_DatePicker_): Provide the props `disabledDates` and `enabledDates` for the dateFormat='month' also (CCSN-87997)
-   **feat** (_ProcessPage_): Set headline structure and aria-disabled to match a11y specification (CCSN-86112).
-   **feat** (_ProcessPage_): Improved description of `navigationActionAs` prop; updated LSG website (CCSN-85992).
-   **feat** (_TextField_): added `iconLink` prop and deprecated all other custom icon props (CCSN-79692)
-   **feat** (_TwoLineItem_): Changed the headline from h5 to h6 and the marginBottom to match the specification
    (CCSN-77181).

**NON-BREAKING CHANGES**

-   **fix**: Fixed en_GB/en-GB and en_US/en-US language settings issues for components (CCSN-87231).
-   **fix** (_BarChart_): Fixed duplicate id issue (CCSN-70384).
-   **fix** (_ClickList_):The ClickList.Item now includes a `statusIndicatorIcon` prop to support the status indicator
    icon (CCSN-87057)
-   **fix** (_ClickListItem_): Missing reading of subline when href option was assigned (CCSN-87167).
-   **fix** (_DataTable_): Table cell content / header mismatch (CCSN-78088).
-   **fix** (_DataTable_): Aria-Hide ExpandableRow caret icon (CCSN-86261).
-   **fix** (_DataTable_): Fixed DataTable aria-sort issue (CCSN-83420)
-   **fix** (_DataTable_): Reset hover state of DataTableRow when click handler is removed (CCSN-88276)
-   **fix** (_DatePicker_): Fixed default placeholder date format in text field for en_GB and en_US localization
    (CCSN-87231).
-   **fix** (_DatePicker_): Rearranged year picker order to ascending years (CCSN-85387)
-   **fix** (_DescriptionList_): Fixed alignment to match specification (CCSN-85804)
-   **fix** (_Headline_): Centering of overlines and sublines that consisted of multiple children caused a wrap (CCSN-78141).
-   **fix** (_Logo_): Logos have no alternative text (CCSN-78141).
-   **fix** (_NumberTextField_): Deleted the HTML attribute `pattern` which caused an unnecessary tooltip on the
    TextField (CCSN-87182).
-   **fix** (_OnPageNavigation_): Fixed lagging navigation indicator (CCSN-77476).
-   **fix** (_UX Patterns - Form_): Improved error message behavior and readability for a better user
    experience (CCSN-69999).
-   **fix** (_Slider_): Fixed `showLabel` prop functionality (CCSN-71722)
-   **fix** (_TeaserGroup_): Removed left padding (CCSN-70286)

### 🌻 19.8.1 (lsgs-e73f8) 21.05.2025

**NON-BREAKING CHANGES**

-   **fix** (_ActionGroup_): No unnecessary aria-label (CCSN-87179)
-   **fix**: Added configurable LiveRegion for input components with error (Checkbox, DatePicker, Radio, Select, Switch,
    TextField)
-   **fix**: Correctly use aria-errormessage to avoid double announcement in NVDA (CCSN-82002, CCSN-86963)

### 🌻 19.8.0 (lsgs-d6477) 05.05.2025

**FEATURES**

-   **feat**: Added the option to apply the `data-` attribute when using the `htmlAttrs` prop (CCSN-85475).
-   **feat** (_DataTable_): Spacing configuration on row level (CCSN-85334)
-   **feat** (_EyeCatcher_, _Stage_): Added 'strong' HTML element to EyeCatcher text of Stage in order to improve its
    HTML structure, also to benefit accessibility (CCSN-80868).
-   **feat** (_Icon_): Added new 'chain' Icon and the brand Icons for Amex and Wüstenrot (CCSN-85473 & CCSN-85904).
-   **feat** (_ProcessPage_): Added PortalHeader support by adding the props noSemanticElements and stickyNavigation.
    (CCSN-84545)
-   **feat** (_TanPanel_): Added option for not rendering a section (as required by newer designs). Updated design (CCSN-82773).

**NON-BREAKING CHANGES**

-   **fix** (_ClickListItem_): Added cursor:not allowed to the disabled variant
-   **fix** (_ClickList_): Remove bottom line of last item to fulfill the design requirements
-   **fix** (_DataTable_): Flickering checkbox (CCSN-85504)
-   **fix** (_DataTable_): Fixed several separator line design issues (CCSN-86423)
-   **fix** (_Grid_): Nested Grid has no margin to the top, because it can cause
-   **fix** (_NumberTextField_): Fixed suffix alignment inside Accordion (CCSN-83925)
-   **fix** (_Upload_): Added props: acceptedFileTypes, invalid, ariaLabel, name (CCSN-84885)
-   **fix** (_Search_): Removed the vertical separator and changed some spacing to match the specification CCSN-77182
-   **fix** (_Section_): Section prop contentWidth has now also 10 columns option (CCSN-84563)
-   **fix** (_Select_): Fixed Select being cut off inside Layer on some screen sizes (CCSN-82917)
-   **fix** (_Snackbar_): Outdated content was rendered for role="status" (CCSN-80513)

### ️🐞️ 19.7.1 (lsgs-96f44) 23.04.2025

**NON-BREAKING CHANGES**

-   **fix** (_PortalHeader_): Fix missing scroll when opening a mega menu in the desktop viewport

### ️🐞️ 19.7.0 (lsgs-feec9) 18.03.2025

**RELEASE NOTES**

-   The LSG now renders a white background on the `<html>` element per default. This is necessary to ensure the color
    contrast ratios between LSG colors and an probably unknown background in the light theme. The background color
    can be adapted with a CSS custom property, if the contrast ratio is ensured (see
    https://markenportal.commerzbank.com/styleguide/color/)

**FEATURES**

-   **docs**: Added information to the LSG 'Designer' website about how you can work with the Figma starter package
    (CCSN-84021).
-   **docs**: Replaced image files of all Brand Portal LSG websites with new images that display
    accessibility-refactored components (CCSN-79976).
-   **feat**: Export Colors though `SupportedColors` interface (CCSN-83521)
-   **feat** (_ClickList_): Added prop `loading` for ClickListItem (CCSN-77122)
-   **feat** (_DataTable_): Introduce standard component for data table footer (CCSN-82693)
-   **feat** (_DataTable_): Introduce new prop "inlineLevel" für additional padding in use cases with multilevel
    expandable rows (CCSN-82482)
-   **feat** (_DataTable_): Support of second-level expandable rows (CCSN-82482)
-   **feat** (_DatePicker_): The DatePicker flyout now includes a year picker (CCSN-83520)
-   **feat** (_Metabar_, _Footer_): Deprecated Metabar component and added its props to Footer. You can access
    the Metabar functionalities directly from the Footer component now (CCSN-80302).

**NON-BREAKING CHANGES**

-   **fix**: Set a default background color to ensure the color contrast ratio (CCSN-83184)
-   **fix** (_Accordion_): Onchange event is now triggered (CCSN-64539)
-   **fix** (_Autocomplete_): close flyout when changing to readonly or disabled (CCSN-82682)
-   **fix** (_BannerMessage_): Fix BannerMessage layout bugs (CCSN-82490)
-   **fix** (_Chips_): Fix missing id of Chips DatePicker(CCSN-82644)
-   **fix** (_ChipsDatePicker_): Chips that cannot be deselected by setting `clearIcon={false}` (CCSN-83630)
-   **fix** (_ClickList_): No gray background on hover for checkbox, radio and switch (CCSN-80554)
-   **fix** (_ClickList_): Component has default margin at the bottom now (CCSN-84432)
-   **fix** (_ClickList_): Darkened line of ClickList item on hover (CCSN-82087)
-   **fix** (_Drawer_): Added a scroll lock library to better support nested layers and PortalHeader (CCSN-83081)
-   **fix** (_Grid_): Reactivated the code for grid column centering (CCSN-62600)
-   **fix** (_Logo_, _SimpleFooter_ ): Fixed invalid value (NaN) warning for 'opacity' CSS style property (CCSN-80221)
-   **fix** (_NumberTextField_): Typed input gets filtered properly and guidelines for handling pasted input are
    added to the Markenportal (CCSN-74730)
-   **fix** (_ProcessPage_): Duplicated styling of processPage title which caused issues fixed (CCSN-82990)
-   **fix** (_ProcessPage_): Added `headerTitleAs` prop to allow changing the rendered HTML element of the header title
    (CCSN-83426)
-   **fix** (_Select_): Close flyout when changing to readonly or disabled (CCSN-82682)
-   **fix** (_SideNavigationPage_): Enabled logo when `logoAction` is set (CCSN-82806)
-   **fix** (_Tabs_): Fixed crash if no navigation tree is defined (CCSN-83127)
-   **fix** (_TanPanel_): AutoFocus was not executed (CCSN-82681)
-   **fix** (_Select_): Close flyout when changing to readonly or disabled (CCSN-82682)
-   **fix**: Set a default background color to ensure the color contrast ratio (CCSN-83184)
-   **fix** (_TextField_): Cursor is now visible when focussed input is empty (CCSN-74730)

### 🏜️ 19.6.2 (lsgs-bc8ed) 24.02.2025

**NON-BREAKING CHANGES**

-   **fix** (_DataTable_): missing spacing between two elements inside a cell if two or more children were defined
    and the column was defined as label column (CCSN-83477)
-   **fix** (_DataTable_): horizontal alignment was not possible if vertical alignment middle was set (CCSN-83477)

### ️☃️ 19.6.1 (lsgs-86b15) 21.02.2025

**NEW COMPONENT**

_Upload_ (CCSN-81910).

**NON-BREAKING CHANGES**

-   **fix** (_DataTable_): Removed flickering effect when hovering over the checkbox (PR 2038).
-   **fix** (_DataTable_): Defining widths when hidings columns previously resulted in wrong widths and spacing right to
    the table
-   **fix** (_DataTable_): missing spacing between two elements inside a cell if two or more children were defined
-   **fix** (_DatePicker_): Datepicker onBlur called in DatePicker Flyout (CCSN-80581)
-   **fix** (_SnackBar_): Prevent SnackBar from calling onFocusLoss callback on first render (CCSN-81175)
-   **fix** (_Upload_): Added Upload component to the LSG export

### ️☃️ 19.6.0 (lsgs-f2d71) 06.02.2025

**FEATURES**

-   **docs** Use React.ComponentProps instead of IOptions for components when it makes sense (CCSN-81718).
-   **feat** (_DataTable_): Optional bold styling for row separator (CCSN-81125).
-   **feat** (_DataTable_): Added props to hide and disable inputs in DataTableExpandableRow (CCSN-78732)
-   **feat** (_DataTable_): Ratio width DataTableProp prop: separateColumnsXsWidthRatio for separated columns
    (CCSN-78732)
-   **feat** (_DataTable_): Sticky columns (CCSN-80126)
-   **feat** (_LineChart_): Add prop for an optional bold horizontal zero line (CCSN-81126).

**NON-BREAKING CHANGES**

-   **fix**: Focus outline now is not covered by headers
-   **fix** (_ActionFlyout_): Set correct aria-label for the flyout menu button (CCSN-77386).
-   **fix** (_AutoComplete_): Removed wrong calls of onBlur/onFocus (CCSN-76788)
-   **fix** (_BannerMessage_): Added prop to be able to set the 'aside' HTML tag (CCSN-79524).
-   **fix** (_BarChart_): Removed empty div if the info-area is empty
-   **fix** (_Chips_): Changed outline color to have a sufficient color contrast between selected and deselected
-   **fix** (_Chips_): Added key, so that there is no unique key warning from react
-   **fix** (_ChipsSelect_): Chips that cannot be deselected by setting `clearIcon={false}` CCSN-81589.
-   **fix** (_DataTable_): Removed margin-bottom in label columns (CCSN-82142)
-   **chore** (_Icon_): Added export for IIconProps
-   **fix** (_Layer_): "Back" Button-Text is now visible on mobile screens (CCSN-77116)
-   **fix** (_Layer_): Order of focusing buttons when tabbing (CCSN-78519) Notice: You might want to adjust your
    button order after updating.
-   **fix** (_Layer_): Additional scrollbars fixed, background scrollable fixed (CCSN-80178, CCSN-79570)
-   **fix** (_Layer_): Fix scrolling up issue when snackbar is closed inside layer (CCSN-81175)
-   **fix** (_List_): Added bottom margin to icon list (CCSN-82097)
-   **fix**: (_PortalHeader_): Fixed drawer not closing when selecting item in flat navigation (CCSN-80542)
-   **fix** (_Snackbar_): Removed focus lock, since it's not a proper modal. (CCSN-81592)

### 🥩 19.5.2 (lsgs-beef4) 21.01.2025

**NON-BREAKING CHANGES**

-   **chore**: (_Icon_): Added export for IIconProps
-   **fix**: (_BarChart_): Removed empty div if the info-area is empty
-   **fix** (_Layer_): Focus outline appears again inside of the Layer (CCSN-81278)

### 🎁 19.5.1 (lsgs-3d6b3) 16.01.2025

**NON-BREAKING CHANGES**

-   **fix** (_Layer_): Focus outline appears again inside of the Layer (CCSN-81278)

### 🎁 19.5.0 (lsgs-41601) 13.12.2024

**FEATURES**

-   **feat**: Color theming reworked. Improved contrast (PR 1869).
-   **feat**: Cursor not-allowed for disabled elements (CCSN-80149).
-   **feat** Improved text for better readability of the Brand Portal LSG sites under the menu items Buttons,
    Messages, Navigation, and UX Patterns (PR 1900).
-   **feat** (_Brandbar_, _Footer_): Deprecated Brandbar component and added its props to Footer. You can access
    the Brandbar functionalities directly from the Footer component now (CCSN-69953).
-   **feat** (_Breadcrumbs_): Make separator line optional (CCSN-76439).
-   **feat** (_CcsApprovalPanel_): Added notificationDisabled prop to control notification settings (CCSN-78686).
-   **feat** (_Checkbox_, _Checkbox.Group_): Fixed roles. Added information to the Accessibility section of the Brand
    Portal LSG site. Added information about the indeterminate state to the 'value' prop description (CCSN-77581).
-   **feat** (_ClickList.Checkboxes_): Added 'role="group"' for Accessibility. Improved the Brand Portal example by
    adding aria-labelledby (CCSN-77577).
-   **feat** (_ClickListItem_, _Headline_, _TwoLineItem_): Enabled icon badge outline variant (CCSN-79916).
-   **feat** (_DataTable_): Add more content example (CCSN-77180).
-   **feat** (_DataTable_): Add props to hide or disable radios or checkboxes on DataTable header/rows/footer
    (CCSN-80123).
-   **feat** (_DataTable_): Add sortOrderType attribute to column definition, to configure the behaviour of the
    onSort handler (CCSN-79736).
-   **feat** (_DataTable_): Reestablished optional "select-all" checkbox in the header (CCSN-79743).
    Portal LSG site. Added information about the indeterminate state to the 'value' prop description (CCSN-77581).
    adding aria-labelledby (CCSN-77577).
-   **feat** (_Radio_, _Radio.Group_): Added 'role="radiogroup"' for Accessibility. Added Accessibility information to
    the Brand Portal LSG site (CCSN-77585, CCSN-77588).
-   **feat**: (_Stage_): After UX test the component has been reworked. The scroller text has been removed and the icon
    is bigger now (CCSN-79280).

**NON-BREAKING CHANGES**

-   **fix** (_Accordion_): Title prop is now a ReactNode instead of string for more flexibility (CCSN-92647)
-   **fix** (_ActionFlyout_): Set aria-controls only when the menu is open (CCSN-78359)
-   **fix** (_Badge_): Custom user colors (forced-colors: active) (CCSN-76439).
-   **fix** (_Checkbox_, _Switch_): Checkmark regarding custom user colors (forced-colors: active) (CCSN-79914).
-   **fix** (_ChipsItem_): Screen-reader reads icon (CCSN-79278).
-   **fix** (_ChipsItem_): Removed extra z-index to prevent overlapping with other components (CCSN-78508).
-   **fix** (_CircleDiagram_): Fix issue when chart become positioned on layer and some improvement in a11y,
-   **fix** (_CircleIconLink_): Added click animation for keyboard interaction(CCSN-70290)
-   **fix** (_CircleIconLink_): Changed the alignment of the helpertext to allign it with the icon (CCSN-70289)
-   **fix** (_DataTable_): DataTable vertical alignment issue (CCSN-79892)
-   **fix** (_DetailPageHeader_): "onClick" and "href" prop added for "Back-Link" (CCSN-80137)
-   **fix** (_DatePicker_): Fixed weekendDisabled prop issue (CCSN-80553)
-   **fix** (_Flyout_): Potential bug when no theme is defined
-   **fix** (_Headline_): Fixed maximum line width to match the specification(CCSN-80272)
-   **fix** (_JumpLinks_): Added scroll margin for Jump Link sections (CCSN-38164).
-   **fix** (_OnPageNavigation_): Border style (CCSN-79278).
-   **fix** (_Pagination_): Layout broken with too many pages (CCSN-80558)
-   **fix** (_PortalHeader_): Indicator was stretched out and not positioned on only one menuItem (CCSN-79632).
-   **fix** (_PortalMetaBar_): Made code more robust to handle cases of missing data (CCSN-77117).
-   **fix** (_Switch_): Checkmark when disabled (CCSN-79914).
-   **fix** (_SelectFlyout_): Added unique key in internal SelectFlyout to prevent possible console warnings, e.g. in
    Autocomplete component (PR 1940).
-   **fix** (_TextField_): Converted TextField from class component to functional component
    deprecated labelColor prop for the ChartInfo, exported interfaces IChartInfoListItem & IChartInfoListProps
-   **fix** (_TextSlider_): TextFields not levelled in range slider (CCSN-75214)

### 🌼 19.4.2 (lsgs-32ac3) 21.11.2024

**NON-BREAKING CHANGES**

-   **fix**: Flyout positioning issue inside Layer when body scroll position > 0 and Layer position 0
-   **fix**: Flyout positioning issue when used inside themed area
-   **fix** (_Autocomplete_): Key down on last item crash

### 🌼 19.4.1 (lsgs-45e59) 06.11.2024

**FEATURES**

-   **feat**: New icons (CCSN-78629).

**NON-BREAKING CHANGES**

-   **fix** (_DonutChart_): Reserve order of data input for Donut Chart

### 🌼 19.4.0 (lsgs-a416a) 01.11.2024

**NEW COMPONENTS**

_DonutChart_, _FootnoteProvider_, _FooterMetabar_

**FEATURES**

-   **feat**: Added Gotham Font implementation site to the Brand Portal (PR 1866).
-   **feat** (_ClickList_): Added Accessibility information to the Brand Portal site (PR 1852).
-   **feat** (_DataTable_): Added new prop "hideBadge" to DataTableExpandableRow (CCSN-52694).
-   **feat** (_DonutChart_): Introducing the DonutChart component (CCSN-24528).
-   **feat** (_FootNote_): A11y improvements and link to move from footnote to last anchor. Also added new component
    FootnoteProvider to remember the last clicked anchor (CCSN-61302).
-   **feat** (_BannerMessage_): Updated styles to have less weird breaking behaviour (CCSN-73816).
-   **feat** (_ProductStage_): Improved A11y semantic order (CCSN-75077).
-   **feat** (_TwoLineItem_): Added labelAs and sublineAs props. You can set your own HTML element for your
    first line and subline texts now (PR 1878, CCSN-67466).

**NON-BREAKING CHANGES**

-   **fix** (_ActionFlyout_): Fixed the Flyout to match the Theme the flyout is in (CCSN-76387)
-   **fix** (_BannerMessage_, _Snackbar_): Removed icon title and set `aria-hidden=true` when prop `badgeIcon` is
    used (PR 1863).
-   **fix** (_BankingCard_, _CreditCard_): Improve a11y labelling of BankingCard and CreditCards (CCSN-72050).
-   **fix** (_BarChart_): Fixed BarChart in Layer update issue (CCSN-65495).
-   **fix** (_CcsApprovalPanel_): Fixed an error where the snackbar couldn't be closed when clicked (CCSN-76903)
-   **fix** (_Checkbox_): Fixed blank spot in Checkbox (CCSN-77585).
-   **fix** (_ClickList_): Now rendered as div instead of ul/li elements in case of one or less item (CCSN-70832).
-   **fix** (_ClickList_, _Tabs_ ): Fix: Ids were not showing in the DOM (CCSN-78334).
-   **fix** (_CcsApprovalPanel_): Snackbar did not close on icon click (CCSN-76903).
-   **fix** (_CcsApprovalPanel_): Fixed an error where the SnackBar couldn't be closed when clicked (CCSN-76903)
-   **fix** (_DataTable_): Improved sort icon and sort order (CCSN-78104).
-   **fix** (_DataTable_): SelectionFooter breaks mobile view issue (CCSN-78546).
-   **fix** (_DataTable_): Adjusted line thickness (CCSN-72342).
-   **fix** (_DatePicker_): Fixed width of flyout on mobile viewports (CCSN-79053)
-   **fix** (_Flyout_): Placement in Layer and minor placement issues (CCSN-78586)
-   **fix** (_IconLink_): Fixed sporadic Safari IconLink layout issue (CCSN-76905)
-   **fix** (_GallerySlider_):Added margins to the GallerySlider columns to create space for the GallerySlider
    cards' borders. (CCSN-49246)
-   **fix** (_ProcessPage_): Added a UX Pattern for the ProcessPage with the new Navigation and external footer (
    CCSN-74647).
-   **fix** (_Radio.Group_): Fixed hook rendering bug that occurred when the number of Radios changed in the
    group (PR 1857).
-   **fix** (_Stage_): Content height when zoom level is 400% (CCSN-57513).

### ☔ 19.3.0 (lsgs-e286f) 30.09.2024

**NEW COMPONENTS**

_Box_

**FEATURES**

-   **feat** (_ActionGroup_): Added option for custom-made aria-label value for Accessibility (CCSN-71443, CCSN-70294).
-   **feat** (_BarDiagram_): New features were added like coloring (2 color) on group/bar and alignment option
    (CCSN-74174).
-   **feat** (_Box_):The new Box component is a versatile and flexible component designed to handle various
    aspects of styling.
-   **feat** (_ClickList_): Added spacings from DataTable (CCSN-75919).
-   **feat** (_ClickList_): Made htmlAttrs available for additional aria attributes.
-   **feat** (_DataTable_): Allowed column width to be defined.
-   **feat** (_FootNoteAnchor_): Added ariaDescribedBy prop to give more context to the link. Adjusted the examples
    accordingly (CCSN-71390).
-   **feat** (_Headline_): Export color options for Headline Badges (CCSN-75673).
-   **feat** (_Layer_): Added option for custom-made aria-label value in Button Group for Accessibility (CCSN-71443,
    CCSN-70294).
-   **feat** (_ProcessPage_): Fixed A11Y issues and implemented a new navigation style with 'newNavigation'-prop
    (CCSN-71473)
-   **feat** (_SelectionGroup_): Made htmlAttrs available for additional aria attributes.
-   **feat** (_Snackbar_): General A11y improvement & documentation for better accessibility (CCSN-72033).
-   **feat** (_Stage_): Added eyeCatcherId prop to use with the FootNoteAnchor and ariaDescribedBy (CCSN-71390).

**NON-BREAKING CHANGES**

-   **fix**: Adjusted global text-selection colors (CCSN-76757).
-   **fix** (_ActionFlyout_): Fix: Removed the focus ring for the mouse interaction (CCSN-71096).
-   **fix** (_ActionGroup_): Non-nested List (CCSN-76657); Removed role="group" and fixed aria-label for Accessibility
    (CCSN-71443, CCSN-70294).
-   **fix** (_Badge_): Added prop `iconLabel` to add a custom label when using an icon (CCSN-71475).
-   **fix** (_BankingCard_): Color of NFC symbol on dark cards in light and medium theme.
-   **chore** (_BarChart_, _LineChart_): Migrate visx to pure d3.
-   **fix** (_Button_): Corrected height without additional margins.
-   **fix** (_DataTable_): Header alignments with sortable columns (CCSN-76321).
-   **fix** (_DataTable_): Disappearing data in DataTableExpandableRow in mobile (CCSN-74876).
-   **fix** (_DataTable_): Fixed layout issues in Safari (CCSN-76794).
-   **fix** (_DataTable_): Further accessibility issues (CCSN-77145, CCSN-77264, CCSN-77263).
-   **fix** (_Icon_): Fixed bug when no Icon is set.
-   **fix** (_Picture_): Fixed `imgWidth`, `imgHeight` not triggered (CCSN-75084).
-   **fix** (_PortalHeader_): Fixed a problem in the mobile version, where you couldn´t close the layer with the
    Escape-Key (CCSN-74118).
-   **fix** (_PortalHeader_): Close menu flyout after a menu item has been selected (CCSN-76361).
-   **fix** (_PortalHeader_): Updated examples regarding app switcher flyout.
-   **fix** (_SamplePages_): Improved the accessibility of the sample pages (CCSN-71496, CCSN-76419).
-   **fix** (_Select_): Navigation with up/down arrow keys must end at first/last item (CCSN-73088).
-   **fix** (_Select_): Fixed error when `options` was set to `undefined`.
-   **fix** (_Select_, _Flyout_): Adjusted calculation where the flyout opens (CCSN-57340).
-   **fix** (_Select, DatePicker, ActionFlyout_): Opened flyout would not scroll when used inside Layer.
-   **fix** (_Stepper Pattern_): Fixed semantic headline order for Accessibility in examples (CCSN-71443).
-   **chore** (_Snackbar_): role=alertdialog is deprecated (CCSN-72033).
-   **fix** (_Video_): Video poster was not showing (CCSN-68770).

### 🍧 19.2.0 (lsgs-e6c27) 09.08.2024

**FEATURES**

-   **doc**: Removed the old Principle pages from the Markenportal and added the new Brand Experience Principles pages
-   **feat**: Improved accessibility regarding custom user/browser colors (forced-colors: active) (CCSN-57618).
-   **feat** (_DataTable_): Added props `ariaAttrs` for users to add custom aria attributes to the table and table
    rows (CCSN-72026).
-   **feat** (_DataTable_): Added sorting for single and multiple columns (CCSN-71358)
-   **feat** (_DataTableExpandableRow_): Added defaultOpen prop to define the initial open/closed state (CCSN-75086).
-   **feat** (_DataTableExpandableRow_): Added open/setOpenChange prop pair to make the open/closed state fully
    controllable (CCSN-75086).
-   **feat** (_Layer_): Added aria-haspopup property and further details to the Accessibility checklist (CCSN-74358).
-   **feat** (_List_): Added new prop `iconLabel` to improve accessibility
-   **feat** (_Picture_): Improved accessibility by adding the <figure> with optional <figcaption> element (CCSN-57496).
-   **feat** (_Switch_): Checkmark is added in order to emphasize the checked position

**NON-BREAKING CHANGES**

-   **doc** (_DataTable_): example for clickable row and IconLink in combination (CCSN-71325)
-   **doc** (_Spinner_): Updated the examples to showcase the use of LiveRegion for accessibility
-   **fix** (_ActionFlyout_): Fixed incorrect menuId for flyout element (CCSN-75047)
-   **fix** (_AutoComplete_): Input of space is now possible (CCSN-74346)
-   **fix** (_Chips_): Fix focus outline and scrollable area in condensed and scrollable radio chips (CCSN-72031)
-   **fix** (_ClickList_): Fixed Icon Click-Area (CCSN-73406)
-   **fix** (_ContactModule_): A11y improvements (CCSN-72005)
-   **fix** (_DataTable_): A11y Optimization - Fixed wrong references from call to table heads in other tables
    (CCSN-71323)
-   **fix** (_DataTable_): fix a11y issue by removing checkbox from title row (CCSN-71325)
-   **fix** (_DateTextField_): Changing entered dates by removing characters in day or month is now possible
    (CCSN-74146)
-   **fix** (_Icon_): Bring back default titles (CCSN-71384)
-   **fix** (_Picture_): Image overlaps caption when ratio is set (CCSN-65709).
-   **fix** (_PortalHeader_): fix problem when using no children after group headline in flyout
-   **fix** (_Select_): Clear button was not accessible with keyboard (CCSN-73297)
-   **fix** (_Select_): Handle user holding SHIFT key (CCSN-74731)
-   **fix** (_Spinner_): embedded spinner in button, links etc. has caused an overlay permanently which has removed
    now. So the overlay is placed on running processes only (CCSN-71471)
-   **fix** (_Stage_): Fixed broken prop `nextTheme`
-   **fix** (_Stage_): Further a11y optimizations: Set headlines before content (CCSN-71386).
-   **fix** (_Stage_): Outline color of links inside eye-catcher (CCSN-71388)
-   **fix** (_TanPanel_): Add IDs to functional buttons for better selection and distinguishability (CCSN-74581)
-   **fix** (_TextField_): A11y Optimization - show password usable with keyboard (CCSN-71318)
-   **fix** (_TextField_): Linked suffix to input for a11y (CCSN-71320)
-   **refactor** (_Badge_): Internally reworked and simplified component
-   **refactor**: Replaced defaultProps with default parameters in function components

### 👩‍🦯 19.1.1 (lsgs-cdaf9) 17.07.2024

**NON-BREAKING CHANGES**

-   **fix** (_PortalHeader_): fix problem with empty array in navigationTree

### 👩‍🦯 19.1.0 (lsgs-42384) 28.06.2024

**FEATURES**

-   **feat**: New icons (CCSN-72627, CCSN-73612).
-   **feat**: Improved accessibility regarding custom user/browser colors (forced-colors: active) (CCSN-57496).
-   **feat** (_ChipSelect_): Added Keyboard interaction and functionality to reset the selected option
-   **feat** (_DataTable_): Rework with improved accessibility
-   **feat** (_GallerySlider_): A11y optimizations
-   **feat** (_OptionTextField_): A11y optimizations, with full support of new `groupLabel`, correction of value, change
    type weakness
-   **feat** (_PortalHeader_): Prop `logoName` for aria-current available now
-   **feat** (_Select_): Added search methods to choose from with the prop `searchFunction`.
-   **feat** (_SideNavigationPage_): A11Y improvements (focus handling, screen reader a11y & more)
-   **feat** (_SimpleHeader_): Prop `logoName` for aria-current available now
-   **feat** (_Slider_): A11y color contrast optimization
-   **feat** (_TextHighlight_): A11y optimizations

**NON-BREAKING CHANGES**

-   **fix**: Increased color contrast for functional colors on elevated and medium theme (CCSN-57505).
-   **fix**: Reworked flyout and improved positioning (_ActionFlyout_, _Select_, _Autocomplete_, _DatePicker_,
    _ComplexTable_)
-   **fix** (_Accordion_): Fixed semantic html structure and added A11y documentation in styleguide.
-   **fix** (_ComplexTable_): columnProperties title is now type ReactNode instead of string
-   **fix** (_CustomCardsItem_): Fixed non-clickable area if card has an action-element as child, set nonInteractive on
    child
-   **fix** (_ClickList_): A11y optimizations
-   **fix** (_DataTable_): Safari row hover isssue
-   **fix** (_DataTable_): Checkboxes are now not clicked at the same time
-   **fix** (_DataTable_): Hover and Click now work on the whole row area
-   **fix** (_GallerySliderItem_): Prop `pictureImgSrc` is now optional again
-   **fix** (_GridColumn_): horizontal alignment is reactivated and be uses with left, center or right again
-   **fix** (_Headline_): A11y optimizations regarding overline, role and structure (CCSN-71268).
-   **fix** (_Icon_, _Logo_): Improved accessibility regarding custom user/browser colors (CCSN-57373, CCSN-57496).
-   **fix** (_Layer_): A11y optimizations. New Props `returnFocus` and `onFocusLoss`, important for stacked layers.
-   **fix** (_Pagination_): A11y optimizations
-   **fix** (_PortalHeader_): Fixed first focussed element after pressing Tab key (CCSN-72319)
-   **fix** (_PortalHeader_): Fixed the A11y Issues in the markenportal examples (CCSN-71470)
-   **fix** (_PortalHeader_): Fixed the problem of having a list with only one listItem
-   **fix** (_Section_): Vertical overflow is visible again.
-   **fix** (_SimpleHeader_): Adjusted focus-behaviour in mobile layer; Fixed first focussed element after pressing Tab
    key (CCSN-72319)
-   **fix** (_Tabs_): Scroll focussed tab button in visible area; improved mouse interaction.
-   **fix** (_Tabs_): Fixed error causes by useUniqueId hook. Generates ID differently now (CCSN-72403)
-   **fix** (_TanPanel_): Snackbar disapears now when TanPanel is unmounted.
-   **fix** (_TextField_): Wrap labels instead of overflow ellipsis
-   **fix** (_TextHighlight_): Removed yellow border from centered variant in dark theme.
-   **fix** (_TextSlider_): Fixed first focussed element after pressing Tab key (CCSN-72319)
-   **fix** (_TwoLineItem_): A11y optimizations

### 🦮 19.0.0 (lsgs-577b7) 28.03.2024

**DELETED COMPONENTS (breaking changes)**

_Indicator_, _SideNavigationItems_, _ContentWrapper_, _DraftBadge_, _InputHelper_, _InputSearch_, _JumpLinksLink_,
_LayoutContainer_, _Media_, _PageContainer_, _ProcessHeader_, _SideNavigationPageNew_, _UNSAGELogo_,
_UNSAFESideNavigation_, _CardsCheckboxesItem_, _CardsItem_, _CardsRadiosItem_,
_CardsSwitchesItem_, _ChipsItem_, _IconCard_, _IconCardGroup_, _InputCheckbox_, _InputDatepicker_,
_InputOptionsTextfield_, _InputRadio_, _InputSelect_, _InputSlider_, _InputTextfield_, _InputTextSlider_,
_SelectionCard_, _SelectionCardGroup_

**NEW COMPONENTS**

_CardsSwitchesItem_, _Checkbox_, _DatePicker_, _LiveRegion_, _NumberTextField_, _OptionsTextField_, _Radio_, _Slider_,
_TextSlider_

**RENAMED COMPONENTS (breaking changes)**

_InputCheckbox_ → _Checkbox_, _InputDatepicker_ → _DatePicker_, _InputOptionsTextfield_ → _OptionsTextField_,
_InputRadio_ → _Radio_, _InputSlider_ → _Slider_, _InputTextSlider_ → _TextSlider_, _InputSelect_ → _Select_,
_SideNavigationPageNew_ → _SideNavigationPage_

**BREAKING CHANGES**

-   **chore**: Removed normalize.css as part of the LSG.
-   **chore**: Removed all enum types such as Button.Looks.SECONDARY in favor of union types. Use a corresponding string
    value such as "secondary" instead.
-   **chore**: Moved `registerContentIncludes` to package @lsg/ccs. Please update your imports
-   **feat** (_All input fields and groups_): Form inputs and form groups like _TextField_, _DatePicker_, _RadioButton_,
    _RadioButton.Group_ etc. now show both helperText and errorText, if you define these props. If you want to show an
    errorText for an invalid input field/group, you have to give in the errorText prop instead of the helperText prop.
    If an errorText is set, the input/group is set to invalid.
-   **chore** (_Accordion_): Property `titleAs` is mandatory now
-   **chore** (_ActionButton_): Property `label` is mandatory now.
-   **chore** (_ArticleList_): Property `headlineAs` is mandatory now
-   **chore** (_ArticleStage_): Removed obsolete properties `headlineSize` and `headlineVariant`.
-   **chore** (_ArticleStage_): Property `headlineAs` is mandatory now
-   **chore** (_AutoComplete_): Property `label` is mandatory now.
-   **chore** (_BannerMessage_): Property `illustrationAltText` is mandatory if using an illustration.
-   **chore** (_BannerMessage_): Property `headlineAs` is mandatory now
-   **chore** (_BreadCrumbsItem_): Removed deprecated (obsolete) Property `disabled`.
-   **chore** (_Button_): Property `label` is mandatory now.
-   **chore** (_Chips_): Property groupLabel is mandatory now
-   **chore** (_Chips_): Property `groupLabel` and `onFocusLoss` is mandatory now
-   **chore** (_ChipsCheckboxes_): New Chips Group Component
-   **chore** (_ChipsItemAction_): New ChipsItem Component for Chips group
-   **chore** (_ChipsItemSelect_): Mandatory `label` property, removed `onClick` property.
-   **chore** (_ChipsItemCheckbox_): New ChipsItem Component for ChipsCheckboxes group
-   **chore** (_ChipsItemDismissible_): New ChipsItem Dismissible
-   **chore** (_ChipsItemRadio_): New ChipsItem Component for ChipsRadios group
-   **chore** (_ChipsRadios_): Changes properties look to direction and mandatory groupLabel
-   **chore** (_ChipsRadios_): Changes properties `look` to `direction` and mandatory groupLabel
-   **chore** (_ClickList_): Checkbox Items in ClickLists now return their new value in the `onChange` function instead
    of the previous value.
-   **chore** (_ClickListItem_): Renamed options of property `statusColor`: `green` to `success`, `yellow` to `warning`
    and `red` to `error` due to changes in StatusIndicator.
-   **chore** (_CcsApprovalPanel_): Component moved to package @lsg/ccs. Please update your imports
-   **feat** (_CcsApprovalPanel_): Removed props `approvalId`, `approvalMethod`, `messageId`. Use ref methods `cancel`
    and `prepare` instead. Added mandatory props `titleAs`, `waitFirstPollInMs`, `waitPollInMs`.
-   **chore** (_DateTexField_): Property `label` is mandatory now.
-   **chore** (_Footer_): Metabar: Property `navigationAriaLabel` is now mandatory and `socialLinksAriaLabel` is
    mandatory if you set `socialLinks`.
-   **chore** (_FootnoteAnchor_): Property `label` is mandatory now.
-   **chore** (_FooterWrapper_): Component moved to package @lsg/ccs. Please update your imports
-   **chore** (_GallerySlider_): Several changes and mandatory props for a11y.
-   **chore** (_HeaderWrapper_): Component moved to package @lsg/ccs. Please update your imports
-   **chore** (_Headline_): Property `as` is mandatory now.
-   **chore** (_Headline_): The 'thin' variants were removed from the headline component. Also the props `color`,
-   **chore** (_IconLink_): Property `label` is mandatory now.
-   **chore** (_InputDatepicker_): Deprecated name 'InputDatepicker', component renamed to 'DatePicker'.
    `Colors`, `variant`, `Variants`, `Sizes` and `asSpan`. Prop `badgeLook` is deprecated, please use `badgeColor`
    instead.
-   **chore** (_InputOptionTextField_): Property `label` is mandatory now.
-   **chore** (_InputSelect_): Property `label` is mandatory now.
-   **chore** (_InputTextfield_): Deprecated name 'InputTextfield', split component into new components 'TextField',
    'NumberTextField' and 'DateTextField'.
-   **chore** (_InputTextSlider_): Property `label` is mandatory now.
-   **feat** (_InputTextSlider_): In case of a range slider, give in an array of two strings for helperText and errorText.
-   **chore** (_JumpLinks_): Property `ariaLabel` is mandatory now.
-   **chore** (_Layer_): One of the properties `ariaLabel` and `ariaLabelledBy` is mandatory now.
-   **chore** (_Link_): Property `label` is mandatory now.
-   **chore** (_NumberTextField_): Property `label` is mandatory now.
-   **chore** (_OnPageNavigation_): Removed deprecated prop activeElementName
-   **chore** (_OptionTextField_): Property `label` is mandatory now.
-   **chore** (_Picture_): Property `alt` is mandatory now.
-   **chore** (_PortalHeader_): Property `navigationAriaLabel` is now mandatory and `segmentNavigationAriaLabel`
    and `iconLinksInteractionAriaLabel` are mandatory if you use the corresponding navigation trees. Property
    `menuFlyoutAriaLabel` is now mandatory.
-   **chore** (_SideNavigationPage_): Changed interface to be in line with other header and page components. Property
    `navigationAriaLabel` is mandatory now.
-   **chore** (_SimpleFooter_): Property `navigationAriaLabel` is mandatory now.
-   **chore** (_SimpleHeader_): Properties `navigationAriaLabel` and `menuFlyoutAriaLabel` are mandatory now.
-   **chore** (_StatusIndicator_): Removed deprecated props `Status` and `Directions`.
-   **chore** (_StatusIndicator_): Removed deprecated options `green`, `yellow`, `red` from property statusColor.
-   **chore** (_Snackbar_): New mandatory property `role`. Property `headlineAs` is mandatory now.
-   **chore** (_TanPanel_): New mandatory props `imageAltText`, `titleAs`, `loadingText`, `notificationImageAlt`.
-   **chore** (_TextField_): Property `label` is mandatory now.
-   **chore** (_TwoLineItem_): Property `headline` replaced by mandatory prop `label`.
-   **chore** (_CcsApprovalPanel_): Component moved to package @lsg/ccs. Please update your imports.
-   **feat** (_CcsApprovalPanel_): Removed props `approvalId`, `approvalMethod`, `messageId`. Use ref methods `cancel`
    and `prepare` instead. Added mandatory props `titleAs`, `waitFirstPollInMs`, `waitPollInMs`.
-   **chore** (_TanPanel_): New mandatory props `imageAltText`, `titleAs`, `loadingText`, `notificationImageAlt`.

**FEATURES**

-   **feat** (_BannerMessage_): A11y optimizations.
-   **feat** (_BarDiagram_): Add a11y aspects
-   **feat** (_CcsApprovalPanel_): A11y optimizations.
-   **feat** (_OnPageNavigation_): A11y optimizations.
-   **feat** (_ProcessPage_): Added HTML <nav> element and ARIA-label prop for side navigation (`navigationAriaLabel`)
    and further a11y improvements.
-   **feat** (_StatusIndicator_): Added optional property icon.
-   **feat** (_TanPanel_): Ally optimizations, additional optional and mandatory props.

**NON-BREAKING CHANGES**

-   **fix** (_DescriptionList_): Prop `titleWrap` is working now (CCSN-68919)
-   **fix** (_Headline_): Overline color when `overlineAs` is set (CCSN-67580)
-   **fix** (_Teaser_): Teaser is now nonInteractive when no href or onClick is provided

### 🌞 18.13.2 (lsgs-bc6e1) 18.06.2024

**NON-BREAKING CHANGES**

-   **fix** (_PortalHeader_): fix crash when changing navigationTree; fix focussing the first menu item after opening
    flyout
-   **fix** (_LegacyHeader_): Postbox Link Tooltip fixed

### 🌞 18.13.1 (lsgs-96e16) 16.04.2024

**NON-BREAKING CHANGES**

-   **fix** (_TextField_): issue between onBlur, onChange and onFocus interaction when clear button was pressed
-   **fix** (_BarChart_): solved zero offset when negativ values used only, beyond yAxis has goten a prop display to hide
    yAxis as well

### 🌞 18.13.0 (lsgs-ace25) 08.04.2024

**FEATURES**

-   **feat** (_Legacy Header_): Postbox Icon added to FK Metabar

### 🌬️ 18.12.2 (lsgs-ab96e) 12.03.2024

**NON-BREAKING CHANGES**

-   **fix** (_ActionFlyout_): fixed automated test issues
-   **fix** (_GallerySlider_): fixed column-gap issue
-   **fix** (_PortalHeader_): use initial viewport in Hook useViewportRange for SSR
-   **feat** (_PortalHeader_): new prop `onMobileMenuClick`
-   **feat** (_OnPageNavigation_): A11y optimizations.

### 🌬️ 18.12.1 (lsgs-f68d1) 28.02.2024

**NON-BREAKING CHANGES**

-   **fix** (_DataTable_): Fixed z-index issue.
-   **fix** (_InputTextfield_): Fixed `valueNumberFormatter` prop.
-   **fix** (_SnackBar_): Fixed render error (FocusLock) with test builds and ssr.
-   **fix** (_SnackBar_): Added missing `showLargeIconBadge` prop.

### 🌬️ 18.12.0 (lsgs-1efab) 08.02.24

**NEW COMPONENTS**

_SkipLinks_

**FEATURES**

-   **feat**: HelperText has a new color for more contrast and accessibility.
-   **feat**: Rename prop `navigationTreeAriaLabel` to `navigationAriaLabel`, to simplify interface.
-   **feat**: Replace usages of the brand color with an accessible color in various places.
-   **feat** (_ActionButton_, _Button_, _IconLink_): Add sufficient a11y support in conjunction with loading indicator
-   **feat** (_Badge_): Rename prop `look` to `color` and `type` to `appearance`, to make interface more consistent.
-   **feat** (_Cards_, _CardsRadios_, _CardsCheckboxes_, _CardsSwitches_): Optimization for accessibility. Added
    describedBy and renders list or fieldset container.
-   **feat** (_CardsCustomItem_): Rename prop `look` to `appearance`, to make interface more consistent
-   **feat** (_CardsCustomItem_): Added property gridColumnSize
-   **feat** (_Checkbox_): A11y redesign increases contrast
-   **feat** (_Checkbox_): Improved screen reader capability for the ErrorText
-   **feat** (_Chips_): Updated colors and pointer events for accessible chips.
-   **feat** (_GallerySlider_): Rename prop `look` to `appearance`, to make interface more consistent
-   **feat** (_GridRow_): Added `as` prop to enable list behavior which is required for UXPatterns like the Info List
    Pattern
-   **feat** (_InfoList_): Deprecated component and created UX Pattern as an alternative
-   **feat** (_InputTextSlider_): Accessibility support. New props ariaValueTextFormatter, ariaSliderLabel,
    ariaInputTextfieldLabel.
-   **feat** (_InputTextSlider_): New prop preventAutoCorrection. If this prop is set, the input field area will not
    close if the values in the text-fields are incorrect.
-   **feat** (_InputTextSlider_): New onInputChange even in favor of the deprecated onChange event. An onInputChange is
    triggered even if a text field is empty, returning an empty string. That way, an appropriate input validation on
    change of the input text-fields is possible and the input fields always reflect the current value.
-   **feat** (_JumpLinks_): A11y optimizations.
-   **feat** (_LoadingIndicator_): Supplementation of a11y support largely
-   **feat** (_Logo_): Improved accessibility for Logo component (Used in PortalHeader).
-   **feat** (_Pagination_): A11y optimizations (including new optional props) and keyboard interactions.
-   **feat** (_PortalHeader_): Added skip link for a11y benefit
-   **feat** (_PortalHeader_): A11y optimizations and keyboard interactions.
-   **feat** (_Radio_): A11y redesign increases contrast
-   **feat** (_Section_): Rename prop `look` to `spacing` of `<Section />` and `<SubSection />`, to make interface more
    consistent.
-   **feat** (_SelectionGroup_): Improved Screen reader capability for the ErrorText
-   **feat** (_SimpleHeader_): Added skip link for a11y benefit
-   **feat** (_SimpleTable_): Transformed to a11y readiness
-   **feat** (_Snackbar_): A11y optimizations
-   **feat** (_Switch_): A11y redesign increases contrast
-   **feat** (_Tabs_): A11y optimizations and keyboard interactions.
-   **feat** (_TextField_): Placeholder has a new color for more contrast and accessibility.
-   **feat** (_Theme_): Rename prop `look` to `color`, to make interface more consistent.

**NON-BREAKING CHANGES**

-   **fix**: Node 20.10.0 support.
-   **chore**: Updated examples to match upcoming breaking changes in next major version.
-   **chore** (_ActionButton_): Spacing reworked according to design specification.
-   **chore** (_Brandbar_): Deprecated logoAlt, use logoLabel prop instead.
-   **fix** (_ClickList_): Checkboxes and Radiobutton are clickable on the whole ClicklistItem area. Also, you now can
    give in an id for Checkbox/Radiobutton items.
-   **fix** (_ComplexTable_): Right align action icons.
-   **fix** (_ComplexTable_): Texts in ActionMenu are displayed; rowAction + menuActions possible at the same time.
-   **chore** (_ContactModule_): A11Y optimizations. Added "phone description id".
-   **doc**(_Grid_): Added a11y guidelines
-   **fix** (_InputSelect_): Prevent dropdown in readonly mode.
-   **chore** (_InputTextSlider_): Deprecated onChange handler in favor of new onInputChange handler.
-   **fix** (_Layer_): Fixed render error with test builds and ssr.
-   **fix** (_Layer_): Id is now rendered.
-   **fix** (_OptionsTextfield_): Prevent dropdown in readonly mode.
-   **chore** (_PortalHeader_): Deprecated logoAlt, use logoLabel prop instead.
-   **fix** (_PortalHeader_, _SimpleHeader_): Fix animation of indicator.
-   **chore** (_ProcessPage_): Deprecated logoAlt, use logoLabel prop instead.
-   **chore** (_SideNavigation_): Deprecated logoAlt, use logoAriaLabel prop instead.
-   **chore** (_SimpleFooter_): Deprecated logoAlt, use logoLabel prop instead.
-   **chore** (_SimpleHeader_): Deprecated logoAlt, use logoLabel prop instead.
-   **chore** (_StatusIndicator_): Made the icons optional by adding the appearance prop.

### 🍁 18.11.3 (lsgs-c3f08) 05.12.2023

**NON-BREAKING CHANGES**

-   **fix**: Fixed global list styling with negative side effects on native lists.
-   **fix** (_DataTable_): Fixed wrong font styling in tables.
-   **fix** (_SubSection_): Fixed not working prop 'separatorBottom'.

### 🍁 18.11.2 (lsgs-e1112) 28.11.2023

**NON-BREAKING CHANGES**

-   **fix**: React 17 is working again.
-   **fix** (_ActionButton_): The label can now be set with the children attribute again.

### 🍁 18.11.1 (lsgs-db019) 27.10.2023

### 🍁 18.11.0 (lsgs-b1d76) 26.10.2023

**NEW COMPONENTS**

_Search_

**FEATURES**

-   **feat** (_BankingCard_): Further a11y optimizations: Added alt-, title- and lang-attributes.
-   **feat** (_CreditCard_): Further a11y optimizations: Added alt-, title- and lang-attributes.
-   **feat** (_Footer_): The footer is now an HTML <footer> element, instead of a <div>.
-   **feat** (_FooterNavigation_): Added HTML <nav> element and ARIA-label prop for
    navigation-tree (`navigationAriaLabel`).
-   **feat** (_LegacyHeader_): Remove menu item EVA
-   **feat** (_Metabar_): Added HTML <nav> element and localised default ARIA-label prop for navigation-tree.
    (`navigationTreeAriaLabel`).
-   **feat** (_Metabar_): Added HTML <nav> element and localised default ARIA-label prop for social-links section.
    (`socialLinksAriaLabel`).
-   **feat** (_ProcessPage_): Added HTML <nav> element and localised default ARIA-label prop for footer navigation-tree
    (`footerNavigationTreeAriaLabel`).
-   **feat** (_Section_): Added `htmlAttrs` prop to enable additional ARIA-attributes (e.g. `aria-label`) if needed.
-   **feat** (_SimpleFooter_): Added HTML <nav> element and localised default ARIA-label prop (`navigationTreeAriaLabel`).
-   **feat** (_SimpleHeader_): Added ARIA-labels for navigation and improved focus handling on mobile menu.

**NON-BREAKING CHANGES**

-   **fix** (_Accordion_): Further a11y optimizations and smoother animation.
-   **chore** (_ActionButton_): The option to pass the label via children is now replaced by the mandatory label-prop.
-   **chore** (_ActionButton_): The look prop is renamed to color. Added prop appearance to hide the label.
-   **fix** (_Button_): "Arrow right"-icon is set as default now.
-   **chore** (_CircleIconLink_): The option to pass the label via children is now replaced by the mandatory label-prop.
-   **chore** (_CircleIconLink_): The look prop is renamed to color.
-   **fix** (_ClickList_): A11y optimizations for screen-reader and focus ring.
-   **fix** (_ContactModule_): Fixed layout issues within Action Button Group.
-   **fix** (_DataTable_): Flyout-components can now be used inside non-interactive Rows without z-index issues.
-   **fix** (_DataTable_): Removed the expanded "row click-functionality" in Table Row for Safari Browsers because of
    incompatibility.
-   **fix** (_DataTable_): Flyout-components can now be used inside non-interactive Rows without z-index issues.
-   **fix** (_DateTextField_): DateTextfield removes invalid input when focus is removed instead of keeping it.
-   **chore** (_Headline_): Changed HTML structure to improve screen reader accessibility.
-   **fix** (_Headline_): Maximum line length for H1, H2, H3 fixed for larger screens.
-   **chore** (_Icon_): Use type for icon prop.
-   **chore** (_IconLink_): The option to pass the label via children is now replaced by the mandatory label-prop.
-   **chore** (_IconLink_): The look prop is renamed to appearance.
-   **chore** (_Link_): The option to pass the label via children is now replaced by the mandatory label-prop.
-   **fix** (_ProductStage_): Fixed auto-adjusting height of the ProductStage.
-   **chore** (_ProductStage_): Marked obsolete `scrollerText` prop as deprecated.
-   **chore** (_Stage_, _ProductStage_): A11Y optimizations, set scroller animation count to 3 iterations.
-   **chore** (_StatusIndicator_): Added a11Y features to StatusIndicator and adjusted alignment.
-   **fix** (_Stepper_): Added HTML <nav> element and aria label to links below stepper to improve a11y
-   **fix** (_TextHighlight_): Broken thumbnail fixed.
-   **chore** (_TwoLineItem_): Added prop appearance to hide the headline.

### 🌵 18.10.3 (lsgs-aacd6) 06.09.2023

**NON-BREAKING CHANGES**

-   **fix**: React 17 issue with InputSelect component.

### 🔥 18.10.2 (lsgs-25c73) 25.08.2023

**NON-BREAKING CHANGES**

-   **fix**: React 17 issue with internal uniqueId function.

### 🏄‍ 18.10.1 (lsgs-cb2b1) 07.08.2023

**NON-BREAKING CHANGES**

-   **fix** (_TextField_): Added touch listeners for TextField password reveal.
-   **fix** (_TextField_): Fixed missing `onKeyDown` event for text-areas.
-   **fix** (_TextField_): Fixed missing `onChange` callback for clear button.

### 🐝 18.10.0 (lsgs-a737a) 28.07.2023

**FEATURES**

-   **feat** Improved color contrast for signal colors.
-   **feat** White label for signal colors.
-   **feat** (_Accordion_): Added `headlineAs` prop due to a11y enhancements.
-   **feat** (_BannerMessage_): Set info-text max-width inside banner-message to 768px (CCSN-56464).
-   **feat** (_BannerMessage_): Added `headlineAs` prop due to a11y enhancements.
-   **feat** (_ClickList_): Multi-Action-Clicklist is available now, beyond Radio-/Checkbox validation type as well.
-   **feat** (_ComplexTable_): Exchanged headline by div inside mobile header.
-   **feat** (_Icon_): If a `title` is set the `role=img` attribute is added automatically.
-   **feat** (_Icon_): If no `title` is set an `aria-hidden=true` attribute will be added.
-   **feat** (_Icon_): Uniform display of unavailable icons "n/a" (CCSN-54502).
-   **feat** (_InfoListItem_): Added `headlineAs` prop due to a11y enhancements.
-   **feat** (_List_): List with different icons are possible now. Property icon and iconColor can be overwritten on
    ListItem.
-   **feat** (_SelectionCard_): Added `optionLabelAs` prop due to a11y enhancements. Localised aria-label.
-   **feat** (_SimpleFooter_): Exchanged headline by div inside claim.
-   **feat** (_Snackbar_): Added `headlineAs` prop due to a11y enhancements.
-   **feat** (_Teaser_): Added `headlineAs`, `overlineAs` and `sublineAs` prop due to a11y enhancements.
-   **feat** (_TeaserGroup_): Added `groupHeadlineAs` prop due to a11y enhancements.

**NON-BREAKING CHANGES**

-   **fix**: Some dependency vulnerability issues
-   **fix** (_ArticleListItem_): Set default `itemHeadlineAs` to h5 to obtain the logical hierarchy.
-   **fix** (_Autocomplete_): Display error if there are no options (CCSN-54523, CCSN-44818).
-   **fix** (_Autocomplete_): Fixed onKeyHandler issue
-   **fix** (_Breadcrumbs_): Animation direction and avoid flickering when hovering near the edges.
-   **fix** (_Breadcrumbs_): A11y (ol instead of ul, default aria-label if title is not provided)
-   **fix** (_InputOptionsTextfield_): Removed double bottom margin.
-   **fix** (_InputTextfield_): Removed duplicate call of onChange handler.
-   **fix** (_Layer_): Fix sticky elements inside of layer (CCSN-58560).
-   **fix** (_Link_): Fix interactive behavior on click when nonInteractive prop is set.
-   **fix** (_PortalHeader_, _SimpleHeader_): Language resource for the hamburger menu button (CCSN-51365).
-   **fix** (_PortalHeader_, _SimpleHeader_): Fixed Logo SSR issue in React 18 (CCSN-53148).
-   **fix** (_Slider_): Set `aria-disabled` if `disabled={true}`

### 🌷 18.9.0 (lsg-0d6f7) 21.04.2023

**FEATURES**

-   **feat**(_ProfileWidget_): Hide and custom text of Logout button. Custom profile icon can be set (CCSN-52326).
    Adjusted spacing (CCSN-40938).
-   **feat**: New icons "brands allianz", "symbols star" (CCSN-53727).

**NON-BREAKING CHANGES**

-   **fix**(_InputDatePicker_): fix misbehavior onBlur event, event will raise now the whole component is left
-   **fix**(_BannerMessage_): Default arrow on Safari browser in conjunction with collapsible option become suppressed
    now.
-   **fix**(_DataTable_): Set 'font-variant-numeric' to 'tabular-nums' in table-data.
-   **fix**(_GallerySlider_): Correction in calc on slide movement with odd amount of numbers.
-   **fix**(_IconLink_): Secondary color for Icon; fixed Icon hover issue.
-   **fix**(_Stage_): Background image alt text (CCSN-51370), play background video (CCSN-49636) and prop
    'eyeCatcherAppearanceTime' fixed.
-   **fix**(_CcsApprovalPanel_): Primary button for non-photo-TAN approvals

### 🌞 18.8.0 (lsg-05770) 24.02.2023

**FEATURES**

-   **feat**: Updated webfonts (woff-files) from Gotham v6.7.21 (Hoefler&Co) to Gotham (from Jan. 2023, Monotype)

**NON-BREAKING CHANGES**

-   **fix**(_Cards_): Fixed menu flyout z-index issue
-   **fix**(_ChipsItem_): Fixed centered display if ChipItem contains only 1 character
-   **fix**(_ClickList_): Fixed missing margin
-   **fix**(_DatePicker_): Misbehavior on date input field is solved. The field is focusable and editable again
-   **fix**(_GallerySlider_): Vertical spacings overworked
-   **fix**(_IconLinkGroup_, _IconLink_): Collapsing of IconLink in a group element at safari browser is fixed
-   **fix**(_InputRadio_): Handover html attributes via prop htmlAttrs works again
-   **fix**(_PortalHeader_, _SimpleHeader_, _Layer_): Text overlapping caused by z-index order in conjunction with
    DataTable is fixed.

### 🎄 18.7.0 (lsg-b1d71) 16.12.2022

**FEATURES**

-   **feat**: Components support for 'prefers-reduced-motion' CSS media feature, which is used to detect if the user has
    requested that the system minimize the amount of non-essential motion.

**NON-BREAKING CHANGES**

-   **fix**(_lsg.components_): Fixed of vulnerability with nested ansi-rexep 2.1.1
-   **fix**(_lsg.components_): Fixed 1px viewport gap in breakpoints (viewports with
    fractional widths, e.g. between 639px to 640px) to prevent undefined component behaviour
-   **fix**(_ActionButtonGroup_): Spacing between ActionButtons fixed
-   **fix**(_Chips_): Fixed styling of dismissible ChipsItem
-   **fix**(_DatePicker_): Harmonized date format for Chips variant
-   **fix**(_DatePicker_): Added missing keyboard Interaction to DatePicker
-   **fix**(_GallerySliderItem_): Cards design was updated
-   **fix**(_GallerySlider_): Fixed missing slides in last page
-   **fix**(_Grid_): Compensate last item spacing
-   **fix**(_IconLink_): Multi-line Icon alignment
-   **fix**(_Icon_): Fixed secondary and secondaryHover color assignments
-   **fix**(_SimpleTable_): Alignment of arbitrary content in SM viewport
-   **fix**(_TanPanel_): Replaced Component TanNotification with Snackbar
-   **fix**(_TextField_): Fixed not sending form on enter

### 🦃 18.6.0 (lsg-783c3) 09.11.2022

**FEATURES**

-   **feat**(_Cards_): Added property gridColumnSize for CardsItem
-   **feat**(_DataTable_): DataTable comes with sticky header option (tested uses cases: standard table matrix, check
    box and expandable row variants)
-   **feat**(_InputTextfield_): Rework number type variant, language-specific decimal and thousands separators
-   **feat**(_InputTextfield_): New prop decimalDigits to limit and format the decimal digits (number type of
    InputTextfield)
-   **chore**: Added package @lsg.fonts to the Markenportal download section

**NON-BREAKING CHANGES**

-   **fix**(_Chips_): RadioGroup condensed alignment in Chips group fixed
-   **fix**(_DataTable_): Various Bugfixes for small screens
-   **fix**(_BarChart_): Error has thrown when datapoint was set on zero or bar chart was displayed in conjunction with
    separator on option level
-   **fix**(_Footnote_): Fixed footnote design according to spec.
-   **fix**: Fixed issues in Legacy Header for CCB Portal

### 🐇 18.5.0 (lsg-daf82) 07.10.2022

**FEATURES**

-   **feat**(_BankingCard_): Extend co-badges (flag) with giro-card. Beyond, some more props are set to optional to get
    more flexibility and second own line is added
-   **feat**(_ProductStage_): Rework: improved mobile layout, new "Sticky-Button" behaviour, removed old layouts
-   **feat**: New icon "MasterCard"
-   **feat**: New helper hook functions "useViewport", "useViewportRange" -> see Markenportal/Developers/Window util
    functions

**NON-BREAKING CHANGES**

-   **fix**(_ActionButtonGroup_): Fixed wrapping behaviour
-   **fix**(_ApprovalPanel_): Fixed InputTextfield autofocus issue
-   **fix**(_ButtonGroup_): Buttons in Button Group now have the full width on mobile again.
-   **fix**(_Checkbox_): Cursor fixed
-   **fix**(_Chip_): Cursor for the non-interactive variant fixed
-   **fix**(_CircleIconLink_): fixed missing htmlAttrs.
-   **fix**(_Dwindle_): Fixed background color for click-event.
-   **fix**(_Grid.Column_): horizontalAlignment in GridColumn fixed
-   **fix**(_InputTextfield_): Focus issue
-   **fix**(_OptionsTextField_): Fixed Edge case flyout width
-   **fix**(_PortalHeader_): Fixed non-wrapping menu item.
-   **fix**(_SelectionGroup_): Alignment of children fixed

### 🐿️ 18.4.0 (lsg-0d6d4) 02.09.2022

**NEW COMPONENTS**

_Badge_

**FEATURES**

-   **feat**: All Colors are updated to new Corporate Design (5.1) Sand Theme is added.
-   **feat**: New icons
-   **feat**(_Chips_): Horizontally scrolling variant (mobile support)
-   **feat**(_ChipsItem_): Component overworked
-   **feat**(_ChipsItem_): Dismissible variant
-   **feat**(_ChipsRadio_): New component for supporting native radio buttons
-   **feat**(_ChipsRadio_): Condensed variant
-   **feat**(_Logo_): Adaptation of the logo component to new Corporate Design (5.1)

**NON-BREAKING CHANGES**

-   **fix**(_Accordion_): Accordion Label now goes back into start position when closed and adjusted icon padding
-   **fix**(_ActionFlyout_): Fixed Warning message "update during state transition"
-   **fix**(_ActionFlyout_): Flyout positioning fixed by setting the width to max-content.
-   **fix**(_Badge_): Icon is now rendered in the correct color for all available looks
-   **fix**(_Badge_): Vertically centered icon in small badge
-   **fix**(_BarChart_): InfoArea Positioning fixed on large screens
-   **fix**(_Checkbox_): Label now breaks to the next line if the screen is too small
-   **fix**(_CircleCountdown_): Fixed placement of Button in CircleCountdown
-   **fix**(_ClickList_): Error message when Badge was used without a text
-   **fix**(_ContactModule_): Headline center issue fixed
-   **fix**(_DataTable_): Insert translation of internal static text, add simple chips example, adjust position of
    possible Action-Icon-Link-Group
-   **fix**(_DatePicker_): Fixed Warning message "uncontrolled input type"
-   **fix**(_Grid_): centering would cause HTML DOM Element children to have an invalid horizontalAlignment attribute
-   **fix**(_IconLink_): IconLink Badge with 2 or more symbols not overlapping anymore
-   **fix**(_InputTextField_ / _InputTextSlider_): Confirm input with keypress Enter. Triggers onBlur event on Enter.
-   **fix**(_OnPageNavigation_): Fixed overflow of the header content on mobile screens
-   **fix**(_PortalHeader_): Adjusted PortalHeader logo placement
-   **fix**(_ProcessPage_): Fixed overflowing NavigationBlock on smaller screens
-   **fix**(_Radio_): Label now breaks to the next line if the screen is too small
-   **fix**(_Radio_): If several Radio Groups are on a page, they now can be only navigated seperated with arrow-buttons
-   **fix**(_Snackbar_): Snackbar does now open on first render when open is set to true
-   **fix**(_Switch_): Label now breaks to the next line if the screen is too small
-   **fix**(_TanPanel_): InputTextfield autofocus issue

### 🏦 18.3.2 (lsgs-c2ee7) 09.08.2022

**NON-BREAKING CHANGES**

-   **fix**: Serious CSS styles not rendering issue in 18.3.1 due to wrong css class selectors

### 🏦 18.3.1 (lsgs-03e4c) 09.08.2022

**NON-BREAKING CHANGES**

-   **fix**: Legacy Header fixes

### 🍨 18.3.0 (lsgs-cOKyT) 22.07.2022

**NEW COMPONENTS**

_ChipsSelect_, _ChipsDatePicker_, _A11yMeaningfulLabel_, _CardsCustomItem_, _CardsCheckboxesCustomItem_,
_CardsRadiosCustomItem_, _CardsSwitchesCustomItem_, _CardsSwitches_

**FEATURES**

-   **feat**(_Snackbar_): Component overworked
-   **feat**(_BannerMessage_): Component overworked
-   **feat**(_Brandbar_): Added props for custom logo
-   **feat**(_InputTextfield_): New Suffix Layout type (similar to OptionsTextFiled)
-   **feat**(_InputTextfield_): Support for input type="number"
-   **feat**(_CcsApprovalPanel_): Added centeredLayout prop
-   **feat**(_CcsApprovalPanel_): The autofocus can now be disabled on desktop viewports. Generally disabled on mobile
    viewports.

**NON-BREAKING CHANGES**

-   **fix**(_InputTextfield_): Vertical alignment fixed on inline suffix
-   **fix**(_InputSelect_): No pointer-cursor and active-border on readonly select
-   **fix**(_InputTextfield_): Fixed an issue where content below was moved down 1px on hover.
-   **fix**(_Icon_): If badgeText is undefined or an empty string, the Badge will be rendered as a dot. - CCSN-38476
-   **fix**(_ClickListCheckboxes_): Added missing label prop
-   **fix**(_HeaderWrapper_): Legacy Header z-index issue fix (e.g. ClickList) - CCSN-41282
-   **fix**(_ComplexTable_): ActionFlyout onClick fixed
-   **fix**(_InputSelect_): Fix selecting options by pressing the starting character of the caption.
-   **fix**(_InputDatepicker_): Fix incorrect hover effect when hovering the current day.
-   **fix**(_Headline_): Fixed an issue where spacing was wrong when inline tag was used on "as"-prop

### 🍳 18.2.1 (lsgs-LIN6s) 10.06.2022

**NON-BREAKING CHANGES**

-   All fixes from v17.13.6 are included
-   **fix**(_TanPanel_): Adjusted the width of the TanPanel to 8 GridColumns, to still use the old width temporarily use
    the fullWidth property.
-   **fix**(_Flyout_): Flyout placement issues have been fixed
-   **fix**(_ComplexTable_): ActionFlyout onClick fixed

### 🦋 18.2.0 (lsgs-NOkN4) 05.05.2022

**NEW COMPONENTS**

_Chips_, _DetailPageHeader_, _CreditCard_

**FEATURES**

-   **feat**(_Headline_): The thin variant is removed from the headline component. To prevent a breaking change the
    prop "variant" is not removed until the next major release. Thin variant will be displayed regular.
-   **feat**(_PortalHeader_): Added new Animation for the mobile view of the portal header
-   **feat**(_Layer_): Layer as modal version
-   **feat**(_BreadCrumbs_): Ported to CoBa 5.0 design
-   **feat**(_LineChart_): Lines can be drawn as steps
-   **feat**(_LineChart_): Tooltip formatter added

**NON-BREAKING CHANGES**

-   **upgrade**: Upgraded to new fixes of v17.13.5

### 🦍 18.1.0 (lsgs-UzeBC) 31.03.2022

**NEW COMPONENTS**

-   **upgrade**: Upgraded to new components of v17.13.0

**FEATURES**

-   **upgrade**: Upgraded to new features of v17.13.0

**NON-BREAKING CHANGES**

-   **upgrade**: Upgraded to new fixes of v17.13.0
-   **fix**(_PortalHeader_): Fixed React Router support in 3rd menu layer

### 🥢 18.0.0 (lsgs-0jNmL) 03.03.2022

**BREAKING CHANGES**

-   **chore**: Gotham Webfonts are now not delivered as part of the LSG
-   **chore**(_AnimatedSwitch_): Removed component due to dependency to React Router 5.
-   **chore**(_withReactRouterLink_, _withReactRouterNavigation_): Removed HOCs due to React Router 5 dependency.
-   **feat**(_Button_): Button renders as a block element
-   **feat**(_Icon_): Icon renders as a block element and optionally as an inline element without a margin.
-   **chore**(_TipsTricks_): Renamed to InfoList
-   **chore**(_ClickListItem_): Removed deprecated property "headlineAs". Removed statusColor "neutral".
-   **chore**(_Footer_): Removed deprecated property "theme". Use white label solutions instead.
-   **chore**(_Autocomplete_): Removed deprecated property "onIconClick".
-   **chore**(_PortalHeader_): Removed deprecated Property "logoAttrs", use logoHtmlAttrs instead.
-   **chore**(_SimpleHeader_): Removed deprecated Property "logoAttrs", use logoHtmlAttrs instead.
-   **chore**(_UNSAFEHeader_): Removed deprecated Component "UNSAFEHeader".
-   **chore**(_UNSAFEJumpLinks_): Removed deprecated Component "UNSAFEJumpLinks", use JumpLinks instead.
-   **chore**(_UNSAFETheme_): Removed deprecated Component "UNSAFETheme", use Theme instead.
-   **chore**(_Cards_): Removed deprecated Properties "value" and "onChange". Use CardsRadios for radios or seperate
    onChange handlers for each item with checkboxes instead.
-   **chore**(_ActionButton_): IconVariants prop deprecated, use IconVariant instead.
-   **chore**(_Logo_): Logo is now deprecated and renamed to UNSAFELogo
-   **chore**(_SideNavigation_): SideNavigation is now deprecated and renamed to UNSAFESideNavigation
-   **feat**(_GridColumn_): horizontalAlignFeaturePreview prop is now removed anf feature is active by default

**FEATURES**

-   **feat**: Updated web fonts (woff) from Gotham v3.301 to v6.7.21
-   **feat**: Support of ReactRouter 6 by actionAs and actionProps attributes
-   **feat**: (_FormLink_) Provide `htmlAttrs` property.

**NON-BREAKING CHANGES**

-   **fix**(_SimpleTable_, _ComplexTable_): Set 'font-variant-numeric' to 'tabular-nums' in table-data
-   **fix**(_Select_): Border is yellow as long as the flyout is open
-   **fix**(_Layer_): Layer header z-index issue
-   **fix**(_IconCard_): Pass down `htmlAttrs` property to _ClickList_.
-   **fix**(_Indicator_): Fixed Indicator to be one render behind.
-   **fix**(_InputRadio_): Use appropriate string for unique ID.
-   **fix**(_InputTextSlider_): Avoid delay after refresh when moving the slider via mouse.
-   **fix**(_InputTextField_): Apply readonly property to _Select_ appropriately.

### 🐛 v17.13.8 (lsgs-MS4xNy44) 01.08.2022

**NON-BREAKING CHANGES**

-   fix: Prefix css to overcome version conflicts

### 🐋 v17.13.7 (lsgs-MS4xNy43) 09.06.2022

**NON-BREAKING CHANGES**

-   **fix**(_ProductStage_): Highlight without foreground image text issue CCSN-39392

### 🍳 v17.13.6 (lsgs-MS4xNy42) 03.06.2022

**NON-BREAKING CHANGES**

-   **fix**(_InputTextSlider_): Slider kept stick on mouse pointer after drag mode (Mouse-up) when a user side onchange
    was not defined.
-   **fix**(_Layer_): height calculation on mobile devices
-   **fix**(_Headline_): Multi-Line centering of overline and subline
-   **fix**(_GallerySlider_): fixed width so that the right border is aligned with the section
-   **fix**(_GallerySlider_): Remove occasional console error on cards drag CCSN-39177
-   **fix**(_GallerySlider_): Added pagination wrap in case there are many slides on small viewports CCSN-29006
-   **fix**(_Pagination_): Mobile view at viewport xs only.
-   **fix**(_InputTextfield_): onBlur removed date when manually changing a parsed date CCSN-39263
-   **fix**(_InputDatepicker_): Disabled month select arrows if previous/next month has no selectable days CCSN-39136
-   **fix**(_InputDatepicker_): Fix missing first day of month CCSN-39139
-   **fix**(_InputDatepicker_): Fix missing highlight of current day CCSN-39258
-   **fix**(_InputDatepicker_): Fix missing hover on sundays CCSN-38478
-   **fix**(_ProductStage_): Added Nullchecks to Image sources to avoid 404 network errors.
-   **fix**(_Picture_): When user preference "reduceMotion" is set, the ElevatorAnimation doesn't show anymore.
-   **fix**(_InputSelect_): WithTextInput variant now works again
-   **fix**(_InputSelect_): Disabled value cannot be selected
-   **fix**(_Jumplinks_): Jumplinks now are animated again when scrolling over the page
-   **fix**(_Accordion_): Fixed overflow issues when components with flyout are inside of the accordion
-   **fix**(_InputOptionsTextfield_): unify conventions for id, name and onChange callback
-   **fix**(_TanPanel_): Replaced old images and illustrations
-   **fix**(_InputText_): Fixed an issue where content below was moved down 1px on hover.
-   **fix**(_IconPresentation_): If badgeText is undefined or an empty string, the Badge will be rendered as a dot. -
    CCSN-38476
-   **fix**(_ClickListCheckboxes_): Added missing label prop
-   **fix**(_HeaderWrapper_): Legacy Header z-index issue fix (e.g. ClickList) - CCSN-41282
-   **fix**(_ComplexTable_): ActionFlyout onClick fixed
-   **fix**(_Select_): Fix selecting options by pressing the starting character of the caption.
-   **fix**(_InputDatePicker_): Fix incorrect hover effect when hovering the current day.
-   **fix**(_InputDatePicker_): Fix missing highlight of selected month/day if minDate is selected and provided minDate
    is not the exact start of month/day.
-   **fix**(_Headline_): Fixed an issue where spacing was wrong when inline tag was used on "as"-prop
-   **fix**(_Badge_): Icon is now rendered in the correct color for all available looks

### 🌺 v17.13.5 (lsgs-MS4xNy41) 03.05.2022

**NON-BREAKING CHANGES**

-   **fix**(_DatePickerFlyout_): Overlapping selections and overflowing content fixed. Next/Prev Buttons realigned.
-   **fix**(_DescriptionList_): Font size of description term corrected
-   **fix**(_InputTextSlider_): Adjustment in styling of prop label 'to', initializing of values at onBlur and closing
    edit mode
-   **fix**(_ActionFlyout_): Add keyboard controls and other missing a11y features.
-   **fix**(_Button_, _ActionButton_, _CircleIconLink_): Split click animation into distinct animations for `mousedown`
    and `mouseup`.
-   **fix**(_ComplexTable_): Adjusted flyout opening direction to always open to the left

### 🚽 v17.13.4 (lsgs-MS4xNy40) (28.04.2022)

-   **fix(Layer)**: Missing scrollbar fixed

### 🚽 v17.13.3 (lsgs-MS4xNy4z) 21.04.2022

-   **fix**: Safari overflow (headers and mega flyout) fixed

### 🥝 v17.13.2 (lsgs-MS4xNy4y) 11.04.2022

**NON-BREAKING CHANGES**

-   **fix**: Safari overflow (IconLinkGroup and others) fixed

### 🦋 v17.13.1 (lsgs-MS4xNy4x) 06.04.2022

**NON-BREAKING CHANGES**

-   **fix**(_LineChart_): Height/width issue solved
-   **fix**(_PortalHeader_): Fixed mobile menu header z-index issue

### 🦋 v17.13.0 (lsgs-MS4xNy4w) 30.03.2022

**NEW COMPONENTS**

_InputOptionsTextfield_, _DataTable_

**FEATURES**

-   **feat**(_Stage_): use a picture tag instead of a css background image so that webp loads more reliably
-   **feat**(_ProductStage_): use a picture tag instead of a css background image so that webp loads more reliably

**NON-BREAKING CHANGES**

-   **fix**(_TabBar_): Correction of z-index on TabBar arrows.
-   **fix**(_Layer_): correction of z-index on layer (header) in conjunction with embedded grid and more content inside
-   **fix**(_ComplexTable_): HorizontalAlignment of table entries fixed
-   **fix**(_TanPanel_): corrected order of image and text area
-   **fix**(_CcsApprovalPanel_): corrected order of image and text area
-   **fix**: Legacy Header logout button issue
-   **fix**(_LineChart_): Design adjustment (colors, line stength, tooltip behavior)
-   **fix**(_LineChart_): Last label of xAxis visible
-   **fix**(_LineChart_): Performance issues fixed; unneccesary rerenders reduced
-   **fix**(_ComplexTable_): Fixed issue with dropdown shrinked menu width

### 🌱 v17.12.2 (14.03.2022)

**NON-BREAKING CHANGES**

-   **fix**(_CcsApprovalPanel_): Issues with PUSH_PHOTO_TAN and BUTTON

### 🌱 v17.12.1 (11.03.2022)

**NON-BREAKING CHANGES**

-   **fix**(_ProductStage_): Picture prop update was not triggering a re-render

### 🌱 v17.12.0 (02.03.2022)

**NEW COMPONENTS**

_ActionFlyout_

**FEATURES**

-   **feat**: New icons
-   **feat**(_Hyphenation_): Hyphenation set to "auto". Manual Hyphens option added to Headline, Paragraph & Stage
    Components
-   **feat**(_Headline_): Badge can be added to Headline's overline and subline
-   **feat**(_ClickList_): Added Headline to ClickList
-   **feat**(_BannerMessage_): Reworked BannerMessage and added new functionality

**NON-BREAKING CHANGES**

-   **fix**(_ActionButton_): missing loading effect has been corrected, it's supported now
-   **fix**(_InputSelect_): ARIA - Ensure that assistive technology can identify the focussed value of the Flyout.
-   **fix**(_ActionGroup_): tab order of buttons (Primary, Secondary, Back)
-   **fix**(_Grid_): column reverse
-   **fix**(_TanPanel_): TanNotification doesn't pop up anymore when TanPanel is visible on startup.
-   **fix**(_SeveralComponents_): Overflow of long strings now breaks and avoids overflow to the right side.
-   **fix**(_OnPageNavigation_): Adjusted when the OPN is shown and when it's hidden for mobile and desktop

### 🦜 v17.11.0 (01.02.2022)

**NEW COMPONENTS**

**FEATURES**

-   **feat**(_Accordion_, _AccordionGroup_): Accordion and AccordionGroup components can now be stateful, too
-   **feat**(_IconLink_): New option for hover animation
-   **feat**(_ClickList_): Badge can be added to ClickList
-   **feat**(_TwoLineItem_): Badge can be added to TwoLineItem
-   **feat**(_InputDatepicker_): If the locale "en_US" is detected, Sunday is set as the first day of the week in the
    dropdown widget, else Monday.
-   **feat**(_ArticleStage_): Centered Layout option added and Spacing Adjustment

**NON-BREAKING CHANGES**

-   **fix**(_IconLink_, _CircleIconLink_): Components inherits the title to icon
-   **fix**(_Select_): Border is yellow as long as the flyout is open
-   **fix**(_Cards_): Expand hover and click area of provided custom JSX action to the entire card element.
-   **fix**(_Cards_): Disable hover behaviour if no `onClick`, `href` or no custom JSX action with `onClick` or `href` is
    provided.
-   **fix**(_ClickList_): ClickList adjusted margin, added hyphens option and edited max-width
-   **fix**(_InputSelect_): Removed build issue
-   **fix**(_Paragraph_): Removed TypeScript build issue
-   **fix**(_TanPanel_): TanPanel checkbox is now accessible
-   **fix**(_CircleIconLink_): Fixed text color of disabled CircleIconLink.
-   **fix**(_InputDatepicker_): Now the Flyout doesn't open to top when getting cropped.
-   **fix**(_InputDatepicker_): Set the displayed default "en" and "en_GB" date to "DD.MM.YYYY" respectively "MM.YYYY".
-   **fix**(_InputDatepicker_): Fixed placeholder for "en_US" to "MM/DD/YYYY".
-   **fix**(_CcsApprovalPanel_): Fixed active submit button in last-situation
-   **fix**(_ArticleStage_): Prop "thumbIcon" added. Now the usage of icons within the thumbnail works also in this
    component
-   **fix**(_VideoPlayer_): Video is now seekable again

### ❅ 17.10.0 (17.12.2021)

**NEW COMPONENTS**

_TanNotification_, _BarChart_

**FEATURES**

-   **feat**(_Textfield_): Added optional InputSelect component for e.g. currency choice
-   **feat**(_CcsApprovalPanel_): CcsApprovalPanel is now in LSG 5.0 light theme, has interactive submit button and
    TanNotification added. Also unused approvalmethod "BUTTON" is removed.
-   **feat**(_TanPanel_): Option for secondary button look, now in 5.0 light theme and TanNotification added
-   **feat**(_InputDatepicker_): Option for enabling/disabling holidays, workdays, weekends

**NON-BREAKING CHANGES**

-   **fix**(_ActionButton_, _BankingCard_, _BarDiagram_, _Button_, _ComplexTable_, _GallerySlider_, _Grid_, _Headline_,
    _IconLink(Group)_, _InputTextField_, _InputDatePicker_, _InputGroup_, _Layer_, _LineChart_, _List_, _Paragraph_, _
    Section_, _SimpleTable_, _Stage_, _StatusIndicator_, _Stepper_, _Teaser_, _Theme_): all enum types are transformed
    to literal types.
-   **fix**(_PortalHeader_): Mobile drawer menu header is now sticky if `PortalHeader` is sticky
-   **fix**(_ProcessPage_): Mobile drawer menu header is now sticky
-   **fix**(_ProcessPage_): Mobile width issue
-   **fix**(_Layer_): Layer header now is sticky
-   **fix**(_InputDatepicker_): Use proper whitespaces in flyout to prevent encoding issues. Since no encoding issues
    were reproducible, this is not guaranteed to fix them, but rather a general improvement that may help.
-   **fix**(_InputDatepicker_, _InputTextfield_): The standard "en" language format is now DD/MM/YYYY instead of
    MM/DD/YYYY
-   **fix**(_ProductStage_): Removed dependency on viewport
-   **fix**(_ProductStage_): CTA positioning
-   **chore**(_ReactRouter_): Moved react-router dependencies to peerDependencies and devDependencies

### 🦇 17.9.0 (23.11.2021)

**FEATURES**

-   **feat**(_Tabs_): Badges for Tab labels.
-   **feat**(_Tabs_): CentredLayout support added.
-   **feat**(_ActionGroup_): Centering items with the `centeredLayout` prop, if only one button area ist defined.
-   **feat**(_StatusIndicator_): Introduced state "Neutral" (grey).
-   **feat**(_BarDiagram_): The bar is now thicker on viewports >= `md`.
-   **feat**(_ClickList_): Added support for checkbox and radio items inside a `ClickList`.
-   **feat**(_StatusIndicator_): Added HelperText for StatusIndicator.
-   **feat**(_PortalHeader_): Prerender all menu links for SSR/SEO

**NON-BREAKING CHANGES**

-   **fix**(_InputDatepicker_): open or reopen of flyout shows the selected value, when it exists. Otherwise focussed
    value.
-   **fix**(_Paragraph_): HtmlAttrs was processed wrongly.
-   **fix**(_List_): Long texts now break and don't overlap listicons.
-   **fix**(_Link_): Links have a word-break now so they don't break narrow/mobile layouts.
-   **fix**(_TwoLineItems_): Ids and classNames can be passed.
-   **fix**(_InputTextfield_): Icon cut-off issue in small viewports.
-   **fix**(_ProductStage_): ProductStage shows background overlay on highlighted version
-   **fix**(_ProductStage_): Adapted to new mobile highlight variant
-   **fix**(_SelectOption_): The `disabled` prop of a SelectOption now works correctly.
-   **chore**(_Cards_): Refactored API for checkbox and radio items to resemble `ClickList`, `Radio` and `Checkbox`.
-   **chore**(_Cards_): Deprecated old API.

### 🍂 v17.8.0 (27.10.2021)

**NEW COMPONENTS**

_SideNavigationPage_

**FEATURES**

-   **feat**(_SideNavigation_): Deprecated component, use SideNavigationPage instead
-   **feat**(_ActionGroup_): Allow alignment, if the `left` prop is not provided
-   **feat**(_ProductStage_): CCSN-30381 Focal Point can be provided
-   **feat**(_InputSlider_): rework, supports now single and range slider mode
-   **feat**(_InputTextSlider_): rework, supports now single and range slider mode. It also includes validation parts.
    The prop `InputTextSlider.sliderStep` is set on deprecated.
-   **feat**(_Cards_): Centering items with the `centeredLayout` prop, configurable number of columns with the
    `itemsPerRow` prop
-   **feat**(_Headline_): Improved typography for md viewport

**NON-BREAKING CHANGES**

-   **fix**(_IconLink_): vertical label alignment on mobile viewport
-   **fix**(_Select_): Update the displayed value if the options change.
-   **fix**(_Stage_): css solution for height calculation
-   **fix**(_ProductStage_): Scroller Text invisible for viewports xs and sm
-   **fix**(_ProductStage_): css solution for height calculation and other minor issues
-   **fix**(_ProductStage_): CCSN-30383 background overlay did not show
-   **fix**(_Picture_): CCSN-30384 resources with name `undefined` were loaded from the server
-   **fix**: ViewportCallbacks were not triggered after unmounting all components and remounting.
-   **fix**(_withReactRouterLink_): Fixed refresh issue, when a link was clicked
-   **fix**(_withReactRouterNavigation_): Fixed refresh issue, when a link was clicked
-   **fix**(_IconLinkGroup_): Fixed vertical scrollbar on legacy browsers
-   **fix**(_Icon_): If `id` prop is undefined, a unique id will be set.
-   **fix**(_Icon_): If `title` prop is not set, the corresponding or default title is used. Set `title=""` if you require
    an empty title.
-   **fix**(_Icon_): The `svgAttrs` prop is now working correctly, to ensure that aria requirements can be met.
-   **fix**(_List_): The `textSize` respectively `List.TextStyles` prop is now passed correctly.

-   **doc**(_Section_): Clarified the usage of the `<Theme>` component

### 🌇 v17.7.0 (24.09.2021)

**NEW COMPONENTS**

**FEATURES**

-   **feat**: New Icons
-   **feat**(_Icon_): Badge (Indicator on top right corner)
-   **feat**(_IconLink_): Badge (Indicator on top right corner)
-   **feat**(_ComplexTable_): New Feature rowActionsLook which gives you control over the collapsing behavior of the
    action icon menu

**NON-BREAKING CHANGES**

-   **fix**(_Grid_): Margins were previously summed up. Due to compatibility reasons, there is an opt-in mechanism for
    alignment which is documented in the section "Horizontal alignment" of the Grid page.
-   **fix**(_ComplexTable_): reduced action button gap to meet the specification
-   **fix**(_ComplexTable_): Fixed offsetWidth exception
-   **fix**(_IconLinkGroup_): Fixed overflowing right margin
-   **fix**(_Section_): Fixed overflowing right margin; also fixes GallerySlider right overflow issue
-   **fix**(_InputDatepicker_): minDate, maxDate and value are now filtered and dates out of range don't highlight.
-   **fix**(_FooterNavigation_): Fixed red links issue

### 🌽 v17.6.0 (06.09.2021)

**NEW COMPONENTS**

_FormLink_

**FEATURES**

-   **feat**(_CircleDiagram_): CTA Button, headline and Refresh countdown
-   **feat**(_ClickListItem_): Option for no linkIcon when in disabled state
-   **feat**(_IconCard_): Option for no linkIcon when in disabled state
-   **feat**(_ProductStage_): Rework
-   **feat**(_PortalHeader_): Logo animation

**NON-BREAKING CHANGES**

-   **fix**(_FormLink_): Component Overworked
-   **fix**(_PortalHeader_): Resizing issue
-   **fix**(_PortalHeader_): Segment switch added
-   **fix**(_FooterWrapper_): Missing Portal.d.ts
-   **fix**(_TanPanel_): Info text (Layer) will now appear from the right window side (instead of left).
-   **fix**(_InputSelect_): Textfield input id now fits the label's labelFor attribute.
-   **fix**(_InputDatepicker_): Textfield input id now fits the label's labelFor attribute.
-   **fix**(_Grid_): Id and className of Grid, Grid.Row and Grid.Column can now be set properly.
-   **fix**(_IconCard_): IconCard is now deprecated, use Cards component instead
-   **fix**(_InputDatepicker_): `for` attribute of label now matches the input `id`

### 🌈 v17.5.0 (16.07.2021)

**NEW COMPONENTS**

_Cards_

**FEATURES**

-   **feat**: Improved white label capabilities
-   **feat**: New Date Picker Variant "Monthpicker"
-   **feat**: SuffixOption for InputTextField

**NON-BREAKING CHANGES**

-   **fix**(_Button_): normal cursor for disabled and loading buttons
-   **fix**(_Stage_): only render h1 tag once to improve SEO
-   **fix**(_Stage_): a reasonable default height to support SSR
-   **fix**(_Stage_): image centering bug
-   **fix**(_Stage_): added headlineAs, overlineAs and sublineAs props
-   **fix**(_InputDatePicker_): honor `readOnly` property
-   **fix**(_InputDatePicker_): do not render calendar icon in `readOnly` state
-   **fix**(_InputDatePicker_): adjust flyout of datepicker to small viewports
-   **fix**(_InputDatePicker_): add missing gap under input
-   **fix**(_LineChart_): expose missing enum `AxisLabelPositions`
-   **fix**(_ProcessPage_): header is now always sticky and side navigation is fixed
-   **fix**(_InputCheckbox_): Console.log error
-   **fix**(_InputRadio_): Fixed group layout errors
-   **fix**(_InputCheckbox_): Fixed group layout errors
-   **fix**(_Layer_): Fixed animation race condition
-   **fix**(_ComplexTable_): Set table width to 100% independently from viewport

### 🐑 v17.4.0 (11.06.2021)

**FEATURES**

-   **feat**(_Picture_): Yellow Elevator animation
-   **feat**(_LineChart_): Loading indicator and new step sizes for x-axis
-   **feat**: Allow SSR rendering to be identical to initial client rendering by defining a default viewport

**NON-BREAKING CHANGES**

-   **fix**(_ContactModule_): Subline and Headline now wrap on mobile viewport
-   **fix**(_LineChart_): Various issues
-   **fix**(_CircleIconLink_): Animation issue
-   **fix**(_Footer_): Display error in small viewports
-   **fix**: Link and Section separator colors
-   **fix**: React key not defined warnings

### 🎉 v17.3.0 (17.05.2021)

**FEATURES**

-   **feat**(_BarDiagram_): Added some features
-   **feat**(_ProductStage_): Added some props
-   **feat**(_Grid_): CenteredLayout prop

**NON-BREAKING CHANGES**

-   **fix**(_TabBar_): Indicator set at first render
-   **fix**(_Footer_): Repaired broken mobile layout
-   **fix**(_ArticleStage_): Subline now takes ReactElements as children
-   **fix**(_ArticleStage_): HelperText prop is now working
-   **fix**(_Headline_): centeredLayout prop now works on overline, if defined as span
-   **fix**(_Banking Cards_): noNFC prop is now working correctly

### 🚀 v17.2.0 (04.05.2021)

**FEATURES**

-   **feat**(_BankingCard_): New debit card image for card design "GIRO". Previous image is available via:
    BankingCard.Cards.GIRO_OLD.
-   **feat**(_LineChart_): ToolTip is now customizable; formatter props for Axis

**NON-BREAKING CHANGES**

-   **fix**(_InputTextSlider_): Textfield is now editable.
-   **fix**(_InputTextSlider_): Slider onChange handler (drag min/max value)
-   **fix**: Removed React/React-Dom-Dependency from package.json
-   **fix**(_Pagination_): Href issue

### ☠ v17.1.1 (23.04.2021)

**NON-BREAKING CHANGES**

-   **fix**(_Headline_): Correct overline margin
-   **fix**(_SliderPagination_): Remove option to remove arrows
-   **fix**(_Pagination_): Remove option to remove arrows
-   **fix**(_PortalHeader_): Issues with displaying the flyout correctly

### ☠ v17.1.0 (19.04.2021)

**FEATURES**

-   **feat**(_List_): List can be displayed with a leading icon
-   **fix**: onClick, onFocus and onBlur events now consistently provides the event as the first callback prop.
    Previously, this lead to confusions. This change may cause problems with the existing implementations.
-   **feat**: support for collecting styles during server side rendering.
-   **doc**: Cross-Component concerns are now documented in the markenportal under "Developer Guidelines".
-   **feat**(_Video_): Full-Screen Video now has the LSG-Styling
-   **feat**: WebP support for Stages

**NON-BREAKING CHANGES**

-   **fix**(_ProcessPage_): Fixed types of navigationTree prop.
-   **chore**: Various (internal) typings for navigationTrees

### ⛽ v17.0.0 (30.03.2021)

**BREAKING CHANGES**

-   **chore**: Removed unsafe components as they don't support Layout 5.0
-   **feat**(_IconNavigation_): Removed. Use the grid components instead.
-   **feat**(_GallerySlider_): New implementation. The GallerySlider now needs to be placed into a section. See the
    documentation for usage.
-   **feat**(_Header_): deprecated. Use `<PortalHeader />` instead. It will be available for some time under the name
    of `<UNSAFEHeader />`.
-   **feat**(_SideNavigation_): deprecated. Use `<SimpleHeader />` or `<PortalHeader />` instead.
-   **feat**(_JumpLinks_): Component now uses the navigationTree, which has the same type as the `<OnPageNavigation />`
    component. This was done to unify the prop types of all navigation components. Besides, JumpLinks are now only
    invisible in the XS viewport
-   **feat**(_Picture_): New props `source`, `imgSrc`, and `imgAttrs` for controlling the `<source>` and the `<img>`
    element inside the `<picture>` element. The old `src` prop is now deprecated.
-   **feat**(_Stage_): New implementation. Adapted image props to be in line with the `<Picture />` component
-   **feat**(_ProductStage_): Adapted image props to be in line with the `<Picture />` component
-   **feat**(_ArticleStage_): Adapted image props to be in line with the `<Picture />` component
-   **feat**(_SimpleHeader_): Internal rework with changed interface. The props have been renamed to make the component
    consistent with other header components
-   **feat**(_Accordion_): Accordion has to be in an AccordionGroup to work correctly.
-   **feat**(_Metabar_, _Footer_): The links of the Metabar component have to be passed in as a navigationTree,
    similar to other lsg.components navigations e.g. _SimpleHeader_. Also, the theme props have changed.

**NEW COMPONENTS**

_PortalHeader_

**FEATURES**

-   **feat**(_All components_): New Design 5.0 branding (colors, centered alignments etc.)
-   **feat**(_InputDatepicker_): New implementation, label is now a required prop
-   **feat**(_ComplexTable_): Changes at underlying base components (means changes under the hood), with no changes in
    interface
-   **feat**: `withReactRouterLink`, `withReactRouterNavigation` reworked so that they support prefixed `to` attribute,
    e.g. `buttonTo`

**NON-BREAKING CHANGES**

-   **fix**(_InputSelect_): Fixed missing Typescript export of IOptions interface
-   **fix**(_ProcessPage_): Fixed missing title ellpsis

**INTERNAL CHANGES**

-   **feat**(_SimpleTable_, _Footer_, _Metabar_, _Video_, _Theme_, _Pagination_,_Accordion_,_BankingCard_): New
    implementation
-   **feat**(_ComplexTable_): Changes at underlying base components (means changes under the hood), with no changes in
    interface
-   **feat**: Removed @lsg/webcomponents from the project setup

### 🦄 v16.2.0 (26.02.2021)

**FEATURES**

-   **feat**(_chore_): Removed css variables polyfill to improve IE speed

**INTERNAL CHANGES**

-   **feat**(_ClickList_): Technical rework

### 🦄 v16.1.0 (08.02.2021)

**FEATURES**

-   **feat**: New icons

**NON-BREAKING CHANGES**

-   **chore**(_node-sass_): Upgraded node-sass to v4.14.1

### 💉 v16.0.0 (29.01.2021)

**BREAKING CHANGES**

-   **feat**(_TanPanel_): onChange callback is now called with the value as first parameter instead of an event
-   **feat**(_TextSection_): deprecated. It will be available for some time under the name of `<UNSAFETextSection />`.
    Please use default components instead, e.g. native `<article>`, `<Headline>` with corresponding overline,
    `<Paragraph>` and `<Button>`.
-   **feat**(_ActionGroup_): Buttons now have a more semantic ordering (primary button, secondary button, then back
    button). When upgrading, the order of buttons in an ActionGroup needs to be adapted.

**FEATURES**

-   **feat**(_Headline_): Adapted max-width
-   **feat**(_Paragraph_): Adapted max-width

**NON-BREAKING CHANGES**

-   **fix**(_Link_): Fixed Link component error in browser console (Link in Paragraph)
-   **fix**(_InputSlider_): Solved Keyboard handler range issue; helperTexts may now contain jsx again
-   **fix**(_ProcessPage_): Fixed missing naviationLabel issue
-   **fix**(_ProcessPage_): Fixed missing footerNavigationTree issue
-   **fix**(_OnPageNavigation_): Ellipsis on mobile viewport, sticky header transparency issue
-   **fix**(_ProcessPage_): Ellipsis on mobile viewport, sticky header transparency issue
-   **fix**(_AutoComplete_): Delete Icon click issue, HTML autoComplete is "off" by default
-   **fix**(_Select_): HTML autoComplete is "off" by default
-   **fix**: Link (Button, Link, IconLink, etc.) components now show a cursor pointer if they are rendered as a html
    button element.

**INTERNAL CHANGES**

-   **feat**: moved the implementation basis to react instead of stencil.js of ~ half of the components. Events,
    internal classNames and the rendered markup is different.

### 🐒 v15.1.0 (04.12.2020)

**NEW COMPONENTS**

_LineChart_

**FEATURES**

-   **feat**(_Headline_): added Iconlink option

**INTERNAL CHANGES**

-   **feat**(_CircleIconLink_): new implementation, fixed layout bugs
-   **feat**(_ActionButton_): new implementation, migrate base from webcomponents to react

**NON-BREAKING CHANGES**

-   **fix**(_Button_): Added id prop to native component (button or a-tag)

### 🝙 v15.0.1 (26.11.2020)

-   **fix**: missing type-only import from @lsg/shared

### 🍯 v15.0.0 (05.11.2020)

**BREAKING CHANGES**

-   **chore**(_Button_): deprecated _to_ prop for React routing deprecated. React routing is now available by the _
    withReactRouterLink_ function
-   **chore**(_IconLink_): deprecated _to_ prop for React routing deprecated. React routing is now available by the _
    withReactRouterLink_ function
-   **feat**(_InputSelect_): reworked implementation: onKeyDown method is not supported anymore, as it produces side
    effects
-   **feat**(_OnPageNavigation_): reworked implementation: targetId now does not require/allow a leading '#' hash symbol
-   **feat**(_ProcessPage_): reworked implementation: navigation is now passed as an object instead of
    `<ProcessNavigation />` tags. The old ProcessPage component will be available under the name of
    `<UNSAFEProcessPage />`.
-   **chore**(_ProcessNavigation_): deprecated. It will be available for some time under the name of
    `<UNSAFEProcessNavigation />`.
-   **chore**(_ProcessNavigationLink_): deprecated. It will be available for some time under the name of
    `<UNSAFEProcessNavigationLink />`.

**FEATURES**

-   **feat**(_ArticleList_): added prop for alternative html tags (itemHeadlineAs)
-   **feat**(_Autocomplete_): reworked implementation, improved example and documentation
-   **feat**(_BannerMessage_): reworked implementation
-   **feat**(_ClickListItem_): added props for alternative html tags (headlineAs, sublineAs)
-   **feat**(_IconCard_): reworked implementation
-   **feat**(_InputTextfield_): reworked implementation
-   **feat**(_InputSelect_): reworked implementation
-   **feat**(_OnPageNavigation_): reworked implementation
-   **feat**(_ProductStage_): reworked implementation
-   **feat**(_React Routing_): Support for React routing (clickable components: Button, IconLink, Teaser...) with _
    withReactRouterLink_
-   **feat**(_Snackbar_): reworked implementation
-   **feat**(_Stepper_): added props for alternative html tags (titleAs, headlineAs)

**NEW COMPONENTS**

_SelectionCard_, _OnPageNavigation_, _ProductStage_

**NON-BREAKING CHANGES**

-   **fix**(_Autocomplete_): fixed IE issue (racing condition) by rework
-   **fix**(_InputTextfield_): Fix password variant (password icon)
-   **fix**(_Link_): color underline
-   **fix**(_Layer_): dark theme header color

### 👰 v14.0.1 (15.09.2020)

**NON-BREAKING CHANGES**

-   **fix**(_CcsApprovalPanel_): show photo-tan image
-   **fix**(_InputTextfield_): show photo-tan image
-   **fix**(_ComplexTable_): fixed some styling issues

### 🚨 v14.0.0 (10.09.2020)

**BREAKING CHANGES**

-   **feat**(_Grid_): New simplified implementation. It is based on the columnVariate Grid (12 columns on `md` and
    above, 8 columns on `sm`, 4 columns on `xs`). The old grid is available at `<UNSAFEGrid />`. The props `marginTop`,
    `marginBottom`, `columnVariate` and `gap` have been removed. The margin to the top and to the bottom are now set to
    the same value as the vertical spacing. The `size` prop now determines the number of columns for all viewports.
    They can be overridden by viewport-specific definitions `xs`, `sm`, `md` (`lg` and `xl`are now covered by the `md`
    prop). Stacked Grids are supported. Here, the available number of columns of the inner Grid are reduced to the
    number of columns of `<Grid.Column />` element of the outer grid (see Stacked Grid example). Also the `textAlign`
    prop has been renamed to `horizontalAlign`.

**NON-BREAKING CHANGES**

-   **fix**(_withReactRouterLink_): Allow `to` prop to be not defined.
-   **fix**(_Snackbar_): Allow snackbar to be open by default

-   **chore**: ActionGroup, ArticleList, ArticleStage, Button, DescriptionList, Grid, Headline, Icon, IconLink, Layer,
    Link, List, Paragraph, Picture, Section, Spinner, Stepper, Teaser, Theme, Thumbnail, TipsTricks

**FEATURES**

-   **feat**(_Pagination_): Support of hrefs/links in pagination (SEO)
-   **feat**: New Icons

**NEW COMPONENTS**

_Video_, _OnPageNavigation_, _ProductStage_

-   **feat**(_Headline_): spacings updated (headline group)

### ♻ v13.0.1 (26.06.2020)

**NON-BREAKING CHANGES**

-   **fix**(_Tipstricks_): single column option added
-   **fix**(_Headline_): maximum line width
-   **fix**(_ArticleStage_): Empty Iconlink Group height fixed
-   **fix**(_Teaser_): ImageRatio (21-9) fixed

### ⛔ v13.0.0 (22.06.2020)

**BREAKING CHANGES**

-   **chore**: Instead of passing a name, icons now need to be imported from the package `@lsg/icons`, e.g.
    `import {banking___atm} from "@lsg/icons";`. This was necessary to reduce the bundle size. The props have changed
    from ~~`name`~~ or ~~`iconName`~~ to `icon`, e.g. `<Icon icon={banking___atm} />`. The following components are
    affected: _Icon_, _CircleIconLink_, _ClickList_, _IconLink_, _InputTextfield_, _Stepper_, _ActionButton_,
    _IconCard_, _Thumbnail_ and _TwoLineItem_.
-   **chore**: To be able to reduce the css overhead in the generated bundle with tree shaking, css is now delivered as
    part of the js library with style-inject. This means, that the style imports
    `import "@lsg/components/dist/styles/bundle.css";` and
    `import "@lsg/webcomponents/dist/lsg-webcomponents/lsg-webcomponents.css";` need to be removed.
-   **feat**: Support for React Router v5 (see `<AnimatedSwitch />`). Support for @reach/router in LSG is discontinued.
-   **chore**: `<Thumb />` has been renamed to `<Thumbnail />`.
-   **chore**: `<StatusIcon />` component is now unsafe. Use `<StatusIndicator />` instead. The component is accessible
    at `<UNSAFEStatusIcon />` and will be removed with the next major release.

**NEW COMPONENTS**

_ArticleList_, _ArticleListItem_, _TextHighlight_, _TipsTricks_, _Teaser_

**NON-BREAKING CHANGES**

-   **fix(_ProcessNavigation_)**: click interaction was not working
-   **fix(_Slider_)**: positioning issue
-   **fix**: mandatory subcomponent types to support typescript strict mode
-   **fix**(_IconLinkGroup_): Cut-Off text problem fixed (when look="no-icon" is set)
-   **fix**(_selectflyout_): Dark theme text color corrected
-   **fix**(_texthighlight_): Dark theme text color corrected
-   **fix**(_paragraph_): Dark theme helpertext color corrected

### ⚐ v12.3.1 (15.05.2020)

**NON-BREAKING CHANGES**

-   **fix**(_BannerMessage_, _Snackbar_, _ArticleStage_): fixed a bug where nested iconlinks were misplaced

### 📧 v12.3.0 (14.05.2020)

**NEW COMPONENTS**

_ArticleStage_

**NON-BREAKING CHANGES**

-   **fix**(_Headline_): headline was disappearing on state update
-   **chore**: Updated e-mail addresses in package.json.

### 🐍 v12.2.0 (08.05.2020)

**NEW COMPONENTS**

_Thumbnail_, _TwoLineItem_

**FEATURES**

-   **feat**(_Picture_): `caption` prop added

### 🍢 v12.1.0 (06.05.2020)

**NEW COMPONENTS**

_thumb_

**FEATURES**

-   **feat**(_StatusIndicator_): Wrapped component, improved documentation

**NON-BREAKING CHANGES**

-   **fix**(_ClickList_): linkLook deleted / new prop showLinkLabel is used instead
-   **fix**(_Autocomplete_): Logic to distinguish entered text from selected suggestions

### △ v12.0.1 (01.04.2020)

**NON-BREAKING CHANGES**

-   **fix**: Stepper, TanPanel, CcsApprovalPanel: Issues related to the grid of @lsg/webcomponents
-   **fix**(_ClickList_): Typing issue

### 😷 v12.0.0 (30.03.2020)

**BREAKING CHANGES**

-   **feat(ClickList)**: New implementation, title and helperText props are renamed to headline and subline. The old
    implementation is available via `<UNSAFEClickList />` and will be removed at the next major release.
-   **feat**: Deleted deprecated components Spacer and Separator

**NEW COMPONENTS**

_Autocomplete_, _IconCard_

**FEATURES**

**feat**(_Stepper_): Wrap Stepper WebComponent with React
**feat**(_Slider_): Wrap Stepper WebComponent with React
**feat**: Added subcategories for components in our Markenportal presentation

**NON-BREAKING CHANGES**

-   **fix**(_InputSlider_): Track and Thumb positioning
-   **fix**(_InputSelect_): margin bottom, id
-   **fix**: make disabled fields in IE11 not trigger an onClick (all kinds of buttons)
-   **fix**(_Link_): Styling of Link inside Paragraph size Helper

### ❄ v11.1.0 (05.03.2020)

**FEATURES**

-   **feat** Added Jest and Puppeteer tests

**NON-BREAKING CHANGES**

-   **fix**(_Button_): double check to prevent click when disabled
-   **fix**(_ClickList_): margins
-   **fix**(_ActionGroup_): margins
-   **fix**(_TextSection_): Needed to use old Headline
-   **fix**(_Testing_): Fixed visual tests
-   **fix**(_Testing_): Fixed visual tests
-   **fix**(_CcsApprovalPanel_): Various issues

### 🍪 v11.0.2 (04.03.2020)

-   **chore**: revert to old core-js polyfill to not get in conflict with other applications like the consent banner

### 🍪 v11.0.1 (24.02.2020)

-   **fix**(_SimpleHeader_): typing issue
-   **fix**(_Footer_): social links issue
-   **chore**: remove duplicate core-js polyfills

### 🎆 v11.0.0 (11.02.2020)

**NEW COMPONENTS**

_SimpleHeader_, _CcsApprovalPanel_

**BREAKING CHANGES**

-   **feat**: Reworked the components the `<ActionButton />`, `<Button />`, `<DescriptionList />`, `<Icon />`,
    `<Paragraph />`, `<IconLink />` and `<IconLinkGroup />`. They now consist of a compatibility layer in react to the
    web components basis. If there are any issues, the Components can be prefixed with `UNSAFE`, e.g.
    `<UNSAFEButton />`. They will be removed in the next major release.
-   **feat**: The `<IconLink />` component now needs to be surrounded by an `<IconLinkGroup />` component. Otherwise,
    there will be no hover effect. The change was done, because the hover-behavior of a stand-alone `<IconLink />` was
    not well-defined for various usage scenarios. Use the `UNSAFE` variants in case of problems.
-   **feat**: Deprecated the `<InputSearch>` component, which was intended for internal use only. It is still usable by
    prefixing with "UNSAFE" like: `<UNSAFEInputSearch>`. It will be removed in the next major release.
-   **feat**: Temporarily remove the prop `refCallback` the `<Button />` and `<IconLink />` components. If this prop is
    still needed, please use `<UNSAFEButton />` and `<UNSAFEIconLink />` for the moment instead.
-   **feat**: Removed the option `Sizes.SM_MEDIUM` of the `<Icon />` component.
-   **feat**: Removed the option `Colors.DISABLED` of the `<IconLink />` component. Set the prop `disabled` instead.
-   **feat**: Removed the option `Looks.CIRCLE` of the `<IconLink />` component. Use the `<ActionButton />` component
    instead.
-   **refactor**: Removed polyfills import from @lsg/components package. Polyfills now have their own package called
    @lsg/polyfills.
-   **refactor**: Removed applyPolyfills function. New way to include Polyfills is just `import "@lsg/polyfills"`

**FEATURES**

-   **feat**(_InputSelect_): `withTextInput` prop added
-   **feat**: `title` attribute for selection controls `<InputCheckbox />`, `<InputRadio />` and `<Switch />`.
-   **feat**: IDs added for all components
-   **doc**(_ActionGroup_): Improved example

**NON-BREAKING CHANGES**

-   **fix**(_Header_): Issues with the iconlink
-   **fix**(_InputSelect_): IE11 focus issue
-   **fix**: SSR issues in `<Picture>`, `<CircleDiagram>`, `<InputSelect>`, `<ProcessHeader>` and Webcomponents wrapper
-   **fix**(_AccordionGroup_): remove typecheck, that is preventing props to be set correctly to the Accordion children
-   **fix**(_JumpLinks_): added nullcheck, replaced scrollIntoView polyfill
-   **doc**(_Icon_): Example with 4 columns instead of 6
-   **fix**(_Grid_): Columns size "0" bug fixed (cols where displayed whe text-alignment was set)

### 🌿 v10.5.3 (23.01.2020)

**INTERNAL CHANGES**

-   **chore**: New webcomponents dependency

### 🌱 v10.5.2 (23.01.2020)

-   **fix**(_TanPanel_): remove optional text

### 🔍 v10.5.1 (22.01.2020)

**NON-BREAKING CHANGES**

-   **fix**: legacy header ie11 issue with search icon

### 🎁 v10.5.0 (18.12.2019)

**FEATURES**

-   **feat**: Added sticky functionality to header

### 🎄 v10.4.0 (12.12.2019)

**FEATURES**

-   **feat**: Added new icons from neugelb

**NON-BREAKING CHANGES**

-   **fix**(LegacyHeader): postbox call and styling issues

### 🎅 v10.3.0 (06.12.2019)

**FEATURES**

-   **feat**(InputSelect, InputTextfield): Added more examples
-   **feat**(InputSelect): Added disabled variant

**NON-BREAKING CHANGES**

-   **fix**(InputTextfield): readOnly/disabled styling (underline, highlighting, floating label, etc.)
-   **fix**(InputSelect): return correct name on blur, readOnly/disabled: deactivated dropdown, misc styling
-   **fix**(_JumpLinks_): Stickiness was not working after unmount and re-mount

### 🍖 v10.2.0 (02.12.2019)

**NEW COMPONENTS**

-   _InputTextSlider_, _PREVIEW_CcsTanPanel_

**FEATURES**

-   **feat**(_Media_): Media will now render its content (image or video) even when there is no deviceFrame specified.

**NON-BREAKING CHANGES**

-   **fix**(_ActionGroup_): Fixed error when dynamically adding and removing Buttons or IconLinks
-   **fix**: Amended various casing issues because of Linux build on OpenShift
-   **chore**: Added "magic-string"; set node-sass version to 4.13.0
-   **fix**(_TanPanel_): Styling issues due to missing webcomponents global styling

### 🍭 v10.1.7 (21.11.2019)

**NON-BREAKING CHANGES**

-   **fix**: Utils: postinstall.js: Fix (try/catch; casing)
-   **fix**: Build: node-sass binary link in .npmrc
-   **fix**: Typescript fix for ProcessNavigationLink

### 🍭 v10.1.6 (21.11.2019)

**NON-BREAKING CHANGES**

-   **fix**: components that use images will now require the image path in compiled package sources

### 🏰 v10.1.5 (19.11.2019)

**NON-BREAKING CHANGES**

-   **fix**(_HeaderLegacy_): new Badge

### 👑 v10.1.4 (15.11.2019)

**NON-BREAKING CHANGES**

-   **fix**: Banking Card issue

### ☁ v10.1.3 (11.11.2019)

**NON-BREAKING CHANGES**

-   **fix**: Path to postinstall script

### 🚬 v10.1.2 (05.11.2019)

**NON-BREAKING CHANGES**

-   **fix**(_package_): Removed esm dependency for postinstall script.

### 🍖 v10.1.1 (04.11.2019)

**NON-BREAKING CHANGES**

-   **fix**(_package_): Added files with sideEffects to according field in package.json.

### 🐨 v10.1.0 (30.10.2019)

**NEW COMPONENTS**

-   _LoremIpsum_ (can be used for mockups/prototyping - is used internally a lot)
-   **fix**(_HeaderLegacy_): fixed bug where search field was blocking the meta navigation links

**FEATURES**

-   **feat**: Added dist/docs to package - conforming with @lsg/components.
-   **feat**(_InputDatepicker_): Customizable Optional label text (as in the textfield component)
-   **feat**(_Icons_): Added new Icons (Fullscreen and Keyboard)

**NON-BREAKING CHANGES**

-   **chore**: Inlined fonts as base64 to dist/styles/bundle.css.
-   **docs**(_ComplexTable_): Fixed stateful example.
-   **fix**(_package_): Fixed incorrect linking of some assets. For example Media component was broken in 10.0.0.

### 🚲 v10.0.0 (01.10.2019)

**BREAKING CHANGES**

-   **feat**(_Switch.Stateful_): initialValue now is named defaultValue
-   **feat**: Deprecated the `<Spacer>` component. It is still usable by prefixing with "UNSAFE\_" like:
    `<UNSAFE_Spacer>`. It will be removed in the next major release.
-   **feat**: Deprecated the non-interactive styling of the `<CircleIconLink>` component. It is still usable by
    explicitly setting the "UNSAFE_nonInteractive" prop. It will be removed in the next major release.
-   **chore**: Changed defineCustomElements import path: **Old:**
    `import { defineCustomElements } from "@lsg/components/dist/init";` **New:**
    `import { defineCustomElements } from "@lsg/components";`
-   **chore**: Changed css bundle import path: **Old:** `import "@lsg/components/index.css";` - **New:**
    `import "@lsg/components/styles/bundle.css";`
-   **chore**: Changed sass files path: **Old:** `"@lsg/components/lib";` - **New:** `"@lsg/components/styles";`
-   **chore**(_POTENTIALLY - This change should not be breaking for you if you set your imports correctly - only
    `import ... from @lsg/components`. DO NOT import any files inside the esm, esm-es5 and cjs folders directly or
    you'll bypass package.json resolution._): Streamlined package /dist folder. This is now equal to @lsg/utils and
    @lsg/webcomponents. There are cjs, esm-es5 and esm modules being distributed. No bundles, nothing uglified. Users
    build processes shall take care of bundling/uglifying/minifying.

**NON-BREAKING CHANGES**

-   **fix**(_ProcessPage_): slot issue with stencil dependency
-   **fix**(_InputTextfield_): Fixed issue with type "Type.date" (first letter could not be removed)
-   **fix**(_InputTextfield.Stateful_): Now accepts date as default value
-   **fix**(_ProcessNavigation_): make onClick accessible to react wrapper
-   **fix**(_ActionGroup_): Prop "left" is no longer mandatory
-   **feat**(_SamplePages_): Added new sample pages according to examples in markeportal. removed old sample pages from
    overview

### 🐍 v9.5.1 (10.09.2019)

**NON-BREAKING CHANGES**

-   **fix**(_Pagination_): Fixed Pagination catching the page focus upon rerender.
-   **fix**(_Spacer_): Fixed circular dependency. Please DON'T use this component. Will be deprecated soon.

### 🍬 v9.5.0 (06.09.2019)

**FEATURES**

-   **feat**(_Pagination_): Added keyboard navigation/handling.
-   **feat**(_Media_): Autoplay prop for videos
-   **feat**(_Spinner_): New component: Spinner (loading indicator)
-   **feat**(_Button_, _IconLink_): Loading state (Control is disabled/hidden and Spinner is shown)
-   **feat**(_ProcessPage_): Component ProcessPage added

**NON-BREAKING CHANGES**

-   **fix**(_Changelog_): Fixed an issue in Changelog that broke stlyeguideintegration.
-   **fix**(_ComplexTable_): Alignment & hover behaviour corrected. Action Icon changed.
-   **fix**(_Stage_): button not mandatory anymore
-   **fix**(_Picture_): mobile-first for image as background
-   **fix**(_ClickList_): Correct arrow alignment, font type, and hover effect.
-   **fix**(_IconLink_): Movement on hover on all viewports, no hover movement on touch devices
-   **fix**(_LegacyHeader_): Menu styling and usability issues
-   **fix**(_CircleDiagram_): Broken animation fixed

### ☮ v9.4.1 (26.08.2019)

**NON-BREAKING CHANGES**

-   **fix**(_Drawer_): Fixes refactoring issue of the utils project

### 🌻 v9.4.0 (23.08.2019)

**FEATURES**

-   **feat**(_InputSlider_): onFocus and onBlur props
-   **feat**(_InputSelect_): Shorten long label via ellipsis

**NON-BREAKING CHANGES**

-   **fix**(_InputDatepicker_): DatePicker can not me written into
-   **fix**(_InputSelect_): Fixed IE 11 issue (close on hover)
-   **fix**(_InputSelect_): Delete Button not visible
-   **fix**(_InputSelect_): Shorten long label via ellipsis
-   **fix**(_LegacyHeader_): MSB Search field wrong width
-   **chore**: Internal change - exported utils folder to @lsg/utils package - shouldn't make a difference to anyone
    consuming @lsg/components from nexus. Everyone else download lsg-utils package from markenportal.

**INTERNAL CHANGES**

-   **chore**: Moved utils to external project

### 🐘 v9.3.2 (01.08.2019)

**NON-BREAKING CHANGES**

-   **fix(HeaderLegacy)**: Fixed header causing page crashes on pages without menu items (MSB international)
-   **chore**: Increased @lsg/webcomponents version

### 😿 v9.3.1 (31.07.2019)

**NON-BREAKING CHANGES**

-   **chore**: Increased @lsg/webcomponents version

### 🐭 v9.3.0 (24.07.2019)

**NEW COMPONENTS**

-   _Pagination_

**FEATURES**

-   **feat**: Support for overriding translations inside the application
-   **feat**(_ComplexTable.Stateful_): Multi Page support
-   **feat**(_ComplexTable_): internal state for mobile sort layer, open and close logic is now included

**NON-BREAKING CHANGES**

-   **fix**(_BankingCard_): Card Type Einzahlcard added, naming changed
-   **fix**(_BankingCard_): Card Type Einzahlcard added, naming changed
-   **fix**(_ComplexTable_): mobile sort columns are only listed if they are sortable
-   **fix**(_List_): Export in main index added
-   **fix**(_DescriptionList_): Fixed classname of dt
-   **fix**(_InputTextfield_): Fixed disabled color in Safari
-   **fix**(_InputSelect_): Fixed empty target on onBlur Event
-   **doc**(_TanPanel_): Example for error text without a TAN textfield
-   **doc**: Added Contributor Guidelines
-   **fix**(_InputDatepicker_): Z-Index of widget set to "2"

### 🙆 v9.2.0 (10.07.2019)

**NON-BREAKING CHANGES**

-   **feat**(_InputSelect_): Optional Text can be set
-   **fix**(_LegacyHeader_): various issues

### 🙏 v9.1.0 (28.06.2019)

**NEW COMPONENTS**

-   _H5_, _H5Thin_

**NON-BREAKING CHANGES**

-   **fix**(_Drawer_): Fixed IE crash when opening Drawer (Layer/SideNavigation mobile).

### 🙏 v9.0.0 (28.06.2019)

**BREAKING CHANGES**

-   **fix**: Fixed IE11 not working.
-   **chore**: Removed applyPolyfills function.
-   **chore**: New flow to initialize is:

```html
import "@lsg/components/dist/polyfills"; // MAKE SURE THIS IS AT THE VERY TOP! (If you need IE11 support) import
{defineCustomElements} from "@lsg/components/dist/init"; [...other imports...] defineCustomElements().then(() => {
_Start your Application in here_ });
```

### 🍥 v8.0.1 (25.06.2019)

**NON-BREAKING CHANGES**

-   **fix**(_HeaderWrapper_): Lock icon logic, remove CI mocks, remove "weltweit" link

### 🍨 v8.0.0 (24.06.2019)

**BREAKING CHANGES**

-   **chore**: Consumers of non-bundled package files now have to call applyPolyfills and defineCustomElements
    themselves. Those functions are exported by @lsg/components/init. Some components (those based on
    @lsg/webcomponents) will not work otherwise.

**FEATURES**

-   **feat**: @lsg/components/init also exports resolveStencilLazyLoadedComponents rollup plugin - this can be used to
    create optimized rollup bundles.
-   **feat**(_IconLink_): now supports Variant.SOLID icons
-   **feat**(_TanPanel_): - Tan panel description text (in drawer) as (default) slot (Implemented in Webcomponents).

### 🚶 v7.2.0 (13.06.2019)

**NEW COMPONENTS**

-   _ContentInclude_

**FEATURES**

-   **feat**(_Section_): technical section

**NON-BREAKING CHANGES**

-   **fix**(_ActionGroup_): Styling issues + updated example
-   **fix**(_HeaderWrapper_): misc changes
-   **chore**: Update to @lsg/webcomponents@3.0.0

### 🐸 v7.1.0 (28.05.2019)

**FEATURES**

-   **feat**(_TanPanel_): Now supports onChange callback.
-   **feat**(_TanPanel_): Now supports passing textfield value via "tanTextfieldValue"-prop.

### 🐗 v7.0.1 (24.05.2019)

**NON-BREAKING CHANGES**

-   **fix**(_TanPanel_): add polyfills, change props, add images in styleguide
-   **fix**(_HeaderWrapper_): do not display if no data
-   **fix**(_FooterWrapper_): do not display if no data

### 🚩 v7.0.0 (21.05.2019)

**NEW COMPONENTS**

-   _ActionGroup_, _TanPanel_

**FEATURES**

-   **feat**(_HeaderWrapper_): Implementation for Portal
-   **feat**(_InputToggle_): Added optional helper text
-   **feat**(_InputRadio_): Added optional helper text
-   **feat**(_Switch_): Added optional helper text
-   **feat**(_Web Component integration_): Added prerequisites and example for integrating Web Components into
    lsg.components (React)
-   **feat**(_Example Page_): Added Sample Page Psd2/3_Success.tsx
-   **feat**(_InputTextfield_): Optional text field label can contain texts other than `(optional)`

**BREAKING CHANGES**

-   **feat**(_Separator_): Deprecating `Separator` Component due to spacing issues. Use `Section.separatorBottom`
    instead.
-   **feat**(_Section_): Subsection, `marginTop` and `marginBottom` props are now obsolete, `theme` prop removed. Use
    `Theme` component instead.
-   **feat**(_Icon_): Changed naming of icons. Some have now three underlines. Check Icons from the icons table.
-   **feat**(_IconLink_): Changed naming of icons. Some have now three underlines. Check Icons from the icons table.

**NON-BREAKING CHANGES**

-   **fix**(_DateUtils_): Fixed date locale not being loaded correctly for browser language "en".
-   **fix**(_DateUtils_): Fixed allowing to type separators in year block.
-   **fix**(_AnimatedRouter_): Export Component was missing.
-   **fix**(_InputSelect_): Fixed onBlur firing when entering the select field.

### 🐫 v6.0.2 (09.04.2019)

**NON-BREAKING CHANGES**

-   **fix**(_Media_): Minor typing fix.

### 🐣 v6.0.1 (08.04.2019)

**NON-BREAKING CHANGES**

-   **fix**: Fixed broken styleguide examples.

### 🍪 v6.0.0 (08.04.2019)

**FEATURES**

-   **feat**(_BankingCard_): Added card designs: InfoCard, SparCard, FlexiCard.
-   **feat**(_BankingCard_): Added flag prop to specify if visa, maestro, mastercard or cirrus (or none).
-   **feat** (_InputTextfield_): You can now pass the type as prop (password, date, etc.)

**BREAKING CHANGES**

-   **feat**(_InputDatepicker_): onChange now passes the name instead of the id
-   **feat**: Removed alias components as they were adding a lot of complexity to our codebase and had minimal purpose.
-   **feat**(_Headline_): Removed alias components you can now use those components without `Headline.`:
-   **feat**(_Media_): Removed alias components you are now supposed to use
    `<Media deviceType={Media.Devices.[*DEVICE*]}>`:
-   **feat**(_Headline.H1_): Removed component.
-   **feat**(_Headline.H1Thin_): Removed component.
-   **feat**(_Headline.H2_): Removed component.
-   **feat**(_Headline.H2Thin_): Removed component.
-   **feat**(_Headline.H3_): Removed component.
-   **feat**(_Headline.H3Thin_): Removed component.
-   **feat**(_Headline.H4_): Removed component.
-   **feat**(_Headline.H4Thin_): Removed component.
-   **feat**(_Media.AppleWatch_): Removed component.
-   **feat**(_Media.AndroidWatch_): Removed component.
-   **feat**(_Media.ApplePhone_): Removed component.
-   **feat**(_Media.AndroidPhone_): Removed component.
-   **feat**(_Media.AppleTablet_): Removed component.
-   **feat**(_Media.AppleTabletLandscape_): Removed component.
-   **feat**(_Media.AppleLaptop_): Removed component.
-   **feat**(_Media.AppleDesktop_): Removed component.

**NON-BREAKING CHANGES**

-   **fix**(_BankingCard_): Removed bankingCard resizing on height restriction - will now be as high as it needs to and
    only resize on width restriction.
-   **fix**(_FooterNavigation_): Accordion could not be opened
-   **fix**(_InputDatepicker_): onBlur and onFocus
-   **fix**(_CircleIconLink_): Dark Theme Icon Color
-   **fix**(_InputRadio_): _invalid_ styling in bundle

### 🙈 v5.2.0 (28.03.2019)

**NEW COMPONENTS**

-   _StatusIcon_, _DraftBadge_, _DescriptionList_

**NON-BREAKING CHANGES**

-   **fix**(_BankingCard_): Icon Color in dark theme.

### 🚲 v5.1.1 (12.03.2019)

**NON-BREAKING CHANGES**

-   **fix**(_BankingCard_): Fixed missing svgs.

### 🚢 v5.1.0 (12.03.2019)

**NEW COMPONENTS**

-   _BankingCard_, _CircleIconLink_

**FEATURES**

-   **feat** (_Link_): has now the attribute to which maps the component to reach router Link
-   **feat** (_Picture_): Picture component with asBackgroundImage={true} now supports children.

**NON-BREAKING CHANGES**

-   **doc**: Sample Pages rework
-   **feat** (_Picture_): Picture component doesn't output multiple divs with background images to the DOM anymore when
    used with asBackgroundImage={true}.

**INTERNAL CHANGES**

-   **feat** (_Picture_): Picture now supports style prop - should not be used by consumers.

### 🐎 v5.0.3 (07.03.2019)

**NON-BREAKING CHANGES**

-   **fix** (_Drawer_): Included CustomEvents polyfill for IE11.
-   **fix**: Moved necessary typings from DevDependencies to Dependencies again.

### 🍰 v5.0.2 (05.03.2019)

**NON-BREAKING CHANGES**

-   **styling** (_ComplexTable_): ComplexTable Headings now show a hand cursor when they're clickable (sortable).
-   **styling** (_InputSlider_): Fixed InputSlider not applying colors correctly when being used outside of any theme.
-   **fix** (_InputSlider_): Fixed InputSlider min max setting when new min is bigger than old max or new max is smaller
    old min.
-   **styling** (_TextSection_): Fixed batch to be visible in dark theme but not in light/default theme.
-   **doc** (_Accordion_): Removed Feedback component from Accordion demos.
-   **fix** (_InputDatepicker_): Fixed minDate and maxDate not working if only one of them was specified.
-   **fix** (_InputDatepicker_): Fixed minDate and maxDate not working correctly because of times being taken into
    account.

### 💞 v5.0.1 (28.02.2019)

**NON-BREAKING CHANGES**

-   **styling** (_Footnote.Anchor_): Fixing styling issues
-   **styling** (_ProcessHeader_): Fixing z-index
-   **fix** (_SamplePages_): Making Samplepages accessible again
-   **fix** (_ComplexTable.Stateful_): making Stateful Component accessible
-   **doc** (_ComplexTable_): Simplyfying api and adding simple examples
-   **fix** (_Clicklist_): Sub in Dark Theme (Contrast A11Y) LSG-906
-   **fix** (_Textsection_): Signal only on Dark Theme (A11Y) LSG-916
-   **fix** (_InputSlider_): Fixing double fired event for change value.
-   **styling**: Helper Paragraph Dark Theme (Contrast A11Y) LSG-898
-   **styling**: disable wrap for complex table action icons LSG-907
-   **chore**: moving sass dependencies to dev dependencies so that customers do not require sass

### 👺 v5.0.0 (27.02.2019)

**NEW COMPONENTS**

-   _List_, _ComplexTable_, _ProcessHeader_

**BREAKING CHANGES**

-   **feat** (_IconLink_): iconOnly={true} is deprecated and now hovers

**FEATURES**

-   **feat**: Sirius Weisung sample pages
-   **feat**: Layer for 100% width, changed header layout to be consistent with the process header
-   **feat**: Animated Router based on the Reach Router
-   **feat** (_IconLink_): deprecating iconOnly
-   **feat** (_Icon_): added colors and decorated variants
-   **feat** (_IconLink_): added colors
-   **feat** (_InputTextfield_): adding type password
-   **feat** (_Link_): allowing general Anchor attributes

**NON-BREAKING CHANGES**

-   **refactor** (_Paragraph_): Changed to class based styling
-   **fix** (_InputTextfield_): No X-icon for readOnly and disabled
-   **chore**: Adding test results and components documentation to release package
-   **chore** (_Media_): shrinking media images for better usability in production

### 😵 v4.0.2 (14.02.2019)

**NON-BREAKING CHANGES**

-   **hotfix** (_Inputslider_): Inputslider ships new values of min, max, step, disabled to underlying mdc-slider more
    correct.
-   **fix** (_Inputslider_): Inputslider throws no more error because of missing pin container
-   **fix** (_Inputslider_): Inputslider is not correct initialized in an layer

### 😵 v4.0.1 (13.02.2019)

**NON-BREAKING CHANGES**

-   **hotfix**: legacy images are shipped in the correct folder

### 🙉 v4.0.0 (12.02.2019)

**BREAKING CHANGES**

-   **feat** (_Header_): Interface: Login, Search, etc. are now passed as IconLinks, more options for menu items
-   **feat** (_Headline_): Changed prop name from `looksLike` to `asSpan`, `looksLike` is now deprecated.
-   **feat** (_Accordion_): Accordion is now stateless - use props open and onChange to get/set state.
-   **feat** (_Accordion.Stateful_): New component, adds a statehandling wrapper to Accordion - use prop initialOpen to
    set initial state.
-   **feat** (_AccordionGroup_): AccordionGroup is now stateless - use props openIndex/openIndices and onChange to
    get/set state.
-   **feat** (_AccordionGroup.Stateful_): New components, adds a statehandling wrapper to AccordionGroup - use
    initialOpenIndex/initialOpenIndices to set initial state.
-   **refactor** (_Accordion_): Accordion renamed keyDown to onKeyDown.

**FEATURES**

-   **feat** (_InputDatepicker_): InputDatepicker is now usable via keyboard.
-   **feat** (_InputDatepicker_): InputDatepicker now formats the input string according to browser locale - it is much
    easier to enter valid date formats now.
-   **feat** (_HeaderWrapper_): Wrapper component for usage inside the commerzbank CCS portal
-   **feat** (_ClickList_): New Component

**NON-BREAKING CHANGES**

-   **fix** (_Media_): Fixing frame image handling
-   **fix** (_InputSelect_): Setting z-index to 3 of InputSelect Widget to overlay InputSlider dragpoint which has
    z-index 2

**INTERNAL CHANGES**

-   **feat**: removed functionality of cleanupProps
-   **feat**: removed '/src/utils/keyMap'. Use package w3c-keys instead
-   **feat**: removed type Intersect from '/src/utils/TsUtils'
-   **feat**: A11y tooling and test setup
-   **feat** (_DateUtils_): Built DateUtils helper class to help using some date-fns locale stuff.
-   **feat**: Created a11yKeyHandler util function. For simplified keyhandling (especially ArrowKeys, Home, End,
    PageUp/Down).
-   **feat** (_DateWidget_): DateWidget now uses A11yKeyHandler for key handling.
-   **fix** (_Button_): Fixed type, htmlAttrs now accepts attributes for both button and anchor tag
-   **refactor** (_SamplePages_): Updated SamplePages to use new Accordion components.
-   **refactor** (_AccordionGroup_): AccordionGroup now uses A11yKeyHandler component for key handling.
-   **refactor** (_Accordion_): Simplified some things.
-   **refactor** (_DateWidget_): DateWidget now uses date-fns helper functions for a lot of date related functionality.
-   **refactor** (_InputDatepicker_): DateWidget now uses date-fns helper functions for a lot of date related
    functionality.
-   **test** (_Accordion_): Adjusted tests to new element tree.
-   **chore**: Upper case naming of files inside the '/src/utils' directory
-   **chore**: Installed date-fns.
-   **doc**: Documentation of the '/src/utils' directory
-   **fix** (_InputSlider_): Minvalue can't be higher than 100

### 👾 v3.0.0 - (11.12.2018)

**BREAKING CHANGES**

-   **chore**: Consumable CSS is now placed in root path of project: `import "@lsg/components/index.css";`
-   **chore**: The CommonJS bundle gets now generated with Rollup which is now consumable for the boilerplate

**INTERNAL CHANGES**

-   **doc**: Removed dark theme examples
-   **doc**: Moved theme switcher of examples out of component examples
-   **doc**: Using component only examples if possible (no unnecessary Grid usage in examples)

**NON-BREAKING CHANGES**

-   **fix** (_GallerySlider_): Touch Scroll disabled when vertically scrolling.

### 📱 v2.0.5 - (22.11.2018)

**NON-BREAKING CHANGES**

-   **styling** (_Drawer_): Drawer dark theme background corrected.
-   **fix** (_PageContainer_): Fixed PageContainer not sizing content correctly in IE.
-   **fix** (_PageContainer_): Fixed PageContainer not showing mobile SideNavigation in Safari.

**INTERNAL CHANGES**

-   **feat** (_npmignore_): Ignores some more folders that are being used in styleguideintegration project.
-   **fix** (_SideNavigation_): Fixed SideNavigation registering as StickyElement incorrecly.

### 🐑 v2.0.4 - (21.11.2018)

**NON-BREAKING CHANGES**

-   **feat** (_SideNavigation_): Placeholder of the search input field can now be configured via
    "searchPlaceholder"-prop.
-   **fix** (_Drawer_): Drawer now properly adds ScrollLock if not in MEGAMENU layout and removes it again otherwise.

**INTERNAL CHANGES**

-   **refactor** (_Drawer_): Renamed functions openDrawer & closeDrawer to make naming more explicit.
-   **refactor** (_Drawer_): Used componentDidUpdate instead of componentWillReceiveProps. cWRP is going to be
    deprecated soon.

### 💨 v2.0.3 - (16.11.2018)

**NON-BREAKING CHANGES**

-   **fix** (_InputDatepicker_): InputDatepicker label is not flickering in IE anymore.
-   **fix** (_InputTextfield_): Placeholder label will switch back to initial state when browser window loses focus.
-   **fix** (_InputSearch_): Disabled autocomplete on the input.

### 👻 v2.0.2 - (13.11.2018)

**NON-BREAKING CHANGES**

-   **fix** (_InputDatepicker_): onClick is properly triggered again.

### 💫 v2.0.1 - (13.11.2018)

**FEATURES**

-   **feat** (_LayoutContainer_): You can set a `<LayoutContainer>` to be a block element in Xs viewport by using the
    displayXsAsBlock prop.
-   **feat** (_BreadCrumb.Item_): You can now add an onClick function to a `<BreadCrumbs.Item>`.
-   **feat** (_Header_): You can now use arrow left and arrow right to navigate through the toplevel menu items.

**NON-BREAKING CHANGES**

-   **styling** (_IndicatorLinks_): IndicatorLinks keyboard focus states unified.

**INTERNAL CHANGES**

-   **refactor** (_Drawer_): Separated onCloseClick and onBackdropClick because of reasons.
-   **refactor** (_TabBar.Item_): Removed props: onClick, onKeyDown, onFocus, onBlur, href - use htmlAttrs instead.
-   **feat** (_TabBar_): You can get the ref of the wrapping div using refCallback-prop now.
-   **refactor** (_Header_): Header now reads the transition-duration value from the css.
-   **code-style**: Removed alot of unused imports & variables. Enabled noUnusedLocals & noUnusedParameters in tsconfig.

### 👶 v2.0.0 - (09.11.2018)

**BREAKING CHANGES**

-   **refactor** (_Header_): Reworked Header component: expanded entry is now handled in the Header state and will be
    ignored, SkipItems removed
-   **feat** (_Header_): Keyboard navigation
-   **feat** (_Header_): Mobile flyout does not use the sidenavigation anymore

**FEATURES**

-   **feat** (_Drawer_): Focus Lock for Tab Key, fixed and improved flyout styling
-   **feat** (_TabBar_): focus callbacks, option for setting tabindex to all items (needed for header)
-   **feat** (_IconLink_): Variant without Icon (look={IconLink.Looks.NO_ICON})
-   **feat** (_Headline_): Links within `<Headline>` component are now styled according to links within a `<Paragraph>`

**NON-BREAKING CHANGES**

-   **refactor** (_Picture_): Removed unused props
-   **fix** (_Logo_): svg not focusable

**INTERNAL CHANGES**

-   **fix** (_Indicator_): Height calculation

**MINOR CHANGES**

-   **fix** (_Logo_): svg not focusable

### 💦 v1.3.1 - (07.11.2018)

**FEATURES**

-   **feat** (_JumpLinks_): JumpLinks will now set top offset correctly, even if there are other sticky elements at the
    top of the viewport.
-   **feat** (_PageContainer_): PageContainer now sets z-index for SideNavigation to let it be displayed above the
    content. Also content will only get margin-left in viewports where the sideNav is to the left of it.

**NON-BREAKING CHANGES**

-   **fix** (_Drawer_): Fixed Drawer not animating in/out correctly.
-   **fix** (_JumpLinks_): Fixed JumpLinks not being hidden in smaller viewports at all times.
-   **fix** (_SideNavigation_): SideNavigation will now set it's size correctly on pageload.

**INTERNAL CHANGES**

-   **feat** (_SideNavigation_): SideNavigation will now register itself as a sticky element in smaller viewports.
-   **feat** (_SideNavigation_): SideNavigation will now remove empty array children from navigationObject.
-   **refactor** (_JumpLinks_): Introduced a check to modify only children JumpLinks.Link elements from the JumpLinks
    component.
-   **refactor** (_PageContainer_): Refactored PageContainer to set SideNavigation fixed and let the whole window scroll
    -- this is necessary, because scroll events don't bubble but all our scroll listeners register to the window
    element. So if you set the window element to 100% height and let the content element be bigger to scroll, our scroll
    listeners won't work because content scrolls - not window.
-   **fix** (_CSSPrefixing_): Fixed prefixEnumClassNames only replacing the first occurence.
-   **feat** (_Pages_): Added LSGSample page to test basic Neugelb Styleguide stuff.
-   **refactor** (_ScrollTo_): Moved stickyElements array from ScrollTo to WindowEvents.
-   **refactor** (_WindowEvents_): Made WindowEvents a static class thats just combining static classes ScrollEvents and
    ResizeEvents. Improving performance, testability, lines of code.

**MINOR ISSUES**

-   **fix** (_IconLink_): Hover Color
-   **feat** (_MetaBar_): Improved Selector, Tab Order
-   **fix** (_Stage_): Mobile Lead Text margin/padding
-   **fix** (_Paragraph_): Colors
-   **fix** (_InputDatepicker_): Styling issues

### 👀 v1.3.0 - (19.10.2018)

**BREAKING CHANGES**

-   **refactor** (_Grid_): Reworked Grid component completely - see documentation for details.
-   **refactor** (_InputDatepicker_): Renamed "label"-prop to "labelText".
-   **refactor** (_InputSelect_): Renamed "label"-prop to "labelText".
-   **refactor** (_InputTextfield_): Renamed "label"-prop to "labelText".
-   **refactor** (_SliderPagination_): Renamed alot of props - see documentation for details.

**FEATURES**

-   **feat** (_GridRow_): Added "asUl"-prop. Renders the Row as an unordered list when set to true.
-   **feat** (_GridColumn_): Added "asLi"-prop. Renders the Row as a list item when set to true.
-   **feat** (_IconLink_): Added "iconColor"-prop.
-   **feat** (_IconLinkGroup_): Added some more directions: "FLIP_XS", "FLIP_SM", "FLIP_MD", "COLLAPSE_XS",
    "COLLAPSE_SM".
-   **feat** (_InputSearch_): (This is used in SideNavigation) Added X-Icon to clear the input according to
    InputTextfield.
-   **feat** (_InputSelect_): Will now open above when there is not enough space remaining to open below.

**NON-BREAKING CHANGES**

-   **doc**: Updated react-styleguidist and fixed names of components in the documentation.
-   **styling** (_PageContainer_): Fixed some styling.
-   **styling** (_Accordion_): Fixed a small styling bug.
-   **fix** (_Icon_): Icon used to render an empty fragment when no name was provided. This caused crashes. Fixed now.

**INTERNAL CHANGES**

-   **refactor** (_Button_): Changed implementation of the animation, removed internal setTimeout after each click.
    Maybe still room for improvement.
-   **refactor** (_Stepper_): Stepper is now working with the Grid component internally.
-   **test**: Added component to every test description (better readability in long diffs).
-   **refactor**: Changed from class component to SFC:
    -   IndicatorLink
    -   Item
    -   JumpLink
    -   LayoutContainer
    -   PageContainer
    -   Section
    -   Separator
    -   SimpleTable
-   **docs**: Renamed all the Readme.md files to the corresponding components name.

### 🎇 v1.2.0 - (10.10.2018)

**NEW COMPONENTS**

-   _Layer_

**FEATURES**

-   **feat** (_Header_): New "defaultActiveTargetValue"-prop. You can set an item to be active on pageload using this.
-   **feat** (_Header_): Added onChange function that will get called every time you click an item. Passes the
    targetValue specified in the navigationObject.
-   **feat** (_SideNavigation_): New "defaultActiveTargetValue"-prop. You can set an item to be active on pageload using
    this.
-   **feat** (_SideNavigation_): Added onChange function that will get called every time you click an item. Passes the
    targetValue specified in the navigationObject.

**BREAKING CHANGES**

-   **refactor** (_Icon_): Reworked Icon component completely - see documentation for details.
-   **refactor** (_Feedback_): Renamed all props - see documentation for details.
-   **refactor** (_navigationObject_): Removed "active"-prop. Components will now take control of the active state of
    navigationItems - you can only set a defaultActive on page load.
-   **refactor** (_navigationObject_): Removed "indicator"-prop. You won't have to pass this prop anymore. Components
    take care of it.
-   **refactor** (_navigationObject_): Removed "onClick"-prop. There is no onClick for each item anymore. Instead there
    is one onChange function that will be called on each item click and pass the targetValue.
-   **refactor** (_navigationObject_): Renamed "open"-prop to "expanded" - this controlls whether a navigationItems'
    children are displayed or not.
-   **refactor** (_SideNavigation_): Removed "topLevelIndicator"-prop - you can now control the indicators level using
    the "indicatorAtLevel" prop.
-   **refactor** (_InputSelect/SelectWidget_): Changed options from {key: "", label: ""} to {value: "", label: ""}
-   **refactor** (_Tabs_): Inactive Tab content will now be removed from the DOM - otherwise there are bugs happening
    when using JumpLinks within Tabs.
-   **refactor** (_Logo_): Removed "theme"-prop. Added "variant".
-   **removed** (_Drawer_): See Layer.

**NON-BREAKING CHANGES**

-   **fix** (_JumpLinks_): When you had multiline JumpLinks, it jumped to one line when position:fixed was set, because
    the position:fixed element doesn't care about it's parents width. Jumplinks will now set the width explicitly when
    changing to position:fixed.
-   **fix** (_JumpLinks_): IndicatorLinks now set their left offset when they change to position: fixed. There we're
    some placement jumps otherwise.
-   **fix** (_InputSelect.Stateful_): User provided onChange will now get called.
-   **fix** (_Switch.Stateful_): User provided onChange will now get called.
-   **styling** (_Button_): Fixed Button styling.
-   **styling** (_InputSlider_): Fixed InputSlider styling.
-   **docs** (_Grid_): Updated Grid examples.
-   **docs** (_GallerySlider_): Updated GallerySlider examples.
-   **docs** (_InputRadio_): Updated InputRadio examples.

**INTERNAL CHANGES**

-   **feat**: Added Localization preparations - component texts & labels can now be internationalized.
-   **refactor**: Added burem() unit-function in scss - used to size items as rem based building units.
-   **refactor** (_SideNavigation_): Added state.activeItem. Controls the positioning of the indicator.
-   **refactor** (_Header_): Added state.activeItem. Controls the positioning of the indicator.
-   **refactor** (_PortalNavigation_): Removed PortalNavigation. It was only used within header and needed a lot of
    awkward props. It is integrated in Header component now.
-   **refactor** (_Drawer_): Drawer is now an internal component that only renders a white space somewhere, and has a
    black shading for the background that calls a function when you click it.
-   **feat** (_Drawer_): Drawer now has a subcomponent Drawer.FixedArea that you can put in some other components (close
    Drawer X icon or a link to close the drawer).
-   **refactor** (_Drawer_): Drawer onCloseClick now doesn't pass the new open state anymore (you set it from the
    outside anyways).
-   **feat** (_IndicatorLink_): IndicatorLink now has a "notClickable" prop that is used to display an item just as a
    headline/label - this item won't have any interaction.
-   **refactor** (_IndicatorLinks_): Made IndicatorLinks' onChange function consistent.
-   **refactor** (_SideNavigation_): Made SideNavigation almost completely stateless. Removed active/open state from
    SideNavigation. You will now have to pass this within the navigationObject and keep your state elsewhere.
-   **refactor** (_SideNavigationItems_): New prop "indicatorAtLevel" - pass the level that an indicator shall be shown
    (navigationObject tree levels start at 1).
-   **refactor** (_SideNavigationItems_): Changed "activeId"-prop to "activeItem"-prop. SideNavigationItems component
    now works with targetValue instead of an id.
-   **refactor** (_SideNavigationItems_): Removed "expandedIds"-prop. You don't have to pass a list of expandedIds
    anymore. Expanded state will be extracted from the navigationObject you pass.
-   **refactor** (_SideNavigationItems_): Added onChange function to be consistent.

### 🎯 v1.1.0 - (21.09.2018)

**NEW COMPONENTS**

-   _GallerySlider_, _InputDatepicker_, _Media_, _SliderPagination_, _ContentWrapper_, _Separator_

**BREAKING CHANGES**

-   **refactor** (_InputGroup_): Refactored InputGroup completely - see documentation for new props.
-   **refactor** (_InputSelect_): Refactored InputSelect completely - see documentation for new props.
-   **refactor** (_Switch_): Refactored Switch completely - see documentation for new props.
-   **refactor** (_Picture_): Picture now takes "src"-prop as string (as before) or an object like { xs: '...', sm:
    '...', md: '...', lg: '...', xl: '...'}. Removed props srcXS, srcSM, srcMD, srcLG, srcXL.
-   **refactor** (_InputCheckbox_): Renamed "checked"-prop to "value".
-   **refactor** (_InputCheckbox_): Added "label"-prop. You have to specify the label here now - InputCheckbox won't
    handle children anymore.
-   **refactor** (_InputCheckbox_): onChange parameters are now (value, name, event) - was only (event) before.
-   **refactor** (_InputTextfield_): Removed "interactive"-prop, changed parameters for "onBlur", "onFocus", "onChange",
    "onKeyDown", "onClick" and "onIconClick" - see documentation.
-   **refactor** (_TextSection_): Removed "position"-prop - use Grid to position components.
-   **removed** (_MenuList_)
-   **removed** (_TextArea_): InputTextfield now works as a textArea by setting "textArea=true"

**FEATURES**

-   **feat** (_TabBar_): Added mobile TabBar functionality (switches to GallerySlider in mobile) - use "isMobile"-prop
    on TabBar to make it work.
-   **feat** (_Button_): Added callbacks for onFocus and onBlur.
-   **feat** (_IconLink_): Added callbacks for onFocus and onBlur.
-   **feat** (_InputGroup_): Added "helperText" and "errorText" props to show texts related to a group of
    radios/checkboxes.
-   **feat** (_InputGroup_): Added InputGroup.Radio to group radios. This will receive a value-prop to set the active
    Radio.
-   **feat** (_InputGroup_): Added InputGroup.Radio.Stateful to group radios. This will handle the value internally
    (state), use onChange to get the value.
-   **feat** (_Grid_): Added Grid.VerticalAlign.JUSTIFY. It's now possible to justify text within a Grid.Column.
-   **feat** (_Grid_): Added Grid.Spacing.GALLERY as another preconfigured spacing value.
-   **feat** (_LayoutContainer_): Added LayoutContainer.Outliers.HALF_SECTION_MARGIN as another preconfigured spacing
    value.
-   **feat** (_Section_): Added "fullWidth"-prop. Section can now cover the whole available width within the current
    viewports maximum.

**NON-BREAKING CHANGES**

-   **refactor** (_Icon_): Icon now takes "src"-prop as string (as before) or an object like { xs: '...', sm: '...', md:
    '...', lg: '...', xl: '...'}
-   **fix** (_LayoutContainer_): Fixed LayoutContainer.Outliers.CONTAINER_MARGIN doing positive instead of negative
    margins.
-   **styling** (_ContactModule_): Fixed ContactModule styling.
-   **styling** (_MetaBar_): Fixed MetaBar styling.
-   **fix** (_OnPageNavigation_): Fixed OnPageNavigation indicator showing in xs viewport.
-   **styling** (_Stage_): Fixed Stage styling.
-   **styling** (_Footer_): Fixed Footer styling.

**INTERNAL CHANGES**

-   **refactor** (_Grid_): GridColumn and GridRow are separate files now. Split up code to make it pretty.
-   **feat** (_InputToggle_): Added InputToggle component. This acts as a base for checkbox, radio and switch
    components.
-   **refactor** (_SimpleTable_): Adjusted SimpleTable to use Paragraph component.
-   **refactor** (_Switch_): Moved Switch to molecules.
-   **refactor** (_InputCheckbox_): Removed MDC from InputCheckbox. InputCheckbox is using InputToggle now.
-   **refactor** (_InputRadio_): Moved InputRadio to to molecules/InputRadio from molecules/InputRadioButton.
-   **refactor** (_InputRadio_): Removed MDC from InputRadio. InputRadio is using InputToggle now.
-   **refactor** (_InputSelect_): Removed MDC from InputSelect.

### 🐺 v1.0.0 - (16.08.2018)

-   **Feat**: LSG.Components initial go-live.

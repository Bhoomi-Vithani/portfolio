export { default as whatInput } from 'what-input';
import { IIcon } from '@lsg/icons';
import * as React$1 from 'react';
import React__default, { ReactNode, Ref, MutableRefObject, RefObject, ReactElement, CSSProperties, JSX as JSX$1, ComponentType, HTMLAttributes } from 'react';
import { Locale } from 'date-fns';
export { getStyles } from '@lsg/ssr';

declare enum Viewports {
    XL = 1680,
    LG = 1196,
    MD = 1024,
    SM = 640,
    XS = 0
}

interface IBaseNavigationItem {
    id?: string;
    label: ReactNode;
    name?: string;
    disabled?: boolean;
    completed?: boolean;
    collapsible?: boolean;
    open?: boolean;
    defaultOpen?: boolean;
    href?: string;
    htmlAttrs?: React.AnchorHTMLAttributes<HTMLAnchorElement> | React.ButtonHTMLAttributes<HTMLButtonElement>;
    icon?: IIcon;
    iconColor?: any;
    iconVariant?: "outline" | "solid";
    onClick?: (event: any, name: string) => void;
    actionAs?: any;
    actionProps?: any;
}
interface INavigationTree extends IBaseNavigationItem {
    children?: INavigationTree[];
    targetId?: string;
}
interface INavigationItem extends IBaseNavigationItem {
    children?: INavigationItem[];
}
interface IRichNavigationItem extends INavigationItem {
    item?: number;
    path?: string;
    level?: number;
    key?: string;
    targetValue?: string;
}

/**
 * Recursive function that adds a name field (if missing) to the given navigation tree items and all their children
 */
declare const getNamedNavigationTree: (navigationTree: INavigationItem[], path?: string) => (INavigationItem & INavigationTree & {
    name: string;
})[];
declare function deepGenerateNavObject(navigationObject: INavigationItem[], id: string, path?: string): IRichNavigationItem[];
declare function deepFlatten(navigationObject: IRichNavigationItem[]): IRichNavigationItem[];
declare function hasItemChildren(item: any, navTree: any): boolean;

declare const NavigationUtils_d_deepFlatten: typeof deepFlatten;
declare const NavigationUtils_d_deepGenerateNavObject: typeof deepGenerateNavObject;
declare const NavigationUtils_d_getNamedNavigationTree: typeof getNamedNavigationTree;
declare const NavigationUtils_d_hasItemChildren: typeof hasItemChildren;
declare namespace NavigationUtils_d {
  export {
    NavigationUtils_d_deepFlatten as deepFlatten,
    NavigationUtils_d_deepGenerateNavObject as deepGenerateNavObject,
    NavigationUtils_d_getNamedNavigationTree as getNamedNavigationTree,
    NavigationUtils_d_hasItemChildren as hasItemChildren,
  };
}

type PossibleLanguages = "en" | "de" | "en_GB" | "en_US" | (string & {});
/**
 * Returns the current browser language.
 * First, the `lang` attribute of the `<html>` element is checked, then the browser language (`navigator.language`).
 * If neither is available or the script is not running in the browser, "de" is returned as a fallback.
 */
declare const getBrowserLanguage: () => string;
interface IFormatsType {
    date: string;
    dateMonth: string;
    dateLocale: Locale;
    weekStartsOnSunday: boolean;
    quotationMarkOpening: string;
    quotationMarkClosing: string;
}
declare let texts: {
    lsg: {
        component: {
            _general: {
                optional: string;
                close: string;
            };
            Badge: {
                dotLabel: string;
            };
            BankingCard: {
                titles: {
                    giro: string;
                    giro_old: string;
                    info: string;
                    spar: string;
                    flexi: string;
                    einzahl: string;
                };
                titleLabel: string;
                cardNumber: string;
                cardNumberAria: string;
                validThru: string;
                cardOwner: string;
                label: string;
                description: string;
                flagLabel: string;
                flags: {
                    cirrus: string;
                    maestro: string;
                    mastercard: string;
                    visa: string;
                    girocard: string;
                };
                NFC: string;
            };
            BreadCrumbs: {
                title: string;
            };
            CardsMenu: {
                cardsMenuButtonA11Y: string;
            };
            CircleDiagram: {
                btnCountdown: string;
                countdownAppendix: string;
                errorFinishCountdown: string;
                errorAppendix: string;
            };
            Chips: {
                dismiss: string;
                removeFilter: string;
            };
            ClickList: {
                selected: string;
            };
            ComplexTable: {
                sortAscending: string;
                sortDescending: string;
                sortedAscending: string;
                sortedDescending: string;
                labelSortLayer: string;
                labelSortLayerBackButton: string;
                labelSortMenu: string;
            };
            ContentWrapper: {
                closeLayer: string;
                showDetails: string;
            };
            CreditCard: {
                cardNumber: string;
                cardNumberAria: string;
                validThru: string;
                cardOwner: string;
                titleLabel: string;
                label: string;
                description: string;
                flagLabel: string;
                flags: {
                    mastercard: string;
                    visa: string;
                    americanexpress: string;
                };
                cardCompany: string;
            };
            DataTable: {
                moreFields: string;
                selectAll: string;
                deselectAll: string;
                sortingRemoved: string;
                sorted: string;
                ascending: string;
                descending: string;
                priority: string;
                captionSortable: string;
                captionMultiSortable: string;
                toggleColumnHeaderCheckbox: string;
                toggleColumnHeaderLabel: string;
            };
            Datepicker: {
                placeholder: string;
                placeholderMonthYear: string;
                label: string;
                yearSelectionButtonDialogOpened: string;
                yearSelectionButtonDialogClosed: string;
                yearSelectionLabel: string;
                error: string;
                calendarLabel: string;
                openCalendar: string;
                openCalendarNoDate: string;
                openCalendarNoMonth: string;
                openCalendarSelectedDate: string;
                openCalendarSelectedMonth: string;
                nextMonth: string;
                previousMonth: string;
                nextYear: string;
                previousYear: string;
                cancelButton: string;
                confirmButton: string;
            };
            DetailPageHeader: {
                backButton: string;
            };
            Feedback: {
                trueButton: string;
                falseButton: string;
                result: string;
            };
            Flyout: {
                closeMenu: string;
            };
            Footer: {
                claim: string;
            };
            FootNoteAnchor: {
                footnote: string;
            };
            FootNoteItem: {
                jumpBack: string;
            };
            IconLink: {
                defaultAriaLabel: string;
            };
            InputSelect: {
                error: string;
                open: string;
                close: string;
                empty: string;
            };
            InputTextfield: {
                clear: string;
                reveal: string;
            };
            InputSearch: {
                placeholder: string;
                clear: string;
            };
            InputSlider: {
                ariaLowerSliderLabel: string;
                ariaUpperSliderLabel: string;
                ariaLowerTextfieldLabel: string;
                ariaUpperTextfieldLabel: string;
                minimalShortened: string;
                maximalShortened: string;
                openInputArea: string;
                current: string;
                closeInputArea: string;
                defaultLabelTo: string;
            };
            Logo: {
                title: string;
                titleCoba: string;
                actionHome: string;
                actionCoba: string;
            };
            OnPageNavigation: {
                backtoTop: string;
                scrollTo: string;
            };
            Pagination: {
                nextPage: string;
                previousPage: string;
                pageText: string;
                pagination: string;
            };
            PortalHeader: {
                backMenu: string;
                closeMenu: string;
                openMenu: string;
                skipLink: string;
            };
            ProcessHeader: {
                openMenu: string;
            };
            ProcessNavigation: {
                finishedPage: string;
                upcomingPage: string;
            };
            ProcessPage: {
                footerNavigationAriaLabel: string;
                navigationAriaLabel: string;
                openMenu: string;
                processDialog: string;
            };
            ProfileWidget: {
                closeMenu: string;
                logout: string;
            };
            SelectionCard: {
                optionLabel: string;
            };
            SideNavigation: {
                closeMenu: string;
                openMenu: string;
                navigation: string;
                results: string;
            };
            SimpleHeader: {
                closeMenu: string;
                openMenu: string;
                skipLink: string;
            };
            SkipLink: {
                navLabel: string;
            };
            SliderPagination: {
                nextPage: string;
                previousPage: string;
                pagination: string;
            };
            Spinner: {
                ProcessText: string;
            };
            Stage: {
                scrollerText: string;
            };
            TabBar: {
                scrollRight: string;
                scrollLeft: string;
            };
            TableActionMenu: {
                menuButton: string;
            };
            TanPanel: {
                downButton: string;
            };
            Video: {
                replay: string;
                notSupported: string;
                play: string;
                pause: string;
                mute: string;
                unMute: string;
                fullScreen: string;
                captionOn: string;
                captionOff: string;
            };
        };
        icon: {
            _default: string;
            banking___3rateCredit: string;
            banking___atm: string;
            banking___bank: string;
            banking___cashradar: string;
            banking___cobaMultichannel: string;
            banking___contactless: string;
            banking___euroSign: string;
            banking___gem: string;
            banking___giropayP2p: string;
            banking___goldbars: string;
            banking___handMoney: string;
            banking___handsMoney: string;
            banking___loanMobile: string;
            banking___mobileEuro: string;
            banking___multibanking: string;
            banking___phototan: string;
            banking___piggybank: string;
            banking___pincode: string;
            banking___statementPayment: string;
            banking___statementRefund: string;
            banking___vault: string;
            banking_card_addCard: string;
            banking_card_appleWallet: string;
            banking_card_blockCard: string;
            banking_card_cardArrows: string;
            banking_card_cardGreen: string;
            banking_card_multipleCards: string;
            banking_card_searchCard: string;
            banking_card_singleCard: string;
            banking_card_wrongPayment: string;
            banking_cash_3Coins: string;
            banking_cash_banknoteEur: string;
            banking_cash_banknoteGreen: string;
            banking_cash_banknoteUsd: string;
            banking_cash_coinArrowleft: string;
            banking_cash_coinArrowright: string;
            banking_cash_coinBtc: string;
            banking_cash_coinEur: string;
            banking_cash_coinGreen: string;
            banking_cash_coinstack: string;
            banking_graph_appreciation: string;
            banking_graph_depreciation: string;
            banking_graphs_benchmark: string;
            banking_graphs_graph: string;
            banking_graphs_green: string;
            banking_graphs_piechart: string;
            banking_transfer_standingOrder: string;
            banking_transfer_transferRebooking: string;
            banking_transfer_transferReceive: string;
            banking_transfer_transferRecurring: string;
            banking_transfer_transferScheduled: string;
            banking_transfer_transferStandard: string;
            banking_transfer_transferslip: string;
            brands___allianz: string;
            brands___apple: string;
            brands___fitbit: string;
            brands___garmin: string;
            brands___google: string;
            brands___swatch: string;
            brands___visa: string;
            brands___master: string;
            brands_banks_amex: string;
            brands_banks_comdirect: string;
            brands_banks_commerzbank: string;
            brands_banks_deutschebank: string;
            brands_banks_ing: string;
            brands_banks_n26: string;
            brands_banks_postbank: string;
            brands_banks_sparkasse: string;
            brands_banks_targo: string;
            brands_banks_wuestenrot: string;
            communication___bot: string;
            communication___call: string;
            communication___chat: string;
            communication___envelope: string;
            communication___envelopeRead: string;
            communication___envelopeUnread: string;
            communication___handPointing: string;
            communication___handHeart: string;
            communication___handsCare: string;
            communication___headsetHead: string;
            communication___inbox: string;
            communication___news: string;
            communication___operator: string;
            communication___recommendation: string;
            communication___sherlockAi: string;
            communication___textchat: string;
            communication___videochat: string;
            communication_feedback_agreement: string;
            communication_feedback_boring: string;
            communication_feedback_dislike: string;
            communication_feedback_happy: string;
            communication_feedback_like: string;
            communication_feedback_neutral: string;
            communication_feedback_sad: string;
            communication_feedback_smile: string;
            interaction___add: string;
            interaction___backToTop: string;
            interaction___bluetoothOn: string;
            interaction___buyDe: string;
            interaction___buyEn: string;
            interaction___checkmark: string;
            interaction___close: string;
            interaction___copy: string;
            interaction___dashLong: string;
            interaction___dashShort: string;
            interaction___download: string;
            interaction___eyeHide: string;
            interaction___eyeView: string;
            interaction___faceid: string;
            interaction___filter01: string;
            interaction___filter02: string;
            interaction___fingerprint: string;
            interaction___flashOff: string;
            interaction___flashOn: string;
            interaction___fullscreenEnter: string;
            interaction___fullscreenExit: string;
            interaction___history: string;
            interaction___imageRotate: string;
            interaction___listTwo: string;
            interaction___listThree: string;
            interaction___logout: string;
            interaction___menu: string;
            interaction___menuGrid: string;
            interaction___more01: string;
            interaction___more02: string;
            interaction___notificationOff: string;
            interaction___notificationOn: string;
            interaction___pause: string;
            interaction___playbutton: string;
            interaction___refresh: string;
            interaction___replay: string;
            interaction___save: string;
            interaction___search: string;
            interaction___sellDe: string;
            interaction___sellEn: string;
            interaction___send: string;
            interaction___share: string;
            interaction___share02: string;
            interaction___slider: string;
            interaction___stop: string;
            interaction___touchid: string;
            interaction___trash: string;
            interaction___uploadCloud: string;
            interaction___upload: string;
            interaction___volumeLow: string;
            interaction___volumeOff: string;
            interaction___volume: string;
            interaction___wifiOff: string;
            interaction___wifiOn: string;
            interaction_arrows_arrowDown: string;
            interaction_arrows_arrowLeft: string;
            interaction_arrows_arrowLeftright: string;
            interaction_arrows_arrowRight: string;
            interaction_arrows_arrowUp: string;
            interaction_arrows_chevronDown: string;
            interaction_arrows_chevronLeft: string;
            interaction_arrows_chevronRight: string;
            interaction_arrows_chevronUp: string;
            location___cobaGreen: string;
            location___cobaTower: string;
            location___direction: string;
            location___energyfarm: string;
            location___globe: string;
            location___globeGreen: string;
            location___house: string;
            location___location: string;
            location___office: string;
            location___officeGreen: string;
            location___target: string;
            object___alarmclock: string;
            object___bug: string;
            object___book: string;
            object___briefcase: string;
            object___calendar: string;
            object___calendarApple: string;
            object___calendarGoogle: string;
            object___calendarOutlook: string;
            object___calendarPencil: string;
            object___calender: string;
            object___chain: string;
            object___clock: string;
            object___coffeemug: string;
            object___compass: string;
            object___firstaid: string;
            object___flag: string;
            object___flowerBouquet: string;
            object___gauge: string;
            object___gear: string;
            object___graduationCap: string;
            object___groceries: string;
            object___groceriesGreen: string;
            object___industryRobot: string;
            object___key: string;
            object___knifeFork: string;
            object___lightbulb: string;
            object___lock: string;
            object___lockOpen: string;
            object___paperclip: string;
            object___pencil: string;
            object___rockingChair: string;
            object___shieldCheckmark: string;
            object___shoppingbagsGreen: string;
            object___shoppingcart: string;
            object___sofa: string;
            object___snowflake: string;
            object___snowflakeAttention: string;
            object___noSnowflake: string;
            object___stopwatch: string;
            object___sprout: string;
            object___suitcase: string;
            object___sun: string;
            object___tag: string;
            object___torch: string;
            object___umbrella: string;
            object___wrench: string;
            object_devices_calculator: string;
            object_devices_camera: string;
            object_devices_headset: string;
            object_devices_keyboard: string;
            object_devices_laptop: string;
            object_devices_laptopCobaLogo: string;
            object_devices_microphone: string;
            object_devices_microphoneOff: string;
            object_devices_printer: string;
            object_devices_responsive: string;
            object_devices_smartphone: string;
            object_devices_smartphoneCobaLogo: string;
            object_devices_tablet: string;
            object_devices_video: string;
            object_document_certificate: string;
            object_document_checklist: string;
            object_document_document: string;
            object_document_documentArrow: string;
            object_document_documentMinus: string;
            object_document_documentPlus: string;
            object_document_folderOpen: string;
            object_document_questionnaire: string;
            object_document_signature: string;
            object_nature_bee: string;
            object_nature_bug: string;
            object_nature_cloud: string;
            object_nature_palmtree: string;
            object_nature_sprout: string;
            object_transport_airplane: string;
            object_transport_automobile: string;
            object_transport_bicycle: string;
            object_transport_campervan: string;
            object_transport_caravan: string;
            object_transport_carGreen: string;
            object_transport_motorcycle: string;
            object_transport_pram: string;
            object_transport_trailer: string;
            object_transport_train: string;
            object_transport_wheel: string;
            people___businessMale: string;
            people___businessFemale: string;
            people___businessProfile: string;
            people___callcenter: string;
            people___childFemale: string;
            people___childMale: string;
            people___female: string;
            people___fullbodyFemale: string;
            people___fullbodyMale: string;
            people___fullbodyProfile: string;
            people___groupFemale: string;
            people___groupMale: string;
            people___groupProfile: string;
            people___hipsterMale: string;
            people___male: string;
            people___photoId: string;
            people___privacySpy: string;
            people___profileAdd: string;
            people___profileAttention: string;
            people___profileEuro: string;
            people___profileHistory: string;
            people___profileMaskV1: string;
            people___profileMaskV2: string;
            people___profile: string;
            people___teacherPresent: string;
            people___teamFemale: string;
            people___teamMale: string;
            people___wheelchair: string;
            social___cobablog: string;
            social___facebook: string;
            social___instagram: string;
            social___linkedin: string;
            social___pinterest: string;
            social___tiktok: string;
            social___twitter: string;
            social___x: string;
            social___xing: string;
            social___youtube: string;
            symbols___asterisk: string;
            symbols___at: string;
            symbols___blockchain: string;
            symbols___co2Footprint: string;
            symbols___digitalisation: string;
            symbols___error: string;
            symbols___exclamationmark: string;
            symbols___heart: string;
            symbols___infoCircle: string;
            symbols___info: string;
            symbols___legal: string;
            symbols___music: string;
            symbols___peace: string;
            symbols___percentage: string;
            symbols___questionmarkCircle: string;
            symbols___questionmark: string;
            symbols___quotationmark: string;
            symbols___recycle: string;
            symbols___slashCircle: string;
            symbols___star: string;
            symbols___uncategorized: string;
        };
    };
};
declare let formats: IFormatsType;
declare const getDecimalSeparatorByLanguage: (locale: string) => string;
declare const getThousandsSeparatorByLanguage: (locale: string) => string;
declare const getActiveLanguage: () => string;
declare const setLanguage: (lang?: PossibleLanguages) => void;
declare const setCustomTexts: (custTexts: any) => void;
declare const setCustomFormats: (custFormats: any) => void;
declare const UNSAFE_getDefaultTexts: (lang: "en" | "de" | "en_GB" | "en_US") => any;
declare const UNSAFE_getDefaultFormats: (lang: "en" | "de" | "en_GB" | "en_US") => any;
declare const getIconTitle: (name: string, noDefault?: boolean) => any;
declare const withField: (text: string, fields: {
    [key: string]: string;
}) => string;

type Localization_d_IFormatsType = IFormatsType;
declare const Localization_d_UNSAFE_getDefaultFormats: typeof UNSAFE_getDefaultFormats;
declare const Localization_d_UNSAFE_getDefaultTexts: typeof UNSAFE_getDefaultTexts;
declare const Localization_d_formats: typeof formats;
declare const Localization_d_getActiveLanguage: typeof getActiveLanguage;
declare const Localization_d_getBrowserLanguage: typeof getBrowserLanguage;
declare const Localization_d_getDecimalSeparatorByLanguage: typeof getDecimalSeparatorByLanguage;
declare const Localization_d_getIconTitle: typeof getIconTitle;
declare const Localization_d_getThousandsSeparatorByLanguage: typeof getThousandsSeparatorByLanguage;
declare const Localization_d_setCustomFormats: typeof setCustomFormats;
declare const Localization_d_setCustomTexts: typeof setCustomTexts;
declare const Localization_d_setLanguage: typeof setLanguage;
declare const Localization_d_texts: typeof texts;
declare const Localization_d_withField: typeof withField;
declare namespace Localization_d {
  export {
    Localization_d_IFormatsType as IFormatsType,
    Localization_d_UNSAFE_getDefaultFormats as UNSAFE_getDefaultFormats,
    Localization_d_UNSAFE_getDefaultTexts as UNSAFE_getDefaultTexts,
    Localization_d_formats as formats,
    Localization_d_getActiveLanguage as getActiveLanguage,
    Localization_d_getBrowserLanguage as getBrowserLanguage,
    Localization_d_getDecimalSeparatorByLanguage as getDecimalSeparatorByLanguage,
    Localization_d_getIconTitle as getIconTitle,
    Localization_d_getThousandsSeparatorByLanguage as getThousandsSeparatorByLanguage,
    Localization_d_setCustomFormats as setCustomFormats,
    Localization_d_setCustomTexts as setCustomTexts,
    Localization_d_setLanguage as setLanguage,
    Localization_d_texts as texts,
    Localization_d_withField as withField,
  };
}

interface ITransitionState {
    entering: boolean;
    entered: boolean;
    exiting: boolean;
    exited: boolean;
    unmounted: boolean;
}
declare class TransitionHandler {
    timeout: any;
    makeTransitionState: (init: string) => ITransitionState;
    stopTransitions(): void;
    transition: (isEnter: boolean, timeout: number | {
        enter?: number;
        exit?: number;
    }, prevState: ITransitionState, onChange?: (newState: ITransitionState) => void) => void;
}

interface IBasicPropsInternal {
    id?: string;
    className?: string;
    children?: ReactNode;
    noMargin?: boolean;
    horizontalAlignment?: "left" | "center" | "right";
    isStencilHost?: boolean;
}

/**  Interface is used about multiple components */
interface IActionBaseProps extends IBasicPropsInternal {
    nonInteractive?: boolean;
    a11yMeaningfulLabel?: boolean;
    onMouseHoverChange?: (newHover: boolean) => void;
    onKeyboardFocusChange?: (newFocus: boolean) => void;
    onMouseDown?: (ev: React__default.MouseEvent<HTMLElement>) => void;
    onMouseUp?: (ev: React__default.MouseEvent<HTMLElement>) => void;
    onMouseEnter?: (ev: React__default.MouseEvent<HTMLElement>) => void;
    onMouseLeave?: (ev: React__default.MouseEvent<HTMLElement>) => void;
    onKeyDown?: (ev: React__default.KeyboardEvent<HTMLElement>) => void;
    onKeyUp?: (ev: React__default.KeyboardEvent<HTMLElement>) => void;
    onTouchStart?: (ev: React__default.TouchEvent<HTMLElement>) => void;
    onTouchEnd?: (ev: React__default.TouchEvent<HTMLElement>) => void;
    hasTabIndex?: boolean;
    disabled?: boolean;
    loading?: boolean;
    loadingAriaLabel?: string;
    expanded?: boolean;
    htmlAttrs?: React__default.AnchorHTMLAttributes<HTMLAnchorElement> | React__default.ButtonHTMLAttributes<HTMLButtonElement> | React__default.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    name?: string;
    href?: string;
    onClick?: (event: React__default.MouseEvent<HTMLElement>, name: string) => void;
    clicked?: boolean;
    hasMouseHover?: boolean;
    hasKeyboardFocus?: boolean;
    actionRef?: Ref<HTMLElement>;
    containerRef?: Ref<HTMLElement>;
    actionAs?: any;
    actionProps?: any;
    selected?: boolean;
    role?: React__default.AriaRole;
}

type viewports = "xxl" | "xl" | "lg" | "md" | "sm" | "xs";
type directions = "min" | "max" | "exact";
declare const breakPoints: {
    xxl: number;
    xl: number;
    lg: number;
    md: number;
    sm: number;
    xs: number;
};
declare function styleViewport(viewport: viewports, direction: directions, content: string): string;
declare const styleViewportSmMin: (content: string) => string;
declare const styleViewportMdMin: (content: string) => string;
declare const styleViewportLgMin: (content: string) => string;
declare const styleViewportXlMin: (content: string) => string;
declare const styleViewportXxlMin: (content: string) => string;
declare const styleViewportXsExact: (content: string) => string;
declare function getViewportMediaQueryRange(minViewport: viewports, maxViewport: viewports): string;
declare function styleViewportRange(minViewport: viewports, maxViewport: viewports, content: any): string;
declare function getViewportMediaQuery(viewport: viewports, direction: directions): string;
declare const getViewportMediaQuerySmMin: () => string;
declare const getViewportMediaQueryMdMin: () => string;
declare const getViewportMediaQueryLgMin: () => string;
declare const getViewportMediaQueryXlMin: () => string;
declare const getViewportMediaQueryXxlMin: () => string;
declare const getViewportMediaQueryXsExact: () => string;

type Viewport = "xl" | "lg" | "md" | "sm" | "xs";
/** Method for setting the viewport size inside the constructor or before the component is hydrated into the DOM */
declare const setInitialViewportSize: (v: string) => string;

/** If the defaultId is defined, return the defaultId, else create an id with the prefix.
 * NOTE: use the defaultId in a correct way.
 * Example: BrandbarPresentation, logoId.
 * Wrong: const logoId = useUniqueId(`${hostClass}-logo`, `${id}-logo`);
 * (the defaultId is always truthy, even if id is undefined => undefined-logo)
 * Correct: const logoId = useUniqueId(`${hostClass}-logo`, id && `${id}-logo`);
 */
declare function useUniqueId(prefix: string, defaultId?: string): string;
declare function useMenu(menuItems: any[]): [
    {
        open: boolean;
        focussedIndex: number;
    },
    {
        setOpen: (open: boolean) => void;
        setFocussedIndex: (index: number) => void;
    },
    {
        buttonRef: MutableRefObject<HTMLElement>;
        flyoutRef: MutableRefObject<HTMLElement>;
        focussedRef: MutableRefObject<HTMLElement>;
        containerRef: MutableRefObject<HTMLElement>;
    },
    {
        handleMouseOver: (value: number) => void;
        onKeyDown: (event: any) => void;
    }
];
declare function usePrevious<T>(value: T): T;
declare function useDwindle(actionProps?: IActionBaseProps): [
    {
        hasKeyboardFocus: boolean;
        hasMouseHover: boolean;
        clicked: boolean;
    },
    {
        setHasKeyboardFocus: (focus: boolean) => void;
        setHasMouseHover: (hover: boolean) => void;
        setClicked: (clicked: boolean) => void;
    },
    {
        onMouseDown: (ev: React__default.MouseEvent<HTMLElement>) => void;
        onMouseUp: (ev: React__default.MouseEvent<HTMLElement>) => void;
        onMouseLeave: (ev: React__default.MouseEvent<HTMLElement>) => void;
        onKeyDown: (ev: React__default.KeyboardEvent<HTMLElement>) => void;
        onKeyUp: (ev: React__default.KeyboardEvent<HTMLElement>) => void;
    }
];
declare function useLinkHover(actionProps?: Pick<IActionBaseProps, "a11yMeaningfulLabel" | "nonInteractive" | "disabled" | "loading" | "onMouseDown" | "onMouseUp" | "onMouseLeave" | "onTouchStart" | "onTouchEnd">): [
    {
        hasKeyboardFocus: boolean;
        hasMouseHover: boolean;
    },
    {
        setHasKeyboardFocus: (focus: boolean) => void;
        setHasMouseHover: (hover: boolean) => void;
    },
    {
        onMouseDown: (ev: React__default.MouseEvent<HTMLElement>) => void;
        onMouseUp: (ev: React__default.MouseEvent<HTMLElement>) => void;
        onMouseLeave: (ev: React__default.MouseEvent<HTMLElement>) => void;
    },
    {
        onTouchStart: (ev: React__default.TouchEvent<HTMLElement>) => void;
        onTouchEnd: (ev: React__default.TouchEvent<HTMLElement>) => void;
    }
];
/**
 * Hook that determines if the user's screen is within the specified range.
 *
 * @param min Minimum viewport (use undefined if you don't want to set a minumum limit)
 * @param max Maximum viewport (use undefined if you don't want to set a maximum limit)
 * @returns true if the user's screen is within the specified range
 */
declare function useViewportRange(min?: viewports, max?: viewports): boolean;
declare function useViewport(): Viewport;
declare function useResize(onResize: () => void, deps?: any[]): void;
declare function useScroll(onScroll: any, doInitialCall?: boolean, scrollObject?: Window | HTMLElement): void;
declare function useViewportListener(callback: (viewportSize: string) => void, doInitialCall?: boolean): void;
declare function useTransitionState(isVisible: any, duration: any): {
    transitionState: ITransitionState;
    transitionHandler: TransitionHandler;
};
declare function combineRefs<T>(...externalRefs: Ref<T>[]): RefObject<T>;
interface IIntermediateState<T> {
    sequence?: T[];
    reducedAnimationSequence?: T[];
    initialState?: T;
}
declare function useTransition2<T extends string>(enter: boolean, options: IIntermediateState<T>, onTransition?: (proceedCallback: any, _newState: any) => any): [T | "exited" | "entering" | "entered" | "exiting", () => void];
/** This hook executes a specific close function when the body is clicked.
 */
declare function useBodyClickClose(ref: RefObject<any>, onClose: (ev: MouseEvent) => void, isActive: boolean, toggleElement?: HTMLElement): void;
/**
 * This hooks simulates the browsers native sticky functionality in y direction. Sometimes we cant use the css variant, so we can rely on JS with this hook.
 * @param containerRef element to stick to
 * @param stickyElement element to be sticky
 * @param shouldBeSticky determines if functionality should be applied. Is needed because we are not allowed to call hooks conditionally.
 */
declare const useStickyY: (containerRef: MutableRefObject<HTMLElement>, stickyElement: MutableRefObject<HTMLElement>, shouldBeSticky?: boolean) => void;
declare const useGridColumns: (deps?: any[]) => readonly [0 | 10 | 4 | 2 | 1 | 3 | 5 | 6 | 7 | 8 | 9 | 11 | 12, (element: HTMLElement | null) => void];

declare const LoremIpsum: React$1.FunctionComponent<{
    count?: number;
    startIndex?: number;
    asSpan?: boolean;
}>;

/**
 * This returns dateFormats that are used in the current locale. Example for de locale:
 * full: 'EEEE, do MMMM, y',
 * long: 'do MMMM, y',
 * medium: 'd MMM, y',
 * short: 'dd.MM.y'
 */
declare const getLocaleDateFormat: (_width: "full" | "long" | "medium" | "short") => string;

interface IFragmentMap {
    <T>(children: ReactNode, callback: (value: ReactElement, index?: number) => T, includeString?: boolean | undefined): T[];
    <T>(children: ReactNode, callback: (value: ReactElement | string, index?: number) => T, includeString: true): T[];
}
declare const fragmentMap: IFragmentMap;
declare const fragmentMapReverse: IFragmentMap;
declare const fragmentCount: (children: ReactNode, includeString?: boolean) => number;

interface IBasicProps {
    /** The unique id of the element */
    id?: string;
    /** Custom CSS classes that should be applied */
    className?: string;
    /** Inner components or text that should be displayed */
    children?: ReactNode;
}

type DataPresentationColorName = "level-0" | "level-1" | "level-2" | "level-3" | "level-4" | "level-5" | "level-6" | "level-7" | "level-8" | "secondary-1" | "secondary-2" | "secondary-3" | "secondary-4" | "secondary-5" | "secondary-6" | "primary-1" | "primary-2";
interface IDatapointPresentation {
    /** Name of segment */
    label: string;
    /** Value of segment */
    value?: number | string;
    /** Optional aria-label that will override label set automatically by the component */
    ariaLabel?: string;
    /** Optional aria-labelledby that will override label */
    ariaLabelledBy?: string;
    id?: string;
    /** Color of the visualized segment */
    indicatorColor: DataPresentationColorName;
    /** @Deprecated Kept for comparability. Color of text are not meant to be set  */
    valueColor?: "primary" | "error" | "success" | "primaryBold" | "errorBold" | "successBold";
}

interface IChartInfoItemProps extends IBasicPropsInternal, IDatapointPresentation {
    /** @deprecated 20.11.2024: should not be selectable (as per specs) The color of the label. */
    labelColor?: "primary" | "error" | "success" | "primaryBold" | "errorBold" | "successBold";
    /** An optional formatter for the value. Takes a generic function that formats a value and returns it as a string. */
    valueFormatter?: <T>(value: T) => string;
    /** An optional callback that is triggered when the mouse enters the element. */
    onMouseEnter?: (event: React__default.MouseEvent<HTMLDivElement>) => void;
    /** An optional callback that is triggered when the mouse leaves the element. */
    onMouseLeave?: (event: React__default.MouseEvent<HTMLDivElement>) => void;
}

type ChartInfoPosition = "auto" | "top" | "right" | "bottom" | "";
interface IChartInfoContainerProps extends Omit<IBasicPropsInternal, "horizontalAlignment"> {
    /** The prop can be used to decide which position the info should be placed around the chart element  */
    position?: ChartInfoPosition;
    /** Title covers the whole information within the container element. Can be a common title, date or anything else */
    title?: string;
    /** Formatting option, when title is a date or anything special format */
    titleFormatter?: <T>(value: T) => string;
    /** Description when title not set or more information is needed */
    ariaDescription?: string;
    /** An array of chart info items. */
    items?: IChartInfoItemProps[];
    /** The index of the currently active item. */
    activeIndex?: number;
    /** A callback that is triggered when an item becomes active. */
    onItemActive?: (index: number) => void;
    /** The appearance style of the chart info container. */
    appearance?: "tooltip" | "legend" | "infoarea";
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React__default.HtmlHTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
}

interface IChartInfoListProps extends Omit<IChartInfoContainerProps, "noMargin" | "isStencilHost"> {
}
interface IChartInfoListItem extends Omit<IChartInfoItemProps, "noMargin" | "isStencilHost"> {
}
interface ICircleCountdownProps extends IBasicProps {
    /** @deprecated 26.11.24: use ariaLabel instead, With this description any detailed information can be placed
     *  to a circle diagram as aria-labelledby for users with a visual impairment. */
    ariaDescription?: string;
    /** a11y -relevant: With this description any detailed information can be placed to a circle diagram as
     *  aria-labelledby for users with a visual impairment.
     Note: It's recommended  to use  */
    ariaLabel?: string;
    /** Text corresponding to the amount (mostly a percentage info like "66%" ). */
    valueLabel: string;
    /** Callback on animation. Please use the callback with the parameter `progress` and multiply with 0 - 1. for value animation.
     * Second parameter ´amount:number´ will deprecate soon, because the second parameter is for internal purposes only and doesn't make sense on public .
     * Not relevant in a countdown scenario */
    valueAnimationCallback?: (progress: number, amount: number) => string;
    /** Small text below is useful in none countdown scenario and works as a
     * subline for valueLabel and an essential, additional information part  */
    label?: string;
    /** Please pass a value between 0 and 1. Do not use in a countdown scenario */
    amount?: number;
    /** Color of diagram, can be switched between 2 color aspects  (default: primary-1)
     *  Useful for countdown scenario and other. */
    color?: "primary-1" | "primary-2";
    /** Set true for noAnimation. The value will appear directly after loading. (default = false) */
    noAnimation?: boolean;
    /** On true the animation starts right after loading, even when the Circle is not in the viewport (default = false). Not relevant for countdown scenarios.
     * Prop is not relevant in a countdown scenario */
    animationOnStart?: boolean;
    /** Headline is placed above the value, relevant for none countdown and countdown scenario */
    headline?: string;
    /** Callback which is triggered when the refresh button is clicked. Useful in a countdown scenario. */
    onRefreshClick?: () => void;
    /** If countdown is active, you can set how many seconds the countdown starts with. Useful in a countdown scenario. */
    secondsUntilRefresh?: number;
    /** Activates a countdown, which can be reset by user (default is 5 seconds). Essential prop
     *  in a countdown scenario  */
    countdown?: boolean;
    /** This text become displayed in color red. Because the user should pay attention to the status when countdown run to zero.
     * The legacy message become provided as default when no other text is needed. But it can be overwritten. ( default: "Orderfrist abgelaufen" (de) / "Order period has exprired" (en)
     * Useful in a Countdown scenario.
     * */
    countDownFinishText?: string;
    /** A button can be added to the CircleDiagram in a countdown scenario */
    callToActionButton?: any;
    /** Chart information as presentation of amounts behind circle diagram chart expression. Prop is not intended for countdown scenarios, means value presentation only.
     * Not relevant for countdown scenarios. */
    chartInfoArea?: IChartInfoListProps;
    /** Size mode: `fixed` considers behavior so far, `dynamic` needs a limiting box around (parent element like div) to catch the size (default = fixed / with 480 px).
     * Useful for countdown scenarios and other. */
    sizeMode?: "fixed" | "dynamic";
}
declare const CircleDiagram: {
    ({ noAnimation, animationOnStart, valueLabel, chartInfoArea, ariaDescription, ariaLabel, ...props }: ICircleCountdownProps): React__default.JSX.Element;
    displayName: string;
};

interface IFlyoutProps extends IBasicProps {
    host?: HTMLElement;
    onKeyDown?: (ev: React$1.KeyboardEvent<HTMLElement>) => void;
    /** @deprecated: use `toggleInnerElement` (soon `toggleElement`) instead in conjunction with a React ref. */
    toggleId?: string;
    /** @deprecated: will be renamed to `toggleElement` in next major release. */
    toggleInnerElement?: HTMLElement;
    /** @deprecated: will be renamed to `toggleContainerElement` in next major release. */
    toggleElement?: HTMLElement;
    isToggleElmWidth?: boolean;
    hasTabIndex?: boolean;
    role?: string;
    stretchBreakpointBu?: number;
    withGap?: boolean;
    innerSpacing?: "small" | "medium" | "large" | "none";
    open: boolean;
    noAutoFocus?: boolean;
    onClose: () => void;
    hostRef?: any;
    isDrawerOnMobile?: boolean;
}
/** @deprecated: Not intended to be used directly due to accessibility concerns. Please contact the LSG Team, if the component is required */
declare const Flyout: React$1.FunctionComponent<IFlyoutProps>;

interface INavigationBlockProps extends IBasicProps {
    style?: CSSProperties;
    navigationTree?: INavigationItem[];
    navigationActionAs?: any;
    clusterLabel?: string;
    startLevel?: "topic" | "group" | "page";
    value?: string;
    activeElement?: HTMLElement;
    activeRef?: any;
    isProcessNavigation?: boolean;
    onChange?: (value: string, e: React$1.SyntheticEvent<HTMLElement>) => void;
    openObject?: any;
    onOpenObjectChange?: (newOpenObject: any) => void;
    noAnimation?: boolean;
    expandAll?: boolean;
    noIndent?: boolean;
    alwaysShowIndicator?: boolean;
}
declare const NavigationBlock: {
    (props: INavigationBlockProps): React$1.JSX.Element;
    displayName: string;
};

interface IState {
    openIndex?: number;
}
type IProps = {
    multiple?: true;
} | {
    multiple?: false | undefined;
    defaultOpenIndex?: number;
    onChange?: (openIndex: number, groupId: string, ev: React$1.SyntheticEvent<Element>) => void;
};
type IAccordionGroupStatefulProps = IBasicProps & IProps;
/**
 * @deprecated. Use `AccordionGroup` instead, without providing `openIndex`. If absent,
 * `AccordionGroup` will be stateful.
 */
declare class AccordionGroupStateful extends React$1.Component<IAccordionGroupStatefulProps, IState> {
    static displayName: string;
    constructor(props: IProps & IBasicProps);
    handleChange: (open: number) => void;
    render(): React$1.JSX.Element;
}

type IStatefulProps = {
    /** Whether it is allowed to open more than one <Accordion /> at once */
    multiple?: false;
    /** Default value for openIndex before any interaction took place. This prop only has an effect, when `multiple={false}` is set. */
    defaultOpenIndex?: number;
} & IBasicProps;
type IStatelessProps = {
    /** Whether it is allowed to open more than one <Accordion /> at once */
    multiple?: false;
    /** OpenIndex shall be set to the index of the currently open accordion(s) */
    openIndex: number;
    /** OnChange will be called if any of the accordions open states change */
    onChange: (openIndex: number, groupId: string, event: React$1.SyntheticEvent<Element>) => void;
} & IBasicProps;
type IStatelessMultipleProps = {
    /** Whether it is allowed to open more than one <Accordion /> at once */
    multiple: true;
} & IBasicProps;
type IAccordionGroupProps = IStatelessMultipleProps | IStatelessProps | IStatefulProps;
/** See Accordion Example for usage */
declare class AccordionGroup extends React$1.Component<IAccordionGroupProps, {
    openIndex?: number;
}> {
    static displayName: string;
    static defaultProps: Partial<IAccordionGroupProps>;
    constructor(props: IAccordionGroupProps);
    /** @deprecated Use `AccordionGroup` instead, without providing `openIndex`. If absent, `AccordionGroup` will be stateful. */
    static Stateful: typeof AccordionGroupStateful;
    handleChange: (open: number) => void;
    render(): React$1.JSX.Element;
}

/**
 * @deprecated. Use `Accordion` instead, without providing `isOpen` and `onChange`. If absent,
 * `Accordion` will be stateful.
 */
declare class AccordionStateful extends React$1.Component<Omit<IAccordionProps, "isOpen"> & {
    initialIsOpen?: boolean;
}> {
    static displayName: string;
    static Group: typeof AccordionGroup;
    render(): React$1.JSX.Element;
}

interface IAccordionProps extends IBasicProps {
    /** Title of the Accordion. */
    title: React$1.ReactNode;
    /** Alternative HTML tag for title. */
    titleAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | string;
    /** Content of Accordion is visible? */
    isOpen?: boolean;
    /** OnChange will be called when Accordion opens/closes. */
    onChange?: (open: boolean, id: string, ev: React$1.SyntheticEvent<Element>) => void;
    /** KeyDown function that will be called when pressing a key while the Accordion Header is focused. */
    onKeyDown?: (e: React$1.KeyboardEvent<HTMLButtonElement>) => void;
    /** This prop is overridden for accordions that are direct children of an <AccordionGroup />. If true, the
     * Accordion renders as <dh /> and <dt /> elements, otherwise as <div /> elements. Set to true, if Accordions are
     * inside a <dl /> element. */
    asDescriptionItems?: boolean;
}
declare const Accordion: {
    ({ titleAs, ...props }: IAccordionProps): React$1.JSX.Element;
    displayName: string;
    Stateful: typeof AccordionStateful;
    Group: typeof AccordionGroup;
};

interface IArticleListItemProps extends IBasicProps {
    /** The list item heading */
    itemHeadline?: string;
    /** Alternative HTML tag that is rendered for itemHeadline (e.g. "h3", "h4", "p"). */
    itemHeadlineAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "strong" | string;
}
/** @deprecated: Will be removed in lsg version 20. Use Native Components to create a stepper instead. You can find an example in the UX Patterns section */
declare const ArticleListItem: {
    ({ itemHeadlineAs, ...props }: IArticleListItemProps): React$1.JSX.Element;
    displayName: string;
};

interface IArticleListProps extends IBasicProps {
    /** @deprecated (23.06.2023) - Text used as SVG title. Is fixed to an empty string (""). */
    iconTitle?: string;
    /** The lists heading */
    headline?: string;
    /** Alternative HTML tag that is rendered for headline (e.g. "h2", "h3", "p", "span", "div"). */
    headlineAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | string;
    /** Id for the headline element (needed for optimizing a11y) */
    headlineId?: string;
    /** The icon that shall be displayed within the IconLink - this is also located in the click area. */
    icon?: IIcon;
    /** Set an specific color for the icon */
    iconColor?: "default" | "error" | "success";
    /** Icon variant. One of: "outline" | "solid" */
    iconVariant?: "outline" | "solid";
}
/**
 * @deprecated: 11.2023 - Will be removed in the next major release.
 * Have a look at the "Article List Pattern" which uses native components like shown in the Markenportal UX Patterns
 * section: https://markenportal.commerzbank.com/styleguide/article-list-pattern/index.html
 */
declare const ArticleList: {
    ({ iconColor, iconVariant, headlineAs, ...props }: IArticleListProps): React$1.JSX.Element;
    displayName: string;
    Item: {
        ({ itemHeadlineAs, ...props }: IArticleListItemProps): React$1.JSX.Element;
        displayName: string;
    };
};

interface IArticleStageProps extends IBasicProps {
    /** Set headline */
    headline?: React$1.ReactNode;
    /** Please pass a value of Headline.Sizes */
    headlineSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    /** Sets an alternative HTML tag for headline (e.g. "h5", "h6", "span", "div"," p") */
    headlineAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | string;
    /** Set headline overline */
    headlineOverline?: React$1.ReactNode;
    /** Sets an alternative HTML tag for overline */
    headlineOverlineAs?: string;
    /** Set headline subline */
    headlineSubline?: React$1.ReactNode;
    /** Sets an alternative HTML tag for subline */
    headlineSublineAs?: string;
    /** Sets a helpertext */
    helperText?: string;
    /** set iconlinks */
    iconLinks?: any;
    /** <lsg-thumb/> props */
    /** Thumb icon  */
    thumbIcon?: IIcon;
    /** Thumb icon name */
    thumbIconName?: string;
    /** Thumb icon variant. One of: "outline" | "solid" */
    thumbIconVariant?: "solid" | "outline";
    /** Thumb icon title. */
    thumbIconTitle?: string;
    /** Text that should be placed inside the circle */
    thumbText?: string;
    /** Source for thumb image */
    thumbImgSrc?: string;
    /** The item heading */
    thumbHeadline?: string;
    /** If set a subline will be rendered */
    thumbSubline?: string;
    /** See Picture component: Array of objects that have the format of the `<source>` element. */
    pictureSource?: React$1.SourceHTMLAttributes<HTMLSourceElement>[];
    /** See Picture component: Src attribute of the `<img>` element (required). Is used as a fallback for browsers that do not support the picture element  */
    pictureImgSrc: string;
    /** Text description of the image. */
    pictureAlt?: string;
    /** Caption below the image (optional). */
    pictureCaption?: string;
    /** Display the component with a centered layout. */
    centeredLayout?: boolean;
    /** deactivate automatic hyphens if you want to set them manually */
    manualHyphenation?: boolean;
}
/**
 * @deprecated: 11.2023 - Will be removed in the next major release.
 * Have a look at the "Article Stage Pattern" which uses native components like shown in the Markenportal UX Patterns
 * section: https://markenportal.commerzbank.com/styleguide/article-stage-pattern/index.html
 */
declare const ArticleStage: {
    ({ iconLinks, centeredLayout, ...props }: IArticleStageProps): React$1.JSX.Element;
    displayName: string;
};

interface IIconLinkPresentationProps extends IActionBaseProps {
    label: React__default.ReactNode;
    iconName?: string;
    icon?: IIcon;
    /** @deprecated - Use appearance instead. */
    look?: "left" | "right" | "no-icon" | "no-text";
    /** defines the look of the icon and the text within the link */
    appearance?: "left" | "right" | "no-icon" | "no-text";
    /** set the direction for the hover animation */
    hoverAnimation?: "left" | "right";
    iconOnHover?: boolean;
    iconColor?: "default" | "primary" | "secondary" | "tertiary" | "error" | "success" | "note" | "disabled" | "black" | "white" | "anthracite" | "primary-1" | "primary-2" | "secondary-1" | "secondary-2" | "secondary-3" | "secondary-4" | "secondary-5" | "secondary-6";
    iconVariant?: "outline" | "solid";
    color?: "primary" | "secondary";
    inactive?: boolean;
    transform?: "rotate" | undefined;
    textEllipsis?: boolean;
    onMouseDown?: (ev: React__default.MouseEvent<HTMLElement>) => void;
    svgAttrs?: Omit<React__default.SVGAttributes<SVGSVGElement>, "color">;
    innerRef?: any;
    badge?: ReactNode;
    actionAs?: any;
    actionProps?: any;
    inline?: boolean;
    as?: keyof JSX.IntrinsicElements;
    size?: "legacy" | "xsmall";
    selected?: boolean;
}

interface IIconLinkWrapperProps extends Omit<IIconLinkPresentationProps, "hasKeyboardFocus" | "hasMouseHover" | "onKeyboardFocusChange" | "iconId"> {
}

interface IIconLinkWrapperExtended extends Omit<IIconLinkWrapperProps, "label"> {
    label?: React__default.ReactNode;
    children?: string;
}

interface IComplexTableColumnProperties {
    title: ReactNode;
    name: string;
    isSortable?: boolean;
    formatter?: (value: any) => ReactNode;
    alignRight?: boolean;
}
interface IComplexTableRow$1 {
    rowId?: string;
    rowData: any[];
    rowActions?: IIconLinkWrapperExtended[];
    rowActionsLook?: "menu-only" | "auto" | "icons-only";
}

interface IStatefulComplexTableColumnProperties extends IComplexTableColumnProperties {
    sortComparator?: (row1: IComplexTableRow, row2: IComplexTableRow) => number;
}
interface IComplexTableStatefulState {
    sortColumn?: number;
    isSortedAscending: boolean;
    activePage: number;
    tableBodyData: IComplexTableRow[];
    isMobile: boolean;
}
interface IComplexTableStatefulProps extends Omit<IComplexTableProps, "sortColumn" | "isSortedAscending" | "columnProperties" | "isMobile"> {
    defaultSortColumn?: number;
    defaultIsSortedAscending?: boolean;
    columnProperties: IStatefulComplexTableColumnProperties[];
    numRowsPerPage?: number;
    onHeadingClick?: (column: number, columnName: string, isSortAscending: boolean, e: React$1.MouseEvent<HTMLElement>) => void;
}
/**
 * This is a stateful version of `<ComplexTable>`. PLEASE NOTE: Unlike the Stateful variants of formfield components
 * that are meant to be implemented for non-React-Environment (e.g. ShowCases), this variant of the `ComplexTable` is meant for React Logic also.
 * The `ComplexTable.Stateful` adds a sorting functionality, so you do not have necessarily to maintain the contents of the table and the sorting
 * algorithm in your wrapping component. For the sorting functionality, you can also define a sorting comparator for each column.
 */
declare class ComplexTableStateful extends React$1.PureComponent<IComplexTableStatefulProps, IComplexTableStatefulState> {
    static displayName: string;
    constructor(props: IComplexTableStatefulProps);
    private static mobileViewports;
    onStatefulTableHeadingClick: (column: number, isSortAscending: boolean) => void;
    private defaultSortComparator;
    render(): React$1.JSX.Element;
}

interface IComplexTableRow extends Omit<IComplexTableRow$1, "rowActionsLook"> {
    rowActionsLook?: "menu-only" | "auto" | "icons-only";
}
interface IComplexTableProps extends IBasicProps {
    /**
     * An array of objects with the IComplexTableColumnProperties interface. The column properties correspond with the
     * tableBodyData "columns".
     */
    columnProperties: IComplexTableColumnProperties[];
    /**
     * This array provides the table data. It is an array of table rows with column elements; each column element
     * corresponding to a columnProperties element.
     */
    tableBodyData?: IComplexTableRow[];
    /**
     * If the header of a sortable column is clicked, this callback handler returns the column id (starting with 0),
     * the column name as defined in the columnProperties, and the information if the column shall be
     * sorted ascending or descending.
     */
    onHeadingClick?: (column: number, columnName: string, isSortAscending: boolean, e: React$1.MouseEvent<HTMLElement>) => void;
    /** This callback handler returns the clicked row.
     *  only called when there are no actions icons defined. Action icons should provide onclick handlers.
     */
    onBodyRowClick?: (rowIndex: number, rowId: string, e: React$1.MouseEvent<HTMLElement>) => void;
    /**
     * Optional parameter: Shows by a black arrow that the table is sorted by the sortColumn with this column number (starting with 0).
     * In the non-Stateful variant, the user has to provide the sorting.
     */
    sortColumn?: number;
    /**
     * Optional parameter: if a sortColumn parameter is provided, this flag is the information of the sort direction.
     * IsSortedAscendig == true shows an up arrow, IsSortedAscendig == false shows an down arrow.
     */
    isSortedAscending?: boolean;
}
/** @deprecated This component will not be further maintained and will not receive a11y updates. Use DataTable instead. */
declare const ComplexTable: {
    ({ isSortedAscending, onHeadingClick, sortColumn, ...props }: IComplexTableProps): React$1.JSX.Element;
    displayName: string;
    Stateful: typeof ComplexTableStateful;
};

interface IInfoListProps extends IBasicProps {
    /** Set property to display items always in one column. */
    singleColumn: boolean;
}
interface IInfoListItemProps {
    /** Headline of the item. */
    headline: React$1.ReactNode;
    /** Alternative HTML tag that is rendered for item headline (e.g. "h5", "h6", "p", "span", "div").  */
    headlineAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | string;
    /** Text of the item. */
    text: React$1.ReactNode;
    /** Enumeration value of an item */
    enumerationValue: string;
}
/**
 * @deprecated: 11.2023 - Will be removed in the next major release.
 * Have a look at the "Info List Pattern" which uses native components like shown in the Markenportal UX Patterns
 * section: https://markenportal.commerzbank.com/styleguide/info-list-pattern/index.html
 */
declare class InfoList extends React$1.Component<IInfoListProps> {
    static displayName: string;
    static Item: React$1.FunctionComponent<IInfoListItemProps>;
    render(): React$1.JSX.Element;
}

interface IProfileWidgetProps extends IBasicProps {
    /** ProfileWidget is initially open */
    open?: boolean;
    /** Close button click event */
    onCloseClick?: (event?: MouseEvent | React$1.MouseEvent<HTMLElement, MouseEvent>) => void;
    /** Backdrop button click event */
    onBackdropClick?: (event?: MouseEvent) => void;
    /** Profile name */
    profileName?: string;
    /** Profile subline */
    profileSubline?: string;
    /** Profile Thumbnail image */
    profileImg?: any;
    /** Profile Thumbnail text */
    profileImgAltText?: any;
    /** Profile Thumbnail icon */
    profileIcon?: IIcon;
    /** Profile icon variant. One of: "outline" | "solid" */
    profileIconVariant?: "outline" | "solid";
    /** Profile switch link text */
    switchProfileLinkText?: string;
    /** Profile switch link icon */
    switchProfileLinkIcon?: IIcon;
    /** Profile switch link href */
    switchProfileLinkHref?: string;
    /** Profile switch link target (applied if href is set). Use HTML anchor-targets, e.g. _self, _blank, _parent or _top. */
    switchProfileLinkTarget?: string;
    /** Render an alternative action component, e.g. a React Router link */
    switchProfileLinkActionAs?: any;
    /** Alternative action component (e.g. a React-Router link) */
    switchProfileLinkActionProps?: any;
    /** Profile switch onclick event */
    onProfileSwitchClick?: (event?: MouseEvent | React$1.MouseEvent<HTMLElement, MouseEvent>) => void;
    /** Navigation tree */
    navigationTree?: INavigationItem[];
    /** Standard component to be rendered as a navigation link (e.g. a React-Router link).
     * If no actionProps are defined in the navigationTree item, a "normal" LSG action component (<a> or <button>
     * will be rendered. */
    navigationActionAs?: any;
    /** Logout button link text */
    logOutButtonText?: string;
    /** Logout button href */
    logOutButtonHref?: string;
    /** Logout button link target (applied if href is set). Use HTML anchor-targets, e.g. _self, _blank, _parent or _top. */
    logOutButtonTarget?: string;
    /** Render an alternative action component, (e.g. a React-Router link). */
    logOutButtonActionAs?: any;
    /** Alternative action component (e.g. a React-Router link). */
    logOutButtonActionProps?: any;
    /** Logout button onclick event */
    onLogOutButtonClick?: (event: React$1.MouseEvent<HTMLElement>, name: string) => void;
    /** Logout button is hidden */
    logOutButtonHidden?: boolean;
    /** Message text */
    messageText?: string;
    /** Container for additional IconLink (left) */
    linkSectionLeft?: any;
    /** Container for additional IconLink (right) */
    linkSectionRight?: any;
}
/**
 * @deprecated: 11.2023 - Will be removed in the next major release.
 * Have a look at the "Profile Widget Pattern" which uses native components like shown in the Markenportal UX Patterns
 * section: https://markenportal.commerzbank.com/styleguide/profile-widget-pattern/index.html
 */
declare const ProfileWidget: React$1.FunctionComponent<IProfileWidgetProps>;

/** @deprecated */
declare enum IconSizes {
    MEDIUM = "medium",
    LARGE = "large"
}
/** @deprecated */
declare enum IconColors {
    DEFAULT = "default",
    PRIMARY = "primary"
}
interface IStepperProps extends IBasicProps {
    /** Title above the blocks. */
    title?: string;
    /** Alternative HTML tag for title above the blocks. */
    titleAs?: string;
    /** Pass a node with IconLinks which will be placed below the */
    links?: ReactNode[];
    /** Html Attributes for the nav element that contains the links */
    navHtmlAttrs?: React$1.HTMLAttributes<HTMLHtmlElement> & {
        "aria-label": React$1.AriaAttributes["aria-label"];
    };
    centeredLayout?: boolean;
    /** for displaying icon in different sizing version */
    iconSize?: "medium" | "large";
}
interface IStepperBlockProps {
    /** Will be passed to a SVGIcon component. */
    icon: any;
    /** For displaying icon in different sizing version */
    iconSize?: "medium" | "large";
    /** Choose between default or primary brand color */
    iconColor?: "default" | "primary";
    /** Headline of block. */
    headline: string;
    /** Alternative HTML tag that is rendered for headline of block. (e.g. "h3", "h4", "div", "span", "p") */
    headlineAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | string;
    /** Text of block. */
    text: ReactNode;
    centeredLayout?: boolean;
}
/**
 * @deprecated: 11.2023 - Will be removed in the next major release.
 * Have a look at the "Stepper Pattern" which uses native components like shown in the Markenportal UX Patterns
 * section: https://markenportal.commerzbank.com/styleguide/stepper-pattern/index.html
 */
declare class Stepper extends React$1.Component<IStepperProps> {
    static Block: React$1.FunctionComponent<IStepperBlockProps>;
    static displayName: string;
    static defaultProps: Partial<IStepperProps>;
    /** @deprecated */
    static IconSizes: typeof IconSizes;
    /** @deprecated */
    static IconColors: typeof IconColors;
    render(): React$1.JSX.Element;
}

interface IA11yMeaningfulLabel extends IBasicProps {
    /**
     * External link address. An 'a'-tag will be used when you fill this property.
     * If there's no href, a button element will be used.
     */
    href?: string;
    /** Name of the component, can be used in onClick handler */
    name?: string;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React$1.ButtonHTMLAttributes<HTMLButtonElement> | React$1.AnchorHTMLAttributes<HTMLAnchorElement> | Record<`data-${string}`, string | number | boolean>;
    /** Function to be called before each onClick-Event. Not called when the button is disabled. */
    onMouseDown?(e: React$1.MouseEvent<HTMLElement>): void;
    /**
     * Function to be called on the onClick event. This function will not be called if the link is disabled.
     * The `name` parameter will return the name you passed to the component.
     */
    onClick?(e: React$1.MouseEvent<HTMLElement>, name: string): void;
    /** Function to be called whenever a key is pressed while the button is focused. */
    onKeyDown?(e: React$1.KeyboardEvent<HTMLElement>): void;
    /** Focus callback */
    onFocus?(e: React$1.FocusEvent<HTMLElement>): void;
    /** Blur callback */
    onBlur?(e: React$1.FocusEvent<HTMLElement>): void;
    /** Callback function to get the ref of the button or label which depend on context of use . */
    refCallback?: Ref<HTMLElement>;
    /**
     * Render an alternative action component, e.g. a React Router link
     * Example: <<Button, Teaser, etc.> actionAs={ReactRouterLink} actionProps={{to: "/mypage"}} ...
     */
    actionAs?: any;
    /** These are the props for the alternative action component (e.g. a React Router link) */
    actionProps?: any;
    /** whether an inline element is rendered. If set to false, the component renders as a block element */
    inline?: boolean;
}
/**
 * 'Stretches' a clickable area.
 * To get an idea of what's happening here, see:
 * https://inclusive-components.design/cards/
 */
declare const A11yMeaningfulLabel: {
    ({ inline, ...props }: IA11yMeaningfulLabel): React$1.JSX.Element;
    displayName: string;
};

interface IActionButtonGroupProps extends IBasicProps {
    /** Name of the html tag that is rendered for the group container. If set to "ul" or "ol", the `as`-prop of children will be set to "li". Default is "ul", if the group contains more than one IconLink. */
    as?: keyof JSX$1.IntrinsicElements;
}
declare const ActionButtonGroup: {
    (props: IActionButtonGroupProps): JSX$1.Element;
    displayName: string;
};

interface IButtonBaseProps extends IBasicProps {
    /** Is the Button clickable by the user? This also reflects in its appearance. */
    disabled?: boolean;
    /** Switches the Button to loading mode. It gets disabled and a loading Spinner will be shown. */
    loading?: boolean;
    /** This prop is used to provide an ARIA label for the Spinner component to inform screen reader users about the current status of processes.
     *  If not set, a fixed text ("Loading"/"Laden...") will be read by screen readers. Note that this text (also visible beneath the Spinner circle with reduced-motion browser settings)
     *  cannot be modified to avoid potential UX issues caused by too long text.
     *  */
    loadingText?: string;
    /**
     * External link address. An 'a'-tag will be used when you fill this property.
     * If there's no href, a button element will be used.
     */
    href?: string;
    /** Name of the component, can be used in onClick handler */
    name?: string;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React__default.ButtonHTMLAttributes<HTMLButtonElement> | React__default.AnchorHTMLAttributes<HTMLAnchorElement> | React__default.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    /** Function to be called before each onClick-Event. Not called when the button is disabled. */
    onMouseDown?(e: React__default.MouseEvent<HTMLElement>): void;
    /**
     * Function to be called on the onClick event. This function will not be called if the link is disabled.
     * The `name` parameter will return the name you passed to the component.
     */
    onClick?(e: React__default.MouseEvent<HTMLElement>, name: string): void;
    /** Function to be called whenever a key is pressed while the button is focused. */
    onKeyDown?(e: React__default.KeyboardEvent<HTMLElement>): void;
    /** Focus callback */
    onFocus?(e: React__default.FocusEvent<HTMLElement>): void;
    /** Blur callback */
    onBlur?(e: React__default.FocusEvent<HTMLElement>): void;
    /** Callback function to get the ref of the button. */
    refCallback?: Ref<HTMLElement>;
    /**
     * Render an alternative action component, e.g. a React Router link
     * Example: <<Button, Teaser, etc.> actionAs={ReactRouterLink} actionProps={{to: "/mypage"}} ...
     */
    actionAs?: any;
    /** These are the props for the alternative action component (e.g. a React Router link) */
    actionProps?: any;
    /**
     * If true, this component will be decorative only and will not contain the `<a>` or `<button>` tag itself.
     * This is useful for non-interactive elements inside a card or other components.
     */
    nonInteractive?: boolean;
    /**
     * If true, this component will animate the entire card or other components it is inside.
     * Make sure that the link text is meaningful (e.g. "Buy Product", "Cancel"). It must not contain general phrases
     * (e.g. "Read more", "Select").
     */
    a11yMeaningfulLabel?: boolean;
    /**
     * Name of the html tag that is rendered for the outer div. Defaults to "li" if used inside a group with more than
     * one item, or a group that is set to "ul" or "ol". To change the tag of the button, use the `actionAs` prop.
     */
    as?: keyof JSX$1.IntrinsicElements;
}
interface IButtonProps extends IButtonBaseProps {
    /** Label text for button  (Remark: Replacement of children prop is adaption of a11y pattern later on) */
    label: ReactNode;
    /** @deprecated Use color instead. (date: 04.12.2023) */
    look?: "primary" | "secondary";
    /** Use one of the defined button colors. */
    color?: "primary" | "secondary";
    /** Icon element */
    icon?: IIcon;
    /** Name */
    iconName?: string;
    /** Positioning of icon beside button text/label. Option no-text show a centered icon only */
    iconAppearance?: "left" | "right" | "no-text";
    /** Presentation/Appearance of icon */
    iconVariant?: "outline" | "solid";
}
declare const Button: {
    ({ color, refCallback, loadingText, ...props }: IButtonProps): JSX$1.Element;
    displayName: string;
};

interface IActionButtonProps extends IButtonBaseProps {
    /** Defines the text that is shown under the Icon. */
    label: React$1.ReactNode;
    /** @deprecated Use color instead. */
    look?: "primary" | "secondary";
    /**
     * Use one of the defined button colors.
     * Visual Appearance of the ActionButton. Use `color="primary"` only once in a page to indicate, how a user gets to the next step.
     */
    color?: "primary" | "secondary";
    /**
     * Use the appearance="no-text" property, if you want to hide the label text visually.
     * Screen readers will continue to detect the label text.
     */
    appearance?: "no-text";
    /** Icon, e.g. icon={communication___call}.  */
    icon?: IIcon;
    /**
     * Defines the basic appearance of action button, similar to Icons.
     * Have a look at the Icon component description for further information and visual examples.
     */
    iconVariant?: "outline" | "solid";
    /** Variant: floating (lower half of the screen).  */
    floating?: boolean;
}
declare const ActionButton: {
    ({ color, refCallback, disabled, label, children, loadingText, ...props }: IActionButtonProps): React$1.JSX.Element;
    displayName: string;
    Group: {
        (props: IActionButtonGroupProps): React$1.JSX.Element;
        displayName: string;
    };
};

interface IActionFlyoutItemProps extends Omit<IButtonBaseProps, "loading" | "loadingText"> {
}
declare const ActionFlyoutItem: {
    ({ ...props }: IActionFlyoutItemProps): React$1.JSX.Element;
    displayName: string;
};

type IActionFlyoutProps = IBasicProps & {
    /** The unique id of the element (e.g. Button) the ActionFlyout is attached to. */
    id?: string;
    /** The unique id of the flyout menu */
    menuId?: string;
    /** HTML tag of the outer container. Defaults to a React Fragment */
    as?: keyof React$1.ReactElement;
    /** Defines whether the Flyout always opens to the left side. */
    preferOpenToLeft?: boolean;
    /** The React component that the ActionFlyout is attached to. */
    menuButton: (props: Omit<IButtonBaseProps, "as">) => React$1.ReactElement;
};
declare const ActionFlyout: {
    ({ children, menuButton, preferOpenToLeft, id: idProp, ...props }: IActionFlyoutProps): React$1.JSX.Element;
    displayName: string;
    Item: {
        ({ ...props }: IActionFlyoutItemProps): React$1.JSX.Element;
        displayName: string;
    };
};

interface IActionGroupProps extends IBasicProps {
    /** Inner components that should be displayed on the left side. */
    left?: ReactNode;
    /** Inner components that should be displayed on the right side. */
    right?: ReactNode;
    /** Switch between left and centered layout. */
    centeredLayout?: boolean;
    /** You can set your own aria-label for the ul element of the ActionGroup. Default value is "Button Group"
     *  (equivalent German value implemented as well). */
    ariaLabel?: string;
}
declare const ActionGroup: {
    ({ left, centeredLayout, ...props }: IActionGroupProps): React$1.JSX.Element;
    displayName: string;
};

interface IOptions$1 {
    label: string;
    disabled?: boolean;
    value: string;
}
interface IAutocompleteProps extends IBasicProps {
    /** Sets a helper text below the component. */
    helperText?: string;
    /** Adds an error text below the component. If you use this prop, the errorText is added below the helperText (if defined), and the component is implicitly set to invalid. */
    errorText?: string;
    /** Sets text field and style to disabled. */
    disabled?: boolean;
    /** Sets text field and style to 'error'. 'errorText' becomes visible if set. */
    invalid?: boolean;
    /** Sets the label text. */
    label: string;
    /** Is called on blur. */
    onBlur?: (event: React$1.FocusEvent<HTMLElement>, name: string) => void;
    /** Is called on focus. */
    onFocus?: (event: React$1.FocusEvent<HTMLElement>, name: string) => void;
    /** Is called on every text change and passes the new value and the id of the component. */
    onChange?: (value: string, name: string, isSelected: boolean, CustomEvent: any) => void;
    /** Triggered on key press. */
    onKeyDown?: (key: string, name: string, event: React$1.KeyboardEvent<HTMLElement>) => void;
    /** Sets the placeholder text (visible on a focused input with empty value). */
    placeholder?: string;
    /** Sets the text field and style to read-only. */
    readOnly?: boolean;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React$1.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    /** Sets the value of the input. */
    value: string;
    /** Sets the 'name' attribute of the 'input' HTML element. */
    name?: string;
    /** If set to "true", the text en/de " (optional)"/" (Optional)" is appended to the label.
     *  You can also pass in a predefined string. */
    optional?: boolean | string;
    /** An array with the selectable options (see example) */
    options?: IOptions$1[];
    /** If clearIcon is true, an X-icon is displayed for non-empty/selected fields on focus and hover, in order to reset
     *  a selection. A click will call the 'onChange' method -> with an empty string. */
    clearIcon?: boolean;
    /** If enabled, this will be an input with a suggestion list */
    withTextInput?: boolean;
    /** Label that is shown as a placeholder in the flyout list, when the options are empty. */
    emptyListLabel: any;
    /** With spacing="dense", the text input whitespace of the Autocomplete is reduced by smaller paddings and bottom-margins.
     * Set spacing="default" only in special FormContainer with spacing="dense" prop (edge) cases where you wish to override the "dense" spacing
     *   in an individual Autocomplete. In this case, the Autocomplete will receive its default whitespace within the FormContainer. */
    spacing?: "default" | "dense";
}
declare class Autocomplete extends React$1.Component<IAutocompleteProps, {}> {
    static displayName: string;
    static defaultProps: Partial<IAutocompleteProps>;
    render(): React$1.JSX.Element;
}

interface IBadgeProps extends IBasicProps {
    /** @deprecated: Use color instead. Badge look */
    look?: "primary" | "highlight" | "supplementary" | "optional" | "inactive" | "error" | "success" | "alert" | "secondary-1" | "secondary-2" | "secondary-3" | "secondary-4" | "secondary-5" | "secondary-6";
    /** Badge color */
    color?: "primary" | "highlight" | "supplementary" | "optional" | "inactive" | "error" | "success" | "alert" | "secondary-1" | "secondary-2" | "secondary-3" | "secondary-4" | "secondary-5" | "secondary-6";
    /** @deprecated 30.01.2024: Not required anymore. Badge type - One of "text", "icon" or "dot" */
    type?: "text" | "icon" | "dot";
    /** @deprecated 17.06.2024: Not required anymore. Depends on the text or icon props that are passed. Badge type - One of "text", "icon" or "dot" */
    appearance?: "text" | "icon" | "dot";
    /**  Badge text - If type is "text" and text is undefined or an empty string, the Badge will be rendered as a dot. This 'text' prop will be ignored if 'icon' prop is set.   */
    text?: string;
    /** Badge Icon. If prop is set, 'text' prop will be ignored. */
    icon?: IIcon;
    /** Badge icons can be styled as outline, featuring hollow designs that
     emphasize contours, or solid, which are filled in. */
    iconVariant?: "solid" | "outline";
    /** Label that describes the Icon if the default icon label is not sufficient (for example an icon is used in different colors). You can set icon Label for each list item as well. */
    iconLabel?: string;
    /** Badge size */
    size?: "default" | "large";
    /** The subsequent footnote item number. */
    footnoteIdentifier?: string;
    /** The id of the corresponding footnote item. */
    footnoteIdItem?: string;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React$1.HTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
    /** If true, sets badge in line of text. Makes a line break otherwise. */
    inline?: boolean;
    /** Sets margin on either one or both sides. Left sets the margin on the left, right on the right and both on
     *  both sides. */
    margin?: "left" | "right" | "both";
}
declare const Badge: {
    ({ look, color, text, icon, iconLabel, size, footnoteIdentifier, footnoteIdItem, iconVariant, children, ...props }: IBadgeProps): React$1.JSX.Element;
    displayName: string;
};

interface IBankingCardProps extends IBasicProps {
    /** You can choose the card design from BankingCard.Cards.[...] */
    card?: "giro" | "giro_old" | "info" | "spar" | "flexi" | "einzahl";
    /** You can choose the card flag from BankingCard.Flags.[...] - <b> option maestro and none marked as deprecated </b> */
    flag?: "none" | "cirrus" | "maestro" | "mastercard" | "visa" | "girocard";
    /** Card number, example: 1234 / 56789 */
    cardNumber?: string;
    /** Expiration Date - should look like MM/YY */
    expirationDate?: string;
    /** Card owner - make sure it fits in one line, will be cut off with "..." if not */
    cardOwner?: string;
    /** Card owner information line 2 (optional) - will be cut off analogue to owner line */
    cardOwnerLine2?: string;
    /** Card will be rotated by -10 degrees in tilted mode and receive a special shadow */
    tilted?: boolean;
    /** Will remove the NFC Icon when enabled */
    noNFC?: boolean;
    /** Disabled state will be desaturated and a little opaque */
    disabled?: boolean;
    /** If set `true`, the card will be ignored in the accessibility tree. */
    ariaHidden?: boolean;
    /** @Deprecated no effect */
    cardTitle?: string;
}
declare const BankingCard: {
    ({ flag, ...props }: IBankingCardProps): React$1.JSX.Element;
    displayName: string;
};

interface IBannerMessageRef {
    focus: () => void;
}
declare const BannerMessage: React$1.ForwardRefExoticComponent<((IBasicProps & {
    /** With this prop, you can insert Icon Links into the right side of your BannerMessage. */
    iconLinks?: ReactNode;
    /** Put Content and Action into a collapsible container. */
    isCollapsible?: boolean;
    /** Set the BannerMessage initially open (only possible when isCollapsible prop is set to true). */
    isOpen?: boolean;
    /** Makes the component visible if set to true. */
    isVisible?: boolean;
    /** Set the badge color. */
    badgeColor?: "primary" | "highlight" | "supplementary" | "optional" | "inactive" | "error" | "success" | "alert";
    role?: "status" | "alert";
    /** Set this prop to "aside" to render the 'aside' HTML tag. This is used for BannerMessages
     *  with no important information. */
    as?: "div" | "aside";
} & {
    /** BannerMessage headline text. */
    heading: string;
    /** Headline size (only available when heading is set). */
    headlineSize?: "h5" | "h6";
    /** HTML tag that is rendered for the headline text (only available when heading is set). E.g.
     *  "h4", "h5", "strong", "b". For further information on which one to choose, see e.g.
     *  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong. */
    headlineAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "strong" | string;
    /** Add overline text to the headline (only available when heading is set). */
    overline?: string;
    /** Add subline text to the headline (only available when heading is set). */
    subline?: string;
    /** Show a large icon badge (only available when heading is set). */
    showLargeIconBadge?: boolean;
    /** Set a badge text to the headline (only available when heading is set). */
    badgeText?: string;
} & {
    /** Icon for icon badge. */
    badgeIcon: IIcon;
    /** Only available if badgeIcon is set. Icons can be styled as outline, featuring hollow designs that
     *  emphasize contours, or solid, which are filled in. */
    badgeIconVariant?: "solid" | "outline";
} & {
    illustration?: undefined;
}) | (IBasicProps & {
    /** With this prop, you can insert Icon Links into the right side of your BannerMessage. */
    iconLinks?: ReactNode;
    /** Put Content and Action into a collapsible container. */
    isCollapsible?: boolean;
    /** Set the BannerMessage initially open (only possible when isCollapsible prop is set to true). */
    isOpen?: boolean;
    /** Makes the component visible if set to true. */
    isVisible?: boolean;
    /** Set the badge color. */
    badgeColor?: "primary" | "highlight" | "supplementary" | "optional" | "inactive" | "error" | "success" | "alert";
    role?: "status" | "alert";
    /** Set this prop to "aside" to render the 'aside' HTML tag. This is used for BannerMessages
     *  with no important information. */
    as?: "div" | "aside";
} & {
    /** BannerMessage headline text. */
    heading: string;
    /** Headline size (only available when heading is set). */
    headlineSize?: "h5" | "h6";
    /** HTML tag that is rendered for the headline text (only available when heading is set). E.g.
     *  "h4", "h5", "strong", "b". For further information on which one to choose, see e.g.
     *  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong. */
    headlineAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "strong" | string;
    /** Add overline text to the headline (only available when heading is set). */
    overline?: string;
    /** Add subline text to the headline (only available when heading is set). */
    subline?: string;
    /** Show a large icon badge (only available when heading is set). */
    showLargeIconBadge?: boolean;
    /** Set a badge text to the headline (only available when heading is set). */
    badgeText?: string;
} & {
    /** Icon for icon badge. */
    badgeIcon: IIcon;
    /** Only available if badgeIcon is set. Icons can be styled as outline, featuring hollow designs that
     *  emphasize contours, or solid, which are filled in. */
    badgeIconVariant?: "solid" | "outline";
} & {
    /** Set an illustration (only available when heading is set). */
    illustration: ReactNode;
    /** Alt text for the illustration (mandatory when you use an illustration). */
    illustrationAltText: string;
    heading: string;
}) | (IBasicProps & {
    /** With this prop, you can insert Icon Links into the right side of your BannerMessage. */
    iconLinks?: ReactNode;
    /** Put Content and Action into a collapsible container. */
    isCollapsible?: boolean;
    /** Set the BannerMessage initially open (only possible when isCollapsible prop is set to true). */
    isOpen?: boolean;
    /** Makes the component visible if set to true. */
    isVisible?: boolean;
    /** Set the badge color. */
    badgeColor?: "primary" | "highlight" | "supplementary" | "optional" | "inactive" | "error" | "success" | "alert";
    role?: "status" | "alert";
    /** Set this prop to "aside" to render the 'aside' HTML tag. This is used for BannerMessages
     *  with no important information. */
    as?: "div" | "aside";
} & {
    /** BannerMessage headline text. */
    heading: string;
    /** Headline size (only available when heading is set). */
    headlineSize?: "h5" | "h6";
    /** HTML tag that is rendered for the headline text (only available when heading is set). E.g.
     *  "h4", "h5", "strong", "b". For further information on which one to choose, see e.g.
     *  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong. */
    headlineAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "strong" | string;
    /** Add overline text to the headline (only available when heading is set). */
    overline?: string;
    /** Add subline text to the headline (only available when heading is set). */
    subline?: string;
    /** Show a large icon badge (only available when heading is set). */
    showLargeIconBadge?: boolean;
    /** Set a badge text to the headline (only available when heading is set). */
    badgeText?: string;
} & {
    badgeIcon?: undefined;
    badgeIconVariant?: never;
} & {
    illustration?: undefined;
}) | (IBasicProps & {
    /** With this prop, you can insert Icon Links into the right side of your BannerMessage. */
    iconLinks?: ReactNode;
    /** Put Content and Action into a collapsible container. */
    isCollapsible?: boolean;
    /** Set the BannerMessage initially open (only possible when isCollapsible prop is set to true). */
    isOpen?: boolean;
    /** Makes the component visible if set to true. */
    isVisible?: boolean;
    /** Set the badge color. */
    badgeColor?: "primary" | "highlight" | "supplementary" | "optional" | "inactive" | "error" | "success" | "alert";
    role?: "status" | "alert";
    /** Set this prop to "aside" to render the 'aside' HTML tag. This is used for BannerMessages
     *  with no important information. */
    as?: "div" | "aside";
} & {
    /** BannerMessage headline text. */
    heading: string;
    /** Headline size (only available when heading is set). */
    headlineSize?: "h5" | "h6";
    /** HTML tag that is rendered for the headline text (only available when heading is set). E.g.
     *  "h4", "h5", "strong", "b". For further information on which one to choose, see e.g.
     *  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong. */
    headlineAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "strong" | string;
    /** Add overline text to the headline (only available when heading is set). */
    overline?: string;
    /** Add subline text to the headline (only available when heading is set). */
    subline?: string;
    /** Show a large icon badge (only available when heading is set). */
    showLargeIconBadge?: boolean;
    /** Set a badge text to the headline (only available when heading is set). */
    badgeText?: string;
} & {
    badgeIcon?: undefined;
    badgeIconVariant?: never;
} & {
    /** Set an illustration (only available when heading is set). */
    illustration: ReactNode;
    /** Alt text for the illustration (mandatory when you use an illustration). */
    illustrationAltText: string;
    heading: string;
}) | (IBasicProps & {
    /** With this prop, you can insert Icon Links into the right side of your BannerMessage. */
    iconLinks?: ReactNode;
    /** Put Content and Action into a collapsible container. */
    isCollapsible?: boolean;
    /** Set the BannerMessage initially open (only possible when isCollapsible prop is set to true). */
    isOpen?: boolean;
    /** Makes the component visible if set to true. */
    isVisible?: boolean;
    /** Set the badge color. */
    badgeColor?: "primary" | "highlight" | "supplementary" | "optional" | "inactive" | "error" | "success" | "alert";
    role?: "status" | "alert";
    /** Set this prop to "aside" to render the 'aside' HTML tag. This is used for BannerMessages
     *  with no important information. */
    as?: "div" | "aside";
} & {
    heading?: undefined;
    headlineSize?: never;
    headlineAs?: never;
    overline?: never;
    subline?: never;
    showLargeIconBadge?: never;
    badgeText?: never;
} & {
    /** Icon for icon badge. */
    badgeIcon: IIcon;
    /** Only available if badgeIcon is set. Icons can be styled as outline, featuring hollow designs that
     *  emphasize contours, or solid, which are filled in. */
    badgeIconVariant?: "solid" | "outline";
} & {
    illustration?: undefined;
}) | (IBasicProps & {
    /** With this prop, you can insert Icon Links into the right side of your BannerMessage. */
    iconLinks?: ReactNode;
    /** Put Content and Action into a collapsible container. */
    isCollapsible?: boolean;
    /** Set the BannerMessage initially open (only possible when isCollapsible prop is set to true). */
    isOpen?: boolean;
    /** Makes the component visible if set to true. */
    isVisible?: boolean;
    /** Set the badge color. */
    badgeColor?: "primary" | "highlight" | "supplementary" | "optional" | "inactive" | "error" | "success" | "alert";
    role?: "status" | "alert";
    /** Set this prop to "aside" to render the 'aside' HTML tag. This is used for BannerMessages
     *  with no important information. */
    as?: "div" | "aside";
} & {
    heading?: undefined;
    headlineSize?: never;
    headlineAs?: never;
    overline?: never;
    subline?: never;
    showLargeIconBadge?: never;
    badgeText?: never;
} & {
    badgeIcon?: undefined;
    badgeIconVariant?: never;
} & {
    illustration?: undefined;
})) & React$1.RefAttributes<IBannerMessageRef>>;

type BarChartXValue = string;
type BarChartYValue = number;
type BarChartFormatterFn<T> = (entry: T) => string;
interface IBarChartLegend {
    items: IBarChartLegendItem[];
}
interface IBarChartLegendItem {
    style: string;
    label: ReactNode;
}
interface IBarChartInfoArea {
    items: IBarChartInfoAreaItem[];
}
interface IBarChartInfoAreaItem {
    overline: ReactNode;
    value: ReactNode;
    variant?: "positive" | "negative";
}
interface IBarChartDataPoint {
    x: BarChartXValue;
    y: BarChartYValue;
}
interface IBarChartItem {
    dataPoints: IBarChartDataPoint[];
}
interface IBarChartAxis<T> {
    display?: "none";
    steps?: T;
    min?: T;
    max?: T;
    tickValues?: T[];
    tickFormatter?: BarChartFormatterFn<T>;
}
interface IBarChartAxisOptions {
    columnGrid?: "solid" | "dashed" | "none";
    rowGrid?: "dashed" | "none";
    xAxis?: Omit<IBarChartAxis<BarChartXValue>, "display">;
    yAxis?: IBarChartAxis<BarChartYValue>;
}
interface IBarsOptions {
    style?: string[];
    separator?: number[];
    highlight?: number;
    highlightStyle?: "positive" | "negative";
    interactive?: boolean;
}

interface IBarChartProps extends IBasicProps {
    /** Set of values displayed by bars */
    bars: IBarChartItem[];
    /** Configuration of individual bars */
    barsOptions?: IBarsOptions;
    /** Axes settings (x + y) */
    barChartAxisOptions?: IBarChartAxisOptions;
    /** Sets the bar chart to interactive or static */
    interactive?: boolean;
    /** Content of the bar chart info area */
    infoArea?: IBarChartInfoArea;
    /** Content of the bar chart legend */
    legendItems?: IBarChartLegend;
    /** Bar index on bar hover */
    onBarHover?: (barIndex: number, event: React$1.SyntheticEvent<HTMLElement>) => void;
    /** Adapt height to parent element */
    responsiveHeight?: boolean;
}
declare const BarChart: {
    ({ ...props }: IBarChartProps): React$1.JSX.Element;
    displayName: string;
};

interface IBarDiagramGroupProps extends IBasicProps {
    /** a11y -relevant: With this description any detailed information can be placed to a bar diagram group for users with a visual impairment.
     It's recommended  to use  */
    ariaDescription?: string;
    /** Set all bars within the current group to the same color  */
    color?: "primary-1" | "primary-2";
    /**  Defines the direction of bar diagrams within a group, default = vertical */
    direction?: "horizontal" | "vertical";
    /** Expand bar items in a row and try to place the given amount as far as there is enough space and the min-width
     *  doesn't become undershot. Only applicable with direction set to "horizontal"  */
    amountItemsInRow?: 2 | 3 | 4;
}
declare const BarDiagramGroup: {
    (props: IBarDiagramGroupProps): React$1.JSX.Element;
    displayName: string;
};

interface IBarDiagramProps extends IBasicProps {
    /** Text on the left side. */
    label: string;
    /** Additional label below the bar */
    labelSubline?: string;
    /** Text on the right side. */
    valueLabel: string;
    /** Additional label below the bar on the right side */
    valueLabelSubline?: string;
    /** Please pass a number between 0 and 100. */
    percent: number;
    /** highlight the BarDiagram value */
    status?: "valid" | "invalid";
    /** Beyond the setting of color in group element the color can be set also on single bar diagram selectively  */
    color?: "primary-1" | "primary-2";
}
declare const BarDiagram: {
    (props: IBarDiagramProps): React$1.JSX.Element;
    displayName: string;
    Group: {
        (props: IBarDiagramGroupProps): React$1.JSX.Element;
        displayName: string;
    };
};

interface IBoxProps extends IBasicProps {
    color?: "colNeutral5" | "colNeutral6" | "colNeutral7" | "colNeutral8" | "colBackground" | "colTextPrimary" | "colTextSupplementary" | "colTextHighlight" | "colActionSecondary" | "colActionSecondaryHover" | "colActionTertiary" | "colActionTertiaryHover" | "colError" | "colWarning" | "colSuccess" | "colActionInactive" | "secondaryAccent1" | "secondaryAccent2";
    colorAll?: "colNeutral1" | "colNeutral2" | "colNeutral3" | "colNeutral4" | "colNeutral5" | "colNeutral6" | "colNeutral7" | "colNeutral8" | "colBackground" | "colBrandPrimary1" | "colTextPrimary" | "colTextSupplementary" | "colTextHighlight" | "colActionSecondary" | "colActionSecondaryHover" | "colActionTertiary" | "colActionTertiaryHover" | "colError" | "colWarning" | "colSuccess" | "colActionInactive" | "secondaryAccent1" | "secondaryAccent2" | "secondaryAccent3" | "secondaryAccent4" | "secondaryAccent5" | "secondaryAccent6";
    colorInscription?: "colNeutral1" | "colNeutral2" | "colNeutral3" | "colNeutral4" | "colNeutral5" | "colNeutral6" | "colNeutral7" | "colNeutral8" | "colBackground" | "colBrandPrimary1" | "colTextPrimary" | "colTextSupplementary" | "colTextHighlight" | "colActionSecondary" | "colActionSecondaryHover" | "colActionTertiary" | "colActionTertiaryHover" | "colError" | "colWarning" | "colSuccess" | "colActionInactive" | "secondaryAccent1" | "secondaryAccent2" | "secondaryAccent3" | "secondaryAccent4" | "secondaryAccent5" | "secondaryAccent6";
    borderColor?: "colNeutral5" | "colFineLine" | "colSeparatorLine" | "colActionOutlineInactive";
    strokeColor?: "colTextPrimary" | "colNeutral5" | "colFineLine" | "colSeparatorLine" | "colActionOutlineInactive";
    backgroundColor?: "colBackground" | "colBackgroundHover";
    boxShadow?: "01" | "02" | "03";
    style?: React$1.CSSProperties;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React$1.HTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
    scrollVertical?: boolean;
    typo?: "1.1" | "1.3" | "2.1" | "2.3" | "3.2" | "3.3" | "4.2" | "4.3" | "5.2" | "5.3" | "6.2" | "6.3" | "7.1" | "7.2" | "7.3" | "8.1" | "8.2" | "8.3" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h1Thin" | "h2Thin" | "h3Thin" | "h4Thin" | "h5Thin" | "h6Thin" | "textLead" | "textSignal" | "textOverline" | "textCopy" | "textCopyStrong" | "textLabelInteractive" | "textInfo" | "textInfoStrong" | "textFootnote" | "textDisclaimer" | "textCaption" | "textLabelSm" | "textHelper" | "textError" | "textBadge" | "textBadgeLarge" | "overlineH2" | "overlineH3";
    visuallyHidden?: boolean;
    themeChildren?: "light" | "dark" | "medium" | "elevated" | "contrast" | "hover" | "brand";
    themeBackground?: "light" | "dark" | "medium" | "elevated" | "contrast" | "hover" | "brand";
    theme?: "light" | "dark" | "medium" | "elevated" | "contrast" | "hover" | "brand";
    as?: keyof React$1.JSX.IntrinsicElements | string;
}
declare const Box: ({ id, className, as, children, color, colorAll, colorInscription, backgroundColor, borderColor, strokeColor, boxShadow, scrollVertical, theme, themeBackground, themeChildren, visuallyHidden, typo, style, htmlAttrs, }: IBoxProps) => React$1.JSX.Element;

interface IBrandbarProps extends IBasicProps {
    /** Corporate slogan, e.g. "The bank at your side". */
    slogan?: string;
    /** URL of the link (e.g. home page) that will be opened on logo click. */
    href?: string;
    /** Render an alternative action component, e.g. a React Router link. */
    actionAs?: any;
    /** Props for the alternative action component (e.g. a React Router link). */
    actionProps?: any;
    /** @deprecated 09.11.2023 - Use `logoLabel` instead. Alternative text for the logo. */
    logoAlt?: string;
    /** Label for the logo, rendered as `alt`- or `aria-label`-attribute. Use the default values for Commerzbank or
     * custom logos or assign your own.
     * If the logo is a link or a button, an additional action-label can be assigned using `logoHtmlAttrs`. */
    logoLabel?: string;
    /** Image source for a custom logo. */
    logoSrcCustom?: string;
    /** If set to `true` or if you do not provide a `logoHref` or other actions, the logo will be rendered as an image
     * without any interaction. */
    logoDisabled?: boolean;
    /** Additional (action-)HTML attributes can be added here, e.g. target, tabindex or a different aria-label for the
     * link or button element, e.g.: logoHtmlAttrs={{ "aria-label": "My custom action" }} */
    logoHtmlAttrs?: React$1.ButtonHTMLAttributes<HTMLButtonElement> | React$1.AnchorHTMLAttributes<HTMLAnchorElement> | Record<`data-${string}`, string | number | boolean>;
    /** Function to be called on onClick-event. Not called when the logo is disabled. */
    onLogoClick?: (e: React$1.MouseEvent<HTMLElement>, name: string) => void;
}
/** @deprecated 27.11.2024 - Use brandBar props directly from Footer instead. */
declare const Brandbar: {
    ({ logoAlt, logoLabel, ...props }: IBrandbarProps): React$1.JSX.Element;
    displayName: string;
};

interface IBreadCrumbsItemProps extends IButtonBaseProps {
}
declare const BreadCrumbsItem: {
    (props: IBreadCrumbsItemProps): React$1.JSX.Element;
    displayName: string;
};

interface IBreadCrumbsProps extends IBasicProps {
    /**
     * The ARIA label of the Breadcrumbs nav element which can be read by screen readers. Set to be compliant with
     * accessibility demands.
     */
    title?: string;
    /** Whether the Breadcrumbs have a separator line below. You can set this to 'false' for use cases outside a Footer. */
    separatorBottom?: boolean;
    /** Whether the item is visible on all viewports. Per default, the Breadcrumbs are hidden on viewports XS and SM. For use cases e.g. inside a Footer, setting this prop to `true` will avoid hiding. */
    alwaysVisible?: boolean;
}
declare class BreadCrumbs extends React$1.Component<IBreadCrumbsProps> {
    static displayName: string;
    static defaultProps: {
        title: string;
        separatorBottom: boolean;
        alwaysVisible: boolean;
    };
    static Item: {
        (props: IBreadCrumbsItemProps): React$1.JSX.Element;
        displayName: string;
    };
    render(): React$1.JSX.Element;
}

interface ICardsSwitchesCustomItem extends IBasicProps {
    /** Is the Card clickable by the user? This also reflects in its appearance. */
    disabled?: boolean;
    /** Switch the Card to loading mode. It gets disabled and a loading spinner will be shown. */
    loading?: boolean;
    /**  Aligned the whole content to center, default is left */
    centeredLayout?: boolean;
    /**
     * An array of objects like:
     * {
     *   label: string,
     *   name?: string;
     *   href?: string,
     *   children?: INavigationItem[] (an array of objects like this one)
     * }
     * Also, please have a look at Markenportal/Developer Guidelines
     */
    menuNavigationTree?: INavigationItem[];
    /** Prop for placing a picture at the top of the card. The picture will be expanded to the edges of the card. Pass a Picture component here. */
    pictureTop?: ReactNode;
    /** Prop for placing a picture at the bottom of the card. The picture will be expanded to the edges of the card. Pass a Picture component here. */
    pictureBottom?: ReactNode;
    /** Content that is placed below `pictureBottom` and above the `children`. */
    contentTop?: ReactNode;
    /** Content that is placed below the `children` and above `pictureBottom`. */
    contentBottom?: ReactNode;
    /** Custom spacing between the Card Border and the Content */
    spacing?: "large";
    /** Different appearance of the Card border. `"placeholder"` should be used for a click area, where a User can add a new card to a card group. */
    look?: "default" | "placeholder";
    /** Boolean value indicating if switch input is checked */
    value?: boolean;
    /** Boolean value indicating if switch input is invalid */
    invalid?: boolean;
    /** Name of the switch, that will be returned with the onChange callback */
    name?: string;
    /** Function to be called whenever the switch is clicked. Not called when the switch is disabled. */
    onChange?: (value: boolean, name: string, event: React$1.SyntheticEvent<HTMLInputElement>) => void;
    /** Html title attribute */
    title?: string;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    inputHtmlAttrs?: React$1.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
}
declare const CardsSwitchesCustomItem: {
    ({ ...props }: ICardsSwitchesCustomItem): React$1.JSX.Element;
    displayName: string;
};

interface ICardsSwitchesProps extends ICardsProps {
    /** If you render a fieldset or you're using Input Cards like Checkbox/Radio/Switch, you have to set the
     *  'fieldsetLegend' prop. */
    fieldsetLegend?: string;
}
declare const CardsSwitches: {
    ({ itemsPerRow, ...props }: ICardsSwitchesProps): React$1.JSX.Element;
    displayName: string;
    CustomItem: {
        ({ ...props }: ICardsSwitchesCustomItem): React$1.JSX.Element;
        displayName: string;
    };
};

interface ICardsRadiosCustomItem extends IBasicProps {
    /** Is the Card clickable by the user? This also reflects in its appearance. */
    disabled?: boolean;
    /** Switches the Card to loading mode. It gets disabled and a loading spinner will be shown. */
    loading?: boolean;
    /**  Aligns the whole content to center, default is left */
    centeredLayout?: boolean;
    /**
     * An array of objects like:
     * {
     *   label: string,
     *   name?: string;
     *   href?: string,
     *   children?: INavigationItem[] (an array of objects like this one)
     * }
     * Also, please have a look at Markenportal/Developer Guidelines
     */
    menuNavigationTree?: INavigationItem[];
    /** Prop for placing a picture at the top of the card. The picture will be expanded to the edges of the card. Pass a Picture component here. */
    pictureTop?: ReactNode;
    /** Prop for placing a picture at the bottom of the card. The picture will be expanded to the edges of the card. Pass a Picture component here. */
    pictureBottom?: ReactNode;
    /** Content that is placed below `pictureBottom` and above the `children`. */
    contentTop?: ReactNode;
    /** Content that is placed below the `children` and above `pictureBottom`. */
    contentBottom?: ReactNode;
    /** Custom spacing between the Card Border and the Content */
    spacing?: "large";
    /** Different appearance of the Card border. `"placeholder"` should be used for a click area, where a User can add a new card to a card group. */
    look?: "default" | "placeholder";
    /** Boolean value indicating if radio input is checked */
    value?: boolean;
    /** Boolean value indicating if radio input is invalid */
    invalid?: boolean;
    /** Name of the radio, that will be returned with the onChange callback */
    name?: string;
    /** Function to be called whenever the radio is clicked. Not called when the radio is disabled. */
    onChange?: (value: boolean, name: string, event: React$1.SyntheticEvent<HTMLInputElement>) => void;
    /** HTML 'title' attribute */
    title?: string;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    inputHtmlAttrs?: React$1.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
}
declare const CardsRadiosCustomItem: {
    ({ ...props }: ICardsRadiosCustomItem): React$1.JSX.Element;
    displayName: string;
};

interface ICardsRadiosProps extends ICardsProps {
    /** Sets the value of the Cards. */
    value?: string;
    /** Sets the name of the Cards. */
    name?: string;
    /** Called on each value change due to selection of a `CardsCheckboxesItem`, providing the new value. */
    onChange?: (value: string, name: string, event: React$1.SyntheticEvent<HTMLElement>) => void;
    /** If you render a fieldset or you're using Input Cards like Checkbox/Radio/Switch, you have to set the 'fieldsetLegend' prop. */
    fieldsetLegend?: string;
}
declare const CardsRadios: {
    ({ itemsPerRow, ...props }: ICardsRadiosProps): React$1.JSX.Element;
    displayName: string;
    CustomItem: {
        ({ ...props }: ICardsRadiosCustomItem): React$1.JSX.Element;
        displayName: string;
    };
};

interface ICardsCheckboxesCustomItem extends IBasicProps {
    /** Is the Card clickable by the user? This also reflects in its appearance. */
    disabled?: boolean;
    /** Switch the Card to loading mode. It gets disabled and a loading spinner will be shown. */
    loading?: boolean;
    /**  Aligned the whole content to center, default is left */
    centeredLayout?: boolean;
    /**
     * An array of objects like:
     * {
     *   label: string,
     *   name?: string;
     *   href?: string,
     *   children?: INavigationItem[] (an array of objects like this one)
     * }
     * Also, please have a look at Markenportal/Developer Guidelines
     */
    menuNavigationTree?: INavigationItem[];
    /** Prop for placing a picture at the top of the card. The picture will be expanded to the edges of the card. Pass a Picture component here. */
    pictureTop?: ReactNode;
    /** Prop for placing a picture at the bottom of the card. The picture will be expanded to the edges of the card. Pass a Picture component here. */
    pictureBottom?: ReactNode;
    /** Content that is placed below `pictureBottom` and above the `children`. */
    contentTop?: ReactNode;
    /** Content that is placed below the `children` and above `pictureBottom`. */
    contentBottom?: ReactNode;
    /** Custom spacing between the Card Border and the Content */
    spacing?: "large";
    /** Different appearance of the Card border. `"placeholder"` should be used for a click area, where a User can add a new card to a card group. */
    look?: "default" | "placeholder";
    /** Boolean value indicating if checkbox input is checked */
    value?: boolean;
    /** Boolean value indicating if checkbox input is invalid */
    invalid?: boolean;
    /** Name of the checkbox, that will be returned with the onChange callback */
    name?: string;
    /** Function to be called whenever the checkbox is clicked. Not called when the checkbox is disabled. */
    onChange?: (value: boolean, name: string, event: React$1.SyntheticEvent<HTMLInputElement>) => void;
    /** Html title attribute */
    title?: string;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    inputHtmlAttrs?: React$1.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
}
declare const CardsCheckboxesCustomItem: {
    ({ ...props }: ICardsCheckboxesCustomItem): React$1.JSX.Element;
    displayName: string;
};

interface ICardsCheckboxesProps extends ICardsProps {
    /** If you render a fieldset or you're using Input Cards like Checkbox/Radio/Switch, you have to set the 'fieldsetLegend' prop. */
    fieldsetLegend?: string;
}
declare const CardsCheckboxes: {
    ({ itemsPerRow, ...props }: ICardsCheckboxesProps): React$1.JSX.Element;
    displayName: string;
    CustomItem: {
        ({ ...props }: ICardsCheckboxesCustomItem): React$1.JSX.Element;
        displayName: string;
    };
};

interface ICardsCustomItem extends IBasicProps {
    /** Is the Card clickable by the user? This also reflects in its appearance. */
    disabled?: boolean;
    /** Switch the Card to loading mode. It gets disabled and a loading spinner will be shown. */
    loading?: boolean;
    /** Information about loading process */
    loadingText?: string;
    /**  Aligns the whole content to center, default is left */
    centeredLayout?: boolean;
    /** Center content vertically */
    verticalAlign?: "top" | "center";
    /**
     * An array of objects like:
     * {
     *   label: string,
     *   name?: string;
     *   href?: string,
     *   children?: INavigationItem[] (an array of objects like this one)
     * }
     * Also, please have a look at Markenportal/Developer Guidelines
     */
    menuNavigationTree?: INavigationItem[];
    /** Prop for placing a picture at the top of the card. The picture will be expanded to the edges of the card. Pass a Picture component here. */
    pictureTop?: ReactNode;
    /** Prop for placing a picture at the bottom of the card. The picture will be expanded to the edges of the card. Pass a Picture component here. */
    pictureBottom?: ReactNode;
    /** Content that is placed below `pictureBottom` and above the `children`. */
    contentTop?: ReactNode;
    /** Content that is placed below the `children` and above `pictureBottom`. */
    contentBottom?: ReactNode;
    /** Custom spacing between the Card Border and the Content */
    spacing?: "large";
    /** @deprecated: Use appearance instead. Different appearance of the Card border. `"placeholder"` should be used for a click area, where a User can add a new card to a card group. */
    look?: "default" | "placeholder";
    /** Different appearance of the Card border. `"placeholder"` should be used for a click area, where a User can add a new card to a card group. */
    appearance?: "default" | "placeholder";
    /** Size of the Card according to the grid column size. */
    gridColumnSize?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    /** Set the position and amount of card divider lines. */
    divider?: "top" | "bottom" | "both";
}
declare const CardsCustomItem: {
    ({ appearance, look, ...props }: ICardsCustomItem): React$1.JSX.Element;
    displayName: string;
};

interface ICardsProps extends IBasicProps {
    /**  Aligns the whole content to center, default is left */
    centeredLayout?: boolean;
    /** Number of items per row */
    itemsPerRow?: 2 | 3 | 4 | 6;
    /** Whether to render Cards container as an ordered, unordered list. Default is unordered list.
     * If you're using an Input Cards group like Cards.Radios, the property will be ignored and a fieldset will be
     * rendered. */
    as?: "ul" | "ol";
    /** Aria-describedby for a Cards group.
     * Helpful accessibility feature to connect the headline or description text with the Cards group. */
    ariaDescribedby?: string;
}
declare const Cards: {
    ({ itemsPerRow, as, ...props }: ICardsProps): React$1.JSX.Element;
    displayName: string;
    CustomItem: {
        ({ appearance, look, ...props }: ICardsCustomItem): React$1.JSX.Element;
        displayName: string;
    };
    Checkboxes: {
        ({ itemsPerRow, ...props }: ICardsCheckboxesProps): React$1.JSX.Element;
        displayName: string;
        CustomItem: {
            ({ ...props }: ICardsCheckboxesCustomItem): React$1.JSX.Element;
            displayName: string;
        };
    };
    Radios: {
        ({ itemsPerRow, ...props }: ICardsRadiosProps): React$1.JSX.Element;
        displayName: string;
        CustomItem: {
            ({ ...props }: ICardsRadiosCustomItem): React$1.JSX.Element;
            displayName: string;
        };
    };
    Switches: {
        ({ itemsPerRow, ...props }: ICardsSwitchesProps): React$1.JSX.Element;
        displayName: string;
        CustomItem: {
            ({ ...props }: ICardsSwitchesCustomItem): React$1.JSX.Element;
            displayName: string;
        };
    };
};

interface IRadioGroupProps extends IInputGroupProps {
    /** Sets the value of the Radio. */
    value?: string;
    /** You can set the internal name attribute for the 'input type="radio"' HTML child elements with this prop. Several
     * radios with the same name will be grouped together. For more usage information, see
     *  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio. */
    name?: string;
    /** Is called on every change and passes the new value and the name of the component. */
    onChange?: (value: any, name: string, event: React$1.SyntheticEvent<HTMLElement>) => void;
}
declare const RadioGroup: {
    (props: IRadioGroupProps): React$1.JSX.Element;
    displayName: string;
};

interface IInputGroupProps extends IBasicProps {
    /** Layout of the inputs, vertical or horizontal */
    direction?: "vertical" | "horizontal";
    /** You can set a small title text for the whole group above your first item with
     *  this prop. Using this prop also internally sets the aria-labelledby attribute. As a result, your label prop
     *  value will be linked to the fieldset HTML element of the group by aria-labelledby. (However, setting an
     *  additional aria-labelledby in the htmlAttrs prop of your group will overwrite the aria-labelledby set by
     your label prop.) */
    label?: string;
    /** Sets a helper text below the component. */
    helperText?: string;
    /** Adds an error text below the component. If you use this prop, the errorText is added below the helperText (if defined), and the group is implicitly set to invalid. */
    errorText?: string;
    /** Indicates if this group is valid */
    invalid?: boolean;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React$1.HTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
}
declare const InputGroup: {
    ({ children, invalid, ...otherProps }: IInputGroupProps): React$1.JSX.Element;
    Radio: {
        (props: IRadioGroupProps): React$1.JSX.Element;
        displayName: string;
    };
    displayName: string;
};

interface ICheckboxGroupProps extends IInputGroupProps {
}

interface ICheckboxProps extends IBasicProps {
    /** Setting the value to true/false will check/uncheck the Checkbox. Setting the value to undefined will
     generate the indeterminate look of the Checkbox (which is not meant to be activated by a user clicking on or
     pressing the Space key on a Checkbox). For information about indeterminate use cases,
     please see https://css-tricks.com/indeterminate-checkboxes/ and
     https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox. */
    value?: boolean;
    /** Boolean value indicating if Checkbox input is disabled */
    disabled?: boolean;
    /** Boolean value indicating if Checkbox input is invalid */
    invalid?: boolean;
    /** Text on the right side of the Checkbox */
    label?: string;
    /** You can set the internal name attribute for a Checkbox with this prop. Several checkboxes with the same name
     *  will be grouped together. For more usage information, see
     *  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox. */
    name?: string;
    /** A small helper text that is placed below the label.  */
    helperText?: ReactNode;
    /** Error text below the label. If you set this prop, the Checkbox is turned to invalid, even if the invalid
     *  prop is false.  */
    errorText?: ReactNode;
    /** Function to be called whenever the checkbox is clicked. Not called when the checkbox is disabled. */
    onChange?: (value: boolean, name: string, event: React$1.SyntheticEvent<HTMLInputElement>) => void;
    /** HTML 'title' attribute */
    title?: string;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React$1.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    /** Use this prop to control if the aria-live attribute is set for the errorText */
    errorTextAriaLive?: boolean;
}
declare const Checkbox: {
    (props: ICheckboxProps): React$1.JSX.Element;
    displayName: string;
    Group: {
        (props: ICheckboxGroupProps): React$1.JSX.Element;
        displayName: string;
    };
};

interface IChipsItemBaseProps$2 {
    /** Chip label */
    label: string;
    /** Do not show the label. Screen-reader have the possibility to receive the information */
    appearance?: "left" | "right" | "no-text";
    /** Name of the component, can be used in onClick handler */
    name?: string;
    /** Renders the native HTML Tag of the outer Container of a ChipsItem. Default is "li" in a Group. */
    as?: "div" | "li";
    /** Shows a Badge. Badge Text is Part of the Chip's label. */
    badgeText?: string;
    /** Icon in Badge. */
    icon?: IIcon;
    /** Pass one of the icon presets defined to change the icon's appearance */
    iconVariant?: "outline" | "solid";
}
interface IChipsItemActionProps extends IChipsItemBaseProps$2, Omit<IButtonBaseProps, "disabled" | "a11yMeaningfulLabel" | "nonInteractive" | "as"> {
    onClick?: (event: React__default.MouseEvent<HTMLElement>, name: string) => void;
    /**
     * Provides for support of e.g. React Router links, see Button examples
     * */
    actionAs?: any;
    /**
     * Provides for support of e.g. React Router links, see Button examples
     * */
    actionProps?: any;
    /** Change appearance of the ChipItemAction to have a darker background color, for example
     * in a use case where the chip shows that there are filters active that can be removed by clicking on the chip.
     *  Activates clear icon (if you don't need this, set the prop clearIcon to false). */
    isSelected?: boolean;
    /** If ChipItemAction has an active selection, the selection has to be removable. */
    onResetFilter?: () => void;
    /** If clearIcon is true, an "x" icon is displayed, similar to ChipsItemDismissable.
     * A click on the icon calls the onResetFilter callback. */
    clearIcon?: boolean;
}
declare const ChipsItemAction: React__default.ForwardRefExoticComponent<IChipsItemActionProps & React__default.RefAttributes<HTMLElement>>;

interface IChipsItemCheckboxProps extends IChipsItemBaseProps$2, IBasicProps {
    /** Is Chip selected */
    value?: boolean;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React$1.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    /** Function to be called whenever the checkbox is clicked. */
    onChange?: (value: boolean, name: string, event: React$1.SyntheticEvent<HTMLInputElement>) => void;
}
declare const ChipsItemCheckbox: React$1.ForwardRefExoticComponent<IChipsItemCheckboxProps & React$1.RefAttributes<HTMLInputElement>>;

interface IChipsCheckboxesProps extends IChipsBaseProps, IBasicProps {
    /** The inline variant enforces the display in a single line, inline-scroll provides a scroll container for mobile viewports */
    direction?: "wrap" | "scroll";
    /** Renders Chips Container in different native HTML tags. Just set if necessary. <fieldset> is and should be default for Checkbox and RadioGroup. */
    as?: "ul" | "ol" | "div" | "fieldset";
}
declare const ChipsCheckboxes: {
    ({ direction, as, ...props }: IChipsCheckboxesProps): React$1.JSX.Element;
    displayName: string;
    Item: React$1.ForwardRefExoticComponent<IChipsItemCheckboxProps & React$1.RefAttributes<HTMLInputElement>>;
};

interface IChipsItemRadioProps extends IChipsItemBaseProps$2, IBasicProps {
    /** Is Chip selected */
    value?: boolean;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React$1.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    /** Function to be called whenever the checkbox is clicked. */
    onChange?: (value: boolean, name: string, event: React$1.SyntheticEvent<HTMLInputElement>) => void;
}
declare const ChipsItemRadio: React$1.ForwardRefExoticComponent<IChipsItemRadioProps & React$1.RefAttributes<HTMLInputElement>>;

interface IChipsRadiosProps extends IChipsBaseProps, IBasicProps {
    /** @deprecated - Use direction instead. [March 2024] */
    look?: "wrap" | "scroll";
    /** @deprecated - Use direction instead. [March 2024] */
    radioGroupLook?: "default" | "condensed";
    /**
     * Controls the layout and behavior of the Radio Chips group:
     * - "wrap": Chips wrap automatically to another line when space runs out.
     * - "scroll": Chips are displayed in a single horizontal line with a scroll container for overflow, ideal for mobile viewports.
     * - "condensed": Chips are grouped together within a border with no gap between items, displayed in a horizontal scrollable container.
     */
    direction?: "wrap" | "scroll" | "condensed";
    /** Sets the value of the input. */
    value?: string;
    /** Sets the name of the input. */
    name?: string;
    /** Is called on every text change and passes the new value and the id of the component. */
    onChange?: (value: string, name: string, event: React$1.SyntheticEvent<HTMLElement>) => void;
    /** Renders Chips container in different native HTML tags. Just set if necessary. <fieldset> is and should be default for Checkbox and RadioGroup. */
    as?: "ul" | "ol" | "div" | "fieldset";
}
declare const ChipsRadios: {
    ({ direction, as, groupLabel, ...props }: IChipsRadiosProps): React$1.JSX.Element;
    displayName: string;
    Item: React$1.ForwardRefExoticComponent<IChipsItemRadioProps & React$1.RefAttributes<HTMLInputElement>>;
};

interface IChipsBaseProps {
    /** Chips group label */
    groupLabel: string;
    /** Visually Hidden Chips group label */
    appearance?: "default" | "no-text";
}
interface IChipsProps extends IChipsBaseProps, IBasicProps {
    /** The inline variant enforces the display in a single line, inline-scroll provides a scroll container for mobile viewports */
    direction?: "wrap" | "scroll";
    /** @deprecated - Use direction instead. [March 2024] */
    look?: "wrap" | "scroll";
    /** whether to render chips as an ordered (`<ol>`) or unordered (`<ul>`) list */
    as?: "ul" | "ol" | "div";
    /** Callback for keyboard focus handling, if focus get lost */
    onFocusLoss: () => void;
}
declare const Chips: {
    ({ as, direction, appearance, groupLabel, ...props }: IChipsProps): React$1.JSX.Element;
    displayName: string;
    Radios: {
        ({ direction, as, groupLabel, ...props }: IChipsRadiosProps): React$1.JSX.Element;
        displayName: string;
        Item: React$1.ForwardRefExoticComponent<IChipsItemRadioProps & React$1.RefAttributes<HTMLInputElement>>;
    };
    RadioItem: React$1.ForwardRefExoticComponent<IChipsItemRadioProps & React$1.RefAttributes<HTMLInputElement>>;
    Checkboxes: {
        ({ direction, as, ...props }: IChipsCheckboxesProps): React$1.JSX.Element;
        displayName: string;
        Item: React$1.ForwardRefExoticComponent<IChipsItemCheckboxProps & React$1.RefAttributes<HTMLInputElement>>;
    };
    CheckboxItem: React$1.ForwardRefExoticComponent<IChipsItemCheckboxProps & React$1.RefAttributes<HTMLInputElement>>;
};

interface IChipsDatePickerProps extends Omit<IChipsItemActionProps, "onBlur" | "onFocus"> {
    /** Is called on blur. */
    onBlur?: (event: React$1.FocusEvent<HTMLElement> | FocusEvent, name: string) => void;
    /** Is called on focus. */
    onFocus?: (event: React$1.FocusEvent<HTMLElement>, name: string) => void;
    /** Is called on every text change and passes the new value and the id of the component. */
    onChange?: (value: Date | string, name: string) => void;
    /** Setting this prop to "month" will show a "monthpicker" */
    datepickerFormat?: "day" | "month";
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React$1.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    /** Sets the value of the input. */
    value: Date | string;
    /** If clearIcon is true, an X-icon is displayed for non-empty/selected fields on focus and hover, in order to reset
     *  a selection. A click will call the 'onChange' method -> with an empty string - default is "true". */
    clearIcon?: boolean;
    /** Sets the 'name'-attribute of the input. */
    name?: string;
    /** Date Object with the earliest date that can be selected. The minimum date is included in the selectable range.
     * Ensure, that minDate <= maxDate. Only year, month and day information are used, the time information is ignored.
     */
    minDate?: Date;
    /** Date Object with the latest date that can be selected. The maximum date is included in the selectable range.
     * Ensure, that minDate <= maxDate. Only year, month and day information are used, the time information is ignored.
     */
    maxDate?: Date;
    /** Set the disabledDates list which contains e.g. the business holiday days.
     * Days contained in the list will be displayed disabled in the dropdown widget
     */
    disabledDates?: Date[];
    /** Weekends are enabled by default
     *  Disable sunday and saturday in the dropdown widget by setting the prop weekendsDisabled to true.
     */
    weekendsDisabled?: boolean;
    /**
     * Only dates that are contained in the list will be enabled in the dropdown widget.
     * Note: Some of these dates can be ruled out by the maxDate, minDate, weekendsDisabled rules.
     */
    selectableDates?: Date[];
}
declare const ChipsDatePicker: {
    ({ label, isSelected, onResetFilter, ...props }: IChipsDatePickerProps): React$1.JSX.Element;
    displayName: string;
};

interface IChipsItemBaseProps$1 {
    /** Chip label */
    label: string;
    /** Do not show the label. Screen-reader have the possibility to receive the information */
    appearance?: "left" | "right" | "no-text";
    /** Name of the component, can be used in onClick handler */
    name?: string;
    /** Renders the native HTML Tag of the outer Container of a ChipsItem. Default is "li" in a Group. */
    as?: "div" | "li";
    /** Shows a Badge. Badge Text is Part of the Chip's label. */
    badgeText?: string;
    /** Icon in Badge. */
    icon?: IIcon;
    /** Pass one of the icon presets defined to change the icon's appearance */
    iconVariant?: "outline" | "solid";
}
interface IChipsItemDismissibleProps extends IChipsItemBaseProps$1 {
    /** Click-Event to remove the filter chip */
    onDismiss?: (event: React__default.MouseEvent<HTMLElement>, name: string) => void;
    /** Callback function to save the keyboard focus after dismiss event. */
    onFocusLoss?: () => void;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React__default.ButtonHTMLAttributes<HTMLButtonElement> | Record<`data-${string}`, string | number | boolean>;
}
declare const ChipsItemDismissible: React__default.ForwardRefExoticComponent<IChipsItemDismissibleProps & React__default.RefAttributes<HTMLElement>>;

interface IChipsItemBaseProps extends IBasicProps {
    /** Chip label */
    label?: string;
    /** @deprecated 20.03.24: Change implementation to conditional rendering. Use other ChipItem types. */
    isHidden?: boolean;
    /** Is Chip selected */
    isSelected?: boolean;
    /** Function to be called on click event. Not called when the Chip is disabled. */
    onClick?: (e: React__default.MouseEvent<HTMLElement>, name: string) => void;
    /** Name of the HTML tag that is rendered for the outer div. Defaults to "li" if used inside a group with more than one item, or a group that is set to "ul" or "ol". To change the tag of the button, use the `actionAs` prop. */
    as?: keyof JSX$1.IntrinsicElements;
}

interface IOptions {
    label: string;
    disabled?: boolean;
    value: string;
}
interface ISelectProps extends IBasicProps {
    /** Sets a helper text below the component. */
    helperText?: string;
    /** Adds an error text below the component. If you use this prop, the errorText is added below the helperText (if
     *  defined), and the component is implicitly set to invalid. */
    errorText?: string;
    /** Sets text field and style to disabled. For now, it does not have an effect on the chip-variant. */
    disabled?: boolean;
    /** Sets text field and style to 'error'. 'errorText' becomes visible if set. */
    invalid?: boolean;
    /** Sets the label text (required). */
    label: string;
    /** Is called on blur. */
    onBlur?: (event: React$1.FocusEvent<HTMLElement>, name: string) => void;
    /** Is called on focus. */
    onFocus?: (event: React$1.FocusEvent<HTMLElement>, name: string) => void;
    /** Is called on every text change and passes the new value and the id of the component. */
    onChange?: (value: string, name: string, event: React$1.SyntheticEvent<HTMLElement>) => void;
    /** @deprecated: Triggered on key press. */
    onKeyDown?: (key: string, name: string, event: React$1.KeyboardEvent<HTMLElement>) => void;
    /** @deprecated: Is called on click on the icon set by 'iconName' and passes the id of the component. */
    onIconClick?: (event: React$1.MouseEvent<HTMLElement>, name: string) => void;
    /** Sets the placeholder text (visible on a focused input with empty value). */
    placeholder?: string;
    /** Sets the text field and style to read-only. */
    readOnly?: boolean;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React$1.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    /** Sets the value of the input. */
    value: string;
    /** Sets the 'name' attribute of the 'input' HTML element. */
    name?: string;
    /** If set to "true", the text en/de "(optional)"/"(Optional)" is appended to the label.
     *  You can also pass in a predefined string. */
    optional?: boolean | string;
    /** An array with the selectable options (see example) */
    options?: IOptions[];
    /** If clearIcon is true, an X-icon is displayed for non-empty/selected fields on focus and hover, in order to reset
     *  a selection. A click will call the 'onChange' method -> with an empty string - default is "true". */
    clearIcon?: boolean;
    /** If enabled, a search text can be entered in the input area. The appropriate entry is focused in the flyout list
     *  that opens below the text input. */
    withTextInput?: boolean;
    /** A label that is shown as a placeholder in the flyout list when the options are empty. */
    emptyListLabel?: string;
    /** Sets the algorithm for the search functionality */
    searchFunction?: "startsWith" | "everywhere" | "startOfWord";
    /** Use this prop to control if the aria-live attribute is set for the errorText */
    errorTextAriaLive?: boolean;
    /** With spacing="dense", the text input whitespace of the Select is reduced by smaller paddings and bottom-margins.
     * Set spacing="default" only in special FormContainer with spacing="dense" prop (edge) cases where you wish to override the "dense" spacing
     *   in an individual Select. In this case, the Select will receive its default whitespace within the FormContainer. */
    spacing?: "default" | "dense";
}
declare const Select: {
    ({ onKeyDown: _, readOnly, ...props }: ISelectProps): React$1.JSX.Element;
    displayName: string;
};

interface IChipsSelectProps extends Omit<IChipsItemBaseProps, "onClick" | "label"> {
    /** Chip Select label to describe the selection category. */
    label: string;
    /** Is called if user triggers selection for select option items. */
    onChange?: (value: string, name: string, event: React$1.SyntheticEvent<HTMLElement>) => void;
    /** @deprecated 20.03.24: Select Chip does not provide a disabled state */
    disabled?: boolean;
    /** Actual selected option of the select chip. */
    value: string;
    /** If clearIcon is true, an X-icon is displayed for non-empty/selected fields on focus and hover, in order to reset
     *  a selection. A click will call the 'onChange' method -> with an empty string - default is "true". */
    clearIcon?: boolean;
    /** Sets the 'name'-attribute of the input. */
    options?: IOptions[];
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React$1.InputHTMLAttributes<HTMLInputElement> | React$1.HTMLAttributes<HTMLDivElement> | Record<`data-${string}`, string | number | boolean>;
}
declare const ChipsSelect: {
    ({ isSelected, clearIcon, isHidden, ...props }: IChipsSelectProps): React$1.JSX.Element;
    displayName: string;
};

interface ICircleIconLinkProps extends IButtonBaseProps {
    /** The icon displayed within the IconLink (e.g. icon={communication___call}) */
    icon: any;
    /** Defines the text that is shown next to the Icon. It will be read by screen readers. */
    label: React$1.ReactNode;
    /** Description text below the label.  */
    helper?: string;
    /** @deprecated Use color instead. */
    look?: "primary" | "secondary";
    /** Set the background color primary (filled), secondary (not filled) */
    color?: "primary" | "secondary";
    /**
     * One of the presets defined in {Icon.Variants -> SOLID or OUTLINE}.
     * Have a look at the Icon component description for further information and visual examples.
     */
    iconVariant?: "outline" | "solid";
    /** Switch between left and centered layout. */
    centeredLayout?: boolean;
}
declare const CircleIconLink: {
    ({ color, look, disabled, centeredLayout, iconVariant, refCallback, ...props }: ICircleIconLinkProps): React$1.JSX.Element;
    displayName: string;
};

interface IClickListItemBaseProps extends IBasicProps {
    /** First line text for your item. It has to be mandatory for screen readers. If a thumbnail icon is set, the
     *  'headline' prop also describes it. */
    headline: string;
    /** HTML tag rendered for the surrounding tag (in some cases further out) of your first line text.
     * Set to "strong" by default for the directly-surrounding text tag of ClickList.Multiactions.Item and of a
     *  ClickList with 'linkIcon' prop (overwritable by e.g. "p", "h5"). */
    headlineAs?: string;
    /** If set, a subline will be rendered */
    subline?: string;
    /** An alternative HTML tag for the subline */
    sublineAs?: string;
    /** This prop illustrates the current status with a coloured, small dot. The status value
     *  "inactive" will show a dot in the colour of the surrounding Theme, the value "success" will show a green dot,
     *  "warning" an orange dot, and "error" a red dot. */
    statusColor?: "inactive" | "success" | "warning" | "error";
    /** This prop sets the status tag (label), which will be read by screen readers */
    statusTag?: string;
    /** Thumbnail icon */
    thumbIcon?: IIcon;
    /** Style variant for the thumbnail icon. Icons can be styled as outline, featuring hollow designs that emphasize
     *  contours, or solid, which are filled in. */
    thumbIconVariant?: "outline" | "solid";
    /** You can set a title for your thumbnail icon with this prop. */
    thumbIconTitle?: string;
    /** Text that should be placed inside the circle */
    thumbText?: string;
    /** Source for the thumbnail image */
    thumbImgSrc?: string;
}
interface IClickListItemProps extends IClickListItemBaseProps {
    /** Icon */
    linkIcon?: IIcon;
    /** Sets an additional small icon as a status indicator. */
    statusIndicatorIcon?: IIcon;
    /** Will specify if the link label is shown. */
    showLinkLabel?: boolean;
    /** Icon text */
    linkLabel?: string;
    /** Is the item clickable by the user? This will also affect its appearance. */
    disabled?: boolean;
    /** onClick mouse event */
    onClick?: (e: React$1.MouseEvent<HTMLElement>, name: string) => void;
    /** If you insert an href prop, an `a` tag will be rendered */
    href?: string;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React$1.ButtonHTMLAttributes<HTMLButtonElement> | React$1.AnchorHTMLAttributes<HTMLAnchorElement> | Record<`data-${string}`, string | number | boolean>;
    /** Display a badge component in the TwoLineItem by adding a badge text. */
    badgeText?: string;
    /** Display a badge component in the TwoLineItem by adding a badge icon. */
    badgeIcon?: IIcon;
    /** Badge icons can be styled as outline, featuring hollow designs that emphasize contours, or solid, which are
     *  filled in. */
    badgeIconVariant?: "solid" | "outline";
    /** Describe the Badge Content or add context to the badge message which will be read by screen readers */
    badgeScreenReaderLabel?: string;
    /**
     * Render an alternative action component, e.g. a React Router link instead of an <a> or <button> tag
     * Example: <ClickListItem actionAs={ReactRouterLink} actionProps={{to: "/mypage"}} ...
     */
    actionAs?: any;
    /** These are the props for the alternative action component (e.g. a React Router link) */
    actionProps?: any;
    /** @deprecated: Use badgeColor instead. Badge color  */
    badgeLook?: "primary" | "highlight" | "supplementary" | "error" | "success" | "alert";
    /** This prop sets the colour of the Badge. Please see our https://markenportal.commerzbank.com/styleguide/badge/index.html site for the
     *  generated colour effects.  */
    badgeColor?: "primary" | "highlight" | "supplementary" | "error" | "success" | "alert";
    /** Switch the item to loading mode. It will be disabled and a loading spinner will be shown. */
    loading?: boolean;
    /** This prop is used to provide an ARIA label for the Spinner component to inform screen reader users about the current status of processes.
     If not set, a fixed text ("Loading"/"Laden...") will be read by screen readers. Note that this text (also visible beneath the Spinner circle with reduced-motion browser settings)
     cannot be modified to avoid potential UX issues caused by too long text. */
    loadingAriaLabel?: string;
}
declare const ClickListItem: {
    ({ badgeColor, badgeLook, badgeIconVariant, showLinkLabel, linkIcon, headlineAs, ...props }: IClickListItemProps): React$1.JSX.Element;
    displayName: string;
};

interface IClickListMultiActionItemProps extends Omit<IClickListItemProps, "href" | "onClick" | "linkIcon" | "showLinkLabel" | "actionAs" | "actionProps"> {
    /** clickable multi actions with IconLinkGroup only - it suppresses default single click behaviour of item element */
    actions?: ReactNode;
    headlineAs?: keyof React$1.JSX.IntrinsicElements;
}
declare const ClickListMultiActionsItem: {
    ({ ...props }: IClickListMultiActionItemProps): React$1.JSX.Element;
    displayName: string;
};

interface IClickListMultiActionsProps extends IClickListProps {
}
declare const ClickListMultiActions: {
    (props: IClickListMultiActionsProps): React$1.JSX.Element;
    displayName: string;
    Item: {
        ({ ...props }: IClickListMultiActionItemProps): React$1.JSX.Element;
        displayName: string;
    };
};

interface IClicklistSelectableItemProps extends IClickListItemProps {
    /** Sets the 'name'-attribute of the input. */
    name?: string;
    /** If you implemented a Checkbox, setting the value to true/false will check/uncheck the Checkbox.
     *  Setting the value to undefined will generate the indeterminate look of the Checkbox (which is not meant to
     *  be activated by a user clicking on or
     pressing the Space key on a Checkbox). For information about indeterminate use cases,
     please see https://css-tricks.com/indeterminate-checkboxes/ and
     https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox. WARNING: The `ClickListRadios` parent
     will override this prop. */
    value?: boolean;
}
interface IClickListCheckboxesItemProps extends IClicklistSelectableItemProps {
    /** Change handler of the item. WARNING: The `ClickListRadios` parent will override this prop. */
    onChange?: (value: boolean, name: string, event: React$1.SyntheticEvent<HTMLInputElement>) => void;
    /** This prop can be used for a validation process, i.e. when an option should be set or not */
    invalid?: boolean;
}
declare const ClickListCheckboxesItem: {
    (props: IClickListCheckboxesItemProps): React$1.JSX.Element;
    displayName: string;
};

interface IClickListCheckboxProps extends IClickListProps {
    /** Set error text for whole click list checkbox type in conjunction with validation */
    errorText?: string;
    /** Prop can be used as central prop on validation process in opposite to set invalid selectively on every item, if any value is mandatory */
    invalid?: boolean;
    /** onBlur will be thrown when the whole component lose the focus */
    onBlur?: (event: React$1.SyntheticEvent<HTMLElement>) => void;
}
declare const ClickListCheckboxes: {
    (props: IClickListCheckboxProps): React$1.JSX.Element;
    displayName: string;
    Item: {
        (props: IClickListCheckboxesItemProps): React$1.JSX.Element;
        displayName: string;
    };
};

interface IClickListRadiosItemProps extends IClicklistSelectableItemProps {
    /** Change handler of the item. WARNING: `ClickListRadios` parent will override this property. */
    onChange?: (value: boolean, name: string, event: React$1.SyntheticEvent<HTMLInputElement>) => void;
}
declare const ClickListRadiosItem: {
    ({ showLinkLabel, ...props }: IClickListRadiosItemProps): React$1.JSX.Element;
    displayName: string;
};

interface IClickListRadiosProps extends IClickListProps {
    /** Sets the value of the ClickList. */
    value?: string;
    /** Sets the name of the ClickList. */
    name?: string;
    /** Called on each value change due to selection of a selectable item within the click list, providing the new value. */
    onChange?: (value: string, name: string, event: React$1.SyntheticEvent<HTMLElement>) => void;
    /** onBlur will be thrown when the whole component lose the focus */
    onBlur?: (event: React$1.SyntheticEvent<HTMLElement>) => void;
    /** Prop can be used as central prop on validation process in opposite to set invalid selectively on every item, if any value is mandatory */
    invalid?: boolean;
    /** Prop can be used on validation process with providing error text below the list */
    errorText?: string;
}
declare const ClickListRadios: {
    (props: IClickListRadiosProps): React$1.JSX.Element;
    displayName: string;
    Item: {
        ({ showLinkLabel, ...props }: IClickListRadiosItemProps): React$1.JSX.Element;
        displayName: string;
    };
};

interface IClickListProps extends IBasicProps {
    /** Spacing between the click list content and the border of a row */
    spacing?: "dense" | "narrow" | "standard";
    /** You can set a small text for the whole ClickList above your first ClickList.Item with this prop. Using this
     *  prop also internally sets the aria-labelledby attribute. As a result, your label prop value will be linked to
     *  the ClickList HTML element by aria-labelledby. (This will also overwrite any additional aria-labelledby if
     *  you set one in the htmlAttrs prop of your ClickList.) */
    label?: string;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React$1.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
}
declare const ClickList: {
    (props: IClickListProps): React$1.JSX.Element;
    displayName: string;
    Item: {
        ({ badgeColor, badgeLook, badgeIconVariant, showLinkLabel, linkIcon, headlineAs, ...props }: IClickListItemProps): React$1.JSX.Element;
        displayName: string;
    };
    Radios: {
        (props: IClickListRadiosProps): React$1.JSX.Element;
        displayName: string;
        Item: {
            ({ showLinkLabel, ...props }: IClickListRadiosItemProps): React$1.JSX.Element;
            displayName: string;
        };
    };
    Checkboxes: {
        (props: IClickListCheckboxProps): React$1.JSX.Element;
        displayName: string;
        Item: {
            (props: IClickListCheckboxesItemProps): React$1.JSX.Element;
            displayName: string;
        };
    };
    Multiactions: {
        (props: IClickListMultiActionsProps): React$1.JSX.Element;
        displayName: string;
        Item: {
            ({ ...props }: IClickListMultiActionItemProps): React$1.JSX.Element;
            displayName: string;
        };
    };
};

type IContactModuleProps = IBasicProps & {
    /** Headline  */
    headline?: React$1.ReactNode;
    /** Alternative HTML tag that is rendered for headline. */
    headlineAs?: string;
    /** Subline  */
    subline?: React$1.ReactNode;
    /** Alternative HTML tag that is rendered for subline (e.g. "h4", "h5"). */
    sublineAs?: string;
    /** Special use case: Phone number of hotline. Replaces href, a "tel:)" href is rendered */
    phoneNumber?: string;
    /** Special use case: Text of hotline (e.g. "+49029480298"); replaces headline if filled. */
    phoneText?: React$1.ReactNode;
    /** Function to be called whenever the phone number or headline is clicked */
    onClick?: () => void;
    /** Href for Headline (optional) */
    href?: string;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React$1.ButtonHTMLAttributes<HTMLButtonElement> | React$1.AnchorHTMLAttributes<HTMLAnchorElement> | Record<`data-${string}`, string | number | boolean>;
    /**
     * Render an alternative action component for the headline/phoneNumber, e.g. a React Router link
     * Example: <ContactModule actionAs={ReactRouterLink} actionProps={{to: "/mypage"}} ...
     */
    actionAs?: any;
    /** Props for the alternative action component (actionAs, e.g. a React Router link) */
    actionProps?: any;
};
declare const ContactModule: {
    ({ headlineAs, sublineAs, ...props }: IContactModuleProps): React$1.JSX.Element;
    displayName: string;
};

interface IContentIncludeProps extends IBasicProps {
    /** The id of the element whose content shall be included */
    cid: string;
}
declare const ContentInclude: {
    ({ cid }: IContentIncludeProps): React$1.JSX.Element;
    displayName: string;
};

interface ICardPreset {
    cardImage: any;
    title: string;
    masterCardFlag?: any;
    visaFlag?: any;
    isLightCard: boolean;
}
interface ICreditCardProps extends IBasicProps {
    /** You can choose the card design from BankingCard.Cards.[...] */
    cardPreset?: ICardPreset;
    /** Logo of the payment system ("mastercard" | "visa" | <custom image source>). You need to ensure, that the payment system is available for the selected card. */
    flag?: "mastercard" | "visa" | string;
    /** Alternative text for the flag image. Needs to be set in terms of a11y if a custom image is provided. */
    flagAlt?: string;
    /** Card number, for example "1234 45** **** 3456". Due to sensitivity of the field, numbers need to be anonymized with stars. */
    cardNumber: string;
    /** Name of the card owner */
    cardOwner: string;
    /** Company of the card owner */
    cardCompany: string;
    /** Card will be rotated by -10 degrees in tilted mode and receive a special shadow */
    tilted?: boolean;
    /** Disabled state will be desaturated and a little opaque */
    disabled?: boolean;
    /** Source of the card image. If not specified, is taken from the cardPreset */
    cardImgSrc?: string;
    /** The title is printed on top of the card and visualizes the card type such as "Credit", "Debit", etc.. If not specified, is taken from the cardPreset */
    title?: string;
    /** Whether the card is a light card with black text, or the other way around. If not specified, is taken from the cardPreset */
    isLightCard?: boolean;
    /** If set `true`, the card will be ignored in the accessibility tree. */
    ariaHidden?: boolean;
}
declare const CreditCard: {
    (props: ICreditCardProps): React$1.JSX.Element;
    displayName: string;
};

declare const credit_card_business_credit_classic: {
    cardImage: any;
    title: string;
    isLightCard: boolean;
};

declare const credit_card_business_credit_premium: {
    cardImage: any;
    title: string;
    isLightCard: boolean;
};

declare const credit_card_business_debit: {
    cardImage: any;
    title: string;
    isLightCard: boolean;
};

declare const credit_card_classic: {
    cardImage: any;
    title: string;
    isLightCard: boolean;
};

declare const credit_card_corporate_credit_classic: {
    cardImage: any;
    title: string;
    isLightCard: boolean;
};

declare const credit_card_corporate_credit_premium: {
    cardImage: any;
    title: string;
    isLightCard: boolean;
};

declare const credit_card_debit: {
    cardImage: any;
    title: string;
    isLightCard: boolean;
};

declare const credit_card_gold: {
    cardImage: any;
    title: string;
    isLightCard: boolean;
};

declare const credit_card_premium: {
    cardImage: any;
    title: string;
    visaFlag: any;
    masterCardFlag: any;
    isLightCard: boolean;
};

declare const credit_card_prepaid: {
    cardImage: any;
    title: string;
    isLightCard: boolean;
};

declare const credit_card_virtual_debit: {
    cardImage: any;
    title: string;
    isLightCard: boolean;
};

declare const credit_card_young_visa: {
    cardImage: any;
    title: string;
    isLightCard: boolean;
};

interface IColumnBase {
    /** Header title */
    title: ReactNode;
    /** Hide header title e.g. in the action column. Note: The DataTable is supposed to have a header due to
     * accessibility
     */
    headerHidden?: boolean;
    /** Hide column on certain viewports, e.g. "md" means that the column is only visible on "lg" and "xl" viewport. */
    columnHide?: "xs" | "sm" | "md" | "lg" | "xl";
    /** "Wrap" column below the previous column on certain viewports, e.g. "md" means that the column is not wrapped
     *  on "lg" and "xl" viewport. */
    columnWrap?: "xs" | "sm" | "md" | "lg" | "xl";
    /** On mobile viewport: Show this column as separate line below the table record. */
    columnSeparateXs?: boolean;
    /** The way text is wrapped in the cells of this column */
    textWrap?: "word" | "no-wrap" | "hyphenation" | "character" | "ellipsis";
    /** The horizontal alignment in the column. */
    horizontalAlignment?: "left" | "center" | "right";
    /** Set this flag if the column contains an IconLinkGroup */
    isActionColumn?: boolean;
    /** If this column is sortable, the header is clickable showing the sort order; note that you have to provide
     your own sorting implementation */
    isSortable?: boolean;
    /** If this column is sticky on the left side of a horizontally scrollable table */
    isStickyLeft?: boolean;
    /** If this column is sticky on the right side of a horizontally scrollable table */
    isStickyRight?: boolean;
    /** For deciding the initial sort order if you click on the header, use "initialAscending" or "initialDescending".
     *  If you want the column to be sortable in one direction only, use "ascendingOnly" or "descendingOnly" */
    sortOrderType?: "initialAscending" | "initialDescending" | "ascendingOnly" | "descendingOnly";
}
type IColumnResponsive = IColumnBase & {
    /** Width in css grid fraction units */
    widthFr?: number;
};
type IColumnFixed = IColumnBase & {
    /** Width in pixels */
    widthPx?: number;
};
type IColumn$1 = IColumnResponsive | IColumnFixed;
type IDataTableProps = IBasicProps & {
    /** Vertical alignment of content inside the table cells */
    verticalAlignment?: "top" | "middle";
    /** Spacing between the table cell content and the border of a row */
    spacing?: "dense" | "narrow" | "standard";
    /** Adds a Checkbox or Radio column as the first column of the table. */
    inputType?: "checkbox" | "radio";
    /** Optional name for the radios, which is returned as the second argument of the change callback */
    radiosName?: string;
    /** Key of the selected radio */
    radiosValue?: string;
    /** Change callback that is called when a user clicks on a radio inside the table */
    onRadiosChange?: (newValue: string, name: string, event: React__default.SyntheticEvent<HTMLElement>) => void;
    /** Optional name for the select-all checkbox of the header row, which is returned as the second argument of the
     *  change callback */
    checkboxName?: string;
    /** Boolean value that indicates whether the select-all checkbox in the header is selected. If undefined, the
     *  checkbox is rendered as indeterminate. */
    checkboxValue?: boolean;
    /** Change callback that is called when a user clicks on the select-all checkbox of the table header. */
    onCheckboxChange?: (newValue: boolean, name: string, event: React__default.SyntheticEvent<HTMLElement>) => void;
    /** Boolean value to prevent the select-all checkbox from being rendered in the header row */
    checkboxHidden?: boolean;
    /** Boolean value to disable the select-all checkbox in the header row */
    checkboxDisabled?: boolean;
    /** Index of the primary column. Required for a11y if the row has a link, checkbox or radio. The column contents is used as a label for links, radios and checkboxes. The column needs to be filled with the information that identifies the row. This can be e.g. a product name or a customer name. */
    labelColumn: number;
    /** Slot for adding a DataTableSelectionFooter component */
    footer?: ReactNode;
    /** Sets the table header sticky */
    isHeaderSticky?: boolean;
    /** The title tells about the data content in the table which can be helpful for users with visual impairments.
     * It is a hidden element that will not be displayed */
    title?: string;
    /** Aria attributes that should be passed to the table */
    ariaAttrs?: React__default.AriaAttributes;
    /** Boolean value that indicates if the radio or checkbox column should be sticky, if the table is horizontally
     *  scrollable */
    isInputSticky?: boolean;
    /** With this prop, define the width ratio between the label and the value in a separateColumn. A ratio 0.3
     *  gives the label a css flex of 0.3 and the value a css flex of 0.7. Keep in mind that there is a gap between
     *  label and value though */
    separateColumnsXsWidthRatio?: number;
    /** The level of indentation on the table header. Higher values indicate a greater level of
     *  indentation. */
    insetLevel?: 0 | 1 | 2 | 3 | 4;
} & ({
    sortColumn?: undefined;
    sortAscending?: undefined;
    onSort?: undefined;
} | {
    /** Index of the column that is sorted (if the table is sortable by one column only).  */
    sortColumn: number;
    /** If set to `true`, the contents should be sorted by your sort algorithm in ascending order. This reflects in the direction of the sorting arrow and the aria property aria-sort.
     *  If your table shall be sortable by multiple columns, give in an array of booleans referring accordingly to the sortColumns.
     * */
    sortAscending: boolean;
    /** Callback that is called, when a sortable column header is pressed. It returns the new sort column(s) and which column(s) are sorted in ascending order */
    onSort: (newSortColumn: number, newSortAscending: boolean) => void;
} | {
    /** It's possible to sort by multiple columns (with descending priority). Indexes of the columns to be sorted */
    sortColumns: number[];
    sortAscending: boolean[];
    onSort: (newSortColumns: number[], newSortAscending: boolean[]) => void;
}) & ({
    /** Width of the table */
    width?: undefined | "auto" | "scroll";
    /** IColumnFixed: Header and column properties such as the title, text flow and responsive behaviour.
     *  IColumnFixed contains the attribute `widthPx` which allows for defining a column with pixel
     *  values, if table prop `width`=`undefined | auto | scroll` */
    columns: IColumnFixed[];
} | {
    /** Width of the table */
    width: "full";
    /** IColumnResponsive: Header and column properties such as the title, text flow and responsive behaviour.
     *  IColumnResponsive contains the attribute `widthFr` which allows for defining a column with
     *  fraction unit (see Css Grid) values, if table prop `width`=`full` */
    columns: IColumnResponsive[];
});
declare const DataTable: {
    ({ width, ...props }: IDataTableProps): React__default.JSX.Element;
    displayName: string;
};

type IDataTableExpandableRowProps = IBasicProps & {
    /** Contents of the table row. Each entry is put into a table cell */
    data?: any[];
    /** Colspans of the table cells. Each entry corresponds to an entry of the data prop */
    colspans?: number[];
    /** Optional name for the checkbox, which is returned as the second argument of the change callback */
    inputName?: string;
    /** Boolean value that indicates whether the checkbox in the header is selected. If undefined, the checkbox is rendered as indeterminate. */
    inputValue?: boolean;
    /** Boolean value to prevent the rendering of the select-all checkbox in the header row */
    inputHidden?: boolean;
    /** Boolean value to disable the select-all checkbox in the header row */
    inputDisabled?: boolean;
    /** Change callback that is called when a user clicks on the checkbox */
    onInputChange?: (newValue: boolean, name: string, event: React__default.SyntheticEvent<HTMLElement>) => void;
    /** Label for opening and closing the expandable row. It is placed inside the label column of the DataTable. */
    label?: string;
    /** @deprecated: Use badgeColor instead. Color of the badge. */
    badgeLook?: "primary" | "highlight" | "supplementary" | "optional" | "inactive" | "error" | "success" | "alert" | "secondary-1" | "secondary-2" | "secondary-3" | "secondary-4" | "secondary-5" | "secondary-6";
    /** If set to 'true', the expandable row will not be interactive. The chevron icon will be hidden, and the row
     *  won't be expandable.
     */
    inactive?: boolean;
    /** @deprecated
     * Color of the badge. Deprecated in favour of using badges in the label */
    badgeColor?: "primary" | "highlight" | "supplementary" | "optional" | "inactive" | "error" | "success" | "alert" | "secondary-1" | "secondary-2" | "secondary-3" | "secondary-4" | "secondary-5" | "secondary-6";
    /**
     * Determines if badge should be visible.
     *
     * Will be marked as deprecated in next major release because the automatic creation of a badge will be removed and this property remains functionless */
    hideBadge?: boolean;
    /** Spacing for this row */
    spacing?: "dense" | "narrow" | "standard";
} & ({
    /** Defines if the row should be "expanded" initially. Alternatively, you can fully control the component by the open/onOpenChange prop pair. */
    defaultOpen?: boolean;
} | {
    /** You can fully control the "expanded" state of the component by the open/onOpenChange prop pair, instead of the defaultOpen prop. If open===true, the "sub rows" are visible. */
    open?: boolean;
    /** This is the counterpart of the "open" prop. If the expandable row is clicked, the "new" open state is given in to this callback function. */
    onOpenChange?: (newOpen: boolean) => void;
});
declare const DataTableExpandableRow: {
    ({ badgeColor, badgeLook, ...props }: IDataTableExpandableRowProps): React__default.JSX.Element;
    displayName: string;
};

interface IDataTableLabelProps extends IBasicProps {
    /** left label */
    leftLabel: string;
    /** right label */
    rightLabel?: string;
}
declare const DataTableLabel: {
    (props: IDataTableLabelProps): React__default.JSX.Element;
    displayName: string;
};

interface IDataTableRowProps extends IBasicProps {
    /** Ids of the table cells. Each entry corresponds to an entry of the data prop */
    ids?: string[];
    /** Contents of the table row. Each entry is put into a table cell */
    data: any[];
    /** Optional style for the row separator, located on the top of the given row. `default` can have different look
     *  depending on whether the row is a header row or not. This is evaluated to `default` if not defined
     *  otherwise. If the row has a `bold`-look by default, setting this to `bold` will not have any effect. */
    separatorStyles?: {
        weight: "default" | "bold";
    };
    /** Colspans of the table cells. Each entry corresponds to an entry of the data prop */
    colspans?: number[];
    /** Optional name for the checkbox, which is returned as the second argument of the change callback */
    inputName?: string;
    /** Boolean value that indicates whether the checkbox in the header is selected. If undefined, the checkbox is rendered as indeterminate. */
    inputValue?: boolean;
    /** Boolean value to prevent the rendering of the select-all checkbox in the header row */
    inputHidden?: boolean;
    /** Boolean value to disable the select-all checkbox in the header row */
    inputDisabled?: boolean;
    /** Change callback that is called when a user clicks on the checkbox */
    onInputChange?: (newValue: boolean, name: string, event: React__default.SyntheticEvent<HTMLElement>) => void;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlInputAttrs?: React__default.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    /** Click callback that is called when a user clicks on the table row */
    onLinkClick?: (event: React__default.SyntheticEvent<HTMLElement>, name: string) => void;
    /** Link href for the table row */
    linkHref?: string;
    /** Optional html attributes for the link, which are passed to the html input element */
    htmlLinkAttrs?: React__default.AnchorHTMLAttributes<HTMLAnchorElement> | React__default.ButtonHTMLAttributes<HTMLButtonElement>;
    /** Aria attributes that should be passed to the table row */
    ariaAttrs?: React__default.AriaAttributes;
    /** Spacing of this row. */
    spacing?: "dense" | "narrow" | "standard";
    /** Information about row become just  hovered */
    hasMouseHover?: boolean;
}
declare const DataTableRow: {
    (props: IDataTableRowProps): React__default.JSX.Element;
    displayName: string;
};

interface IDataTableSelectionFooterProps extends IBasicProps {
    /** Optional name for the checkbox, which is returned as the second argument of the change callback */
    inputName?: string;
    /** Boolean value that indicates whether the checkbox in the header is selected. If undefined, the checkbox is rendered as indeterminate. */
    inputValue?: boolean;
    /** Change callback that is called when a user clicks on the checkbox */
    onInputChange?: (newValue: boolean, name: string, event: React__default.SyntheticEvent<HTMLElement>) => void;
    /** Boolean value to prevent the rendering of the select-all checkbox */
    inputHidden?: boolean;
    /** Boolean value to disable the select-all checkbox */
    inputDisabled?: boolean;
    /** Label for the checkbox, which is displayed on the left side of the table row */
    label?: string;
    /** Slot for IconLinks or Buttons, which is displayed on the right side of the table row */
    actions?: ReactNode;
}
declare const DataTableSelectionFooter: {
    (props: IDataTableSelectionFooterProps): React__default.JSX.Element;
    displayName: string;
};

interface IColumn {
    id?: string;
    title: ReactNode;
    headerHidden?: boolean;
    columnHide?: "xs" | "sm" | "md" | "lg" | "xl";
    columnWrap?: "xs" | "sm" | "md" | "lg" | "xl";
    columnSeparateXs?: boolean;
    textWrap?: "word" | "no-wrap" | "hyphenation" | "character" | "ellipsis";
    horizontalAlignment?: "left" | "center" | "right";
    /** Per default, the cell alignment is done by setting `text-align`, `justify-content` and adding a prop
     *  `horizontalAlign` to all children that are passed to the `data` prop. If the css rules `text-align` and
     *  `justify-content` do not lead to the desired result, you can set this prop to "prop-only" and align the
     *  children by yourself.
     * */
    horizontalAlignmentType?: "flex-text-align-prop" | "prop-only";
    isActionColumn?: boolean;
    ariaSort?: "ascending" | "descending";
    sortPriority?: number;
    isSortable?: boolean;
    widthFr?: number;
    widthPx?: number;
    sortOrderType?: "initialAscending" | "initialDescending" | "ascendingOnly" | "descendingOnly";
    isStickyLeft?: boolean;
    isStickyRight?: boolean;
}

interface IGridStructure {
    gridHeaderCols: number[][];
    gridSeparatedCols: number[];
    gridSeparatedActionColIndex?: number;
    hasToggleColumn: boolean;
    maxColLength: number;
    gridTemplateAreaRows: any[];
    gridTemplateAreasString: string;
    tableStyles: any;
    tableHeaderAndBodyStyles: any;
    tableRowStyles: any;
    stickyLeftGridColumns?: number[];
    stickyRightGridColumns?: number[];
    isMobile?: boolean;
    insetLevel?: 0 | 1 | 2 | 3 | 4 | number;
}
type IColumnPreprocessed = IColumn & {
    colIndex: number;
    isHiddenInHeader: boolean;
    isSeparated: boolean;
    isWrapped: boolean;
    isLabelColumn: boolean;
    gridRow: number;
    gridRowSpan: number;
    id: string;
    hasTopMargin: boolean;
    hasBottomMargin: boolean;
    isFirstGridCol: boolean;
    isLastGridCol: boolean;
    isFirstSeparatedColumn?: boolean;
    gridHeaderColIndex?: number;
    isStickyLeft?: boolean;
    isStickyRight?: boolean;
};
interface IDataTableRowSharedProps extends IBasicPropsInternal {
    id?: string;
    ids?: string[];
    data: any[];
    colspans?: number[];
    inputName?: string;
    inputValue?: boolean;
    onInputChange?: (newValue: boolean, name: string, event: React__default.SyntheticEvent<HTMLElement>) => void;
    htmlInputAttrs?: React__default.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    onLinkClick?: (event: React__default.SyntheticEvent<HTMLElement>, name: string) => void;
    linkHref?: string;
    htmlLinkAttrs?: React__default.AnchorHTMLAttributes<HTMLAnchorElement> | React__default.ButtonHTMLAttributes<HTMLButtonElement>;
    htmlCellAttrs?: React__default.TdHTMLAttributes<HTMLTableCellElement>[] | React__default.ThHTMLAttributes<HTMLTableCellElement>[];
    ariaAttrs?: React__default.AriaAttributes;
    insetLevel?: 0 | 1 | 2 | 3 | 4 | number;
    isExpandableHeader?: boolean;
    isHeader?: boolean;
    isTopHeader?: boolean;
    columnsPreprocessed?: IColumnPreprocessed[];
    gridStructure?: IGridStructure;
    columnsSeparated?: (IColumn & {
        isHiddenInHeader: boolean;
    })[];
    inputType?: "checkbox" | "radio" | "button";
    inputHidden?: boolean;
    inputDisabled?: boolean;
    separateColumnsXsWidthRatio?: number;
    hasMouseHover?: boolean;
    hasMouseHoverToggle?: boolean;
    hasKeyboardFocus?: boolean;
    hasKeyboardFocusToggle?: boolean;
    onMouseHoverChange?: (newHover: boolean) => void;
    onMouseHoverChangeToggle?: (newHover: boolean) => void;
    onKeyboardFocusChange?: (newHover: boolean) => void;
    onKeyboardFocusChangeToggle?: (newHover: boolean) => void;
    tableCellsArrayRef?: React__default.MutableRefObject<HTMLElement[]>;
    toggleColumnCellRef?: React__default.MutableRefObject<HTMLElement>;
    spacing?: "dense" | "narrow" | "standard";
}

type IDataTableFooterProps = Omit<IDataTableRowSharedProps, "inputName" | "inputValue" | "inputType" | "onInputChange" | "htmlInputAttrs" | "onLinkClick" | "linkHref" | "htmlLinkAttrs" | "inputHidden" | "inputDisabled">;
declare const DataTableFooter: {
    (props: IDataTableFooterProps): React__default.JSX.Element;
    displayName: string;
};

interface IDatePickerProps extends IBasicProps {
    /** Sets a helper text below the component. */
    helperText?: string;
    /** Adds an error text below the component. If you use this prop, the errorText is added below the helperText (if
     *  defined), and the component is implicitly set to invalid. */
    errorText?: string;
    /** Sets text field and style to disabled. */
    disabled?: boolean;
    /** Sets text field and style to 'error'. 'errorText' becomes visible if set. */
    invalid?: boolean;
    /** Sets the label text. */
    label: string;
    /** Is called on blur. */
    onBlur?: (event: React$1.FocusEvent<HTMLElement> | FocusEvent, name: string) => void;
    /** Is called on focus. */
    onFocus?: (event: React$1.FocusEvent<HTMLElement>, name: string) => void;
    /** Is called on every text change and passes the new value and the id of the component. */
    onChange?: (value: Date | string, name: string) => void;
    /** Sets the placeholder text (visible on a focused input with empty value). */
    placeholder?: string;
    /** Setting this prop to "month" will show a "month picker" */
    dateFormat?: "day" | "month";
    /** @Deprecated Use dateFormat instead. */
    datepickerFormat?: "day" | "month";
    /** Sets text field and style to read-only. */
    readOnly?: boolean;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React$1.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    /** Sets the value of the input. */
    value: Date | string;
    /** Sets the 'name'-attribute of the input. */
    name?: string;
    /**
     * If set to true, the text "(optional)" is appended to the label. You can also pass in a predefined string.
     */
    optional?: boolean | string;
    /** Sets the visibility of the clear icon. Default is true. A click will call the 'onChange' method. */
    clearIcon?: boolean;
    /**
     * Date Object with the earliest date that can be selected. The minimum date is included in the selectable range.
     * Ensure, that minDate <= maxDate. Only year, month and day information are used, the time information is ignored.
     */
    minDate?: Date;
    /**
     * Date Object with the latest date that can be selected. The maximum date is included in the selectable range.
     * Ensure, that minDate <= maxDate. Only year, month and day information are used, the time information is ignored.
     */
    maxDate?: Date;
    /**
     * Set the disabledDates list which contains e.g. the business holiday days.
     * Days contained in the list will be displayed disabled in the dropdown widget.
     * With a DatePicker dateformat="month", give in a list of "firstOfMonth" dates to disable distinct dates.
     * This prop is ruled out by the "selectableDates" prop.
     */
    disabledDates?: Date[];
    /**
     * Weekends are enabled by default. Disable sunday and saturday in the dropdown widget by setting the prop
     * `weekendsDisabled` to true.
     */
    weekendsDisabled?: boolean;
    /**
     * Only dates that are contained in the list will be enabled in the dropdown widget.
     * Note: Some of these dates can be ruled out by the maxDate, minDate, weekendsDisabled rules.
     * With a DatePicker dateformat="month", give in a list of "firstOfMonth" dates to enable distinct dates.
     * This prop is ruled out by the "selectableDates" prop.
     */
    selectableDates?: Date[];
    /** Use this prop to control if the aria-live attribute is set for the errorText */
    errorTextAriaLive?: boolean;
    /**
     * Opt-out for the year picker, that by default opens on click on the <month year> label on top of the
     * DatePicker flyout.
     */
    noYearPicker?: boolean;
    /** With spacing="dense", the text input whitespace of the DatePicker is reduced by smaller paddings and bottom-margins.
     * Set spacing="default" only in special FormContainer with spacing="dense" prop (edge) cases where you wish to override the "dense" spacing
     *   in an individual DatePicker. In this case, the DatePicker will receive its default whitespace within the FormContainer. */
    spacing?: "default" | "dense";
}
declare const DatePicker: {
    ({ optional, datepickerFormat, dateFormat, ...otherProps }: IDatePickerProps): React$1.JSX.Element;
    displayName: string;
};

interface ITextFieldProps extends IBasicProps {
    /** @deprecated: Sets an id on the outer div. If you do not set a hostId, the outer div gets the id '<id>-base'. */
    hostId?: string;
    /** Sets the TextField and its style to disabled. */
    disabled?: boolean;
    /** Specifies an additional icon to add supplementary features. */
    iconLink?: ReactNode;
    /** @deprecated (08.05.2025): Please use iconLink instead. Passing 'icon' will set an icon at the primary or
     *  secondary position (if clearIcon is set). */
    icon?: IIcon;
    /** @deprecated (08.05.2025): Please use iconLink instead. Text for the icon that will be accessible for screen
     *  readers */
    iconText?: string;
    /** @deprecated (08.05.2025): Please use iconLink instead. If set to true, the icon can be focused with the tab
     *  key */
    iconFocusable?: boolean;
    /** Sets TextField and its style to 'error'. 'errorText' will become visible if set. */
    invalid?: boolean;
    /** Sets the label text (required). */
    label: string;
    /** Is called on blur. */
    onBlur?: (event: React$1.FocusEvent<HTMLElement>, name: string) => void;
    /** Is called on focus. */
    onFocus?: (event: React$1.FocusEvent<HTMLElement>, name: string) => void;
    /** Is called on every change and passes the new value and the name of the component. */
    onChange?: (value: string, name: string, event: React$1.SyntheticEvent<HTMLElement>) => void;
    /** @deprecated (08.05.2025): Please use iconLink instead. Is called on click on the icon. */
    onIconClick?: (event: React$1.MouseEvent<HTMLElement>, name: string) => void;
    /** Sets the placeholder text (visible on a focused input with an empty value). */
    placeholder?: string;
    /** Sets the TextField and its style to read-only. */
    readOnly?: boolean;
    /** Basic HTML Attributes can be added here (e.g. aria attributes, tabindex, ...) */
    htmlAttrs?: React$1.InputHTMLAttributes<HTMLInputElement> | React$1.TextareaHTMLAttributes<HTMLTextAreaElement> | React$1.KeyboardEvent<HTMLElement>;
    /** Optional ref for the native input element */
    inputRef?: RefObject<any>;
    /** Sets the value of the input. */
    value: string;
    /** Sets the 'name'-attribute of the input. */
    name?: string;
    /** If clearIcon is true, an X-Icon is displayed for editable non-empty input fields on focus and hover.
     *  A click will call the 'onChange' method -> with an empty string.
     */
    clearIcon?: boolean;
    /** HTML element to be rendered. Other React components can also be used (see 'Type - IBAN' code example on https://markenportal.commerzbank.com/styleguide/text-field). */
    as?: "input" | "textarea" | ComponentType<any>;
    /** If optional is true, the text "(optional)" is appended to the label. If a string is passed, the string is appended to the label. */
    optional?: boolean | string;
    /** Input type defined by literal type */
    type?: "text" | "password";
    /** Adds a suffix to the input text, e.g. "Euro". */
    suffix?: string;
    /** Defines the layout type of the suffix. */
    suffixType?: "inline" | "separated";
    /** Sets a helper text below the component. */
    helperText?: ReactNode;
    /** Adds an error text below the component. If you use this prop, the errorText is added below the helperText (if defined), and the TextField is implicitly set to invalid. */
    errorText?: ReactNode;
    /** Use this prop to control if the aria-live attribute is set for the errorText */
    errorTextAriaLive?: boolean;
    /** With spacing="dense", the whitespace of the TextField is reduced by smaller paddings and bottom-margins.
     * Set spacing="default" only in special FormContainer with spacing="dense" prop (edge) cases where you wish to override the "dense" spacing
     *   in an individual TextField. In this case, the TextField will receive its default whitespace within the FormContainer. */
    spacing?: "default" | "dense";
}
declare const TextField: {
    ({ optional, readOnly, clearIcon, ...otherProps }: ITextFieldProps): React$1.JSX.Element;
    displayName: string;
};

interface IDateTextFieldProps extends Omit<ITextFieldProps, "onChange" | "value"> {
    /** Is called on every changes and passes the new value and the id of the component. Expected types are string | Date | number */
    onChange?: (value: string | Date, name: string, event: React$1.SyntheticEvent<HTMLElement>) => void;
    /** Sets the value of the input. */
    value: string | Date;
    /** @deprecated (see also documentation Markenportal - chapter `Accessibility` )
     * Date Object with the earliest date that can be selected. The minimum date is included in the selectable range.
     * Ensure, that minDate <= maxDate. Only year, month and day information are used, the time information is ignored.
     */
    minDate?: Date;
    /** @deprecated (see also documentation Markenportal - chapter `Accessibility` )
     * Date Object with the latest date that can be selected. The maximum date is included in the selectable range.
     * Ensure, that minDate <= maxDate. Only year, month and day information are used, the time information is ignored.
     */
    maxDate?: Date;
    /** Setting this prop to "month" will show a "month picker" */
    dateFormat?: "day" | "month";
    /** With spacing="dense", the text input whitespace of the DateTextField is reduced by smaller paddings and bottom-margins.
     * Set spacing="default" only in special FormContainer with spacing="dense" prop (edge) cases where you wish to override the "dense" spacing
     *   in an individual DateTextField. In this case, the DateTextField will receive its default whitespace within the FormContainer. */
    spacing?: "default" | "dense";
}
declare const DateTextField: {
    ({ optional, readOnly, clearIcon, minDate, maxDate, dateFormat, ...otherProps }: IDateTextFieldProps): React$1.JSX.Element;
    displayName: string;
};

interface IDescriptionListRowProps extends IBasicProps {
    title: ReactNode;
}
declare const DescriptionListRow: {
    ({ title, ...props }: IDescriptionListRowProps): React__default.JSX.Element;
    displayName: string;
};

interface IDescriptionListProps extends IBasicProps {
    /** @deprecated : component will do the wrapping on its own */
    titleWrap?: boolean;
}
declare const DescriptionList: {
    ({ titleWrap, ...props }: IDescriptionListProps): React__default.JSX.Element;
    displayName: string;
    Row: {
        ({ title, ...props }: IDescriptionListRowProps): React__default.JSX.Element;
        displayName: string;
    };
};

interface IDetailPageHeaderProps extends IBasicProps {
    /** Close button label. If unset label will be "back"/"zurück" */
    closeLabel?: string;
    /** Set the href for the close button */
    closeHref?: string;
    /** Set the onClick handler for the close button */
    closeOnClick?: (e: MouseEvent | React$1.MouseEvent, name: string) => void;
    /** Slot for actions on the right side */
    actions?: ReactNode;
    /** Dark theme or light theme header */
    theme?: "light" | "dark";
    /** Decides if the navigation should be sticky */
    isSticky?: boolean;
}
declare const DetailPageHeader: {
    (props: IDetailPageHeaderProps): React$1.JSX.Element;
    displayName: string;
};

interface IDrawerProps extends IBasicProps {
    /** Callback that is called on backdrop click. If undefined, onClose is triggered instead */
    onBackdropClick?: (event?: MouseEvent) => void;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React$1.HTMLAttributes<HTMLDivElement> | Record<`data-${string}`, string | number | boolean>;
    /** A focus lock is the functionality to keep the focus, while tabbing, within a dialog.
     * If you press TAB on the last focusable element (e.g. a form element), the first element in the Drawer is focused.
     */
    noFocusLock?: boolean;
    /** Please pass layout by literal type  */
    layout?: "layer-left" | "layer-right" | "layer-right-legacy" | "layer-full" | "layer-left-75" | "layer-right-75" | "layer-right-25" | "side-menu-left" | "side-menu-right" | "mega-menu" | "mega-menu-legacy";
    /** If the Drawer is displayed or not */
    open?: boolean;
    /** @deprecated */
    legacyStickyMegaMenu?: boolean;
}
declare const Drawer: {
    ({ layout, ...props }: IDrawerProps): React$1.JSX.Element;
    displayName: string;
};

interface IEyeCatcherProps extends IBasicProps {
    /** Short text for EyeCatcher on small screens (viewport < lg) */
    text?: ReactNode;
    /** Long text for EyeCatcher on large screens (viewport >= lg) */
    textLong?: ReactNode;
    /** EyeCatcher font-size */
    fontSize?: "small" | "medium" | "large" | "xlarge";
    /** Increase width of text container on large screens (viewport >= lg) */
    wideText?: boolean;
}
declare const EyeCatcher: {
    ({ fontSize, ...props }: IEyeCatcherProps): React$1.JSX.Element;
    displayName: string;
};

interface IFeedbackProps extends IBasicProps {
    /** Main text for the non-voted state */
    textBefore: string;
    /** Text for positive button in the non-voted state */
    textButtonTrue?: string;
    /** Text for negative button in the non-voted state */
    textButtonFalse?: string;
    /** Second text for the non-voted state */
    textAfter: string;
    /** Text shown after voting */
    textResult?: string;
    /** User interaction result */
    result?: boolean;
    /** Function to be called on user interaction. */
    onChange?(result: boolean): void;
}
/**
 * @deprecated: 11.2023 - Will be removed in the next major release.
 * Have a look at the "Feedback Pattern" which uses native components like shown in the Markenportal UX Patterns
 * section: https://markenportal.commerzbank.com/styleguide/feedback-pattern/index.html
 */
interface IFeedbackState {
    animationHide: boolean;
}
declare class Feedback extends React$1.Component<IFeedbackProps, IFeedbackState> {
    static displayName: string;
    static defaultProps: {
        textButtonTrue: string;
        textButtonFalse: string;
        textResult: string;
        onChange: () => void;
    };
    render(): React$1.JSX.Element;
}

type IFooterProps = IBasicProps & {
    /** Content of the contact area. */
    contactArea?: React$1.ReactNode;
    /**
     * Set previousTheme to Theme.Looks.Dark if the footer is at the end of a dark-themed section. The area at the top
     * of the <ContactModule> will then a get dark-themed background.
     */
    previousTheme?: "light" | "dark";
    /** Brand bar: Corporate slogan, e.g. "The bank at your side". */
    brandBarSlogan?: string;
    /**  Brand bar: URL of the link (e.g. home page) that will be opened on logo click. */
    brandBarHref?: string;
    /** Brand bar: Render an alternative action component for the logo, e.g. a React Router link. */
    brandBarActionAs?: any;
    /** Brand bar: Props for the alternative logo action component (e.g. a React Router link). */
    brandBarActionProps?: any;
    /** Brand bar: Label for the logo, rendered as `alt`- or `aria-label`-attribute. Use the default values for
     * Commerzbank or custom logos or assign your own.
     * If the logo is a link or a button, an additional action-label can be assigned using `brandBarLogoHtmlAttrs`. */
    brandBarLogoLabel?: string;
    /** Brand bar: Image source for a custom logo. */
    brandBarLogoSrcCustom?: string;
    /** Brand bar: If set to `true` or if you do not provide a `brandBarHref` or other actions, the logo will be
     * rendered as an image without any interaction. */
    brandBarLogoDisabled?: boolean;
    /** Brand bar: Additional (action-)HTML attributes can be added here, e.g. target, tabindex or a different aria-
     * label for the logo's link or button element, e.g.: brandBarLogoHtmlAttrs={{ "aria-label": "My custom action" }} */
    brandBarLogoHtmlAttrs?: React$1.ButtonHTMLAttributes<HTMLButtonElement> | React$1.AnchorHTMLAttributes<HTMLAnchorElement> | Record<`data-${string}`, string | number | boolean>;
    /** Brand bar: Function to be called on onClick-event. Not called when the logo is disabled. */
    brandBarOnLogoClick?: (e: React$1.MouseEvent<HTMLElement>, name: string) => void;
    /**
     * Meta bar: Standard component to be rendered as a navigation link; e.g. you can add a ReactRouter link here.
     * If no actionProps are defined in the navigationTree item, a "normal" LSG Action component (<a> or <button>
     * will be rendered.
     */
    metaBarNavigationActionAs?: any;
    /** Meta bar: Tree of the navigation. */
    metaBarNavigationTree?: any[];
    /** Meta bar: Provide a unique ARIA-label for the social links navigation `<nav>` element (required).
     * This enables screen reader users to distinguish the navigation areas. */
    metaBarNavigationAriaLabel?: string;
    /** Meta bar: Centers the meta bar for the ProcessPage layout. */
    metaBarHorizontallyCentered?: boolean;
} & ({
    metaBarSocialLinks?: undefined;
} | {
    /** Meta bar: Content of the social links area. */
    metaBarSocialLinks: ReactNode;
    /** Meta bar: Provide a unique ARIA-label for the social links navigation `<nav>` element (required if you set
     *  socialLinks). This enables screen reader users to distinguish the navigation areas. */
    metaBarSocialLinksAriaLabel: string;
});
declare const Footer: React$1.FunctionComponent<IFooterProps>;

interface IFooterNavigationBlockProps extends IBasicProps {
    /** This mandatory prop sets the title text for a FooterNavigation.Block. */
    title: string;
    /** @deprecated 15.7.2025 - If FooterNavigation.Block is nested in FooterNavigation as intended, this prop is irrelevant, because its value gets overridden based on the viewport range. */
    isLargeScreen?: boolean;
    /** With this prop, you can set your own HTML element for the title text of a FooterNavigation.Block. E.g. "h4". */
    footerNavigationBlockAs?: string;
}

interface IFooterNavigationProps extends IBasicProps {
    /** This mandatory prop adds an ARIA label for screen reader users to the navigation (HTML <nav> element) of the FooterNavigation. */
    navigationAriaLabel: string;
}
declare const FooterNavigation: {
    ({ ...props }: IFooterNavigationProps): React$1.JSX.Element;
    displayName: string;
    Block: {
        ({ footerNavigationBlockAs, ...props }: IFooterNavigationBlockProps): React$1.JSX.Element;
        displayName: string;
    };
};

type IFooterMetabarProps = IBasicProps & {
    /**
     * Standard component to be rendered as a navigation link; e.g. you can add a ReactRouter link here.
     * If no actionProps are defined in the navigationTree item, a "normal" LSG Action component (<a> or <button>
     * will be rendered.
     */
    navigationActionAs?: any;
    /** Tree of the navigation. */
    navigationTree?: INavigationTree[];
    /** Provide a unique ARIA-label for the social links navigation `<nav>` element (required).
     * This enables screen reader users to distinguish the navigation areas. */
    navigationAriaLabel?: string;
    /** Centers the Metabar for the ProcessPage Layout */
    horizontalAlignment?: "center" | undefined;
} & ({
    socialLinks?: undefined;
    socialLinksAriaLabel?: string;
} | {
    /** Content of the social links area. */
    socialLinks: ReactNode;
    /** Provide a unique ARIA-label for the social links navigation `<nav>` element (required if you set socialLinks).
     * This enables screen reader users to distinguish the navigation areas. */
    socialLinksAriaLabel: string;
});
declare const FooterMetabar: React$1.FunctionComponent<IFooterMetabarProps>;

interface IFootnoteAnchorProps extends IBasicProps {
    /** The subsequent footnote item number. If empty, the footnote will be determined by the item that corresponds to
     * this anchor. If the displayed identifier is '?', the ids probably do not match.
     */
    identifier?: string;
    /** The id of the corresponding footnote item */
    idItem: string;
    /** Defines the text that is shown under the identifier. */
    label: React$1.ReactNode;
    /** Corresponds to the id of the element that describes the footnote anchor */
    ariaDescribedBy?: string;
}
declare const FootnoteAnchor: {
    ({ ...props }: IFootnoteAnchorProps): React$1.JSX.Element;
    displayName: string;
};

interface IFootnoteItemProps extends IBasicProps {
    /** The subsequent footnote item number */
    identifier: string;
    /** The unique id of the element. Required, because it will be linked to from the footnote anchor that is displayed
     * as part of the text.
     */
    id: string;
}

declare const Footnote: {
    (props: IBasicProps): React$1.JSX.Element;
    displayName: string;
    Item: {
        (props: IFootnoteItemProps): React$1.JSX.Element;
        displayName: string;
    };
    Anchor: {
        ({ ...props }: IFootnoteAnchorProps): React$1.JSX.Element;
        displayName: string;
    };
};

declare const FootnoteProvider: {
    ({ children, ...props }: {
        [x: string]: any;
        children: any;
    }): React$1.JSX.Element;
    displayName: string;
};

type IFormContainerProps = IBasicProps & {
    /** Sets an HTML tag for the FormContainer. Default: "form". */
    as?: keyof React$1.JSX.IntrinsicElements | string;
    /** With this prop, you can add CSS styles as a React style object which will be forwarded to the HTML element. */
    style?: React$1.CSSProperties;
    /** Additional HTML attributes (e.g. 'onSubmit' if <form> is rendered, aria-*, data-*) will be forwarded to the host element. */
    htmlAttrs?: React$1.FormHTMLAttributes<HTMLFormElement> | React$1.HTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
    /** Reduces the whitespace of components having a TextField by reducing its paddings and bottom-margin when nested in the FormContainer.
     *  Also works for these components in a Grid by reducing the Grid row-gaps. The following components
     *  support this prop: Autocomplete, DatePicker, DateTextField, NumberTextField, OptionsTextField, Select, and TextField. */
    spacing?: "dense";
};
declare const FormContainer: React$1.FC<IFormContainerProps>;

interface IFormLinkProps extends IBasicProps {
    /** Set any Icon you want from the LSG * */
    icon: any;
    /** Label is shown above the main link/text * */
    label?: string;
    /** text prop is the main text, which can be a link or only text * */
    text: string;
    /** href can be filled with a url, tel: or mailto: * */
    href: string;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React$1.ButtonHTMLAttributes<HTMLButtonElement> | React$1.AnchorHTMLAttributes<HTMLAnchorElement> | Record<`data-${string}`, string | number | boolean>;
    /** Function to be called whenever the FormLink is clicked. */
    onClick?(e: React$1.MouseEvent<HTMLElement>, name: string): void;
    /** Render an alternative action component, e.g. a React Router link
     * Example: <FormLink actionAs={ReactRouterLink} actionProps={{to: "/mypage"}} ...
     */
    actionAs?: any;
    actionProps?: any;
}
declare const FormLink: {
    (props: IFormLinkProps): React$1.JSX.Element;
    displayName: string;
};

type IGallerySliderItemProps = IBasicProps & {
    /** Translation of the word 'Slide', so that users understand what kind of content they can expect (required) */
    ariaRoleDescription: string;
} & ({
    /** Label that is unique for this slide (either a real title or like "1 of 4"). Required if ariaLabelledBy is not set */
    ariaLabel: string;
} | {
    /** Id of the Element that acts as a unique label for this slide (for example a headline in the slide). Required if ariaLabel is not set */
    ariaLabelledBy: React$1.AriaAttributes["aria-labelledby"];
}) & ({
    pictureImgSrc?: undefined;
} | {
    /** Src attribute for the img inside the picture element (see `<Picture />` component)  */
    pictureImgSrc: string;
    /** `alt` attribute for the picture element (required if you set pictureImgSrc) */
    pictureAlt: string;
    /** Source array for the picture element (see `<Picture />` component) */
    pictureSource?: React$1.SourceHTMLAttributes<HTMLSourceElement>[];
    /** Additional attributes for the img inside the picture element (see `<Picture />` component) */
    pictureImgAttrs?: React$1.ImgHTMLAttributes<HTMLImageElement>;
});
declare const GallerySliderItem: {
    (props: IGallerySliderItemProps): React$1.JSX.Element;
    displayName: string;
};

type IGallerySliderProps = IBasicProps & {
    /** Number of slides to be displayed depending on the viewport size; several configurations are predefined in the SlidesToDisplay enumeration.  */
    slidesToDisplay?: number;
    /** Sets the initial index of the first slide to be displayed */
    initialSlide?: number;
    /** Called on pagination click. */
    onChange?: (openIndex: number, event: React$1.SyntheticEvent<HTMLElement>) => void;
    /** @deprecated 29.01.2024: Use appearance instead. Look of the cards */
    look?: "cards";
    /** Look of the cards */
    appearance?: "default" | "cards";
    /** A11y-Properties to customize the Pagination. Useful if you use a languague other than English or German. */
    pagination?: {
        /** Accepts a function which returns a string value that provides a user-friendly name for the slider elements (navigation buttons and pages). This is important for screen reader users.
         * The `page` argument is the page (1..n) and the `selected` argument is true, if the page is the currently selected page.
         * */
        itemAriaLabelFormatter?: (page?: number, isSelected?: boolean) => string;
        /** An aria-label for the previous button. */
        previousButtonAriaLabel?: string;
        /** An aria-label for the next button. */
        nextButtonAriaLabel?: string;
    };
    /** Translation of the word 'Gallery', 'Carousel' or similar (depending on what you build), so that screen reader users can understand what kind of content they can expect (required) */
    ariaRoleDescription: string;
} & ({
    /** Id of the element that acts as a unique label (for example a headline before the GallerySlider). Required if ariaLabel is not set */
    ariaLabelledBy: React$1.AriaAttributes["aria-labelledby"];
} | {
    /** Descriptive ARIA-Label for the GallerySlider. Required if ariaLabelledBy is not set */
    ariaLabel: string;
});
declare const GallerySlider: {
    ({ look, appearance, slidesToDisplay, ...props }: IGallerySliderProps): React$1.JSX.Element;
    displayName: string;
    Item: {
        (props: IGallerySliderItemProps): React$1.JSX.Element;
        displayName: string;
    };
};

interface IGridColumnProps extends IBasicProps {
    size?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    md?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    sm?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    xs?: 0 | 1 | 2 | 3 | 4;
    horizontalAlign?: "left" | "center" | "right";
    horizontalAlignXs?: "left" | "center" | "right";
    horizontalAlignSm?: "left" | "center" | "right";
    horizontalAlignMd?: "left" | "center" | "right";
    /** Name of the html tag that is rendered for the outer div. */
    as?: keyof JSX.IntrinsicElements;
}
declare const GridColumn: {
    ({ horizontalAlign, horizontalAlignXs, horizontalAlignSm, horizontalAlignMd, ...props }: IGridColumnProps): React$1.JSX.Element;
    displayName: string;
};

interface IGridRowProps extends IBasicProps {
    /** If set, the columns will be reversed on the given breakpoint and above */
    columnReverse?: "sm" | "md";
    verticalAlign?: "top" | "middle" | "bottom";
    /** Name of the html tag that is rendered for the group container. If set to "ul" or "ol", the `as`-prop of
     * children will be set to "li". */
    as?: keyof JSX.IntrinsicElements;
}
declare const GridRow: {
    ({ as, verticalAlign, ...props }: IGridRowProps): React$1.JSX.Element;
    displayName: string;
};

interface IGridProps extends IBasicProps {
    /** Spacings that are applied on top and bottom of the Grid component. Inside nested grids, the spacings are
     *  only applied at the bottom. Use "dense", "small", "medium" or "large". Other options will be removed in the next major
     *  release.
     *  If you do not set this prop, the default spacing style will be equivalent to the 'spacing="small"' prop version.
     *  Note that this prop and the default spacing version will not have any effect if you use the Grid nested in `<FormContainer spacing="dense">`. */
    spacing?: "section" | "doublesubsection" | "subsection" | "dense" | "small" | "medium" | "large";
    /** If set to true, the Grid layout content will be centered horizontally within its container instead of using the default left-aligned layout. */
    centeredLayout?: boolean;
    /** @deprecated use `spacing` instead  */
    verticalSpacing?: "section" | "doublesubsection" | "subsection";
}
declare const Grid: {
    ({ verticalSpacing, spacing, ...props }: IGridProps): React$1.JSX.Element;
    displayName: string;
    Row: {
        ({ as, verticalAlign, ...props }: IGridRowProps): React$1.JSX.Element;
        displayName: string;
    };
    Column: {
        ({ horizontalAlign, horizontalAlignXs, horizontalAlignSm, horizontalAlignMd, ...props }: IGridColumnProps): React$1.JSX.Element;
        displayName: string;
    };
};

interface IHeadlineProps extends IBasicProps {
    /** With this prop, you can choose your preferred CSS styling of the Headline. Together
     *  with the `as` prop, you can create a correct HTML hierarchy independent of the visual appearance of your
     *  Headline. */
    size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    /** With this prop, you have to set the HTML tag that will be rendered for the Headline.
     *  The prop is mandatory to encourage the correct HTML tag hierarchy usage for your website.
     *  Together with the `size` prop, you can create a correct hierarchy independent of the visual appearance
     *  of your Headline. E.g. "h3", "h4", "strong", "span". */
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | string;
    /** Overline content */
    overline?: React$1.ReactNode;
    /**
     * HTML tag that is rendered for the overline. If you use the `overlineAs` prop to put the overline in a
     * semantically higher order (e.g. as='h2' and overlineAs='h1'), the overline will be rendered by its own
     * (`<h1 />`) above the headline (`<h2 />`) and not 'inside'.
     */
    overlineAs?: string;
    /** Subline content */
    subline?: React$1.ReactNode;
    /** HTML tag that is rendered for the subline. */
    sublineAs?: string;
    /**
     * If true, applies text-wrap: balanced to the headline for improved readability.
     * By default, h1-h3 use balanced wrapping. h4-h6 in a centered layout are also balanced by default */
    balanced?: boolean;
    /** Sets the line length of '4' to '6' style (`size` prop) Headlines in ≥ 1024 px width viewports. Default is 768px. Wide is 960px. */
    lineLength?: "default" | "wide";
    /** Additional Button/Link */
    actions?: any;
    /** This prop centers the Headline horizontally. */
    centeredLayout?: boolean;
    /** Deactivate automatic hyphens if you want to set them manually. */
    manualHyphenation?: boolean;
    /** Badge text. Overwrites 'badgeIcon' prop if set as well.  */
    badgeText?: string;
    /** Badge Icon. If 'badgeText' prop is set as well, 'badgeIcon' will be ignored. */
    badgeIcon?: IIcon;
    /** Badge icon variant */
    badgeIconVariant?: "solid" | "outline";
    /** @deprecated (29.01.2024) Use badgeColor instead. Badge look */
    badgeLook?: "primary" | "highlight" | "supplementary";
    /** Badge look */
    badgeColor?: "primary" | "highlight" | "supplementary" | "optional" | "inactive" | "error" | "success" | "alert" | "secondary-1" | "secondary-2" | "secondary-3" | "secondary-4" | "secondary-5" | "secondary-6";
    /** Badge position */
    badgePosition?: "overline" | "subline";
}
declare const Headline: {
    ({ size, overlineAs, sublineAs, children, badgeColor, badgeLook, badgePosition, badgeIconVariant, ...props }: IHeadlineProps): React$1.JSX.Element;
    displayName: string;
};
declare const H1: {
    (props: Omit<IHeadlineProps, "size">): React$1.JSX.Element;
    displayName: string;
};
declare const H2: {
    (props: Omit<IHeadlineProps, "size">): React$1.JSX.Element;
    displayName: string;
};
declare const H3: {
    (props: Omit<IHeadlineProps, "size">): React$1.JSX.Element;
    displayName: string;
};
declare const H4: {
    (props: Omit<IHeadlineProps, "size">): React$1.JSX.Element;
    displayName: string;
};
declare const H5: {
    (props: Omit<IHeadlineProps, "size">): React$1.JSX.Element;
    displayName: string;
};
declare const H6: {
    (props: Omit<IHeadlineProps, "size">): React$1.JSX.Element;
    displayName: string;
};

interface IIconProps extends IBasicProps {
    /** The Icon that should be displayed. See https://markenportal.commerzbank.com/styleguide/icon/
     * for an overview of available LSG Icons. */
    icon?: IIcon;
    /** Scaled icon in four different sizes.  */
    size?: "xsmall" | "small" | "medium" | "large";
    /** Pass one of the presets defined in literal type. */
    color?: "default" | "primary" | "secondary" | "error" | "success" | "note" | "disabled" | "black" | "white" | "anthracite" | "primary-1" | "primary-2" | "secondary-1" | "secondary-2" | "secondary-3" | "secondary-4" | "secondary-5" | "secondary-6";
    /** Icons can be styled as outline, featuring hollow designs that
     emphasize contours, or solid, which are filled in. */
    variant?: "solid" | "outline";
    /** Icon title. If title is not set, the corresponding or default title is used. Set `title=""` if you require an empty title. */
    title?: string;
    /** Whether to display it inline without a margin. Set to true if icon should be displayed inside continuous text. */
    inline?: boolean;
    /** Additional attributes for the SVG element (e.g. aria attributes). */
    svgAttrs?: Omit<React$1.SVGAttributes<SVGSVGElement>, "color">;
    /** Show a badge - Only available when icon size is "small". */
    showBadge?: boolean;
    /**
     * Badge text
     * - If badgeText is undefined or an empty string, the Badge will be rendered as a dot.
     * - Up to 3 characters may fit inside. E.g. `99+`.
     */
    badgeText?: string;
}
declare class Icon extends React$1.Component<IIconProps> {
    static displayName: string;
    static defaultProps: Partial<IIconProps>;
    render(): React$1.JSX.Element;
}

interface IIconLinkGroupProps extends IBasicProps {
    /** The layout direction of the group, can only be values from enum DIRECTIONS */
    direction?: "vertical" | "horizontal" | "table" | "flip-xs" | "flip-sm" | "flip-md" | "flip-lg" | "collapse-xs" | "collapse-sm" | "collapse-md" | "collapse-lg";
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: HTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
    /** Name of the html tag that is rendered for the group container. If set to "ul" or "ol", the `as`-prop of
     * children will be set to "li". Default is "ul", if the group contains more than one IconLink. */
    as?: keyof JSX.IntrinsicElements;
}
declare const IconLinkGroup: {
    ({ direction, ...props }: IIconLinkGroupProps): React$1.JSX.Element;
    displayName: string;
};

interface IIconLinkProps extends IButtonBaseProps {
    /**
     * Defines the text displayed next to the icon. This prop is always required for accessibility reasons, even
     * when using `appearance="no-text"`: Screen readers will always announce this text, regardless of visual appearance.
     * The `label` text is rendered inside a <span> element and can be any valid React node (string, JSX, etc.).
     */
    label: React$1.ReactNode;
    /** @deprecated - Use appearance instead. */
    look?: "left" | "right" | "no-icon" | "no-text";
    /**
     * Use one of the defined IconLink appearances.
     * Accessible via union type.
     */
    appearance?: "left" | "right" | "no-icon" | "no-text";
    /**
     * This prop sets the animation direction for hover and overrides the default of the Group. The prop should be set
     * for IconLinks with an arrow icon like `← Back` or `Next →`. In contrast to the Group default, the animation
     * direction set by this prop is independent of the orientation of IconLinks inside a group.
     */
    hoverAnimation?: "left" | "right";
    /**
     * Sets the color scheme for the IconLink text and icon. Accepts "primary" or "secondary" - if `iconColor` is
     * not set, the icon will inherit this color. The default is "primary". If the IconLink is disabled, the text and icon color will always be
     * set to "disabled", regardless of the `color` prop. The surrounding Theme influences the color that is rendered.
     */
    color?: "primary" | "secondary";
    /** Icon of the Icon component.
     *  See https://markenportal.commerzbank.com/styleguide/icon/ for an overview of available LSG Icons. */
    icon?: IIcon;
    /**
     * Sets the color of the icon independently from the text.
     * If not set, the icon color is determined by the `color` prop or the `disabled` state.
     * The surrounding Theme influences the color that is rendered.
     */
    iconColor?: "default" | "primary" | "secondary" | "error" | "success" | "note" | "disabled" | "black" | "white" | "anthracite" | "primary-1" | "primary-2" | "secondary-1" | "secondary-2" | "secondary-3" | "secondary-4" | "secondary-5" | "secondary-6";
    /**
     * Icons can be styled as outline, featuring hollow designs that
     * emphasize contours, or solid, which are filled in.
     * Have a look on https://markenportal.commerzbank.com/styleguide/icon/ for further information and visual examples.
     */
    iconVariant?: "outline" | "solid";
    /** A Badge is a small, rounded indicator on the top right side of the IconLink. The Badge may contain text. */
    showBadge?: boolean;
    /**
     * If the badgeText is undefined, the Badge is shown as a small dot. If the Badge contains text (e.g. "7", "9+")
     * or an empty string, the Badge is larger. Up to 3 characters (e.g. "99+") may fit in a Badge.
     */
    badgeText?: string;
    /** Set this prop to true to render the IconLink as an inline element within text content (e.g., inside Paragraphs or Headlines).
     * When true, the outer container element changes from `<div>` to `<span>` to allow proper inline text flow.
     * This is useful when you want to place an IconLink within a sentence or text block.
     * */
    inline?: boolean;
    /**
     * If true, this component will be decorative only and will not contain the `<a>` or `<button>` tag itself.
     * This is useful for non-interactive elements inside a card or other components.
     */
    nonInteractive?: boolean;
    /**
     * If true, this component will animate the entire card or other components it is inside.
     * Make sure that the link text is meaningful (e.g. "Buy Product", "Cancel"). It must not contain general phrases
     * (e.g. "Read more", "Select").
     */
    a11yMeaningfulLabel?: boolean;
    /**
     * Name of the HTML tag that is rendered for the outer div. Defaults to "li" if used inside a group with more than
     * one item, or a group that is set to "ul" or "ol". To change the tag of the button, use the `actionAs` prop.
     */
    as?: keyof JSX.IntrinsicElements;
}
declare const IconLink: {
    ({ color, iconVariant, refCallback, label, showBadge, badgeText, loadingText, ...props }: IIconLinkProps): React$1.JSX.Element;
    Group: {
        ({ direction, ...props }: IIconLinkGroupProps): React$1.JSX.Element;
        displayName: string;
    };
    displayName: string;
};

interface ISwitchGroupProps extends IInputGroupProps {
}

interface IJumpLinksProps extends IBasicProps {
    /** The navigation structure as JSON */
    navigationTree: INavigationTree[];
    /** Standard component to be rendered as a navigation link; e.g. you can add a ReactRouter link here
     * If no actionProps are defined in the navigationTree item, a "normal" LSG Action component (<a> or <button>)
     * will be rendered.
     */
    navigationActionAs?: any;
    /** Provide a unique ARIA-label for the JumpLinks' navigation `<nav>` element.
     * This enables screen reader users to distinguish the navigation areas. */
    ariaLabel: string;
}
declare const JumpLinks: {
    (props: IJumpLinksProps): React$1.JSX.Element;
    displayName: string;
};

type ILayerProps = IBasicProps & {
    /** Callback that is called on backdrop click. If undefined, onClose is triggered instead */
    onBackdropClick?: (event?: MouseEvent) => void;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React$1.HTMLAttributes<HTMLDivElement> | Record<`data-${string}`, string | number | boolean>;
    /** Deprecated, not used anymore, due to A11y issues */
    noFocusLock?: boolean;
    /** Layer returns focus automatically after closing. Doesn't work for a stacked Layer. Default: true */
    returnFocus?: boolean;
    /** Callback for keyboard focus handling, if focus get lost. Highly recommended for a stacked Layer. */
    onFocusLoss?: () => void;
    /** Please pass the layout by a literal type  */
    layout?: "left" | "right" | "left-75" | "right-75" | "right-25" | "full";
    /** If set to true, the Layer is displayed */
    open?: boolean;
    /** The text that shall be displayed to close the Layer again. If the text label is not defined, the Layer appears in model mode */
    closeLinkLabel: string;
    /** Callback function that will be called when you click the close button */
    onCloseClick?: (ev: React$1.MouseEvent<HTMLElement>) => void;
    /** You can set one Button or more Buttons inside the Layer header in the right corner with this prop. */
    buttons?: React$1.ReactNode;
    /** If you implement more than one Button in the Layer header using the buttons
     *  prop, you can set your own aria-label. Default value is "Button Group" (equivalent German value implemented
     as well). */
    ariaLabelButtons?: string;
    /** Deprecated, not used anymore */
    innerRef?: (r: HTMLElement) => void;
} & ({
    /** ARIA-Label for the Layer for screen reader users (required if ariaLabelledBy is not set). You should only use ariaLabel when it is not possible to have the label visible on screen, see https://www.symphonious.net/2010/12/07/aria-labelledby-vs-aria-label/. */
    ariaLabel: string;
    ariaLabelledBy?: never;
} | {
    /** Id of the element (for example a headline) that labels this Layer (required if ariaLabel is not set). You should use ariaLabelledBy for labels that are visible on screen. */
    ariaLabelledBy: string;
    ariaLabel?: never;
});
declare const Layer: {
    (props: ILayerProps): React$1.JSX.Element;
    displayName: string;
};

type ILayoutContainerProps = IBasicProps & {
    /** Use this to set the CSS display property (e.g. for nested containers). Default: "flex" */
    display?: "flex" | "block";
    /** HTML tag for container. Default: "div" */
    as?: "div" | "aside" | "ul" | "ol" | "li";
    /** This defines the default behavior for how flex items are laid out along the cross axis on the current line. */
    alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
    /** This defines the alignment along the main axis. */
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between";
    /** Children will be stacked vertical for the defined viewport and below  */
    stack?: "xs" | "sm" | "md" | "lg" | "xl";
    /** Defines the wrap behaviour if children don't fit a  single row */
    wrap?: "nowrap" | "wrap" | "wrap-reverse";
    /** Reverse element flow of children depending on the viewport */
    flowReverse?: "xs" | "sm" | "md" | "lg" | "xl";
    /** CSS property gap. Default: "none".
     xxsmall = 4px / 4px, xsmall = 8px / 8px, small = 12px / 16px , medium = 16px / 24px, large = 24px / 32px */
    gap?: "none" | "xxsmall" | "xsmall" | "small" | "medium" | "large";
    /** CSS property gap. Default: "none". If rowGap is not set, gap will be used for both row and column gaps.
     xxsmall = 4px / 4px, xsmall = 8px / 8px, small = 12px / 16px , medium = 16px / 24px, large = 24px / 32px */
    rowGap?: "none" | "xxsmall" | "xsmall" | "small" | "medium" | "large";
    /** Spacing below component
     large (default) = 24px / 32px, medium = 16px / 24px */
    componentSpacing?: "small" | "medium" | "large";
    /** This defines the ability for a flex item to grow if necessary. CSS property flex-grow */
    grow?: number;
    /** This defines the ability for a flex item to shrink if necessary. Values from 0-5 can be used */
    shrink?: number;
    /** String accepted as a value. It can be a length (e.g. 20%, 5rem, etc.) or a keyword.    */
    basis?: string;
};
declare const Layout: React$1.FC<ILayoutContainerProps>;

type LineChartXValue$1 = Date;
type LineChartYValue$1 = number | Date;
type LineChartFormatterFn<T> = (entry: T) => string;
interface ILineChartAxis<T> {
    /** @deprecated: don't use "day", "week", ... "year" any more, use number   */
    steps?: T extends LineChartXValue$1 ? "day" | "week" | "month" | "3months" | "6months" | "year" : number;
    min?: T;
    max?: T;
    /** @deprecated: markers not specified anymore   */
    markerRange?: boolean;
    tickValues?: T[];
    tickFormatter?: LineChartFormatterFn<T>;
    mobileTickFormatter?: LineChartFormatterFn<T>;
    /** @deprecated: markers not specified anymore   */
    tooltipFormatter?: LineChartFormatterFn<T>;
    gridStyle?: "none" | "solid" | "dashed";
}
interface ILineChartAxisOptions {
    /** @deprecated: yAxis all time on left side; right side position not specified anymore   */
    labelPosition?: "left" | "right";
    /** @deprecated: not used anymore   */
    simpleGrid?: boolean;
    xAxis?: ILineChartAxis<LineChartXValue$1>;
    yAxis?: ILineChartAxis<LineChartYValue$1>;
}
interface ILineChartDataPoint$1 {
    x: LineChartXValue$1;
    y: LineChartYValue$1;
}
interface ILineChartLine {
    dataPoints: ILineChartDataPoint$1[];
    label: string;
    style?: "style-1" | "style-2" | "style-3" | "style-4" | "style-5";
    weight?: "regular" | "bold";
    stepped?: boolean;
}

type LineChartXValue = Date;
type LineChartYValue = number | Date;
type xAxisSteps = "day" | "week" | "month" | "3months" | "6months" | "year";
interface IAxis<T> extends Omit<ILineChartAxis<T>, "steps"> {
    steps?: T extends LineChartXValue$1 ? xAxisSteps : number;
}
interface IAxisOptions extends Omit<ILineChartAxisOptions, "yAxis" | "xAxis"> {
    xAxis?: IAxis<LineChartXValue$1>;
    yAxis?: IAxis<LineChartYValue$1>;
}
interface ILineChartTooltipOptions {
    titleFormatter?: any;
    valueFormatter?: any;
}
interface ILineChartDataPoint {
    x: LineChartXValue;
    y: LineChartYValue;
}
interface ILine extends Omit<ILineChartLine, "style" | "weight"> {
    dataPoints: ILineChartDataPoint[];
    label: string;
    style?: "style-1" | "style-2" | "style-3" | "style-4" | "style-5";
    weight?: "regular" | "bold";
    stepped?: boolean;
}
interface ITree {
    name: string;
    label: string;
}
interface ILineChartProps extends IBasicProps {
    lines: ILine[];
    axisOptions?: IAxisOptions;
    tooltipOptions?: ILineChartTooltipOptions;
    selectionBar?: ITree[];
    selectionValue?: string;
    interactive?: boolean;
    formatterYLabel?: (entry: LineChartYValue$1) => string;
    onSelectionChange?: (newValue: string) => void;
    /** Enable a bold horizontal zero line. */
    zeroLineBold?: boolean;
    /** @deprecated */
    tooltipComponent?: any;
    loadingIndicator?: boolean;
}
declare const LineChart: {
    (props: ILineChartProps): React$1.JSX.Element;
    displayName: string;
};

interface ILink extends IButtonBaseProps {
    /** Button name - will only get passed for button elements, so will be omitted if you specify href. */
    name?: string;
    /** Defines the text that is shown as LinkText. */
    label: React$1.ReactNode;
    /** @deprecated: Will be renamed to `label` and will be made mandatory in the next major version. */
    children?: React$1.ReactNode;
    /**
     * Function to be called on the onClick event. This function will not be called if the link is disabled.
     * The `name` parameter will return the name you passed to the component.
     */
    onClick?(e: React$1.MouseEvent<HTMLElement>, name?: string): void;
    /**
     * If true, this component will be decorative only and will not contain the `<a>` or `<button>` tag itself.
     * This is useful for non-interactive elements inside a card or other components.
     */
    nonInteractive?: boolean;
    /**
     * If true, this component will animate the entire card or other components it is inside.
     * Make sure that the link text is meaningful (e.g. "Buy Product", "Cancel"). It must not contain general phrases
     * (e.g. "Read more", "Select").
     */
    a11yMeaningfulLabel?: boolean;
}
declare const Link: {
    ({ loadingText, ...props }: ILink): React$1.JSX.Element;
    displayName: string;
};

interface IListItemProps extends IBasicProps {
    /** (Note: deprecated in List component) Item value, defines the start of sequence, mostly in context of numbering or alphabetical sequence. */
    value?: string | number;
    /** Can be used to assign other icon then default icon, see also Icon in Styleguide portal */
    icon?: IIcon;
    /** Assign color for coloring the assigned icon, standard value is 'default', see also color definitions in Styleguide portal on page Color */
    iconColor?: "default" | "error" | "success" | "note" | "primary-1" | "primary-2" | "secondary-1" | "secondary-2" | "secondary-3" | "secondary-4" | "secondary-5" | "secondary-6";
    /** Label that describes the Icon if the default icon label is not sufficient. */
    iconLabel?: string;
}
declare const ListItem: {
    ({ iconColor, ...props }: IListItemProps): React$1.JSX.Element;
    displayName: string;
};

interface IListProps extends IBasicProps {
    /** Determines the list is ordered list, by default numeric */
    isOrdered?: boolean;
    /** Determines in combination with prop 'isOrdered' that the list ordered with leading letter */
    isAlphabetical?: boolean;
    /** Can be used to assign other icon then default icon, see also Icon in Styleguide portal */
    icon?: IIcon;
    /** Assign color for coloring the assigned icon, see also color definitions in Styleguide portal on page Color */
    iconColor?: "default" | "error" | "success" | "note" | "primary-1" | "primary-2" | "secondary-1" | "secondary-2" | "secondary-3" | "secondary-4" | "secondary-5" | "secondary-6";
    /** Label that describes the Icon if the default icon label is not sufficient (for example an icon is used in different colors). You can set icon Label for each list item as well. */
    iconLabel?: string;
    /** Choice of text style */
    textSize?: "copy-text" | "helper-text" | "lead-text";
}
declare const List: {
    ({ isAlphabetical, textSize, iconColor, ...props }: IListProps & IListItemProps): React$1.JSX.Element;
    Item: {
        ({ iconColor, ...props }: IListItemProps): React$1.JSX.Element;
        displayName: string;
    };
    displayName: string;
};

interface ILiveRegionRef {
    announce: (announcement: string | (() => ReactNode), callback?: () => void) => void;
}
interface ILiveRegionProps extends IBasicProps {
    ariaLive?: "polite" | "assertive";
}
declare const LiveRegion: React$1.ForwardRefExoticComponent<ILiveRegionProps & React$1.RefAttributes<ILiveRegionRef>>;

type IMetabarProps = IBasicProps & {
    /**
     * Standard component to be rendered as a navigation link; e.g. you can add a ReactRouter link here.
     * If no actionProps are defined in the navigationTree item, a "normal" LSG Action component (<a> or <button>
     * will be rendered.
     */
    navigationActionAs?: any;
    /** Tree of the navigation. */
    navigationTree: any[];
    /** @deprecated 21.02.24: Use navigationAriaLabel instead. */
    navigationTreeAriaLabel?: string;
    /** Provide a unique ARIA-label for the social links navigation `<nav>` element (required).
     * This enables screen reader users to distinguish the navigation areas. */
    navigationAriaLabel: string;
    /** Centers the Metabar for the ProcessPage Layout */
    horizontallyCentered?: boolean;
} & ({
    socialLinks?: undefined;
} | {
    /** Content of the social links area. */
    socialLinks: ReactNode;
    /** Provide a unique ARIA-label for the social links navigation `<nav>` element (required if you set socialLinks).
     * This enables screen reader users to distinguish the navigation areas. */
    socialLinksAriaLabel: string;
});
/** @deprecated 19.2.2025 - Use metaBar props directly from Footer instead. For the ProcessPage, use the
 *  FooterMetabar component instead.   */
declare const Metabar: {
    ({ navigationAriaLabel, horizontallyCentered, navigationTreeAriaLabel, ...props }: IMetabarProps): React$1.JSX.Element;
    displayName: string;
};

interface INumberTextFieldProps extends Omit<ITextFieldProps, "onChange" | "value"> {
    /** Is called on each change and passes the new value and the id of the component. Expected types are string |
     *  Date | number */
    onChange?: (value: any, name: string, event: React$1.SyntheticEvent<HTMLElement>) => void;
    /** Sets the value of the input. */
    value: string | number;
    /** Used only, when value type is a number. If no formatter is defined by user, an internal formatter become applied (default-format: decimal, fractionMin 0, fractionMax 5) */
    valueNumberFormatter?: (value: number) => string;
    /** Number of decimal places (fraction digits)
     * Example, when working with currencies, you can set this to 2.
     * Maximum number is 21, anything above will be set to 21.
     * */
    decimalDigits?: number;
    /** With spacing="dense", the text input whitespace of the NumberTextField is reduced by smaller paddings and bottom-margins.
     * Set spacing="default" only in special FormContainer with spacing="dense" prop (edge) cases where you wish to override the "dense" spacing
     *   in an individual NumberTextField. In this case, the NumberTextField will receive its default whitespace within the FormContainer. */
    spacing?: "default" | "dense";
}
declare const NumberTextField: {
    ({ optional, readOnly, clearIcon, ...otherProps }: INumberTextFieldProps): React$1.JSX.Element;
    displayName: string;
};

interface IOnPageNavigationProps extends IBasicProps {
    /** The navigation structure */
    navigationTree: INavigationTree[];
    /** Standard component to be rendered as a navigation link; e.g. you can add a ReactRouter link here
     * If no actionProps are defined in the navigationTree item, a "normal" LSG Action component (<a> or <button>
     * will be rendered.
     */
    navigationActionAs?: any;
    /** Label for CTA/Primary Button */
    ctaLabel: string;
    /** External link address. An 'a'-tag will be used. */
    ctaHref?: string;
    /** Render an alternative action component, e.g. a React Router link */
    ctaActionAs?: any;
    /** These are the props for the alternative action component (e.g. a React Router link) */
    ctaActionProps?: any;
    /** Target window.  */
    ctaTarget?: string;
    /** The button type - will only get passed for button elements, so will be omitted if you specify href */
    ctaType?: string;
    /** The button name - will only get passed for button elements, so will be omitted if you specify href */
    ctaName?: string;
    /** Will be passed to the internal 'a' element */
    ctaRel?: string;
    /** The button value - will only get passed for button elements, so will be omitted if you specify href */
    ctaValue?: string;
    /** button onClick event */
    onCtaClick?: (event: React$1.MouseEvent<HTMLElement>, name: string) => void;
}
declare const OnPageNavigation: {
    (props: IOnPageNavigationProps): React$1.JSX.Element;
    displayName: string;
};

interface IOptionsTextFieldProps extends Omit<ITextFieldProps, "type" | "hostId" | "value"> {
    /** This label is the leading label of the molecular `OptionsTextField` combining a Text Field and a Select option element.
     * A11y relevant field - hidden */
    groupLabel: string;
    /** Input type defined by a literal type */
    type?: "text" | "password" | "date" | "number";
    /** Provides more context for the value of the Text Field such as options for the Select element */
    optionsProps?: ISelectProps;
    /** Sets the value of the input. (String or number.) Date handled with string type */
    value: string | number;
    /** Is called on every change and passes the new value and the name of the component. Date types are handled with string */
    onChange?: (value: string | number, name: string, event: React$1.SyntheticEvent<HTMLElement>) => void;
    /** @deprecated Triggered on key press. The anticipated removal goes along with the removal in the basic Text Field */
    onKeyDown?: (key: string, name: string, event: React$1.KeyboardEvent<HTMLElement>) => void;
    /** @deprecated: Will be removed with the next major release, because it was only intended to use internally. Contact us
     * if still required. Triggered on click of the input */
    onClick?: (event: React$1.MouseEvent<HTMLElement>, name: string) => void;
    /** @deprecated: Use as="textarea" instead. Changed in terms of consistency with other components. Multi-Line, render as `<TextArea />`. */
    textArea?: boolean;
    /** @deprecated Please use the new DateTextField instead
     * Date Object with the earliest date that can be selected. The minimum date is included in the selectable range.
     * Ensure, that minDate <= maxDate. Only year, month and day information are used. The time information is ignored.
     */
    minDate?: Date;
    /** @deprecated Please use new DateTextField instead
     * Date Object with the latest date that can be selected. The maximum date is included in the selectable range.
     * Ensure, that minDate <= maxDate. Only year, month and day information are used. The time information is ignored.
     */
    maxDate?: Date;
    /** Used only when value type is a number and when you want to use your own formatter */
    valueNumberFormatter?: (value: number) => string;
    /** Number of decimal places (fraction digits), if prop "type" = "number"
     * Example: When working with currencies, you can set this to 2.
     * The use of this prop only makes sense in combination with the option list - not in combination with a user-defined number formatter.
     * */
    decimalDigits?: number;
    /** With spacing="dense", the text input whitespace of the OptionsTextField is reduced by smaller paddings and bottom-margins.
     * Set spacing="default" only in special FormContainer with spacing="dense" prop (edge) cases where you wish to override the "dense" spacing
     *   in an individual OptionsTextField. In this case, the OptionsTextField will receive its default whitespace within the FormContainer. */
    spacing?: "default" | "dense";
}
declare const OptionsTextField: {
    ({ optional, readOnly, clearIcon, optionsProps, onKeyDown, onClick, type, value, textArea, groupLabel, as, ...otherProps }: IOptionsTextFieldProps): React$1.JSX.Element;
    displayName: string;
};

interface IPaginationProps extends IBasicProps {
    /** label */
    label?: React$1.ReactNode;
    /** An aria-label, which is required if no label is provided. */
    ariaLabel?: string;
    /** Total number of dots */
    numPages: number;
    /** The index of the current active dot index, starts with 1 */
    activePage: number;
    /** Function to be called when point is clicked */
    onClick: (page: number, e: React$1.MouseEvent<HTMLElement>) => void;
    /** Array of IconLink props to provide hrefs to the links for SEO purposes. Example for an IconLink prop: {href:
     *  "#?page=3", htmlAttrs: {aria-label: "Go to page 3"}}
     * Keep in mind: paginationLinks[0] is the link for the first navigation element, labelled "1"
     */
    paginationLinks?: Array<Omit<IButtonBaseProps, "disabled" | "refCallback" | "onClick">>;
    /** Accepts a function which returns a string value that provides a user-friendly name for the slider elements (navigation buttons and pages). This is important for screen reader users.
     * The `page` argument is the page (1..n) and the `selected` argument is true, if the page is the currently selected page.
     * */
    itemAriaLabelFormatter?: (page?: number, isSelected?: boolean) => string;
    /** An aria-label for the previous button. */
    previousButtonAriaLabel?: string;
    /** An aria-label for the next button. */
    nextButtonAriaLabel?: string;
}
declare const Pagination: {
    (props: IPaginationProps): React$1.JSX.Element;
    displayName: string;
};

interface IParagraphProps extends IBasicProps {
    /** Alternative HTML tag that is rendered for paragraph. */
    as?: string;
    /** Sets the paragraph type. */
    size?: "copy-text" | "helper-text" | "lead-text" | "error-text" | "info-text";
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React$1.HTMLAttributes<HTMLParagraphElement> | Record<`data-${string}`, string | number | boolean>;
    /** Switch between left and centered layout. Default is left. */
    centeredLayout?: boolean;
    /** Deactivate automatic hyphens if you want to set them manually */
    manualHyphenation?: boolean;
    /** Sets the line length of the paragraph. Default is 768px. Wide is 960px */
    lineLength?: "default" | "wide";
    /** Number of columns: 1, 2, 3, or 4 */
    columns?: 1 | 2 | 3 | 4;
    /** Show vertical dividing lines between columns */
    columnRuler?: boolean;
}
declare class Paragraph extends React$1.Component<IParagraphProps, {}> {
    static displayName: string;
    static defaultProps: Partial<IParagraphProps>;
    render(): React$1.JSX.Element;
}

interface IFocalPoint {
    offsetLeft: number;
    offsetTop: number;
}
interface IPictureProps extends IBasicProps {
    /** Alternative text for the image (required). */
    alt: string;
    /** Array of objects that have the format of the `<source>` element. */
    source?: (React$1.SourceHTMLAttributes<HTMLSourceElement> & {
        focalPoint?: IFocalPoint;
    })[];
    /** src attribute of the `<img>` element (required). Is used as a fallback for browsers that do not support the picture element.  */
    imgSrc?: string;
    /**
     * @deprecated Use the props source and imgSrc instead.
     * Image source. Either just string or object
     * { default: *default/fallbackImageUrl*, *xs: *urlForXsViewport*, sm: *...*, md: *...*, lg: *...*, xl: *...*, }
     */
    src?: string | {
        default: string;
        xs?: string;
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
    };
    /** If set to true, no `<img />` tag will be used. Instead a div container with the img provided in src is set as background. */
    asBackgroundImage?: boolean;
    /** Whether the element will be styled as display: inline. */
    asInline?: boolean;
    /**
     * Focal Point is set to the most interesting feature in the image. The point will be placed in the center if the
     * image needs to be cropped.
     */
    focalPoint?: IFocalPoint;
    /** @deprecated use focalPoint instead */
    backgroundFocalPoint?: IFocalPoint;
    /** If set, the image is cropped to ensure one of the provided ratios. */
    ratio?: "16-9" | "21-9" | "4-3" | "1-1" | "3-4" | "9-16" | "full-height";
    /** Caption below the image. Only available when Picture is not set `asBackgroundImage`. */
    caption?: string;
    /** Width of the `<img />`. */
    imgWidth?: number;
    /** Height of the `<img />`. */
    imgHeight?: number;
    /** Max-width of the `<img />`. */
    maxWidth?: number;
    /** @ignore */
    style?: React$1.CSSProperties;
    /** Additional attributes for the `<img>` element inside the picture. */
    imgAttrs?: React$1.ImgHTMLAttributes<HTMLImageElement>;
    /** Shows a yellow surface layering on top of each image. */
    yellowElevator?: boolean;
}
declare const Picture: {
    ({ focalPoint, backgroundFocalPoint, ...props }: IPictureProps): React$1.JSX.Element;
    displayName: string;
};

type IPortalHeaderProps = IBasicProps & {
    /** IconLink(s) at the bottom right of the desktop menu  */
    iconLinksQuickLink?: ReactNode;
    /** IconLink(s) for the mobile header */
    iconLinksMobileHeader?: ReactNode;
    /** IconLink(s) for the mobile sidebar */
    iconLinksMobileSidebar?: ReactNode;
    /** @deprecated 09.11.2023 - Use `logoLabel` instead. Alternative text for the logo. */
    logoAlt?: string;
    /** Label for the logo, rendered as `alt`- or `aria-label`-attribute. Use the default values for Commerzbank or
     * custom logos or assign your own.
     * If the logo is a link or a button, an additional action-label can be assigned using `logoHtmlAttrs`. */
    logoLabel?: string;
    /** Image source for a custom logo on mobile viewports. */
    logoSrcMobile?: string;
    /** Image source for a custom logo on desktop viewports. */
    logoSrcDesktop?: string;
    /** If set to `true` or if you do not provide a `logoHref` or other actions, the logo will be rendered as an image
     * without any interaction. */
    logoDisabled?: boolean;
    /** URL of the link (e.g. home page) that will be opened on logo click. */
    logoHref?: string;
    /** Name for navigation element. If logoName is equal to the current navigation value (currently opened page),
     * htmlAttrs are set to "aria-current":"page" */
    logoName?: string;
    /** Additional (action-)HTML attributes can be added here, e.g. target, tabindex or a different aria-label for the
     * link or button element, e.g.: logoHtmlAttrs={{ "aria-label": "My custom action" }} */
    logoHtmlAttrs?: React$1.ButtonHTMLAttributes<HTMLButtonElement> | React$1.AnchorHTMLAttributes<HTMLAnchorElement> | Record<`data-${string}`, string | number | boolean>;
    /** Render an alternative action component, e.g. a React Router link. */
    logoActionAs?: any;
    /** Props for the alternative action component (e.g. a React Router link). */
    logoActionProps?: any;
    /** Function to be called on onClick-event. Not called when the logo is disabled. */
    onLogoClick?: (e: React$1.MouseEvent<HTMLElement>, name: string) => void;
    /** click event callback for the mobile menu button (hamburger menu) */
    onMobileMenuClick?: (e: React$1.MouseEvent<HTMLElement>, name: string) => void;
    /** Text/claim on the upper left. */
    segmentLabel?: string;
    /**
     * An array of objects like:
     * {
     *   label: string,
     *   name?: string;
     *   href?: string,
     *   children?: INavigationItem[] (an array of objects like this one)
     * }
     * Also, please have a look at Markenportal/Developer Guidelines
     */
    navigationTree: INavigationItem[];
    /** @deprecated 30.01.24, use navigationAriaLabel instead. */
    navigationTreeAriaLabel?: string;
    /** Provide a unique ARIA-label for the main navigation `<nav>` element (required).
     * This enables screen reader users to distinguish the navigation areas. */
    navigationAriaLabel: string;
    /** ARIA-Label for the flyout dialog for screen reader users (required). */
    menuFlyoutAriaLabel: string;
    /** Standard component to be rendered as a navigation link; e.g. you can add a ReactRouter link here
     * If no actionProps are defined in the navigationTree item, a "normal" LSG Action component (<a> or <button>
     * will be rendered.
     */
    navigationActionAs?: any;
    /** @deprecated 21.02.24: Use segmentNavigationAriaLabel instead. */
    segmentNavigationTreeAriaLabel?: string;
    /** Name of the navigation */
    name?: string;
    /** Current selected navigation item (which can also be a deep menu item) */
    value?: string;
    /** Current selected navigation item in the segment menu (top navigation) */
    segmentValue?: string;
    /** The onChange handler returns the "name" of the navigation item as value */
    onChange?: (value: string, name: string, event: React$1.SyntheticEvent<HTMLElement>) => void;
    /** The onSegmentChange handler returns the "name" of the navigation item as value */
    onSegmentChange?: (value: string, name: string, event: React$1.SyntheticEvent<HTMLElement>) => void;
    /** Decides if the navigation should be sticky */
    isSticky?: boolean;
} & ({
    segmentNavigationTree?: undefined;
    segmentNavigationAriaLabel?: undefined;
} | {
    /**
     * This has to be an array of objects looking like:
     * {
     *   label: string,
     *   name?: string;
     *   href?: string,
     *   children?: INavigationItem[] (an array of more objects looking like this one)
     * }
     */
    segmentNavigationTree: INavigationItem[];
    /** Provide a unique ARIA-label for the segment navigation `<nav>` element (mandatory if you set segmentNavigationTree).
     * This enables screen reader users to distinguish the navigation areas. */
    segmentNavigationAriaLabel: string;
}) & ({
    iconLinksInteraction?: undefined;
} | {
    /** IconLink(s) at the top right of the Desktop menu */
    iconLinksInteraction: ReactNode;
    /** Provide a unique ARIA-label for the icon links navigation `<nav>` element (mandatory if you set iconLinksInteraction).
     * This enables screen reader users to distinguish the navigation areas. */
    iconLinksInteractionAriaLabel: string;
});
declare const PortalHeader: {
    ({ logoLabel, logoAlt, navigationAriaLabel, navigationTreeAriaLabel, segmentNavigationAriaLabel, segmentNavigationTreeAriaLabel, ...restProps }: IPortalHeaderProps): React$1.JSX.Element;
    displayName: string;
};

interface IProcessPageProps extends IBasicProps {
    /** Title that is shown in the header bar on top of the page. It may contain the name of the current process
     *  step, e.g. `Process Step 1/5`. */
    headerTitle?: string;
    /** The HTML tag that is rendered for the title that is shown in the header bar on top of the page.
     * Note: For a11y reasons, the header title should not be a h1 tag. Instead the headline on your content page
     * should be a h1. If you use a h1 in your content, the `headerTitle` is connected by aria-describedby to your h1
     * tag. */
    headerTitleAs?: keyof React$1.JSX.IntrinsicElements;
    /** Whether to force a burger menu and hide the navigation per default. */
    forceBurgerMenu?: boolean;
    /** @Deprecated(21.10.24): The footer will soon always be used as a separate component
     * For CCB usage only: If true, the footer menu is taken from the json script tags that are sent with the page. */
    hasPortalFooter?: boolean;
    /** Percentage (0-100) of the progress for the current step. It will be displayed as a bar below the process header. */
    progress?: number;
    /** React fragment of icon links */
    iconLinks?: ReactNode;
    /** @Deprecated(21.10.24): The footer will be used as a separate component
     * Tree of the footer navigation */
    footerNavigationTree?: INavigationTree[];
    /** @deprecated: Use footerNavigationAriaLabel instead. Use the default localised ARIA-label for the footer navigation or provide your own. */
    footerNavigationTreeAriaLabel?: string;
    /** @Deprecated(21.10.24): The footer will be used as a separate component
     * Use the default localised ARIA-label
     *  for the footer navigation or provide your own. This enables screen reader
     * users to distinguish the navigation areas. */
    footerNavigationAriaLabel?: string;
    /** Tree of the side navigation. For a React Router link, you can use this prop together with the
     *  'navigationActionAs' prop and set 'actionProps' in a navigationTree item. */
    navigationTree?: INavigationTree[];
    /** Use the default localised ARIA-label for the side navigation or provide your own. This enables screen reader
     * users to distinguish the navigation areas. */
    navigationAriaLabel?: string;
    /** Standard component to be rendered as a navigation link; e.g. you can add a ReactRouter link here. See https://markenportal.commerzbank.com/styleguide/using-navigation-components/.
     * If no actionProps are defined in the navigationTree item, a "normal" LSG Action component (<a> or <button>)
     * will be rendered. This prop is not meant for setting a custom HTML element. */
    navigationActionAs?: any;
    /** Label that is placed above the menu of the side navigation */
    navigationLabel?: string;
    /** The value contains the name of the menu item that is active/selected */
    value?: string;
    /** Callback that is called if a menu item was clicked */
    onChange?: (newValue: string, event?: any) => void;
    /** Activate the new navigation for the ProcessPage. No sub steps allowed, view examples for more information. */
    newNavigation?: boolean;
    /** Index of the active step which will be highlighted */
    activeValue?: number;
    /** Removes semantic Elements from the ProcessPageHeader, this is recommended when it's used together with the
     *  PortalHeader */
    noSemanticElements?: boolean;
    /** Makes the Header sticky. Please only use it when there is no PortalHeader on the Page. Default is "false". */
    stickyNavigation?: boolean;
}
declare const ProcessPage: {
    ({ footerNavigationAriaLabel, footerNavigationTreeAriaLabel, headerTitleAs, ...props }: IProcessPageProps): React$1.JSX.Element;
    displayName: string;
};

interface IProductStageProps extends IBasicProps {
    /** Set headline */
    headline: React$1.ReactNode;
    /** The HTML tag that is rendered for the headline. */
    headlineAs?: string;
    /** Set overline */
    overline?: React$1.ReactNode;
    /** an alternative html tag for the overline */
    overlineAs?: string;
    /** Set subline */
    subline?: string;
    /** an alternative html tag for the subline */
    sublineAs?: string;
    /** Set a clipped image wich will be placed on a yellow background. */
    foregroundImageSrc?: string;
    /** See Picture component: Src attribute of the `<img>` element. Is used as a fallback for browsers that do not support the picture element  */
    backgroundImageImgSrc?: string;
    /** See Picture component: Array of Objects that have the format of the `<source>` element. */
    backgroundImageSource?: React$1.SourceHTMLAttributes<HTMLSourceElement>[];
    /** The focal point within the background image - default( left: 50%, Top: 30%(>sm) | 20%(xs) */
    backgroundImageFocalPoint?: IFocalPoint;
    /** Set the background color of the components right area when using a cutout image */
    backgroundColor?: "primary" | "medium" | "light";
    /** An alternative text describing the image (if not set, the image is disregarded by screen readers - see A11Y remarks) */
    alt?: string;
    /** CTA below leadText. */
    button?: ReactNode;
    /** A content area that can be used for texts or lists */
    content?: React$1.ReactNode;
    /** @deprecated (2023-08-30) This property is obsolete and should be omitted, it has no effect and will be removed a future major release.  */
    scrollerText?: string;
    /** Callback function that is called if button is clicked */
    onButtonClick?: () => void;
    /** @deprecated (2024-07-03) This property is obsolete and should be omitted. Scroller will be removed a future major release.  */
    onScrollerClick?: () => void;
    /** deactivate automatic hyphens if you want to set them manually */
    manualHyphenation?: boolean;
    /** Badge text */
    badgeText?: string;
    /** Badge icon */
    badgeIcon?: IIcon;
    /** Badge color */
    badgeColor?: "highlight" | "supplementary" | "optional";
    /** Badge position */
    badgePosition?: "overline" | "subline";
}
declare const ProductStage: {
    ({ headlineAs, ...props }: IProductStageProps): React$1.JSX.Element;
    displayName: string;
};

interface IRadioProps extends IBasicProps {
    /** Boolean value indicating if radio button is checked, prefer using a Radio.Group to set the value of a distinct Radio! */
    value?: boolean;
    /** Boolean value indicating if radio button is disabled */
    disabled?: boolean;
    /** Boolean value indicating if radio button is invalid */
    invalid?: boolean;
    /** Text on the right side of the Radio */
    label?: string;
    /** Set the internal value attribute for the 'input type="radio"' HTML element with this prop.
     * This prop is used as the value for the Radio.Group component! */
    name?: string;
    /** A small helper text below the label */
    helperText?: ReactNode;
    /** Error text below the label. If you set this prop, the Radio is turned to invalid, even if the invalid prop
     *  is false. */
    errorText?: ReactNode;
    /** Function to be called whenever the radio button is clicked. Not called when the radio button is disabled.
     * Prefer using a Radio.Group over this onChange handler to ensure that only one Radio is selected at the same time. */
    onChange?: (value: boolean, name: string, event: React$1.SyntheticEvent<HTMLInputElement>) => void;
    /** This prop sets the HTML 'title' attribute value. It also shows a tooltip with extra info when hovering over
     * the radio button,helping users understand the radio option. */
    title?: string;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React$1.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    /** Use this prop to control if the aria-live attribute is set for the errorText */
    errorTextAriaLive?: boolean;
}
declare const Radio: {
    (props: IRadioProps): React$1.JSX.Element;
    displayName: string;
    Group: {
        (props: IRadioGroupProps): React$1.JSX.Element;
        displayName: string;
    };
};

interface ISearchProps extends IBasicProps {
    /** The look of the Search component: The "hero" variant is designed as a prominent and central element of a website's user experience, while the smaller "default" version is primarily used in side navigations and headers. */
    appearance?: "hero" | "default";
    /** Whether the element will be rendered as an inline element. As of version 19, the Search with default
     *  appearance will be rendered as an inline element even if the inline prop is not set. */
    inline?: boolean;
    /** The current value of the search input. */
    value: string;
    /** A human-interpretable label for the search input (used for screen readers). */
    label: string;
    /** The name of the search input. */
    name?: string;
    /** The placeholder text for the search input. */
    placeholder?: string;
    /** Disables the input and the action elements. */
    disabled?: boolean;
    /** Sets the loading status: Shows a Spinner component if set to true.  */
    loading?: boolean;
    /** Displays an 'x' clear icon button used for deleting text input.  */
    clearIcon?: boolean;
    /** Hides the submit button. */
    inlineSubmitHidden?: boolean;
    /** Slot for additional icon buttons (IconLinks). */
    additionalActions?: React$1.ReactNode;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...). */
    htmlAttrs?: React$1.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    /** Optional ref for the native input element. */
    inputRef?: React$1.MutableRefObject<HTMLInputElement>;
    /** Sets the focus state. */
    hasFocus?: boolean;
    /** Sets the hover state. */
    hasHover?: boolean;
    /** Is called on blur. */
    onBlur?: (event: React$1.FocusEvent<HTMLElement>, name: string) => void;
    /** Is called on focus. */
    onFocus?: (event: React$1.FocusEvent<HTMLElement>, name: string) => void;
    /** Triggered on key press. */
    onKeyDown?: (key: string, name: string, event: React$1.KeyboardEvent<HTMLElement>) => void;
    /** Is called on each change and passes the new value and the id of the component. Expected types are string | Date | number. */
    onChange?: (value: string, name: string, event: React$1.SyntheticEvent<HTMLElement>) => void;
    /** Is called on submit. */
    onSearch?: (value: string, name: string, event: React$1.FormEvent<HTMLFormElement>) => void;
}
declare const Search: {
    ({ appearance, inline, ...props }: ISearchProps): React$1.JSX.Element;
    displayName: string;
};

interface ISubSectionProps extends IBasicProps {
    /** Whether a separator should be displayed below the section to separate two sections with the same theming */
    separatorBottom?: boolean;
    /** Overwrites the HTML tag that is rendered for the SubSection component. */
    as?: "div" | "section" | "article";
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React$1.HTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
    /** @deprecated */
    look?: "standard" | "small";
    /** spacing that is applied before and after the section content */
    spacing?: "standard" | "small";
}

interface ISectionProps extends IBasicProps {
    /** @deprecated (29.01.2024) - Use the 'spacing' prop instead. */
    look?: "standard" | "large" | "marketing" | "technical";
    /** Spacing that is applied before and after the Section content. */
    spacing?: "standard" | "large" | "marketing" | "technical";
    /** Whether a separator should be displayed below the Section to separate two Sections with the same theming. */
    separatorBottom?: boolean;
    /** @deprecated: Not needed anymore. Whether the contents of the section should use the full screen width instead of the content area. This is needed
     * when using components like the GallerySlider, which displays contents outside the content area. Use a
     * Section.Content component inside the full-width-section to show contents inside the content area.
     */
    fullWidth?: boolean;
    /** Overwrites the HTML tag that is rendered for the Section component. */
    as?: "section" | "article" | "main" | "div";
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React$1.HTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
    /** Sets the content width for the whole Section based on the maximum number (12) of Grid columns per row. */
    contentWidth?: 12 | 10 | 8 | 6;
}
declare const Section: {
    ({ separatorBottom, look, spacing, as, fullWidth, contentWidth, ...props }: ISectionProps): React$1.JSX.Element;
    /** @deprecated rename to Subsection with the correct english casing */
    SubSection: {
        ({ look, spacing, as, ...props }: ISubSectionProps): React$1.JSX.Element;
        displayName: string;
    };
    Subsection: {
        ({ look, spacing, as, ...props }: ISubSectionProps): React$1.JSX.Element;
        displayName: string;
    };
    displayName: string;
};

interface ISideNavigationPageProps extends IBasicProps {
    /**
     * This has to be an array of objects looking like:
     * {
     *   expanded?: boolean, (this sets the children of this item to be expanded/collapsed)
     *   active?: boolean, (this sets this item active / sets the indicator on this item)
     *   indicator?: boolean, (this enables an indicator for the children of this item)
     *   id?: string,
     *   label: string,
     *   icon?: string,
     *   href?: string,
     *   onClick?: (ev: React.MouseEvent<any>) => void,
     *   children?: INavigationItem[] (an array of more objects looking like this one)
     * }
     */
    navigationTree?: INavigationItem[];
    /** Provide a label for the navigation `<nav>` element. */
    navigationAriaLabel: string;
    /**
     * Standard component to be rendered as a navigation link; e.g. you can add a ReactRouter link here.
     * If no actionProps are defined in the navigationTree item, a "normal" LSG Action component (<a> or <button>
     * will be rendered.
     */
    navigationActionAs?: any;
    /** @deprecated 09.11.2023 - Use `logoLabel` instead. Alternative text for the logo. */
    logoAlt?: string;
    /** The visible text at the top left of the side navigation directly to the right of the logo. */
    logoLabel?: string;
    /** The `aria-label` for the logo and the logo-link. Use the default value for the Commerzbank logo or assign your
     * own. The `aria-label` of the link can be overwritten using `logoHtmlAttrs`. */
    logoAriaLabel?: string;
    /** URL of the link (e.g. home page) that will be opened on logo click. */
    logoHref?: string;
    /** Render an alternative action component, e.g. a React Router link. */
    logoActionAs?: any;
    /** Props for the alternative action component (e.g. a React Router link). */
    logoActionProps?: any;
    /** If set to `true` or if you do not provide a `logoHref` or other actions, the logo will be rendered as an image
     * without any interaction. */
    logoDisabled?: boolean;
    /** Additional HTML attributes can be added here, e.g. target, tabindex or a different aria-label for the
     * link element, e.g.: logoHtmlAttrs={{ "aria-label": "My custom link label" }} */
    logoHtmlAttrs?: React$1.ButtonHTMLAttributes<HTMLButtonElement> | React$1.AnchorHTMLAttributes<HTMLAnchorElement> | Record<`data-${string}`, string | number | boolean>;
    /** Function to be called on onClick-event. Not called when the logo is disabled. */
    onLogoClick?: (e: React$1.MouseEvent<HTMLElement>, name: string) => void;
    /** Disables the search functionality * */
    searchDisabled?: boolean;
    /** Removes the search completely * */
    searchInvisible?: boolean;
    /** Placeholder for search input */
    searchPlaceholder?: string;
    /** Is called on every text change and passes the value and the name of the input. */
    onSearchChange?: (value: string, name: string, event: React$1.SyntheticEvent<HTMLElement>) => void;
    /** Sets the value of the search input. */
    searchValue?: string;
    /** name prop that gets returned with the onChange prop */
    searchName?: string;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    searchFormHtmlAttrs?: React$1.FormHTMLAttributes<HTMLFormElement> | Record<`data-${string}`, string | number | boolean>;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    searchHtmlAttrs?: React$1.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    /** React elements that should be placed at the bottom.  */
    iconLinksBottom?: ReactNode[];
    /** determines the size of the menu items */
    indicatorAtLevel?: "topic" | "group" | "page";
    /** Sets the 'name'-attribute of the input. */
    name?: string;
    /**
     * @param {string} value (this will give you the targetValue of the clicked element, or an empty string if no element shall be active - e.g. on Drawer close)
     * @param {string} name
     * @param {React.SyntheticEvent<HTMLElement>} event
     *
     * This will be called on click of any item within the nav
     */
    onChange?: (activeItem: string, name: string, ev: React$1.SyntheticEvent<HTMLElement>) => void;
    /** Pass the targetValue of the selected item */
    value?: string;
    /** whether to open all menu items. Might be necessary when filtering with the search chip. */
    expandAll?: boolean;
}
declare const SideNavigationPage: ({ logoAlt, logoAriaLabel, ...props }: ISideNavigationPageProps) => React$1.JSX.Element;

interface ISimpleFooterProps extends IBasicProps {
    /** Content of the contact area. */
    contactModule?: any;
    /** Tree of the footer navigation. */
    navigationTree: INavigationTree[];
    /** @deprecated 30.01.24: Use navigationAriaLabel instead. */
    navigationTreeAriaLabel?: string;
    /** Provide a unique ARIA-label for the navigation `<nav>` element (required).
     * This enables screen reader users to distinguish the navigation areas. */
    navigationAriaLabel: string;
    /** Standard component to be rendered as a navigation link; e.g. you can add a ReactRouter link here
     * If no actionProps are defined in the navigationTree item, a "normal" LSG Action component (<a> or <button>
     * will be rendered.
     */
    navigationActionAs?: any;
    /** Brand claim */
    claim?: string;
    /** @deprecated 09.11.2023 - Use `logoLabel` instead. Alternative text for the logo. */
    logoAlt?: string;
    /** Label for the logo, rendered as `alt`- or `aria-label`-attribute. Use the default values for Commerzbank or
     * custom logos or assign your own.
     * If the logo is a link or a button, an additional action-label can be assigned using `logoHtmlAttrs`. */
    logoLabel?: string;
    /** Image source for a custom logo. */
    logoSrc?: string;
    /** If set to `true` or if you do not provide a `logoHref` or other actions the logo will be rendered as an image
     * without any interaction. */
    logoDisabled?: boolean;
    /** URL of the link (e.g. home page) that will be opened on logo click. */
    logoHref?: string;
    /** Additional (action-)HTML attributes can be added here, e.g. target, tabindex or a different aria-label for the
     * link or button element, e.g.: logoHtmlAttrs={{ "aria-label": "My custom action" }} */
    logoHtmlAttrs?: React$1.ButtonHTMLAttributes<HTMLButtonElement> | React$1.AnchorHTMLAttributes<HTMLAnchorElement> | Record<`data-${string}`, string | number | boolean>;
    /** Render an alternative action component, e.g. a React Router link. */
    logoActionAs?: any;
    /** Props for the alternative action component (e.g. a React Router link). */
    logoActionProps?: any;
    /** Function to be called on onClick-event. Not called when the logo is disabled. */
    onLogoClick?: (e: React$1.MouseEvent<HTMLElement>, name: string) => void;
}
declare const SimpleFooter: {
    ({ logoAlt, logoLabel, navigationAriaLabel, navigationTreeAriaLabel, ...props }: ISimpleFooterProps): React$1.JSX.Element;
    displayName: string;
};

interface ISimpleHeaderProps extends Omit<IBasicProps, "children"> {
    /**
     * This has to be an array of objects looking like:
     * {
     *   label: string,
     *   name?: string;
     *   href?: string,
     *   children?: INavigationItem[] (an array of more objects looking like this one)
     * }
     */
    navigationTree?: INavigationItem[];
    /** @deprecated 30.01.24 - use navigationAriaLabel instead. */
    navigationTreeAriaLabel?: string;
    /** Provide a unique ARIA-label for the navigation `<nav>` element (required).
     * This enables screen-reader users to distinguish the navigation areas. */
    navigationAriaLabel: string;
    /** ARIA-label for the flyout dialog for screen-reader users (required). */
    menuFlyoutAriaLabel: string;
    /** Standard component to be rendered as a navigation link; e.g. you can add a ReactRouter link here
     * If no actionProps are defined in the navigationTree item, a "normal" LSG Action component (<a> or <button>
     * will be rendered. */
    navigationActionAs?: any;
    /** Menu label */
    segmentLabel?: string;
    /** Additional IconLink(s) */
    iconLinksInteraction?: ReactNode;
    /** @deprecated 09.11.2023 - Use `logoLabel` instead. Alternative text for the logo. */
    logoAlt?: string;
    /** Label for the logo, rendered as `alt`- or `aria-label`-attribute. Use the default values for Commerzbank or
     * custom logos or assign your own.
     * If the logo is a link or a button, an additional action-label can be assigned using `logoHtmlAttrs`. */
    logoLabel?: string;
    /** Image source for a custom logo on mobile viewports. */
    logoSrcMobile?: string;
    /** Image source for a custom logo on desktop viewports. */
    logoSrcDesktop?: string;
    /** If set to `true` or if you do not provide a `logoHref` or other actions, the logo will be rendered as an image
     * without any interaction. */
    logoDisabled?: boolean;
    /** URL of the link (e.g. home page) that will be opened on logo click. */
    logoHref?: string;
    /** Additional HTML attributes can be added here, e.g. target, tabindex or a different aria-label for the
     * link element, e.g.: logoHtmlAttrs={{ "aria-label": "My custom link label" }} */
    logoHtmlAttrs?: React$1.ButtonHTMLAttributes<HTMLButtonElement> | React$1.AnchorHTMLAttributes<HTMLAnchorElement> | Record<`data-${string}`, string | number | boolean>;
    /** Name for navigation element. If `logoName` is equal to the current navigation value (currently opened page),
     * `htmlAttrs` are set to "aria-current":"page" */
    logoName?: string;
    /** Function to be called on onClick-event. Not called when the logo is disabled. */
    onLogoClick?: (e: React$1.MouseEvent<HTMLElement>, name: string) => void;
    /** Current selected navigation item */
    value?: string;
    /** Name of the navigation component */
    name?: string;
    /** The onChange handler returns the "name" of the selected navigationTree item as value */
    onChange?: (value: string, name: string, event: React$1.SyntheticEvent<HTMLElement>) => void;
    /** Decides if the navigation should be sticky */
    isSticky?: boolean;
}
declare const SimpleHeader: {
    ({ logoLabel, logoAlt, navigationTreeAriaLabel, navigationAriaLabel, ...props }: ISimpleHeaderProps): React$1.JSX.Element;
    displayName: string;
};

interface ISimpleTableProps extends IBasicProps {
    /** Please use literal type to achieve the opposite of ratio. Otherwise the default will be set */
    ratio?: "2-1" | "1-2";
    /** Providing detailed information about the subjects of table */
    description?: string;
    /** Short title information of table, which become not displayed visually. */
    title?: string;
}
interface ISimpleTableRowProps extends IBasicProps {
    title?: ReactNode;
    helperText?: ReactNode;
}
declare const SimpleTable: {
    ({ ratio, ...otherProps }: ISimpleTableProps): React$1.JSX.Element;
    Row({ children, ...restProps }: ISimpleTableRowProps): React$1.JSX.Element;
    displayName: string;
};

interface ISkipLink {
    label: string;
    href?: string;
    onClick?: IActionBaseProps["onClick"];
}

interface ISkipLinksProps {
    /**
     * Array of Links to render.
     * Example:
     * [
     *   {label: "jump to main content", href: "#mainContent"},
     *   {label: "jump to banking content", href: "#bankingContent"}
     * ]
     */
    links: ISkipLink[];
    /** Provide a label for the SkipLinks' `<nav>` element. If empty, a default value will be set. This enables screen reader users to distinguish the navigation areas. */
    ariaLabel?: string;
}
declare const SkipLinks: {
    (props: ISkipLinksProps): React$1.JSX.Element;
    displayName: string;
};

interface ISliderProps extends IBasicProps {
    /** The name of the input element */
    name?: string;
    /** Label on top of the slider. Always give in a label, for a11y purposes, even if you hide it with showLabel=false. */
    label: string;
    /** Is the label visible (default: true). If set to false, please make sure the slider is visually described in
     *  another way. */
    showLabel?: boolean;
    /** Aria label for the slider knob(s) - either a string (single slider) or an array with two string values (range slider). Defaults to label and in case of range slider: label plus a default text indicating min/max value. */
    ariaLabel?: string | string[];
    /** This is the value you have to provide; set it with the value of the onChange event.
     * In combination with rangeSlider flag, the value accept tuple with lower and upper value [lower, upper]
     */
    value: number | number[];
    /** Screen readers speak the current value when changed e.g. 1000. To improve a11y, you can change this text by this formatter, e.g. to "1000 €" (instead of the value 1000, which would be read by a screen reader)
     * In a multi range look, map the upper and lower value to an array with the screen reader friendly texts.
     */
    ariaValueTextFormatter?: (value: any | any[]) => string | string[];
    /** Disables all actions */
    disabled?: boolean;
    /** Text on the left bottom of the slider. */
    helperMinValue?: string;
    /** Text on the right bottom of the slider. */
    helperMaxValue?: string;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React$1.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    /** Minimum value */
    minValue?: number;
    /** Maximum value */
    maxValue: number;
    /** This works similarily to precision, but the steps are visible on the slider. Use this only if the steps are large enough to look good from the design perspective.  */
    step?: number;
    /** If you need a value accurate to one decimal places, you should set the value of step to e.g. 0.01. To receive a value without decimal places, set the value to 1 .  */
    precision?: number;
    /** Called on change (after key press or letting go of the slider). The value contains one value on single slider, two values in an array on range slider with [lower, upper] */
    onChange?: (value: number | number[], name: string) => void;
    /** Called on drag and value change events. Similar to onChange, but is also called while dragging the slider. The value contains one number value on single slider, two values in an array on range slider with [lower, upper] */
    onInput?: (value: number | number[], name: string) => void;
    /** Called on blur. */
    onBlur?: (event: React$1.FocusEvent<HTMLElement>, name: string) => void;
    /** Called on focus. */
    onFocus?: (event: React$1.FocusEvent<HTMLElement>, name: string) => void;
}
declare const Slider: {
    (props: ISliderProps): React$1.JSX.Element;
    displayName: string;
};

interface ISliderPagination extends IBasicProps {
    /** Total number of dots */
    numDots: number;
    /** The index of the current active dot index, starts with 0 */
    activeDotIndex: number;
    /** Function to be called when point is clicked */
    onPointClick: any;
    /** Function to be called when left arrow icon is clicked */
    onArrowLeftClick?: any;
    /** Function to be called when right arrow icon is clicked */
    onArrowRightClick?: any;
    /** Accepts a function which returns a string value that provides a user-friendly name for the slider elements (navigation buttons and pages). This is important for screen reader users.
     * The `page` argument is the page (1..n) and the `selected` argument is true, if the page is the currently selected page.
     * */
    itemAriaLabelFormatter?: (page?: number, isSelected?: boolean) => string;
    /** An aria-label for the previous button. */
    previousButtonAriaLabel?: string;
    /** An aria-label for the next button. */
    nextButtonAriaLabel?: string;
}
declare const SliderPagination: {
    ({ onArrowRightClick, onArrowLeftClick, ...props }: ISliderPagination): React$1.JSX.Element;
    displayName: string;
};

type ISnackbarProps = IBasicProps & {
    /** Subline text */
    subline?: string;
    /** If you did not set a headline, but set iconLinks, please provide an aria-label */
    ariaLabel?: string;
    /** Snackbar iconLinks */
    iconLinks?: ReactNode;
    /** Sets seconds to automatically dismiss the snackbar. Use this option only if the content is optional/additional
     *  for the user */
    time?: number;
    /** Sets the initial state */
    isOpen?: boolean;
    /** Callback function that is called to close the snackbar */
    onClose?: () => void;
    /** Icon for icon badge */
    badgeIcon?: IIcon;
    /** Icons can be styled as outline, featuring hollow designs that
     emphasize contours, or solid, which are filled in. */
    badgeIconVariant?: "solid" | "outline";
    /** deprecated: Use badgeColor instead. Set the badge look (color) */
    badgeLook?: "primary" | "highlight" | "supplementary" | "error" | "success" | "alert";
    /** Sets the badge look (color) */
    badgeColor?: "primary" | "highlight" | "supplementary" | "error" | "success" | "alert";
    /** Shows a large icon badge (only available when headline is set) */
    showLargeIconBadge?: boolean;
    /** Sets an illustration (only available when headline is set) */
    illustration?: ReactNode;
    /** Sets an alternative text for the illustration for non-decorative images. Without the alt text the illustration is set to aria-hidden. */
    illustrationAlt?: string;
    /** Set by the following rules:
     * 1. alert: If it's important and caused immediately as a result by a user's action.
     * 2. dialog: Important information that demands user attention, Snackbar will get focus and focus-lock.
     * 3. status: If the information is NOT important, the Snackbar will be read but not focused.
     * Please note: "alertdialog" is deprecated, use dialog instead.
     */
    role: "status" | "alert" | "alertdialog" | "dialog";
    /** Callback for keyboard focus handling, if focus gets lost. Highly recommended for a Snackbar inside
     *  Layer. */
    onFocusLoss?: () => void;
    /** Optional style for the snackbar container, default: "flex"  */
    containerDisplay?: "flex" | "block";
} & ({
    heading?: undefined;
} | {
    /** Snackbar headline text */
    heading: string;
    /** Alternative HTML tag that is rendered for headline. Mandatory when you use a heading (e.g. "h4", "h5", "p", "div", "span"). */
    /** @deprecated: Headline semantics cannot be used in an aria-live region and have no effect. */
    headlineAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | string;
});
declare const Snackbar: {
    ({ badgeLook, badgeColor, isOpen, role, ...props }: ISnackbarProps): React$1.JSX.Element;
    displayName: string;
};

interface ISpinnerProps extends IBasicProps {
    /** Size of the Spinner circle */
    size?: number;
    /** Responsible for displaying the progress */
    value?: number;
    /** For the "indeterminate" Spinner variant, this accessibility-relevant prop informs screen reader users about the current status of processes.
     *  If not set, a fixed text ("Loading"/"Laden...") will be read by screen readers. Note that this fixed text (also visible beneath the Spinner circle in "indeterminate" variant and with reduced-motion browser settings) cannot be modified to avoid potential UX issues caused by too long text.
     */
    ariaLabel?: string;
    /** 3.9.2025 - Prop not functional: CCSN-91276. (Useful for fine-tuning. When prop is not used, both elements - text (with a fixed value) and circle - will be displayed.) */
    appearance?: "no-text" | "no-circle";
    /** Progress runs endlessly by using "indeterminate" or with steps based on a given value when you use "static". */
    variant?: "indeterminate" | "static";
    /** Switches the Spinner on. Hence, fine-tuning can be done via the 'appearance' prop.  */
    loading?: boolean;
}
declare const Spinner: {
    ({ size, variant, ...props }: ISpinnerProps): React$1.JSX.Element;
    displayName: string;
};

interface IStageProps extends IBasicProps {
    /** Text placed as <h1> on the stage (required). */
    headline: React$1.ReactNode;
    /** Alternative HTML tag that is rendered for headline. */
    headlineAs?: string;
    /** Text placed above the headline. */
    overline?: React$1.ReactNode;
    /** Alternative HTML tag that is rendered for overline. */
    overlineAs?: string;
    /** Describing text below the headline. */
    leadText?: React$1.ReactNode;
    /** Tag name which is used for rendering the leadText. */
    leadTextAs?: string;
    /** Call-to-Action button below the leadText. */
    button?: ReactNode;
    /**
     *  @deprecated("The scrollerText property will be removed in the next major release. The text won't be visible
     *  by now")
     * Text placed above the animated scroller.
     */
    scrollerText?: string;
    /** Function to be called when the scroll icon is clicked.
     * So you can implement the scroll behaviour yourself. E.g. for defined jump targets on the page.  */
    onScrollerClick?: () => void;
    /** Deactivate automatic hyphens if you want to set them manually. */
    manualHyphenation?: boolean;
    /**
     * Src attribute of the `<img>` element (required).
     * Used as a fallback for browsers that do not support the HTML `<picture>` element.
     */
    backgroundImageImgSrc?: string;
    /** An array of objects in the format of the HTML `<picture>` `<source>` element. */
    backgroundImageSource?: React$1.SourceHTMLAttributes<HTMLSourceElement>[];
    /** Focal point within the background image. Default is left: 50%, Top: 30%(>sm) | 20%(xs). */
    backgroundImageFocalPoint?: IFocalPoint;
    /** Background image alt text. Default is "". */
    backgroundImageAltText?: string;
    /** Background video path. */
    backgroundVideoSrc?: string;
    /** Turn off background gradient. */
    backgroundGradientDisabled?: boolean;
    /** The 'light' value of this prop will produce a lighter colour overlay for your image, and a dark text colour
     *  to ensure high contrast. The 'dark' value will create the opposite effects. */
    theme?: "light" | "dark";
    /**
     * Theme of the outlier text on mobile devices - One of "light" or "dark".
     * Should be set to "dark" if the successive section has a dark theme.
     */
    nextTheme?: "light" | "dark";
    /** EyeCatcher appearance time in ms. Default is "3000". */
    eyeCatcherAppearanceTime?: number;
    /**
     * Short text for EyeCatcher on small screens (viewport < lg).
     * If not defined, no EyeCatcher will be shown.
     */
    eyeCatcherText?: React$1.ReactNode;
    /** Long text for the EyeCatcher on large screens (viewport >= lg). */
    eyeCatcherTextLong?: React$1.ReactNode;
    /** EyeCatcher font size - One of "small", "medium", "large" or "xlarge". */
    eyeCatcherFontSize?: "small" | "medium" | "large" | "xlarge";
    /** Increase the text container width of the EyeCatcher on large screens (viewport >= lg). */
    eyeCatcherIncreaseWidth?: boolean;
    /** Id of the EyeCatcher element. Can be used to set ariaDescribedBy for the FootnoteAnchor. */
    eyeCatcherId?: string;
}
declare const Stage: {
    ({ leadText, leadTextAs, headline, headlineAs, theme, nextTheme, ...props }: IStageProps): React$1.JSX.Element;
    displayName: string;
};

interface IStatusIndicatorProps extends IBasicProps {
    /** One of "inactive", "success", "warning", "error" or "neutral". */
    statusColor?: "inactive" | "success" | "warning" | "error" | "neutral";
    /** Shows an icon. Especially if `tagHidden` is true, the usage of an icon is recommended. */
    icon?: IIcon;
    /** Tag is used to describe the status. */
    tag: string;
    /** The text/tag will be hidden and tag-prop used as ARIA-label for screen readers. */
    tagHidden?: boolean;
    /** HelperText is visible below main tag. */
    helperText?: string;
    /**
     * Sets a role attribute on the tag element to ensure the correct a11y. Set to `role="status"` if the status is
     * changed interactively, while the page is opened by the user. Then, a change of the `tag` or `statusColor`
     * prop will produce an announcement to screen reader users. Make sure, that it is not set on with `<StatusIndicator>`s
     * inside a dynamically changing container (e.g. inside a sortable table).
     * For more information @see: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role
     */
    tagRole?: "none" | "status";
}
interface IStatusIndicatorGroupProps extends IBasicProps {
    direction?: "vertical" | "horizontal" | "flip-xs" | "flip-sm" | "flip-md" | "collapse-xs" | "collapse-sm" | "collapse-md";
    label?: string;
}
declare const StatusIndicator: {
    ({ statusColor, tagHidden, tagRole, ...otherProps }: IStatusIndicatorProps): React$1.JSX.Element;
    Group({ ...props }: IStatusIndicatorGroupProps): React$1.JSX.Element;
    displayName: string;
};

interface ISwitchProps extends IBasicProps {
    /** Sets the state of the Switch to on (checkmark in dot on the right side) or off (plain dot on the left side) */
    value: boolean;
    /** The 'name' prop value of the Switch will be internally assigned to the HTML 'value' attribute of the 'input'
     *  element. Use the 'htmlAttrs' prop in order to assign a value to the HTML 'name' attribute. */
    name?: string;
    /** Text on the right side of the Switch */
    label?: string;
    /** A small helper text that is placed below the Label. */
    helperText?: React$1.ReactNode;
    /** Error text below the Label. If you set this prop, the Switch is turned to invalid, even if the invalid prop
     *  is not set. */
    errorText?: React$1.ReactNode;
    /** Sets the Switch to disabled. */
    disabled?: boolean;
    /** Sets the Switch to an invalid appearance. */
    invalid?: boolean;
    /** Called when the Switch is clicked or changes its state (Switch.Stateful). */
    onChange?: (value: boolean, name: string, event: React$1.SyntheticEvent<HTMLInputElement>) => void;
    /** HTML 'title' attribute */
    title?: string;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React$1.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    /** Use this prop to control if the aria-live attribute is set for the errorText */
    errorTextAriaLive?: boolean;
}
declare const Switch: {
    (props: ISwitchProps): React$1.JSX.Element;
    displayName: string;
    Group: {
        (props: ISwitchGroupProps): React$1.JSX.Element;
        displayName: string;
    };
};

interface ITabProps extends IBasicProps {
    /** The label for the tab. */
    label: string;
    /** Whether to show a badge in front of the tab label. */
    showBadge?: boolean;
}
declare const Tab: ({ label: _, ...props }: ITabProps) => React$1.JSX.Element;

interface ITabsStatefulState {
    openIndex: number;
    isMobile: boolean;
}
/**
 * This is a stateful version of `<Tabs>`.
 * The `<Tabs.Stateful>` variant is made for showcase purposes and non-React environments.
 * It should not be used in a React application. Please have a look at the section on "Stateful Components" in the
 * developer guidelines.
 * Check `<Tabs>` for implementation examples.
 */
declare class TabsStateful extends React$1.Component<Omit<ITabsProps, "isMobile" | "openIndex"> & {
    initialOpenIndex?: number;
}, ITabsStatefulState> {
    static displayName: string;
    state: {
        openIndex: number;
        isMobile: boolean;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    readonly onViewportChange: (viewportSize: string) => void;
    handleChange: (openIndex: number) => void;
    render(): React$1.JSX.Element;
}

interface ITabsProps extends IBasicProps {
    /** Active id. Pass the id of a containing Tabs.Tab */
    openIndex?: number;
    /** Called on Tabs.Tab click. */
    onChange?: (openIndex: number, event: React$1.SyntheticEvent<HTMLElement>) => void;
    /** @deprecated (date: 08.04.21): Indicate whether viewport is mobile(xs, sm) or not. */
    isMobile?: boolean;
    /** Switch between left and centered layout. Default is left. */
    centeredLayout?: boolean;
    /** ARIA label that describes the purpose of the set of tabs. */
    ariaLabel?: string;
    /** Provide the id of an element for the ARIA label. */
    ariaLabelledBy?: string;
}
declare const Tabs: {
    ({ ...props }: ITabsProps): React$1.JSX.Element;
    Stateful: typeof TabsStateful;
    Tab: ({ label: _, ...props }: ITabProps) => React$1.JSX.Element;
    displayName: string;
};

interface ITanAreaProps {
    id?: string;
    children: ReactNode;
    notificationTitleAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
declare const TanArea: (props: ITanAreaProps) => React__default.JSX.Element;

interface ITanPanel extends IBasicProps {
    panelRef?: RefObject<HTMLDivElement>;
    imageQrCode?: boolean;
    /** @deprecated: use imageQrCode instead */
    imageFullHeight?: boolean;
    imageSrc?: string;
    imageAltText: string;
    titleText?: string;
    titleAs: string;
    subtitleText?: string;
    infoLinkText?: string;
    infoLayerBackbuttonText?: string;
    cancelButtonText?: string;
    cancelButtonIcon?: IIcon;
    cancelButtonLoading?: boolean;
    cancelButtonDisabled?: boolean;
    miscButtonText?: string;
    miscButtonIcon?: IIcon;
    miscButtonLoading?: boolean;
    miscButtonDisabled?: boolean;
    submitButtonText?: string;
    submitButtonLoading?: boolean;
    submitButtonDisabled?: boolean;
    submitButtonSecondary?: boolean;
    loadingText: string;
    tanTextfieldVisible?: boolean;
    tanTextfieldErrorText?: string;
    tanTextfieldPlaceholder?: string;
    tanTextfieldLabel?: string;
    tanTextfieldValue?: string;
    tanTextfieldAutofocus?: boolean;
    tanTextfieldRef?: RefObject<HTMLInputElement>;
    checkboxVisible?: boolean;
    checkboxErrorText?: boolean;
    checkboxLabel?: string;
    checkboxAutofocus?: boolean;
    checkboxRef?: RefObject<HTMLInputElement>;
    onCancelTan?: (event: React$1.MouseEvent<HTMLElement>, name: string) => void;
    onSubmit?: (event: React$1.FormEvent) => void;
    onMiscClick?: (event: React$1.MouseEvent<HTMLElement>, name: string) => void;
    onChange?: (newValue: string, name: string, event: React$1.SyntheticEvent) => void;
    notificationSubline?: string;
    notificationImageSrc?: string;
    notificationImageAlt: string;
    notificationTitleText?: string;
    notificationTitleAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    notificationDisabled?: boolean;
    /** @deprecated setting this prop never had an effect. */
    fullWidth?: boolean;
    messageHeading?: string;
    messageText?: ReactNode;
    /** The standard design of the TanPanel is left-aligned, with 8 Grid columns!
        However, if your page design is centered by Grid (md= 4-8-4), this option is available to align the TanPanel
        to your Layout.
    */
    centeredLayout?: boolean;
    /** Whether to render a section around the TanPanel. The default behavior is `true` and will change to `false`
     *  in the next major release */
    asSection?: boolean;
}
declare const TanPanel: {
    ({ onChange, notificationDisabled, imageFullHeight, imageQrCode, ...props }: ITanPanel): React$1.JSX.Element;
    displayName: string;
};

interface ITeaserGroupProps extends IBasicProps {
    /** If set to true the first teaser will be displayed as a focus teaser (full width) */
    hasFocusTeaser?: boolean;
    /** Set image ratio for all teasers within a group. */
    groupImageRatio?: "21-9" | "16-9";
    /** Set headline size for all teasers within a group */
    groupHeadlineSize?: "h4" | "h5";
    /** Alternative HTML tag that is rendered for group headline (e.g. "h5", "h6", "p","span","div") */
    groupHeadlineAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | string;
}
declare const TeaserGroup: {
    ({ children, groupHeadlineSize, groupHeadlineAs, groupImageRatio, hasFocusTeaser, }: ITeaserGroupProps): React$1.JSX.Element;
    displayName: string;
};

type ITeaserProps = IButtonBaseProps & {
    /** The HTML tag that is rendered for the headline. */
    headlineSize?: "h5" | "h4";
    /** If set a overline will be rendered */
    overline?: string;
    /** Alternative HTML tag that is rendered for overline. */
    overlineAs?: string;
    /** If set a subline will be rendered */
    subline?: string;
    /** Alternative HTML tag that is rendered for subline. */
    sublineAs?: any;
    /** The default images path. */
    imgSrc?: string;
    /** Text description of the image. */
    imgAlt?: string;
    /** Set image ratio. */
    imageRatio?: "16-9" | "21-9";
    /** Name of the HTML tag that is rendered for the outer div. Defaults to "li" if used inside a TeaserGroup. */
    as?: keyof JSX$1.IntrinsicElements;
    /** Link Label */
    linkLabel?: string;
} & ({
    headline?: undefined;
    headlineAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | string;
} | {
    /** The item heading */
    headline: string;
    /** Alternative HTML tag that is rendered for headline. mandatory when headline is set (e.g. "h2", "h3", "div", "span", "p") */
    headlineAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | string;
});
declare const Teaser: {
    ({ imageRatio, headlineSize, headlineAs, ...props }: ITeaserProps): JSX$1.Element;
    displayName: string;
    Group: {
        ({ children, groupHeadlineSize, groupHeadlineAs, groupImageRatio, hasFocusTeaser, }: ITeaserGroupProps): JSX$1.Element;
        displayName: string;
    };
};

interface ITextHighlightProps extends IBasicProps {
    /** the item heading */
    headline?: string;
    /** If set a subline will be rendered */
    subline?: string;
    /** Set to true if the text is a long text according to the design guidlines. The text will be rendered with a smaller font size */
    isLongText?: boolean;
    /** Set to true if the text is not a citation */
    noQuotes?: boolean;
    /** Quoted or highlighted text */
    text: string;
    /** Thumb icon name */
    thumbIconName?: string;
    /** Thumb Icon iconvariant. One of: "outline" | "solid" */
    thumbIconVariant?: "outline" | "solid";
    /** Thumb Icon Title. */
    thumbIconTitle?: string;
    /** Text that should be placed inside the circle */
    thumbText?: string;
    /** Source for thumb image */
    thumbImgSrc?: string;
    /** Pass a node with IconLinks which will be placed beside or below the information block */
    iconLinks?: ReactNode[];
    /** Switch between left and centered layout. */
    centeredLayout?: boolean;
    /** deactivate automatic hyphens if you want to set them manually */
    manualHyphenation?: boolean;
}
declare function TextHighlight(props: ITextHighlightProps): React$1.JSX.Element;
declare namespace TextHighlight {
    var displayName: string;
}

interface ITextSliderProps extends IBasicProps {
    /** Disables all actions, which is also reflected by the styling of the component */
    disabled?: boolean;
    /** Is called on blur. */
    onBlur?: (event: React$1.FocusEvent<HTMLElement>) => void;
    /** Is called on focus. */
    onFocus?: (event: React$1.FocusEvent<HTMLElement>) => void;
    /**  This is the name of the component.  */
    name?: string;
    /** Label on top of the slider. The label is mandatory for accessibility reasons. */
    label: string;
    /** Label for the text field(s) - either a string (single value) or an array with two string values (range values). Is set to label by default and in case of range values: label plus a default text indicating min/max value. */
    inputTextfieldLabel?: string | string[];
    /** Text on the left bottom of the slider. */
    helperMinValue?: string;
    /** Text on the right bottom of the slider. */
    helperMaxValue?: string;
    /** Helper text for the text field, when the slider is hidden. Either a string (for a single slider) or an array with two string values (range slider). In case of an invalid text field, you have to set an errorText prop. In this case, you can unset the helperText of the field or set both helperText and errorText. */
    helperTextValue?: string | string[];
    /** Minimum value */
    minValue?: number;
    /** Maximum value */
    maxValue: number;
    /** Steps are visually displayed on the slider. The step prop overrides the sliderStep prop. Keep in mind to use large steps in terms of good design. If that's not possible, use the sliderStep prop  */
    step?: number;
    /** This is the value accuracy when you use the slider. Example: If you need a value accurate to 0 decimals (e.g. rounded to 1 Euro) set the step to 1 (default), if accurate to e.g. cent, set a sliderStep of 0.01 and if you need a value rounded to 100, set the sliderStep to 100.  */
    precision?: number;
    /** @deprecated This is the value accuracy when you use the slider. Use precision instead!! */
    sliderStep?: number;
    /** Number of decimal digits that are appended when switching to displaying text input, e.g. 2 for € with cents. */
    decimalDigits?: number;
    /** @deprecated Called on change, triggered by letting go of a slider knob or change in a text field. Provides a simple number in single slider mode, an array of two numbers  [lower, upper] in range slider mode.
     * Note: this handler is not called when you delete a value in a text field. To handle empty text inputs in a better way, use onInputChange instead.
     * */
    onChange?: (value: number | number[], name: string) => void;
    /** Called on change, triggered by letting go of a slider knob or change in a text field. Provides a simple number (or empty string) in single slider mode, an array of two values  [lower, upper] in range slider mode
     * The behavior is the same as in the (deprecated) onChange handler, but also reflects empty text fields. If a text field is empty, an empty string is returned as a value so you can set an appropriate error text.
     * This behaviour is analogous to the onChange handler in the Text Field of type "number".
     * Note: Do not use the onChange handler at the same time to prevent side effects.
     * */
    onInputChange?: (value: any | any[], name: string) => void;
    /** Called on drag and value change events of the slider and is not called on change of the text fields. The value contains one number value on single slider, two values in an array on range slider with [lower, upper] */
    onSliderInput?: (value: any | any[], name: string) => void;
    /** Event is raised when the user tries to close the text field area by click on the "return to slider" button or by enter key.
     * In this case, the text field area is not necessarily closed when you set invalidInput to true.
     * Also, for this event you can do a validation on your own and if necessary, set the invalid input prop to false.
     * */
    onInputClose?: (event: React$1.SyntheticEvent) => void;
    /** Event is raised when the user opens the text input area in order to enter values into the text fields. */
    onInputOpen?: (event: React$1.SyntheticEvent) => void;
    /** This is the value you have to provide; set it with the value of the onChange event. */
    /** In the value accept single value(number | "") or an array with lower and upper value [number | "", number | ""] */
    value: any | any[];
    /** Callback function for pretty-printing a value */
    formatter?: (value: any | any[]) => string | string[];
    /** Screen readers speak the current value when changed e.g. 1000. To improve a11y, you can change this text by this formatter, e.g. to "1000 €" (instead of the value 1000, which would be read by a screen reader)
     * In a multi range look, map the upper and lower value to an array with the screen reader friendly texts.
     */
    ariaValueTextFormatter?: (value: any | any[]) => string | string[];
    /** Aria label for the slider knob(s) - either a string (single slider) or an array with two string values (range slider). Is set to label by default and in case of range slider: label plus a default text indicating min/max value. */
    ariaSliderLabel?: string | string[];
    /** Aria label for the text field(s) - either a string (single value) or an array with two string values (range values). Is set to label by default and in case of range values: label plus a default text indicating min/max value. */
    ariaTextFieldLabel?: string | string[];
    /** Label for a connection word between lower and upper text fields or display field in range slider mode */
    labelTo?: string;
    /** Input validation element: Responsible prop which reflects that a text field input is not valid. If you set this prop to true, the text input area won't close. This prop is also implicitly set if you insert an errorText prop. */
    invalidInput?: boolean;
    /** Input validation element: Prop specifies the affected field that is not valid in range mode. In single slider mode, the affected field will be marked automatically. This prop is also implicitly set if you insert a corresponding errorText prop. */
    invalidInputField?: "lower" | "upper" | "both";
    /** Input validation element: Provides the error text beneath the input field(s). In case of the range slider variant, insert an array of two string values. */
    errorText?: string | string[];
    /** On blur, incorrect values in input field(s) are restored to the last values by triggering an onInputChange event. You can prevent this behaviour by this prop. If this prop is set, the input field area will not close if the values in the text fields are incorrect.  */
    preventAutoCorrection?: boolean;
}
declare const TextSlider: {
    ({ sliderStep, precision, ...props }: ITextSliderProps): React$1.JSX.Element;
    displayName: string;
};

interface IThemeProps extends IBasicProps {
    /** @deprecated Use `color` instead (29.01.2024) */
    look?: "dark" | "elevated" | "light" | "medium";
    /** Background color of the theme. */
    color?: "dark" | "elevated" | "light" | "medium";
}
declare const Theme: {
    ({ look, color, ...props }: IThemeProps): React$1.JSX.Element;
    displayName: string;
};

interface IThumbnailProps extends IBasicProps {
    /** The icon that shall be displayed within the component */
    icon?: IIcon;
    /** Icon variant. One of: "outline" | "solid" */
    iconVariant?: "outline" | "solid";
    /** Text used as SVG title and additional text info. It's highly recommended to use iconTitle also when using the text prop. */
    iconTitle?: string;
    /** Text that should be placed inside the circle */
    text?: string;
    /** image source */
    src?: string;
    /** Text used as IMG alternative text */
    imgAltText?: string;
}
declare const Thumbnail: {
    ({ iconVariant, ...props }: IThumbnailProps): React$1.JSX.Element;
    displayName: string;
};

interface ITwoLineItemProps extends IBasicProps {
    /** The icon that shall be displayed within the component. */
    icon?: IIcon;
    /** Icons can be styled as outline, featuring hollow designs that emphasize contours, or solid, which are filled
     *  in. */
    iconVariant?: "solid" | "outline";
    /**
     * Text used as the title attribute for the icon's SVG or image tag.
     * This text is displayed as a tooltip when the user hovers over the icon or the image.
     * If you do not set this prop (decorative icon), the icon will be aria-hidden and not accessible for screen readers.
     */
    iconTitle?: string;
    /** Text that should be placed inside the circle */
    text?: string;
    /** Image source */
    src?: string;
    /**
     * Text of the first line. It has to be mandatory for screen readers because the label describes the thumbnail
     * next to it. */
    label: string;
    /** HTML tag that is rendered for the bold text of the first line (label). E.g. "h4", "h5", "strong". For
     *  further information on which one to choose, see e.g.
     *  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong. */
    labelAs?: string;
    /** Text of the second line */
    subline?: string;
    /** HTML tag that is rendered for the subline text. E.g. "pre" for two-rowed use cases. */
    sublineAs?: string;
    /** This prop centers the component horizontally if set to true. */
    centeredLayout?: boolean;
    /** Badge text */
    badgeText?: string;
    /** Badge icon */
    badgeIcon?: IIcon;
    /** Badge icon variant */
    badgeIconVariant?: "solid" | "outline";
    /** @deprecated: Use badgeColor instead. Badge look */
    badgeLook?: "primary" | "highlight" | "supplementary" | "error" | "success" | "alert";
    /** Badge color */
    badgeColor?: "primary" | "highlight" | "supplementary" | "error" | "success" | "alert";
    /** Describe the Badge content or add context to the Badge message which will be read by screen readers. */
    badgeScreenReaderLabel?: string;
    /** Deactivate automatic hyphens if you want to set them manually. */
    manualHyphenation?: boolean;
    /** Set this prop if only the thumbnail should be visible without any text (label and subline). */
    appearance?: "no-text";
}
declare const TwoLineItem: {
    ({ badgeLook, badgeColor, badgeIconVariant, iconVariant, labelAs, sublineAs, ...props }: ITwoLineItemProps): React$1.JSX.Element;
    displayName: string;
};

interface IUploadProps extends IBasicProps {
    disabled?: boolean;
    /** Use the loading state to indicate an upload process for example */
    loading?: boolean;
    /** Let the user know what the reason for the loading time is */
    loadingText?: string;
    /** Returns event with FileList which can be iterated with for...of
      https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/files
     */
    onChange?: (event: React$1.DragEvent | React$1.ChangeEvent<HTMLInputElement>) => void;
    /** Set to true to allow multiple file uploads at once */
    multipleFiles?: boolean;
    /** Unified interface for the file, because onChange events vary if the file is dragged into our select by the
     user. */
    handleFileUpload?: (file: FileList) => void;
    /** You can use the inputRef to reset the Upload field if needed */
    inputRef?: Ref<HTMLInputElement>;
    /** Optional array of accepted file types for the file input. This is a suggestion and does not enforce strict
     * limitations on the file types that can be uploaded. */
    acceptedFileTypes?: string[];
    /** Sets aria-invalid={true} on the input */
    invalid?: boolean;
    /** Aria-label which is set to the input element. Important: Set this to be accessible */
    ariaLabel?: string;
    /** Name of the input element */
    name?: string;
}
declare const Upload: {
    (props: IUploadProps): React$1.JSX.Element;
    displayName: string;
};

interface IVideoProps extends IBasicProps {
    /** The video source */
    src: string;
    /** The video source type  */
    type?: string;
    /** Title  */
    videoTitle?: string;
    /** Source of the poster image  */
    poster?: string;
    /** Enables loop function (default: false)  */
    loop?: boolean;
    /** Enables Autoplay function (default: false) */
    autoplay?: boolean;
    /** Normally, a greyish overlay is shown to indicate that the video is stopped or paused. if set on false no overlay is shown  */
    overlay?: boolean;
    /**  Optional centerText for the replay button */
    textReplayButton?: any;
    /** Alternative text if video cannot be played (e.g. no browser support)  */
    textVideoAlt?: string;
    /** Iconlinks to the left at the top.  They should have the appearance="left" prop  */
    left?: React$1.ReactNode;
    /** Iconlinks to the right at the top. They should have the appearance="right" prop */
    right?: React$1.ReactNode;
    /** Show controls, if false, controls are not visible  */
    showControls?: boolean;
    /** Show the progress bar at the bottom  */
    showProgressBar?: boolean;
}
/** @deprecated. The component will be removed in the next major release. Please use alternative libraries. */
declare class Video extends React$1.Component<IVideoProps> {
    static displayName: string;
    render(): React$1.JSX.Element;
}

interface IDonutChartDatapointPresentation extends Omit<IDatapointPresentation, "valueColor"> {
    idLabel?: string;
}
type IDonutChartProps = IBasicProps & {
    /** Switch between left and centered layout. Default is left. */
    centeredLayout?: boolean;
    data: IDonutChartDatapointPresentation[];
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React__default.HtmlHTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
    /** Number of grid columns the chart should span */
    sizeChart?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /** Function to format the value of the chart in the legend. The default format will format the value as Euro
     *  currency, with 2 decimals. */
    valueFormatter?: (value: number | string) => string;
} & ({
    /** set to true if the image is only decorative */
    isDecorative?: false;
    /** Text that is displayed in the middle of the chart */
    label?: string;
    /** Text that is displayed as subline in the middle of the chart */
    subline?: string;
    /** Legend for the Donut Chart. */
    chartInfoArea?: Omit<IChartInfoListProps, "items">;
    /** Number of grid columns the info area should span */
    sizeInfoArea?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
} | {
    /** set to true if the image is only decorative */
    isDecorative: true;
    /** Text that is displayed in the middle of the chart */
    label?: undefined;
    /** Text that is displayed as subline in the middle of the chart */
    subline?: undefined;
    /** Legend for the Donut Chart. */
    chartInfoArea?: undefined;
    /** Number of grid columns the info area should span */
    sizeInfoArea?: undefined;
});
declare const DonutChart: {
    ({ id: idProp, centeredLayout, data, chartInfoArea, isDecorative, sizeChart, sizeInfoArea, valueFormatter, ...props }: IDonutChartProps): React__default.JSX.Element;
    displayName: string;
};

/**
 * Uses the prefers-reduced-motion CSS media feature to detect if the user has requested that the system should
 * minimize the amount of non-essential motion (system-setting e.g. "Show animations in Windows" on/off).
 * See: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
 */
declare const stylePreferReducedMotion: (styling?: any) => string;
/**
 * Uses the prefers-reduced-motion CSS media feature to detect if the user has requested that the system should
 * minimize the amount of non-essential motion (system-setting e.g. "Show animations in Windows" on/off).
 * See: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
 */
declare const stylePreferMotion: (styling?: any) => string;

declare const Colors: {
    colNeutral0: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colNeutral1: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colNeutral2: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colNeutral3: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colNeutral4: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colNeutral5: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colNeutral6: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colNeutral7: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colNeutral8: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colBrandPrimary1: {
        brand: string;
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
    };
    colBrandPrimary1Hover: {
        brand: string;
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
    };
    colBrandPrimary1Inscription: {
        brand: string;
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
    };
    colBrandPrimary1HoverInscription: {
        brand: string;
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
    };
    colBackground: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colContentPrimary: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colBackgroundHover: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colSeparatorLine: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colFineLine: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colTextPrimary: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colTextSupplementary: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colTextHighlight: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colActionPrimary: {
        dark: string;
        elevatedDark: string;
        contrastDark: string;
        light: string;
        medium: string;
        hover: string;
        contrastLight: string;
        brand: string;
    };
    colActionPrimaryHover: {
        dark: string;
        elevatedDark: string;
        contrastDark: string;
        light: string;
        medium: string;
        hover: string;
        contrastLight: string;
        brand: string;
    };
    colActionSecondary: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colActionSecondaryHover: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colActionTertiary: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colActionTertiaryHover: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colActionInactive: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colActionOutlineInactive: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colActionKeyboardFocus: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colSuccess: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colSuccessInscription: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colWarning: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colWarningInscription: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colError: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colErrorInscription: {
        light: string;
        dark: string;
        medium: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    colFooterBackground: string;
    shadow01: {
        light: string;
        medium: string;
        dark: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    shadow02: {
        light: string;
        medium: string;
        dark: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    shadow03: {
        light: string;
        medium: string;
        dark: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    shadowCard: {
        light: string;
        medium: string;
        dark: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    shadowCardHover: {
        light: string;
        medium: string;
        dark: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    shadowCardActive: {
        light: string;
        medium: string;
        dark: string;
        hover: string;
        elevatedDark: string;
        contrastLight: string;
        contrastDark: string;
        brand: string;
    };
    secondaryAccent1Inscription: string;
    secondaryAccent2Inscription: string;
    secondaryAccent3Inscription: string;
    secondaryAccent4Inscription: string;
    secondaryAccent5Inscription: string;
    secondaryAccent6Inscription: string;
    secondaryAccent1: string;
    secondaryAccent2: string;
    secondaryAccent3: string;
    secondaryAccent4: string;
    secondaryAccent5: string;
    secondaryAccent6: string;
    darkAccent: string;
    black: string;
    white: string;
};
declare const SupportedColors: {
    secondaryAccent1: string;
    secondaryAccent2: string;
    secondaryAccent3: string;
    secondaryAccent4: string;
    secondaryAccent5: string;
    secondaryAccent6: string;
    darkAccent: string;
    black: string;
    white: string;
};

interface IColorsMap<T> {
    light?: T;
    dark?: T;
    medium?: T;
    hover?: T;
    elevatedDark?: T;
    contrastLight?: T;
    contrastDark?: T;
    brand?: T;
}
type IColorsMap2<T> = {
    [P in keyof T]: {
        light?: T[P];
        dark?: T[P];
        medium?: T[P];
        hover?: T[P];
        elevatedDark?: T[P];
        contrastLight?: T[P];
        contrastDark?: T[P];
        brand?: T[P];
    } | string;
};
type ThemeType = "light" | "dark" | "medium" | "hover" | "elevatedDark" | "contrastLight" | "contrastDark" | "brand";
declare const styleThemesGlobal: <T>(colors?: IColorsMap<T>) => (content: (colors: T, which: ThemeType) => string) => string;
declare const styleThemesGlobal2: <T>(colors?: IColorsMap2<T>) => (content: (colors: T, which: ThemeType) => string) => string;
declare const styleThemes: <T>(colors?: IColorsMap<T>) => (content: (colors: T, which: ThemeType) => string) => string;
/**
 * The function styleThemes2 is the counterpart for the styleThemes function, which accepts the new color format. It
 * internally re-shapes the color-object from the new to the old color format, and calls the stylesThemes function.
 * @param colors color-object in the new format.
 */
declare const styleThemes2: <T>(colors?: IColorsMap2<T>) => (content: (colors: T, which: ThemeType) => string) => string;

declare const focusOutlineInlineStyles: ({ radius, additionalStyles, }?: {
    radius?: string;
    additionalStyles?: string;
}) => string;
declare const focusOutlineInlineColor: (theme: ThemeType) => string;
declare const focusOutlineStyles: ({ radius, insetX, insetY, additionalStyles, }?: {
    radius?: string;
    insetX?: string;
    insetY?: string;
    additionalStyles?: string;
}) => string;
declare const focusOutlineColor: (theme: ThemeType) => string;
declare const listShadowStyles: string;
declare const listShadowStylesHover: (theme: ThemeType) => string;
declare const listShadowStylesFocus: (theme: ThemeType) => string;

interface IPageStyle {
    padding?: string;
    width?: string;
    maxWidth?: string;
    pageMaxWidth?: string;
}
interface IPageStyles {
    noSidebarContent: IPageStyle;
    sidebarContent: IPageStyle;
    layer: IPageStyle;
    layer75: IPageStyle;
    sidemenu: IPageStyle;
}
declare const sectionMeasurements: IPageStyles;

declare const boxShadow01: (theme: ThemeType, offset?: number) => string;
declare const boxShadow02: (theme: ThemeType, offset?: number) => string;
declare const boxShadow03: (theme: ThemeType, offset?: number) => string;
declare const boxShadowCard: (theme: ThemeType, offset?: number) => string;
declare const boxShadowCardHover: (theme: ThemeType, offset?: number) => string;
declare const boxShadowCardActive: (theme: ThemeType, offset?: number) => string;

declare const styleHorizontalAlignment: () => string;
declare const styleMarginBottom: (marginBottom: number, marginBottomMdViewPort?: number, isRem?: boolean) => string;
declare const styleMarginBottomRem: (marginBottom: number, marginBottomMdViewPort?: number) => string;
declare const styleMarginRight: (marginRight: number, marginRightMdViewPort?: number, isRem?: boolean) => string;
declare const styleMarginLeft: (marginLeft: number, marginLeftMdViewPort?: number, isRem?: boolean) => string;
declare const styleMarginRightRem: (marginRight: number, marginRightMdViewPort?: number) => string;

interface IHasCssProperties {
    "font-family"?: boolean;
    "font-size"?: boolean;
    "line-height"?: boolean;
    "font-weight"?: boolean;
    "max-width"?: boolean;
    "letter-spacing"?: boolean;
}
declare const typo: {
    "1.1": {
        desktopXxl: {
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        desktopXl: {
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        desktopLg: {
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        desktop: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        mobile: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
    };
    "1.3": {
        desktopXxl: {
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        desktopXl: {
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        desktopLg: {
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        desktop: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        mobile: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
    };
    "2.1": {
        desktopXxl: {
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        desktopXl: {
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        desktopLg: {
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        desktop: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        mobile: {
            "font-weight": string;
            "font-family": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
    };
    "2.3": {
        desktopXxl: {
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        desktopXl: {
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        desktopLg: {
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        desktop: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        mobile: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
    };
    "3.2": {
        desktopXxl: {
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        desktopXl: {
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        desktopLg: {
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        desktop: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        mobile: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
    };
    "3.3": {
        desktopLg: {
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        desktop: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        mobile: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
    };
    "4.2": {
        desktop: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        mobile: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
    };
    "4.3": {
        desktop: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        mobile: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
    };
    "5.2": {
        desktop: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        mobile: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
    };
    "5.3": {
        desktop: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        mobile: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
    };
    "6.2": {
        desktop: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        mobile: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
    };
    "6.3": {
        desktop: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        mobile: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
    };
    "7.1": {
        desktop: {
            "letter-spacing": string;
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
        };
        mobile: {
            "letter-spacing": string;
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
        };
    };
    "7.2": {
        desktop: {
            "letter-spacing": string;
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
        };
        mobile: {
            "letter-spacing": string;
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
        };
    };
    "7.3": {
        desktop: {
            "letter-spacing": string;
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
        };
        mobile: {
            "letter-spacing": string;
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
        };
    };
    "8.1": {
        desktop: {
            "letter-spacing": string;
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
        };
        mobile: {
            "letter-spacing": string;
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
        };
    };
    "8.2": {
        desktop: {
            "letter-spacing": string;
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
        };
        mobile: {
            "letter-spacing": string;
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
        };
    };
    "8.3": {
        desktop: {
            "letter-spacing": string;
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
        };
        mobile: {
            "letter-spacing": string;
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
        };
    };
    h2overline: {
        desktopLg: {
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        desktop: {
            "letter-spacing": string;
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
        };
        mobile: {
            "letter-spacing": string;
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
        };
    };
    h3overline: {
        desktopXxl: {
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        desktopXl: {
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        desktopLg: {
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        desktop: {
            "letter-spacing": string;
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
        };
        mobile: {
            "letter-spacing": string;
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
        };
    };
    lineLengthWideParagraph: {
        desktop: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        mobile: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
    };
    lineLengthWideLeadText: {
        desktop: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        mobile: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
    };
    lineLengthWideCopyText: {
        desktop: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        mobile: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
    };
    lineLengthWideHelperText: {
        desktop: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
        };
        mobile: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
        };
    };
    lineLengthWideInfoText: {
        desktop: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        mobile: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
    };
    lineLengthWideH4: {
        desktop: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        mobile: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
    };
    lineLengthWideH5: {
        desktop: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        mobile: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
    };
    lineLengthWideH6: {
        desktop: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
        mobile: {
            "font-family": string;
            "font-weight": string;
            "font-size": string;
            "line-height": string;
            "letter-spacing": string;
        };
    };
    ".1": {
        desktop: {
            "font-family": string;
            "font-weight": string;
        };
        mobile: {
            "font-family": string;
            "font-weight": string;
        };
    };
    ".2": {
        desktop: {
            "font-family": string;
            "font-weight": string;
        };
        mobile: {
            "font-family": string;
            "font-weight": string;
        };
    };
    ".3": {
        desktop: {
            "font-family": string;
            "font-weight": string;
        };
        mobile: {
            "font-family": string;
            "font-weight": string;
        };
    };
};
declare const aliases: {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    h1Thin: string;
    h2Thin: string;
    h3Thin: string;
    h4Thin: string;
    h5Thin: string;
    h6Thin: string;
    textLead: string;
    textSignal: string;
    textOverline: string;
    textCopy: string;
    textCopyStrong: string;
    textLabelInteractive: string;
    textInfo: string;
    textInfoStrong: string;
    textFootnote: string;
    textDisclaimer: string;
    textCaption: string;
    textLabelSm: string;
    textHelper: string;
    textError: string;
    textBadge: string;
    textBadgeLarge: string;
    overlineH2: string;
    overlineH3: string;
    lineLengthWideParagraph: string;
    lineLengthWideLeadText: string;
    lineLengthWideCopyText: string;
    lineLengthWideHelperText: string;
    lineLengthWideInfoText: string;
    lineLengthWideH4: string;
    lineLengthWideH5: string;
    lineLengthWideH6: string;
};
/**
 * Include Styling for typography
 * @param alias name or digit code of the typography
 * @param breadth determines the max-width
 * @param includeExclude object which has the css-properties as keys, and booleans as values. Entries with true are
 * included, entries with false are excluded. If there is no defined include, all css-properties are included
 *
 */
declare const styleTypo2: (alias: keyof typeof aliases | keyof typeof typo, breadth?: "narrow" | "wide" | "none", includeExclude?: IHasCssProperties) => string;

declare const bu: (size: number, additionalPxSize?: number) => string;
declare const buRem: (size: number, sizePx?: number, additionalPxSize?: number) => string;

declare const visuallyHidden: string;
declare const visuallyShown: string;

declare enum zIndex {
    /** z-index: -1 */
    zHidden = -1,
    /** z-index: 0 */
    zBackground = 0,
    /** z-index: 10 */
    zContent = 10,
    /** z-index: 20 * */
    zAction = 20,
    /** z-index: 30 */
    zHeader = 30,
    /** should be 1338, but was/is wrongly calculated. */
    zDrawer = 1328,
    /** should be 1348, but was/is wrongly calculated. */
    zAboveDrawer = 1338,
    /** should be 1358, but was/is wrongly calculated. */
    zImportant = 1348
}

/** Prefix for components of lsg.shared [lsgs-xxxxx--] */
declare const lsgPre: string;
/** Prefix for legacy components of lsg.components (yet not wrapped from shared) [lsg-xxxxx--] */
declare const lsgPreComp: string;
/** Prefix for components of lsg.shared that are used globally (like Theme) [lsg-xxxxx---] */
declare const lsgPreGlobal: string;

interface IThemePresentationProps extends IBasicPropsInternal {
    color?: "light" | "dark" | "medium" | "elevated" | "contrast" | "hover" | "brand";
    componentContext?: boolean;
    componentName?: string;
}
declare const getThemeChildrenClass: (color: IThemePresentationProps["color"], component?: string) => string;
declare const getThemeBackgroundClass: (color: IThemePresentationProps["color"], component?: string) => string;
declare const getThemeClass: (color: IThemePresentationProps["color"], component?: string) => string;

declare function registerContentIncludes(): void;

export { A11yMeaningfulLabel, Accordion, AccordionGroup, AccordionGroupStateful, AccordionStateful, ActionButton, ActionButtonGroup, ActionFlyout, ActionFlyoutItem, ActionGroup, ArticleList, ArticleListItem, ArticleStage, Autocomplete, Badge, BankingCard, BannerMessage, BarChart, BarDiagram, BarDiagramGroup, Box, Brandbar, BreadCrumbs, BreadCrumbsItem, Button, Cards, CardsCheckboxes, CardsCheckboxesCustomItem, CardsCustomItem, CardsRadios, CardsRadiosCustomItem, CardsSwitches, CardsSwitchesCustomItem, ChartInfoPosition, Checkbox, Chips, ChipsCheckboxes, ChipsDatePicker, ChipsItemAction, ChipsItemCheckbox, ChipsItemDismissible, ChipsItemRadio, ChipsRadios, ChipsSelect, CircleDiagram, CircleIconLink, ClickList, ClickListCheckboxes, ClickListCheckboxesItem, ClickListItem, ClickListMultiActions, ClickListMultiActionsItem, ClickListRadios, ClickListRadiosItem, Colors, ComplexTable, ComplexTableStateful, ContactModule, ContentInclude, CreditCard, DataTable, DataTableExpandableRow, DataTableFooter, DataTableLabel, DataTableRow, DataTableSelectionFooter, DatePicker, DateTextField, DescriptionList, DescriptionListRow, DetailPageHeader, DonutChart, Drawer, EyeCatcher, Feedback, Flyout, Footer, FooterMetabar, FooterNavigation, Footnote, FootnoteAnchor, FootnoteProvider, FormContainer, FormLink, GallerySlider, GallerySliderItem, Grid, GridColumn, GridRow, H1, H2, H3, H4, H5, H6, Headline, IAxis, IAxisOptions, IChartInfoListItem, IChartInfoListProps, IColumn$1 as IColumn, IDataTableProps, IDatePickerProps, IDonutChartDatapointPresentation, IDonutChartProps, ILine, ILineChartDataPoint, ILineChartTooltipOptions, INavigationTree, ITree, Icon, IconLink, IconLinkGroup, InfoList, InputGroup, JumpLinks, Layer, Layout, LineChart, Link, List, ListItem, LiveRegion, Localization_d as Localization, LoremIpsum, Metabar, NavigationBlock, NavigationUtils_d as NavigationUtils, NumberTextField, OnPageNavigation, OptionsTextField, Pagination, Paragraph, Picture, PortalHeader, ProcessPage, ProductStage, ProfileWidget, Radio, RadioGroup, Search, Section, Select, SideNavigationPage, SimpleFooter, SimpleHeader, SimpleTable, SkipLinks, Slider, SliderPagination, Snackbar, Spinner, Stage, StatusIndicator, Stepper, SupportedColors, Switch, Tab, Tabs, TabsStateful, TanArea, TanPanel, Teaser, TeaserGroup, TextField, TextHighlight, TextSlider, Theme, ThemeType, Thumbnail, TwoLineItem, lsgPreComp as UNSAFE_lsgComponentsCssPrefix, lsgPre as UNSAFE_lsgCssPrefix, lsgPreGlobal as UNSAFE_lsgGlobalCssPrefix, Upload, Video, Viewports, aliases, boxShadow01, boxShadow02, boxShadow03, boxShadowCard, boxShadowCardActive, boxShadowCardHover, breakPoints, bu, buRem, combineRefs, credit_card_business_credit_classic, credit_card_business_credit_premium, credit_card_business_debit, credit_card_classic, credit_card_corporate_credit_classic, credit_card_corporate_credit_premium, credit_card_debit, credit_card_gold, credit_card_premium, credit_card_prepaid, credit_card_virtual_debit, credit_card_young_visa, focusOutlineColor, focusOutlineInlineColor, focusOutlineInlineStyles, focusOutlineStyles, fragmentCount, fragmentMap, fragmentMapReverse, getLocaleDateFormat, getThemeBackgroundClass, getThemeChildrenClass, getThemeClass, getViewportMediaQuery, getViewportMediaQueryLgMin, getViewportMediaQueryMdMin, getViewportMediaQueryRange, getViewportMediaQuerySmMin, getViewportMediaQueryXlMin, getViewportMediaQueryXsExact, getViewportMediaQueryXxlMin, listShadowStyles, listShadowStylesFocus, listShadowStylesHover, registerContentIncludes, sectionMeasurements, setInitialViewportSize, styleHorizontalAlignment, styleMarginBottom, styleMarginBottomRem, styleMarginLeft, styleMarginRight, styleMarginRightRem, stylePreferMotion, stylePreferReducedMotion, styleThemes, styleThemes2, styleThemesGlobal, styleThemesGlobal2, styleTypo2, styleViewport, styleViewportLgMin, styleViewportMdMin, styleViewportRange, styleViewportSmMin, styleViewportXlMin, styleViewportXsExact, styleViewportXxlMin, typo, useBodyClickClose, useDwindle, useGridColumns, useLinkHover, useMenu, usePrevious, useResize, useScroll, useStickyY, useTransition2, useTransitionState, useUniqueId, useViewport, useViewportListener, useViewportRange, viewports, visuallyHidden, visuallyShown, zIndex };

export declare const MINDATE: Date;
export declare const MAXDATE: Date;
/**
 * This returns dateFormats that are used in the current locale. Example for de locale:
 * full: 'EEEE, do MMMM, y',
 * long: 'do MMMM, y',
 * medium: 'd MMM, y',
 * short: 'dd.MM.y'
 */
export declare const getLocaleDateFormat: (_width: "full" | "long" | "medium" | "short") => string;
/**
 * This returns monthFormats that are used in the current locale.
 */
export declare const getLocaleMonthFormat: (_width: "full" | "long" | "medium" | "short") => string;
/**
 * This returns dayFormats that are used in the current locale. Example for de locale:
 * narrow: ['M', 'D', 'M', 'D', 'F', 'S', 'S'],
 * short: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
 * abbreviated: ['Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.','So.'],
 * wide: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag']
 * startsOnSunday: If set to true, Sunday [0] will be the first day, else Monday [1].
 */
export declare const getLocaleDays: (width: "narrow" | "short" | "abbreviated" | "wide", startsOnSunday: any) => any;
export declare const getLocaleMonth: (width: "narrow" | "short" | "abbreviated" | "wide") => string[];
/**
 * This automatically inserts seperators based on the current locale to the given value.
 * Example for de locale:
 *
 * value: 1
 *
 * return: 1
 *
 * value: 12
 *
 * return: 12.
 */
export declare const autoDateSeparator: (value: string, minDate: Date, maxDate: Date, dateFormat: any) => string;

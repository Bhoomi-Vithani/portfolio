'use strict';

var dateFns = require('date-fns');
var Localization = require('./Localization.js');

// @ts-strict-ignore
const MINDATE = new Date(100, 0, 1); // 01.01.100
const MAXDATE = new Date(9999, 11, 31); // 31.12.9999
/**
 * This returns dateFormats that are used in the current locale. Example for de locale:
 * full: 'EEEE, do MMMM, y',
 * long: 'do MMMM, y',
 * medium: 'd MMM, y',
 * short: 'dd.MM.y'
 */
const getLocaleDateFormat = _width => Localization.formats.date.toLocaleLowerCase().replace("mm", "MM");
/**
 * This returns monthFormats that are used in the current locale.
 */
const getLocaleMonthFormat = _width => Localization.formats.dateMonth.toLocaleLowerCase().replace("mm", "MM");
/**
 * This returns dayFormats that are used in the current locale. Example for de locale:
 * narrow: ['M', 'D', 'M', 'D', 'F', 'S', 'S'],
 * short: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
 * abbreviated: ['Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.','So.'],
 * wide: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag']
 * startsOnSunday: If set to true, Sunday [0] will be the first day, else Monday [1].
 */
const getLocaleDays = (width, startsOnSunday) => {
  let weekDays;
  if (startsOnSunday) {
    weekDays = [0, 1, 2, 3, 4, 5, 6].map(i => Localization.formats.dateLocale.localize.day(i, {
      width
    }));
  } else {
    weekDays = [1, 2, 3, 4, 5, 6, 0].map(i => Localization.formats.dateLocale.localize.day(i, {
      width
    }));
  }
  return weekDays;
};
const getLocaleMonth = width => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => Localization.formats.dateLocale.localize.month(i, {
  width
}));
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
// eslint-disable-next-line @typescript-eslint/default-param-last
const autoDateSeparator = (value, minDate = MINDATE, maxDate = MAXDATE, dateFormat) => {
  /* get date-fns locale short format as short format will always be the way to input a date inside a datepicker input
     short format example in de locale: "dd.MM.y" */
  const localeFormat = dateFormat === "month" ? getLocaleMonthFormat() : getLocaleDateFormat();
  const possibleSeperators = ["-", "/", "."]; // please add if there are more
  const currentSeparator = possibleSeperators.find(sep => localeFormat.includes(sep));
  /* because date-fns' locale may only have one y as year format, build a "fullFormat" with 4 ys as we'll need the length later */
  const fullFormat = localeFormat.toLowerCase().split(currentSeparator).map(block => block.replace(" ", "")) // there are spaces within some date formats - just remove those
  .map(block => block.includes("y") && block.length !== 4 ? "yyyy" : block).join(currentSeparator);
  /* get with just one one letter so we know the order */
  const dmyOrder = fullFormat.split(currentSeparator).map(block => block[0]);
  /* just some short helper functions to help working with the array - self explanatory I guess */
  const before = val => val.substr(0, val.length - 1);
  const last = val => val[val.length - 1];
  /* add leading zeros until string has given length */
  const leadingZeros = (val, length) => val.length === length ? val : `${"0".repeat(length - val.length)}${val}`;
  /* takes value as string, min and max numbers and length, keeps given value within min and max and returns it with leading zeros in given length */
  const valMinMax = (val, min, max, length) => leadingZeros(Math.min(Math.max(parseInt(val, 10), min), max).toString(), length);
  /* getMaxValidDay checks if the given day is a possible value in the given month and - if given - in the given year (otherwise uses year 2000 as fallback) */
  const getMaxValidDay = blocks => {
    const year = blocks[dmyOrder.indexOf("y")] || "2000"; // use year 2000 as fallback because it's a leap-year
    const month = blocks[dmyOrder.indexOf("m")] || "13"; // month is always +1 (dunno why)
    const day = blocks[dmyOrder.indexOf("d")];
    const maxDay = dateFns.getDaysInMonth(new Date(parseInt(year, 10), parseInt(month, 10) - 1)); // get count of days in month (and year)
    return valMinMax(day, 1, maxDay, 2); // if input day is bigger than max, return max, else input
  };
  /* there are two times when we can evaluate if the date is valid so far:
   * - after the first 2 blocks are entered (we take year 2000 as fallback, because all months have max length)
   * - after the whole date has been entered
   * at these times we might alter the whole date again
   * makeValidDate checks if the blocks are valid
   * afterwards the blocks will be joined again using the currentSeparator
   */
  const makeValidDate = dateBlocks => {
    const lastSeperatorIndex = dateFormat === "month" ? 1 : 2;
    const newDate = dateBlocks.map((curr, i) => dmyOrder[i] === "d" && getMaxValidDay(dateBlocks) ||
    // if current block is day, get the maximum valid day in specified month/year
    dmyOrder[i] === "m" && valMinMax(curr, 1, 12, 2) ||
    // if current block is month, just make sure it is within 1 to 12
    curr.split("").filter(char => !possibleSeperators.includes(char)).join("") // just pass the year block - filter separators
    ).map((curr, i) => `${curr}${i !== lastSeperatorIndex ? currentSeparator : ""}`) // add Separator except after last block (i === 2)
    .join("");
    const parsedNewDate = newDate.length === fullFormat.length && dateFns.parse(newDate, localeFormat, new Date());
    const formattedMinDate = dateFns.format(minDate, localeFormat);
    const formattedMaxDate = dateFns.format(maxDate, localeFormat);
    return parsedNewDate && dateFns.isBefore(parsedNewDate, minDate) && formattedMinDate || parsedNewDate && dateFns.isAfter(parsedNewDate, maxDate) && formattedMaxDate || newDate;
  };
  /* tests the first char in a day/month block and returns value */
  const checkFirstChar = (val, pass, fill) => pass.test(last(val)) && val ||
  // if the last char of val passes, just continue with the new val
  fill.test(last(val)) && makeValidDate(`${before(val)}0${last(val)}`.split(currentSeparator)); // if the last char of val passes the fill test, fill the block with zeros and make a valid date again
  /* date formatting works also for each char sequentially
   * check first char - get whether its day or month from locale, test if value fits accordingly (0-3 for days, 0-1 for months)
   * check second char - get whether its day or month from locale, test if value fits accordingly
   * [...]
   */
  const getNewValue = val => {
    const dateBlocks = val.split(currentSeparator).filter(block => !!block); // get non empty d m y blocks as array ([dd, mm, yyyy])
    const dmy = fullFormat[val.length - 1]; // get the current character from fullFormat (d/m/y or separator)
    const lastSeparatorIndex = `${currentSeparator}${val}`.lastIndexOf(currentSeparator); // get the position of the last separator in value (also add one to the beginning, so there always is one)
    const pos = val.length - lastSeparatorIndex; // the position within the current d/m/y block - so 1 or 2 for dd/mm and 1 to 4 within yyyy
    if (possibleSeperators.includes(last(val))) {
      // user entered separator?
      if (pos === 1 || last(before(val)) === currentSeparator) {
        return before(val); // on first position of any block or if there is already a separator, revoke the input
      }
      return dmy === currentSeparator && val ||
      // if separator is allowed in this position, accept it
      makeValidDate(dateBlocks); // else fill block with leading zeros and go to next block
    }
    return dmy === "d" && pos === 1 && checkFirstChar(val, /[0-3]/, /[4-9]/) ||
    // user entered 0-3 as the first char within day block --> pass the new value through, user entered 4-9 --> fill the block with zeros and go to next block
    dmy === "m" && pos === 1 && checkFirstChar(val, /[0-1]/, /[2-9]/) ||
    // user entered 0-1 as the first char within month block --> pass the new value through, user entered 2-9 --> fill the block with zeros and go to next block
    dmy === "y" && pos !== 4 && val ||
    // just pass chars on position 1, 2, 3 of year
    (pos === 2 || pos === 4) && makeValidDate(dateBlocks); // after the last position of any block is entered, make a valid date again
  };
  /* only generate a new value if the new value is still within the length of the format - otherwise just ignore the last char */
  return value.length > fullFormat.length ? before(value) :
  /* go through every char in value and generate the new value based on the return of getNewValue
   * acc will always contain the full value up until the current step
   */
  value.split("").reduce((acc, curr) => getNewValue(`${acc}${curr}`) || acc, "");
};

exports.MAXDATE = MAXDATE;
exports.MINDATE = MINDATE;
exports.autoDateSeparator = autoDateSeparator;
exports.getLocaleDateFormat = getLocaleDateFormat;
exports.getLocaleDays = getLocaleDays;
exports.getLocaleMonth = getLocaleMonth;
exports.getLocaleMonthFormat = getLocaleMonthFormat;

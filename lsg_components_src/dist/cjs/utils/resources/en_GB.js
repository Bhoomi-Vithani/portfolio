'use strict';

var locale = require('date-fns/locale');

const en_GB = {
  formats: {
    date: "dd.mm.yyyy",
    dateMonth: "mm.yyyy",
    weekStartsOnSunday: false,
    dateLocale: locale.enGB,
    quotationMarkOpening: "‘",
    quotationMarkClosing: "’"
  },
  texts: {
    lsg: {
      component: {
        Datepicker: {
          placeholder: "DD.MM.YYYY",
          placeholderMonthYear: "MM.YYYY"
        }
      }
    }
  }
};

exports.en_GB = en_GB;

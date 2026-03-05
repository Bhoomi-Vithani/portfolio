'use strict';

var locale = require('date-fns/locale');

const en_US = {
  formats: {
    date: "mm/dd/yyyy",
    dateMonth: "mm/yyyy",
    weekStartsOnSunday: true,
    dateLocale: locale.enUS
  },
  texts: {
    lsg: {
      component: {
        Datepicker: {
          placeholder: "MM/DD/YYYY",
          placeholderMonthYear: "MM/YYYY"
        }
      }
    }
  }
};

exports.en_US = en_US;

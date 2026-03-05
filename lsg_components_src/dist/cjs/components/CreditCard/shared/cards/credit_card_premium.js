'use strict';

var MasterCardPremium_svg = require('../images/MasterCard-Premium.svg.js');
var Premium_jpg = require('../images/Premium.jpg.js');
var VisaPremium_svg = require('../images/Visa-Premium.svg.js');

const credit_card_premium = {
  cardImage: Premium_jpg,
  title: "Credit",
  visaFlag: VisaPremium_svg,
  masterCardFlag: MasterCardPremium_svg,
  isLightCard: false
};

exports.credit_card_premium = credit_card_premium;

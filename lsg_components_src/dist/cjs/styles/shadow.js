'use strict';

var colors = require('./colors.js');
var styled = require('./styled.js');
var units = require('./units.js');

const boxShadow01 = (theme, offset = 0) => styled.styled`0 ${units.bu(0.5)} ${units.bu(1)} ${units.bu(-0.25 + offset)} ${colors.Colors.shadow01[theme]}`;
const boxShadow02 = (theme, offset = 0) => styled.styled`0 ${units.bu(4)} ${units.bu(6)} ${units.bu(-2 + offset)} ${colors.Colors.shadow02[theme]}`;
const boxShadow03 = (theme, offset = 0) => styled.styled`0 ${units.bu(6)} ${units.bu(12)} ${units.bu(-3 + offset)} ${colors.Colors.shadow03[theme]}`;
const boxShadowCard = (theme, offset = 0) => styled.styled`0 ${units.bu(0.5)} ${units.bu(1)} ${units.bu(-0.25 + offset)} ${colors.Colors.shadowCard[theme]}`;
const boxShadowCardHover = (theme, offset = 0) => styled.styled`0 ${units.bu(4)} ${units.bu(6)} ${units.bu(-2 + offset)} ${colors.Colors.shadowCardHover[theme]}`;
const boxShadowCardActive = (theme, offset = 0) => styled.styled`0 ${units.bu(6)} ${units.bu(12)} ${units.bu(-3 + offset)} ${colors.Colors.shadowCardActive[theme]}`;

exports.boxShadow01 = boxShadow01;
exports.boxShadow02 = boxShadow02;
exports.boxShadow03 = boxShadow03;
exports.boxShadowCard = boxShadowCard;
exports.boxShadowCardActive = boxShadowCardActive;
exports.boxShadowCardHover = boxShadowCardHover;

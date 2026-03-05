'use strict';

const styled = (parts, ...values) => parts.map((part, i) => `${part}${values[i] || ""}`).join("");

exports.styled = styled;

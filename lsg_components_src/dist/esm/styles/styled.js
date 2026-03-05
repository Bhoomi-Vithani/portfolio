const styled = (parts, ...values) => parts.map((part, i) => `${part}${values[i] || ""}`).join("");

export { styled };

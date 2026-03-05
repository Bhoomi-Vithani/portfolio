import React from 'react';
export const SSRProvider = ({ children }: { children?: React.ReactNode }) => { return children; };
export const collectStyles = (styles: unknown) => styles;
export const getStyles = () => "";
export default SSRProvider;

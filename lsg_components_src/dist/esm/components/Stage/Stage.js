import * as React from 'react';
import { StageWrapper } from './shared/StageWrapper.js';

const Stage = ({ leadText, leadTextAs, headline = "", headlineAs = "h1", theme = "light", nextTheme = "light", ...props }) => (React.createElement(StageWrapper, { ...props, headlineAs: headlineAs, subline: leadText, sublineAs: leadTextAs, headline: headline, theme: theme, nextTheme: nextTheme }));
Stage.displayName = "Stage";

export { Stage };

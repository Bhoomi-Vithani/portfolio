import { Colors } from './colors.js';
import { styled } from './styled.js';
import { bu } from './units.js';

const boxShadow01 = (theme, offset = 0) => styled `0 ${bu(0.5)} ${bu(1)} ${bu(-0.25 + offset)} ${Colors.shadow01[theme]}`;
const boxShadow02 = (theme, offset = 0) => styled `0 ${bu(4)} ${bu(6)} ${bu(-2 + offset)} ${Colors.shadow02[theme]}`;
const boxShadow03 = (theme, offset = 0) => styled `0 ${bu(6)} ${bu(12)} ${bu(-3 + offset)} ${Colors.shadow03[theme]}`;
const boxShadowCard = (theme, offset = 0) => styled `0 ${bu(0.5)} ${bu(1)} ${bu(-0.25 + offset)} ${Colors.shadowCard[theme]}`;
const boxShadowCardHover = (theme, offset = 0) => styled `0 ${bu(4)} ${bu(6)} ${bu(-2 + offset)} ${Colors.shadowCardHover[theme]}`;
const boxShadowCardActive = (theme, offset = 0) => styled `0 ${bu(6)} ${bu(12)} ${bu(-3 + offset)} ${Colors.shadowCardActive[theme]}`;

export { boxShadow01, boxShadow02, boxShadow03, boxShadowCard, boxShadowCardActive, boxShadowCardHover };

'use strict';

var styled = require('./styled.js');

//  INFO: clip itself is declared as deprecated. The alternative element is clip-path. The option is supported partically in most browser
//  Nevertheless it is already introduced here with additional fall back to clip option.
const visuallyHidden = styled.styled`
    border: 0;
    @supports not (clip-path: inset(100%)){
        clip: rect(0 0 0 0);
    }
    @supports (clip-path: inset(100%)){
        clip-path: inset(100%);
    }
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
`;
const visuallyShown = styled.styled`
    clip: auto;
    height: auto;
    left: 0;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    top: 0;
    white-space: nowrap;
    width: auto;
`;

exports.visuallyHidden = visuallyHidden;
exports.visuallyShown = visuallyShown;

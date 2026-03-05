'use strict';

exports.LogLevel = void 0;
(function (LogLevel) {
  LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
  LogLevel[LogLevel["WARN"] = 1] = "WARN";
  LogLevel[LogLevel["INFO"] = 2] = "INFO";
  LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
})(exports.LogLevel || (exports.LogLevel = {}));
// 0, 1, 2, 3
// Can be accessed by importing @lsg/utils
// Set log-level with .setLogLevel( LogLevel.ERROR );
// Setting inital Log Level
let activeLogLevels = exports.LogLevel.INFO;
function warn(message, ...optionalParams) {
  if (activeLogLevels >= exports.LogLevel.WARN) {
    // tslint:disable-next-line:no-console
    console.warn(message, ...optionalParams);
  }
}

exports.warn = warn;

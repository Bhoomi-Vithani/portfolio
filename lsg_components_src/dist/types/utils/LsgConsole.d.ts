export declare enum LogLevel {
    ERROR = 0,
    WARN = 1,
    INFO = 2,
    DEBUG = 3
}
export declare function setLogLevel(logLevel: LogLevel): void;
export declare function debug(message?: any, ...optionalParams: any[]): void;
export declare function info(message?: any, ...optionalParams: any[]): void;
export declare function warn(message?: any, ...optionalParams: any[]): void;
export declare function error(message?: any, ...optionalParams: any[]): void;

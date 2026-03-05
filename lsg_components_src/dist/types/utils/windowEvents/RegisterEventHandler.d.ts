export declare const registerEventHandler: (eventType: string, runCallbacks: () => void) => {
    running: boolean;
    unsetRunning: () => boolean;
    unsubscribe: () => void;
};

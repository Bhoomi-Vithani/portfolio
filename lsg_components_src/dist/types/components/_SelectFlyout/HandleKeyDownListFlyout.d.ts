import { KeyboardEvent } from "react";
import { Key } from "../../utils/Keys";
import type { ISelectOptionPresentation } from "../_SelectOption/SelectOptionPresentation";
export interface ListlikeKeyDownHandler {
    event: KeyboardEvent<HTMLElement>;
    options: ISelectOptionPresentation[];
    focussedIndex: number;
    onFocusIndex: (value: number) => void;
    onChange: (value: number) => void;
    flyoutElement: HTMLElement;
    focussedElement: HTMLElement;
    onClose: (ev: any) => void;
    useTypeAhead: boolean;
    isTextInputSelect?: boolean;
}
export interface ListlikeKeyDownHandlerWrapper extends ListlikeKeyDownHandler {
    open: boolean;
    onOpen: () => void;
    additionalConfirmKeys?: Key[];
    afterAction?: () => void;
}
export declare function handleKeyDown({ event, options, focussedIndex, onChange, onFocusIndex, flyoutElement, focussedElement, onClose, useTypeAhead, isTextInputSelect, }: ListlikeKeyDownHandler): void;
export declare function handleKeydownListFlyout({ event, open, focussedIndex, options, onChange, onOpen, onClose, onFocusIndex, flyoutElement, focussedElement, afterAction, useTypeAhead, isTextInputSelect, }: ListlikeKeyDownHandlerWrapper): void;

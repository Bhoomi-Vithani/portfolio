import React, { MutableRefObject, Ref, RefObject } from "react";
import { IActionBaseProps } from "../../components/Action/shared/ActionPresentation";
import type { viewports } from "../../styles/viewport";
import { TransitionHandler } from "../transition";
import { Viewport } from "../windowEvents/ResizeEvents";
/** If the defaultId is defined, return the defaultId, else create an id with the prefix.
 * NOTE: use the defaultId in a correct way.
 * Example: BrandbarPresentation, logoId.
 * Wrong: const logoId = useUniqueId(`${hostClass}-logo`, `${id}-logo`);
 * (the defaultId is always truthy, even if id is undefined => undefined-logo)
 * Correct: const logoId = useUniqueId(`${hostClass}-logo`, id && `${id}-logo`);
 */
export declare function useUniqueId(prefix: string, defaultId?: string): string;
export declare function useMenu(menuItems: any[]): [
    {
        open: boolean;
        focussedIndex: number;
    },
    {
        setOpen: (open: boolean) => void;
        setFocussedIndex: (index: number) => void;
    },
    {
        buttonRef: MutableRefObject<HTMLElement>;
        flyoutRef: MutableRefObject<HTMLElement>;
        focussedRef: MutableRefObject<HTMLElement>;
        containerRef: MutableRefObject<HTMLElement>;
    },
    {
        handleMouseOver: (value: number) => void;
        onKeyDown: (event: any) => void;
    }
];
export declare function usePrevious<T>(value: T): T;
export declare function useDwindle(actionProps?: IActionBaseProps): [
    {
        hasKeyboardFocus: boolean;
        hasMouseHover: boolean;
        clicked: boolean;
    },
    {
        setHasKeyboardFocus: (focus: boolean) => void;
        setHasMouseHover: (hover: boolean) => void;
        setClicked: (clicked: boolean) => void;
    },
    {
        onMouseDown: (ev: React.MouseEvent<HTMLElement>) => void;
        onMouseUp: (ev: React.MouseEvent<HTMLElement>) => void;
        onMouseLeave: (ev: React.MouseEvent<HTMLElement>) => void;
        onKeyDown: (ev: React.KeyboardEvent<HTMLElement>) => void;
        onKeyUp: (ev: React.KeyboardEvent<HTMLElement>) => void;
    }
];
export declare function useLinkHover(actionProps?: Pick<IActionBaseProps, "a11yMeaningfulLabel" | "nonInteractive" | "disabled" | "loading" | "onMouseDown" | "onMouseUp" | "onMouseLeave" | "onTouchStart" | "onTouchEnd">): [
    {
        hasKeyboardFocus: boolean;
        hasMouseHover: boolean;
    },
    {
        setHasKeyboardFocus: (focus: boolean) => void;
        setHasMouseHover: (hover: boolean) => void;
    },
    {
        onMouseDown: (ev: React.MouseEvent<HTMLElement>) => void;
        onMouseUp: (ev: React.MouseEvent<HTMLElement>) => void;
        onMouseLeave: (ev: React.MouseEvent<HTMLElement>) => void;
    },
    {
        onTouchStart: (ev: React.TouchEvent<HTMLElement>) => void;
        onTouchEnd: (ev: React.TouchEvent<HTMLElement>) => void;
    }
];
/**
 * Hook that determines if the user's screen is within the specified range.
 *
 * @param min Minimum viewport (use undefined if you don't want to set a minumum limit)
 * @param max Maximum viewport (use undefined if you don't want to set a maximum limit)
 * @returns true if the user's screen is within the specified range
 */
export declare function useViewportRange(min?: viewports, max?: viewports): boolean;
export declare function useViewport(): Viewport;
export declare function useResize(onResize: () => void, deps?: any[]): void;
export declare function useScroll(onScroll: any, doInitialCall?: boolean, scrollObject?: Window | HTMLElement): void;
export declare function useViewportListener(callback: (viewportSize: string) => void, doInitialCall?: boolean): void;
export declare function useTransitionState(isVisible: any, duration: any): {
    transitionState: import("../transition").ITransitionState;
    transitionHandler: TransitionHandler;
};
export declare function combineRefs<T>(...externalRefs: Ref<T>[]): RefObject<T>;
interface IIntermediateState<T> {
    sequence?: T[];
    reducedAnimationSequence?: T[];
    initialState?: T;
}
export declare function useTransition2<T extends string>(enter: boolean, options: IIntermediateState<T>, onTransition?: (proceedCallback: any, _newState: any) => any): [T | "exited" | "entering" | "entered" | "exiting", () => void];
/** This hook executes a specific close function when the body is clicked.
 */
export declare function useBodyClickClose(ref: RefObject<any>, onClose: (ev: MouseEvent) => void, isActive: boolean, toggleElement?: HTMLElement): void;
/**
 * This hooks simulates the browsers native sticky functionality in y direction. Sometimes we cant use the css variant, so we can rely on JS with this hook.
 * @param containerRef element to stick to
 * @param stickyElement element to be sticky
 * @param shouldBeSticky determines if functionality should be applied. Is needed because we are not allowed to call hooks conditionally.
 */
export declare const useStickyY: (containerRef: MutableRefObject<HTMLElement>, stickyElement: MutableRefObject<HTMLElement>, shouldBeSticky?: boolean) => void;
export declare const useGridColumns: (deps?: any[]) => readonly [0 | 10 | 4 | 2 | 1 | 3 | 5 | 6 | 7 | 8 | 9 | 11 | 12, (element: HTMLElement | null) => void];
export {};

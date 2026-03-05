import type { Addon_DecoratorFunction } from "@storybook/types";
import { withAlignment } from "./withAlignment";
import { PARAM_KEY } from "./constants";

export const decorators: Addon_DecoratorFunction[] = [withAlignment];

export const globals = {
    [PARAM_KEY]: "",
};

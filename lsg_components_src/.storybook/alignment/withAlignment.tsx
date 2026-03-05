import type { Renderer, PartialStoryFn, StoryContext } from "@storybook/types";
import React from "react";

export const withAlignment = (StoryFn: PartialStoryFn, context: StoryContext<Renderer>) => {
    const { globals } = context;
    const alignment = globals.alignment || undefined;

    if (!alignment) {
        return StoryFn();
    }

    return (
        <div style={{ width: "100%" }}>
            {StoryFn({ args: { ...context.args, horizontalAlignment: alignment } }) as any}
        </div>
    );
};

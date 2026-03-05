import type { Renderer, PartialStoryFn, StoryContext } from "@storybook/types";
import React from "react";

import { Drawer, Footer, IconLink, IconLinkGroup, Paragraph, PortalHeader, ProcessPage, Icon } from "../../src";
import { HeaderContainerWrapper } from "../../src/components/_HeaderContainer/HeaderContainerWrapper";
import { brands_banks_commerzbank } from "@lsg/icons";

export const withPageLayout = (StoryFn: PartialStoryFn, context: StoryContext<Renderer>) => {
    const { globals } = context;
    const pageLayout = globals.pageLayout || undefined;

    if (pageLayout === "drawer") {
        return (
            <Drawer open={true}>
                <HeaderContainerWrapper
                    width={"layer"}
                    topLeft={
                        <IconLinkGroup>
                            <IconLink label={"Drawer"} />
                        </IconLinkGroup>
                    }
                    position={"sticky"}
                />
                {StoryFn() as any}
            </Drawer>
        );
    }

    if (pageLayout === "portal") {
        return (
            <>
                <PortalHeader
                    navigationTree={[]}
                    navigationAriaLabel={"Navigation"}
                    menuFlyoutAriaLabel={"Menu"}
                    isSticky={true}
                />
                {StoryFn()}
                <Footer>
                    <Icon icon={brands_banks_commerzbank} color={"primary-1"} variant={"solid"} size={"medium"} />
                    <Paragraph>Footer</Paragraph>
                </Footer>
            </>
        );
    }

    if (pageLayout === "process") {
        return <ProcessPage navigationAriaLabel={"Navigation"}>{StoryFn() as any}</ProcessPage>;
    }

    return StoryFn();
};

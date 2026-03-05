import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
import { AccordionGroup } from "../AccordionGroup";
import { AccordionStateful } from "./AccordionStateful";
interface IAccordionProps extends IBasicProps {
    /** Title of the Accordion. */
    title: React.ReactNode;
    /** Alternative HTML tag for title. */
    titleAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | string;
    /** Content of Accordion is visible? */
    isOpen?: boolean;
    /** OnChange will be called when Accordion opens/closes. */
    onChange?: (open: boolean, id: string, ev: React.SyntheticEvent<Element>) => void;
    /** KeyDown function that will be called when pressing a key while the Accordion Header is focused. */
    onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
    /** This prop is overridden for accordions that are direct children of an <AccordionGroup />. If true, the
     * Accordion renders as <dh /> and <dt /> elements, otherwise as <div /> elements. Set to true, if Accordions are
     * inside a <dl /> element. */
    asDescriptionItems?: boolean;
}
declare const Accordion: {
    ({ titleAs, ...props }: IAccordionProps): React.JSX.Element;
    displayName: string;
    Stateful: typeof AccordionStateful;
    Group: typeof AccordionGroup;
};
export { Accordion, IAccordionProps };

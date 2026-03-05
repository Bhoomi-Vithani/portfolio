import { ReactNode } from "react";
export interface IBasicProps {
    /** The unique id of the element */
    id?: string;
    /** Custom CSS classes that should be applied */
    className?: string;
    /** Inner components or text that should be displayed */
    children?: ReactNode;
}

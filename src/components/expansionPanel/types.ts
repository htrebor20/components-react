import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";

export type ExpansionPanelProps = {
    label: string;
    icon?: IconProp;
    isExpanded: boolean;
    children?: ReactNode;
}
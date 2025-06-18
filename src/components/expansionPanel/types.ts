import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";

type FunctionExpansionPanel = ()=> void 

export type ExpansionPanelProps = {
    label: string;
    icon?: IconProp;
    isExpanded: boolean;
    children?: ReactNode;
    functionExpansionPanel?: FunctionExpansionPanel
}
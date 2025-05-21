import type { ReactNode } from "react";

type CardState = "default" | "hover" | "disabled" 

export type CardProps = {
    children?: ReactNode;
    state?: CardState;
}
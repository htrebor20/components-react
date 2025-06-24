import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ButtomProps } from "../button/types";

type ChipStyles = "primary" | "secondary" | "orange" | "purple"

type Size = "m" | "s"

type Shapes = "rounded" | "squared"

export type ChipProps = {
    chipStyle?: ChipStyles;
    label?: string;
    icon?: IconProp;
    size?: Size;    
    shapes?:Shapes;
    isLoading?:boolean;
    button?: ButtomProps;
    isActive?: boolean;
}

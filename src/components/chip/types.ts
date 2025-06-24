import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ButtonProps } from "../button/types";

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
    onClose?: Pick<ButtonProps, 'onClick' >
    onClick?:ButtonProps['onClick'] 
    isActive?: boolean;
}

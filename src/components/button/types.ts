import type { IconProp } from "@fortawesome/fontawesome-svg-core";

type ButtonStyles = "primary" | "secondary" | "ghost" | "danger"

type Size = "xs" | "m" | "s"

export type ButtomProps = {
    buttonStyle?: ButtonStyles;
    label?: string;
    isDisabled?: boolean;
    isLoading?: boolean;
    icon?: {
        start?: IconProp;
        end?: IconProp;
    }
    size?: Size;
}





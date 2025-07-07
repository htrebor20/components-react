import { ReactNode } from "react";
import { ButtonProps } from "../button/types";

type Size =  "s" | "m"| "l" | "xl" 

export type ModalProps = {
    title:string;
    childern?: ReactNode    
    closeButton:boolean
    primaryButton?:ButtonProps
    secundaryButton?:ButtonProps
    size?: Size
    onClose?: ()=> void
} 

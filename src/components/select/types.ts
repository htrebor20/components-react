type OptionsSelect = { value: string, label: string}

export type SelectTypeProps ={
    label?:string
    input?: string
    placeholder?: string
    isClearable?: boolean;
    helperText?:string
    optionsSelect?: OptionsSelect[]  
}


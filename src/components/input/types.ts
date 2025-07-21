export type InputProps = {
    label: string
    placeHolder?: string
    helperText?: string
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export type DatePickerProps = {
  label?: string;
  placeholder?: string;
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
  helperText?: string;
  required?: boolean;
};

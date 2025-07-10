import './select.sass'
import { SelectTypeProps } from './types'
import SelectReactComp from 'react-select'

function Select({ label, placeholder, isClearable = true, helperText , optionsSelect, onChange }: SelectTypeProps) {
    return (
        <div className="select-wrapper">
            {label && <label>{label}</label>}
            <SelectReactComp
                options={optionsSelect}
                isClearable={isClearable}
                placeholder={placeholder}
                onChange={(selectedOption) => {
                    if (onChange) {
                        onChange(selectedOption ? selectedOption.value : null);
                    }
                }}
                styles={{
                    control: (base) => ({
                        ...base,
                        minHeight: '20px',
                        fontSize: '8px',
                    }),
                    input: (base) => ({
                        ...base,
                        margin: '0px',
                    }),
                    dropdownIndicator: (base) => ({
                        ...base,
                        padding: '0 4px',
                    }),
                    clearIndicator: (base) => ({
                        ...base,
                        padding: '0 5px',
                    }),
                }}
            />
            {helperText && <small>{helperText}</small>}
        </div>
    )
}

export default Select

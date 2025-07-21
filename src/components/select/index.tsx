import './select.sass'
import { OptionsSelect, SelectTypeProps } from './types'
import SelectReactComp from 'react-select'

function Select({ label, placeholder, isClearable = true, helperText, optionsSelect, value = null, onChange, }: SelectTypeProps) {


    return (
        <div className="select-wrapper">
            {label && <label>{label}</label>}
            <SelectReactComp
                options={optionsSelect}
                isClearable={isClearable}
                placeholder={placeholder}
                value={value || null}
                onChange={(selectedOption) => {
                    if (onChange) {
                        onChange(selectedOption ? selectedOption : null);
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

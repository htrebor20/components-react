import { options } from './constants'
import './select.sass'
import { SelectTypeProps } from './types'
import SelectReactComp from 'react-select'

function Select({ label, placeholder, isClearable = true, helperText }: SelectTypeProps) {
    return (
        <div className="select-wrapper">
            {label && <label>{label}</label>}
            <SelectReactComp
                options={options}
                isClearable={isClearable}
                placeholder={placeholder}
                styles={{
                    control: (base) => ({
                        ...base,
                        minHeight: '20px',
                        fontSize: '8px',
                        padding: '0 2px',
                    }),
                    input: (base) => ({
                        ...base,
                        margin: '0px',
                        padding: '0px',
                    }),
                    dropdownIndicator: (base) => ({
                        ...base,
                        padding: '0 4px',
                    }),
                    clearIndicator: (base) => ({
                        ...base,
                        padding: '0 4px',
                    }),
                }}
            />
            {helperText && <small>{helperText}</small>}
        </div>
    )
}

export default Select

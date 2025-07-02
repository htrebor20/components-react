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
            />
            {helperText && <small>{helperText}</small>}
        </div>
    )
}

export default Select

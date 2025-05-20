import type { ButtomProps } from './types';
import './button.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Button({ buttonStyle = "primary", isDisabled, label, isLoading, size = "s", icon }: ButtomProps) {

    const btnClass = `button--${buttonStyle}`
    const sizeClass = `size--${size}`
    const isDisableClass = isDisabled?"isDisabled":"" 
    const loadingClass = isLoading?"isLoading":"" 
    console.log(btnClass)
    console.log(icon)


    return (
        <button disabled={true} className={`${btnClass} ${loadingClass} ${isDisableClass} ${sizeClass}`}>           
            {isLoading && <FontAwesomeIcon icon={faSpinner} spin />}
            {!isLoading && <>
                {icon?.start && <FontAwesomeIcon icon={icon.start} />}
                {label}
                {icon?.end && <FontAwesomeIcon icon={icon.end} />}
            </>}

        </button>
    )
}

export default Button

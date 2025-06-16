import type { ButtomProps } from './types';
import './button.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Button({ buttonStyle = "primary", isDisabled, label, isLoading, size = "s", icon, onClick }: ButtomProps) {
    const btnClass = `button--${buttonStyle}`
    const sizeClass = `size--${size}`
    const isDisableClass = isDisabled ? "isDisabled" : ""
    const loadingClass = isLoading ? "isLoading" : ""

    return (
        <button data-testid="button-wraper" onClick={onClick} disabled={isDisabled} className={`${btnClass} ${loadingClass} ${isDisableClass} ${sizeClass}`}>
            {isLoading && <FontAwesomeIcon icon={faSpinner} spin />}
            {!isLoading && <>
                {icon?.start && <FontAwesomeIcon icon={icon.start} />}
                {label && <span>{label}</span>}
                {icon?.end && <FontAwesomeIcon icon={icon.end} />}
            </>}
        </button>
    )
}

export default Button

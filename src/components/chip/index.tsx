import { ChipProps } from "./types"
import './chip.sass'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner, faTimesSquare, faXmark } from '@fortawesome/free-solid-svg-icons';
import Button from "../button"

function Chip({ chipStyle = "primary", label, icon, size = "m", shapes = "rounded", isLoading, button }: ChipProps) {

    return (
        <div data-testid="chip-wraper" className={`chip--${chipStyle} size--${size} shapes--${shapes}`} >
            {icon && <FontAwesomeIcon icon={icon} />}
            {label}
            {isLoading && <FontAwesomeIcon icon={faSpinner} spin />}
            {button?.onClick && <Button
                onClick={button?.onClick}
                buttonStyle="special"
                icon={{ start: faXmark }}
                size="xs"

            />}
        </div>
    )
}
export default Chip


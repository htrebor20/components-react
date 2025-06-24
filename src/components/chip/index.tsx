import { ChipProps } from "./types"
import './chip.sass'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner, faTimesSquare, faXmark } from '@fortawesome/free-solid-svg-icons';
import Button from "../button"

function Chip({ chipStyle = "primary", label, icon, size = "m", shapes = "rounded", isLoading, onClose, onClick, isActive = false }: ChipProps) {
  return (
    <div
      data-testid="chip-wrapper"
      className={`chip--${chipStyle} size--${size} shapes--${shapes} ${isActive ? 'active' : ''}`}
      onClick={onClick} 
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {label}
      {isLoading && <FontAwesomeIcon icon={faSpinner} spin />}
      {onClose && (
        <Button
          onClick={onClose.onClick}
          buttonStyle="special"
          icon={{ start: faXmark }}
          size="xs"
        />
      )}
    </div>
  );
}

export default Chip


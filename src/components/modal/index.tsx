import { ModalProps } from './types'
import './modal.sass'
import Button from '../button'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


function Modal({ title, childern, closeButton, primaryButton, secundaryButton, size = "m", onClose }: ModalProps) {

    return (
        <div className='modal-overlay'>

            <div className={`modal-wrapper size-${size}`}  >
                <div className='top-section'>
                    <span>
                        {title}
                    </span>
                    {closeButton && onClose &&
                        <Button
                            onClick={onClose}
                            icon={{ start: faXmark }}
                            buttonStyle='ghost'
                        />
                    }
                </div>
                <div className='middle-section'>
                    {childern}
                </div>
                <div className='lower-section'>
                    <div className='lower-left-section'>
                        <div>
                            checkBox
                        </div>
                        <div>
                            ExternalLink
                        </div>
                    </div>
                    <div className='lower-right-section'>
                        <div>
                            {secundaryButton &&
                                <Button onClick={() => { }}
                                    label={secundaryButton.label}
                                    buttonStyle={secundaryButton.buttonStyle}
                                />
                            }
                        </div>
                        <div>
                            {primaryButton &&
                                <Button onClick={() => { }}
                                    label={primaryButton.label}
                                    buttonStyle={primaryButton.buttonStyle
                                    }
                                />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './expansionPanel.sass'
import { ExpansionPanelProps } from './types'
import { useState } from 'react'

function ExpansionPanel({ icon, label, isExpanded, children }: ExpansionPanelProps) {
    const [open, setOpen] = useState(isExpanded);

    const toggleOpen = () => {
        if (children) {
            setOpen(!open);
        }
    };
    return (
        <div className='expansionPanel' >
            <div className='expansionPanel-header' onClick={toggleOpen}>
                <div className='expansionPanel-header-left'>
                    {icon && <FontAwesomeIcon icon={icon} />}
                    <span>{label}</span>
                </div>
                {children && (
                    <FontAwesomeIcon
                        icon={faAngleRight}
                        className={open ? 'rotated' : ''}
                    />
                )}
            </div>
            {open && children && (
                <div className='expansionPanel-children'>
                    {children}
                </div>
            )}
        </div>
    );
}

export default ExpansionPanel;
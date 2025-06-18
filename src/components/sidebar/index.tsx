import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClover, faToggleOff } from '@fortawesome/free-solid-svg-icons'
import { SidebarProps } from './types'
import ExpansionPanel from '../expansionPanel'
import './sidebar.sass'

function SideBar({ listItem }: SidebarProps) {

    return (
        <div className='side-bar'>
            <div className='side-bar-header'>
                <div className='stile-icon'>
                    <FontAwesomeIcon icon={faClover} />
                    <label> Robert</label>
                </div>
                <div className='disple-Toggle'>
                <FontAwesomeIcon icon={faToggleOff} />
                </div>
            </div>
            <div>
                {listItem.map((item, index) => (
                    <ExpansionPanel
                        key={index}
                        label={item.label}
                        icon={item.icon}
                        isExpanded={item.isExpanded}
                        children={item.children}
                        functionExpansionPanel={item.functionExpansionPanel}
                    />
                ))}
            </div>
        </div>
    )
}

export default SideBar
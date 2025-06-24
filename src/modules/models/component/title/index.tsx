import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilterCircleXmark, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import './title.sass'
import Chip from '../../../../components/chip'
import Button from '../../../../components/button'
import { icon } from '@fortawesome/fontawesome-svg-core'
import Input from '../../../../components/input'
import { useState } from 'react'

function TitleModel() {

    const [activeChip, setActiveChip] = useState<string>('Todos')

    return (

        <div className='title-wrapper' >
            <div className='title-header'>
                <span> Modelos contables</span>
                <FontAwesomeIcon icon={faCircleQuestion} />
            </div>
            <div className='header-content'>
                <div className='chip-wrapper'>
                    <Chip
                        label='Todos'
                        chipStyle='secondary'
                        size='s'
                        isActive={activeChip === 'Todos'}
                        button={{ onClick: () => setActiveChip('Todos') }}
                    />
                    <Chip
                        label='Produccion'
                        chipStyle='secondary'
                        size='s'
                        isActive={activeChip === 'Produccion'}
                        button={{ onClick: () => setActiveChip('Produccion') }}
                    />
                    <Chip
                        label='Prueba'
                        chipStyle='secondary'
                        size='s'
                        isActive={activeChip === 'Prueba'}
                        button={{ onClick: () => setActiveChip('Prueba') }}
                    />
                    <Chip
                        label='Borrador'
                        chipStyle='secondary'
                        size='s'
                        isActive={activeChip === 'Borrador'}
                        button={{ onClick: () => setActiveChip('Borrador') }}
                    />

                </div>
                <div className='header-content-right'>

                    <Input />

                    <Button onClick={() => { }} buttonStyle='secondary' icon={{ start: faFilterCircleXmark }} />
                    <Button onClick={() => { }} buttonStyle='primary' label='Crear Modelo' />
                </div>
            </div>
        </div>
    )
}

export default TitleModel
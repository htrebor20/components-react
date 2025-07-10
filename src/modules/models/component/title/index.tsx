import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilterCircleXmark, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import './title.sass'
import Chip from '../../../../components/chip'
import Button from '../../../../components/button'
import { useState } from 'react'
type GenderType = 'todos' | 'female' | 'male' | 'genderless' | 'unknown';
import useFilterStore from '../../../../stores/store'
import Modal from '../../../../components/modal'
import Table from '../../../../components/table'
import { tableData } from './constants'
import { useNavigate } from 'react-router-dom';

function Title() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { gender, setGender } = useFilterStore()
    const navigate = useNavigate();

    const chips: GenderType[] = ['todos', 'female', 'male', 'genderless', 'unknown'];

    return (
            <div className='title-wrapper' >
                <div className='title-header'>
                    <span> Modelos contables</span>
                    <FontAwesomeIcon icon={faCircleQuestion} />
                </div>
                <div className='header-content'>
                    <div className='chip-wrapper'>
                        {chips.map((label) => (
                            <Chip
                                key={label}
                                label={label}
                                chipStyle='secondary'
                                size='s'
                                onClick={() => setGender(label)}
                                isActive={gender === label}
                            />
                        ))}
                    </div>
                    <div className='header-content-right'>
                        <Button onClick={() => setIsModalOpen(true)} buttonStyle='secondary' icon={{ start: faFilterCircleXmark }} />
                        <Button onClick={() => navigate('/models/create')} buttonStyle='primary' label='Crear Modelo' />
                    </div>
                </div>
                {isModalOpen &&
                    <Modal
                        title='Titulo'
                        closeButton={true}
                        onClose={() => setIsModalOpen(false)}
                        childern={<Table content={tableData.content} dataHead={tableData.dataHead} />}
                        primaryButton={{ onClick: () => { }, buttonStyle: 'primary', label: "enviar" }}
                        secundaryButton={{ onClick: () => { }, buttonStyle: 'secondary', label: "cancelar" }}
                        size='m'
                    />
                }
            </div>
    )
}
export default Title
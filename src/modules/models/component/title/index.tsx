import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilterCircleXmark, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import './title.sass'
import Chip from '../../../../components/chip'
import Button from '../../../../components/button'
import Input from '../../../../components/input'
import { useState } from 'react'
type GenderType = 'todos' | 'female' | 'male' | 'genderless' | 'unknown';
import useFilterStore from '../../../../stores/store'

function Title() {
    const { gender, setGender } = useFilterStore()

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
                    <Input />

                    <Button onClick={() => { }} buttonStyle='secondary' icon={{ start: faFilterCircleXmark }} />
                    <Button onClick={() => { }} buttonStyle='primary' label='Crear Modelo' />
                </div>
            </div>
        </div>
    )
}

export default Title
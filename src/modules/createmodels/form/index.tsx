import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormProps } from './types';
import Select from '../../../components/select';
import Input from '../../../components/input';
import './form.sass'
import { optionsGender, optionsState } from './constans';
import DatePicker from '../../../components/dataPicker';

function Form({ }: FormProps) {
    const [startDate, setStartDate] = useState<Date | null>(null);

    return (
        <div className='form-wrapper'>
            <div className='title-wrapper'>
                <h1> 1 Configuracion general</h1>
            </div>
            <div>
                <form>
                    <div className='form-content'>
                        <div className='form-right'>
                            <Input label='Nombre del personaje' />
                            <Input label='Apellido del personaje' />
                            <DatePicker
                                label="Fecha de inicio contabilización"
                                placeholder="Seleccionar"
                                selectedDate={startDate}
                                onChange={(date) => setStartDate(date)}
                                required
                            />
                        </div>
                        <div className='form-left'>
                            <Select
                                label='Genero'
                                optionsSelect={optionsGender}
                            />
                            <Select
                                label='Estado'
                                optionsSelect={optionsState}
                            />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default Form



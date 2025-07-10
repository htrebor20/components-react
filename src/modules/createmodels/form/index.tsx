import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Select from '../../../components/select';
import Input from '../../../components/input';
import './form.sass'
import { optionsGender, optionsState } from './constans';
import DatePicker from '../../../components/dataPicker';
import Card from '../../../components/card';
import Button from '../../../components/button';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

type FormData = {
    firstName: string;
    lastName: string;
    gender: string;
    state: string;
    startDate: Date | null;
};


function Form() {
    const { register, handleSubmit, setValue } = useForm<FormData>();
    const [startDate, setStartDate] = useState<Date | null>(null);

    const onSubmit: SubmitHandler<FormData> = async (data) => {
    const fullData = { ...data, startDate: startDate, };

        console.log('Formulario enviado:', fullData);

        try {
            const response = await fetch('https://rickandmortyapi.com/api/fake-endpoint', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(fullData),
            });

            const result = await response.json();
            console.log('Respuesta de la API:', result);
        } catch (error) {
            console.error('Error al enviar a la API:', error);
        }
    };

    return (
        <div className='form-wrapper'>
            <Card>
                <div className='title-wrapper'>
                    <h1> 1 Configuracion general</h1>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-content'>
                            <div className='form-right'>
                                <Input label='Nombre del  personaje' {...register('firstName')} />
                                <Input label='Apellido del personaje' {...register('lastName')} />

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
                                    onChange={(value) => {
                                        if (value !== null) setValue('gender', value);
                                    }}
                                />
                                <Select
                                    label='Estado'
                                    optionsSelect={optionsState}
                                    onChange={(value) => {
                                        if (value !== null) setValue('state', value);
                                    }}

                                />
                            </div>
                        </div>

                        <div className='footer-wrapper'>
                            <Button onClick={() => { }} label='Salir' buttonStyle='ghost' />
                            <Button onClick={() => { }} label='Siguiente' icon={{ end: faChevronRight }} />

                            {/* ✅ Botón nativo que sí acepta "type" */}
                            <button type="submit">Enviar formulario</button>
                        </div>
                    </form>
                </div>
            </Card>
        </div>
    )
}
export default Form



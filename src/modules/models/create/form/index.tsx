import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Select from '../../../../components/select';
import './form.sass'
import { optionsGender, optionsState } from './constans';
import DatePicker from '../../../../components/dataPicker';
import Button from '../../../../components/button';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FormData } from '../../../../services/models/types';
import usePostForm, { useGetcharacterById } from '../../../../services/models';
import Card from '../../../../components/card';
import { useParams } from 'react-router-dom';

function Form() {
    const { register, handleSubmit, setValue } = useForm<FormData>();
    const [startDate, setStartDate] = useState<Date | null>(null);
    const postMutation = usePostForm();
    const { id } = useParams<{ id?: string }>();
    const characterId = id ? parseInt(id) : undefined;
    console.log("characterId ------- : ", characterId);

    const getByid = useGetcharacterById(characterId);

    console.log("getByid ------- : ", getByid.data);

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        const fullData = { ...data, startDate: startDate, };

        console.log('Formulario enviado:', fullData);

        postMutation.mutate(fullData, {
            onSuccess: (response) => {
                console.log(' Datos enviados con éxito:', response);
            },
            onError: (error: any) => {
                console.error(' Error al enviar datos:', error.message);
            }
        });
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
                                <label > Nombre</label>
                                <input  {...register('firstName')} />
                                <label > Apellidos</label>
                                <input  {...register('lastName')} />

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

                            <button type="submit">Enviar formulario</button>
                        </div>
                    </form>
                </div>
            </Card>
        </div>
    )
}
export default Form


